import { inr } from '../utils/format.js';
import Art, { Heart } from './Art.jsx';

export default function ProductCard({
  p,
  wl,
  tw,
  add,
  i = 0
}) {
  const on = wl.includes(p.id);
  return (
    <div className="card" style={{ animationDelay: i % 8 * 50 + "ms" }}>
      {p.best && <span className="tag">BEST SELLER</span>}
      <button
        className={"wl" + (on ? " on" : "")}
        aria-label={(on ? "Remove " : "Add ") + p.name + (on ? " from" : " to") + " wishlist"}
        aria-pressed={on}
        onClick={() => tw(p)}
      >
        <Heart on={on} />
      </button>
      <a className="img" href={"#/product/" + p.id} aria-label={"View " + p.name}>
        <Art p={p} />
      </a>
      <div className="cb">
        <small>{p.fam}</small>
        <h3><a href={"#/product/" + p.id}>{p.name}</a></h3>
        <div className="pr">{inr(p.price)} <small>/ 12ml demo</small></div>
        <button className="btn w2" onClick={() => add(p)}>Add to Bag</button>
      </div>
    </div>
  );
}
