import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { HomeNavbar } from "./components/Client/HomeNavbar/HomeNavbar";
import { HomeImagesAlbum } from "./components/Client/HomeImagesAlbum/HomeImagesAlbum";
import { HomeFooter } from "./components/Client/HomeFooter/HomeFooter";
import { GlobalContextProvider } from "./context/store";
import { FilterContextProvider } from "./context/FilterContext";
import { RootRouter } from "./router/root";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <GlobalContextProvider>
          <HomeImagesAlbum />
          <HomeNavbar />
          <RootRouter />
          <HomeFooter />
        </GlobalContextProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}

export default App;
