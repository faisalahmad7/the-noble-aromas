import Reveal from './Reveal.jsx';

export default function Reviews({}) {
  return (
    <>
      <section className="sec" id="reviews">
        <div className="w">
          <div className="hd"><span>Customer Reviews</span><h2>Loved by Our Customers</h2></div>
          <div className="gsum">
            <svg className="gicon" viewBox="0 0 48 48" aria-label="Google">
              <path
                fill="#EA4335"
                d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"
              />
              <path
                fill="#FBBC05"
                d="M10.5 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.2C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.2z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z"
              />
            </svg>
            <div><b>Google Reviews</b><small>Based on 10 reviews</small></div>
            <div className="gn">4.6</div>
            <div>
              <span className="stars" style={{ "--p": "92%" }} aria-label="4.6 out of 5 stars">
                ★★★★★
              </span>
              <small>Rated on Google</small>
            </div>
            <a
              className="btn o"
              href="https://www.google.com/maps/search/?api=1&query=The+Noble+Aromas+Synagogue+St+Gawaliwada+Pune"
              target="_blank"
              rel="noopener"
            >
              See all on Google
            </a>
          </div>
          <Reveal>
            <div className="rev">
              {[
                ["Staff is very Good, I liked products which they suggested", "Sumit Mehra"],
                ["Best perfume with lasting and affordable price", "TanS"],
                ["Best quality product and good lasting perfumes", "Mehboob Khan"]
              ].map(r => (
                <div className="rcard" key={r[1]}>
                  <span className="qm" aria-hidden="true">“</span>
                  <q>{r[0]}</q>
                  <div className="rhead">
                    <svg className="avt" viewBox="0 0 48 48" aria-hidden="true">
                      <circle cx="24" cy="24" r="24" fill="#E4DDCB" />
                      <circle cx="24" cy="19" r="8" fill="#fff" />
                      <path d="M8 42c2-9 9-13 16-13s14 4 16 13a24 24 0 01-32 0z" fill="#fff" />
                    </svg>
                    <div><b>{r[1]}</b><small>Google review</small></div>
                    <svg className="gicon" viewBox="0 0 48 48" aria-label="Google">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.5 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.9-6.2C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.2z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
