import React from "react";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Link,
	Stack,
	Text,
	Image,
} from "@chakra-ui/react";
import PageContent from "../../components/PageContent";

function Login() {
	return (
		<PageContent nonav>
			<Container
				maxW="lg"
				py={{ base: "12", md: "24" }}
				px={{ base: "0", sm: "8" }}>
				<Stack spacing="8">
					<Stack spacing="6">
						<Image src="logo.svg" h="10em" />
						<Stack
							spacing={{ base: "2", md: "3" }}
							textAlign="center">
							<Heading size={{ base: "xs", md: "sm" }}>
								Log in to your account
							</Heading>
							<Text color="fg.muted">
								Don't have an account?{" "}
								<Link href="#">Apply Now!</Link>
							</Text>
						</Stack>
					</Stack>
					<Box
						py={{ base: "0", sm: "8" }}
						px={{ base: "4", sm: "10" }}
						bg={{ base: "transparent", sm: "bg.surface" }}
						boxShadow={{ base: "none", sm: "md" }}
						borderRadius={{ base: "none", sm: "xl" }}>
						<Stack spacing="6">
							<Stack spacing="5">
								<FormControl>
									<FormLabel htmlFor="username">
										Username
									</FormLabel>
									<Input id="username" />
									<FormLabel htmlFor="password">
										Password
									</FormLabel>
									<Input id="password" type="password" />
								</FormControl>
							</Stack>
							<HStack justify="space-between">
								<Checkbox defaultChecked>Remember me</Checkbox>
								<Button variant="text" size="sm">
									Forgot password?
								</Button>
							</HStack>
							<Stack spacing="6">
								<Button>Sign in</Button>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</PageContent>
	);
}

export default Login;
