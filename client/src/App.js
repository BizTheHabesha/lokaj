import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Ticket from "./pages/Ticket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CarLog from "./pages/CarLog";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";
import Clock from "./pages/Clock";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { useColorMode } from "@chakra-ui/react";
import "./App.css";

const client = new ApolloClient({
	url: "/graphql",
	cache: new InMemoryCache(),
});

function App() {
	const { colorMode } = useColorMode();
	const defaultScheme = colorMode === "light" ? "red" : "gray";
	return (
		<ApolloProvider client>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home defaultScheme={defaultScheme} />}
					/>{" "}
					{/* main menu */}
					<Route path="/login" element={<Login />} />
					<Route
						path="/carlog"
						element={<CarLog defaultScheme={defaultScheme} />}
					/>
					<Route
						path="/payroll"
						element={<Payroll defaultScheme={defaultScheme} />}
					/>
					<Route
						path="/reports"
						element={<Reports defaultScheme={defaultScheme} />}
					/>
					<Route
						path="/clock"
						element={<Clock defaultScheme={defaultScheme} />}
					/>
					<Route
						path="/tickets/:id"
						element={<Ticket defaultScheme={defaultScheme} />}
					/>
					<Route
						path="/users/:id"
						element={<User defaultScheme={defaultScheme} />}
					/>
					<Route
						path="*"
						element={<NotFound defaultScheme={defaultScheme} />}
					/>
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
