import { LOGO } from '../data/constants.js';
import { Heart } from './Art.jsx';

const Bag = () => (
  <svg className="hrt" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header({
  wl,
  setDrawer,
  setView,
  user,
  sc,
  menu,
  setMenu,
  count
}) {
  return (
    <header className={sc ? "sc" : ""}>
      <div id="pg" className="pg" />
      <div className="w nav">
        <a className="brand" href="#/" aria-label="The Noble Aromas home">
          <img src={LOGO} alt="TNA emblem" />
          <span><b>The Noble Aromas</b><small>Perfume Store · Pune</small></span>
        </a>
        <nav className="dn" aria-label="Main">
          <a href="#shop">Shop</a>
          <a href="#/home/cats">Collections</a>
          <a href="#/home/reviews">Reviews</a>
          <a href="#/home/store">Store</a>
        </nav>
        <span style={{ flex: 1 }} />
        <a className="btn sn" href="#shop">Shop Now</a>
        <button className="ic lg" onClick={() => setView(user ? "acct" : "login")}>
          {user ? "Hi, " + user.split(" ")[0] : "Login"}
        </button>
        <button
          className="ic big"
          onClick={() => setView("wish")}
          aria-label={"Wishlist, " + wl.length + " items"}
        >
          <Heart on={wl.length > 0} />
          <span className="bd">{wl.length}</span>
        </button>
        <button
          className="ic big"
          onClick={() => setDrawer(true)}
          aria-label={"Shopping bag, " + count + " items"}
        >
          <Bag />
          <span className="bd">{count}</span>
        </button>
        <button
          className="ic burger"
          aria-label="Menu"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? "✕" : "☰"}
        </button>
      </div>
      {menu && (
        <div className="mm" onClick={() => setMenu(false)}>
          <a href="#shop">Shop Now</a>
          <a href="#/home/cats">Collections</a>
          <a href="#/home/reviews">Reviews</a>
          <a href="#/home/store">Store</a>
          <a
            href="#/"
            onClick={e => {
              e.preventDefault();
              setView(user ? "acct" : "login");
            }}
          >
            {user ? "Account" : "Login"}
          </a>
        </div>
      )}
    </header>
  );
}
