import "./styles.css";
import { hydrateRoot } from "react-dom/client";
import Home from "./page";

hydrateRoot(document.getElementById("root"), <Home />);
