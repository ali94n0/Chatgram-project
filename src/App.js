import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Chat from "./components/Chat";
import UserDataProvidersContext from "./contexts/userDataProvidersContext";

function App() {
  return (
    <div className="App">
      <UserDataProvidersContext>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </UserDataProvidersContext>
    </div>
  );
}

export default App;
