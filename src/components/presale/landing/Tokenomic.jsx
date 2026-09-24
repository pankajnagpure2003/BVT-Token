import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allocations = [
  {
    label: "Ecosystem & User Rewards",
    percent: 25,
    color: "#142D59",
    description:
      "Supports ecosystem participation, user incentives and rewards.",
  },
  {
    label: "Community & Growth",
    percent: 15,
    color: "#1F477E",
    description:
      "Dedicated to community expansion, engagement and ecosystem growth.",
  },
  {
    label: "Treasury / Ecosystem Development",
    percent: 15,
    color: "#28619B",
    description:
      "Supports long-term treasury management and ecosystem development.",
  },
  {
    label: "Liquidity",
    percent: 10,
    color: "#3D79B7",
    description:
      "Provides liquidity support for healthy token market activity.",
  },
  {
    label: "Strategic Partnerships",
    percent: 10,
    color: "#D4AF37",
    description:
      "Used to establish strategic partnerships and ecosystem collaborations.",
  },
  {
    label: "Team & Advisors",
    percent: 10,
    color: "#E2B93B",
    description:
      "Allocated for the team, advisors and contributors supporting BVT.",
  },
  {
    label: "Marketing & Adoption",
    percent: 7.5,
    color: "#E8C94B",
    description:
      "Supports marketing initiatives, awareness and wider adoption.",
  },
  {
    label: "Reserve",
    percent: 7.5,
    color: "#F1D66A",
    description:
      "Maintained as a reserve for future ecosystem requirements.",
  },
];

const CENTER_X = 380;
const CENTER_Y = 260;
const OUTER_RADIUS = 125;
const INNER_RADIUS = 62;

function polarToCartesian(cx, cy, radius, angle) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
}

function createDonutPath(
  cx,
  cy,
  outerRadius,
  innerRadius,
  startAngle,
  endAngle
) {
  const outerStart = polarToCartesian(
    cx,
    cy,
    outerRadius,
    endAngle
  );

  const outerEnd = polarToCartesian(
    cx,
    cy,
    outerRadius,
    startAngle
  );

  const innerStart = polarToCartesian(
    cx,
    cy,
    innerRadius,
    endAngle
  );

  const innerEnd = polarToCartesian(
    cx,
    cy,
    innerRadius,
    startAngle
  );

  const largeArcFlag =
    endAngle - startAngle > 180 ? 1 : 0;

  return `
    M ${outerStart.x} ${outerStart.y}
    A ${outerRadius} ${outerRadius}
      0 ${largeArcFlag} 0
      ${outerEnd.x} ${outerEnd.y}

    L ${innerEnd.x} ${innerEnd.y}

    A ${innerRadius} ${innerRadius}
      0 ${largeArcFlag} 1
      ${innerStart.x} ${innerStart.y}

    Z
  `;
}

