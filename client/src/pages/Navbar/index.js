import React from "react";
import { Tabs, TabList, Tab, Tooltip } from "@chakra-ui/react";
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
			colorScheme={props.defaultScheme}
			size={"lg"}
			pt={4}
			px={3}>
			<TabList mb="1em">
				<Tooltip label="Home">
					<Tab px={1} as={"a"} href="/">
						<AiOutlineHome size={30} />
					</Tab>
				</Tooltip>
				<Tooltip label="Car Log">
					<Tab px={1} as={"a"} href="/carlog">
						<AiOutlineCar size={30} />
					</Tab>
				</Tooltip>
				<Tooltip label="Payroll">
					<Tab px={1} as={"a"} href="/payroll">
						<GrDocumentUser size={30} />
					</Tab>
				</Tooltip>
				<Tooltip label="Reports">
					<Tab px={1} as={"a"} href="/reports">
						<HiOutlineDocumentReport size={30} />
					</Tab>
				</Tooltip>
				<Tooltip label="Time Clock">
					<Tab px={1} as={"a"} href="/clock">
						<AiOutlineClockCircle size={30} />
					</Tab>
				</Tooltip>
			</TabList>
		</Tabs>
	);
}

export default Navbar;
