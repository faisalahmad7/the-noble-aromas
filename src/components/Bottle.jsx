const Bottle = ({
  c
}) => (
  <svg viewBox="0 0 60 100" aria-hidden="true">
    <defs>
      <linearGradient id={"g" + c.slice(1)} x1="0" x2="1">
        <stop offset="0" stopColor="#fff" stopOpacity=".5" />
        <stop offset=".5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity=".25" />
      </linearGradient>
    </defs>
    <rect x="22" y="4" width="16" height="14" rx="3" fill="#B8861B" />
    <rect x="26" y="16" width="8" height="8" fill="#E2B84A" />
    <path d="M12 38Q12 24 30 24Q48 24 48 38V88Q48 96 40 96H20Q12 96 12 88Z" fill={c} />
    <path
      d="M12 38Q12 24 30 24Q48 24 48 38V88Q48 96 40 96H20Q12 96 12 88Z"
      fill={"url(#g" + c.slice(1) + ")"}
    />
    <rect x="19" y="46" width="22" height="30" fill="none" stroke="#E2B84A" strokeWidth="1" />
    <circle cx="30" cy="61" r="6" fill="none" stroke="#E2B84A" />
  </svg>
);

export default Bottle;
