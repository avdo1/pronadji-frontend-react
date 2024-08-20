import React from "react";
import { RootRouter } from "./router/root";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import "./App.css";
import { HomeNavbar } from "./components/Client/HomeNavbar/HomeNavbar";
import { HomeImagesAlbum } from "./components/Client/HomeImagesAlbum/HomeImagesAlbum";
import { HomeFooter } from "./components/Client/HomeFooter/HomeFooter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeImagesAlbum />
      <HomeNavbar />
      <RootRouter />
      <HomeFooter />
    </QueryClientProvider>
  );
}

export default App;
