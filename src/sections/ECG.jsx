import React, { useMemo } from "react";
import "./ECG.css";

/*
  Reusable ECG component.
  Props:
    - path: (string) SVG path data for the waveform. Defaults to sample waveform.
    - height: (number or string) svg height in px (default 180)
    - grid: (bool) show grid background
    - ariaLabel: accessible label
*/
const DEFAULT_PATH =
  "M0,100 L50,100 L60,72 L70,128 L80,60 L90,140 L100,100 L150,100 L160,74 L170,126 L180,62 L190,138 L200,100 L250,100 L260,78 L270,122 L280,64 L290,142 L300,100 L350,100 L360,76 L370,124 L380,66 L390,136 L400,100 L450,100 L460,78 L470,118 L480,66 L490,140 L500,100 L550,100 L560,82 L570,118 L580,64 L590,138 L600,100 L650,100 L660,80 L670,120 L680,62 L690,140 L700,100 L750,100 L760,82 L770,120 L780,64 L790,140 L800,100";

export default function ECG({
  path = DEFAULT_PATH,
  height = 180,
  grid = true,
  ariaLabel = "ECG waveform",
}) {
  // unique id for pattern (prevents duplicate IDs if used multiple times)
  const gridId = useMemo(
    () => "ecg-grid-" + Math.random().toString(36).slice(2, 9),
    []
  );

  return (
    <div className="card ecg-card">
      <h3 className="ecg-title">Real-time ECG</h3>

      <div className="ecg-container" role="region" aria-label="ECG display">
        <svg
          className="ecg-svg"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          role="img"
          aria-label={ariaLabel}
          style={{ height }}
        >
          <defs>
            {grid && (
              <pattern
                id={gridId}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  className="grid-rect"
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(0,255,120,0.08)"
                  strokeWidth="0.7"
                />
              </pattern>
            )}
          </defs>

          {grid && <rect width="100%" height="100%" fill={`url(#${gridId})`} />}

          <path
            className="ecg-line"
            d={path}
            fill="none"
            stroke="var(--ecg-stroke)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  );
}
