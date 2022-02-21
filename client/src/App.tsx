import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import DoorsViewComponent from "./components/DoorsViewComponent";
import "./App.css";
import DoorDetailedViewComponent from "./components/DoorDetailedViewComponent";

function App() {
    return (
        <div className="doors-app--container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DoorsViewComponent />} />
                    <Route
                        path="/doors/:doorId"
                        element={<DoorDetailedViewComponent />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
