import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
//import Footer from "./components/shared/Footer.component";
import Header from "./components/shared/Header.component";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen w-screen overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-800 text-white">
          <Header />
          <App />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);
