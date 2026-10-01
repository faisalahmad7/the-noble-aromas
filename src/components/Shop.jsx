import ProductCard from './ProductCard.jsx';
import { P } from '../data/products.js';

export default function Shop({
  wl,
  add,
  tw
}) {
  return (
    <section className="sec" id="featured" style={{ background: "var(--cr)" }}>
      <div className="w">
        <div className="hd"><span>Attars & Fragrances</span><h2>Our Bestsellers</h2></div>
        <div className="grid">
          {P.slice(0, 8).map((p, i) => <ProductCard key={p.id} p={p} i={i} wl={wl} tw={tw} add={add} />)}
        </div>
        {" "}
        <p style={{ textAlign: "center", marginTop: 30 }}>
          <a className="btn" href="#shop">View all {P.length} fragrances</a>
        </p>
      </div>
    </section>
  );
}
