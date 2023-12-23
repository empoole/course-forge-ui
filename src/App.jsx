import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/teach/dashboard/Dashboard";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import CreateCourse from "./layouts/createCourse/CreateCourse";
import Preview from "./components/Preview";

function App() {
  return (
    <AuthProvider>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/preview" element={<Preview />} />

          <Route
            path="/teach"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teach/create"
            element={
              <ProtectedRoute>
                <CreateCourse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
