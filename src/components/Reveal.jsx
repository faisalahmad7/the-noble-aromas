import { useRef, useEffect } from 'react';

function Reveal({
  children
}) {
  const r = useRef();
  useEffect(() => {
    const o = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .1 });
    o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return <div ref={r} className="rv">{children}</div>;
}

export default Reveal;
