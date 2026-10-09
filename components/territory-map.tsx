export function TerritoryMap({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={compact ? "" : "rounded-card border border-line bg-white p-4 shadow-card md:p-6"}>
      <svg
        viewBox="0 0 860 520"
        role="img"
        aria-labelledby="territory-title territory-desc"
        className="h-auto w-full"
      >
        <title id="territory-title">VPS service territory</title>
        <desc id="territory-desc">
          Texas, Oklahoma, and Louisiana are covered in full. Only southern New Mexico is covered. The northern part of New Mexico is outside the territory.
        </desc>
        <rect width="860" height="520" fill="#F4F6F8" rx="12" />

        <g stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round">
          <path
            d="M91.2 32.1 L191.3 37.9 L234.8 39.2 L234.2 59.5 L233.0 59.5 L229.8 161.4 L28.0 149.8 L38.6 28.0 L91.2 32.1 Z"
            fill="#C5D0DE"
          />
          <path
            d="M229.8 161.4 L226.7 242.9 L104.5 237.3 L103.3 241.3 L107.0 246.2 L49.0 242.1 L47.6 260.6 L28.0 149.8 L229.8 161.4 Z"
            fill="#F26A1B"
          />
          <path
            d="M329.6 40.6 L507.5 36.1 L508.6 56.4 L517.0 101.1 L519.0 172.8 L505.8 169.0 L502.2 164.4 L493.4 160.8 L491.3 164.5 L482.6 164.7 L480.7 162.5 L472.9 166.8 L469.5 164.7 L462.4 167.0 L455.9 173.5 L453.2 170.0 L446.1 167.4 L438.7 167.6 L436.2 163.0 L427.9 172.4 L425.0 167.3 L421.2 169.0 L418.1 165.7 L410.1 162.7 L404.3 168.2 L401.6 162.7 L396.8 162.1 L394.0 157.7 L387.5 156.0 L383.3 159.9 L380.5 156.6 L373.9 157.1 L366.5 153.6 L359.7 154.1 L357.2 146.3 L346.6 145.9 L342.5 147.3 L335.0 139.5 L332.4 139.9 L332.4 60.9 L234.2 59.5 L234.8 39.2 L266.0 40.2 L329.6 40.6 Z"
            fill="#0B1F3A"
          />
          <path
            d="M273.1 60.4 L332.4 60.9 L332.4 139.9 L335.0 139.5 L342.5 147.3 L346.6 145.9 L357.2 146.3 L359.7 154.1 L366.5 153.6 L373.9 157.1 L380.5 156.6 L383.3 159.9 L387.5 156.0 L394.0 157.7 L396.8 162.1 L401.6 162.7 L404.3 168.2 L410.1 162.7 L418.1 165.7 L421.2 169.0 L425.0 167.3 L427.9 172.4 L436.2 163.0 L438.7 167.6 L446.1 167.4 L453.2 170.0 L455.9 173.5 L462.4 167.0 L469.5 164.7 L472.9 166.8 L480.7 162.5 L482.6 164.7 L491.3 164.5 L493.4 160.8 L502.2 164.4 L505.8 169.0 L519.0 172.8 L522.7 176.4 L529.2 174.0 L534.1 175.5 L537.7 238.9 L545.8 247.4 L546.5 256.3 L557.0 272.2 L558.1 280.9 L555.1 291.5 L551.9 296.0 L553.4 301.5 L551.2 305.9 L554.3 313.5 L546.9 328.5 L550.2 332.3 L544.4 332.9 L526.3 339.4 L519.6 336.6 L518.1 330.0 L513.7 334.9 L510.3 334.0 L508.9 339.8 L512.7 342.1 L513.6 349.7 L507.4 358.0 L497.1 368.5 L476.0 380.1 L473.8 378.4 L467.5 381.3 L467.2 378.8 L458.4 380.9 L454.1 375.9 L451.6 377.1 L461.4 387.3 L454.6 390.9 L448.1 389.1 L447.3 396.4 L439.5 404.2 L431.6 418.5 L426.6 433.3 L422.6 432.3 L421.7 437.6 L425.9 436.2 L424.1 446.9 L421.3 447.4 L421.3 453.4 L424.8 456.7 L426.1 468.9 L430.2 473.0 L431.4 480.7 L434.8 487.5 L423.6 492.0 L418.8 486.8 L410.1 485.0 L398.7 485.6 L388.7 479.1 L381.3 478.6 L375.6 473.3 L367.9 471.6 L362.7 466.5 L359.2 454.4 L352.6 447.1 L353.3 440.8 L350.3 434.2 L351.3 428.4 L346.7 422.0 L342.9 421.3 L336.8 415.5 L334.8 408.2 L329.5 401.5 L321.8 395.9 L318.1 383.7 L314.6 380.3 L310.0 370.5 L308.4 362.4 L304.0 356.6 L296.5 351.4 L294.8 347.8 L287.8 344.6 L282.5 335.7 L267.0 333.4 L257.7 333.7 L249.9 330.4 L248.1 334.6 L239.5 335.7 L232.9 344.0 L228.6 357.5 L226.5 357.7 L221.4 365.6 L215.5 365.6 L207.0 359.1 L185.3 348.3 L181.3 342.7 L173.0 337.3 L167.5 325.4 L167.6 314.9 L162.0 306.2 L161.0 298.8 L157.4 293.9 L144.2 286.3 L137.4 276.6 L131.7 272.9 L125.9 264.5 L117.4 259.8 L111.9 248.7 L107.0 246.2 L103.3 241.3 L104.5 237.3 L226.7 242.9 L233.0 59.5 L234.2 59.5 L273.1 60.4 Z"
            fill="#0B1F3A"
          />
          <path
            d="M550.1 196.3 L633.2 191.0 L636.7 195.4 L634.5 197.4 L634.8 205.6 L640.3 210.3 L642.0 222.3 L638.7 232.0 L631.1 238.4 L629.8 247.7 L626.3 247.1 L626.9 262.1 L622.8 262.9 L625.9 270.7 L623.6 273.8 L689.3 268.0 L687.1 281.6 L693.7 290.0 L695.7 296.5 L700.3 300.3 L690.5 306.9 L690.2 310.9 L698.9 312.8 L701.9 306.0 L709.8 311.7 L709.8 316.8 L705.8 319.5 L697.7 318.3 L699.0 321.9 L696.9 328.0 L704.1 332.4 L715.1 332.9 L719.6 338.5 L722.8 339.0 L717.9 346.5 L711.6 345.8 L705.6 339.2 L692.3 336.7 L691.6 329.8 L685.4 332.7 L686.4 338.4 L684.0 344.0 L679.4 345.3 L675.3 339.7 L667.2 340.2 L664.8 346.6 L659.5 348.9 L653.4 345.6 L648.7 345.6 L643.4 336.0 L635.1 332.2 L632.1 333.1 L628.3 324.9 L619.1 326.7 L618.5 321.6 L609.8 327.2 L611.3 330.9 L604.6 335.0 L593.6 334.0 L580.7 329.3 L571.6 327.4 L552.6 330.6 L550.2 332.3 L546.9 328.5 L554.3 313.5 L551.2 305.9 L553.4 301.5 L551.9 296.0 L555.1 291.5 L558.1 280.9 L557.0 272.2 L546.5 256.3 L545.8 247.4 L537.7 238.9 L535.4 197.2 L550.1 196.3 Z"
            fill="#0B1F3A"
          />
        </g>
        <text x="132" y="100" textAnchor="middle" fill="#0B1F3A" fontSize="14" fontFamily="Manrope, sans-serif">
          New Mexico
        </text>
        <text x="118" y="210" textAnchor="middle" fill="#0B1F3A" fontSize="13" fontWeight="700" fontFamily="Manrope, sans-serif">
          Southern
        </text>
        <text x="430" y="105" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="Manrope, sans-serif">
          Oklahoma
        </text>
        <text x="390" y="310" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="700" fontFamily="Manrope, sans-serif">
          Texas
        </text>
        <text x="630" y="270" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700" fontFamily="Manrope, sans-serif">
          Louisiana
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
