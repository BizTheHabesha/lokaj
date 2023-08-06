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
	Center,
	useColorMode,
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";
import PageContent from "../../components/PageContent";
import { DateTime } from "luxon";
import { BsArrowRight, BsFillGearFill } from "react-icons/bs";

function Home(props) {
	const griditembg = "papayawhip";
	const scheme = props.defaultScheme;
	return (
		<PageContent defaultScheme={scheme} active={0}>
			<Grid
				pb={5}
				templateRows="reapeat(3, 1fr)"
				templateColumns="repeat(4, 3fr)"
				gap={5}>
				<GridItem rowSpan={3} colSpan={1} bg={griditembg}>
					<Heading pl={2} size={"lg"}>
						Events
					</Heading>
					<VStack></VStack>
				</GridItem>
				<GridItem colSpan={3} rowSpan={1} bg={griditembg}>
					<HStack>
						<Image src="img/logo.svg" h="30rem" />
						<Image src="img/ghdlogo.png" h="30rem" />
					</HStack>
				</GridItem>
				<GridItem colSpan={3} bg={griditembg}>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Self</StatLabel>
											<StatNumber>60</StatNumber>
											<StatHelpText>
												<StatArrow type="increase" />
												High
											</StatHelpText>
										</Stat>
										<Stat>
											<StatLabel>Daily</StatLabel>
											<StatNumber>60</StatNumber>
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
				<GridItem colSpan={3} bg={griditembg} h="15em">
					<Heading size="lg">Utilities</Heading>
					<HStack h={"100%"} px={2}>
						<Center w={"100%"} h={"100%"}>
							<Button h={"100%"}>
								<BsFillGearFill size={100} />
							</Button>
						</Center>
					</HStack>
				</GridItem>
			</Grid>
		</PageContent>
	);
}

export default Home;
