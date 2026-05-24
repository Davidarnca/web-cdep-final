type Props = { className?: string; variant?: "color" | "white" };

// CDEP isotipo — 12 rectangular bars arranged as a tilted rhombus (Colombia map).
// Colors per brand guide: #245dab, #43bb89, #ee403e, #dd155b.
export function LogoMark({ className, variant = "color" }: Props) {
  const blue = variant === "white" ? "#ffffff" : "#245dab";
  const green = variant === "white" ? "#ffffff" : "#43bb89";
  const orange = variant === "white" ? "#ffffff" : "#ee403e";
  const pink = variant === "white" ? "#ffffff" : "#dd155b";
  return (
    <svg viewBox="35 110 200 225" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CDEP">
      <g>
        <polygon fill={blue} points="55.4 208.9 69.9 207.4 72.2 224.6 57.6 226.2" />
        <polygon fill={blue} points="78.1 167.4 92.2 165.9 99.7 220.6 85.1 222.2" />
        <polygon fill={blue} points="97.6 118.7 113.2 117.1 126.7 217.2 112.2 219.1" />
      </g>
      <polygon fill={pink} points="218.8 236.4 204.8 237.3 203.1 220.1 217.3 219.1" />
      <polygon fill={pink} points="199.2 275.3 185.4 276.9 178.3 222.6 193 221.4" />
      <polygon fill={pink} points="181.5 325.8 166.7 326.7 152.7 225.7 167.4 224.1" />
      <polygon fill={orange} points="45.6 239.4 47.9 256.2 136.9 244.4 135.4 228.2" />
      <polygon fill={orange} points="81.6 263.9 83.1 278.8 141.2 270.9 139.9 257.2" />
      <polygon fill={orange} points="126.1 284.8 128 299.3 144.6 296.9 142.7 282.3" />
      <polygon fill={green} points="136.5 190.8 193.9 183.4 192.5 170.1 135 177.3" />
      <polygon fill={green} points="149 151.1 131.2 153.1 133.1 166.8 150.3 164.7" />
      <polygon fill={green} points="138.8 200.4 140.5 213.7 228.3 204.3 226.4 189.9 138.8 200.9" />
    </svg>
  );
}
