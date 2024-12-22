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
      (e._sentryDebugIds[t] = "cc474a99-bdb5-4b0f-9410-3b47519fdd11"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-cc474a99-bdb5-4b0f-9410-3b47519fdd11"));
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
        (e._sentryDebugIds[t] = "cc474a99-bdb5-4b0f-9410-3b47519fdd11"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-cc474a99-bdb5-4b0f-9410-3b47519fdd11"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3719],
    {
      16987: function (e, t) {
        "use strict";
        t.Z = {
          src: "/_next/static/media/CardImageWrapper.d3fc8fbc.png",
          height: 304,
          width: 401,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEU6RGY1Pl3FB9odAAAAAnRSTlP7/ULXe+8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAASSURBVHicY2CEAgZkBgOEwAkAA8MAF4YuOhIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        };
      },
      26791: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return s;
          },
        });
        var a = n(85893);
        let s = () =>
          (0, a.jsx)("div", {
            className:
              "text-[#bce635] text-xl font-medium font-carbon uppercase leading-relaxed tracking-widest",
            "data-sentry-component": "SyntaxText",
            "data-sentry-source-file": "index.tsx",
            children: "Syntax",
          });
      },
      72192: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return x;
          },
        });
        var a = n(85893),
          s = n(11163),
          r = n(67294),
          l = n(16987),
          i = n(25675),
          d = n.n(i),
          c = n(81423),
          o = function (e) {
            var t, n, i, o, m, x, u;
            let { agent: f } = e,
              [p, g] = (0, r.useState)(!1),
              y = (0, s.useRouter)(),
              [h, j] = (0, r.useState)(""),
              b = (0, c.OF)(
                null == f
                  ? void 0
                  : null === (t = f.token_project) || void 0 === t
                  ? void 0
                  : t.syntax_contract_address
              ),
              v = async () => j(null == f ? void 0 : f.image);
            return (
              (0, r.useEffect)(() => {
                f && v();
              }, [f]),
              (0, a.jsxs)("div", {
                className:
                  "\n            w-full rounded-lg flex flex-col justify-between bg-primary/50 font-inter overflow-hidden ease-in-out transition-all\n            ".concat(
                    b
                      ? "opacity-1 cursor-pointer hover:bg-primary"
                      : "opacity-50",
                    "\n          "
                  ),
                onClick: () => {
                  if (b) {
                    var e;
                    null == y ||
                      y.push(
                        "/tokens/".concat(
                          null == f
                            ? void 0
                            : null === (e = f.token_project) || void 0 === e
                            ? void 0
                            : e.syntax_contract_address
                        )
                      );
                  }
                },
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                "data-sentry-component": "AgentCard",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, a.jsxs)("div", {
                    className: "p-4 flex flex-col gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-row w-full gap-4 items-center",
                        children: [
                          h
                            ? (0, a.jsx)("div", {
                                className:
                                  "bg-cover bg-center rounded-full shrink-0 transition-all ease-in-out size-10",
                                style: {
                                  backgroundImage: "url('".concat(h, "')"),
                                },
                              })
                            : (0, a.jsx)(d(), {
                                src: l.Z,
                                alt: "image",
                                className: "size-10 rounded-full",
                              }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex flex-col gap-[2px]",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-white font-regular md:text-sm text-lg line-clamp-1",
                                    children: null == f ? void 0 : f.name,
                                  }),
                                  (null == f
                                    ? void 0
                                    : null === (n = f.token_project) ||
                                      void 0 === n
                                    ? void 0
                                    : n.ticker) &&
                                    (0, a.jsxs)("span", {
                                      className:
                                        "font-regular text-gray-300 md:text-xs text-lg",
                                      children: [
                                        "$",
                                        null == f
                                          ? void 0
                                          : null === (i = f.token_project) ||
                                            void 0 === i
                                          ? void 0
                                          : i.ticker,
                                      ],
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "text-gray-300 md:text-xs text-base w-[150px] flex flex-row gap-2 items-center",
                                children: [
                                  "by ",
                                  (0, a.jsxs)("span", {
                                    className: "text-ellipsis overflow-hidden",
                                    children: [
                                      "@",
                                      null == f
                                        ? void 0
                                        : null === (o = f.creator) ||
                                          void 0 === o
                                        ? void 0
                                        : o.name,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "font-regular text-gray-50 md:text-xs text-base line-clamp-2",
                        children:
                          null == f
                            ? void 0
                            : null === (m = f.token_project) || void 0 === m
                            ? void 0
                            : m.description,
                      }),
                    ],
                  }),
                  b &&
                    (0, a.jsx)("div", {
                      className:
                        "w-full py-2 flex items-center justify-center self-end ease-in-out transition-all ".concat(
                          p && b ? "bg-blue-1300" : "bg-blue-1300/50"
                        ),
                      children: (0, a.jsxs)("span", {
                        className:
                          "font-regular md:text-[10px] text-sm text-lightTitles",
                        children: [
                          "$",
                          null ===
                            (x = Number(
                              (null == f
                                ? void 0
                                : null === (u = f.token_project) || void 0 === u
                                ? void 0
                                : u.market_cap) || 0
                            )) || void 0 === x
                            ? void 0
                            : x.toLocaleString(),
                          " ",
                          (0, a.jsx)("span", {
                            className: "ml-1 text-gray-300 tracking-[1px]",
                            children: "MARKETCAP ",
                          }),
                        ],
                      }),
                    }),
                ],
              })
            );
          },
          m = n(41816),
          x = function (e) {
            let {
              agents: t,
              title: n,
              currentFilter: s,
              setCurrentFilter: r,
              isAscendingOrder: l,
              setIsAscendingOrder: i,
            } = e;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                n &&
                  (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(m.A, {
                      title: n,
                      currentFilter: s,
                      setCurrentFilter: r,
                      isAscendingOrder: l,
                      setIsAscendingOrder: i,
                    }),
                  }),
                (0, a.jsx)("div", {
                  className: "flex flex-col gap-4 w-full",
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-4 font-inter w-full",
                    children: (0, a.jsx)("div", {
                      className: "grid md:grid-cols-3 grid-cols-1 gap-3 ",
                      children:
                        t &&
                        (null == t ? void 0 : t.length) > 0 &&
                        (null == t
                          ? void 0
                          : t.map((e) => (0, a.jsx)(o, { agent: e }, e.id))),
                    }),
                  }),
                }),
              ],
            });
          };
      },
      41816: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return m;
          },
        });
        var a,
          s = n(85893),
          r = n(67294);
        function l() {
          return (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }).apply(this, arguments);
        }
        var i = function (e) {
            return r.createElement(
              "svg",
              l(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 20 21",
                },
                e
              ),
              a ||
                (a = r.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.2,
                  d: "M16.866 11.808 10 19m0 0-6.865-7.192M10 19V2",
                }))
            );
          },
          d = function (e) {
            let {
                label: t,
                isAscendingOrder: n,
                setIsAscendingOrder: a,
                currentFilter: l,
                setCurrentFilter: d,
                sortBy: c,
              } = e,
              [o, m] = (0, r.useState)(!1);
            return (0, s.jsxs)("button", {
              className:
                "flex items-center gap-1 px-3 py-1.5 text-[#cfd5df] hover:text-white transition-colors",
              onClick: () => {
                l === c && o
                  ? !1 === n
                    ? a(!0)
                    : a(!1)
                  : (a(!1), d(c), m(!0));
              },
              "data-sentry-component": "Filter",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, s.jsx)("span", {
                  className:
                    "text-xs sm:text-sm md:text-xs font-normal ".concat(
                      l === c && o ? "text-white" : ""
                    ),
                  children: t,
                }),
                l === c &&
                  o &&
                  (0, s.jsx)(i, {
                    className: "size-4 transition-all ".concat(
                      n && l === c ? "rotate-180" : "rotate-0"
                    ),
                  }),
              ],
            });
          },
          c = n(31521),
          o = function (e) {
            let {
                filters: t,
                currentFilter: n,
                setCurrentFilter: a,
                isAscendingOrder: l,
                setIsAscendingOrder: d,
              } = e,
              [c, o] = (0, r.useState)(!1),
              [m, x] = (0, r.useState)(!1),
              u = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
              let e = (e) => {
                u.current && !u.current.contains(e.target) && o(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, []);
            let f = (e, t) => {
              a(e), d(t), o(!1);
            };
            return (0, s.jsxs)("div", {
              "data-sentry-component": "MobileFilter",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative flex flex-row gap-1 px-3 items-center hover:cursor-pointer text-white",
                  onClick: () => {
                    if (!c) {
                      o(!0),
                        setTimeout(() => {
                          x(!0);
                        }, 200);
                      return;
                    }
                    x(!1),
                      setTimeout(() => {
                        o(!1);
                      }, 500);
                  },
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "font-inter font-regular text-lg transition-all ease-in-out line-clamp-1",
                      children: n
                        ? "inserted_at" === n
                          ? "Creation Date"
                          : "Market Cap"
                        : "Sort By",
                    }),
                    (0, s.jsx)(i, {
                      className: "size-5 transition-all ".concat(
                        l ? "rotate-180" : "rotate-0"
                      ),
                      "data-sentry-element": "ArrowDown",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "ArrowDown",
                    }),
                  ],
                }),
                c &&
                  (0, s.jsxs)("div", {
                    className:
                      "absolute top-[80px] right-0 rounded-lg p-6 flex flex-col items-end gap-5 border border-solid border-gray-200 text-gray-300 bg-dark-50",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 ",
                        onClick: () => f("inserted_at", !0),
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-inter font-regular text-lg",
                            children: "Agent Creation Date",
                          }),
                          (0, s.jsx)(i, { className: "size-5 rotate-180" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 ",
                        onClick: () => f("inserted_at", !1),
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-inter font-regular text-lg",
                            children: "Agent Creation Date",
                          }),
                          (0, s.jsx)(i, { className: "size-5" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 ",
                        onClick: () => f("market_cap", !0),
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-inter font-regular text-lg",
                            children: "Token Marketcap",
                          }),
                          (0, s.jsx)(i, { className: "size-5 rotate-180" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 ",
                        onClick: () => f("market_cap", !1),
                        children: [
                          (0, s.jsx)("span", {
                            className: "font-inter font-regular text-lg",
                            children: "Token Marketcap",
                          }),
                          (0, s.jsx)(i, { className: "size-5" }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          };
        function m(e) {
          let {
              title: t,
              currentFilter: n,
              setCurrentFilter: a,
              isAscendingOrder: r,
              setIsAscendingOrder: l,
            } = e,
            i = (0, c.a)("(max-width: 768px)");
          return (0, s.jsxs)("div", {
            className:
              "w-full md:max-w-[768px] flex items-center gap-3 pb-3 border-b border-[#4b5268] md:pt-0 pt-4",
            "data-sentry-component": "AgentsSectionTitle",
            "data-sentry-source-file": "index.tsx",
            children: [
              (0, s.jsx)("div", {
                className: "flex items-center gap-6",
                children: (0, s.jsx)("div", {
                  className: "flex items-center gap-2",
                  children: (0, s.jsx)("div", {
                    className:
                      "text-white md:text-base text-[22px] font-regular leading-tight",
                    children: t,
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: "grow h-7 flex justify-end items-start gap-2",
                children: i
                  ? (0, s.jsx)(o, {
                      filters: ["market_cap", "inserted_at"],
                      currentFilter: n,
                      setCurrentFilter: a,
                      isAscendingOrder: r,
                      setIsAscendingOrder: l,
                    })
                  : (0, s.jsxs)("div", {
                      className: "grow h-7 flex justify-end items-start gap-3",
                      children: [
                        (0, s.jsx)(d, {
                          label: "MarketCap",
                          isAscendingOrder: r,
                          setIsAscendingOrder: l,
                          currentFilter: n,
                          setCurrentFilter: a,
                          sortBy: "market_cap",
                        }),
                        (0, s.jsx)(d, {
                          label: "Agent Creation Date",
                          isAscendingOrder: r,
                          setIsAscendingOrder: l,
                          currentFilter: n,
                          setCurrentFilter: a,
                          sortBy: "inserted_at",
                        }),
                      ],
                    }),
              }),
            ],
          });
        }
      },
      13390: function (e, t, n) {
        "use strict";
        n.d(t, {
          H: function () {
            return o;
          },
        });
        var a = n(85893),
          s = n(9008),
          r = n.n(s),
          l = n(11163),
          i = n(34155);
        let d = {
            title: "Spectral SYNTAX | Build Sentient Memes that Evolve Onchain",
            description:
              "Build and interact with autonomous AI agents that trade onchain on Spectral Syntax.",
            type: "website",
            twitter: {
              card: "summary_large_image",
              site: "@Spectral_Labs",
              creator: "@Spectral_Labs",
            },
            openGraph: {
              type: "website",
              locale: "en_US",
              site_name: "Spectral Labs",
            },
          },
          c = i.env.NEXT_PUBLIC_SITE_URL || "",
          o = (e) => {
            let {
                title: t,
                description: n,
                image: s,
                url: i,
                type: o = "website",
              } = e,
              m = (0, l.useRouter)(),
              x = {
                title: t ? "".concat(t, " | ").concat(d.title) : d.title,
                description: n || d.description,
                image:
                  s ||
                  "/agent-metadata.png",
                url: i || "".concat(c).concat(m.asPath),
                type: o || d.type,
              };
            return (0, a.jsxs)(r(), {
              "data-sentry-element": "Head",
              "data-sentry-component": "SEO",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, a.jsx)("title", { children: x.title }),
                (0, a.jsx)("meta", {
                  name: "title",
                  content: x.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content: x.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:type",
                  content: x.type,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: x.url,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content: x.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:description",
                  content: x.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:image",
                  content: x.image,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: d.openGraph.site_name,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:locale",
                  content: d.openGraph.locale,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:card",
                  content: d.twitter.card,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:url",
                  content: x.url,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:title",
                  content: x.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:description",
                  content: x.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:image",
                  content: x.image,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:site",
                  content: d.twitter.site,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:creator",
                  content: d.twitter.creator,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("link", { rel: "canonical", href: x.url }),
              ],
            });
          };
      },
      9008: function (e, t, n) {
        e.exports = n(68869);
      },
    },
  ]);
