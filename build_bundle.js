const fs = require("fs");

const appCode = `
var Te = "./assets/couple.jpg?v=2",
    Ee = "./assets/petal.png",
    w = "./audio/wedding-invitation.mp3",
    T = new Date("2027-01-09T11:00:00+05:30").getTime(),
    De = "https://www.google.com/maps/search/?api=1&query=St.+Thomas+Mar+Thoma+Church%2C+Niranam%2C+Kerala",
    Ie = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding:+Chris+Shibu+Cherian+%26+Jyothis+Jose&dates=20270109T053000Z/20270109T093000Z&details=With+the+blessings+of+our+families,+you+are+warmly+invited+to+celebrate+the+holy+matrimony+of+Chris+Shibu+Cherian+%26+Jyothis+Jose.&location=St.+Thomas+Mar+Thoma+Church,+Niranam,+Kerala";

function Oe({ className = "" }) {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 160 160",
    className: className,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      (0, C.jsx)("defs", {
        children: (0, C.jsxs)("linearGradient", {
          id: "goldLeafGrad",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            (0, C.jsx)("stop", { offset: "0%", stopColor: "#f5d58f" }),
            (0, C.jsx)("stop", { offset: "50%", stopColor: "#dfba73" }),
            (0, C.jsx)("stop", { offset: "100%", stopColor: "#a8823c" })
          ]
        })
      }),
      (0, C.jsx)("path", { d: "M0,0 Q60,30 110,80 T150,150", stroke: "url(#goldLeafGrad)", strokeWidth: "1.8", fill: "none", opacity: "0.85" }),
      (0, C.jsx)("path", { d: "M0,0 Q30,60 70,115 T120,160", stroke: "url(#goldLeafGrad)", strokeWidth: "1.4", fill: "none", opacity: "0.75" }),
      (0, C.jsx)("path", { d: "M0,0 Q80,15 140,40", stroke: "url(#goldLeafGrad)", strokeWidth: "1.4", fill: "none", opacity: "0.8" }),
      (0, C.jsx)("path", { d: "M35,18 Q45,8 55,20 Q48,32 35,18 Z", fill: "url(#goldLeafGrad)", opacity: "0.9" }),
      (0, C.jsx)("path", { d: "M65,36 Q80,24 90,38 Q80,52 65,36 Z", fill: "url(#goldLeafGrad)", opacity: "0.9" }),
      (0, C.jsx)("path", { d: "M98,64 Q116,52 124,68 Q112,82 98,64 Z", fill: "url(#goldLeafGrad)", opacity: "0.95" }),
      (0, C.jsx)("path", { d: "M125,100 Q145,88 152,106 Q138,120 125,100 Z", fill: "url(#goldLeafGrad)", opacity: "0.95" }),
      (0, C.jsx)("path", { d: "M20,40 Q10,55 25,68 Q38,55 20,40 Z", fill: "url(#goldLeafGrad)", opacity: "0.9" }),
      (0, C.jsx)("path", { d: "M45,75 Q32,92 50,105 Q62,90 45,75 Z", fill: "url(#goldLeafGrad)", opacity: "0.9" }),
      (0, C.jsx)("path", { d: "M72,118 Q60,136 78,148 Q90,132 72,118 Z", fill: "url(#goldLeafGrad)", opacity: "0.9" }),
      (0, C.jsx)("path", { d: "M70,15 Q88,5 98,18 Q86,28 70,15 Z", fill: "url(#goldLeafGrad)", opacity: "0.85" }),
      (0, C.jsx)("path", { d: "M115,30 Q135,22 142,36 Q130,48 115,30 Z", fill: "url(#goldLeafGrad)", opacity: "0.85" }),
      (0, C.jsx)("circle", { cx: "50", cy: "50", r: "3.2", fill: "url(#goldLeafGrad)" }),
      (0, C.jsx)("circle", { cx: "85", cy: "80", r: "2.8", fill: "url(#goldLeafGrad)" }),
      (0, C.jsx)("circle", { cx: "115", cy: "60", r: "2.5", fill: "url(#goldLeafGrad)" }),
      (0, C.jsx)("circle", { cx: "35", cy: "100", r: "3", fill: "url(#goldLeafGrad)" }),
      (0, C.jsx)("circle", { cx: "138", cy: "135", r: "3.2", fill: "url(#goldLeafGrad)" })
    ]
  });
}

function ke({ className = "" }) {
  return (0, C.jsxs)("div", {
    className: "flex items-center justify-center gap-3 " + className,
    "aria-hidden": "true",
    children: [
      (0, C.jsx)("span", { className: "h-px w-16 bg-current opacity-60" }),
      (0, C.jsxs)("svg", {
        viewBox: "0 0 40 20",
        className: "h-4 w-8",
        fill: "currentColor",
        children: [
          (0, C.jsx)("path", { d: "M20 2 c2 4 6 6 10 6 c-4 0-8 2-10 6 c-2-4-6-6-10-6 c4 0 8-2 10-6z" }),
          (0, C.jsx)("circle", { cx: "4", cy: "8", r: "1.4" }),
          (0, C.jsx)("circle", { cx: "36", cy: "8", r: "1.4" })
        ]
      }),
      (0, C.jsx)("span", { className: "h-px w-16 bg-current opacity-60" })
    ]
  });
}

function Ae({ className = "" }) {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 200 12",
    className: className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: ".8",
    "aria-hidden": "true",
    children: [
      (0, C.jsx)("path", { d: "M0 6 H80 M120 6 H200" }),
      (0, C.jsx)("path", { d: "M100 0 L106 6 L100 12 L94 6 Z" }),
      (0, C.jsx)("path", { d: "M86 6 L90 2 L94 6 L90 10 Z M106 6 L110 2 L114 6 L110 10 Z" })
    ]
  });
}

function CrossIcon({ className = "" }) {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 24 32",
    fill: "none",
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      (0, C.jsx)("defs", {
        children: (0, C.jsxs)("linearGradient", {
          id: "crossGoldGrad",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            (0, C.jsx)("stop", { offset: "0%", stopColor: "#fff8e7" }),
            (0, C.jsx)("stop", { offset: "45%", stopColor: "#dfba73" }),
            (0, C.jsx)("stop", { offset: "100%", stopColor: "#9e772b" })
          ]
        })
      }),
      (0, C.jsx)("path", { d: "M11 2 h2 v28 h-2 z", fill: "url(#crossGoldGrad)" }),
      (0, C.jsx)("path", { d: "M4 10 h16 v2 h-16 z", fill: "url(#crossGoldGrad)" }),
      (0, C.jsx)("circle", { cx: "12", cy: "11", r: "3.2", stroke: "url(#crossGoldGrad)", strokeWidth: "1", fill: "none" }),
      (0, C.jsx)("circle", { cx: "12", cy: "11", r: "1.2", fill: "#fff" }),
      (0, C.jsx)("path", { d: "M12 1.5 l1.5 1.5 l-1.5 1.5 l-1.5 -1.5 z", fill: "url(#crossGoldGrad)" }),
      (0, C.jsx)("path", { d: "M3.5 11 l1.5 -1.5 l1.5 1.5 l-1.5 1.5 z", fill: "url(#crossGoldGrad)" }),
      (0, C.jsx)("path", { d: "M20.5 11 l-1.5 -1.5 l-1.5 1.5 l1.5 1.5 z", fill: "url(#crossGoldGrad)" }),
      (0, C.jsx)("path", { d: "M12 30.5 l-1.5 -1.5 l1.5 -1.5 l1.5 1.5 z", fill: "url(#crossGoldGrad)" })
    ]
  });
}

function E() {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 24 36",
    fill: "none",
    className: "w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]",
    children: [
      (0, C.jsx)("defs", {
        children: (0, C.jsxs)("linearGradient", {
          id: "slenderGoldGrad",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            (0, C.jsx)("stop", { offset: "0%", stopColor: "#fff3d1" }),
            (0, C.jsx)("stop", { offset: "35%", stopColor: "#dfba73" }),
            (0, C.jsx)("stop", { offset: "75%", stopColor: "#b88f42" }),
            (0, C.jsx)("stop", { offset: "100%", stopColor: "#7a5a22" })
          ]
        })
      }),
      (0, C.jsx)("path", { d: "M12 2 C19 10 23 21 12 34 C1 21 5 10 12 2 Z", fill: "url(#slenderGoldGrad)" }),
      (0, C.jsx)("path", { d: "M12 4 Q12 18 12 32", stroke: "#fff8e7", strokeWidth: "0.8", opacity: "0.65", strokeLinecap: "round" })
    ]
  });
}

function D() {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 32 36",
    fill: "none",
    className: "w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]",
    children: [
      (0, C.jsx)("defs", {
        children: (0, C.jsxs)("linearGradient", {
          id: "curvedGoldGrad",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            (0, C.jsx)("stop", { offset: "0%", stopColor: "#fdf3d6" }),
            (0, C.jsx)("stop", { offset: "40%", stopColor: "#dfba73" }),
            (0, C.jsx)("stop", { offset: "85%", stopColor: "#a37a30" }),
            (0, C.jsx)("stop", { offset: "100%", stopColor: "#5c4314" })
          ]
        })
      }),
      (0, C.jsx)("path", { d: "M4 33 C11 23 14 13 28 4 C25 18 18 29 4 33 Z", fill: "url(#curvedGoldGrad)" }),
      (0, C.jsx)("path", { d: "M6 31 Q15 20 25 8", stroke: "#fff", strokeWidth: "0.75", opacity: "0.6", strokeLinecap: "round" }),
      (0, C.jsx)("path", { d: "M12 24 Q16 22 19 23", stroke: "#fff", strokeWidth: "0.6", opacity: "0.4" }),
      (0, C.jsx)("path", { d: "M17 18 Q21 16 23 17", stroke: "#fff", strokeWidth: "0.6", opacity: "0.4" })
    ]
  });
}

function je() {
  return (0, C.jsx)("img", {
    src: Ee,
    alt: "",
    className: "w-full h-full object-contain",
    style: { filter: "sepia(1) hue-rotate(5deg) saturate(2.8) brightness(1.28) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.45))" }
  });
}

function Me() {
  return (0, C.jsxs)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "w-full h-full drop-shadow-[0_0_6px_rgba(223,186,115,0.9)]",
    children: [
      (0, C.jsx)("defs", {
        children: (0, C.jsxs)("linearGradient", {
          id: "sparkleDustGrad",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            (0, C.jsx)("stop", { offset: "0%", stopColor: "#ffffff" }),
            (0, C.jsx)("stop", { offset: "40%", stopColor: "#f5d58f" }),
            (0, C.jsx)("stop", { offset: "100%", stopColor: "#dfba73" })
          ]
        })
      }),
      (0, C.jsx)("path", { d: "M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z", fill: "url(#sparkleDustGrad)" }),
      (0, C.jsx)("circle", { cx: "12", cy: "12", r: "2.2", fill: "#ffffff" })
    ]
  });
}

function Ne({ onTap: e }) {
  let [t, n] = (0, _.useState)([]);
  return (
    (0, _.useEffect)(() => {
      let t = 0,
        r = r => {
          if ((e && e(), r.target?.closest("input, textarea, a, button"))) return;
          let i = r.clientX ?? (r.touches && r.touches[0] ? r.touches[0].clientX : window.innerWidth / 2),
            a = r.clientY ?? (r.touches && r.touches[0] ? r.touches[0].clientY : window.innerHeight / 3),
            o = 11 + Math.floor(Math.random() * 5),
            s = ["leaf-sway-1", "leaf-sway-2", "leaf-sway-3"],
            c = Array.from({ length: o }, (e, n) => {
              let r = Math.random(),
                c = "slender",
                l = 16,
                u = 24;
              if (r < 0.38) {
                c = "slender";
                let e = 0.8 + Math.random() * 0.55;
                (l = Math.round(18 * e)), (u = Math.round(28 * e));
              } else if (r < 0.72) {
                c = "curved";
                let e = 0.8 + Math.random() * 0.55;
                (l = Math.round(22 * e)), (u = Math.round(26 * e));
              } else if (r < 0.88) {
                c = "petal";
                let e = 0.75 + Math.random() * 0.5;
                (l = Math.round(19 * e)), (u = Math.round(19 * e));
              } else {
                c = "sparkle";
                let e = 0.65 + Math.random() * 0.45;
                (l = Math.round(14 * e)), (u = Math.round(14 * e));
              }
              let d = c === "sparkle" ? "sparkle-twinkle" : s[Math.floor(Math.random() * s.length)],
                f = (n / o) * 0.28 + Math.random() * 0.08,
                p = (Math.random() - 0.5) * 160,
                m = 190 + Math.random() * 210,
                h = 2.6 + Math.random() * 1.2,
                g = 1.1 + Math.random() * 0.7,
                _ = -Math.random() * 1.5;
              return {
                id: ++t,
                type: c,
                x: i + (Math.random() - 0.5) * 44,
                y: a + (Math.random() - 0.5) * 20,
                w: l,
                h: u,
                swayClass: d,
                delaySec: f,
                driftX: p,
                fallY: m,
                fallDur: h,
                swayDur: g,
                swayDelay: _
              };
            });
          n(e => [...(e.length > 35 ? e.slice(e.length - 35) : e), ...c]);
          let l = new Set(c.map(e => e.id));
          setTimeout(() => {
            n(e => e.filter(e => !l.has(e.id)));
          }, 4200);
        };
      return window.addEventListener("pointerdown", r), () => window.removeEventListener("pointerdown", r);
    }, [e]),
    (0, C.jsx)("div", {
      className: "pointer-events-none fixed inset-0 z-60 overflow-hidden",
      "aria-hidden": "true",
      children: t.map(e =>
        (0, C.jsx)(
          "div",
          {
            className: "leaf-particle",
            style: {
              left: e.x,
              top: e.y,
              width: e.w,
              height: e.h,
              "--drift-x": e.driftX + "px",
              "--fall-y": e.fallY + "px",
              "--fall-dur": e.fallDur + "s",
              "--delay": e.delaySec.toFixed(3) + "s"
            },
            children: (0, C.jsxs)("div", {
              className: e.swayClass,
              style: { "--sway-dur": e.swayDur + "s", "--sway-delay": e.swayDelay + "s" },
              children: [
                e.type === "slender" && (0, C.jsx)(E, {}),
                e.type === "curved" && (0, C.jsx)(D, {}),
                e.type === "petal" && (0, C.jsx)(je, {}),
                e.type === "sparkle" && (0, C.jsx)(Me, {})
              ]
            })
          },
          e.id
        )
      )
    })
  );
}

function Pe({ count: e = 18 }) {
  let [t, n] = (0, _.useState)([]);
  return (
    (0, _.useEffect)(() => {
      let t = ["leaf-sway-1", "leaf-sway-2", "leaf-sway-3"],
        r = Array.from({ length: e }, (n, r) => {
          let i = Math.random(),
            a = "slender",
            o = 17,
            s = 26;
          if (i < 0.38) {
            a = "slender";
            let e = 0.8 + Math.random() * 0.45;
            (o = Math.round(18 * e)), (s = Math.round(28 * e));
          } else if (i < 0.72) {
            a = "curved";
            let e = 0.8 + Math.random() * 0.45;
            (o = Math.round(22 * e)), (s = Math.round(26 * e));
          } else if (i < 0.88) {
            a = "petal";
            let e = 0.75 + Math.random() * 0.4;
            (o = Math.round(19 * e)), (s = Math.round(19 * e));
          } else {
            a = "sparkle";
            let e = 0.65 + Math.random() * 0.4;
            (o = Math.round(13 * e)), (s = Math.round(13 * e));
          }
          let c = (r / e) * 100,
            l = Math.max(2, Math.min(95, c + (Math.random() - 0.5) * (100 / e))),
            u = 7 + Math.random() * 5.5,
            d = -Math.random() * u,
            f = (Math.random() - 0.5) * 80,
            p = a === "sparkle" ? "sparkle-twinkle" : t[Math.floor(Math.random() * t.length)],
            m = 1.3 + Math.random() * 1,
            h = -Math.random() * 2;
          return {
            id: r,
            type: a,
            left: l,
            w: o,
            h: s,
            fallDur: u,
            fallDelay: d,
            driftX: f,
            swayClass: p,
            swayDur: m,
            swayDelay: h
          };
        });
      n(r);
    }, [e]),
    (0, C.jsx)("div", {
      className: "pointer-events-none fixed inset-0 z-35 overflow-hidden",
      "aria-hidden": "true",
      children: t.map(e =>
        (0, C.jsx)(
          "div",
          {
            className: "continuous-leaf-wrapper",
            style: {
              left: e.left + "%",
              width: e.w,
              height: e.h,
              "--drift-x": e.driftX + "px",
              "--fall-dur": e.fallDur + "s",
              "--fall-delay": e.fallDelay + "s"
            },
            children: (0, C.jsxs)("div", {
              className: e.swayClass,
              style: { "--sway-dur": e.swayDur + "s", "--sway-delay": e.swayDelay + "s" },
              children: [
                e.type === "slender" && (0, C.jsx)(E, {}),
                e.type === "curved" && (0, C.jsx)(D, {}),
                e.type === "petal" && (0, C.jsx)(je, {}),
                e.type === "sparkle" && (0, C.jsx)(Me, {})
              ]
            })
          },
          e.id
        )
      )
    })
  );
}

var Fe = [
  { v: "09", l: "Date" },
  { v: "JAN", l: "Month" },
  { v: "2027", l: "Year" },
  { v: "11:00 AM", l: "Service" }
];

function Le() {
  let [e, t] = (0, _.useState)(!1),
    n = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let e = n.current;
      if (!e) return;
      let r = new IntersectionObserver(
        e => {
          e.forEach(e => {
            e.isIntersecting && setTimeout(() => t(!0), 650);
          });
        },
        { threshold: 0.3 }
      );
      return r.observe(e), () => r.disconnect();
    }, []),
    (0, C.jsxs)("div", {
      ref: n,
      className: "mx-auto w-full max-w-md px-2 text-center",
      children: [
        (0, C.jsx)("p", { className: "font-serif text-lg sm:text-xl italic text-[#dfba73] mb-3", children: "By the Grace of God Almighty" }),
        (0, C.jsx)("div", {
          className: "card-flip-container relative min-h-[380px] w-full cursor-pointer select-none",
          onClick: () => t(e => !e),
          children: (0, C.jsxs)("div", {
            className: "card-flip-inner min-h-[380px] w-full " + (e ? "flipped" : ""),
            children: [
              (0, C.jsxs)("div", {
                className: "card-face-front absolute inset-0 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/90 p-6 sm:p-8 flex flex-col justify-between items-center shadow-2xl overflow-hidden",
                children: [
                  (0, C.jsx)("div", { className: "pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" }),
                  (0, C.jsx)("div", { className: "pointer-events-none absolute inset-4 border border-[#dfba73]/25" }),
                  (0, C.jsx)(Oe, { className: "absolute left-1 top-1 h-20 w-20 text-[#dfba73] pointer-events-none opacity-85" }),
                  (0, C.jsx)(Oe, { className: "absolute right-1 top-1 h-20 w-20 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" }),
                  (0, C.jsxs)("div", {
                    className: "pt-2",
                    children: [
                      (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs tracking-[0.4em] text-[#dfba73] uppercase font-semibold", children: "SAVE THE DATE" }),
                      (0, C.jsxs)("div", {
                        className: "mt-1 flex items-center justify-center gap-1.5",
                        children: [
                          (0, C.jsx)("span", { className: "h-px w-8 bg-[#dfba73]/40" }),
                          (0, C.jsx)("span", { className: "h-1 w-1 rotate-45 bg-[#dfba73]" }),
                          (0, C.jsx)("span", { className: "h-px w-8 bg-[#dfba73]/40" })
                        ]
                      })
                    ]
                  }),
                  (0, C.jsx)("div", {
                    className: "pulse-gold relative flex items-center justify-center my-auto",
                    children: (0, C.jsx)("div", {
                      className: "relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05261e] to-[#031812] p-2 shadow-2xl border-2 border-[#dfba73]",
                      children: (0, C.jsxs)("div", {
                        className: "flex h-full w-full flex-col items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 p-2 text-center shadow-inner",
                        children: [
                          (0, C.jsx)("span", { className: "font-['Cinzel'] text-[10px] tracking-widest text-[#f5d58f] uppercase", children: "✦ JAN ✦" }),
                          (0, C.jsx)("span", { className: "font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#dfba73] leading-none my-0.5 drop-shadow", children: "09" }),
                          (0, C.jsx)("span", { className: "font-['Cinzel'] text-[9px] tracking-widest text-[#dfba73] uppercase", children: "SATURDAY" })
                        ]
                      })
                    })
                  }),
                  (0, C.jsx)("div", {
                    className: "pb-2",
                    children: (0, C.jsxs)("p", {
                      className: "font-['Cinzel'] text-[11px] tracking-[0.3em] text-[#f5d58f] uppercase flex items-center gap-1.5 justify-center font-medium",
                      children: [
                        (0, C.jsx)(Ce, { className: "h-3 w-3 text-[#dfba73]" }),
                        "TAP TO VIEW CALENDAR",
                        (0, C.jsx)(Ce, { className: "h-3 w-3 text-[#dfba73]" })
                      ]
                    })
                  })
                ]
              }),
              (0, C.jsxs)("div", {
                className: "card-face-back absolute inset-0 rounded-sm border border-[#dfba73]/45 bg-[#041c16]/95 p-5 sm:p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden",
                children: [
                  (0, C.jsx)("div", { className: "pointer-events-none absolute inset-2 border border-[#dfba73]/40" }),
                  (0, C.jsx)("div", {
                    className: "w-full",
                    children: (0, C.jsx)("div", {
                      className: "grid grid-cols-4 divide-x divide-[#dfba73]/30 rounded-sm border border-[#dfba73]/40 bg-[#05261e]/80 py-3 shadow-lg",
                      children: Fe.map(e =>
                        (0, C.jsxs)(
                          "div",
                          {
                            className: "px-1 text-center",
                            children: [
                              (0, C.jsx)("div", { className: "font-['Cinzel'] text-lg sm:text-xl text-[#fdfbf7] font-bold", children: e.v }),
                              (0, C.jsx)("div", { className: "mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#dfba73]", children: e.l })
                            ]
                          },
                          e.l
                        )
                      )
                    })
                  }),
                  (0, C.jsxs)("div", {
                    className: "w-full my-auto px-1",
                    children: [
                      (0, C.jsxs)("div", {
                        className: "flex items-center justify-between pb-1.5 border-b border-[#dfba73]/30",
                        children: [
                          (0, C.jsx)("span", { className: "font-['Cinzel'] text-xs font-bold tracking-widest text-[#dfba73]", children: "JANUARY 2027" }),
                          (0, C.jsx)("span", { className: "font-serif text-xs italic text-[#f5d58f]", children: "Saturday · The Wedding Day" })
                        ]
                      }),
                      (0, C.jsx)("div", {
                        className: "grid grid-cols-7 text-center pt-2 text-[10px] font-['Cinzel'] font-bold text-[#dfba73]/80",
                        children: ["S", "M", "T", "W", "T", "F", "S"].map((e, t) =>
                          (0, C.jsx)("div", { className: t === 6 ? "text-[#f5d58f]" : "", children: e }, t)
                        )
                      }),
                      (0, C.jsx)("div", {
                        className: "grid grid-cols-7 gap-1 pt-1.5 text-center text-xs font-serif text-[#fdfbf7]/80",
                        children: [
                          null, null, null, null, null,
                          ...Array.from({ length: 31 }, (_, i) => i + 1)
                        ].map((n, idx) =>
                          n === null
                            ? (0, C.jsx)("div", { className: "h-6 sm:h-7" }, "empty-" + idx)
                            : (0, C.jsx)(
                                "div",
                                {
                                  className:
                                    "h-6 sm:h-7 flex items-center justify-center rounded-full transition-all " +
                                    (n === 9
                                      ? "pulse-gold bg-[#dfba73] text-[#041c16] font-bold font-['Cinzel'] shadow-md scale-110 z-10"
                                      : "hover:bg-[#dfba73]/10"),
                                  children: n
                                },
                                "day-" + n
                              )
                        )
                      })
                    ]
                  }),
                  (0, C.jsxs)("div", {
                    className: "w-full flex items-center justify-center gap-3 pt-1",
                    children: [
                      (0, C.jsxs)("a", {
                        href: Ie,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: e => e.stopPropagation(),
                        className: "inline-flex items-center gap-1.5 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-2 font-['Cinzel'] text-[11px] tracking-widest text-[#f5d58f] transition hover:bg-[#072920] shadow-md cursor-pointer",
                        children: [(0, C.jsx)(de, { className: "h-3.5 w-3.5 text-[#dfba73]" }), "ADD TO CALENDAR"]
                      }),
                      (0, C.jsx)("span", { className: "text-[10px] font-['Cinzel'] tracking-widest text-[#dfba73]/60 uppercase", children: "✦ Click to Flip ✦" })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  );
}

function Re() {
  let [e, t] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      let e = () => {
        let e = Math.max(0, T - Date.now());
        t({
          Days: Math.floor(e / 864e5),
          Hours: Math.floor((e / 36e5) % 24),
          Minutes: Math.floor((e / 6e4) % 60),
          Seconds: Math.floor((e / 1e3) % 60)
        });
      };
      e();
      let n = setInterval(e, 1000);
      return () => clearInterval(n);
    }, []),
    (0, C.jsx)("div", {
      className: "mx-auto grid max-w-md grid-cols-4 gap-2.5 px-2",
      children: ["Days", "Hours", "Minutes", "Seconds"].map(t =>
        (0, C.jsxs)(
          "div",
          {
            className: "rounded-sm border border-[#dfba73]/40 bg-[#05241c]/80 py-3.5 sm:py-4 text-center shadow-lg",
            children: [
              (0, C.jsx)("div", { className: "font-['Cinzel'] text-xl sm:text-2xl text-[#fdfbf7] font-bold", children: e === null ? "--" : String(e[t]).padStart(2, "0") }),
              (0, C.jsx)("div", { className: "mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfba73]", children: t })
            ]
          },
          t
        )
      )
    })
  );
}

var ze = [
  {
    id: "w1",
    guest_name: "Uncle & Family",
    message: "May the Lord bless this holy union with abundant peace, joyous love, and everlasting happiness. Congratulations Chris & Jyothis!"
  },
  {
    id: "w2",
    guest_name: "Friends & Well-wishers",
    message: "Heartiest congratulations dearest Chris and Jyothis! May God guide your steps as you build a beautiful home together."
  }
];

function Be() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(""),
    [i, a] = (0, _.useState)(""),
    [o, s] = (0, _.useState)(!1),
    [c, l] = (0, _.useState)(null);

  (0, _.useEffect)(() => {
    let e = localStorage.getItem("chris_jyothis_wishes");
    if (e)
      try {
        t(JSON.parse(e));
      } catch {
        t(ze);
      }
    else t(ze), localStorage.setItem("chris_jyothis_wishes", JSON.stringify(ze));
  }, []);

  let u = o => {
      if ((o.preventDefault(), !n.trim() || !i.trim())) return;
      s(!0);
      let u;
      c
        ? ((u = e.map(e => (e.id === c ? { ...e, guest_name: n.trim(), message: i.trim() } : e))), l(null))
        : (u = [{ id: "wish_" + Date.now(), guest_name: n.trim(), message: i.trim() }, ...e]),
        t(u),
        localStorage.setItem("chris_jyothis_wishes", JSON.stringify(u)),
        r(""),
        a(""),
        s(!1);
    },
    d = n => {
      if (confirm("Delete this wish?")) {
        let r = e.filter(e => e.id !== n);
        t(r), localStorage.setItem("chris_jyothis_wishes", JSON.stringify(r));
      }
    };

  return (0, C.jsxs)("div", {
    className: "mx-auto w-full max-w-md px-2",
    children: [
      (0, C.jsxs)("form", {
        onSubmit: u,
        className: "space-y-3.5 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/80 p-5 shadow-2xl",
        children: [
          (0, C.jsx)("input", {
            value: n,
            onChange: e => r(e.target.value),
            maxLength: 60,
            placeholder: "Your name",
            required: !0,
            className: "w-full border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
          }),
          (0, C.jsx)("textarea", {
            value: i,
            onChange: e => a(e.target.value),
            maxLength: 500,
            rows: 3,
            placeholder: "Write your wishes & prayers for Chris & Jyothis",
            required: !0,
            className: "w-full resize-none border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
          }),
          (0, C.jsx)("div", {
            className: "pt-2",
            children: (0, C.jsx)("button", {
              type: "submit",
              disabled: o,
              className: "w-full rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#fdfbf7] transition hover:bg-[#072920] disabled:opacity-60 shadow-md cursor-pointer",
              children: "SEND WISH"
            })
          })
        ]
      }),
      (0, C.jsx)("div", {
        className: "mt-6 space-y-3.5",
        children: e.map(e =>
          (0, C.jsxs)(
            "div",
            {
              className: "emerald-card rounded-sm p-4 text-[#fdfbf7] shadow-lg text-left",
              children: [
                (0, C.jsx)("p", { className: "whitespace-pre-wrap text-base sm:text-lg leading-relaxed font-serif text-[#fdfbf7]/90", children: e.message }),
                (0, C.jsx)("div", {
                  className: "mt-3 border-t border-[#dfba73]/20 pt-2",
                  children: (0, C.jsxs)("span", { className: "font-['Cinzel'] text-xs tracking-[0.2em] text-[#dfba73] font-medium", children: ["— ", e.guest_name] })
                })
              ]
            },
            e.id
          )
        )
      })
    ]
  });
}

function Ve() {
  return (0, C.jsxs)("div", {
    className: "mx-auto max-w-xs text-center py-2",
    children: [
      (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium", children: "J A N U A R Y" }),
      (0, C.jsxs)("div", {
        className: "my-2.5 flex items-center justify-center gap-2",
        children: [
          (0, C.jsx)("span", { className: "h-px flex-1 bg-[#dfba73]/50" }),
          (0, C.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" }),
          (0, C.jsx)("span", { className: "h-px flex-1 bg-[#dfba73]/50" })
        ]
      }),
      (0, C.jsxs)("div", {
        className: "flex items-center justify-between px-2 py-1",
        children: [
          (0, C.jsx)("span", { className: "font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium", children: "S A T U R D A Y" }),
          (0, C.jsx)("span", { className: "font-['Cinzel'] text-3xl sm:text-4xl text-[#dfba73] font-bold px-3", children: "09" }),
          (0, C.jsx)("span", { className: "font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium", children: "AT 11 AM" })
        ]
      }),
      (0, C.jsxs)("div", {
        className: "my-2.5 flex items-center justify-center gap-2",
        children: [
          (0, C.jsx)("span", { className: "h-px flex-1 bg-[#dfba73]/50" }),
          (0, C.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" }),
          (0, C.jsx)("span", { className: "h-px flex-1 bg-[#dfba73]/50" })
        ]
      }),
      (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium", children: "2 0 2 7" })
    ]
  });
}

function He({ stage: e, onStartOpen: t }) {
  let [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(!1);
  return (0, C.jsx)("div", {
    className: "flex min-h-screen items-center justify-center p-3 sm:p-6 overflow-hidden",
    children: (0, C.jsxs)("div", {
      className: "relative flex flex-col items-center",
      children: [
        (0, C.jsxs)("div", {
          className: "mb-5 text-center transition-all duration-700 " + (n ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"),
          children: [
            (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold", children: "WEDDING INVITATION" }),
            (0, C.jsx)("p", { className: "font-serif text-sm sm:text-base italic text-[#fdfbf7]/75 mt-0.5", children: "Chris & Jyothis" })
          ]
        }),
        (0, C.jsxs)("div", {
          className: "gatefold-perspective relative w-[90vw] max-w-[420px] sm:max-w-[450px] h-[580px] sm:h-[630px] rounded-sm shadow-[0_35px_100px_-15px_rgba(0,0,0,0.98)] cursor-pointer select-none",
          onClick: () => {
            e !== "closed" || n || (r(!0), t(), setTimeout(() => { a(!0); }, 380));
          },
          children: [
            (0, C.jsxs)("div", {
              className: "emerald-texture absolute inset-0 rounded-sm border border-[#dfba73]/40 p-6 sm:p-7 text-center overflow-hidden flex flex-col justify-between transition-transform duration-1000",
              style: { transform: i ? "scale(1.02)" : "scale(0.96)" },
              children: [
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-2.5 border border-[#dfba73]/60" }),
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-4 border border-[#dfba73]/25" }),
                (0, C.jsx)(Oe, { className: "absolute left-1 top-1 h-24 w-24 text-[#dfba73] pointer-events-none" }),
                (0, C.jsx)(Oe, { className: "absolute right-1 top-1 h-24 w-24 -scale-x-100 text-[#dfba73] pointer-events-none" }),
                (0, C.jsx)("div", {
                  className: "pointer-events-none absolute inset-0 overflow-hidden",
                  children: (0, C.jsx)("div", { className: "animate-gold-beam absolute -top-1/2 left-0 h-[200%] w-24 bg-gradient-to-r from-transparent via-[#f5d58f]/20 to-transparent" })
                }),
                (0, C.jsxs)("div", {
                  className: "relative pt-3 flex flex-col items-center",
                  children: [
                    (0, C.jsx)(CrossIcon, { className: "h-9 w-6 text-[#dfba73] drop-shadow mb-1" }),
                    (0, C.jsx)("p", { className: "font-serif text-sm italic text-[#f5d58f]/90", children: "By the Grace of God" }),
                    (0, C.jsx)("div", { className: "my-1 flex items-center justify-center", children: (0, C.jsx)("span", { className: "h-1 w-1 rotate-45 border border-[#dfba73] bg-[#dfba73]" }) }),
                    (0, C.jsx)("p", { className: "font-['Cinzel'] text-[11px] tracking-[0.35em] text-[#dfba73] font-semibold uppercase", children: "HOLY MATRIMONY" })
                  ]
                }),
                (0, C.jsx)("div", {
                  className: "relative mx-auto my-2 max-w-[210px] sm:max-w-[240px] overflow-hidden rounded-sm border border-[#dfba73]/50 shadow-2xl",
                  children: (0, C.jsx)("img", { src: Te, alt: "Chris & Jyothis Couple", width: 896, height: 1200, className: "w-full object-cover" })
                }),
                (0, C.jsxs)("div", {
                  className: "relative pb-3",
                  children: [
                    (0, C.jsx)("h2", { className: "font-['Great_Vibes'] text-3xl sm:text-4xl text-[#dfba73] leading-tight drop-shadow", children: "Chris & Jyothis" }),
                    (0, C.jsxs)("div", {
                      className: "mt-1 flex items-center justify-center gap-2",
                      children: [
                        (0, C.jsx)("span", { className: "h-px w-10 bg-[#dfba73]/40" }),
                        (0, C.jsx)("span", { className: "font-['Cinzel'] text-[10px] sm:text-[11px] tracking-[0.3em] text-[#fdfbf7]/80 uppercase", children: "09 JANUARY 2027" }),
                        (0, C.jsx)("span", { className: "h-px w-10 bg-[#dfba73]/40" })
                      ]
                    }),
                    (0, C.jsx)("p", { className: "mt-1 font-serif text-[11px] sm:text-xs text-[#dfba73] italic", children: "St. Thomas Mar Thoma Church, Niranam" })
                  ]
                })
              ]
            }),
            (0, C.jsxs)("div", {
              className: "gatefold-left-door velvet absolute inset-y-0 left-0 w-1/2 border-y border-l border-[#dfba73]/60 rounded-l-sm shadow-2xl overflow-hidden z-20 " + (i ? "open" : ""),
              children: [
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" }),
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-4 border border-[#dfba73]/25" }),
                (0, C.jsx)(Oe, { className: "absolute left-1 top-1 h-28 w-28 text-[#dfba73] pointer-events-none opacity-90" }),
                (0, C.jsx)(Oe, { className: "absolute left-1 bottom-1 h-28 w-28 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" }),
                (0, C.jsx)("div", {
                  className: "silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-end pr-2 transition-all duration-700 ease-out",
                  style: { transform: n ? "translateX(-115%)" : "none", opacity: +!n },
                  children: (0, C.jsx)("span", { className: "h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" })
                }),
                (0, C.jsx)("div", { className: "absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" })
              ]
            }),
            (0, C.jsxs)("div", {
              className: "gatefold-right-door velvet absolute inset-y-0 right-0 w-1/2 border-y border-r border-[#dfba73]/60 rounded-r-sm shadow-2xl overflow-hidden z-20 " + (i ? "open" : ""),
              children: [
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" }),
                (0, C.jsx)("div", { className: "pointer-events-none absolute inset-4 border border-[#dfba73]/25" }),
                (0, C.jsx)(Oe, { className: "absolute right-1 top-1 h-28 w-28 -scale-x-100 text-[#dfba73] pointer-events-none opacity-90" }),
                (0, C.jsx)(Oe, { className: "absolute right-1 bottom-1 h-28 w-28 -scale-x-100 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" }),
                (0, C.jsx)("div", {
                  className: "silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-start pl-2 transition-all duration-700 ease-out",
                  style: { transform: n ? "translateX(115%)" : "none", opacity: +!n },
                  children: (0, C.jsx)("span", { className: "h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" })
                }),
                (0, C.jsx)("div", { className: "absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" })
              ]
            }),
            (0, C.jsx)("div", {
              className: "absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-all duration-700",
              style: { opacity: +!n, transform: "scale(" + (n ? 1.3 : 1) + ")" },
              children: (0, C.jsx)("div", {
                className: "pulse-gold relative flex items-center justify-center rounded-full",
                children: (0, C.jsx)("div", {
                  className: "relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05241c] to-[#041c16] p-1.5 shadow-[0_14px_32px_rgba(0,0,0,0.9)] border-2 border-[#dfba73]",
                  children: (0, C.jsxs)("div", {
                    className: "relative flex h-full w-full items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 shadow-inner",
                    children: [
                      (0, C.jsx)("div", { className: "absolute inset-1.5 rounded-full border border-dashed border-[#dfba73]/40" }),
                      (0, C.jsx)("div", {
                        className: "text-center select-none",
                        children: (0, C.jsx)("p", { className: "font-['Cinzel'] text-sm sm:text-base font-bold tracking-widest text-[#dfba73] drop-shadow-md", children: "C ♡ J" })
                      })
                    ]
                  })
                })
              })
            })
          ]
        })
      ]
    })
  });
}

function Ue({ children: e }) {
  return (0, C.jsxs)("div", {
    className: "mb-8 text-center",
    children: [
      (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold", children: e }),
      (0, C.jsx)(Ae, { className: "mx-auto mt-3 h-3 w-40 text-[#dfba73]/70" })
    ]
  });
}

function We({ children: e, className: t = "" }) {
  return (0, C.jsx)("section", { className: "reveal relative px-4 sm:px-6 py-16 text-center " + t, children: e });
}

function Ge() {
  (0, _.useEffect)(() => {
    let e = document.querySelectorAll(".reveal"),
      t = new IntersectionObserver(
        e => {
          e.forEach(e => {
            e.isIntersecting && e.target.classList.add("in");
          });
        },
        { threshold: 0.12 }
      );
    return e.forEach(e => t.observe(e)), () => t.disconnect();
  }, []);

  return (0, C.jsxs)("main", {
    className: "mx-auto max-w-[580px] animate-fade-in emerald-texture border-x border-[#dfba73]/25 lg:max-w-none lg:border-x-0 shadow-2xl relative overflow-hidden",
    children: [
      (0, C.jsx)(Oe, { className: "absolute left-0 top-0 h-40 w-40 text-[#dfba73] pointer-events-none opacity-85" }),
      (0, C.jsx)(Oe, { className: "absolute right-0 top-0 h-40 w-40 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" }),
      (0, C.jsxs)(We, {
        className: "pt-20 pb-12 relative",
        children: [
          (0, C.jsx)(CrossIcon, { className: "mx-auto h-12 w-8 text-[#dfba73] drop-shadow-md mb-3" }),
          (0, C.jsx)("p", {
            className: "font-serif text-sm sm:text-base italic text-[#f5d58f] max-w-md mx-auto leading-relaxed px-4",
            children: "“This is the day the LORD has made; let us rejoice and be glad in it.”"
          }),
          (0, C.jsx)("p", { className: "mt-1 font-['Cinzel'] text-[10px] tracking-widest text-[#dfba73] uppercase", children: "— Psalms 118:24" }),
          (0, C.jsx)("div", {
            className: "my-4 flex items-center justify-center",
            children: (0, C.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" })
          }),
          (0, C.jsxs)("p", {
            className: "mt-6 text-base sm:text-lg text-[#fdfbf7]/90 max-w-sm mx-auto font-serif leading-relaxed",
            children: ["With joyful hearts and the blessings of our parents,", (0, C.jsx)("br", {}), "we warmly invite you to celebrate", (0, C.jsx)("br", {}), "the holy matrimony of"]
          }),
          (0, C.jsxs)("div", {
            className: "mt-8 space-y-1",
            children: [
              (0, C.jsx)("h2", { className: "font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg", children: "Chris" }),
              (0, C.jsx)("p", { className: "font-serif text-2xl sm:text-3xl text-[#f5d58f] italic py-1", children: "&" }),
              (0, C.jsx)("h2", { className: "font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg", children: "Jyothis" })
            ]
          }),
          (0, C.jsx)("div", { className: "mt-8", children: (0, C.jsx)(Ve, {}) }),
          (0, C.jsxs)("div", {
            className: "mt-4 font-['Cinzel'] tracking-wider text-[#dfba73]",
            children: [
              (0, C.jsx)("p", { className: "text-sm sm:text-base font-bold", children: "ST. THOMAS MAR THOMA CHURCH" }),
              (0, C.jsx)("p", { className: "text-xs sm:text-sm text-[#fdfbf7]/80", children: "NIRANAM, KERALA" })
            ]
          }),
          (0, C.jsx)(ke, { className: "mt-12 text-[#dfba73]" })
        ]
      }),
      (0, C.jsx)(We, { className: "py-12", children: (0, C.jsx)(Le, {}) }),
      (0, C.jsxs)(We, {
        className: "py-12",
        children: [
          (0, C.jsx)(Ue, { children: "COUNTING THE MOMENTS" }),
          (0, C.jsx)(Re, {})
        ]
      }),
      (0, C.jsxs)(We, {
        className: "py-12",
        children: [
          (0, C.jsx)(Ue, { children: "THE CELEBRATION" }),
          (0, C.jsxs)("div", {
            className: "emerald-card mx-auto max-w-md rounded-sm p-6 sm:p-8 text-[#fdfbf7] shadow-2xl bg-[#041c16]/75 border border-[#dfba73]/40 space-y-6 text-center",
            children: [
              (0, C.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, C.jsx)("div", {
                    className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#dfba73]/15 text-[#dfba73] border border-[#dfba73]/30 shadow-inner",
                    style: { width: "48px", height: "48px", minWidth: "48px", minHeight: "48px" },
                    children: (0, C.jsx)(CrossIcon, { className: "h-6 w-5 text-[#dfba73]" })
                  }),
                  (0, C.jsx)("p", { className: "pt-1 font-['Cinzel'] text-xl sm:text-2xl tracking-wider text-[#dfba73] font-bold uppercase", children: "Wedding Ceremony" }),
                  (0, C.jsx)("p", { className: "text-base sm:text-lg font-serif text-[#fdfbf7]/90", children: "St. Thomas Mar Thoma Church, Niranam" }),
                  (0, C.jsx)("p", { className: "text-xs sm:text-sm font-serif italic text-[#dfba73]/90", children: "Solemnized by His Grace Rt. Rev. Dr. Gregorios Mar Stephanos Episcopa" }),
                  (0, C.jsxs)("div", {
                    className: "pt-2 flex items-center justify-center gap-4 text-xs sm:text-sm font-serif text-[#f5d58f]",
                    children: [
                      (0, C.jsxs)("span", { className: "flex items-center gap-1.5", children: [(0, C.jsx)(de, { className: "h-3.5 w-3.5 text-[#dfba73]" }), "Saturday, 9 Jan 2027"] }),
                      (0, C.jsxs)("span", { className: "flex items-center gap-1.5", children: [(0, C.jsx)(pe, { className: "h-3.5 w-3.5 text-[#dfba73]" }), "11:00 AM"] })
                    ]
                  })
                ]
              }),
              (0, C.jsx)(Ae, { className: "mx-auto my-5 h-2.5 w-36 text-[#dfba73]/50" }),
              (0, C.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, C.jsx)("div", {
                    className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#dfba73]/15 text-[#dfba73] border border-[#dfba73]/30 shadow-inner",
                    style: { width: "48px", height: "48px", minWidth: "48px", minHeight: "48px" },
                    children: (0, C.jsx)(he, { className: "h-5 w-5 text-[#dfba73]" })
                  }),
                  (0, C.jsx)("p", { className: "pt-1 font-['Cinzel'] text-xl sm:text-2xl tracking-wider text-[#dfba73] font-bold uppercase", children: "Reception" }),
                  (0, C.jsx)("p", { className: "text-base sm:text-lg font-serif text-[#fdfbf7]/90", children: "Parish Hall of St. Thomas Mar Thoma Church, Niranam" }),
                  (0, C.jsxs)("div", {
                    className: "pt-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif text-[#f5d58f]",
                    children: [(0, C.jsx)(pe, { className: "h-3.5 w-3.5 text-[#dfba73]" }), "12:30 PM Onwards"]
                  })
                ]
              }),
              (0, C.jsxs)("a", {
                href: De,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#dfba73] bg-[#072920] px-7 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#f5d58f] transition hover:bg-[#0b3a2d] shadow-lg cursor-pointer",
                children: [
                  (0, C.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-3.5 w-3.5",
                    children: [
                      (0, C.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
                      (0, C.jsx)("circle", { cx: "12", cy: "10", r: "3" })
                    ]
                  }),
                  "VENUE LOCATION"
                ]
              })
            ]
          })
        ]
      }),
      (0, C.jsxs)(We, {
        className: "py-12",
        children: [
          (0, C.jsx)(Ue, { children: "WITH THE BLESSINGS OF OUR FAMILIES" }),
          (0, C.jsxs)("div", {
            className: "space-y-10 max-w-lg mx-auto",
            children: [
              (0, C.jsxs)("div", {
                className: "emerald-card p-6 rounded-sm border border-[#dfba73]/35 text-center shadow-xl space-y-2",
                children: [
                  (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs uppercase tracking-[0.3em] text-[#dfba73]/80", children: "Groom" }),
                  (0, C.jsx)("p", { className: "font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]", children: "Chris Shibu Cherian" }),
                  (0, C.jsx)("p", { className: "text-base sm:text-lg text-[#fdfbf7]/90 font-serif pt-1", children: "Son of Mr. Shibu Cherian & Mrs. Somy Shibu Cherian" }),
                  (0, C.jsx)("p", { className: "text-xs sm:text-sm text-[#dfba73] font-serif italic", children: "Kalappurackal Mammoottil House, Anaparampal P.O., Thalavady" }),
                  (0, C.jsx)(Ae, { className: "mx-auto my-3 h-2 w-28 text-[#dfba73]/50" }),
                  (0, C.jsxs)("div", {
                    className: "text-xs sm:text-sm font-serif text-[#fdfbf7]/75 space-y-1 pt-1",
                    children: [
                      (0, C.jsx)("p", { className: "text-[11px] font-['Cinzel'] uppercase tracking-widest text-[#dfba73]", children: "Grandparents" }),
                      (0, C.jsx)("p", { children: "Late Mr. Mammen Cherian & Mrs. Leelamma Cherian" }),
                      (0, C.jsx)("p", { children: "Late Mr. Yohannan Mammen & Late Mrs. Chinnamma Mammen" }),
                      (0, C.jsx)("p", { className: "text-[#dfba73] italic pt-1", children: "Family: Kottoor Punnathanathu" })
                    ]
                  })
                ]
              }),
              (0, C.jsx)(ke, { className: "text-[#dfba73]/70" }),
              (0, C.jsxs)("div", {
                className: "emerald-card p-6 rounded-sm border border-[#dfba73]/35 text-center shadow-xl space-y-2",
                children: [
                  (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs uppercase tracking-[0.3em] text-[#dfba73]/80", children: "Bride" }),
                  (0, C.jsx)("p", { className: "font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]", children: "Jyothis Jose" }),
                  (0, C.jsx)("p", { className: "text-base sm:text-lg text-[#fdfbf7]/90 font-serif pt-1", children: "Daughter of Mr. Geevarghese Jose & Mrs. Mariamma Jose" }),
                  (0, C.jsx)("p", { className: "text-xs sm:text-sm text-[#dfba73] font-serif italic", children: "Porikkannivila House, Vayakkal P.O., Valakom" }),
                  (0, C.jsx)(Ae, { className: "mx-auto my-3 h-2 w-28 text-[#dfba73]/50" }),
                  (0, C.jsxs)("div", {
                    className: "text-xs sm:text-sm font-serif text-[#fdfbf7]/75 space-y-1 pt-1",
                    children: [
                      (0, C.jsx)("p", { className: "text-[11px] font-['Cinzel'] uppercase tracking-widest text-[#dfba73]", children: "Grandparents" }),
                      (0, C.jsx)("p", { children: "Late Mr. P. Geevarghese & Late Mrs. Annamma Geevarghese" }),
                      (0, C.jsx)("p", { children: "Mr. O. George & Mrs. Chinnamma George" }),
                      (0, C.jsx)("p", { className: "text-[#dfba73] italic pt-1", children: "Family: Biju Mandiram, Elamadu, Vellachal" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      (0, C.jsxs)(We, {
        className: "py-12",
        children: [
          (0, C.jsx)(Ue, { children: "HOLY SCRIPTURE" }),
          (0, C.jsxs)("div", {
            className: "space-y-6 max-w-lg mx-auto",
            children: [
              (0, C.jsxs)("div", {
                className: "rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-6 sm:p-7 shadow-2xl space-y-4",
                children: [
                  (0, C.jsx)("p", {
                    className: "text-base sm:text-lg leading-relaxed italic text-[#f5d58f] font-serif",
                    children: "“And now these three remain: faith, hope and love. But the greatest of these is love.”"
                  }),
                  (0, C.jsx)("p", { className: "text-xs uppercase tracking-widest text-[#dfba73] font-['Cinzel']", children: "— 1 Corinthians 13:13" }),
                  (0, C.jsx)(Ae, { className: "mx-auto h-2 w-28 text-[#dfba73]/50" }),
                  (0, C.jsx)("p", {
                    className: "text-base sm:text-lg leading-relaxed italic text-[#f5d58f] font-serif",
                    children: "“This is the day the LORD has made; let us rejoice and be glad in it.”"
                  }),
                  (0, C.jsx)("p", { className: "text-xs uppercase tracking-widest text-[#dfba73] font-['Cinzel']", children: "— Psalms 118:24" })
                ]
              })
            ]
          })
        ]
      }),
      (0, C.jsxs)(We, {
        className: "py-12",
        children: [
          (0, C.jsx)(Ue, { children: "WISHES & BLESSINGS" }),
          (0, C.jsx)(Be, {})
        ]
      }),
      (0, C.jsxs)(We, {
        className: "pt-12 pb-28",
        children: [
          (0, C.jsx)(CrossIcon, { className: "mx-auto h-10 w-7 text-[#dfba73] drop-shadow-md mb-2" }),
          (0, C.jsx)(ke, { className: "text-[#dfba73]" }),
          (0, C.jsxs)("div", {
            className: "mt-8 space-y-4 max-w-md mx-auto",
            children: [
              (0, C.jsx)("p", {
                className: "mx-auto mt-2 max-w-sm text-base sm:text-lg italic text-[#f5d58f] font-serif",
                children: "“Therefore what God has joined together, let no one separate.”"
              }),
              (0, C.jsx)("p", { className: "font-['Cinzel'] text-xs tracking-widest text-[#dfba73] uppercase", children: "— Matthew 19:6" }),
              (0, C.jsx)("p", { className: "font-serif text-lg text-[#fdfbf7]/90 pt-3", children: "Your presence and prayers will make our day even more special." }),
              (0, C.jsx)("div", {
                className: "pt-6",
                children: (0, C.jsx)("p", { className: "font-['Great_Vibes'] text-5xl sm:text-6xl text-[#dfba73]", children: "Chris & Jyothis" })
              })
            ]
          })
        ]
      })
    ]
  });
}

function Ke() {
  let [e, t] = (0, _.useState)("closed"),
    [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(!1),
    o = (0, _.useRef)(null),
    s = n || e !== "closed";

  return (0, C.jsxs)("div", {
    className: "min-h-screen bg-[#031812] text-[#fdfbf7] selection:bg-[#0b3a2d] selection:text-[#f5d58f] relative",
    children: [
      (0, C.jsx)("audio", { ref: o, src: w, loop: !0, preload: "auto" }),
      s && (0, C.jsx)(Pe, { count: 18 }),
      (0, C.jsx)(Ne, { onTap: () => r(!0) }),
      e === "open"
        ? (0, C.jsx)(Ge, {})
        : (0, C.jsx)(He, {
            stage: e,
            onStartOpen: () => {
              r(!0);
              let e = o.current;
              e &&
                ((e.volume = 0),
                e
                  .play()
                  .then(() => {
                    a(!0);
                    let t = 0,
                      n = setInterval(() => {
                        (t = Math.min(0.7, t + 0.035)), (e.volume = t), t >= 0.7 && clearInterval(n);
                      }, 120);
                  })
                  .catch(() => {})),
                setTimeout(() => {
                  t("open"), window.scrollTo({ top: 0, behavior: "smooth" });
                }, 1850);
            }
          }),
      e === "open" &&
        (0, C.jsx)("button", {
          onClick: () => {
            let e = o.current;
            e && (e.paused ? e.play().then(() => a(!0)).catch(() => {}) : (e.pause(), a(!1)));
          },
          "aria-label": i ? "Pause music" : "Play music",
          className: "pulse-gold fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfba73] bg-[#072920]/95 text-[#dfba73] shadow-2xl backdrop-blur transition hover:scale-105 cursor-pointer",
          children: i ? (0, C.jsx)(ye, { className: "h-5 w-5" }) : (0, C.jsx)(xe, { className: "ml-0.5 h-5 w-5" })
        })
    ]
  });
}

(0, v.createRoot)(document.getElementById("root")).render(
  (0, C.jsx)(_.StrictMode, { children: (0, C.jsx)(Ke, {}) })
);
`;

const vendor = fs.readFileSync("assets/vendor.js", "utf8");
fs.writeFileSync("assets/index-D8E5GD39.js", vendor + "\n" + appCode);
console.log("Successfully generated bundle! Size:", (vendor + "\n" + appCode).length);
