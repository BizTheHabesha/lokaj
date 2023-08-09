import React, { useEffect, useRef, useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogCloseButton,
	Heading,
	Collapse,
	useDisclosure,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Select,
	Input,
	Text,
	HStack,
	useToast,
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";
import { useMutation } from "@apollo/client";
import { UPDATE_TICKET, ADD_TICKET } from "../../utils/mutations";
import { DateTime } from "luxon";

function TicketModal(props) {
	const [updateTicket, { data, loading, error }] = useMutation(UPDATE_TICKET);

	const [
		addTicket,
		{
			loading: addTicketLoading,
			error: addTicketError,
			data: addTicketData,
		},
	] = useMutation(ADD_TICKET);
	// use contextualized disclosure from parent
	const { isOpen, onClose, ticket } = props;
	// element to focus on save cancel
	const saveCancelRef = useRef();
	// element to focus on c/o cancel
	const coCancelRef = useRef();
	// element to focus on req cancel
	const reqCancelRef = useRef();
	// create disclosure context for cllapse
	const { isOpen: collapseIsOpen, onToggle } = useDisclosure();
	// create disclosure context for save alert
	const {
		isOpen: saveIsOpen,
		onClose: saveOnClose,
		onOpen: saveOnOpen,
	} = useDisclosure();
	// create disclosure context for check out alert
	const {
		isOpen: coIsOpen,
		onClose: coOnClose,
		onOpen: coOnOpen,
	} = useDisclosure();

	const toast = useToast();

	const {
		isOpen: reqIsOpen,
		onClose: reqOnClose,
		onOpen: reqOnOpen,
	} = useDisclosure();
	// create state context for changes made
	const [changesMade = false, setChangesMade] = useState();

	// create state context for form data
	const [formData, setFormData] = useState({ ...ticket });

	// when modal is opened, set form data to ticket data
	useEffect(() => {
		setFormData({ ...ticket });
	}, [ticket]);

	// if changes made, alert user they aren't saved
	const confirmSave = () => {
		changesMade ? saveOnOpen() : doContinue();
	};
	// close the ticket modal
	const doContinue = () => {
		saveIsOpen ? saveOnClose() : null;
		coIsOpen ? coOnClose() : null;
		reqIsOpen ? reqOnClose() : null;
		onClose();
		setChangesMade(false);
	};
	// save the updated data
	const doSave = async () => {
		Object.keys(formData).forEach((key) => {
			if (formData[key] === "") {
				formData[key] = "None";
			}
			if (!formData[key]) {
				formData[key] = "None";
			}
		});
		console.log(ticket);
		try {
			const res = !props.newTicket
				? await updateTicket({
						variables: {
							...formData,
						},
				  })
				: await addTicket({
						variables: {
							...formData,
							checkIn: convertToMillis(new Date().getTime()),
							checkOut: convertToMillis(new Date().getTime()),
							lastRunner: "Biz",
							status: "In",
						},
				  });
			res
				? toast({
						title: "Success",
						description: "Ticket updated successfully",
						status: "success",
						duration: 9000,
						isClosable: true,
				  })
				: toast({
						title: "Error",
						description: "Ticket update failed",
						status: "error",
						duration: 9000,
						isClosable: true,
				  });
		} catch (error) {
			toast({
				title: "Error",
				description: error.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
		doContinue();
	};
	// when form input is changed, update form state
	const handleInputChange = function (event, from) {
		const newDat = {};
		if (from === "checkIn" || from === "checkOut") {
			newDat[from] = convertToMillis(event.target.value);
		} else newDat[from] = event.target.value;
		setFormData({ ...formData, ...newDat });
		setChangesMade(true);
	};

	/**
	 *
	 * @param {String} toSelect
	 * @returns {[JSX.Element]}
	 */
	const createLocationOptions = (toSelect) => {
		// TODO: #24 these options should be pulled from the database
		const options = [
			"None",
			"Front",
			"Back",
			"Side",
			"Front Left",
			"Front Right",
			"Back Left",
			"Back Right",
			"X00",
		];
		return options.map((option) => {
			return (
				<option key={uuid()} value={option}>
					{option}
				</option>
			);
		});
	};
	/**
	 *
	 * @param {Number} seconds integer number of seconds since epoch
	 */
	const convertDate = (millis) => {
		return DateTime.fromMillis(Number(millis)).toLocaleString(
			DateTime.DATE
		);
	};

	const convertToMillis = (date) => {
		return DateTime.fromISO(date).toMillis();
	};

	const doCheckout = (ticketId) => {};

	return props.ticket ? (
		<>
			<Modal isOpen={isOpen} onClose={confirmSave}>
				<ModalOverlay />
				<ModalContent w="500px">
					<ModalHeader onClick={onToggle}>
						{props.newTicket
							? `New Ticket: ${ticket.ticketId}`
							: ticket.ticketId}
						<Collapse in={collapseIsOpen} animateOpacity>
							<Heading as={"h6"} size={"xs"}>
								Metadata
							</Heading>
							<Text fontSize={"xs"}>
								_id: {ticket._id} (internal ref)
							</Text>
							<Text fontSize={"xs"}>type: {ticket.type}</Text>
							<Text fontSize={"xs"}>
								dmg: {ticket.damageCheck}
							</Text>
						</Collapse>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<HStack>
							<FormControl>
								<FormLabel>Last Name</FormLabel>
								<Input
									value={
										formData.lastName
											? formData.lastName
											: ""
									}
									onChange={(event) => {
										handleInputChange(event, "lastName");
									}}
								/>
								<FormLabel>First Name</FormLabel>
								<Input
									value={
										formData.firstName
											? formData.firstName
											: ""
									}
									onChange={(event) => {
										handleInputChange(event, "firstName");
									}}
								/>
								<FormLabel>Check In Date</FormLabel>
								<Input
									value={
										formData.checkIn
											? convertDate(formData.checkIn)
											: ""
									}
									onChange={(event) => {
										handleInputChange(event, "checkIn");
									}}
									variant={"filled"}
									readOnly
								/>
								<FormLabel>Check Out Date</FormLabel>
								<Input
									value={
										formData.checkOut
											? convertDate(formData.checkOut)
											: ""
									}
									onChange={(event) => {
										handleInputChange(event, "checkOut");
									}}
									variant={"filled"}
									readOnly
								/>
								<FormLabel>Last Runner</FormLabel>
								<Input
									variant={"filled"}
									value={
										formData.lastRunner
											? formData.lastRunner
											: ""
									}
									isReadOnly
									tabIndex={-1}
								/>
								<FormLabel>Status</FormLabel>
								<Input
									variant={"filled"}
									value={
										formData.status ? formData.status : ""
									}
									isReadOnly
									tabIndex={-1}
								/>
							</FormControl>

							<FormControl>
								<FormLabel>Room</FormLabel>
								<Input
									value={formData.room ? formData.room : ""}
									onChange={(event) => {
										handleInputChange(event, "room");
									}}
								/>
								<FormLabel>Vehicle Make</FormLabel>
								<Input
									value={
										formData.vehicleMake
											? formData.vehicleMake
											: ""
									}
									onChange={(event) => {
										handleInputChange(event, "vehicleMake");
									}}
								/>
								<FormLabel>Vehicle Model</FormLabel>
								<Input
									value={
										formData.vehicleModel
											? formData.vehicleModel
											: ""
									}
									onChange={(event) => {
										handleInputChange(
											event,
											"vehicleModel"
										);
									}}
								/>
								<FormLabel>Vehicle Color</FormLabel>
								<Input
									value={
										formData.vehicleColor
											? formData.vehicleColor
											: ""
									}
									onChange={(event) => {
										handleInputChange(
											event,
											"vehicleColor"
										);
									}}
								/>
								<FormLabel>Vehicle Plate</FormLabel>
								<Input
									value={
										formData.vehiclePlate
											? formData.vehiclePlate
											: ""
									}
									onChange={(event) => {
										handleInputChange(
											event,
											"vehiclePlate"
										);
									}}
								/>
								<FormLabel>Vehicle Location</FormLabel>
								<Select
									placeholder="Select Location"
									value={
										formData.vehicleLocation
											? formData.vehicleLocation
											: ""
									}
									onChange={(event) => {
										handleInputChange(
											event,
											"vehicleLocation"
										);
									}}>
									{createLocationOptions()}
								</Select>
							</FormControl>
						</HStack>
					</ModalBody>

					<ModalFooter>
						<Button mx={1} variant="outline" onClick={coOnOpen}>
							Check Out
						</Button>
						<Button mx={1} variant="outline" onClick={reqOnOpen}>
							Request
						</Button>
						<Button
							mx={1}
							colorScheme="blue"
							mr={0}
							onClick={doSave}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<AlertDialog
				isOpen={saveIsOpen}
				leastDestructiveRef={saveCancelRef}
				onClose={saveOnClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Unsaved Changes!
						</AlertDialogHeader>

						<AlertDialogBody>
							The changes you made haven't been saved! Are you
							sure you want to escape this modal?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={saveCancelRef} onClick={saveOnClose}>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={doContinue}
								ml={3}>
								Continue
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			<AlertDialog
				isOpen={coIsOpen}
				leastDestructiveRef={coCancelRef}
				onClose={coOnClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Checkout #{ticket.ticketId}
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure you want to checkout ticket #
							{ticket.ticketId}. This can be undone later.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={coCancelRef} onClick={coOnClose}>
								Cancel
							</Button>
							<Button
								colorScheme="green"
								onClick={doContinue}
								ml={3}>
								Check Out
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
			<AlertDialog
				isOpen={reqIsOpen}
				leastDestructiveRef={reqCancelRef}
				onClose={reqOnClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Request #{ticket.ticketId}
						</AlertDialogHeader>

						<AlertDialogBody>
							The request will be sent to the Car Log via web. Are
							you sure you want to send it?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={reqCancelRef} onClick={reqOnClose}>
								Cancel
							</Button>
							<Button
								colorScheme="green"
								onClick={doContinue}
								ml={3}>
								Request
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	) : null;
}

export default TicketModal;
