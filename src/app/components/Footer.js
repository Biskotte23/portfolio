import { SocialNetworks } from "./SocialNetworks";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialNetworks />
      <p className="footer__sentence">
        Jules <span className="uppercase">Pascot</span>
        <span className="copyright"> © 2023</span>
      </p>
    </footer>
  );
}
