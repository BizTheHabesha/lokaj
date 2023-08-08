import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_TICKETS } from "../../utils/queries";
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
	const { loading, error, data } = useQuery(QUERY_TICKETS);
	const {
		isOpen: isOpenTicketModal,
		onOpen: onOpenTicketModal,
		onClose: onCloseTicketModal,
	} = useDisclosure();
	const [ticket, setTicket] = useState();
	const { colorMode } = useColorMode();

	const scheme = props.defaultScheme;
	const griditembg = colorMode === "light" ? "papayawhip" : "gray.800";

	const tickets = data?.tickets || [];

	const toast = useToast();
	console.log(data);
	console.log(error);
	console.log(loading);

	useEffect(() => {
		const id = uuid();
		const interval = setInterval(() => {
			if (loading && !toast.isActive(id)) {
				toast({
					id,
					title: "Struggling to fetch data",
					status: "error",
					position: "bottom",
					duration: 10000,
					isClosable: false,
				});
			} else if (!loading) {
				clearInterval(interval);
				toast.closeAll();
				toast({
					title: "Data loaded",
					status: "success",
					position: "bottom",
					variant: "left-accent",
				});
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [loading, toast]);

	const handleTicket = (ticketId) => {
		const ticket = useQuery(QUERY_TICKET, {
			variables: { ticketId },
		});
	};

	return (
		<PageContent active={1} defaultScheme={scheme}>
			<Grid
				templateRows="reapeat(3, 1fr)"
				templateColumns="repeat(12, 1fr)"
				gap={4}>
				<GridItem rowSpan={1} colSpan={3} />
				<GridItem rowSpan={1} colSpan={6} bg={griditembg}>
					<Input
						h={20}
						fontSize={"xx-large"}
						aria-placeholder="vehicle ticket number"
						errorBorderColor="red.300"
						className="car-log-ticket-input"
						variant="outline"
						placeholder="Ticket #"
					/>
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}></GridItem>

				<GridItem rowSpan={2} colSpan={4} bg={griditembg}>
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
								{loading
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
											return (
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
											);
									  })}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>

				<GridItem rowSpan={1} colSpan={4} bg={griditembg}>
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
											</Tr>
										);
									})}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>

				<GridItem rowSpan={2} colSpan={4} bg={griditembg}>
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
								{Array(10)
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
				</GridItem>

				<GridItem rowSpan={1} colSpan={4} bg={griditembg}>
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
								{Array(10)
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
				</GridItem>
			</Grid>

			{isOpenTicketModal ? (
				<TicketModal
					ticket={ticket}
					isOpen={isOpenTicketModal}
					onClose={onCloseTicketModal}
				/>
			) : null}
		</PageContent>
	);
}
export default CarLog;
