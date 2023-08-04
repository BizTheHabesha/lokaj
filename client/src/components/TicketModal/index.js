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
	Input,
	Text,
} from "@chakra-ui/react";

function TicketModal(props) {
	// use contextualized disclosure from parent
	const { isOpen, onClose, ticket } = props;
	// element to focus on save cancel
	const saveCancelRef = useRef();
	// element to focus on c/o cancel
	const coCancelRef = useRef();
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
	// create state context for changes made
	const [changesMade = false, setChangesMade] = useState();

	// create state context for form data
	const [formData, setFormData] = useState({ ...ticket });

	// if changes made, alert user they aren't saved
	const confirmSave = () => {
		changesMade ? saveOnOpen() : doContinue();
	};
	// close the ticket modal
	const doContinue = () => {
		saveIsOpen ? saveOnClose() : null;
		coIsOpen ? coOnClose() : null;
		onClose();
		setChangesMade(false);
	};
	// save the updated data
	const doSave = async () => {
		// await console.log("saved"); replace with api call
		doContinue();
	};
	// when form input is changed, update form state
	const handleInputChange = function (event, from) {
		const newDat = {};
		newDat[from] = event.target.value;
		setFormData({ ...formData, ...newDat });
		setChangesMade(true);
	};

	return props.ticket ? (
		<>
			<Modal isOpen={isOpen} onClose={confirmSave}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader onClick={onToggle}>
						{ticket.ticketId}
						<Collapse in={collapseIsOpen} animateOpacity>
							<Heading as={"h6"} size={"xs"}>
								Metadata
							</Heading>
							<Text fontSize={"xs"}>
								_id: {ticket._id} (internal ref)
							</Text>
						</Collapse>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl isRequired>
							<FormLabel>Last Name</FormLabel>
							<Input
								type="email"
								value={formData.lastName}
								onChange={(event) => {
									handleInputChange(event, "lastName");
								}}
							/>
							<FormLabel>First Name</FormLabel>
							<Input
								type="email"
								value={formData.firstName}
								onChange={(event) => {
									handleInputChange(event, "firstName");
								}}
							/>
							<FormLabel>Check In Date</FormLabel>
							<Input
								type="email"
								value={formData.checkIn}
								onChange={(event) => {
									handleInputChange(event, "checkIn");
								}}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Room</FormLabel>
							<Input
								type="email"
								value={formData.room}
								onChange={(event) => {
									handleInputChange(event, "room");
								}}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button mx={1} variant="ghost" onClick={coOnOpen}>
							Check Out
						</Button>
						<Button mx={1} variant="ghost">
							Request
						</Button>
						<Button
							mx={1}
							colorScheme="blue"
							mr={3}
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
		</>
	) : (
		<></>
	);
}

export default TicketModal;
