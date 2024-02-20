import React from "react";
import { useQuery } from "@apollo/client";
import PageContent from "../../components/PageContent";
import {
	Card,
	CardHeader,
	Grid,
	GridItem,
	Heading,
	Image,
	CardBody,
	Stack,
	StackDivider,
	Box,
	Text,
	HStack,
	Tooltip,
	Table,
	TableCaption,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Divider,
	Icon,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { LuRocket } from "react-icons/lu";
import { DateTime } from "luxon";
import { QUERY_ALL_USERS } from "../../utils/queries";
import auth from "../../utils/auth";
import { positionTagData } from "../../utils/helpers";

function Payroll(props) {
	auth.loggedIn() ? null : window.location.replace("/login");
	const { loading, data } = useQuery(QUERY_ALL_USERS);
	const griditembg = "papayawhip";
	// const recentAndActiveRes = [
	// 	{
	// 		_id: "5e8848098100000100000001",
	// 		username: "Biz",
	// 		lastName: "Gebrekidan",
	// 		firstName: "Bisrat",
	// 		internalRef: "314510",
	// 		position: "runner",
	// 		imgref: "https://bit.ly/dan-abramov",
	// 		status: "active",
	// 		timeIn: new Date().getTime() - 1000 * 60 * 60 * 8,
	// 		timeOut: new Date().getTime() + 1000 * 60 * 60 * 8,
	// 		next: DateTime.now().plus({ days: 1 }).toLocaleString(),
	// 	},
	// 	{
	// 		_id: "5e8848098100000100000001",
	// 		username: "jossicakes",
	// 		lastName: "Teklu",
	// 		firstName: "Joseph",
	// 		internalRef: "312000",
	// 		position: "supervisor",
	// 		imgref: "https://bit.ly/dan-abramov",
	// 		status: "inactive",
	// 		timeIn: new Date().getTime() - 1000 * 60 * 60 * 8,
	// 		timeOut: new Date().getTime() + 1000 * 60 * 60 * 8,
	// 		next: DateTime.now().plus({ days: 1 }).toLocaleString(),
	// 	},
	// ];

	const recentAndActiveRes = data?.users || [];
	console.log(recentAndActiveRes);

	const doGetFullUser = (username) => {
		// TODO: get full user info from API
		// const user = await API.getUser(username);
		// return user;
	};
	return (
		<PageContent active={2} defaultScheme={props.defaultScheme}>
			<Grid
				pb={4}
				gap={0}
				templateRows={`repeat(${recentAndActiveRes.length}, 1fr)`}
				templateColumns="repeat(5, 1fr)">
				{recentAndActiveRes.map((res, index) => {
					return (
						<>
							<GridItem
								colSpan={1}
								rowSpan={1}
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
								borderBottom={"1px solid #8f8f8f"}
								py={4}>
								<Image src={res.imgref} borderRadius={"5%"} />
							</GridItem>
							<GridItem
								colSpan={1}
								rowSpan={1}
								key={index}
								display={"flex"}
								borderBottom={"1px solid #8f8f8f"}
								py={4}>
								<Tooltip
									label={
										res.status === "active"
											? "Clocked In"
											: ""
									}>
									<Card w={"80%"}>
										<CardHeader>
											<HStack>
												<Heading size="md">
													{res.firstName}{" "}
													{res.lastName}
												</Heading>
												{res.status === "active" ? (
													<Text
														color={"red"}
														pt={1}
														fontSize="sm">
														<LuRocket
															display={"inline"}
														/>
													</Text>
												) : null}
											</HStack>
											<HStack>
												<Text pt={1} fontSize="sm">
													{res.username}
												</Text>
												<Icon />
											</HStack>
										</CardHeader>
										<CardBody>
											<Stack
												divider={<StackDivider />}
												spacing="4">
												<Box>
													<Heading
														size="xs"
														textTransform="uppercase">
														{res.position}
													</Heading>
													<Text pt="2" fontSize="sm">
														Minimum Permissions
													</Text>
												</Box>
												<Box>
													<Heading
														size="xs"
														textTransform="uppercase">
														Next Scheduled
													</Heading>
													<Text pt="2" fontSize="sm">
														{res.next}
													</Text>
												</Box>
											</Stack>
										</CardBody>
									</Card>
								</Tooltip>
							</GridItem>
							<GridItem
								colSpan={3}
								rowSpan={1}
								display={"flex"}
								alignItems={"center"}
								justifyContent={"center"}
								borderBottom={"1px solid #8f8f8f"}
								py={4}>
								<Table variant="simple">
									<TableCaption>Clock Info</TableCaption>
									<Thead>
										<Tr>
											<Th>Time In</Th>
											<Th>Time Out</Th>
											<Th>Hours Worked</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td></Td>
											<Td>{res.timeOut}</Td>
											<Td>{res.timeOut - res.timeIn}</Td>
										</Tr>
									</Tbody>
								</Table>
							</GridItem>
						</>
					);
				})}
			</Grid>
		</PageContent>
	);
}

export default Payroll;
