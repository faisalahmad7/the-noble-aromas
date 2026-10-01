import { useState, useEffect, useRef, useMemo } from 'react';
import { P, COMBOS, ALL, pz } from './data/products.js';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ScentFamilies from './components/ScentFamilies.jsx';
import Shop from './components/Shop.jsx';
import Combos from './components/Combos.jsx';
import WhyTrust from './components/WhyTrust.jsx';
import Reviews from './components/Reviews.jsx';
import Store from './components/Store.jsx';
import Footer from './components/Footer.jsx';
import ShopPage from './components/ShopPage.jsx';
import ProductPage from './components/ProductPage.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import AccountModals from './components/AccountModals.jsx';

export default function App() {
  const ld = (k, d) => {
    try {
      return JSON.parse(localStorage.getItem(k)) || d;
    } catch (e) {
      return d;
    }
  };
  const [cart, setCart] = useState(() => ld("tna_c", {}));
  const [wl, setWl] = useState(() => ld("tna_w", []));
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("");
  const prs = () => {
    const s = location.hash.replace(/^#\/?/, "").split("/");
    const pg = s[0] === "shop" ? "shop" : s[0] === "product" ? "product" : "home";
    return {
      pg,
      id: s[1],
      sec: pg === "home" ? s[0] === "home" ? s[1] : s[0] : ""
    };
  };
  const [rt, setRt] = useState(prs);
  useEffect(() => {
    const f = () => setRt(prs());
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  useEffect(() => {
    setMenu(false);
    setTimeout(() => {
      const e = rt.sec && document.getElementById(rt.sec);
      e ? e.scrollIntoView() : scrollTo(0, 0);
    }, 60);
  }, [rt.pg, rt.id, rt.sec]);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const f = () => setTop(scrollY > 600);
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const [drawer, setDrawer] = useState(false);
  const [view, setView] = useState(null);
  const [toast, setToast] = useState("");
  const [pay, setPay] = useState("Card");
  const [user, setUser] = useState(() => ld("tna_u", null));
  const px = useRef([]);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
      hv = matchMedia("(hover:hover)").matches;
    const sp = () => {
      const pg = document.getElementById("pg");
      if (!pg) return;
      const h = document.documentElement.scrollHeight - innerHeight;
      pg.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
    };
    addEventListener("scroll", sp, { passive: true });
    const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .12 });
    document.querySelectorAll(".home .hd,.rev blockquote,.store .w>div").forEach(el => {
      el.classList.add("rv");
      io.observe(el);
    });
    return () => {
      removeEventListener("scroll", sp);
      io.disconnect();
    };
  }, []);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const f = () => setSc(scrollY > 30);
    f();
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("tna_c", JSON.stringify(cart));
      localStorage.setItem("tna_w", JSON.stringify(wl));
      localStorage.setItem("tna_u", JSON.stringify(user));
    } catch (e) {}
  }, [cart, wl, user]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    let t;
    const f = () => {
      const y = scrollY;
      if (y > 700) return;
      px.current.forEach((el, i) => el && (el.style.transform = `translate3d(0,${y * [.12, -.08, .2][i]}px,0)`));
    };
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const k = e => {
      if (e.key === "Escape") {
        setView(null);
        setDrawer(false);
      }
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  const say = m => {
    setToast(m);
    setTimeout(() => setToast(""), 1800);
  };
  const add = (p, n = 1, s = 12) => {
    const k = p.combo ? String(p.id) : p.id + "|" + s;
    setCart(c => ({ ...c, [k]: (c[k] || 0) + n }));
    say(p.name + " added to bag");
  };
  const items = Object.keys(cart).filter(k => cart[k] > 0 && ALL[k.split("|")[0]]).map(k => {
    const [i, s] = k.split("|"),
      p = ALL[i],
      size = s ? +s : 12;
    return { k, p, size, n: cart[k], price: pz(p, size) };
  });
  const count = items.reduce((s, i) => s + i.n, 0),
    sub = items.reduce((s, i) => s + i.n * i.price, 0),
    ship = sub > 999 || !sub ? 0 : 49;
  const list = useMemo(() => {
    let l = [...P, ...COMBOS].filter(p => (cat === "All" || p.fam === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "a") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "d") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "n") l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [q, cat, sort]);
  const tw = p => setWl(w => w.includes(p.id) ? w.filter(x => x !== p.id) : [...w, p.id]);
  const [ok, setOk] = useState(false);
  const prod = rt.pg === "product" ? ALL[rt.id] : null;
  return (
    <>
      <a
        className="skip"
        href="#main"
        onClick={e => {
          e.preventDefault();
          document.getElementById("top").focus();
        }}
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header
        wl={wl}
        setDrawer={setDrawer}
        setView={setView}
        user={user}
        sc={sc}
        menu={menu}
        setMenu={setMenu}
        count={count}
      />
      <main id="top" tabIndex={-1} className={rt.pg === "home" ? "home" : ""}>
        {rt.pg === "shop" && (
          <ShopPage
            wl={wl}
            add={add}
            tw={tw}
            q={q}
            setQ={setQ}
            cat={cat}
            setCat={setCat}
            sort={sort}
            setSort={setSort}
            list={list}
          />
        )}
        {rt.pg === "product" && <ProductPage p={prod} wl={wl} tw={tw} add={add} setView={setView} setOk={setOk} />}
        {rt.pg === "home" && (
          <>
            <Hero px={px} />
            <Features />
            <ScentFamilies cat={cat} setCat={setCat} />
            <Shop wl={wl} add={add} tw={tw} />
            <Combos wl={wl} add={add} tw={tw} />
            <WhyTrust />
            <Reviews />
            <Store />
          </>
        )}
      </main>
      <Footer />
      <CartDrawer
        setCart={setCart}
        drawer={drawer}
        setDrawer={setDrawer}
        setView={setView}
        setOk={setOk}
        items={items}
        sub={sub}
      />
      <AccountModals
        setCart={setCart}
        wl={wl}
        view={view}
        setView={setView}
        pay={pay}
        setPay={setPay}
        user={user}
        setUser={setUser}
        ok={ok}
        setOk={setOk}
        say={say}
        add={add}
        items={items}
        sub={sub}
        ship={ship}
        tw={tw}
      />
      {top && (
        <button className="totop" aria-label="Back to top" onClick={() => scrollTo({ top: 0 })}>
          ↑
        </button>
      )}
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}
