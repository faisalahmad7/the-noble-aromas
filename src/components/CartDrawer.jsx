import { useState } from 'react';
import { inr } from '../utils/format.js';
import Art from './Art.jsx';

export default function CartDrawer({
  setCart,
  drawer,
  setDrawer,
  setView,
  setOk,
  items,
  sub
}) {
  const [rm, setRm] = useState(null);
  const chg = (k, d) => setCart(c => ({ ...c, [k]: Math.max(1, (c[k] || 1) + d) }));
  return (
    <>
      {drawer && (
        <>
          <div className="ov" onClick={() => setDrawer(false)} />
          <aside className="dr" aria-label="Shopping bag">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--bd)"
              }}
            >
              <h2 style={{ fontSize: 28 }}>Your Bag</h2>
              <button className="ic" onClick={() => setDrawer(false)}>Close</button>
            </div>
            <div style={{ flex: 1, overflow: "auto" }}>
              {!items.length ? <p>Your bag is empty.</p> : items.map(({
                k,
                p,
                size,
                n,
                price
              }) => (
                <div className="li" key={k}>
                  <div style={{ width: 44 }}><Art p={p} /></div>
                  <div style={{ flex: 1 }}>
                    <b>{p.name}</b>
                    {!p.combo && <small style={{ color: "var(--mu)" }}> · {size}ml</small>}
                    <div>{inr(price)}</div>
                    <div className="q">
                      <button aria-label="Decrease" onClick={() => chg(k, -1)}>−</button>
                      {" "}
                      {n}
                      {" "}
                      <button aria-label="Increase" onClick={() => chg(k, 1)}>+</button>
                    </div>
                  </div>
                  <button className="ic" onClick={() => setRm({ k, name: p.name })}>Remove</button>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--bd)" }}>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Subtotal</span>
                <b>{inr(sub)}</b>
              </p>
              {items.length > 0 ? (
                <button
                  className="btn w2"
                  onClick={() => {
                    setDrawer(false);
                    setOk(false);
                    setView("co");
                  }}
                >
                  Checkout
                </button>
              ) : <button className="btn o w2" onClick={() => setDrawer(false)}>Continue Shopping</button>}
            </div>
          </aside>
        </>
      )}
      {rm && (
        <div className="ov cf" onClick={() => setRm(null)}>
          <div
            className="md pad"
            role="alertdialog"
            aria-modal="true"
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{ fontSize: 26 }}>Remove item?</h2>
            <p>Remove {rm.name} from your bag?</p>
            <div className="acts">
              <button className="btn o" onClick={() => setRm(null)}>Keep it</button>
              <button
                className="btn"
                onClick={() => {
                  setCart(c => ({ ...c, [rm.k]: 0 }));
                  setRm(null);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
