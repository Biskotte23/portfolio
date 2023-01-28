export default function SocialNetworksSideBar() {
  return (
    <div className="side-bar--social-networks">
      <ul className="side-bar__social-networks">
        <li>
          <a href="/">
            <i className="link--highlighted fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="link--highlighted fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="link--highlighted fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <div className="side-bar__vertical-line"></div>
    </div>
  );
}
