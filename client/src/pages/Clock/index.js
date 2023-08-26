import React, { useState, useEffect } from "react";
import PageContent from "../../components/PageContent";
import {
	useDisclosure,
	AspectRatio,
	Collapse,
	Container,
	Divider,
	Grid,
	GridItem,
	Heading,
	Input,
	Spinner,
	Text,
	Icon,
	Tooltip,
	List,
	ListItem,
	ListIcon,
	Kbd,
	HStack,
	PinInput,
	PinInputField,
	Button,
} from "@chakra-ui/react";
import {
	PiPlugsConnectedBold,
	PiIdentificationBadge,
	PiFaceMaskLight,
} from "react-icons/pi";
import { AiOutlineCamera, AiOutlineCloudUpload } from "react-icons/ai";
import { LuScanFace } from "react-icons/lu";
import Ticket from "../Ticket";

function Clock(props) {
	const scheme = props.defaultScheme;
	const [time, setTime] = useState(new Date());

	const { isOpen: collapseTimeIsOpen, onToggle: onToggleTime } =
		useDisclosure();
	const { isOpen: collapseLocIsOpen, onToggle: onToggleLoc } =
		useDisclosure();

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	let video = document.querySelector("#camera-stream");
	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then(function (stream) {
				video.srcObject = stream;
			})
			.catch(function (error) {
				console.log("Something went wrong!");
			});
	}

	return (
		<PageContent defaultScheme={scheme} active={4}>
			<Grid
				h={"90vh"}
				templateRows="repeat(8, fr)"
				templateColumns="repeat(12, 1fr)"
				gap={6}>
				<GridItem rowSpan={8} colSpan={2} className="section-bordered">
					<Heading p={5}>Instructions</Heading>
					<Divider />
					<Text p={5} bg={"red.500"}>
						Input your employee number and press {<Kbd>enter</Kbd>}{" "}
						or "Clock In / Out ". You will be clocked in for the
						current time. If you are already clocked in, you will be
						clocked out.
					</Text>
					<List spacing={3} p={5}>
						<ListItem>
							<ListIcon as={AiOutlineCamera} color="green.500" />
							Camera Required
						</ListItem>
						<ListItem>
							<ListIcon
								as={PiIdentificationBadge}
								color="green.500"
							/>
							FRID: 366
						</ListItem>
						<ListItem>
							<ListIcon as={LuScanFace} color="green.500" />
							Face Comparison: On
						</ListItem>
						<ListItem>
							<ListIcon as={PiFaceMaskLight} color="yellow.500" />
							Face-strict Level: 6
						</ListItem>
						<ListItem>
							<ListIcon
								as={AiOutlineCloudUpload}
								color="red.500"
							/>
							Live Upload: Off
						</ListItem>
					</List>
				</GridItem>
				<GridItem className="section-bordered" rowSpan={6} colSpan={8}>
					<Heading p={5}>Camera</Heading>
					<div className="camera-container">
						<AspectRatio ratio={16 / 9}>
							<video id="camera-stream" autoPlay muted loop />
						</AspectRatio>
					</div>
				</GridItem>
				<GridItem rowSpan={8} colSpan={2} className="section-bordered">
					<Heading p={5}>Info</Heading>
					<Divider />

					<Heading
						size={"md"}
						px={5}
						pt={5}
						pb={2.5}
						onClick={onToggleTime}>
						Time: {time.toLocaleTimeString()}{" "}
						<Spinner
							thickness="2px"
							speed="3s"
							emptyColor="green.300"
							color="green.700"
							size="sm"
						/>
						<Collapse in={collapseTimeIsOpen} animateOpacity>
							<Heading as={"h6"} size={"xs"}>
								Metadata
							</Heading>
							<Text fontSize={"xs"}>unix: {time.getTime()}</Text>
							<Text fontSize={"xs"}>
								Something look wrong? Contact a supervisor.
							</Text>
							<Divider pt={3} />
						</Collapse>
					</Heading>
					<Tooltip label="Connected" aria-label="Connected">
						<Heading
							onClick={onToggleLoc}
							size={"md"}
							px={5}
							py={2.5}>
							Location: GHD{" "}
							<Icon as={PiPlugsConnectedBold} color="green.500" />
							<Collapse in={collapseLocIsOpen} animateOpacity>
								<Heading as={"h6"} size={"sm"}>
									Metadata
								</Heading>
								<Text fontSize={"xs"}>Code: 21700</Text>
								<Text fontSize={"xs"}>
									Full Title: Grand Hyatt Denver
								</Text>
								<Text fontSize={"xs"}>Small Title: GHD</Text>
								<Text fontSize={"xs"}>
									Something look wrong? Contact a supervisor.
								</Text>
								<Divider pt={3} />
							</Collapse>
						</Heading>
					</Tooltip>
				</GridItem>
				<GridItem
					className="section-bordered"
					rowSpan={2}
					colSpan={8}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}>
					<HStack>
						<PinInput size={"lg"}>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
						<Button variant={"outline"} color="tomato" size="lg">
							Clock In / Out
						</Button>
					</HStack>
				</GridItem>
			</Grid>
		</PageContent>
	);
}
export default Clock;
