import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    useRoutes,
} from "react-router-dom";
import DoorsViewComponent from "./components/DoorsViewComponent";
import "./App.css";
import DoorDetailedViewComponent from "./components/DoorDetailedViewComponent";

function App() {
    const AppView = () =>
        useRoutes([
            { path: "/", element: <DoorsViewComponent /> },
            { path: "/:pageNum", element: <DoorsViewComponent /> },
            { path: "/doors/:doorId", element: <DoorDetailedViewComponent /> },
        ]);

    return (
        <div className="doors-app--container">
            <Router>
                <AppView />
            </Router>
        </div>
    );
}

export default App;
