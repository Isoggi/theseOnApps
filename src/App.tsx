import { LoginPage } from "./features/authentication/pages";
import ExamplePage from "./pages/ExamplePage";
import {
  NavbarComponent,
  FooterComponent,
  SideBarComponent,
} from "./shared/components";
import { RootLayout } from "./shared/layouts";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
