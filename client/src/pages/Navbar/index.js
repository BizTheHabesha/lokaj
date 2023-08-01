import React from "react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import {
	AiOutlineHome,
	AiOutlineCar,
	AiOutlineClockCircle,
} from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";

function Navbar(props) {
	return (
		<Tabs
			defaultIndex={props.active}
			isFitted
			variant="soft-rounded"
			size={"lg"}
			pt={4}
			px={3}>
			<TabList mb="1em">
				<Tab px={1} as={"a"} href="/">
					<AiOutlineHome size={30} />
				</Tab>
				<Tab px={1} as={"a"} href="/carlog">
					<AiOutlineCar size={30} />
				</Tab>
				<Tab px={1} as={"a"} href="/payroll">
					<GrDocumentUser size={30} />
				</Tab>
				<Tab px={1} as={"a"} href="/reports">
					<HiOutlineDocumentReport size={30} />
				</Tab>
				<Tab px={1} as={"a"} href="/clock">
					<AiOutlineClockCircle size={30} />
				</Tab>
			</TabList>
		</Tabs>
	);
}

export default Navbar;
