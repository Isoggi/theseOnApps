import ExamplePage from "./pages/ExamplePage";
import {
  NavbarComponent,
  FooterComponent,
  SideBarComponent,
} from "./shared/components";
import { GetNavbarRoute } from "./shared/utils";
import {} from "react";

function App() {
  const routes = GetNavbarRoute();
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <NavbarComponent routes={routes} classname={""} />
      <SideBarComponent />
      <ExamplePage />
      <FooterComponent />
    </div>
  );
}

export default App;
