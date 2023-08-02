import React from "react";
import PageContent from "../../components/PageContent";
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
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";

function CarLog(props) {
	const griditembg = "papayawhip";
	const scheme = props.defaultScheme;

	return (
		<PageContent active={1} defaultScheme={scheme}>
			<Grid
				h="50vh"
				templateRows="reapeat(3, 1fr)"
				templateColumns="repeat(12, 1fr)"
				gap={4}>
				<GridItem rowSpan={1} colSpan={3} />
				<GridItem rowSpan={1} colSpan={6} bg={griditembg}>
					<Input
						h={20}
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
							<TableCaption>Overnight Valet</TableCaption>
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
							<TableCaption>Overnight Self</TableCaption>
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
							<TableCaption>Dailies</TableCaption>
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
		</PageContent>
	);
}
export default CarLog;
