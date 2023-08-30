import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
	useDisclosure,
	Badge,
	Avatar,
	FormControl,
	Flex,
	FormLabel,
	Icon,
	Heading,
	Input,
	Stack,
	useColorModeValue,
	HStack,
	AvatarBadge,
	IconButton,
	Center,
	VStack,
	Tooltip,
	Select,
	position,
} from "@chakra-ui/react";
import { positionTagData, getPositionPermissions } from "../../utils/helpers";
import { MdWorkOutline } from "react-icons/md";
import auth from "../../utils/auth";

/**
 *
 * @param {{isOpen: boolean, onClose: function, profile: {firstName: string, lastName: string, position: string, internalRef: string, username: string, permissions?: {serverManagement?: boolean, userManagement?: boolean}}}} props
 * @returns
 */
function UserModal(props) {
	// disclose context for modal
	// const { isOpen, onClose, onOpen } = useDisclosure();
	// get disclosure context and profile data from props
	const { isOpen, onClose, profile } = props;
	// get the tag data for the user's position;
	const tagData = positionTagData(profile.position);
	// state context for changes made to the form
	const [changesMade, setChangesMade] = useState(false);
	// state context for the form data
	const [formData, setFormData] = useState({
		...profile,
	});
	// reinitialize the form data if the profile changes
	useEffect(() => {
		setFormData({ ...profile });
		console.log(formData);
	}, []);

	const getPositionOptions = () => {
		const options = [];
		const positions = [
			"guest",
			"runner",
			"supervisor",
			"manager",
			"afmanager",
			"fmanager",
			"admin",
		];
		const fullPositions = [
			"Guest",
			"Runner",
			"Supervisor",
			"Manager",
			"Assistant Facility Manager",
			"Facility Manager",
			"Admin",
		];
		positions.forEach((position, index) => {
			options.push(
				<option key={position} value={position}>
					{fullPositions[index]}
				</option>
			);
		});
		return options;
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Text>
						{profile.username}
						<Badge
							ml={1}
							colorScheme={tagData.color}
							variant={"subtle"}>
							{tagData.text}
						</Badge>
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack
						spacing={4}
						w={"full"}
						maxW={"md"}
						bg={useColorModeValue("white", "gray.700")}
						rounded={"xl"}
						boxShadow={"lg"}
						p={6}>
						<FormControl id="userName">
							<FormLabel>Your Profile</FormLabel>
							<Stack direction={["column", "row"]} spacing={6}>
								<Center>
									<Avatar size="xl" src={profile.imgRef}>
										<AvatarBadge
											as={IconButton}
											size="sm"
											rounded="full"
											colorScheme={
												profile.clockedIn
													? "green"
													: "red"
											}
											aria-label="status"
											icon={<MdWorkOutline />}
										/>
									</Avatar>
								</Center>
								<Center w="full">
									<VStack w="full" spacing={2}>
										<Text>
											Internal Ref: {profile.internalRef}
										</Text>
										<Button w="full">Change Picture</Button>
									</VStack>
								</Center>
							</Stack>
						</FormControl>
						<HStack spacing={6}>
							<FormControl id="firstName" isRequired>
								<FormLabel>First Name</FormLabel>
								<Tooltip
									label={
										profile.permissions.self.canEdit
											? null
											: `${profile.position}s can't edit this`
									}>
									<Input
										variant={
											profile.permissions.self.canEdit
												? "outline"
												: "filled"
										}
										readOnly={
											!profile.permissions.self.canEdit
										}
										onChange={(e) => {
											setFormData({
												...formData,
												firstName: e.target.value,
											});
										}}
										value={formData.firstName}
										placeholder="First Name"
										_placeholder={{ color: "gray.500" }}
										type="name"
									/>
								</Tooltip>
							</FormControl>
							<FormControl id="lastName" isRequired>
								<FormLabel>Last Name</FormLabel>
								<Tooltip
									label={
										profile.permissions.self.canEdit
											? null
											: `${profile.position}s can't edit this`
									}>
									<Input
										variant={
											profile.permissions.self.canEdit
												? "outline"
												: "filled"
										}
										readOnly={
											!profile.permissions.self.canEdit
										}
										onChange={(e) => {
											setFormData({
												...formData,
												lastName: e.target.value,
											});
										}}
										value={formData.lastName}
										placeholder="Last Name"
										_placeholder={{ color: "gray.500" }}
										type="name"
									/>
								</Tooltip>
							</FormControl>
						</HStack>
						<FormControl id="userName" isRequired>
							<FormLabel>Username</FormLabel>
							<Tooltip
								label={
									profile.permissions.self.canEdit
										? null
										: `${profile.position}s can't edit this`
								}>
								<Input
									variant={
										profile.permissions.self.canEdit
											? "outline"
											: "filled"
									}
									readOnly={!profile.permissions.self.canEdit}
									onChange={(e) => {
										setFormData({
											...formData,
											username: e.target.value,
										});
									}}
									value={formData.username}
									placeholder="username"
									_placeholder={{ color: "gray.500" }}
									type="name"
								/>
							</Tooltip>
						</FormControl>
						<FormControl id="email" isRequired>
							<FormLabel>Position</FormLabel>
							<Tooltip
								label={
									profile.permissions.self.canEdit
										? null
										: `${profile.position}s can't edit this`
								}>
								<Select
									variant={
										profile.permissions.users.canPromote
											? "outline"
											: "filled"
									}
									disabled={
										!profile.permissions.users.canPromote
									}
									onChange={(e) => {
										setFormData({
											...formData,
											position: e.target.value,
										});
									}}
									value={formData.position}
									placeholder="Position"
									_placeholder={{ color: "gray.500" }}
									type="name">
									{getPositionOptions()}
								</Select>
							</Tooltip>
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<Button
								w="full"
								readOnly={!profile.permissions.self.canEdit}
								onClick={() => {
									auth.logout();
								}}>
								Change Password
							</Button>
						</FormControl>
						<Stack spacing={6} direction={["column", "row"]}>
							<Button
								bg={"red.400"}
								color={"white"}
								w="full"
								_hover={{
									bg: "red.500",
								}}>
								Cancel
							</Button>
							<Button
								bg={"blue.400"}
								color={"white"}
								w="full"
								_hover={{
									bg: "blue.500",
								}}>
								Submit
							</Button>
						</Stack>
					</Stack>
				</ModalBody>

				<ModalFooter></ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default UserModal;