export default function Tokenomic() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const slices = useMemo(() => {
    let currentAngle = 0;

    return allocations.map((item, index) => {
      const startAngle = currentAngle;

      const sliceAngle =
        (item.percent / 100) * 360;

      const endAngle =
        startAngle + sliceAngle;

      currentAngle = endAngle;

      return {
        ...item,
        index,
        startAngle,
        endAngle,
        middleAngle:
          startAngle + sliceAngle / 2,
      };
    });
  }, []);

  const selectedIndex =
    activeIndex !== null
      ? activeIndex
      : hoveredIndex;

  const selected =
    selectedIndex !== null
      ? allocations[selectedIndex]
      : null;

  return (
    <section
      id="tokenomics"
      className="relative overflow-hidden"
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A237E]/25 blur-[120px]"
        />

        {/* Gold glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[20%] h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-[100px]"
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[5%] h-64 w-64 rounded-full bg-blue-700/10 blur-[110px]"
        />

        {/* Decorative circles */}
        <div className="absolute left-[8%] top-[15%] h-24 w-24 rounded-full border border-[#D4AF37]/10" />

        <div className="absolute bottom-[15%] right-[8%] h-40 w-40 rounded-full border border-[#D4AF37]/10" />
      </div>

      {/* Grid */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="section-padding relative">

        {/* ===================================================
            TITLE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center"
        >
         
          
        </motion.div>

        {/* ===================================================
            MAIN CARD
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="glass-card gold-glow mx-auto max-w-6xl overflow-hidden p-4 sm:p-7 md:p-10"
        >

          {/* =================================================
              TOTAL SUPPLY
          ================================================== */}

          <div className="mb-8 text-center">
             

            
          </div>

          {/* =================================================
              DESKTOP DONUT CHART
          ================================================== */}

          <div className="hidden justify-center lg:flex">
            <svg
              viewBox="0 0 760 540"
              className="h-auto w-full max-w-[900px] overflow-visible"
            >

              {/* -------------------------------------------
                  OUTER DECORATIVE RING
              -------------------------------------------- */}

              <motion.circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={OUTER_RADIUS + 13}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                strokeDasharray="4 8"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transformOrigin:
                    `${CENTER_X}px ${CENTER_Y}px`,
                }}
                opacity="0.45"
              />

              {/* -------------------------------------------
                  DONUT SLICES
              -------------------------------------------- */}

              {slices.map((slice, index) => {
                const isActive =
                  selectedIndex === index;

                const radius = isActive
                  ? OUTER_RADIUS + 9
                  : OUTER_RADIUS;

                const path =
                  createDonutPath(
                    CENTER_X,
                    CENTER_Y,
                    radius,
                    INNER_RADIUS,
                    slice.startAngle,
                    slice.endAngle
                  );

                return (
                  <motion.path
                    key={slice.label}
                    d={path}
                    fill={slice.color}
                    stroke="#050B15"
                    strokeWidth="3"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      filter:
                        "brightness(1.25)",
                    }}
                    onMouseEnter={() =>
                      setHoveredIndex(index)
                    }
                    onMouseLeave={() =>
                      setHoveredIndex(null)
                    }
                    onClick={() =>
                      setActiveIndex(
                        activeIndex === index
                          ? null
                          : index
                      )
                    }
                    style={{
                      transformOrigin:
                        `${CENTER_X}px ${CENTER_Y}px`,
                      cursor: "pointer",
                    }}
                  />
                );
              })}

              {/* -------------------------------------------
                  CENTER
              -------------------------------------------- */}

              <circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={INNER_RADIUS}
                fill="#071426"
                stroke="#D4AF37"
                strokeWidth="2"
              />

              {/* Center animated ring */}

              <motion.circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={INNER_RADIUS + 9}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                strokeDasharray="3 7"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transformOrigin:
                    `${CENTER_X}px ${CENTER_Y}px`,
                }}
                opacity="0.6"
              />

              {/* -------------------------------------------
                  CENTER CONTENT
              -------------------------------------------- */}

              <AnimatePresence mode="wait">
                {!selected ? (
                  <motion.g
                    key="default"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                  >
                    <text
                      x={CENTER_X}
                      y={CENTER_Y - 5}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="25"
                      fontWeight="900"
                    >
                      BVT
                    </text>

                    <text
                      x={CENTER_X}
                      y={CENTER_Y + 16}
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="10"
                      fontWeight="800"
                      letterSpacing="1.5"
                    >
                      TOKENOMICS
                    </text>
                  </motion.g>
                ) : (
                  <motion.g
                    key={selected.label}
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.75,
                    }}
                  >
                    <text
                      x={CENTER_X}
                      y={CENTER_Y - 3}
                      textAnchor="middle"
                      fill="#FFD700"
                      fontSize="25"
                      fontWeight="900"
                    >
                      {selected.percent}%
                    </text>

                    <text
                      x={CENTER_X}
                      y={CENTER_Y + 16}
                      textAnchor="middle"
                      fill="#CBD5E1"
                      fontSize="9"
                      fontWeight="700"
                    >
                      ALLOCATION
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>

              {/* -------------------------------------------
                  LABELS
              -------------------------------------------- */}

              {slices.map((slice, index) => {
                const point =
                  polarToCartesian(
                    CENTER_X,
                    CENTER_Y,
                    185,
                    slice.middleAngle
                  );

                const isRight =
                  point.x >= CENTER_X;

                const labelX = isRight
                  ? 590
                  : 170;

                const anchor = isRight
                  ? "start"
                  : "end";

                const active =
                  selectedIndex === index;

                return (
                  <g
                    key={`${slice.label}-label`}
                    onMouseEnter={() =>
                      setHoveredIndex(index)
                    }
                    onMouseLeave={() =>
                      setHoveredIndex(null)
                    }
                    onClick={() =>
                      setActiveIndex(
                        activeIndex === index
                          ? null
                          : index
                      )
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >

                    {/* Connector */}
                    <motion.line
                      x1={point.x}
                      y1={point.y}
                      x2={
                        labelX +
                        (isRight ? -10 : 10)
                      }
                      y2={point.y}
                      stroke={
                        active
                          ? "#FFD700"
                          : "rgba(203,213,225,.30)"
                      }
                      strokeWidth={
                        active ? 2 : 1
                      }
                    />

                    {/* Label */}
                    <text
                      x={labelX}
                      y={point.y - 4}
                      textAnchor={anchor}
                      fill={
                        active
                          ? "#FFD700"
                          : "#F8FAFC"
                      }
                      fontSize="11"
                      fontWeight={
                        active
                          ? "900"
                          : "700"
                      }
                    >
                      {slice.label}
                    </text>

                    {/* Percentage */}
                    <text
                      x={labelX}
                      y={point.y + 11}
                      textAnchor={anchor}
                      fill={
                        active
                          ? "#FFD700"
                          : "#94A3B8"
                      }
                      fontSize="10"
                      fontWeight="700"
                    >
                      {slice.percent}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* =================================================
              MOBILE / TABLET
          ================================================== */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {allocations.map((item, index) => {
              const active =
                selectedIndex === index;

              return (
                <motion.button
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index
                        ? null
                        : index
                    )
                  }
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                    active
                      ? "border-[#D4AF37]/60 bg-[#D4AF37]/10 shadow-[0_0_30px_rgba(212,175,55,.08)]"
                      : "border-[#D4AF37]/10 bg-[#081426]/70 hover:border-[#D4AF37]/30"
                  }`}
                >

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex items-start gap-3">

                      {/* Color dot */}
                      <span
                        className="mt-1 h-3 w-3 shrink-0 rounded-full"
                        style={{
                          backgroundColor:
                            item.color,
                          boxShadow:
                            `0 0 10px ${item.color}`,
                        }}
                      />

                      <span className="text-sm font-semibold text-slate-200">
                        {item.label}
                      </span>
                    </div>

                    <span
                      className="shrink-0 text-sm font-black"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.percent}%
                    </span>

                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.percent * 4}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.05,
                      }}
                      className="h-full rounded-full"
                      style={{
                        background:
                          item.color,
                      }}
                    />

                  </div>

                  {/* Description */}
                  <AnimatePresence>
                    {active && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="mt-3 text-xs leading-5 text-slate-400"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              SELECTED ALLOCATION
          ================================================== */}

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                }}
                className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#D4AF37]/20 bg-[#071426]/80 p-5 text-center shadow-[0_0_35px_rgba(212,175,55,.06)]"
              >

                <div
                  className="mx-auto mb-3 h-1.5 w-16 rounded-full"
                  style={{
                    background:
                      selected.color,
                    boxShadow:
                      `0 0 15px ${selected.color}`,
                  }}
                />

                <h3 className="text-lg font-black text-white">
                  {selected.label}
                </h3>

                <p
                  className="mt-1 text-3xl font-black"
                  style={{
                    color: selected.color,
                  }}
                >
                  {selected.percent}%
                </p>

                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
                  {selected.description}
                </p>

                <button
                  onClick={() =>
                    setActiveIndex(null)
                  }
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:text-[#FFD700]"
                >
                  Clear Selection
                </button>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* ===================================================
            STAT CARDS
        ==================================================== */}

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">

          {[
            ["8", "Allocation Categories"],
            ["100%", "Total Allocation"],
            ["10B", "BVT Total Supply"],
            ["BEB-20", "Token Standard"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="glass-card p-4 text-center"
            >

              <div className="gold-text text-lg font-black sm:text-xl">
                {value}
              </div>

              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {label}
              </div>

            </motion.div>
          ))}

        </div>

        {/* ===================================================
            NOTE
        ==================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-7 max-w-4xl text-center text-xs italic leading-5 text-slate-500 sm:text-sm"
        >
   
        </motion.p>

      </div>
    </section>
  );
}