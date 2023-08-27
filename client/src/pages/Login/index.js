import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Spinner,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Link,
	Stack,
	Text,
	Image,
	useToast,
} from "@chakra-ui/react";
import PageContent from "../../components/PageContent";
import auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";
import { uuid } from "../../utils/helpers";

function Login() {
	// const {data} = await loginUser({
	//     variables: {...userFormData}
	//   })
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [loginUser, { loading, error, data }] = useMutation(LOGIN);
	const toast = useToast();
	const loadingToastId = 1;
	const errorToastId = 2;
	const successToastId = 3;

	useEffect(() => {
		const token = auth.getToken();
		loading && !toast.isActive(loadingToastId)
			? toast({
					id: loadingToastId,
					title: "Logging in",
					description: "Please wait while we log you in.",
					status: "info",
					duration: 5000,
					isClosable: true,
			  })
			: toast.close(loadingToastId);
		token && !toast.isActive(successToastId)
			? toast(
					{
						id: successToastId,
						title: "Already logged in",
						description: "You are already logged in.",
						status: "info",
						duration: 5000,
						isClosable: true,
					},
					window.location.replace("/")
			  )
			: null;
	});
	/**
	 *
	 * @param {Event} event
	 */

	const handleFormSubmit = async function (event) {
		event.preventDefault();
		if (!formData.username || !formData.password) {
			!toast.isActive(4)
				? toast({
						id: 4,
						title: "Error",
						description: "Please enter a username and password.",
						status: "warning",
				  })
				: null;
			return;
		}
		try {
			const { data } = await loginUser({
				variables: { ...formData },
			});
			if (!data.login.token) {
				toast({
					id: errorToastId,
					title: "Error",
					description: "Incorrect username and password!",
					status: "error",
				});
				return;
			}
			auth.login(data.login.token);
			toast({
				id: successToastId,
				title: "Logged in",
				description: "You are now logged in.",
				status: "success",
				duration: 5000,
			});
		} catch (error) {
			toast({
				title: "Error",
				description: `${error.message}`,
				status: "error",
			});
		}
	};

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
						<form onSubmit={handleFormSubmit}>
							<Stack spacing="6">
								<Stack spacing="5">
									<FormControl>
										<FormLabel htmlFor="username">
											Username
										</FormLabel>
										<Input
											id="username"
											onChange={(e) => {
												setFormData({
													...formData,
													username: e.target.value,
												});
											}}
										/>
										<FormLabel htmlFor="password">
											Password
										</FormLabel>
										<Input
											id="password"
											type="password"
											onChange={(e) => {
												setFormData({
													...formData,
													password: e.target.value,
												});
											}}
										/>
									</FormControl>
								</Stack>
								<HStack justify="space-between">
									<Checkbox defaultChecked>
										Remember me
									</Checkbox>
									<Button variant="text" size="sm">
										Forgot password?
									</Button>
								</HStack>
								<Stack spacing="6">
									<Button type="submit">
										{loading ? <Spinner mr={2} /> : null}
										Sign in
									</Button>
								</Stack>
							</Stack>
						</form>
					</Box>
				</Stack>
			</Container>
		</PageContent>
	);
}

export default Login;
