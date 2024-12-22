"use strict";
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "3c566238-8fa6-461b-a9f9-53f1bb3fff38"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-3c566238-8fa6-461b-a9f9-53f1bb3fff38"));
  } catch (e) {}
})(),
  (function () {
    try {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        t = new e.Error().stack;
      t &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[t] = "3c566238-8fa6-461b-a9f9-53f1bb3fff38"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-3c566238-8fa6-461b-a9f9-53f1bb3fff38"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2445],
    {
      45712: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let n = (0, r(40416).Z)("ArrowRight", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
        ]);
      },
      5057: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let n = (0, r(40416).Z)("ChevronDown", [
          ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
        ]);
      },
      73781: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let n = (0, r(40416).Z)("ChevronLeft", [
          ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
        ]);
      },
      77748: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let n = (0, r(40416).Z)("CircleHelp", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" },
          ],
          ["path", { d: "M12 17h.01", key: "p32p05" }],
        ]);
      },
      38804: function (e, t, r) {
        r.d(t, {
          Z: function () {
            return n;
          },
        });
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let n = (0, r(40416).Z)("Wallet", [
          [
            "path",
            {
              d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
              key: "18etb6",
            },
          ],
          [
            "path",
            { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
          ],
        ]);
      },
      53250: function (e, t, r) {
        /**
         * @license React
         * use-sync-external-store-shim.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = r(67294),
          o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = n.useState,
          l = n.useEffect,
          i = n.useLayoutEffect,
          s = n.useDebugValue;
        function d(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !o(e, r);
          } catch (e) {
            return !0;
          }
        }
        var u =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var r = t(),
                  n = a({ inst: { value: r, getSnapshot: t } }),
                  o = n[0].inst,
                  u = n[1];
                return (
                  i(
                    function () {
                      (o.value = r),
                        (o.getSnapshot = t),
                        d(o) && u({ inst: o });
                    },
                    [e, r, t]
                  ),
                  l(
                    function () {
                      return (
                        d(o) && u({ inst: o }),
                        e(function () {
                          d(o) && u({ inst: o });
                        })
                      );
                    },
                    [e]
                  ),
                  s(r),
                  r
                );
              };
        t.useSyncExternalStore =
          void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u;
      },
      50139: function (e, t, r) {
        /**
         * @license React
         * use-sync-external-store-shim/with-selector.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = r(67294),
          o = r(61688),
          a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          l = o.useSyncExternalStore,
          i = n.useRef,
          s = n.useEffect,
          d = n.useMemo,
          u = n.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
          var c = i(null);
          if (null === c.current) {
            var p = { hasValue: !1, value: null };
            c.current = p;
          } else p = c.current;
          var f = l(
            e,
            (c = d(
              function () {
                function e(e) {
                  if (!s) {
                    if (
                      ((s = !0),
                      (l = e),
                      (e = n(e)),
                      void 0 !== o && p.hasValue)
                    ) {
                      var t = p.value;
                      if (o(t, e)) return (i = t);
                    }
                    return (i = e);
                  }
                  if (((t = i), a(l, e))) return t;
                  var r = n(e);
                  return void 0 !== o && o(t, r) ? t : ((l = e), (i = r));
                }
                var l,
                  i,
                  s = !1,
                  d = void 0 === r ? null : r;
                return [
                  function () {
                    return e(t());
                  },
                  null === d
                    ? void 0
                    : function () {
                        return e(d());
                      },
                ];
              },
              [t, r, n, o]
            ))[0],
            c[1]
          );
          return (
            s(
              function () {
                (p.hasValue = !0), (p.value = f);
              },
              [f]
            ),
            u(f),
            f
          );
        };
      },
      61688: function (e, t, r) {
        e.exports = r(53250);
      },
      52798: function (e, t, r) {
        e.exports = r(50139);
      },
      2158: function (e, t, r) {
        r.d(t, {
          W: function () {
            return P;
          },
        });
        var n = r(76733),
          o = r(15607),
          a = (0, r(82189).tv)(
            {
              slots: {
                base: "flex flex-col gap-2 w-full",
                label: "",
                labelWrapper: "flex justify-between",
                value: "",
                track: "z-0 relative bg-default-300/50 overflow-hidden",
                indicator: "h-full",
              },
              variants: {
                color: {
                  default: { indicator: "bg-default-400" },
                  primary: { indicator: "bg-primary" },
                  secondary: { indicator: "bg-secondary" },
                  success: { indicator: "bg-success" },
                  warning: { indicator: "bg-warning" },
                  danger: { indicator: "bg-danger" },
                },
                size: {
                  sm: {
                    label: "text-small",
                    value: "text-small",
                    track: "h-1",
                  },
                  md: {
                    label: "text-medium",
                    value: "text-medium",
                    track: "h-3",
                  },
                  lg: {
                    label: "text-large",
                    value: "text-large",
                    track: "h-5",
                  },
                },
                radius: {
                  none: { track: "rounded-none", indicator: "rounded-none" },
                  sm: { track: "rounded-small", indicator: "rounded-small" },
                  md: { track: "rounded-medium", indicator: "rounded-medium" },
                  lg: { track: "rounded-large", indicator: "rounded-large" },
                  full: { track: "rounded-full", indicator: "rounded-full" },
                },
                isStriped: {
                  true: {
                    indicator: "bg-stripe-gradient bg-[length:1.25rem_1.25rem]",
                  },
                },
                isIndeterminate: {
                  true: {
                    indicator: [
                      "absolute",
                      "w-full",
                      "origin-left",
                      "animate-indeterminate-bar",
                    ],
                  },
                },
                isDisabled: {
                  true: { base: "opacity-disabled cursor-not-allowed" },
                },
                disableAnimation: {
                  true: {},
                  false: { indicator: "transition-transform !duration-500" },
                },
              },
              defaultVariants: {
                color: "primary",
                size: "md",
                radius: "full",
                isStriped: !1,
                isIndeterminate: !1,
                isDisabled: !1,
              },
              compoundVariants: [
                {
                  disableAnimation: !0,
                  isIndeterminate: !1,
                  class: {
                    indicator: "!transition-none motion-reduce:transition-none",
                  },
                },
              ],
            },
            { twMerge: !0 }
          ),
          l = r(33295),
          i = r(49869),
          s = r(49037),
          d = r(80711),
          u = r(50262),
          c = r(28349),
          p = r(67294),
          f = r(3136),
          m = r(18399),
          b = r(89527),
          g = r(54792);
        let h = new Map(),
          v = !1;
        try {
          v =
            "exceptZero" ===
            new Intl.NumberFormat("de-DE", {
              signDisplay: "exceptZero",
            }).resolvedOptions().signDisplay;
        } catch (e) {}
        let y = !1;
        try {
          y =
            "unit" ===
            new Intl.NumberFormat("de-DE", {
              style: "unit",
              unit: "degree",
            }).resolvedOptions().style;
        } catch (e) {}
        let w = {
          degree: {
            narrow: {
              default: "\xb0",
              "ja-JP": " 度",
              "zh-TW": "度",
              "sl-SI": " \xb0",
            },
          },
        };
        class x {
          format(e) {
            let t = "";
            if (
              ((t =
                v || null == this.options.signDisplay
                  ? this.numberFormatter.format(e)
                  : (function (e, t, r) {
                      if ("auto" === t) return e.format(r);
                      {
                        if ("never" === t) return e.format(Math.abs(r));
                        let n = !1;
                        if (
                          ("always" === t
                            ? (n = r > 0 || Object.is(r, 0))
                            : "exceptZero" === t &&
                              (Object.is(r, -0) || Object.is(r, 0)
                                ? (r = Math.abs(r))
                                : (n = r > 0)),
                          !n)
                        )
                          return e.format(r);
                        {
                          let t = e.format(-r),
                            n = e.format(r),
                            o = t.replace(n, "").replace(/\u200e|\u061C/, "");
                          return (
                            1 != [...o].length &&
                              console.warn(
                                "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"
                              ),
                            t
                              .replace(n, "!!!")
                              .replace(o, "+")
                              .replace("!!!", n)
                          );
                        }
                      }
                    })(this.numberFormatter, this.options.signDisplay, e)),
              "unit" === this.options.style && !y)
            ) {
              var r;
              let {
                unit: e,
                unitDisplay: n = "short",
                locale: o,
              } = this.resolvedOptions();
              if (!e) return t;
              let a = null === (r = w[e]) || void 0 === r ? void 0 : r[n];
              t += a[o] || a.default;
            }
            return t;
          }
          formatToParts(e) {
            return this.numberFormatter.formatToParts(e);
          }
          formatRange(e, t) {
            if ("function" == typeof this.numberFormatter.formatRange)
              return this.numberFormatter.formatRange(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            return `${this.format(e)} \u{2013} ${this.format(t)}`;
          }
          formatRangeToParts(e, t) {
            if ("function" == typeof this.numberFormatter.formatRangeToParts)
              return this.numberFormatter.formatRangeToParts(e, t);
            if (t < e) throw RangeError("End date must be >= start date");
            let r = this.numberFormatter.formatToParts(e),
              n = this.numberFormatter.formatToParts(t);
            return [
              ...r.map((e) => ({ ...e, source: "startRange" })),
              { type: "literal", value: " – ", source: "shared" },
              ...n.map((e) => ({ ...e, source: "endRange" })),
            ];
          }
          resolvedOptions() {
            let e = this.numberFormatter.resolvedOptions();
            return (
              v ||
                null == this.options.signDisplay ||
                (e = { ...e, signDisplay: this.options.signDisplay }),
              y ||
                "unit" !== this.options.style ||
                (e = {
                  ...e,
                  style: "unit",
                  unit: this.options.unit,
                  unitDisplay: this.options.unitDisplay,
                }),
              e
            );
          }
          constructor(e, t = {}) {
            (this.numberFormatter = (function (e, t = {}) {
              let { numberingSystem: r } = t;
              if (
                (r &&
                  e.includes("-nu-") &&
                  (e.includes("-u-") || (e += "-u-"), (e += `-nu-${r}`)),
                "unit" === t.style && !y)
              ) {
                var n;
                let { unit: e, unitDisplay: r = "short" } = t;
                if (!e)
                  throw Error(
                    'unit option must be provided with style: "unit"'
                  );
                if (!(null === (n = w[e]) || void 0 === n ? void 0 : n[r]))
                  throw Error(`Unsupported unit ${e} with unitDisplay = ${r}`);
                t = { ...t, style: "decimal" };
              }
              let o =
                e +
                (t
                  ? Object.entries(t)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                  : "");
              if (h.has(o)) return h.get(o);
              let a = new Intl.NumberFormat(e, t);
              return h.set(o, a), a;
            })(e, t)),
              (this.options = t);
          }
        }
        var k = r(85893),
          E = (0, o.Gp)((e, t) => {
            let {
                Component: r,
                slots: h,
                classNames: v,
                label: y,
                percentage: w,
                showValueLabel: E,
                getProgressBarProps: P,
                getLabelProps: C,
              } = (function (e) {
                var t, r;
                let h = (0, n.w)(),
                  [v, y] = (0, o.oe)(e, a.variantKeys),
                  {
                    ref: w,
                    as: k,
                    id: E,
                    className: P,
                    classNames: C,
                    label: O,
                    valueLabel: j,
                    value: z = 0,
                    minValue: D = 0,
                    maxValue: S = 100,
                    showValueLabel: R = !1,
                    formatOptions: T = { style: "percent" },
                    ...N
                  } = v,
                  M = (0, l.gy)(w),
                  I = (0, i.W)(null == C ? void 0 : C.base, P),
                  [, L] = (function (e = {}) {
                    let { rerender: t = !1, delay: r = 0 } = e,
                      n = (0, p.useRef)(!1),
                      [o, a] = (0, p.useState)(!1);
                    return (
                      (0, p.useEffect)(() => {
                        n.current = !0;
                        let e = null;
                        return (
                          t &&
                            (r > 0
                              ? (e = setTimeout(() => {
                                  a(!0);
                                }, r))
                              : a(!0)),
                          () => {
                            (n.current = !1), t && a(!1), e && clearTimeout(e);
                          }
                        );
                      }, [t]),
                      [(0, p.useCallback)(() => n.current, []), o]
                    );
                  })({ rerender: !0, delay: 100 }),
                  W = e.isIndeterminate,
                  A =
                    null !=
                      (r =
                        null != (t = e.disableAnimation)
                          ? t
                          : null == h
                          ? void 0
                          : h.disableAnimation) && r,
                  { progressBarProps: _, labelProps: B } = (function (e) {
                    let {
                        value: t = 0,
                        minValue: r = 0,
                        maxValue: n = 100,
                        valueLabel: o,
                        isIndeterminate: a,
                        formatOptions: l = { style: "percent" },
                      } = e,
                      i = (0, f.z)(e, { labelable: !0 }),
                      { labelProps: s, fieldProps: d } = (function (e) {
                        let {
                          id: t,
                          label: r,
                          "aria-labelledby": n,
                          "aria-label": o,
                          labelElementType: a = "label",
                        } = e;
                        t = (0, b.Me)(t);
                        let l = (0, b.Me)(),
                          i = {};
                        return (
                          r
                            ? ((n = n ? `${l} ${n}` : l),
                              (i = {
                                id: l,
                                htmlFor: "label" === a ? t : void 0,
                              }))
                            : n ||
                              o ||
                              console.warn(
                                "If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"
                              ),
                          {
                            labelProps: i,
                            fieldProps: (function (e, t) {
                              let {
                                id: r,
                                "aria-label": n,
                                "aria-labelledby": o,
                              } = e;
                              return (
                                (r = (0, b.Me)(r)),
                                o && n
                                  ? (o = [
                                      ...new Set([r, ...o.trim().split(/\s+/)]),
                                    ].join(" "))
                                  : o && (o = o.trim().split(/\s+/).join(" ")),
                                { id: r, "aria-label": n, "aria-labelledby": o }
                              );
                            })({
                              id: t,
                              "aria-label": o,
                              "aria-labelledby": n,
                            }),
                          }
                        );
                      })({ ...e, labelElementType: "span" }),
                      u = ((t = (0, m.uZ)(t, r, n)) - r) / (n - r),
                      h = (function (e = {}) {
                        let { locale: t } = (0, g.j)();
                        return (0, p.useMemo)(() => new x(t, e), [t, e]);
                      })(l);
                    if (!a && !o) {
                      let e = "percent" === l.style ? u : t;
                      o = h.format(e);
                    }
                    return {
                      progressBarProps: (0, c.d)(i, {
                        ...d,
                        "aria-valuenow": a ? void 0 : t,
                        "aria-valuemin": r,
                        "aria-valuemax": n,
                        "aria-valuetext": a ? void 0 : o,
                        role: "progressbar",
                      }),
                      labelProps: s,
                    };
                  })({
                    id: E,
                    label: O,
                    value: z,
                    minValue: D,
                    maxValue: S,
                    valueLabel: j,
                    formatOptions: T,
                    isIndeterminate: W,
                    "aria-labelledby": e["aria-labelledby"],
                    "aria-label": e["aria-label"],
                  }),
                  F = (0, p.useMemo)(
                    () => a({ ...y, disableAnimation: A }),
                    [(0, s.Xx)(y), A]
                  ),
                  H = !!A || L,
                  G = (0, p.useMemo)(
                    () =>
                      W || !H ? void 0 : (0, d.Ez)(((z - D) / (S - D)) * 100),
                    [H, W, z, D, S]
                  ),
                  V = (0, p.useCallback)(
                    (t = {}) => ({
                      ref: M,
                      "data-indeterminate": (0, u.PB)(W),
                      "data-disabled": (0, u.PB)(e.isDisabled),
                      className: F.base({ class: I }),
                      ...(0, c.d)(_, N, t),
                    }),
                    [M, F, W, e.isDisabled, I, _, N]
                  ),
                  Z = (0, p.useCallback)(
                    (e = {}) => ({
                      className: F.label({
                        class: null == C ? void 0 : C.label,
                      }),
                      ...(0, c.d)(B, e),
                    }),
                    [F, C, B]
                  );
                return {
                  Component: k || "div",
                  domRef: M,
                  slots: F,
                  classNames: C,
                  label: O,
                  percentage: G,
                  showValueLabel: R,
                  getProgressBarProps: V,
                  getLabelProps: Z,
                };
              })({ ...e, ref: t }),
              O = P(),
              j = y || E;
            return (0, k.jsxs)(r, {
              ...O,
              children: [
                j
                  ? (0, k.jsxs)("div", {
                      className: h.labelWrapper({
                        class: null == v ? void 0 : v.labelWrapper,
                      }),
                      children: [
                        y && (0, k.jsx)("span", { ...C(), children: y }),
                        E &&
                          (0, k.jsx)("span", {
                            className: h.value({
                              class: null == v ? void 0 : v.value,
                            }),
                            children: O["aria-valuetext"],
                          }),
                      ],
                    })
                  : null,
                (0, k.jsx)("div", {
                  className: h.track({ class: null == v ? void 0 : v.track }),
                  children: (0, k.jsx)("div", {
                    className: h.indicator({
                      class: null == v ? void 0 : v.indicator,
                    }),
                    style: { transform: `translateX(-${100 - (w || 0)}%)` },
                  }),
                }),
              ],
            });
          });
        E.displayName = "NextUI.Progress";
        var P = E;
      },
      48781: function (e, t, r) {
        r.d(t, {
          i: function () {
            return P;
          },
        });
        var n = r(67294),
          o = r(76733),
          a = r(15607),
          l = r(48255),
          i = r(93387),
          s = r(18419),
          d = r(20705),
          u = r(82189),
          c = r(65512),
          p = (0, u.tv)({
            slots: {
              base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",
              wrapper: [
                "px-1",
                "relative",
                "inline-flex",
                "items-center",
                "justify-start",
                "flex-shrink-0",
                "overflow-hidden",
                "bg-default-200",
                "rounded-full",
                ...c.ID,
              ],
              thumb: [
                "z-10",
                "flex",
                "items-center",
                "justify-center",
                "bg-white",
                "shadow-small",
                "rounded-full",
                "origin-right",
              ],
              startContent:
                "z-0 absolute left-1.5 rtl:right-1.5 rtl:left-[unset] text-current",
              endContent:
                "z-0 absolute right-1.5 rtl:left-1.5 rtl:right-[unset] text-default-600",
              thumbIcon: "text-black",
              label: "relative text-foreground select-none",
            },
            variants: {
              color: {
                default: {
                  wrapper: [
                    "group-data-[selected=true]:bg-default-400",
                    "group-data-[selected=true]:text-default-foreground",
                  ],
                },
                primary: {
                  wrapper: [
                    "group-data-[selected=true]:bg-primary",
                    "group-data-[selected=true]:text-primary-foreground",
                  ],
                },
                secondary: {
                  wrapper: [
                    "group-data-[selected=true]:bg-secondary",
                    "group-data-[selected=true]:text-secondary-foreground",
                  ],
                },
                success: {
                  wrapper: [
                    "group-data-[selected=true]:bg-success",
                    "group-data-[selected=true]:text-success-foreground",
                  ],
                },
                warning: {
                  wrapper: [
                    "group-data-[selected=true]:bg-warning",
                    "group-data-[selected=true]:text-warning-foreground",
                  ],
                },
                danger: {
                  wrapper: [
                    "group-data-[selected=true]:bg-danger",
                    "data-[selected=true]:text-danger-foreground",
                  ],
                },
              },
              size: {
                sm: {
                  wrapper: "w-10 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",
                  thumb: [
                    "w-4 h-4 text-tiny",
                    "group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4",
                  ],
                  endContent: "text-tiny",
                  startContent: "text-tiny",
                  label: "text-small",
                },
                md: {
                  wrapper: "w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset]",
                  thumb: [
                    "w-5 h-5 text-small",
                    "group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5",
                  ],
                  endContent: "text-small",
                  startContent: "text-small",
                  label: "text-medium",
                },
                lg: {
                  wrapper: "w-14 h-8 mr-2 rtl:ml-2 rtl:mr-[unset]",
                  thumb: [
                    "w-6 h-6 text-medium",
                    "group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6",
                  ],
                  endContent: "text-medium",
                  startContent: "text-medium",
                  label: "text-large",
                },
              },
              isDisabled: {
                true: { base: "opacity-disabled pointer-events-none" },
              },
              disableAnimation: {
                true: { wrapper: "transition-none", thumb: "transition-none" },
                false: {
                  wrapper: "transition-background",
                  thumb: "transition-all",
                  startContent: [
                    "opacity-0",
                    "scale-50",
                    "transition-transform-opacity",
                    "group-data-[selected=true]:scale-100",
                    "group-data-[selected=true]:opacity-100",
                  ],
                  endContent: [
                    "opacity-100",
                    "transition-transform-opacity",
                    "group-data-[selected=true]:translate-x-3",
                    "group-data-[selected=true]:opacity-0",
                  ],
                },
              },
            },
            defaultVariants: { color: "primary", size: "md", isDisabled: !1 },
            compoundVariants: [
              {
                disableAnimation: !1,
                size: "sm",
                class: {
                  thumb: [
                    "group-data-[pressed=true]:w-5",
                    "group-data-[selected]:group-data-[pressed]:ml-3",
                  ],
                },
              },
              {
                disableAnimation: !1,
                size: "md",
                class: {
                  thumb: [
                    "group-data-[pressed=true]:w-6",
                    "group-data-[selected]:group-data-[pressed]:ml-4",
                  ],
                },
              },
              {
                disableAnimation: !1,
                size: "lg",
                class: {
                  thumb: [
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-5",
                  ],
                },
              },
            ],
          }),
          f = r(28349),
          m = r(11086),
          b = r(49037),
          g = r(49869),
          h = r(50262),
          v = r(33574),
          y = r(74619),
          w = r(2459),
          x = r(73699),
          k = r(85893),
          E = (0, a.Gp)((e, t) => {
            let {
                Component: r,
                children: u,
                startContent: c,
                endContent: E,
                thumbIcon: P,
                getBaseProps: C,
                getInputProps: O,
                getWrapperProps: j,
                getThumbProps: z,
                getThumbIconProps: D,
                getLabelProps: S,
                getStartContentProps: R,
                getEndContentProps: T,
              } = (function (e = {}) {
                var t, r;
                let u = (0, o.w)(),
                  [c, x] = (0, a.oe)(e, p.variantKeys),
                  {
                    ref: k,
                    as: E,
                    name: P,
                    value: C = "",
                    isReadOnly: O = !1,
                    autoFocus: j = !1,
                    startContent: z,
                    endContent: D,
                    defaultSelected: S,
                    isSelected: R,
                    children: T,
                    thumbIcon: N,
                    className: M,
                    classNames: I,
                    onChange: L,
                    onValueChange: W,
                    ...A
                  } = c,
                  _ = (0, n.useRef)(null),
                  B = (0, n.useRef)(null),
                  F =
                    null !=
                      (r =
                        null != (t = e.disableAnimation)
                          ? t
                          : null == u
                          ? void 0
                          : u.disableAnimation) && r,
                  H = (0, n.useId)(),
                  G = (0, n.useMemo)(() => {
                    let t =
                      A["aria-label"] || "string" == typeof T ? T : void 0;
                    return {
                      name: P,
                      value: C,
                      children: T,
                      autoFocus: j,
                      defaultSelected: S,
                      isSelected: R,
                      isDisabled: !!e.isDisabled,
                      isReadOnly: O,
                      "aria-label": t,
                      "aria-labelledby": A["aria-labelledby"] || H,
                      onChange: W,
                    };
                  }, [
                    C,
                    P,
                    H,
                    T,
                    j,
                    O,
                    R,
                    S,
                    e.isDisabled,
                    A["aria-label"],
                    A["aria-labelledby"],
                    W,
                  ]),
                  V = (0, y.l)(G);
                (0, i.G)(() => {
                  if (!B.current) return;
                  let e = !!B.current.checked;
                  V.setSelected(e);
                }, [B.current]);
                let {
                    inputProps: Z,
                    isPressed: X,
                    isReadOnly: $,
                  } = (function (e, t, r) {
                    let {
                      labelProps: n,
                      inputProps: o,
                      isSelected: a,
                      isPressed: l,
                      isDisabled: i,
                      isReadOnly: s,
                    } = (0, v.O)(e, t, r);
                    return {
                      labelProps: n,
                      inputProps: { ...o, role: "switch", checked: a },
                      isSelected: a,
                      isPressed: l,
                      isDisabled: i,
                      isReadOnly: s,
                    };
                  })(G, V, B),
                  {
                    focusProps: Y,
                    isFocused: q,
                    isFocusVisible: J,
                  } = (0, w.F)({ autoFocus: Z.autoFocus }),
                  { hoverProps: K, isHovered: U } = (0, s.X)({
                    isDisabled: Z.disabled,
                  }),
                  Q = G.isDisabled || $,
                  [ee, et] = (0, n.useState)(!1),
                  { pressProps: er } = (0, d.r)({
                    isDisabled: Q,
                    onPressStart(e) {
                      "keyboard" !== e.pointerType && et(!0);
                    },
                    onPressEnd(e) {
                      "keyboard" !== e.pointerType && et(!1);
                    },
                  }),
                  en = !Q && (ee || X),
                  eo = Z.checked,
                  ea = Z.disabled,
                  el = (0, n.useMemo)(
                    () => p({ ...x, disableAnimation: F }),
                    [(0, b.Xx)(x), F]
                  ),
                  ei = (0, g.W)(null == I ? void 0 : I.base, M),
                  es = (0, n.useCallback)(
                    (e = {}) => ({
                      ...e,
                      "aria-hidden": !0,
                      className: (0, g.W)(
                        el.wrapper({
                          class: (0, g.W)(
                            null == I ? void 0 : I.wrapper,
                            null == e ? void 0 : e.className
                          ),
                        })
                      ),
                    }),
                    [el, null == I ? void 0 : I.wrapper]
                  ),
                  ed = (0, n.useCallback)(
                    (e = {}) => ({
                      ...e,
                      className: el.thumb({
                        class: (0, g.W)(
                          null == I ? void 0 : I.thumb,
                          null == e ? void 0 : e.className
                        ),
                      }),
                    }),
                    [el, null == I ? void 0 : I.thumb]
                  ),
                  eu = (0, n.useCallback)(
                    (e = {}) => ({
                      ...e,
                      id: H,
                      className: el.label({
                        class: (0, g.W)(
                          null == I ? void 0 : I.label,
                          null == e ? void 0 : e.className
                        ),
                      }),
                    }),
                    [el, null == I ? void 0 : I.label, ea, eo]
                  ),
                  ec = (0, n.useCallback)(
                    (e = { includeStateProps: !1 }) =>
                      (0, f.d)(
                        {
                          width: "1em",
                          height: "1em",
                          className: el.thumbIcon({
                            class: (0, g.W)(null == I ? void 0 : I.thumbIcon),
                          }),
                        },
                        e.includeStateProps ? { isSelected: eo } : {}
                      ),
                    [el, null == I ? void 0 : I.thumbIcon, eo]
                  ),
                  ep = (0, n.useCallback)(
                    (e = {}) => ({
                      width: "1em",
                      height: "1em",
                      ...e,
                      className: el.startContent({
                        class: (0, g.W)(
                          null == I ? void 0 : I.startContent,
                          null == e ? void 0 : e.className
                        ),
                      }),
                    }),
                    [el, null == I ? void 0 : I.startContent, eo]
                  ),
                  ef = (0, n.useCallback)(
                    (e = {}) => ({
                      width: "1em",
                      height: "1em",
                      ...e,
                      className: el.endContent({
                        class: (0, g.W)(
                          null == I ? void 0 : I.endContent,
                          null == e ? void 0 : e.className
                        ),
                      }),
                    }),
                    [el, null == I ? void 0 : I.endContent, eo]
                  );
                return {
                  Component: E || "label",
                  slots: el,
                  classNames: I,
                  domRef: _,
                  children: T,
                  thumbIcon: N,
                  startContent: z,
                  endContent: D,
                  isHovered: U,
                  isSelected: eo,
                  isPressed: en,
                  isFocused: q,
                  isFocusVisible: J,
                  isDisabled: ea,
                  getBaseProps: (e) => ({
                    ...(0, f.d)(K, er, A, e),
                    ref: _,
                    className: el.base({
                      class: (0, g.W)(ei, null == e ? void 0 : e.className),
                    }),
                    "data-disabled": (0, h.PB)(ea),
                    "data-selected": (0, h.PB)(eo),
                    "data-readonly": (0, h.PB)($),
                    "data-focus": (0, h.PB)(q),
                    "data-focus-visible": (0, h.PB)(J),
                    "data-hover": (0, h.PB)(U),
                    "data-pressed": (0, h.PB)(en),
                  }),
                  getWrapperProps: es,
                  getInputProps: (e = {}) => ({
                    ...(0, f.d)(Z, Y, e),
                    ref: (0, l.l)(B, k),
                    id: Z.id,
                    onChange: (0, m.t)(L, Z.onChange),
                  }),
                  getLabelProps: eu,
                  getThumbProps: ed,
                  getThumbIconProps: ec,
                  getStartContentProps: ep,
                  getEndContentProps: ef,
                };
              })({ ...e, ref: t }),
              N =
                "function" == typeof P
                  ? P(D({ includeStateProps: !0 }))
                  : P && (0, n.cloneElement)(P, D()),
              M = c && (0, n.cloneElement)(c, R()),
              I = E && (0, n.cloneElement)(E, T());
            return (0, k.jsxs)(r, {
              ...C(),
              children: [
                (0, k.jsx)(x.T, {
                  elementType: "span",
                  children: (0, k.jsx)("input", { ...O() }),
                }),
                (0, k.jsxs)("span", {
                  ...j(),
                  children: [
                    c && M,
                    (0, k.jsx)("span", { ...z(), children: P && N }),
                    E && I,
                  ],
                }),
                u && (0, k.jsx)("span", { ...S(), children: u }),
              ],
            });
          });
        E.displayName = "NextUI.Switch";
        var P = E;
      },
      41138: function (e, t, r) {
        r.d(t, {
          cn: function () {
            return B;
          },
        });
        var n = r(76978),
          o = function () {
            for (var e, t, r = 0, n = ""; r < arguments.length; )
              (e = arguments[r++]) &&
                (t = (function e(t) {
                  var r,
                    n,
                    o = "";
                  if ("string" == typeof t || "number" == typeof t) o += t;
                  else if ("object" == typeof t) {
                    if (Array.isArray(t))
                      for (r = 0; r < t.length; r++)
                        t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                    else for (r in t) t[r] && (o && (o += " "), (o += r));
                  }
                  return o;
                })(e)) &&
                (n && (n += " "), (n += t));
            return n;
          },
          a = /^\[(.+)\]$/;
        function l(e, t) {
          var r = e;
          return (
            t.split("-").forEach(function (e) {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        }
        var i = /\s+/;
        function s() {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                if ("string" == typeof t) return t;
                for (var r, n = "", o = 0; o < t.length; o++)
                  t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
                return n;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        }
        function d() {
          for (
            var e, t, r, n = arguments.length, o = Array(n), d = 0;
            d < n;
            d++
          )
            o[d] = arguments[d];
          var u = function (n) {
            var i = o[0];
            return (
              (t = (e = (function (e) {
                var t, r, n, o, i, s, d, u, c, p, f;
                return {
                  cache: (function (e) {
                    if (e < 1)
                      return { get: function () {}, set: function () {} };
                    var t = 0,
                      r = new Map(),
                      n = new Map();
                    function o(o, a) {
                      r.set(o, a),
                        ++t > e && ((t = 0), (n = r), (r = new Map()));
                    }
                    return {
                      get: function (e) {
                        var t = r.get(e);
                        return void 0 !== t
                          ? t
                          : void 0 !== (t = n.get(e))
                          ? (o(e, t), t)
                          : void 0;
                      },
                      set: function (e, t) {
                        r.has(e) ? r.set(e, t) : o(e, t);
                      },
                    };
                  })(e.cacheSize),
                  splitModifiers:
                    ((r = 1 === (t = e.separator || ":").length),
                    (n = t[0]),
                    (o = t.length),
                    function (e) {
                      for (
                        var a, l = [], i = 0, s = 0, d = 0;
                        d < e.length;
                        d++
                      ) {
                        var u = e[d];
                        if (0 === i) {
                          if (u === n && (r || e.slice(d, d + o) === t)) {
                            l.push(e.slice(s, d)), (s = d + o);
                            continue;
                          }
                          if ("/" === u) {
                            a = d;
                            continue;
                          }
                        }
                        "[" === u ? i++ : "]" === u && i--;
                      }
                      var c = 0 === l.length ? e : e.substring(s),
                        p = c.startsWith("!"),
                        f = p ? c.substring(1) : c;
                      return {
                        modifiers: l,
                        hasImportantModifier: p,
                        baseClassName: f,
                        maybePostfixModifierPosition:
                          a && a > s ? a - s : void 0,
                      };
                    }),
                  ...((u = e.theme),
                  (c = e.prefix),
                  (p = { nextPart: new Map(), validators: [] }),
                  ((f = Object.entries(e.classGroups)),
                  c
                    ? f.map(function (e) {
                        return [
                          e[0],
                          e[1].map(function (e) {
                            return "string" == typeof e
                              ? c + e
                              : "object" == typeof e
                              ? Object.fromEntries(
                                  Object.entries(e).map(function (e) {
                                    return [c + e[0], e[1]];
                                  })
                                )
                              : e;
                          }),
                        ];
                      })
                    : f).forEach(function (e) {
                    var t = e[0];
                    (function e(t, r, n, o) {
                      t.forEach(function (t) {
                        if ("string" == typeof t) {
                          ("" === t ? r : l(r, t)).classGroupId = n;
                          return;
                        }
                        if ("function" == typeof t) {
                          if (t.isThemeGetter) {
                            e(t(o), r, n, o);
                            return;
                          }
                          r.validators.push({ validator: t, classGroupId: n });
                          return;
                        }
                        Object.entries(t).forEach(function (t) {
                          var a = t[0];
                          e(t[1], l(r, a), n, o);
                        });
                      });
                    })(e[1], p, t, u);
                  }),
                  (i = e.conflictingClassGroups),
                  (d =
                    void 0 === (s = e.conflictingClassGroupModifiers) ? {} : s),
                  {
                    getClassGroupId: function (e) {
                      var t = e.split("-");
                      return (
                        "" === t[0] && 1 !== t.length && t.shift(),
                        (function e(t, r) {
                          if (0 === t.length) return r.classGroupId;
                          var n = t[0],
                            o = r.nextPart.get(n),
                            a = o ? e(t.slice(1), o) : void 0;
                          if (a) return a;
                          if (0 !== r.validators.length) {
                            var l = t.join("-");
                            return r.validators.find(function (e) {
                              return (0, e.validator)(l);
                            })?.classGroupId;
                          }
                        })(t, p) ||
                          (function (e) {
                            if (a.test(e)) {
                              var t = a.exec(e)[1],
                                r = t?.substring(0, t.indexOf(":"));
                              if (r) return "arbitrary.." + r;
                            }
                          })(e)
                      );
                    },
                    getConflictingClassGroupIds: function (e, t) {
                      var r = i[e] || [];
                      return t && d[e] ? [].concat(r, d[e]) : r;
                    },
                  }),
                };
              })(
                o.slice(1).reduce(function (e, t) {
                  return t(e);
                }, i())
              )).cache.get),
              (r = e.cache.set),
              (u = c),
              c(n)
            );
          };
          function c(n) {
            var o,
              a,
              l,
              s,
              d,
              u = t(n);
            if (u) return u;
            var c =
              ((a = (o = e).splitModifiers),
              (l = o.getClassGroupId),
              (s = o.getConflictingClassGroupIds),
              (d = new Set()),
              n
                .trim()
                .split(i)
                .map(function (e) {
                  var t = a(e),
                    r = t.modifiers,
                    n = t.hasImportantModifier,
                    o = t.baseClassName,
                    i = t.maybePostfixModifierPosition,
                    s = l(i ? o.substring(0, i) : o),
                    d = !!i;
                  if (!s) {
                    if (!i || !(s = l(o)))
                      return { isTailwindClass: !1, originalClassName: e };
                    d = !1;
                  }
                  var u = (function (e) {
                    if (e.length <= 1) return e;
                    var t = [],
                      r = [];
                    return (
                      e.forEach(function (e) {
                        "[" === e[0]
                          ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                          : r.push(e);
                      }),
                      t.push.apply(t, r.sort()),
                      t
                    );
                  })(r).join(":");
                  return {
                    isTailwindClass: !0,
                    modifierId: n ? u + "!" : u,
                    classGroupId: s,
                    originalClassName: e,
                    hasPostfixModifier: d,
                  };
                })
                .reverse()
                .filter(function (e) {
                  if (!e.isTailwindClass) return !0;
                  var t = e.modifierId,
                    r = e.classGroupId,
                    n = e.hasPostfixModifier,
                    o = t + r;
                  return (
                    !d.has(o) &&
                    (d.add(o),
                    s(r, n).forEach(function (e) {
                      return d.add(t + e);
                    }),
                    !0)
                  );
                })
                .reverse()
                .map(function (e) {
                  return e.originalClassName;
                })
                .join(" "));
            return r(n, c), c;
          }
          return function () {
            return u(s.apply(null, arguments));
          };
        }
        function u(e) {
          var t = function (t) {
            return t[e] || [];
          };
          return (t.isThemeGetter = !0), t;
        }
        var c = /^\[(?:([a-z-]+):)?(.+)\]$/i,
          p = /^\d+\/\d+$/,
          f = new Set(["px", "full", "screen"]),
          m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          b =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          g = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        function h(e) {
          return E(e) || f.has(e) || p.test(e) || v(e);
        }
        function v(e) {
          return S(e, "length", R);
        }
        function y(e) {
          return S(e, "size", T);
        }
        function w(e) {
          return S(e, "position", T);
        }
        function x(e) {
          return S(e, "url", N);
        }
        function k(e) {
          return S(e, "number", E);
        }
        function E(e) {
          return !Number.isNaN(Number(e));
        }
        function P(e) {
          return e.endsWith("%") && E(e.slice(0, -1));
        }
        function C(e) {
          return M(e) || S(e, "number", M);
        }
        function O(e) {
          return c.test(e);
        }
        function j() {
          return !0;
        }
        function z(e) {
          return m.test(e);
        }
        function D(e) {
          return S(e, "", I);
        }
        function S(e, t, r) {
          var n = c.exec(e);
          return !!n && (n[1] ? n[1] === t : r(n[2]));
        }
        function R(e) {
          return b.test(e);
        }
        function T() {
          return !1;
        }
        function N(e) {
          return e.startsWith("url(");
        }
        function M(e) {
          return Number.isInteger(Number(e));
        }
        function I(e) {
          return g.test(e);
        }
        function L() {
          var e = u("colors"),
            t = u("spacing"),
            r = u("blur"),
            n = u("brightness"),
            o = u("borderColor"),
            a = u("borderRadius"),
            l = u("borderSpacing"),
            i = u("borderWidth"),
            s = u("contrast"),
            d = u("grayscale"),
            c = u("hueRotate"),
            p = u("invert"),
            f = u("gap"),
            m = u("gradientColorStops"),
            b = u("gradientColorStopPositions"),
            g = u("inset"),
            S = u("margin"),
            R = u("opacity"),
            T = u("padding"),
            N = u("saturate"),
            M = u("scale"),
            I = u("sepia"),
            L = u("skew"),
            W = u("space"),
            A = u("translate"),
            _ = function () {
              return ["auto", "contain", "none"];
            },
            B = function () {
              return ["auto", "hidden", "clip", "visible", "scroll"];
            },
            F = function () {
              return ["auto", O, t];
            },
            H = function () {
              return [O, t];
            },
            G = function () {
              return ["", h];
            },
            V = function () {
              return ["auto", E, O];
            },
            Z = function () {
              return [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
              ];
            },
            X = function () {
              return ["solid", "dashed", "dotted", "double", "none"];
            },
            $ = function () {
              return [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
                "plus-lighter",
              ];
            },
            Y = function () {
              return [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
              ];
            },
            q = function () {
              return ["", "0", O];
            },
            J = function () {
              return [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
              ];
            },
            K = function () {
              return [E, k];
            },
            U = function () {
              return [E, O];
            };
          return {
            cacheSize: 500,
            theme: {
              colors: [j],
              spacing: [h],
              blur: ["none", "", z, O],
              brightness: K(),
              borderColor: [e],
              borderRadius: ["none", "", "full", z, O],
              borderSpacing: H(),
              borderWidth: G(),
              contrast: K(),
              grayscale: q(),
              hueRotate: U(),
              invert: q(),
              gap: H(),
              gradientColorStops: [e],
              gradientColorStopPositions: [P, v],
              inset: F(),
              margin: F(),
              opacity: K(),
              padding: H(),
              saturate: K(),
              scale: K(),
              sepia: q(),
              skew: U(),
              space: H(),
              translate: H(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", O] }],
              container: ["container"],
              columns: [{ columns: [z] }],
              "break-after": [{ "break-after": J() }],
              "break-before": [{ "break-before": J() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none"] }],
              clear: [{ clear: ["left", "right", "both", "none"] }],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [].concat(Z(), [O]) }],
              overflow: [{ overflow: B() }],
              "overflow-x": [{ "overflow-x": B() }],
              "overflow-y": [{ "overflow-y": B() }],
              overscroll: [{ overscroll: _() }],
              "overscroll-x": [{ "overscroll-x": _() }],
              "overscroll-y": [{ "overscroll-y": _() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [g] }],
              "inset-x": [{ "inset-x": [g] }],
              "inset-y": [{ "inset-y": [g] }],
              start: [{ start: [g] }],
              end: [{ end: [g] }],
              top: [{ top: [g] }],
              right: [{ right: [g] }],
              bottom: [{ bottom: [g] }],
              left: [{ left: [g] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", C] }],
              basis: [{ basis: F() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", O] }],
              grow: [{ grow: q() }],
              shrink: [{ shrink: q() }],
              order: [{ order: ["first", "last", "none", C] }],
              "grid-cols": [{ "grid-cols": [j] }],
              "col-start-end": [{ col: ["auto", { span: ["full", C] }, O] }],
              "col-start": [{ "col-start": V() }],
              "col-end": [{ "col-end": V() }],
              "grid-rows": [{ "grid-rows": [j] }],
              "row-start-end": [{ row: ["auto", { span: [C] }, O] }],
              "row-start": [{ "row-start": V() }],
              "row-end": [{ "row-end": V() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", O] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", O] }],
              gap: [{ gap: [f] }],
              "gap-x": [{ "gap-x": [f] }],
              "gap-y": [{ "gap-y": [f] }],
              "justify-content": [{ justify: ["normal"].concat(Y()) }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [
                { content: ["normal"].concat(Y(), ["baseline"]) },
              ],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [
                { "place-content": [].concat(Y(), ["baseline"]) },
              ],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [T] }],
              px: [{ px: [T] }],
              py: [{ py: [T] }],
              ps: [{ ps: [T] }],
              pe: [{ pe: [T] }],
              pt: [{ pt: [T] }],
              pr: [{ pr: [T] }],
              pb: [{ pb: [T] }],
              pl: [{ pl: [T] }],
              m: [{ m: [S] }],
              mx: [{ mx: [S] }],
              my: [{ my: [S] }],
              ms: [{ ms: [S] }],
              me: [{ me: [S] }],
              mt: [{ mt: [S] }],
              mr: [{ mr: [S] }],
              mb: [{ mb: [S] }],
              ml: [{ ml: [S] }],
              "space-x": [{ "space-x": [W] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [W] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [{ w: ["auto", "min", "max", "fit", O, t] }],
              "min-w": [{ "min-w": ["min", "max", "fit", O, h] }],
              "max-w": [
                {
                  "max-w": [
                    "0",
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [z] },
                    z,
                    O,
                  ],
                },
              ],
              h: [{ h: [O, t, "auto", "min", "max", "fit"] }],
              "min-h": [{ "min-h": ["min", "max", "fit", O, h] }],
              "max-h": [{ "max-h": [O, t, "min", "max", "fit"] }],
              "font-size": [{ text: ["base", z, v] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    k,
                  ],
                },
              ],
              "font-family": [{ font: [j] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    O,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", E, k] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    O,
                    h,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", O] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", O] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [R] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [R] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [
                { decoration: [].concat(X(), ["wavy"]) },
              ],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", h] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", O, h] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              indent: [{ indent: H() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    O,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", O] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [R] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [].concat(Z(), [w]) }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", y] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    x,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [b] }],
              "gradient-via-pos": [{ via: [b] }],
              "gradient-to-pos": [{ to: [b] }],
              "gradient-from": [{ from: [m] }],
              "gradient-via": [{ via: [m] }],
              "gradient-to": [{ to: [m] }],
              rounded: [{ rounded: [a] }],
              "rounded-s": [{ "rounded-s": [a] }],
              "rounded-e": [{ "rounded-e": [a] }],
              "rounded-t": [{ "rounded-t": [a] }],
              "rounded-r": [{ "rounded-r": [a] }],
              "rounded-b": [{ "rounded-b": [a] }],
              "rounded-l": [{ "rounded-l": [a] }],
              "rounded-ss": [{ "rounded-ss": [a] }],
              "rounded-se": [{ "rounded-se": [a] }],
              "rounded-ee": [{ "rounded-ee": [a] }],
              "rounded-es": [{ "rounded-es": [a] }],
              "rounded-tl": [{ "rounded-tl": [a] }],
              "rounded-tr": [{ "rounded-tr": [a] }],
              "rounded-br": [{ "rounded-br": [a] }],
              "rounded-bl": [{ "rounded-bl": [a] }],
              "border-w": [{ border: [i] }],
              "border-w-x": [{ "border-x": [i] }],
              "border-w-y": [{ "border-y": [i] }],
              "border-w-s": [{ "border-s": [i] }],
              "border-w-e": [{ "border-e": [i] }],
              "border-w-t": [{ "border-t": [i] }],
              "border-w-r": [{ "border-r": [i] }],
              "border-w-b": [{ "border-b": [i] }],
              "border-w-l": [{ "border-l": [i] }],
              "border-opacity": [{ "border-opacity": [R] }],
              "border-style": [{ border: [].concat(X(), ["hidden"]) }],
              "divide-x": [{ "divide-x": [i] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [i] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [R] }],
              "divide-style": [{ divide: X() }],
              "border-color": [{ border: [o] }],
              "border-color-x": [{ "border-x": [o] }],
              "border-color-y": [{ "border-y": [o] }],
              "border-color-t": [{ "border-t": [o] }],
              "border-color-r": [{ "border-r": [o] }],
              "border-color-b": [{ "border-b": [o] }],
              "border-color-l": [{ "border-l": [o] }],
              "divide-color": [{ divide: [o] }],
              "outline-style": [{ outline: [""].concat(X()) }],
              "outline-offset": [{ "outline-offset": [O, h] }],
              "outline-w": [{ outline: [h] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: G() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [R] }],
              "ring-offset-w": [{ "ring-offset": [h] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", z, D] }],
              "shadow-color": [{ shadow: [j] }],
              opacity: [{ opacity: [R] }],
              "mix-blend": [{ "mix-blend": $() }],
              "bg-blend": [{ "bg-blend": $() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [r] }],
              brightness: [{ brightness: [n] }],
              contrast: [{ contrast: [s] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", z, O] }],
              grayscale: [{ grayscale: [d] }],
              "hue-rotate": [{ "hue-rotate": [c] }],
              invert: [{ invert: [p] }],
              saturate: [{ saturate: [N] }],
              sepia: [{ sepia: [I] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [r] }],
              "backdrop-brightness": [{ "backdrop-brightness": [n] }],
              "backdrop-contrast": [{ "backdrop-contrast": [s] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
              "backdrop-invert": [{ "backdrop-invert": [p] }],
              "backdrop-opacity": [{ "backdrop-opacity": [R] }],
              "backdrop-saturate": [{ "backdrop-saturate": [N] }],
              "backdrop-sepia": [{ "backdrop-sepia": [I] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [l] }],
              "border-spacing-x": [{ "border-spacing-x": [l] }],
              "border-spacing-y": [{ "border-spacing-y": [l] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    O,
                  ],
                },
              ],
              duration: [{ duration: U() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", O] }],
              delay: [{ delay: U() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", O] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [M] }],
              "scale-x": [{ "scale-x": [M] }],
              "scale-y": [{ "scale-y": [M] }],
              rotate: [{ rotate: [C, O] }],
              "translate-x": [{ "translate-x": [A] }],
              "translate-y": [{ "translate-y": [A] }],
              "skew-x": [{ "skew-x": [L] }],
              "skew-y": [{ "skew-y": [L] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    O,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: ["appearance-none"],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    O,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": H() }],
              "scroll-mx": [{ "scroll-mx": H() }],
              "scroll-my": [{ "scroll-my": H() }],
              "scroll-ms": [{ "scroll-ms": H() }],
              "scroll-me": [{ "scroll-me": H() }],
              "scroll-mt": [{ "scroll-mt": H() }],
              "scroll-mr": [{ "scroll-mr": H() }],
              "scroll-mb": [{ "scroll-mb": H() }],
              "scroll-ml": [{ "scroll-ml": H() }],
              "scroll-p": [{ "scroll-p": H() }],
              "scroll-px": [{ "scroll-px": H() }],
              "scroll-py": [{ "scroll-py": H() }],
              "scroll-ps": [{ "scroll-ps": H() }],
              "scroll-pe": [{ "scroll-pe": H() }],
              "scroll-pt": [{ "scroll-pt": H() }],
              "scroll-pr": [{ "scroll-pr": H() }],
              "scroll-pb": [{ "scroll-pb": H() }],
              "scroll-pl": [{ "scroll-pl": H() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [
                {
                  touch: [
                    "auto",
                    "none",
                    "pinch-zoom",
                    "manipulation",
                    { pan: ["x", "left", "right", "y", "up", "down"] },
                  ],
                },
              ],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", O],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [h, k] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        }
        var W = Object.prototype.hasOwnProperty,
          A = new Set(["string", "number", "boolean"]),
          _ = (function (e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            return "function" == typeof e
              ? d.apply(void 0, [L, e].concat(r))
              : d.apply(
                  void 0,
                  [
                    function () {
                      return (function (e, t) {
                        for (var r in t)
                          (function e(t, r, n) {
                            if (
                              !W.call(t, r) ||
                              A.has(typeof n) ||
                              null === n
                            ) {
                              t[r] = n;
                              return;
                            }
                            if (Array.isArray(n) && Array.isArray(t[r])) {
                              t[r] = t[r].concat(n);
                              return;
                            }
                            if (
                              "object" == typeof n &&
                              "object" == typeof t[r]
                            ) {
                              if (null === t[r]) {
                                t[r] = n;
                                return;
                              }
                              for (var o in n) e(t[r], o, n[o]);
                            }
                          })(e, r, t[r]);
                        return e;
                      })(L(), e);
                    },
                  ].concat(r)
                );
          })(n.B);
        function B(...e) {
          return _(o(e));
        }
      },
      79255: function (e, t, r) {
        r.d(t, {
          e: function () {
            return eh;
          },
        });
        var n = r(67294),
          o = r(99373);
        let a = {},
          l = 0,
          i = !1,
          s = null,
          d = null;
        var u = r(28349),
          c = r(9975),
          p = r(18419),
          f = r(89527),
          m = r(67712),
          b = r(3136),
          g = r(68806),
          h = r(18399);
        let v = { top: "top", bottom: "top", left: "left", right: "left" },
          y = { top: "bottom", bottom: "top", left: "right", right: "left" },
          w = { top: "left", left: "top" },
          x = { top: "height", left: "width" },
          k = { width: "totalWidth", height: "totalHeight" },
          E = {},
          P = "undefined" != typeof document && window.visualViewport;
        function C(e) {
          let t = 0,
            r = 0,
            n = 0,
            o = 0,
            a = 0,
            l = 0,
            i = {},
            s = (null == P ? void 0 : P.scale) > 1;
          if ("BODY" === e.tagName) {
            var d, u;
            let s = document.documentElement;
            (n = s.clientWidth),
              (o = s.clientHeight),
              (t =
                null !== (d = null == P ? void 0 : P.width) && void 0 !== d
                  ? d
                  : n),
              (r =
                null !== (u = null == P ? void 0 : P.height) && void 0 !== u
                  ? u
                  : o),
              (i.top = s.scrollTop || e.scrollTop),
              (i.left = s.scrollLeft || e.scrollLeft),
              P && ((a = P.offsetTop), (l = P.offsetLeft));
          } else
            ({ width: t, height: r, top: a, left: l } = S(e)),
              (i.top = e.scrollTop),
              (i.left = e.scrollLeft),
              (n = t),
              (o = r);
          return (
            (0, g.Pf)() &&
              ("BODY" === e.tagName || "HTML" === e.tagName) &&
              s &&
              ((i.top = 0), (i.left = 0), (a = P.pageTop), (l = P.pageLeft)),
            {
              width: t,
              height: r,
              totalWidth: n,
              totalHeight: o,
              scroll: i,
              top: a,
              left: l,
            }
          );
        }
        function O(e, t, r, n, o, a, l) {
          let i = o.scroll[e],
            s = n[x[e]],
            d = n.scroll[v[e]] + a,
            u = s + n.scroll[v[e]] - a,
            c = t - i + l[e] - n[v[e]],
            p = t - i + r + l[e] - n[v[e]];
          return c < d ? d - c : p > u ? Math.max(u - p, d - c) : 0;
        }
        function j(e) {
          if (E[e]) return E[e];
          let [t, r] = e.split(" "),
            n = v[t] || "right",
            o = w[n];
          v[r] || (r = "center");
          let a = x[n],
            l = x[o];
          return (
            (E[e] = {
              placement: t,
              crossPlacement: r,
              axis: n,
              crossAxis: o,
              size: a,
              crossSize: l,
            }),
            E[e]
          );
        }
        function z(e, t, r, n, o, a, l, i, s, d) {
          let {
              placement: u,
              crossPlacement: c,
              axis: p,
              crossAxis: f,
              size: m,
              crossSize: b,
            } = n,
            g = {};
          (g[f] = e[f]),
            "center" === c
              ? (g[f] += (e[b] - r[b]) / 2)
              : c !== f && (g[f] += e[b] - r[b]),
            (g[f] += a);
          let v = e[f] - r[b] + s + d,
            w = e[f] + e[b] - s - d;
          if (((g[f] = (0, h.uZ)(g[f], v, w)), u === p)) {
            let r = i ? l[m] : t[k[m]];
            g[y[p]] = Math.floor(r - e[p] + o);
          } else g[p] = Math.floor(e[p] + e[m] + o);
          return g;
        }
        function D(e, t, r, n, o, a) {
          let { placement: l, axis: i, size: s } = a;
          return l === i
            ? Math.max(0, r[i] - e[i] - e.scroll[i] + t[i] - n[i] - n[y[i]] - o)
            : Math.max(
                0,
                e[s] +
                  e[i] +
                  e.scroll[i] -
                  t[i] -
                  r[i] -
                  r[s] -
                  n[i] -
                  n[y[i]] -
                  o
              );
        }
        function S(e) {
          let {
              top: t,
              left: r,
              width: n,
              height: o,
            } = e.getBoundingClientRect(),
            {
              scrollTop: a,
              scrollLeft: l,
              clientTop: i,
              clientLeft: s,
            } = document.documentElement;
          return { top: t + a - i, left: r + l - s, width: n, height: o };
        }
        function R(e, t) {
          let r,
            n = window.getComputedStyle(e);
          if ("fixed" === n.position) {
            let {
              top: t,
              left: n,
              width: o,
              height: a,
            } = e.getBoundingClientRect();
            r = { top: t, left: n, width: o, height: a };
          } else {
            r = S(e);
            let n = S(t),
              o = window.getComputedStyle(t);
            (n.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop),
              (n.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft),
              (r.top -= n.top),
              (r.left -= n.left);
          }
          return (
            (r.top -= parseInt(n.marginTop, 10) || 0),
            (r.left -= parseInt(n.marginLeft, 10) || 0),
            r
          );
        }
        function T(e) {
          let t = window.getComputedStyle(e);
          return (
            "none" !== t.transform ||
            /transform|perspective/.test(t.willChange) ||
            "none" !== t.filter ||
            "paint" === t.contain ||
            ("backdropFilter" in t && "none" !== t.backdropFilter) ||
            ("WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter)
          );
        }
        let N = new WeakMap();
        var M = r(69786),
          I = r(54792);
        let L = "undefined" != typeof document && window.visualViewport,
          W = [
            "input:not([disabled]):not([type=hidden])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            "button:not([disabled])",
            "a[href]",
            "area[href]",
            "summary",
            "iframe",
            "object",
            "embed",
            "audio[controls]",
            "video[controls]",
            "[contenteditable]",
          ];
        function A(e, t) {
          return !!e && !!t && t.some((t) => t.contains(e));
        }
        W.join(":not([hidden]),"),
          W.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),
          W.join(':not([hidden]):not([tabindex="-1"]),');
        class _ {
          get size() {
            return this.fastMap.size;
          }
          getTreeNode(e) {
            return this.fastMap.get(e);
          }
          addTreeNode(e, t, r) {
            let n = this.fastMap.get(null != t ? t : null);
            if (!n) return;
            let o = new B({ scopeRef: e });
            n.addChild(o),
              (o.parent = n),
              this.fastMap.set(e, o),
              r && (o.nodeToRestore = r);
          }
          addNode(e) {
            this.fastMap.set(e.scopeRef, e);
          }
          removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let r = t.parent;
            for (let e of this.traverse())
              e !== t &&
                t.nodeToRestore &&
                e.nodeToRestore &&
                t.scopeRef &&
                t.scopeRef.current &&
                A(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r &&
              (r.removeChild(t),
              n.size > 0 && n.forEach((e) => r && r.addChild(e))),
              this.fastMap.delete(t.scopeRef);
          }
          *traverse(e = this.root) {
            if ((null != e.scopeRef && (yield e), e.children.size > 0))
              for (let t of e.children) yield* this.traverse(t);
          }
          clone() {
            var e, t;
            let r = new _();
            for (let n of this.traverse())
              r.addTreeNode(
                n.scopeRef,
                null !==
                  (t =
                    null === (e = n.parent) || void 0 === e
                      ? void 0
                      : e.scopeRef) && void 0 !== t
                  ? t
                  : null,
                n.nodeToRestore
              );
            return r;
          }
          constructor() {
            (this.fastMap = new Map()),
              (this.root = new B({ scopeRef: null })),
              this.fastMap.set(null, this.root);
          }
        }
        class B {
          addChild(e) {
            this.children.add(e), (e.parent = this);
          }
          removeChild(e) {
            this.children.delete(e), (e.parent = void 0);
          }
          constructor(e) {
            (this.children = new Set()),
              (this.contain = !1),
              (this.scopeRef = e.scopeRef);
          }
        }
        let F = new _();
        var H = r(61718),
          G = r(78837);
        function V(e, t) {
          if (e.button > 0) return !1;
          if (e.target) {
            let t = e.target.ownerDocument;
            if (
              !t ||
              !t.documentElement.contains(e.target) ||
              e.target.closest("[data-react-aria-top-layer]")
            )
              return !1;
          }
          return t.current && !t.current.contains(e.target);
        }
        var Z = r(44971);
        let X = [];
        var $ = r(76733),
          Y = r(15607),
          q = r(43649),
          J = r(82189),
          K = r(65512),
          U = (0, J.tv)({
            slots: {
              base: [
                "z-0",
                "relative",
                "bg-transparent",
                "before:content-['']",
                "before:hidden",
                "before:z-[-1]",
                "before:absolute",
                "before:rotate-45",
                "before:w-2.5",
                "before:h-2.5",
                "before:rounded-sm",
                "data-[arrow=true]:before:block",
                "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top]:before:left-1/2",
                "data-[placement=top]:before:-translate-x-1/2",
                "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top-start]:before:left-3",
                "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top-end]:before:right-3",
                "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom]:before:left-1/2",
                "data-[placement=bottom]:before:-translate-x-1/2",
                "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom-start]:before:left-3",
                "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom-end]:before:right-3",
                "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
                "data-[placement=left]:before:top-1/2",
                "data-[placement=left]:before:-translate-y-1/2",
                "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=left-start]:before:top-1/4",
                "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=left-end]:before:bottom-1/4",
                "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
                "data-[placement=right]:before:top-1/2",
                "data-[placement=right]:before:-translate-y-1/2",
                "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=right-start]:before:top-1/4",
                "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=right-end]:before:bottom-1/4",
                ...K.Dh,
              ],
              content: [
                "z-10",
                "px-2.5",
                "py-1",
                "w-full",
                "inline-flex",
                "flex-col",
                "items-center",
                "justify-center",
                "box-border",
                "subpixel-antialiased",
                "outline-none",
                "box-border",
              ],
              trigger: ["z-10"],
              backdrop: ["hidden"],
              arrow: [],
            },
            variants: {
              size: {
                sm: { content: "text-tiny" },
                md: { content: "text-small" },
                lg: { content: "text-medium" },
              },
              color: {
                default: {
                  base: "before:bg-content1 before:shadow-small",
                  content: "bg-content1",
                },
                foreground: {
                  base: "before:bg-foreground",
                  content: q.J.solid.foreground,
                },
                primary: {
                  base: "before:bg-primary",
                  content: q.J.solid.primary,
                },
                secondary: {
                  base: "before:bg-secondary",
                  content: q.J.solid.secondary,
                },
                success: {
                  base: "before:bg-success",
                  content: q.J.solid.success,
                },
                warning: {
                  base: "before:bg-warning",
                  content: q.J.solid.warning,
                },
                danger: { base: "before:bg-danger", content: q.J.solid.danger },
              },
              radius: {
                none: { content: "rounded-none" },
                sm: { content: "rounded-small" },
                md: { content: "rounded-medium" },
                lg: { content: "rounded-large" },
                full: { content: "rounded-full" },
              },
              shadow: {
                sm: { content: "shadow-small" },
                md: { content: "shadow-medium" },
                lg: { content: "shadow-large" },
              },
              backdrop: {
                transparent: {},
                opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
                blur: {
                  backdrop:
                    "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
                },
              },
              triggerScaleOnOpen: {
                true: {
                  trigger: [
                    "aria-expanded:scale-[0.97]",
                    "aria-expanded:opacity-70",
                    "subpixel-antialiased",
                  ],
                },
                false: {},
              },
              disableAnimation: { true: { base: "animate-none" } },
              isTriggerDisabled: {
                true: { trigger: "opacity-disabled pointer-events-none" },
                false: {},
              },
            },
            defaultVariants: {
              color: "default",
              radius: "lg",
              size: "md",
              shadow: "md",
              backdrop: "transparent",
              triggerScaleOnOpen: !0,
            },
            compoundVariants: [
              {
                backdrop: ["opaque", "blur"],
                class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
              },
            ],
          }),
          Q = r(49037),
          ee = r(50262),
          et = r(49869),
          er = r(48255),
          en = r(33295),
          eo = (e) => {
            let t = {
              top: { originY: 1 },
              bottom: { originY: 0 },
              left: { originX: 1 },
              right: { originX: 0 },
              "top-start": { originX: 0, originY: 1 },
              "top-end": { originX: 1, originY: 1 },
              "bottom-start": { originX: 0, originY: 0 },
              "bottom-end": { originX: 1, originY: 0 },
              "right-start": { originX: 0, originY: 0 },
              "right-end": { originX: 0, originY: 1 },
              "left-start": { originX: 1, originY: 0 },
              "left-end": { originX: 1, originY: 1 },
            };
            return (null == t ? void 0 : t[e]) || {};
          },
          ea = (e) =>
            ({
              top: "top",
              bottom: "bottom",
              left: "left",
              right: "right",
              "top-start": "top start",
              "top-end": "top end",
              "bottom-start": "bottom start",
              "bottom-end": "bottom end",
              "left-start": "left top",
              "left-end": "left bottom",
              "right-start": "right top",
              "right-end": "right bottom",
            }[e]),
          el = (e, t) => {
            if (t.includes("-")) {
              let [, r] = t.split("-");
              return `${e}-${r}`;
            }
            return e;
          },
          ei = r(93387),
          es = r(15e3),
          ed = r(18522),
          eu = r(1673),
          ec = r(3632),
          ep = r(13114),
          ef = {
            enter: {
              transform: "scale(1)",
              opacity: 1,
              transition: { type: "spring", bounce: 0, duration: 0.2 },
            },
            exit: {
              transform: "scale(0.85)",
              opacity: 0,
              transition: { type: "easeOut", duration: 0.15 },
            },
          },
          em = r(52046),
          eb = r(85893),
          eg = (0, Y.Gp)((e, t) => {
            let r;
            let {
              Component: g,
              children: v,
              content: w,
              isOpen: x,
              portalContainer: E,
              placement: P,
              disableAnimation: W,
              motionProps: _,
              getTriggerProps: B,
              getTooltipProps: q,
              getTooltipContentProps: J,
            } = (function (e) {
              var t, r;
              let g = (0, $.w)(),
                [v, w] = (0, Y.oe)(e, U.variantKeys),
                {
                  ref: x,
                  as: E,
                  isOpen: P,
                  content: W,
                  children: _,
                  defaultOpen: B,
                  onOpenChange: q,
                  isDisabled: J,
                  trigger: K,
                  shouldFlip: eo = !0,
                  containerPadding: es = 12,
                  placement: ed = "top",
                  delay: eu = 0,
                  closeDelay: ec = 500,
                  showArrow: ep = !1,
                  offset: ef = 7,
                  crossOffset: em = 0,
                  isDismissable: eb,
                  shouldCloseOnBlur: eg = !0,
                  portalContainer: eh,
                  isKeyboardDismissDisabled: ev = !1,
                  updatePositionDeps: ey = [],
                  shouldCloseOnInteractOutside: ew,
                  className: ex,
                  onClose: ek,
                  motionProps: eE,
                  classNames: eP,
                  ...eC
                } = v,
                eO =
                  null !=
                    (r =
                      null != (t = null == e ? void 0 : e.disableAnimation)
                        ? t
                        : null == g
                        ? void 0
                        : g.disableAnimation) && r,
                ej = (function (e = {}) {
                  let { delay: t = 1500, closeDelay: r = 500 } = e,
                    {
                      isOpen: u,
                      open: c,
                      close: p,
                    } = (function (e) {
                      let [t, r] = (0, o.z)(
                          e.isOpen,
                          e.defaultOpen || !1,
                          e.onOpenChange
                        ),
                        a = (0, n.useCallback)(() => {
                          r(!0);
                        }, [r]),
                        l = (0, n.useCallback)(() => {
                          r(!1);
                        }, [r]),
                        i = (0, n.useCallback)(() => {
                          r(!t);
                        }, [r, t]);
                      return {
                        isOpen: t,
                        setOpen: r,
                        open: a,
                        close: l,
                        toggle: i,
                      };
                    })(e),
                    f = (0, n.useMemo)(() => `${++l}`, []),
                    m = (0, n.useRef)(),
                    b = () => {
                      a[f] = v;
                    },
                    g = () => {
                      for (let e in a) e !== f && (a[e](!0), delete a[e]);
                    },
                    h = () => {
                      clearTimeout(m.current),
                        (m.current = null),
                        g(),
                        b(),
                        (i = !0),
                        c(),
                        s && (clearTimeout(s), (s = null)),
                        d && (clearTimeout(d), (d = null));
                    },
                    v = (e) => {
                      e || r <= 0
                        ? (clearTimeout(m.current), (m.current = null), p())
                        : m.current ||
                          (m.current = setTimeout(() => {
                            (m.current = null), p();
                          }, r)),
                        s && (clearTimeout(s), (s = null)),
                        i &&
                          (d && clearTimeout(d),
                          (d = setTimeout(() => {
                            delete a[f], (d = null), (i = !1);
                          }, Math.max(500, r))));
                    },
                    y = () => {
                      g(),
                        b(),
                        u || s || i
                          ? u || h()
                          : (s = setTimeout(() => {
                              (s = null), (i = !0), h();
                            }, t));
                    };
                  return (
                    (0, n.useEffect)(
                      () => () => {
                        clearTimeout(m.current), a[f] && delete a[f];
                      },
                      [f]
                    ),
                    {
                      isOpen: u,
                      open: (e) => {
                        e || !(t > 0) || m.current ? h() : y();
                      },
                      close: v,
                    }
                  );
                })({
                  delay: eu,
                  closeDelay: ec,
                  isDisabled: J,
                  defaultOpen: B,
                  isOpen: P,
                  onOpenChange: (e) => {
                    null == q || q(e), e || null == ek || ek();
                  },
                }),
                ez = (0, n.useRef)(null),
                eD = (0, n.useRef)(null),
                eS = (0, n.useId)(),
                eR = ej.isOpen && !J;
              (0, n.useImperativeHandle)(x, () => (0, en.fg)(eD));
              let { triggerProps: eT, tooltipProps: eN } = (function (e, t, r) {
                  let { isDisabled: o, trigger: a } = e,
                    l = (0, f.Me)(),
                    i = (0, n.useRef)(!1),
                    s = (0, n.useRef)(!1),
                    d = () => {
                      (i.current || s.current) && t.open(s.current);
                    },
                    b = (e) => {
                      i.current || s.current || t.close(e);
                    };
                  (0, n.useEffect)(() => {
                    let e = (e) => {
                      r &&
                        r.current &&
                        "Escape" === e.key &&
                        (e.stopPropagation(), t.close(!0));
                    };
                    if (t.isOpen)
                      return (
                        document.addEventListener("keydown", e, !0),
                        () => {
                          document.removeEventListener("keydown", e, !0);
                        }
                      );
                  }, [r, t]);
                  let g = () => {
                      (s.current = !1), (i.current = !1), b(!0);
                    },
                    { hoverProps: h } = (0, p.X)({
                      isDisabled: o,
                      onHoverStart: () => {
                        "focus" !== a &&
                          ("pointer" === (0, c.Jz)()
                            ? (i.current = !0)
                            : (i.current = !1),
                          d());
                      },
                      onHoverEnd: () => {
                        "focus" !== a &&
                          ((s.current = !1), (i.current = !1), b());
                      },
                    }),
                    { focusableProps: v } = (0, m.k)(
                      {
                        isDisabled: o,
                        onFocus: () => {
                          (0, c.E)() && ((s.current = !0), d());
                        },
                        onBlur: () => {
                          (s.current = !1), (i.current = !1), b(!0);
                        },
                      },
                      r
                    );
                  return {
                    triggerProps: {
                      "aria-describedby": t.isOpen ? l : void 0,
                      ...(0, u.d)(v, h, { onPointerDown: g, onKeyDown: g }),
                    },
                    tooltipProps: { id: l },
                  };
                })({ isDisabled: J, trigger: K }, ej, ez),
                { tooltipProps: eM } = (function (e, t) {
                  let r = (0, b.z)(e, { labelable: !0 }),
                    { hoverProps: n } = (0, p.X)({
                      onHoverStart: () => (null == t ? void 0 : t.open(!0)),
                      onHoverEnd: () => (null == t ? void 0 : t.close()),
                    });
                  return { tooltipProps: (0, u.d)(r, n, { role: "tooltip" }) };
                })({ isOpen: eR, ...(0, u.d)(v, eN) }, ej),
                {
                  overlayProps: eI,
                  placement: eL,
                  updatePosition: eW,
                } = (function (e) {
                  let { direction: t } = (0, I.j)(),
                    {
                      arrowSize: r = 0,
                      targetRef: o,
                      overlayRef: a,
                      scrollRef: l = a,
                      placement: i = "bottom",
                      containerPadding: s = 12,
                      shouldFlip: d = !0,
                      boundaryElement: u = "undefined" != typeof document
                        ? document.body
                        : null,
                      offset: c = 0,
                      crossOffset: p = 0,
                      shouldUpdatePosition: f = !0,
                      isOpen: m = !0,
                      onClose: b,
                      maxHeight: g,
                      arrowBoundaryOffset: v = 0,
                    } = e,
                    [w, x] = (0, n.useState)({
                      position: {},
                      arrowOffsetLeft: void 0,
                      arrowOffsetTop: void 0,
                      maxHeight: void 0,
                      placement: void 0,
                    }),
                    E = [
                      f,
                      i,
                      a.current,
                      o.current,
                      l.current,
                      s,
                      d,
                      u,
                      c,
                      p,
                      m,
                      t,
                      g,
                      v,
                      r,
                    ],
                    P = (0, n.useRef)(null == L ? void 0 : L.scale);
                  (0, n.useEffect)(() => {
                    m && (P.current = null == L ? void 0 : L.scale);
                  }, [m]);
                  let W = (0, n.useCallback)(() => {
                    var e, n;
                    if (
                      !1 === f ||
                      !m ||
                      !a.current ||
                      !o.current ||
                      !l.current ||
                      !u ||
                      (null == L ? void 0 : L.scale) !== P.current
                    )
                      return;
                    let b = a.current;
                    !g &&
                      a.current &&
                      ((b.style.top = "0px"),
                      (b.style.bottom = ""),
                      (b.style.maxHeight =
                        (null !==
                          (n =
                            null === (e = window.visualViewport) || void 0 === e
                              ? void 0
                              : e.height) && void 0 !== n
                          ? n
                          : window.innerHeight) + "px"));
                    let w = (function (e) {
                      let t,
                        {
                          placement: r,
                          targetNode: n,
                          overlayNode: o,
                          scrollNode: a,
                          padding: l,
                          shouldFlip: i,
                          boundaryElement: s,
                          offset: d,
                          crossOffset: u,
                          maxHeight: c,
                          arrowSize: p = 0,
                          arrowBoundaryOffset: f = 0,
                        } = e,
                        m =
                          o instanceof HTMLElement
                            ? (function (e) {
                                let t = e.offsetParent;
                                if (
                                  (t &&
                                    t === document.body &&
                                    "static" ===
                                      window.getComputedStyle(t).position &&
                                    !T(t) &&
                                    (t = document.documentElement),
                                  null == t)
                                )
                                  for (t = e.parentElement; t && !T(t); )
                                    t = t.parentElement;
                                return t || document.documentElement;
                              })(o)
                            : document.documentElement,
                        b = m === document.documentElement,
                        g = window.getComputedStyle(m).position,
                        v = b ? S(n) : R(n, m);
                      if (!b) {
                        let { marginTop: e, marginLeft: t } =
                          window.getComputedStyle(n);
                        (v.top += parseInt(e, 10) || 0),
                          (v.left += parseInt(t, 10) || 0);
                      }
                      let w = S(o),
                        x = {
                          top:
                            parseInt(
                              (t = window.getComputedStyle(o)).marginTop,
                              10
                            ) || 0,
                          bottom: parseInt(t.marginBottom, 10) || 0,
                          left: parseInt(t.marginLeft, 10) || 0,
                          right: parseInt(t.marginRight, 10) || 0,
                        };
                      (w.width += x.left + x.right),
                        (w.height += x.top + x.bottom);
                      let E = {
                          top: a.scrollTop,
                          left: a.scrollLeft,
                          width: a.scrollWidth,
                          height: a.scrollHeight,
                        },
                        P = C(s),
                        N = C(m),
                        M = "BODY" === s.tagName ? S(m) : R(m, s);
                      return (
                        "HTML" === m.tagName &&
                          "BODY" === s.tagName &&
                          ((N.scroll.top = 0), (N.scroll.left = 0)),
                        (function (
                          e,
                          t,
                          r,
                          n,
                          o,
                          a,
                          l,
                          i,
                          s,
                          d,
                          u,
                          c,
                          p,
                          f,
                          m,
                          b
                        ) {
                          let g = j(e),
                            {
                              size: v,
                              crossAxis: w,
                              crossSize: x,
                              placement: E,
                              crossPlacement: P,
                            } = g,
                            C = z(t, i, r, g, u, c, d, p, m, b),
                            S = u,
                            R = D(i, d, t, o, a + u, g);
                          if (l && n[v] > R) {
                            let e = j(`${y[E]} ${P}`),
                              n = z(t, i, r, e, u, c, d, p, m, b);
                            D(i, d, t, o, a + u, e) > R &&
                              ((g = e), (C = n), (S = u));
                          }
                          let T = "bottom";
                          "top" === g.axis
                            ? "top" === g.placement
                              ? (T = "top")
                              : "bottom" === g.placement && (T = "bottom")
                            : "top" === g.crossAxis &&
                              ("top" === g.crossPlacement
                                ? (T = "bottom")
                                : "bottom" === g.crossPlacement && (T = "top"));
                          let N = O(w, C[w], r[x], i, s, a, d);
                          C[w] += N;
                          let M = (function (e, t, r, n, o, a, l, i) {
                            let s = n ? r.height : t[k.height],
                              d =
                                null != e.top
                                  ? r.top + e.top
                                  : r.top + (s - e.bottom - l),
                              u =
                                "top" !== i
                                  ? Math.max(
                                      0,
                                      t.height +
                                        t.top +
                                        t.scroll.top -
                                        d -
                                        (o.top + o.bottom + a)
                                    )
                                  : Math.max(
                                      0,
                                      d +
                                        l -
                                        (t.top + t.scroll.top) -
                                        (o.top + o.bottom + a)
                                    );
                            return Math.min(t.height - 2 * a, u);
                          })(C, i, d, p, o, a, r.height, T);
                          f && f < M && (M = f),
                            (r.height = Math.min(r.height, M)),
                            (N = O(
                              w,
                              (C = z(t, i, r, g, S, c, d, p, m, b))[w],
                              r[x],
                              i,
                              s,
                              a,
                              d
                            )),
                            (C[w] += N);
                          let I = {},
                            L = t[w] + 0.5 * t[x] - C[w],
                            W = m / 2 + b,
                            A = r[x] - m / 2 - b,
                            _ = t[w] - C[w] + m / 2,
                            B = t[w] + t[x] - C[w] - m / 2,
                            F = (0, h.uZ)(L, _, B);
                          return (
                            (I[w] = (0, h.uZ)(F, W, A)),
                            {
                              position: C,
                              maxHeight: M,
                              arrowOffsetLeft: I.left,
                              arrowOffsetTop: I.top,
                              placement: g.placement,
                            }
                          );
                        })(
                          r,
                          v,
                          w,
                          E,
                          x,
                          l,
                          i,
                          P,
                          N,
                          M,
                          d,
                          u,
                          !!g && "static" !== g,
                          c,
                          p,
                          f
                        )
                      );
                    })({
                      placement:
                        "rtl" === t
                          ? i.replace("start", "right").replace("end", "left")
                          : i.replace("start", "left").replace("end", "right"),
                      overlayNode: a.current,
                      targetNode: o.current,
                      scrollNode: l.current,
                      padding: s,
                      shouldFlip: d,
                      boundaryElement: u,
                      offset: c,
                      crossOffset: p,
                      maxHeight: g,
                      arrowSize: r,
                      arrowBoundaryOffset: v,
                    });
                    (b.style.top = ""),
                      (b.style.bottom = ""),
                      Object.keys(w.position).forEach(
                        (e) => (b.style[e] = w.position[e] + "px")
                      ),
                      (b.style.maxHeight =
                        null != w.maxHeight ? w.maxHeight + "px" : void 0),
                      x(w);
                  }, E);
                  (0, M.b)(W, E),
                    (0, M.b)(
                      () => (
                        window.addEventListener("resize", W, !1),
                        () => {
                          window.removeEventListener("resize", W, !1);
                        }
                      ),
                      [W]
                    ),
                    (function (e) {
                      let { ref: t, onResize: r } = e;
                      (0, n.useEffect)(() => {
                        let e = null == t ? void 0 : t.current;
                        if (e) {
                          if (!(void 0 !== window.ResizeObserver))
                            return (
                              window.addEventListener("resize", r, !1),
                              () => {
                                window.removeEventListener("resize", r, !1);
                              }
                            );
                          {
                            let t = new window.ResizeObserver((e) => {
                              e.length && r();
                            });
                            return (
                              t.observe(e),
                              () => {
                                e && t.unobserve(e);
                              }
                            );
                          }
                        }
                      }, [r, t]);
                    })({ ref: a, onResize: W });
                  let A = (0, n.useRef)(!1);
                  (0, M.b)(() => {
                    let e;
                    let t = () => {
                        (A.current = !0),
                          clearTimeout(e),
                          (e = setTimeout(() => {
                            A.current = !1;
                          }, 500)),
                          W();
                      },
                      r = () => {
                        A.current && t();
                      };
                    return (
                      null == L || L.addEventListener("resize", t),
                      null == L || L.addEventListener("scroll", r),
                      () => {
                        null == L || L.removeEventListener("resize", t),
                          null == L || L.removeEventListener("scroll", r);
                      }
                    );
                  }, [W]);
                  let _ = (0, n.useCallback)(() => {
                    A.current || b();
                  }, [b, A]);
                  return (
                    (function (e) {
                      let { triggerRef: t, isOpen: r, onClose: o } = e;
                      (0, n.useEffect)(() => {
                        if (!r || null === o) return;
                        let e = (e) => {
                          let r = e.target;
                          if (
                            !t.current ||
                            (r instanceof Node && !r.contains(t.current))
                          )
                            return;
                          let n = o || N.get(t.current);
                          n && n();
                        };
                        return (
                          window.addEventListener("scroll", e, !0),
                          () => {
                            window.removeEventListener("scroll", e, !0);
                          }
                        );
                      }, [r, o, t]);
                    })({ triggerRef: o, isOpen: m, onClose: b && _ }),
                    {
                      overlayProps: {
                        style: {
                          position: "absolute",
                          zIndex: 1e5,
                          ...w.position,
                          maxHeight: w.maxHeight,
                        },
                      },
                      placement: w.placement,
                      arrowProps: {
                        "aria-hidden": "true",
                        role: "presentation",
                        style: {
                          left: w.arrowOffsetLeft,
                          top: w.arrowOffsetTop,
                        },
                      },
                      updatePosition: W,
                    }
                  );
                })({
                  isOpen: eR,
                  targetRef: ez,
                  placement: ea(ed),
                  overlayRef: eD,
                  offset: ep ? ef + 3 : ef,
                  crossOffset: em,
                  shouldFlip: eo,
                  containerPadding: es,
                });
              (0, ei.G)(() => {
                ey.length && eW();
              }, ey);
              let { overlayProps: eA } = (function (e, t) {
                  let {
                    onClose: r,
                    shouldCloseOnBlur: o,
                    isOpen: a,
                    isDismissable: l = !1,
                    isKeyboardDismissDisabled: i = !1,
                    shouldCloseOnInteractOutside: s,
                  } = e;
                  (0, n.useEffect)(
                    () => (
                      a && X.push(t),
                      () => {
                        let e = X.indexOf(t);
                        e >= 0 && X.splice(e, 1);
                      }
                    ),
                    [a, t]
                  );
                  let d = () => {
                    X[X.length - 1] === t && r && r();
                  };
                  !(function (e) {
                    let {
                        ref: t,
                        onInteractOutside: r,
                        isDisabled: o,
                        onInteractOutsideStart: a,
                      } = e,
                      l = (0, n.useRef)({
                        isPointerDown: !1,
                        ignoreEmulatedMouseEvents: !1,
                      }),
                      i = (0, H.i)((e) => {
                        r &&
                          V(e, t) &&
                          (a && a(e), (l.current.isPointerDown = !0));
                      }),
                      s = (0, H.i)((e) => {
                        r && r(e);
                      });
                    (0, n.useEffect)(() => {
                      let e = l.current;
                      if (o) return;
                      let r = t.current,
                        n = (0, G.r)(r);
                      if ("undefined" != typeof PointerEvent) {
                        let r = (r) => {
                          e.isPointerDown && V(r, t) && s(r),
                            (e.isPointerDown = !1);
                        };
                        return (
                          n.addEventListener("pointerdown", i, !0),
                          n.addEventListener("pointerup", r, !0),
                          () => {
                            n.removeEventListener("pointerdown", i, !0),
                              n.removeEventListener("pointerup", r, !0);
                          }
                        );
                      }
                      {
                        let r = (r) => {
                            e.ignoreEmulatedMouseEvents
                              ? (e.ignoreEmulatedMouseEvents = !1)
                              : e.isPointerDown && V(r, t) && s(r),
                              (e.isPointerDown = !1);
                          },
                          o = (r) => {
                            (e.ignoreEmulatedMouseEvents = !0),
                              e.isPointerDown && V(r, t) && s(r),
                              (e.isPointerDown = !1);
                          };
                        return (
                          n.addEventListener("mousedown", i, !0),
                          n.addEventListener("mouseup", r, !0),
                          n.addEventListener("touchstart", i, !0),
                          n.addEventListener("touchend", o, !0),
                          () => {
                            n.removeEventListener("mousedown", i, !0),
                              n.removeEventListener("mouseup", r, !0),
                              n.removeEventListener("touchstart", i, !0),
                              n.removeEventListener("touchend", o, !0);
                          }
                        );
                      }
                    }, [t, o, i, s]);
                  })({
                    ref: t,
                    onInteractOutside:
                      l && a
                        ? (e) => {
                            (!s || s(e.target)) &&
                              (X[X.length - 1] === t &&
                                (e.stopPropagation(), e.preventDefault()),
                              d());
                          }
                        : null,
                    onInteractOutsideStart: (e) => {
                      (!s || s(e.target)) &&
                        X[X.length - 1] === t &&
                        (e.stopPropagation(), e.preventDefault());
                    },
                  });
                  let { focusWithinProps: u } = (0, Z.L)({
                    isDisabled: !o,
                    onBlurWithin: (e) => {
                      !(
                        !e.relatedTarget ||
                        (function (e, t = null) {
                          if (
                            e instanceof Element &&
                            e.closest("[data-react-aria-top-layer]")
                          )
                            return !0;
                          for (let { scopeRef: r } of F.traverse(
                            F.getTreeNode(t)
                          ))
                            if (r && A(e, r.current)) return !0;
                          return !1;
                        })(e.relatedTarget, null)
                      ) &&
                        (!s || s(e.relatedTarget)) &&
                        r();
                    },
                  });
                  return {
                    overlayProps: {
                      onKeyDown: (e) => {
                        "Escape" !== e.key ||
                          i ||
                          e.nativeEvent.isComposing ||
                          (e.stopPropagation(), e.preventDefault(), d());
                      },
                      ...u,
                    },
                    underlayProps: {
                      onPointerDown: (e) => {
                        e.target === e.currentTarget && e.preventDefault();
                      },
                    },
                  };
                })(
                  {
                    isOpen: eR,
                    onClose: ej.close,
                    isDismissable: eb,
                    shouldCloseOnBlur: eg,
                    isKeyboardDismissDisabled: ev,
                    shouldCloseOnInteractOutside: ew,
                  },
                  eD
                ),
                e_ = (0, n.useMemo)(() => {
                  var t, r, n;
                  return U({
                    ...w,
                    disableAnimation: eO,
                    radius:
                      null != (t = null == e ? void 0 : e.radius) ? t : "md",
                    size: null != (r = null == e ? void 0 : e.size) ? r : "md",
                    shadow:
                      null != (n = null == e ? void 0 : e.shadow) ? n : "sm",
                  });
                }, [
                  (0, Q.Xx)(w),
                  eO,
                  null == e ? void 0 : e.radius,
                  null == e ? void 0 : e.size,
                  null == e ? void 0 : e.shadow,
                ]),
                eB = (0, n.useCallback)(
                  (e = {}, t = null) => ({
                    ...(0, u.d)(eT, e),
                    ref: (0, er.l)(t, ez),
                    "aria-describedby": eR ? eS : void 0,
                  }),
                  [eT, eR, eS, ej]
                ),
                eF = (0, n.useCallback)(
                  () => ({
                    ref: eD,
                    "data-slot": "base",
                    "data-open": (0, ee.PB)(eR),
                    "data-arrow": (0, ee.PB)(ep),
                    "data-disabled": (0, ee.PB)(J),
                    "data-placement": el(eL, ed),
                    ...(0, u.d)(eM, eA, eC),
                    style: (0, u.d)(eI.style, eC.style, v.style),
                    className: e_.base({
                      class: null == eP ? void 0 : eP.base,
                    }),
                    id: eS,
                  }),
                  [e_, eR, ep, J, eL, ed, eM, eA, eC, eI, v, eS]
                ),
                eH = (0, n.useCallback)(
                  () => ({
                    "data-slot": "content",
                    "data-open": (0, ee.PB)(eR),
                    "data-arrow": (0, ee.PB)(ep),
                    "data-disabled": (0, ee.PB)(J),
                    "data-placement": el(eL, ed),
                    className: e_.content({
                      class: (0, et.W)(null == eP ? void 0 : eP.content, ex),
                    }),
                  }),
                  [e_, eR, ep, J, eL, ed, eP]
                );
              return {
                Component: E || "div",
                content: W,
                children: _,
                isOpen: eR,
                triggerRef: ez,
                showArrow: ep,
                portalContainer: eh,
                placement: ed,
                disableAnimation: eO,
                isDisabled: J,
                motionProps: eE,
                getTooltipContentProps: eH,
                getTriggerProps: eB,
                getTooltipProps: eF,
              };
            })({ ...e, ref: t });
            try {
              let e = n.Children.count(v);
              if (1 !== e) throw Error();
              r = (0, n.isValidElement)(v)
                ? (0, n.cloneElement)(v, B(v.props, v.ref))
                : (0, eb.jsx)("p", { ...B(), children: v });
            } catch (e) {
              (r = (0, eb.jsx)("span", {})),
                (0, em.Z)(
                  "Tooltip must have only one child node. Please, check your code."
                );
            }
            let { ref: K, id: eg, style: eh, ...ev } = q(),
              ey = (0, eb.jsx)("div", {
                ref: K,
                id: eg,
                style: eh,
                children: (0, eb.jsx)(ed.X, {
                  features: eu.H,
                  children: (0, eb.jsx)(ec.m.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    variants: ef,
                    ...(0, u.d)(_, ev),
                    style: { ...eo(P) },
                    children: (0, eb.jsx)(g, { ...J(), children: w }),
                  }),
                }),
              });
            return (0, eb.jsxs)(eb.Fragment, {
              children: [
                r,
                W && x
                  ? (0, eb.jsx)(es.Xj, {
                      portalContainer: E,
                      children: (0, eb.jsx)("div", {
                        ref: K,
                        id: eg,
                        style: eh,
                        ...ev,
                        children: (0, eb.jsx)(g, { ...J(), children: w }),
                      }),
                    })
                  : (0, eb.jsx)(ep.M, {
                      children: x
                        ? (0, eb.jsx)(es.Xj, {
                            portalContainer: E,
                            children: ey,
                          })
                        : null,
                    }),
              ],
            });
          });
        eg.displayName = "NextUI.Tooltip";
        var eh = eg;
      },
      61465: function (e, t, r) {
        r.d(t, {
          g7: function () {
            return a;
          },
        });
        var n = r(67294),
          o = r(85893),
          a = n.forwardRef((e, t) => {
            let { children: r, ...a } = e,
              i = n.Children.toArray(r),
              d = i.find(s);
            if (d) {
              let e = d.props.children,
                r = i.map((t) =>
                  t !== d
                    ? t
                    : n.Children.count(e) > 1
                    ? n.Children.only(null)
                    : n.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, o.jsx)(l, {
                ...a,
                ref: t,
                children: n.isValidElement(e)
                  ? n.cloneElement(e, void 0, r)
                  : null,
              });
            }
            return (0, o.jsx)(l, { ...a, ref: t, children: r });
          });
        a.displayName = "Slot";
        var l = n.forwardRef((e, t) => {
          let { children: r, ...o } = e;
          if (n.isValidElement(r)) {
            let e, a;
            let l =
              (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning
                ? r.ref
                : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning
                ? r.props.ref
                : r.props.ref || r.ref;
            return n.cloneElement(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let o = e[n],
                    a = t[n];
                  /^on[A-Z]/.test(n)
                    ? o && a
                      ? (r[n] = (...e) => {
                          a(...e), o(...e);
                        })
                      : o && (r[n] = o)
                    : "style" === n
                    ? (r[n] = { ...o, ...a })
                    : "className" === n &&
                      (r[n] = [o, a].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(o, r.props),
              ref: t
                ? (function (...e) {
                    return (t) =>
                      e.forEach((e) => {
                        "function" == typeof e
                          ? e(t)
                          : null != e && (e.current = t);
                      });
                  })(t, l)
                : l,
            });
          }
          return n.Children.count(r) > 1 ? n.Children.only(null) : null;
        });
        l.displayName = "SlotClone";
        var i = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
        function s(e) {
          return n.isValidElement(e) && e.type === i;
        }
      },
      18399: function (e, t, r) {
        r.d(t, {
          uZ: function () {
            return n;
          },
        });
        function n(e, t = -1 / 0, r = 1 / 0) {
          return Math.min(Math.max(e, t), r);
        }
      },
      74751: function (e, t, r) {
        r.d(t, {
          v: function () {
            return function e(t, r) {
              if (t === r) return !0;
              if (t && r && "object" == typeof t && "object" == typeof r) {
                let n, o;
                if (t.constructor !== r.constructor) return !1;
                if (Array.isArray(t) && Array.isArray(r)) {
                  if ((n = t.length) !== r.length) return !1;
                  for (o = n; 0 != o--; ) if (!e(t[o], r[o])) return !1;
                  return !0;
                }
                if (t.valueOf !== Object.prototype.valueOf)
                  return t.valueOf() === r.valueOf();
                if (t.toString !== Object.prototype.toString)
                  return t.toString() === r.toString();
                let a = Object.keys(t);
                if ((n = a.length) !== Object.keys(r).length) return !1;
                for (o = n; 0 != o--; )
                  if (!Object.prototype.hasOwnProperty.call(r, a[o])) return !1;
                for (o = n; 0 != o--; ) {
                  let n = a[o];
                  if (n && !e(t[n], r[n])) return !1;
                }
                return !0;
              }
              return t != t && r != r;
            };
          },
        });
      },
      45139: function (e, t, r) {
        r.d(t, {
          j: function () {
            return a;
          },
        });
        let n = (e) =>
            "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
          o = function () {
            for (var e, t, r = 0, n = ""; r < arguments.length; )
              (e = arguments[r++]) &&
                (t = (function e(t) {
                  var r,
                    n,
                    o = "";
                  if ("string" == typeof t || "number" == typeof t) o += t;
                  else if ("object" == typeof t) {
                    if (Array.isArray(t))
                      for (r = 0; r < t.length; r++)
                        t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                    else for (r in t) t[r] && (o && (o += " "), (o += r));
                  }
                  return o;
                })(e)) &&
                (n && (n += " "), (n += t));
            return n;
          },
          a = (e, t) => (r) => {
            var a;
            if ((null == t ? void 0 : t.variants) == null)
              return o(
                e,
                null == r ? void 0 : r.class,
                null == r ? void 0 : r.className
              );
            let { variants: l, defaultVariants: i } = t,
              s = Object.keys(l).map((e) => {
                let t = null == r ? void 0 : r[e],
                  o = null == i ? void 0 : i[e];
                if (null === t) return null;
                let a = n(t) || n(o);
                return l[e][a];
              }),
              d =
                r &&
                Object.entries(r).reduce((e, t) => {
                  let [r, n] = t;
                  return void 0 === n || (e[r] = n), e;
                }, {});
            return o(
              e,
              s,
              null == t
                ? void 0
                : null === (a = t.compoundVariants) || void 0 === a
                ? void 0
                : a.reduce((e, t) => {
                    let { class: r, className: n, ...o } = t;
                    return Object.entries(o).every((e) => {
                      let [t, r] = e;
                      return Array.isArray(r)
                        ? r.includes({ ...i, ...d }[t])
                        : { ...i, ...d }[t] === r;
                    })
                      ? [...e, r, n]
                      : e;
                  }, []),
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          };
      },
      87314: function (e, t, r) {
        r.d(t, {
          m: function () {
            return d;
          },
        });
        var n = r(74751),
          o = r(52425),
          a = r(37122),
          l = r(67294),
          i = r(52798);
        let s = (e) => "object" == typeof e && !Array.isArray(e);
        function d(e = {}) {
          let t = (0, a.Z)(e);
          return (function (e, t, r = t, o = n.v) {
            let a = (0, l.useRef)([]),
              d = (0, i.useSyncExternalStoreWithSelector)(
                e,
                t,
                r,
                (e) => e,
                (e, t) => {
                  if (s(e) && s(t) && a.current.length) {
                    for (let r of a.current) if (!o(e[r], t[r])) return !1;
                    return !0;
                  }
                  return o(e, t);
                }
              );
            if (s(d)) {
              let e = { ...d },
                t = {};
              for (let [r, n] of Object.entries(e))
                t = {
                  ...t,
                  [r]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (a.current.includes(r) || a.current.push(r), n),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return d;
          })(
            (e) =>
              (function (e, t) {
                let { onChange: r } = t;
                return e.subscribe(() => (0, o.D)(e), r, {
                  equalityFn(e, t) {
                    let { connector: r, ...o } = e,
                      { connector: a, ...l } = t;
                    return (
                      (0, n.v)(o, l) && r?.id === a?.id && r?.uid === a?.uid
                    );
                  },
                });
              })(t, { onChange: e }),
            () => (0, o.D)(t)
          );
        }
      },
    },
  ]);
