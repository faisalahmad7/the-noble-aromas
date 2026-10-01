import { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { SHOP_CATS } from '../data/products.js';

export default function ShopPage({
  wl,
  add,
  tw,
  q,
  setQ,
  cat,
  setCat,
  sort,
  setSort,
  list
}) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoad(false), 450);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="sec shopp">
      <div className="w">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          {" "}/{" "}
          <span>Shop</span>
        </nav>
        <div className="hd"><span>Attars & Fragrances</span><h1>Shop All</h1></div>
        <div className="tools">
          <input
            type="search"
            placeholder="Search fragrances"
            aria-label="Search"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <select aria-label="Family" value={cat} onChange={e => setCat(e.target.value)}>
            {SHOP_CATS.map(c => <option key={c}>{c}</option>)}
          </select>
          <select aria-label="Sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">Featured</option>
            <option value="a">Price: Low to High</option>
            <option value="d">Price: High to Low</option>
            <option value="n">Name A–Z</option>
          </select>
          <button
            className="btn o"
            onClick={() => {
              setQ("");
              setCat("All");
              setSort("");
            }}
          >
            Clear
          </button>
        </div>
        <p className="cnt">{list.length} products · demo catalogue, prices are placeholders</p>
        <div className="grid">
          {load ? Array.from({ length: 8 }).map((_, i) => (
            <div className="card sk" key={i}>
              <div className="img" />
              <div className="cb"><i /><i /></div>
            </div>
          )) : list.map((p, i) => <ProductCard key={p.id} p={p} i={i} wl={wl} tw={tw} add={add} />)}
          {!load && !list.length && <p>No fragrances match. Clear the filters to see everything.</p>}
        </div>
      </div>
    </section>
  );
}
