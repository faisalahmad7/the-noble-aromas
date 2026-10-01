export default function WhyTrust({}) {
  return (
    <>
      <section className="sec trust" id="trust">
        <div className="w">
          <div className="hd"><span>The Noble Aromas</span><h2>Why Trust Us?</h2></div>
          <div className="tg">
            {[
              ["★", "4.6 on Google", "From 10 customer reviews"],
              ["⌂", "Real Store in Pune", "Gawaliwada, Modi Colony"],
              ["✦", "Helpful Staff", "Customers mention our guidance"],
              ["◈", "Lasting Scents", "As noted by customers"],
              ["☎", "Talk to Us", "70570 04966"],
              ["◎", "Follow Us", "@the_noble_aromas"]
            ].map(t => (
              <div className="tb" key={t[1]}>
                <span className="bg">{t[0]}</span>
                <b>{t[1]}</b>
                <small>{t[2]}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
