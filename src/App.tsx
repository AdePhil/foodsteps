import "./App.css";
import { ConfigProvider } from "antd";
import { ActiveUserProvider } from "./context/ActiveUserContext";
import Router from "./router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Helvetica Neue",
          colorPrimary: "black",
        },
      }}
    >
      <ActiveUserProvider>
        <Router />
      </ActiveUserProvider>
    </ConfigProvider>
  );
}

export default App;
