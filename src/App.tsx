import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsPage from "./PostsPage";
import "./App.css";
import { ConfigProvider } from "antd";
import UserDetailsPage from "./UserDetailsPage";
import { ActiveUserProvider } from "./context/ActiveUserContext";

export const DEFAULT_USER_ID = 1;

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
        <BrowserRouter>
          <Routes>
            <Route path="posts" element={<PostsPage />} />
            <Route path="active-user" element={<UserDetailsPage />} />
            <Route path="*" element={<PostsPage />} />
          </Routes>
        </BrowserRouter>
      </ActiveUserProvider>
    </ConfigProvider>
  );
}

export default App;
