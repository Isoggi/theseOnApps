import { LoginPage } from "./features/authentication/pages";
import ExamplePage from "./pages/ExamplePage";
import { NotFound } from "./pages/NotFound.page";
import { RootLayout } from "./shared/layouts";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<ExamplePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
