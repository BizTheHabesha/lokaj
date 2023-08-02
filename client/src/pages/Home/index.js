import React from "react";
import {
	GridItem,
	Grid,
	TableContainer,
	Table,
	TableCaption,
	Thead,
	Th,
	Tr,
	Td,
	Tbody,
	Tfoot,
} from "@chakra-ui/react";
import { uuid } from "../../utils/helpers";
import PageContent from "../../components/PageContent";

function Home(props) {
	return (
		<PageContent active={0}>
			<h1>HOME</h1>
		</PageContent>
	);
}

export default Home;
