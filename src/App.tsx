import { BrowserRouter } from "react-router-dom";
import JobContextProvider from "./context/JobContext";
import SetupRouter from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <JobContextProvider>
        <SetupRouter />
      </JobContextProvider>
    </BrowserRouter>
  );
}

export default App;
