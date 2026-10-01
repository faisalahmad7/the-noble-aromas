import { LOGO, DIR } from '../data/constants.js';

export default function Store({}) {
  return (
    <>
      <section className="sec store" id="store">
        <div className="w">
          <div>
            <span style={{ color: "var(--g2)", letterSpacing: ".3em", fontSize: 11 }}>VISIT US</span>
            <h2 style={{ fontSize: 46, margin: "6px 0 14px" }}>The Noble Aromas</h2>
            <p>
              <a href={DIR} target="_blank" rel="noopener">
                Synagogue St, Gawaliwada, Modi Colony, Pune, Maharashtra 411001
              </a>
            </p>
            <p>Phone: <a href="tel:+917057004966">70570 04966</a></p>
            <p>Opening hours: please check Google Maps for current timings.</p>
            <a className="btn" href={DIR} target="_blank" rel="noopener">Get Directions</a>
            {" "}
            <a
              className="btn o"
              style={{ color: "var(--g2)" }}
              href="https://www.instagram.com/the_noble_aromas/"
              target="_blank"
              rel="noopener"
            >
              @the_noble_aromas
            </a>
          </div>
          <div className="semb">
            <img className="slogo" src={LOGO} alt="" style={{ width: 260, borderRadius: "50%" }} />
          </div>
        </div>
      </section>
    </>
  );
}
