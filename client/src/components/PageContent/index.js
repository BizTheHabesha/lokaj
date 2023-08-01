import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../pages/Navbar";

function PageContent(props) {
	return (
		<>
			{props.nonav ? "" : <Navbar active={props.active} />}
			{props.children}
		</>
	);
}

export default PageContent;
