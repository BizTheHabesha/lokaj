import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import PageContent from "../../components/PageContent";

function Home() {
	return (
		<PageContent active={0}>
			<Box></Box>
			<Box></Box>
			<Box></Box>
		</PageContent>
	);
}

export default Home;
