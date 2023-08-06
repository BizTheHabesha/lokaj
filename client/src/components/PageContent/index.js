import { Center } from "@chakra-ui/react";
import "./index.css";
import React from "react";
import Navbar from "../../pages/Navbar";

function PageContent(props) {
	return (
		<div className="page-content">
			{props.nonav ? (
				""
			) : (
				<Navbar
					defaultScheme={props.defaultScheme}
					active={props.active}
				/>
			)}
			<div className="page-content-page">{props.children}</div>
		</div>
	);
}

export default PageContent;
