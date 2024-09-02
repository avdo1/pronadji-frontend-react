import { RootRouter } from "./router/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { HomeNavbar } from "./components/Client/HomeNavbar/HomeNavbar";
import { HomeImagesAlbum } from "./components/Client/HomeImagesAlbum/HomeImagesAlbum";
import { HomeFooter } from "./components/Client/HomeFooter/HomeFooter";
import { GlobalContextProvider } from "./context/store";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <HomeImagesAlbum />
        <HomeNavbar />
        <RootRouter />
        <HomeFooter />
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}

export default App;
