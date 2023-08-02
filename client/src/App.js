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

const client = new ApolloClient({
	url: "/graphql",
	cache: new InMemoryCache(),
});
const defaultScheme = "red";

function App() {
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
					<Route path="/payroll" element={<Payroll />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/clock" element={<Clock />} />
					<Route path="/tickets/:id" element={<Ticket />} />
					<Route path="/users/:id" element={<User />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
