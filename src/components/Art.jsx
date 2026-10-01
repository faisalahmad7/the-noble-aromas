import Bottle from './Bottle.jsx';
import { P } from '../data/products.js';

export const Heart = ({
  on
}) => (
  <svg className="hrt" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 21s-8-5.2-8-11a4.6 4.6 0 018-3 4.6 4.6 0 018 3c0 5.800-8 11-8 11z"
      fill={on ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Art({
  p,
  v = 0
}) {
  if (p.combo && v === 0) return <div className="trio">{p.items.map(i => <div key={i}><Bottle c={P[i].c} /></div>)}</div>;
  if (v === 2 || p.combo && v > 0) return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect x="14" y="34" width="72" height="52" fill={p.c} />
      <rect x="10" y="26" width="80" height="14" fill="#B8861B" />
      <rect x="46" y="26" width="8" height="60" fill="#E2B84A" />
    </svg>
  );
  if (v === 1) return <div className="zoom"><Bottle c={p.c} /></div>;
  if (v === 3) return (
    <div className="pair">
      <div style={{ width: "34%" }}><Bottle c={p.c} /></div>
      <div style={{ width: "22%" }}><Bottle c={p.c} /></div>
    </div>
  );
  return <Bottle c={p.c} />;
}
