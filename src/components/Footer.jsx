import { LOGO } from '../data/constants.js';

export default function Footer({}) {
  return (
    <>
      <footer>
        <img src={LOGO} alt="The Noble Aromas" width="64" style={{ borderRadius: "50%" }} />
        <div className="fb">The Noble Aromas</div>
        <div className="gl" />
        <p>
          The Noble Aromas · Gawaliwada, Modi Colony, Pune ·{" "}
          <a href="tel:+917057004966">70570 04966</a>
          {" "}·{" "}
          <a href="https://www.instagram.com/the_noble_aromas/" target="_blank" rel="noopener">
            Instagram
          </a>
        </p>
        <p>Frontend demo only. No payments are processed and no orders are placed.</p>
      </footer>
    </>
  );
}
