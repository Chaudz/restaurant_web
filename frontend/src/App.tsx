import { useEffect } from "react";
import AppRouter from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return <AppRouter />;
}

export default App;
