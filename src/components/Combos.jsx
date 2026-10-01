import { P, COMBOS } from '../data/products.js';
import { inr } from '../utils/format.js';
import Bottle from './Bottle.jsx';

export default function Combos({
  wl,
  add,
  tw
}) {
  return (
    <>
      <section className="sec" id="combos">
        <div className="w">
          <div className="hd"><span>Combo Offers</span><h2>Curated Sets</h2></div>
          <div className="cg">
            {COMBOS.map(c => (
              <div className="card cmb" key={c.id}>
                <span className="tag">COMBO</span>
                <button className="wl" aria-label="Toggle wishlist" onClick={() => tw(c)}>
                  {wl.includes(c.id) ? "♥" : "♡"}
                </button>
                <a className="img" href={"#/product/" + c.id} aria-label={"View " + c.name}>
                  <div className="trio">{c.items.map(i => <div key={i}><Bottle c={P[i].c} /></div>)}</div>
                </a>
                <div className="cb">
                  <small>{c.items.length} attars</small>
                  <h3>{c.name}</h3>
                  <p className="cn">{c.items.map(i => P[i].name).join(" · ")}</p>
                  <div className="pr">
                    {inr(c.price)}
                    {" "}
                    <s>{inr(c.orig)}</s>
                    {" "}
                    <small>10% off · demo price</small>
                  </div>
                  <button className="btn w2" onClick={() => add(c)}>Add Combo to Bag</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
