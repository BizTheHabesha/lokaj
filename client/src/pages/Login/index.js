import React from "react";
import { Stack, Switch } from "@chakra-ui/react";
import PageContent from "../../components/PageContent";

function Login() {
	return (
		<PageContent nonav>
			<Stack align="center" direction="row">
				<Switch size="sm" />
				Login
				<Switch size="md" />
				Login
				<Switch size="lg" />
				Login
			</Stack>
		</PageContent>
	);
}

export default Login;
