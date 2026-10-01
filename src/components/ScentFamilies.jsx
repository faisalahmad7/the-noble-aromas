import { P, FC, CATS } from '../data/products.js';
import Bottle from './Bottle.jsx';

export default function ScentFamilies({
  cat,
  setCat
}) {
  return (
    <>
      <section className="sec" id="cats">
        <div className="w">
          <div className="hd"><span>Collections</span><h2>Shop by Scent Family</h2></div>
          <div className="cats">
            {CATS.slice(1).map(c => {
              const n = P.filter(p => p.fam === c).length;
              return (
                <button
                  key={c}
                  className={"arch" + (cat === c ? " on" : "")}
                  style={{ "--t": FC[c] }}
                  onClick={() => {
                    setCat(c);
                    location.hash = "#shop";
                  }}
                >
                  <span className="ar">
                    <span className="ai"><span className="bt"><Bottle c={FC[c]} /></span></span>
                  </span>
                  <b>{c}</b>
                  <em>{n} fragrance{n > 1 ? "s" : ""}</em>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
