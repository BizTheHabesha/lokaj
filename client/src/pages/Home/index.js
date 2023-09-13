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
	useDisclosure,
	Tag,
	TagLabel,
	Avatar,
	TagRightIcon,
	AvatarBadge,
	AvatarGroup,
	Divider,
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
import auth from "../../utils/auth";
import UserModal from "../../components/UserModal";
import { positionTagData, getPositionPermissions } from "../../utils/helpers";

function Home(props) {
	// redirect to login if not logged in
	auth.loggedIn() ? null : window.location.replace("/login");
	// get user profile from token
	const profile = auth.getProfile().data;
	const userTag = positionTagData(profile.position);
	const userPermissions = getPositionPermissions(profile.position);
	// default color scheme
	const scheme = props.defaultScheme;

	// color mode context for theme switching
	const { colorMode, toggleColorMode } = useColorMode();
	// grid color options for light and dark mode
	const griditembg = colorMode === "light" ? "gray.100" : "gray.900";
	// function to extract user permission from token [TODO]
	/**
	 *
	 * @returns {{serverManagement: boolean, userManagement: boolean}}
	 */
	// disclosure context for user modalww
	const {
		isOpen: isOpenUserModal,
		onOpen: onOpenUserModal,
		onClose: onCloseUserModal,
	} = useDisclosure();

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
				</GridItem>
				<GridItem
					className="section-bordered-subtle"
					colSpan={3}
					rowSpan={1}
					bg={griditembg}>
					<HStack display={"flex"} justifyContent={"center"}>
						<Image
							mt={"3rem"}
							src="./logo.svg"
							fallbackSrc="https://placehold.co/350x350"
							h={"20rem"}
						/>
						<Heading px={10} size="2xl">
							X
						</Heading>
						<Image
							src="./img/ghdlogo.png"
							fallbackSrc="https://placehold.co/350x350"
							h={"10rem"}
						/>
					</HStack>
				</GridItem>
				<GridItem
					className="section-bordered-subtle"
					colSpan={3}
					bg={griditembg}
					px={4}>
					<Heading pt={2} pb={1} size="lg">
						Check Out Forecast
					</Heading>
					<HStack h="40%">
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
					<Heading pt={2} pb={1} size="lg">
						Check In Forecast
					</Heading>
					<HStack pb={2} h="40%">
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
				<GridItem
					bg={griditembg}
					pb={4}
					pl={2}
					className="section-bordered-subtle"
					colSpan={3}>
					<Heading size="lg">Utilities</Heading>

					<HStack mt={2} px={2} h={"50%"}>
						<Tooltip
							label={
								colorMode === "light"
									? "Dark Mode"
									: "Light Mode"
							}>
							<IconButton
								colorScheme={scheme}
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
								colorScheme={scheme}
								icon={<GrConfigure />}
								size={"lg"}
							/>
						</Tooltip>
						<Tooltip
							label={
								userPermissions.self.hasProfile
									? userPermissions.self.canView
										? "My settings"
										: "You do not have permission"
									: `"${profile.username}" does not have a profile`
							}>
							<IconButton
								colorScheme={scheme}
								icon={<GrUserSettings />}
								size={"lg"}
								onClick={onOpenUserModal}
								isDisabled={!userPermissions.self.canView}
							/>
						</Tooltip>
						<Tooltip
							label={
								userPermissions.server.canView
									? "Server Management"
									: "You do not have permission"
							}>
							<IconButton
								colorScheme={scheme}
								icon={<GrCloud />}
								size={"lg"}
								isDisabled={!userPermissions.server.canView}
							/>
						</Tooltip>
						<Tooltip
							label={
								userPermissions.users.canView
									? "User Management"
									: "You do not have permission"
							}>
							<IconButton
								colorScheme={scheme}
								icon={<GrDocumentUser />}
								size={"lg"}
								onClick={() => {
									console.log("click!");
								}}
								isDisabled={!userPermissions.users.canView}
							/>
						</Tooltip>
						<Divider orientation="vertical" />
						<Tag
							size={"lg"}
							variant="subtle"
							colorScheme={userTag.color}>
							<Avatar
								size="xs"
								name={`${profile.firstName} ${profile.lastName}`}
								ml={-1}
								mr={2}>
								{/* TODO: Change badge based on clock status */}
								<AvatarBadge boxSize="1.25em" bg="green.500" />
							</Avatar>
							<TagLabel>{userTag.text}</TagLabel>
							<TagRightIcon as={userTag.icon} />
						</Tag>
						<Divider orientation="vertical" />
						<AvatarGroup
							size="md"
							max={4}
							onClick={() => {
								window.location.replace("/payroll");
							}}
							onMouseEnter={(e) => {
								e.target.style.cursor = "pointer";
							}}>
							{/* TODO: #48 Display currently clocked in users in AvatarGroup */}
							<Avatar name="Ryan Florence" />
							<Avatar name="Segun Adebayo" />
							<Avatar name="Kent Dodds" />
						</AvatarGroup>
					</HStack>
				</GridItem>
			</Grid>
			{isOpenUserModal ? (
				<UserModal
					profile={{ ...profile, permissions: userPermissions }}
					isOpen={isOpenUserModal}
					onClose={onCloseUserModal}
				/>
			) : null}
		</PageContent>
	);
}

export default Home;
