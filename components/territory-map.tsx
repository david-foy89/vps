export function TerritoryMap({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={compact ? "" : "rounded-card border border-line bg-white p-4 shadow-card md:p-6"}>
      <svg
        viewBox="0 0 680 520"
        role="img"
        aria-labelledby="territory-title territory-desc"
        className="h-auto w-full"
      >
        <title id="territory-title">VPS service territory</title>
        <desc id="territory-desc">
          Texas and Oklahoma are covered in full, including both panhandles. Only southern New Mexico is covered. The northern part of New Mexico is outside the territory.
        </desc>
        <rect width="680" height="520" fill="#F4F6F8" rx="12" />

        <g stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round">
          <path
            d="M160.8 33.6 L243 37.9 L286.4 39.2 L285.9 59.5 L284.6 59.5 L281.5 160.8 L281.5 161.4 L79.7 149.8 L90.2 28 L142.8 32.1 Z"
            fill="#C5D0DE"
          />
          <path
            d="M281.5 161.4 L279.6 202.1 L278.4 242.9 L156.2 237.3 L155 241.3 L158.6 246.2 L100.7 242.1 L99.2 260.6 L70.2 258.2 L79.7 149.8 Z"
            fill="#F26A1B"
          />
          <path
            d="M381.2 40.6 L559.2 36.1 L560.2 56.4 L568.7 101.1 L570.6 172.8 L557.4 169 L553.9 164.4 L545 160.8 L543 164.5 L534.3 164.7 L532.4 162.5 L524.6 166.8 L521.2 164.7 L514 167 L507.6 173.5 L504.9 170 L497.8 167.4 L490.4 167.6 L487.8 163 L479.6 172.4 L476.7 167.3 L472.8 169 L469.8 165.7 L461.8 162.7 L456 168.2 L453.3 162.7 L448.5 162.1 L445.6 157.7 L439.2 156 L435 159.9 L432.2 156.6 L425.5 157.1 L418.1 153.6 L411.3 154.1 L408.9 146.3 L398.2 145.9 L394.2 147.3 L386.7 139.5 L384.1 139.9 L384.1 60.9 L324.8 60.4 L285.9 59.5 L286.4 39.2 L317.6 40.2 Z"
            fill="#0B1F3A"
          />
          <path
            d="M324.8 60.4 L384.1 60.9 L384.1 139.9 L386.7 139.5 L394.2 147.3 L398.2 145.9 L408.9 146.3 L411.3 154.1 L418.1 153.6 L425.5 157.1 L432.2 156.6 L435 159.9 L439.2 156 L445.6 157.7 L448.5 162.1 L453.3 162.7 L456 168.2 L461.8 162.7 L469.8 165.7 L472.8 169 L476.7 167.3 L479.6 172.4 L487.8 163 L490.4 167.6 L497.8 167.4 L504.9 170 L507.6 173.5 L514 167 L521.2 164.7 L524.6 166.8 L532.4 162.5 L534.3 164.7 L543 164.5 L545 160.8 L553.9 164.4 L557.4 169 L570.6 172.8 L574.3 176.4 L580.9 174 L585.8 175.5 L587 197.2 L589.4 238.9 L597.5 247.4 L598.2 256.3 L608.7 272.2 L609.8 280.9 L606.8 291.5 L603.6 296 L605.1 301.5 L602.8 305.9 L606 313.5 L598.5 328.5 L601.9 332.3 L596.1 332.9 L578 339.4 L571.2 336.6 L569.7 330 L565.3 334.9 L562 334 L560.5 339.8 L564.3 342.1 L565.3 349.7 L559 358 L548.8 368.5 L527.7 380.1 L525.5 378.4 L519.1 381.3 L518.8 378.8 L510.1 380.9 L505.8 375.9 L503.3 377.1 L513 387.3 L506.3 390.9 L499.7 389.1 L499 396.4 L491.1 404.2 L483.2 418.5 L478.2 433.3 L474.2 432.3 L473.4 437.6 L477.5 436.2 L475.8 446.9 L473 447.4 L472.9 453.4 L476.4 456.7 L477.7 468.9 L481.8 473 L483 480.7 L486.4 487.5 L475.2 492 L470.5 486.8 L461.8 485 L450.3 485.6 L440.4 479.1 L432.9 478.6 L427.2 473.3 L419.6 471.6 L414.3 466.5 L410.8 454.4 L404.2 447.1 L405 440.8 L402 434.2 L402.9 428.4 L398.3 422 L394.6 421.3 L388.4 415.5 L386.5 408.2 L381.1 401.5 L373.5 395.9 L369.8 383.7 L366.3 380.3 L361.6 370.5 L360.1 362.4 L355.7 356.6 L348.1 351.4 L346.4 347.8 L339.5 344.6 L334.1 335.7 L318.7 333.4 L309.4 333.7 L301.5 330.4 L299.7 334.6 L291.2 335.7 L284.6 344 L280.3 357.5 L278.2 357.7 L273 365.6 L267.2 365.6 L258.6 359.1 L237 348.3 L233 342.7 L224.6 337.3 L219.2 325.4 L219.2 314.9 L213.7 306.2 L212.7 298.8 L209 293.9 L195.8 286.3 L189.1 276.6 L183.3 272.9 L177.5 264.5 L169 259.8 L163.6 248.7 L158.6 246.2 L155 241.3 L156.2 237.3 L278.4 242.9 L279.6 202.1 L281.5 160.8 L284.6 59.5 L285.9 59.5 Z"
            fill="#0B1F3A"
          />
        </g>
        <text x="184" y="96" textAnchor="middle" fill="#0B1F3A" fontSize="15" fontFamily="Manrope, sans-serif">
          New Mexico
        </text>
        <text x="172" y="200" textAnchor="middle" fill="#0B1F3A" fontSize="14" fontWeight="700" fontFamily="Manrope, sans-serif">
          Southern
        </text>
        <text x="470" y="108" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700" fontFamily="Manrope, sans-serif">
          Oklahoma
        </text>
        <text x="420" y="280" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="700" fontFamily="Manrope, sans-serif">
          Texas
        </text>
      </svg>
      <figcaption className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-navy" aria-hidden="true" />
          Entire state covered
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-safety" aria-hidden="true" />
          Southern New Mexico
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#C5D0DE]" aria-hidden="true" />
          Outside the territory
        </span>
      </figcaption>
    </figure>
  );
}
