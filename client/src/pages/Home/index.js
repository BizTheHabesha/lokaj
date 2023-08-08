import React from "react";
import {
	GridItem,
	Grid,
	Card,
	CardHeader,
	Heading,
	StatArrow,
	CardBody,
	CardFooter,
	Button,
	HStack,
	StatGroup,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	VStack,
	Image,
	useColorMode,
	Skeleton,
	IconButton,
	Tooltip,
	Text,
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";
import PageContent from "../../components/PageContent";
import { DateTime } from "luxon";
import { BsArrowRight } from "react-icons/bs";
import {
	GrUserSettings,
	GrSun,
	GrMoon,
	GrCloud,
	GrDocumentUser,
	GrConfigure,
} from "react-icons/gr";
import { color } from "framer-motion";

function Home(props) {
	const scheme = props.defaultScheme;
	const { colorMode, toggleColorMode } = useColorMode();
	const griditembg = colorMode === "light" ? "gray.100" : "gray.800";
	const getUserPermission = () => {
		// TODO: get user permission from server
		return { serverManagement: false, userManagement: true };
	};

	return (
		<PageContent defaultScheme={scheme} active={0}>
			<Grid
				mb={5}
				templateRows="reapeat(3, 1fr)"
				templateColumns="repeat(4, 1fr)"
				gap={5}>
				<GridItem
					className="section-bordered-subtle"
					rowSpan={3}
					colSpan={1}
					bg={griditembg}>
					<Heading pl={2} size={"lg"}>
						Events
					</Heading>
					<Text pl={2} size={"sm"}>
						@ Grand Hyatt Denver
					</Text>
					<VStack></VStack>
				</GridItem>
				<GridItem
					className="section-bordered-subtle"
					colSpan={3}
					rowSpan={1}
					bg={griditembg}>
					<HStack display={"flex"} justifyContent={"center"}>
						<Image
							src="./img/logo.svg"
							fallbackSrc="https://placehold.co/350x350"
							h="30rem"
						/>
						<Heading px={10} size="2xl">
							X
						</Heading>
						<Image
							src="./img/ghdlogo.png"
							fallbackSrc="https://placehold.co/350x350"
							h="30rem"
						/>
					</HStack>
				</GridItem>
				<GridItem
					className="section-bordered-subtle"
					colSpan={3}
					bg={griditembg}>
					<Heading pt={2} pl={2} size="lg">
						Check Out Forecast
					</Heading>
					<HStack px={2} h="40%">
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 0 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 1 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 2 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 3 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 4 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
					</HStack>
					<Heading pt={2} pl={2} size="lg">
						Check In Forecast
					</Heading>
					<HStack px={2} pb={2} h="40%">
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 0 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 1 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 2 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 3 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
						<Card h="100%" w="20%">
							<CardHeader>
								<Heading size="md">
									{DateTime.now()
										.plus({ days: 4 })
										.toFormat("LLL  dd")}
								</Heading>
							</CardHeader>
							<CardBody>
								<HStack>
									<StatGroup
										w={"100%"}
										display={"flex"}
										justifyContent={"space-between"}>
										<Stat>
											<StatLabel>Valet</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>
												<Skeleton
													h={"36px"}
													w={"20%"}
												/>
											</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
									</StatGroup>
								</HStack>
								<CardFooter>
									<Button>
										See in Search <BsArrowRight />
									</Button>
								</CardFooter>
							</CardBody>
						</Card>
					</HStack>
				</GridItem>
				<GridItem colSpan={3}>
					<Heading size="lg">Utilities</Heading>

					<HStack h={"100%"} px={2}>
						<Tooltip
							label={
								colorMode === "light"
									? "Dark Mode"
									: "Light Mode"
							}>
							<IconButton
								colorScheme="gray"
								onClick={toggleColorMode}
								icon={
									colorMode === "light" ? (
										<GrMoon />
									) : (
										<GrSun />
									)
								}
								size={"lg"}
							/>
						</Tooltip>
						<Tooltip label="App Settings">
							<IconButton
								colorScheme="gray"
								icon={<GrConfigure />}
								size={"lg"}
							/>
						</Tooltip>
						<Tooltip label="My Settings">
							<IconButton
								colorScheme="gray"
								icon={<GrUserSettings />}
								size={"lg"}
							/>
						</Tooltip>
						<Tooltip
							label={
								getUserPermission().serverManagement
									? "Server Management"
									: "Higher Privillage Required"
							}>
							<IconButton
								colorScheme="gray"
								icon={<GrCloud />}
								size={"lg"}
								isDisabled={
									!getUserPermission().serverManagement
								}
							/>
						</Tooltip>
						<Tooltip
							label={
								getUserPermission().userManagement
									? "User Management"
									: "Higher Privillage Required"
							}>
							<IconButton
								colorScheme="gray"
								icon={<GrDocumentUser />}
								size={"lg"}
								isDisabled={!getUserPermission().userManagement}
							/>
						</Tooltip>
					</HStack>
				</GridItem>
			</Grid>
		</PageContent>
	);
}

export default Home;
