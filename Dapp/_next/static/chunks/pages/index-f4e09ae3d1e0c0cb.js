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
      (e._sentryDebugIds[t] = "dd1faf7b-455e-46b5-9dd5-e177cc2cb857"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-dd1faf7b-455e-46b5-9dd5-e177cc2cb857"));
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
        (e._sentryDebugIds[t] = "dd1faf7b-455e-46b5-9dd5-e177cc2cb857"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-dd1faf7b-455e-46b5-9dd5-e177cc2cb857"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405],
    {
      62705: function (e, t, n) {
        var r = n(55639).Symbol;
        e.exports = r;
      },
      44239: function (e, t, n) {
        var r = n(62705),
          a = n(89607),
          s = n(2333),
          i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : i && i in Object(e)
            ? a(e)
            : s(e);
        };
      },
      27561: function (e, t, n) {
        var r = n(67990),
          a = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, r(e) + 1).replace(a, "") : e;
        };
      },
      31957: function (e, t, n) {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r;
      },
      89607: function (e, t, n) {
        var r = n(62705),
          a = Object.prototype,
          s = a.hasOwnProperty,
          i = a.toString,
          l = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          var t = s.call(e, l),
            n = e[l];
          try {
            e[l] = void 0;
            var r = !0;
          } catch (e) {}
          var a = i.call(e);
          return r && (t ? (e[l] = n) : delete e[l]), a;
        };
      },
      2333: function (e) {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      55639: function (e, t, n) {
        var r = n(31957),
          a = "object" == typeof self && self && self.Object === Object && self,
          s = r || a || Function("return this")();
        e.exports = s;
      },
      67990: function (e) {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      23279: function (e, t, n) {
        var r = n(13218),
          a = n(7771),
          s = n(14841),
          i = Math.max,
          l = Math.min;
        e.exports = function (e, t, n) {
          var o,
            c,
            d,
            u,
            f,
            x,
            p = 0,
            y = !1,
            v = !1,
            m = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          function g(t) {
            var n = o,
              r = c;
            return (o = c = void 0), (p = t), (u = e.apply(r, n));
          }
          function h(e) {
            var n = e - x,
              r = e - p;
            return void 0 === x || n >= t || n < 0 || (v && r >= d);
          }
          function b() {
            var e,
              n,
              r,
              s = a();
            if (h(s)) return j(s);
            f = setTimeout(
              b,
              ((e = s - x), (n = s - p), (r = t - e), v ? l(r, d - n) : r)
            );
          }
          function j(e) {
            return ((f = void 0), m && o) ? g(e) : ((o = c = void 0), u);
          }
          function w() {
            var e,
              n = a(),
              r = h(n);
            if (((o = arguments), (c = this), (x = n), r)) {
              if (void 0 === f)
                return (p = e = x), (f = setTimeout(b, t)), y ? g(e) : u;
              if (v) return clearTimeout(f), (f = setTimeout(b, t)), g(x);
            }
            return void 0 === f && (f = setTimeout(b, t)), u;
          }
          return (
            (t = s(t) || 0),
            r(n) &&
              ((y = !!n.leading),
              (d = (v = "maxWait" in n) ? i(s(n.maxWait) || 0, t) : d),
              (m = "trailing" in n ? !!n.trailing : m)),
            (w.cancel = function () {
              void 0 !== f && clearTimeout(f),
                (p = 0),
                (o = x = c = f = void 0);
            }),
            (w.flush = function () {
              return void 0 === f ? u : j(a());
            }),
            w
          );
        };
      },
      13218: function (e) {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      37005: function (e) {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      33448: function (e, t, n) {
        var r = n(44239),
          a = n(37005);
        e.exports = function (e) {
          return "symbol" == typeof e || (a(e) && "[object Symbol]" == r(e));
        };
      },
      7771: function (e, t, n) {
        var r = n(55639);
        e.exports = function () {
          return r.Date.now();
        };
      },
      14841: function (e, t, n) {
        var r = n(27561),
          a = n(13218),
          s = n(33448),
          i = 0 / 0,
          l = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          d = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (s(e)) return i;
          if (a(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = a(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = r(e);
          var n = o.test(e);
          return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e;
        };
      },
      48312: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/",
          function () {
            return n(88545);
          },
        ]);
      },
      43735: function (e, t, n) {
        "use strict";
        var r = n(85893),
          a = n(91926),
          s = n(11163),
          i = n(10753);
        t.Z = function (e) {
          let { value: t, setValue: n, isStickyActive: l } = e,
            o = (0, s.useRouter)();
          return (0, r.jsxs)("div", {
            className:
              "relative focus:outline-none flex flex-row gap-2 items-center p-3 pl-4 rounded-2xl border border-solid bg-dark-50 "
                .concat(
                  l || (null == o ? void 0 : o.pathname) !== "/"
                    ? " md:mx-0 "
                    : " md:h-[48px] h-[56px]",
                  " text-xs text-lightTitles font-regular resize-none transition-all ease-in-out scrollbar-hide\n      "
                )
                .concat(
                  t ? "border-gray-600" : "border-secondary",
                  "\n      hover:border-gray-600\n      "
                ),
            "data-sentry-component": "SearchAgentsInput",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, r.jsx)(a.Z, {
                className: "md:size-4 size-5",
                "data-sentry-element": "SearchIcon",
                "data-sentry-source-file": "index.tsx",
                "data-sentry-element": "SearchIcon",
              }),
              (0, r.jsx)("input", {
                placeholder: "Search Agents",
                className:
                  "bg-transparent flex flex-grow focus:outline-none placeholder:text-gray-300 placeholder:text-xs focus:placeholder:text-transparent",
                value: t,
                onChange: (e) => {
                  n(e.target.value);
                },
              }),
              t &&
                (0, r.jsx)("div", {
                  className:
                    "absolute top-0 right-[15px] flex items-center h-full",
                  children: (0, r.jsx)(i.Z, {
                    className: "text-gray-100 hover:text-white cursor-pointer",
                    size: 16,
                    onClick: () => n(""),
                  }),
                }),
            ],
          });
        };
      },
      88545: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return E;
            },
          });
        var r = n(85893),
          a = n(22215),
          s = n(74523),
          i = n(15970),
          l = n(95584),
          o = n(31521),
          c = n(5024),
          d = n(11163),
          u = n(67294),
          f = n(43735),
          x = n(23279),
          p = n.n(x),
          y = n(13114),
          v = n(31173),
          m = n(12842),
          g = n(34863),
          h = n(2158),
          b = n(72192),
          j = n(41816);
        /**
         * @license lucide-react v0.424.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let w = (0, n(40416).Z)("Search", [
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
          ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
        ]);
        var N = n(73781),
          S = function () {
            let { user: e, ready: t, authenticated: n } = (0, c.sv)(),
              a = (0, d.useRouter)(),
              { createSessionHandler: x, getSessionsByAgentHandler: S } = (0,
              i.k)(),
              {
                isHomeAgentsLoading: _,
                homeAgentsData: k,
                getSomeAgentsHandler: E,
                searchAgentsHandler: A,
                agentsListData: O,
                getAllAgentsHandler: I,
                getSortedAgentsHandler: T,
                sortedHomeAgents: D,
              } = (0, s.k)(),
              {
                acceptedTerms: C,
                loadingTerms: z,
                handleUpdateTerms: Z,
              } = (0, m.a)(),
              [F, L] = (0, u.useState)(""),
              [P, H] = (0, u.useState)([]),
              [M, R] = (0, u.useState)(!1),
              [W, $] = (0, u.useState)(!1),
              [q, U] = (0, u.useState)("market_cap"),
              [X, V] = (0, u.useState)(!1),
              { isRightSidebarOpen: B } = (0, l.A)(),
              G = (0, o.a)("(max-width: 768px)"),
              [J, K] = (0, u.useState)([]),
              [Q, Y] = (0, u.useState)(!1),
              [ee, et] = (0, u.useState)(!1),
              en = (0, u.useRef)(null),
              er = async (e, t) => {
                let n = await x(e, t);
                null == a ||
                  a.replace(
                    "/chat/"
                      .concat(e, "?session=")
                      .concat(null == n ? void 0 : n.id)
                  );
              };
            (0, u.useMemo)(
              () => e && n && t && !z && "v1" === C,
              [e, n, t, C, z]
            ),
              (0, u.useCallback)(
                async (e, t) => {
                  er(e, t);
                },
                [x, S, a]
              );
            let ea = (0, u.useCallback)(
                async (e) => {
                  if (e.length >= 1)
                    try {
                      let t = await A(e);
                      Array.isArray(t)
                        ? H(
                            null == t
                              ? void 0
                              : t.filter((e) => {
                                  var t;
                                  return !!(null == e
                                    ? void 0
                                    : null === (t = e.token_project) ||
                                      void 0 === t
                                    ? void 0
                                    : t.syntax_contract_address);
                                })
                          )
                        : (console.error(
                            "Unexpected search results format:",
                            t
                          ),
                          H([]));
                    } catch (e) {
                      console.error("Error during search:", e), H([]);
                    } finally {
                      R(!1);
                    }
                  else H(J);
                },
                [A]
              ),
              es = (0, u.useCallback)(
                p()((e) => {
                  ea(e);
                }, 200),
                [ea]
              );
            (0, u.useEffect)(() => {
              F ? (es(F), R(!0)) : H(J);
            }, [F, J, es]),
              (0, u.useEffect)(() => {
                (null == k ? void 0 : k.data) && K(k.data);
              }, [k]),
              (0, u.useEffect)(() => {
                let e = async () => {
                  et(!0);
                  try {
                    await T(X, q), K(null == D ? void 0 : D.data);
                  } catch (e) {
                    console.error(e);
                  } finally {
                    setTimeout(() => et(!1), 1e3);
                  }
                };
                if (q) {
                  e();
                  return;
                }
              }, [q, X, n]);
            let ei = F ? P : J;
            return (
              (0, u.useEffect)(() => {
                let e = (e) => {
                    if (null == en ? void 0 : en.current) {
                      let {
                        scrollTop: r,
                        scrollHeight: a,
                        clientHeight: s,
                      } = e.target;
                      if (r + s + 5 >= a) {
                        var t, n;
                        let e = q
                          ? null == D
                            ? void 0
                            : null === (t = D.meta) || void 0 === t
                            ? void 0
                            : t.end_cursor
                          : null == k
                          ? void 0
                          : null === (n = k.meta) || void 0 === n
                          ? void 0
                          : n.end_cursor;
                        q && e ? T(X, q, e) : e && E(e);
                      }
                      $(!!r);
                    }
                  },
                  t = en.current;
                for (; t && "agent-layout-content" !== t.id; ) t = t.parentNode;
                if (t)
                  return (
                    t.addEventListener("scroll", e),
                    () => {
                      t.removeEventListener("scroll", e);
                    }
                  );
              }, [en.current, ei, q, X]),
              (0, u.useEffect)(() => {
                D && K(null == D ? void 0 : D.data);
              }, [D]),
              (0, r.jsxs)("div", {
                className:
                  "w-full flex flex-col grow gap-10 items-center  max-w-[768px]",
                ref: en,
                "data-sentry-component": "HomeDashboard",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "fixed top-3 right-2 pr-3 z-[80] pt-[64px] md:hidden flex right-0",
                    children: [
                      (0, r.jsx)(w, {
                        size: 20,
                        className:
                          "cursor-pointer text-gray-100 hover:text-white flex",
                        onClick: () => Y(!Q),
                        "data-sentry-element": "Search",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "Search",
                      }),
                      Q &&
                        (0, r.jsx)("div", {
                          className:
                            "absolute pr-3 pl-3 pb-2 pt-2 right-[-8px] top-0 h-[68px] w-screen bg-dark-50 border-b border-solid border-primary",
                          children: (0, r.jsxs)("div", {
                            className:
                              "w-full h-[48px] p-3 flex flex-row gap-2 items-center border border-solid border-gray-600 bg-primary rounded-lg",
                            children: [
                              (0, r.jsx)(N.Z, {
                                className: "text-gray-100 focus:opacity-80",
                                size: 24,
                                onClick: () => Y(!1),
                              }),
                              (0, r.jsx)("input", {
                                className:
                                  "flex grow bg-transparent text-lightTitles placeholder:text-gray-300 font-inter font-regular text-base focus:outline-none",
                                placeholder: " Search Agents",
                                value: F,
                                onChange: (e) => {
                                  L(e.target.value);
                                },
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      " w-full flex flex-col items-center justify-center ",
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col gap-6 w-full ",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "w-full sticky top-0 z-[8] shadow-none bg-dark-50",
                          children: [
                            (0, r.jsx)("div", {
                              className: "w-full flex flex-col ".concat(
                                G ? "pt-2" : "pt-10",
                                " "
                              ),
                              children:
                                !G &&
                                (0, r.jsx)("div", {
                                  children: (0, r.jsx)(f.Z, {
                                    value: F,
                                    setValue: (e) => {
                                      L(e), "" === e && H(J);
                                    },
                                    isStickyActive: W,
                                  }),
                                }),
                            }),
                            (0, r.jsx)("div", {
                              className: "relative ".concat(
                                G ? "pt-2" : "pt-10",
                                " "
                              ),
                            }),
                            (0, r.jsx)(j.A, {
                              title: "All Agents",
                              currentFilter: q,
                              setCurrentFilter: U,
                              isAscendingOrder: X,
                              setIsAscendingOrder: V,
                              "data-sentry-element": "AgentsSectionTitle",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "AgentsSectionTitle",
                            }),
                          ],
                        }),
                        (0, r.jsx)(y.M, {
                          "data-sentry-element": "AnimatePresence",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "AnimatePresence",
                          children: M
                            ? (0, r.jsx)(
                                v.E.div,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: { duration: 0.5 },
                                  children: "Searching...",
                                },
                                "searching"
                              )
                            : (0, r.jsx)(
                                v.E.div,
                                {
                                  initial: { opacity: 0, scale: 0.95, y: 20 },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.95, y: 20 },
                                  transition: {
                                    duration: 0.5,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                    scale: {
                                      type: "spring",
                                      damping: 15,
                                      stiffness: 100,
                                    },
                                  },
                                  children:
                                    P && (null == P ? void 0 : P.length) > 0
                                      ? (0, r.jsxs)("div", {
                                          className:
                                            "flex flex-col gap-6 pb-10",
                                          children: [
                                            _ &&
                                              (0, r.jsx)(g.c, {
                                                color: "white",
                                                size: "md",
                                              }),
                                            (0, r.jsx)(b.Z, {
                                              agents: ei,
                                              currentFilter: q,
                                              setCurrentFilter: U,
                                              isAscendingOrder: X,
                                              setIsAscendingOrder: V,
                                            }),
                                          ],
                                        })
                                      : (0, r.jsx)(
                                          v.E.div,
                                          {
                                            initial: {
                                              opacity: 0,
                                              scale: 0.95,
                                              y: 20,
                                            },
                                            animate: {
                                              opacity: 1,
                                              scale: 1,
                                              y: 0,
                                            },
                                            exit: {
                                              opacity: 0,
                                              scale: 0.95,
                                              y: 20,
                                            },
                                            transition: {
                                              delay: 1,
                                              duration: 0.5,
                                              ease: [0.43, 0.13, 0.23, 0.96],
                                              scale: {
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 100,
                                              },
                                            },
                                            className:
                                              "flex w-full h-full items-center justify-center font-inter font-normal text-white text-base",
                                            children: "No results found",
                                          },
                                          "results"
                                        ),
                                },
                                "results"
                              ),
                        }),
                      ],
                    }),
                  }),
                  ee &&
                    (0, r.jsx)(h.W, {
                      size: "sm",
                      radius: "none",
                      classNames: {
                        base: "absolute top-[75px] md:top-[65px] w-full z-[999]",
                        track: "bg-blue-100/30",
                        indicator: "bg-blue-100 [--width:20%]",
                      },
                      isIndeterminate: !0,
                      "aria-label": "Loading...",
                    }),
                ],
              })
            );
          },
          _ = n(26791),
          k = n(13390),
          E = function () {
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(k.H, {
                  "data-sentry-element": "SEO",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "SEO",
                }),
                (0, r.jsx)(a.Z, {
                  title: (0, r.jsx)(_.D, {}),
                  "data-sentry-element": "AgentsLayout",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "AgentsLayout",
                  children: (0, r.jsx)("div", {
                    className: "w-full h-full flex justify-center",
                    children: (0, r.jsx)(S, {
                      "data-sentry-element": "HomeDashboard",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "HomeDashboard",
                    }),
                  }),
                }),
              ],
            });
          };
      },
    },
    function (e) {
      e.O(0, [2445, 2215, 3719, 2888, 9774, 179], function () {
        return e((e.s = 48312));
      }),
        (_N_E = e.O());
    },
  ]);
