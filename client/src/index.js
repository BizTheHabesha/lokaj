import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme";

ReactDOM.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</ChakraProvider>
	</StrictMode>,
	document.getElementById("root")
);

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
// 	<StrictMode>
// 		<ChakraProvider theme={theme}>
// 			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
// 			<App />
// 		</ChakraProvider>
// 	</StrictMode>
// );
