import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { LoginContextProvider } from "./LoginContext";
import { FavouritesProvider } from "./FavouritesContext";

function App() {
  
  return(
    <LoginContextProvider>
      <FavouritesProvider>

        <RouterProvider router={routes} />;

      </FavouritesProvider>

    </LoginContextProvider>
  ); 
}

export default App;
