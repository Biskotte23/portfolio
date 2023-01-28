import ContactSideBar from "./components/ContactSideBar";
import Header from "./components/Header";
import SocialNetworksSideBar from "./components/SocialNetworksSideBar";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
  return (
    <>
      <Header />
      <SocialNetworksSideBar />
      <ContactSideBar />
      <Portfolio />
    </>
  );
}
