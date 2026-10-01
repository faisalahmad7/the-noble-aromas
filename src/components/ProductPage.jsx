import { useState, useEffect } from 'react';
import { P, COMBOS, ALL, NOTES, SIZES, pz } from '../data/products.js';
import { inr } from '../utils/format.js';
import Art, { Heart } from './Art.jsx';
import ProductCard from './ProductCard.jsx';

export default function ProductPage({
  p,
  wl,
  tw,
  add,
  setView,
  setOk
}) {
  const [size, setSize] = useState(12),
    [qty, setQty] = useState(1),
    [v, setV] = useState(0),
    [open, setOpen] = useState(0);
  useEffect(() => {
    setSize(12);
    setQty(1);
    setV(0);
  }, [p && p.id]);
  if (!p) return (
    <section className="sec">
      <div className="w">
        <p>We couldn't find that product.</p>
        <a className="btn" href="#shop">Back to shop</a>
      </div>
    </section>
  );
  const price = pz(p, size),
    on = wl.includes(p.id),
    nt = NOTES[p.fam] || [],
    rel = [...P, ...COMBOS].filter(x => x.id !== p.id && x.fam === p.fam).concat(P.filter(x => x.fam !== p.fam)).slice(0, 4);
  const acc = [
    ["Shipping", "Free shipping above ₹999, otherwise ₹49. Delivery time is placeholder text, confirm before launch."],
    ["Returns", "Easy returns on unopened bottles. Placeholder policy, confirm before launch."],
    ["Payment", "Card, UPI, net banking and COD are listed for the demo checkout only."]
  ];
  return (
    <section className="sec pp">
      <div className="w">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          {" "}/{" "}
          <a href="#shop">Shop</a>
          {" "}/{" "}
          <span>{p.name}</span>
        </nav>
        <div className="pgrid">
          <div className="gal">
            <div className="thumbs">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  className={v === i ? "on" : ""}
                  onClick={() => setV(i)}
                  aria-label={"View " + (i + 1)}
                >
                  <Art p={p} v={i} />
                </button>
              ))}
            </div>
            <div className="main img"><Art p={p} v={v} /></div>
          </div>
          <div className="info">
            <small className="fam">{p.combo ? "Combo set" : p.fam + " attar"}</small>
            <h1>{p.name}</h1>
            <div className="big">{inr(price)} {p.combo && <s>{inr(p.orig)}</s>}</div>
            <p className="tx">Inclusive of all taxes. Demo price.</p>
            <p className="desc">
              {p.combo ? "Includes " + p.items.map(i => P[i].name).join(", ") + ". A curated set at 10% off." : p.name + " is a " + p.fam.toLowerCase() + " attar from our demo catalogue. Ask in store for live availability."}
            </p>
            {!p.combo && (
              <>
                <b>Size</b>
                <div className="sz">
                  {SIZES.map(s => (
                    <button key={s} className={size === s ? "on" : ""} onClick={() => setSize(s)}>
                      {s}
                      ml
                      <span>{inr(pz(p, s))}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            <div className="q">
              Qty{" "}
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
              {" "}
              {qty}
              {" "}
              <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
            </div>
            <div className="acts">
              <button className="btn" onClick={() => add(p, qty, size)}>Add to Bag</button>
              <button
                className="btn dk"
                onClick={() => {
                  add(p, qty, size);
                  setOk(false);
                  setView("co");
                }}
              >
                Buy Now
              </button>
              <button
                className={"btn o hb" + (on ? " on" : "")}
                onClick={() => tw(p)}
                aria-pressed={on}
              >
                <Heart on={on} />
                {" "}
                {on ? "In Wishlist" : "Wishlist"}
              </button>
            </div>
            {!p.combo && (
              <div className="notes">
                <b>Scent notes</b>
                <dl>
                  <dt>Top</dt>
                  <dd>{nt[0].join(", ")}</dd>
                  <dt>Heart</dt>
                  <dd>{nt[1].join(", ")}</dd>
                  <dt>Base</dt>
                  <dd>{nt[2].join(", ")}</dd>
                </dl>
              </div>
            )}
            <div className="acc">
              {acc.map((a, i) => (
                <div key={a[0]}>
                  <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                    {a[0]}
                    <span>{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && <p>{a[1]}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hd" style={{ marginTop: 64 }}><h2>You may also like</h2></div>
        <div className="grid">
          {rel.map((x, i) => <ProductCard key={x.id} p={x} i={i} wl={wl} tw={tw} add={add} />)}
        </div>
      </div>
    </section>
  );
}
