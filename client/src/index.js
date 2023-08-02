import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./App.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./utils/theme";

// const theme = extendTheme({
// 	config: {
// 		initialColorMode: "dark",
// 		// useSystemColorMode: false,
// 	},
// });

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
