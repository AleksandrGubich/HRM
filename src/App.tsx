import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { WrongPage } from "./pages/WrongPage/WrongPage";
import { ContentPage } from "./pages/ContentPage/ContentPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/content" element={<ContentPage />} />
      <Route path="*" element={<WrongPage />} />
    </Routes>
  );
}
