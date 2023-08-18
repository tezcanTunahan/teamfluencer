import "@/style/nav.scss";
export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <a href="/" className="nav__left">
          Teamfluencer
        </a>
      </div>
      <div className="nav__right">
        <a href="http://tunahantezcan.com/" target="_blank">
          created by <span>tunahan </span>
        </a>
      </div>
    </nav>
  );
}
