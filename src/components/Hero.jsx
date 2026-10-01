import { LOGO, DIR } from '../data/constants.js';

export default function Hero({
  px
}) {
  return (
    <>
      <section className="hero">
        <div className="mist m1" />
        <div className="mist m2" />
        {Array.from({ length: 7 }).map((_, i) => (
          <i
            key={i}
            className="pt"
            style={{
              left: i * 37 % 96 + 2 + "%",
              animationDelay: -(i * 1.9) + "s",
              animationDuration: 9 + i % 5 * 3 + "s",
              width: 3 + i % 3 * 2,
              height: 3 + i % 3 * 2
            }}
          />
        ))}
        <div
          className="d"
          ref={e => px.current[0] = e}
          style={{ width: 520, height: 520, right: -100, top: -120 }}
        />
        <div
          className="d"
          ref={e => px.current[1] = e}
          style={{ width: 300, height: 300, left: -80, bottom: -100 }}
        />
        <div className="w">
          <div>
            <span className="eb">PERFUME STORE · PUNE</span>
            <h1 aria-label="Discover a fragrance that feels distinctly yours">
              {"Discover a fragrance that feels".split(" ").map((w, i) => (
                <span
                  className="wd"
                  aria-hidden="true"
                  key={i}
                  style={{ animationDelay: .3 + i * .1 + "s" }}
                >
                  {w}
                  {" "}
                </span>
              ))}
              <em aria-hidden="true">
                {["distinctly", "yours"].map((w, i) => <span className="wd" key={w} style={{ animationDelay: .9 + i * .14 + "s" }}>{w} </span>)}
              </em>
            </h1>
            <p>Explore attars and fragrances across moods, occasions and personal styles.</p>
            <a className="btn" href="#shop">Shop Now</a>
            {" "}
            <a className="btn o" href={DIR} target="_blank" rel="noopener">Visit Our Store</a>
          </div>
          <div ref={e => px.current[2] = e}>
            <div className="emb">
              <img className="logoBig" src={LOGO} alt="The Noble Aromas emblem" />
              <span className="sheen" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
