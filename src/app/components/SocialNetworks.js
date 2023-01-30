export function SocialNetworks() {
  return (
    <ul className="social-networks">
      <li>
        <a href="/" className="link--highlighted">
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li>
        <a href="/" className="link--highlighted">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="/" className="link--highlighted">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
}

export function SocialNetworksSideBar() {
  return (
    <div className="side-bar--social-networks">
      <SocialNetworks />
      <div className="side-bar__vertical-line"></div>
    </div>
  );
}
