import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TICKETS, QUERY_TICKET } from "../../utils/queries";
import { ADD_TICKET } from "../../utils/mutations";
import PageContent from "../../components/PageContent";
import TicketModal from "../../components/TicketModal";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { DateTime } from "luxon";
import "./index.css";
import {
	GridItem,
	Grid,
	TableContainer,
	Table,
	TableCaption,
	Thead,
	Th,
	Tr,
	Td,
	Tbody,
	Tfoot,
	Input,
	Heading,
	Container,
	SkeletonText,
	useDisclosure,
	useColorMode,
	Skeleton,
	useToast,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";

function CarLog(props) {
	const {
		loading: allTicketsloading,
		error: allTicketserror,
		data: allTicketsdata,
		refetch: allTicktesRefetch,
	} = useQuery(QUERY_TICKETS, {
		pollInterval: 1000,
	});

	const {
		isOpen: isOpenTicketModal,
		onOpen: onOpenTicketModal,
		onClose: onCloseTicketModal,
	} = useDisclosure();
	const [ticket, setTicket] = useState();
	const [newTicket, setNewTicket] = useState(false); // [false, setNewTicket]
	const { colorMode } = useColorMode();
	const scheme = props.defaultScheme;
	const griditembg = colorMode === "light" ? "papayawhip" : "gray.800";

	const tickets = allTicketsdata?.tickets || [];
	const {
		loading: thisTicketLoading,
		error: thisTicketError,
		data: thisTicketData,
		refetch: thisTicketRefetch,
	} = useQuery(QUERY_TICKET, {
		variables: { ticketId: ticket?.ticketId },
	});

	const toast = useToast();

	useEffect(() => {
		const noDataId = uuid();
		const errorId = uuid();
		const interval = setInterval(() => {
			if (allTicketserror && !toast.isActive(errorId)) {
				toast({
					id: errorId,
					title: `Error: ${allTicketserror.message}`,
					status: "error",
					position: "bottom",
					duration: 10000,
					isClosable: false,
				});
			}
			if (allTicketsloading && !toast.isActive(noDataId)) {
				toast({
					id: noDataId,
					title: "Struggling to fetch data",
					status: "error",
					position: "bottom",
					duration: 10000,
					isClosable: false,
				});
			} else if (!allTicketsloading && !allTicketserror) {
				clearInterval(interval);
				toast.closeAll();
				toast({
					title: "Data loaded",
					status: "success",
					position: "bottom",
					variant: "left-accent",
				});
			} else {
				toast.closeAll();
				toast({
					title: "Something went wrong...",
					status: "error",
					position: "bottom",
				});
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [allTicketsloading, toast]);

	const handleTicket = async (e) => {
		e.preventDefault();
		const ticketId = e.target[0].value;
		if (ticketId.length !== 6)
			return toast({
				title: "Ticket number must be 6 digits",
				status: "warning",
				position: "bottom",
			});
		if (ticketId[0] !== "1" && ticketId[0] !== "5" && ticketId[0] !== "6") {
			return toast({
				title: "Ticket number must start with 1, 5, or 6",
				status: "warning",
				position: "bottom",
			});
		}
		console.log(ticketId);
		try {
			const res = await thisTicketRefetch({ ticketId: ticketId });
			if (res.data.ticket) {
				setNewTicket(false);
				setTicket(res.data.ticket);
			} else {
				setTicket({
					ticketId: ticketId,
					type: "DailySelf",
					status: "In",
				});
				setNewTicket(true);
			}
			onOpenTicketModal();
		} catch (err) {
			console.warn(err);
			toast({
				title: "An error occured. Try refreshing the page.",
				status: "error",
				position: "bottom",
			});
		}
	};

	const convertDate = (millis) => {
		console.log(`millis: ${millis}`);
		return millis;
		return DateTime.fromMillis(Number(millis)).toLocaleString(
			DateTime.DATE_MED
		);
	};

	return (
		<PageContent active={1} defaultScheme={scheme}>
			<Grid
				h={"90vh"}
				templateRows="reapeat(3W, 1fr)"
				templateColumns="repeat(12, 1fr)"
				gap={4}>
				<GridItem rowSpan={1} colSpan={3} />
				<GridItem rowSpan={1} colSpan={6} bg={griditembg}>
					<form onSubmit={handleTicket}>
						<Input
							h={20}
							fontSize={"xx-large"}
							aria-placeholder="vehicle ticket number"
							errorBorderColor="red.300"
							className="car-log-ticket-input"
							variant="outline"
							placeholder="Ticket #"
						/>
					</form>
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}></GridItem>

				<GridItem
					className="custom-scrollbar"
					overflow={"scroll"}
					overflowX={"hidden"}
					rowSpan={2}
					colSpan={4}
					bg={griditembg}
					h={"100%"}>
					<Heading pl={1} alignSelf={"center"}>
						Overnight
					</Heading>
					<TableContainer>
						<Table variant="striped" colorScheme={scheme}>
							<TableCaption>Overnight Parking</TableCaption>
							<Thead>
								<Tr>
									<Th>Ticket</Th>
									<Th>Name</Th>
									<Th>Room</Th>
									<Th>C/O Date</Th>
								</Tr>
							</Thead>
							<Tbody>
								{allTicketsloading
									? Array(10)
											.fill()
											.map((el) => {
												return (
													<Tr key={uuid()}>
														<Td>
															<Skeleton>
																111000
															</Skeleton>
														</Td>
														<Td>
															{" "}
															<Skeleton>
																Firstname{" "}
																Lastname
															</Skeleton>
														</Td>
														<Td>
															<Skeleton>
																111
															</Skeleton>
														</Td>
														<Td>
															<Skeleton>
																{DateTime.fromMillis(
																	new Date().setDate(
																		new Date().getDate() +
																			2
																	)
																).toLocaleString(
																	DateTime.DATE_SHORT
																)}
															</Skeleton>
														</Td>
													</Tr>
												);
											})
									: tickets.map((ticket) => {
											return ticket.type ===
												"OvernightValet" ||
												ticket.type ===
													"OvernightSelf" ? (
												<Tr
													key={ticket.ticketId}
													onClick={() => {
														setTicket(ticket);
														onOpenTicketModal();
													}}>
													<Td>{ticket.ticketId}</Td>
													<Td>
														{ticket.lastName},{" "}
														{ticket.firstName}
													</Td>
													<Td>{ticket.room}</Td>
													<Td>
														{convertDate(
															ticket.checkOut
														)}
													</Td>
												</Tr>
											) : null;
									  })}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>

				<GridItem h={"100%"} rowSpan={2} colSpan={4} bg={griditembg}>
					<TableContainer>
						<Container
							display={"flex"}
							justifyContent={"space-between"}>
							<Heading pl={1}>Requests</Heading>
						</Container>
						<Table variant="striped" colorScheme={scheme}>
							<TableCaption>Requests</TableCaption>
							<Thead>
								<Tr>
									<Th>Status</Th>
									<Th>Message</Th>
									<Th>Time</Th>
								</Tr>
							</Thead>
							<Tbody>
								{Array(10)
									.fill()
									.map((el) => {
										return (
											<Tr key={uuid()}>
												<Td>
													<Skeleton>Good</Skeleton>
												</Td>
												<Td>
													{" "}
													<Skeleton>
														112405
													</Skeleton>{" "}
												</Td>
												<Td>
													<Skeleton>10:44</Skeleton>
												</Td>
											</Tr>
										);
									})}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>

				<GridItem
					h={"100%"}
					className="custom-scrollbar"
					overflow={"scroll"}
					overflowX={"hidden"}
					rowSpan={2}
					colSpan={4}
					bg={griditembg}>
					<Heading pl={1} alignSelf={"center"}>
						Daily
					</Heading>
					<TableContainer>
						<Table variant="striped" colorScheme={scheme}>
							<TableCaption>Daily Parking</TableCaption>
							<Thead>
								<Tr>
									<Th>Ticket</Th>
									<Th>Name</Th>
									<Th>Room</Th>
									<Th>C/O Date</Th>
								</Tr>
							</Thead>
							<Tbody>
								{allTicketsloading
									? Array(10)
											.fill()
											.map((el) => {
												return (
													<Tr key={uuid()}>
														<Td>
															<Skeleton>
																111000
															</Skeleton>
														</Td>
														<Td>
															{" "}
															<Skeleton>
																Firstname{" "}
																Lastname
															</Skeleton>
														</Td>
														<Td>
															<Skeleton>
																111
															</Skeleton>
														</Td>
														<Td>
															<Skeleton>
																{DateTime.fromMillis(
																	new Date().setDate(
																		new Date().getDate() +
																			2
																	)
																).toLocaleString(
																	DateTime.DATE_SHORT
																)}
															</Skeleton>
														</Td>
													</Tr>
												);
											})
									: tickets.map((ticket) => {
											return ticket.type ===
												"DailySelf" ||
												ticket.type === "DailyValet" ? (
												<Tr
													key={ticket.ticketId}
													onClick={() => {
														setTicket(ticket);
														onOpenTicketModal();
													}}>
													<Td>{ticket.ticketId}</Td>
													<Td>
														{ticket.lastName},{" "}
														{ticket.firstName}
													</Td>
													<Td>{ticket.room}</Td>
													<Td>{ticket.checkOut}</Td>
												</Tr>
											) : null;
									  })}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>

				{/* <GridItem h={"100%"} rowSpan={1} colSpan={4} bg={griditembg}>
					<TableContainer>
						<Container
							display={"flex"}
							justifyContent={"space-between"}>
							<Heading pl={1}>History</Heading>
						</Container>
						<Table variant="striped" colorScheme={scheme}>
							<TableCaption>History</TableCaption>
							<Thead>
								<Tr>
									<Th>Ticket</Th>
									<Th>Runner</Th>
									<Th>Loc/Status</Th>
									<Th>Time</Th>
								</Tr>
							</Thead>
							<Tbody>
								{Array(5)
									.fill()
									.map((el) => {
										return (
											<Tr key={uuid()}>
												<Td>
													<Skeleton>111000</Skeleton>
												</Td>
												<Td>
													{" "}
													<Skeleton>
														Josh Smith
													</Skeleton>{" "}
												</Td>
												<Td>
													<Skeleton>111</Skeleton>
												</Td>
												<Td>
													<Skeleton>
														{DateTime.fromMillis(
															new Date().setDate(
																new Date().getDate() +
																	2
															)
														).toLocaleString(
															DateTime.DATE_SHORT
														)}
													</Skeleton>
												</Td>
											</Tr>
										);
									})}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem> */}
			</Grid>

			{isOpenTicketModal ? (
				<TicketModal
					newTicket={newTicket}
					ticket={ticket}
					isOpen={isOpenTicketModal}
					onClose={onCloseTicketModal}
				/>
			) : null}
		</PageContent>
	);
}
export default CarLog;
