import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { WrongPage } from "./pages/WrongPage/WrongPage";
import { ContentPage } from "./pages/ContentPage/ContentPage";
import { CourseDetailsPage } from "./pages/CourseDetailsPage/CourseDetailsPage";
import { useAppSelector } from "./app/hooks";

export function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/content"
        element={isAuth ? <ContentPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/courses/:id"
        element={
          isAuth ? <CourseDetailsPage /> : <Navigate to="/login" replace />
        }
      />
      <Route path="*" element={<WrongPage />} />
    </Routes>
  );
}
