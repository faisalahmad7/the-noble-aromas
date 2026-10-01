import { useState } from 'react';
import { ALL } from '../data/products.js';
import { inr } from '../utils/format.js';
import Art from './Art.jsx';

export default function AccountModals({
  setCart,
  wl,
  view,
  setView,
  pay,
  setPay,
  user,
  setUser,
  ok,
  setOk,
  say,
  add,
  items,
  sub,
  ship,
  tw
}) {
  const [sp, setSp] = useState(false);
  return (
    <>
      {view && (
        <div className="ov" onClick={() => setView(null)}>
          <div
            className="md pad"
            role="dialog"
            aria-modal="true"
            onClick={e => e.stopPropagation()}
          >
            <button className="x" onClick={() => setView(null)} aria-label="Close">×</button>
            {view === "login" && (
              <form
                className="f"
                onSubmit={e => {
                  e.preventDefault();
                  setUser(e.target.n.value || "Guest");
                  setView(null);
                  say("Signed in (demo)");
                }}
              >
                <h2>Login / Sign up</h2>
                <div className="demo">Demo only — nothing is sent or stored on a server.</div>
                <input name="n" placeholder="Full name" />
                <input type="email" placeholder="Email" required />
                <span className="pw">
                  <input type={sp ? "text" : "password"} placeholder="Password" required minLength={6} />
                  <button
                    type="button"
                    aria-label={sp ? "Hide password" : "Show password"}
                    onClick={() => setSp(!sp)}
                  >
                    {sp ? "Hide" : "Show"}
                  </button>
                </span>
                <button className="btn">Continue</button>
              </form>
            )}
            {view === "acct" && (
              <div>
                <h2>Hello, {user}</h2>
                <p>Demo account. Wishlist items: {wl.length}</p>
                <button
                  className="btn"
                  onClick={() => {
                    setUser(null);
                    setView(null);
                  }}
                >
                  Log out
                </button>
              </div>
            )}
            {view === "wish" && (
              <div>
                <h2>Wishlist</h2>
                {!wl.length ? <p>No favourites yet.</p> : wl.map(id => (
                  <div className="li" key={id}>
                    <div style={{ width: 44 }}><Art p={ALL[id]} /></div>
                    <b style={{ flex: 1 }}>{ALL[id].name}</b>
                    <button className="btn" onClick={() => add(ALL[id])}>Add</button>
                    <button className="ic" onClick={() => tw(ALL[id])}>✕</button>
                  </div>
                ))}
              </div>
            )}
            {view === "co" && (ok ? (
              <div style={{ textAlign: "center" }}>
                <h2>Demo order confirmed</h2>
                <p>This was a demonstration. No payment was taken and no order was placed.</p>
                <button
                  className="btn"
                  onClick={() => {
                    setCart({});
                    setView(null);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                className="f"
                onSubmit={e => {
                  e.preventDefault();
                  setOk(true);
                }}
              >
                <h2>Checkout</h2>
                <div className="demo">Demo only — do not enter real card or UPI details.</div>
                <input placeholder="Full name" required />
                <div className="r">
                  <input placeholder="Phone" inputMode="tel" required />
                  <input type="email" placeholder="Email" required />
                </div>
                <input placeholder="Address" required />
                <div className="r">
                  <input placeholder="City" required />
                  <input placeholder="Pincode" inputMode="numeric" required />
                </div>
                <b>Payment method</b>
                <div className="pay">
                  {["Card", "UPI", "Net Banking", "COD"].map(m => (
                    <button type="button" key={m} className={pay === m ? "on" : ""} onClick={() => setPay(m)}>
                      {m}
                    </button>
                  ))}
                </div>
                {pay === "Card" && (
                  <>
                    <input placeholder="Card number (demo)" inputMode="numeric" />
                    <div className="r"><input placeholder="MM/YY" /><input placeholder="CVV" /></div>
                  </>
                )}
                {pay === "UPI" && <input placeholder="yourname@upi (demo)" />}
                {pay === "Net Banking" && <input placeholder="Select bank (demo)" />}
                {pay === "COD" && <p>Pay on delivery (demo).</p>}
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Subtotal {inr(sub)} · Delivery {ship ? inr(ship) : "Free"}</span>
                  <b>Total {inr(sub + ship)}</b>
                </p>
                <button className="btn">Place Demo Order</button>
              </form>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
