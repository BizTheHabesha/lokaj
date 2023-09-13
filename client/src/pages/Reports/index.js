import React from "react";
import PageContent from "../../components/PageContent";
import "./index.css";
import {
	Grid,
	GridItem,
	Box,
	VStack,
	IconButton,
	Tooltip,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Container,
	Button,
	Heading,
	Text,
	Divider,
	MenuDivider,
} from "@chakra-ui/react";
import {
	BsFiletypeJson,
	BsFileEarmarkPdf,
	BsFiletypeHtml,
	BsFiletypeCsv,
	BsMarkdown,
	BsGear,
	BsClipboard2Plus,
	BsStar,
	BsPencil,
} from "react-icons/bs";
import auth from "../../utils/auth";

function Reports(props) {
	auth.loggedIn() ? null : window.location.replace("/login");

	const scheme = props.defaultScheme;

	return (
		<PageContent defaultScheme={scheme} active={3}>
			<Grid
				h={"90vh"}
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(24, 1fr)"
				gap={4}>
				<GridItem
					className="reports-list custom-scrollbar section-bordered"
					rowSpan={2}
					colSpan={5}>
					<Heading p={5}>Reports</Heading>

					<Divider />
					<Container h={"100%"}>
						<VStack>
							<Button mt={5} w={"100%"}>
								Bank Out
							</Button>
							<Divider mt={5} />
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Car Log Report
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Checked Out Guests
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Active Guests
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Special Events
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Daily Visitor Revenue
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Checked In Guests
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Overnight Posting
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Grid
								templateRows={"repeat(1, 1fr)"}
								templateColumns={"repeat(15, 1fr)"}
								gap={4}>
								<GridItem rowSpan={1} colSpan={14}>
									<Button mt={5} w={"100%"}>
										Overnight Posted
									</Button>
								</GridItem>
								<GridItem rowSpan={1} colSpan={1}>
									<IconButton
										mt={5}
										w={"100%"}
										aria-label="Favorite"
										icon={<BsStar />}
										variant="outline"
									/>
								</GridItem>
							</Grid>
							<Tooltip label="Not Implemented">
								<Button isDisabled mt={5} w={"100%"}>
									<BsPencil />
								</Button>
							</Tooltip>
						</VStack>
					</Container>
				</GridItem>
				<GridItem
					borderRadius={"10px"}
					rowSpan={2}
					colSpan={18}></GridItem>
				<GridItem className="section-bordered" rowSpan={2} colSpan={1}>
					<VStack
						p={4}
						justifyContent={"space-between"}
						alignContent={"space-evenly"}>
						<Tooltip label="Export as JSON">
							<IconButton
								colorScheme="red"
								icon={<BsFiletypeJson size={30} />}
								aria-label="JSON"
								size="lg"
								variant="outline"
							/>
						</Tooltip>
						<Tooltip label="Export as PDF">
							<IconButton
								colorScheme="red"
								icon={<BsFileEarmarkPdf size={30} />}
								aria-label="PDF"
								size="lg"
								variant="outline"
							/>
						</Tooltip>
						<Tooltip label="Export as HTML">
							<IconButton
								colorScheme="red"
								icon={<BsFiletypeHtml size={30} />}
								aria-label="HTML"
								size="lg"
								variant="outline"
							/>
						</Tooltip>
						<Tooltip label="Export as CSV">
							<IconButton
								colorScheme="red"
								icon={<BsFiletypeCsv size={30} />}
								aria-label="CSV"
								size="lg"
								variant="outline"
							/>
						</Tooltip>
						<Tooltip label="Export as Markdown">
							<IconButton
								colorScheme="red"
								icon={<BsMarkdown size={30} />}
								aria-label="Markdown"
								size="lg"
								variant="outline"
							/>
						</Tooltip>
						<Menu>
							<Tooltip label="Use a Task">
								<MenuButton
									colorScheme="blue"
									as={IconButton}
									aria-label="Options"
									icon={<BsClipboard2Plus size={30} />}
									variant="ghost"
								/>
							</Tooltip>
							<MenuList>
								<MenuItem isDisabled>
									No Tasks Available
								</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<Tooltip label="Settings">
								<MenuButton
									colorScheme="blue"
									as={IconButton}
									aria-label="Options"
									icon={<BsGear size={30} />}
									variant="ghost"
								/>
							</Tooltip>
							<MenuList>
								<Tooltip label="Higher Privilege Required">
									<MenuItem isDisabled>
										Export Settings
									</MenuItem>
								</Tooltip>
								<MenuDivider />
								<MenuItem>My Settings</MenuItem>
								<MenuItem>Sorting</MenuItem>
								<MenuItem>Filter</MenuItem>
							</MenuList>
						</Menu>
					</VStack>
				</GridItem>
			</Grid>
		</PageContent>
	);
}

export default Reports;
