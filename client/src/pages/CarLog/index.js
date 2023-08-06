import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";

function CarLog(props) {
	const griditembg = "papayawhip";
	const scheme = props.defaultScheme;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [ticket, setTicket] = useState();

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
				<GridItem rowSpan={1} colSpan={3} />

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
								{Array(10)
									.fill()
									.map((el) => {
										return (
											<Tr
												onClick={() => {
													setTicket({
														_id: "5e8848098100000100000001",
														ticketId: "111000",
														lastName: "Smith",
														firstName: "Josh",
														room: "111",
														lastRunner: "Biz",
														status: "In",
														type: "OvernightValet",
														damageCheck:
															"01212022001",
														checkIn:
															new Date().getTime(),
														checkOut:
															new Date().setDate(
																new Date().getDate() +
																	2
															),
														vehicleMake: "Toyota",
														vehicleModel:
															"Highlander",
														vehicleColor: "Silver",
														vehiclePlate: "ALDJ00",
														vehicleLocation: "X00",
														lastRunner: "Biz",
														status: "Out",
														type: "OvernightValet",
														damageCheck: "10100020",
														comments:
															"Use the included spoon to disengage the parking brake.",
													});
													onOpen();
												}}
												key={uuid()}>
												<Td>111000</Td>
												<Td> Josh Smith </Td>
												<Td>111</Td>
												<Td></Td>
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
							<TableCaption>Dailies</TableCaption>
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
												<Td></Td>
												<Td></Td>
												<Td></Td>
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
												<Td></Td>
												<Td></Td>
												<Td></Td>
												<Td></Td>
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
												<Td></Td>
												<Td></Td>
												<Td></Td>
												<Td></Td>
											</Tr>
										);
									})}
							</Tbody>
						</Table>
					</TableContainer>
				</GridItem>
			</Grid>

			{isOpen ? (
				<TicketModal
					ticket={ticket}
					isOpen={isOpen}
					onClose={onClose}
				/>
			) : null}
		</PageContent>
	);
}
export default CarLog;
