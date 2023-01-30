import ContactSideBar from "./components/ContactSideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SocialNetworksSideBar } from "./components/SocialNetworks";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Portfolio />
      <SocialNetworksSideBar />
      <ContactSideBar />
      <Footer />
    </div>
  );
}
