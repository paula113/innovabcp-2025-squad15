import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router";
import "./App.css";
import RouterApp from "./routes/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
