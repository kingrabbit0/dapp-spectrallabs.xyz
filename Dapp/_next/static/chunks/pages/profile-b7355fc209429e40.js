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
      (e._sentryDebugIds[t] = "1a6dd5f4-f594-4759-8171-53a2a5108b63"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1a6dd5f4-f594-4759-8171-53a2a5108b63"));
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
        (e._sentryDebugIds[t] = "1a6dd5f4-f594-4759-8171-53a2a5108b63"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-1a6dd5f4-f594-4759-8171-53a2a5108b63"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [277],
    {
      99813: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/profile",
          function () {
            return n(67028);
          },
        ]);
      },
      13390: function (e, t, n) {
        "use strict";
        n.d(t, {
          H: function () {
            return c;
          },
        });
        var a = n(85893),
          s = n(9008),
          r = n.n(s),
          l = n(11163),
          i = n(34155);
        let o = {
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
          d = i.env.NEXT_PUBLIC_SITE_URL || "https://syntax.spectrallabs.xyz",
          c = (e) => {
            let {
                title: t,
                description: n,
                image: s,
                url: i,
                type: c = "website",
              } = e,
              x = (0, l.useRouter)(),
              m = {
                title: t ? "".concat(t, " | ").concat(o.title) : o.title,
                description: n || o.description,
                image:
                  s ||
                  "https://www-spectral-public-assets.s3.us-east-2.amazonaws.com/agent-metadata.png",
                url: i || "".concat(d).concat(x.asPath),
                type: c || o.type,
              };
            return (0, a.jsxs)(r(), {
              "data-sentry-element": "Head",
              "data-sentry-component": "SEO",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, a.jsx)("title", { children: m.title }),
                (0, a.jsx)("meta", {
                  name: "title",
                  content: m.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content: m.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:type",
                  content: m.type,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: m.url,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content: m.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:description",
                  content: m.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:image",
                  content: m.image,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: o.openGraph.site_name,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  property: "og:locale",
                  content: o.openGraph.locale,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:card",
                  content: o.twitter.card,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:url",
                  content: m.url,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:title",
                  content: m.title,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:description",
                  content: m.description,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:image",
                  content: m.image,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:site",
                  content: o.twitter.site,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:creator",
                  content: o.twitter.creator,
                  "data-sentry-element": "meta",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "meta",
                }),
                (0, a.jsx)("link", { rel: "canonical", href: m.url }),
              ],
            });
          };
      },
      67028: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return T;
            },
          });
        var a,
          s,
          r,
          l = n(85893),
          i = n(22215),
          o = n(67294),
          d = n(31173),
          c = n(52650),
          x = n(34863),
          m = n(73935),
          u = n(12842),
          f = n(5024),
          p = function (e) {
            let { isOpen: t, setIsOpen: n } = e,
              [a, s] = (0, o.useState)(!1),
              [r, i] = (0, o.useState)(!1),
              [p, y] = (0, o.useState)(""),
              { updateUserHandler: h, userData: g, username: j } = (0, u.a)(),
              [b, w] = (0, o.useState)(""),
              { wallets: v } = (0, f.rB)(),
              N = (e) => {
                /^[A-Za-z0-9_-]+$/.test(e) && e.length <= 20 ? i(!0) : i(!1);
              },
              E = (e) => {
                w(e.target.value);
              },
              _ = (0, o.useRef)(null),
              k = (e) => {
                _.current && !_.current.contains(e.target) && n(!1);
              },
              S = async () => {};
            return ((0, o.useEffect)(
              () => (
                document.addEventListener("mousedown", k),
                () => {
                  document.removeEventListener("mousedown", k);
                }
              ),
              []
            ),
            (0, o.useEffect)(() => {
              N(b);
            }, [b]),
            (0, o.useEffect)(() => {
              t && w(j);
            }, [t]),
            t)
              ? m.createPortal(
                  (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                      className:
                        "absolute top-0 left-0 h-screen w-screen p-4 flex items-center justify-center bg-dark-50 bg-opacity-50 z-[99999]",
                      children: (0, l.jsxs)(d.E.div, {
                        ref: _,
                        className:
                          "md:w-[480px] w-full border border-solid border-primary bg-primary p-6 relative flex flex-col gap-4 rounded-2xl overflow-y-auto",
                        initial: "hidden",
                        animate: "visible",
                        variants: {
                          hidden: { y: 50, opacity: 0 },
                          visible: { y: 0, opacity: 1 },
                        },
                        transition: { duration: 0.3 },
                        children: [
                          (0, l.jsx)(c.Z, {
                            className:
                              "w-5 h-5 absolute top-[14px] right-4 hover:cursor-pointer",
                            onClick: () => n(!1),
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "font-inter font-regular text-lg text-lightTitles",
                                children: "Change username",
                              }),
                              (0, l.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "p-3 border border-solid rounded-lg h-10 flex items-center ease-in-out transition-all ".concat(
                                        r
                                          ? "text-green-50 border-secondary"
                                          : "text-red-200 border-red-200"
                                      ),
                                    children: (0, l.jsx)("input", {
                                      placeholder: "",
                                      className:
                                        "placeholder:font-inter placeholder:font-regular placeholder:text-xs placeholder:text-gray-300 font-inter font-regulat text-xs text-white bg-transparent w-full focus:outline-none",
                                      value: b,
                                      onChange: (e) => E(e),
                                    }),
                                  }),
                                  !r &&
                                    b.length > 1 &&
                                    (0, l.jsx)("span", {
                                      className:
                                        "font-inter font-regular text-xs "
                                          .concat("" === b && "hidden", " ")
                                          .concat(
                                            r
                                              ? "text-green-50"
                                              : "text-red-200",
                                            " "
                                          ),
                                      children: (0, l.jsxs)("span", {
                                        children: [
                                          "Please enter a valid username. ",
                                          (0, l.jsx)("br", {}),
                                          " (Must be less than 20 characters. No special characters or spaces)",
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "w-full flex flex-row gap-2",
                                children: [
                                  (0, l.jsx)("button", {
                                    className:
                                      "h-10 w-full rounded-lg bg-secondary flex items-center justify-center hover:opacity-80 disabled:opacity-50",
                                    onClick: () => n(!1),
                                    children: (0, l.jsx)("span", {
                                      className:
                                        "text-white font-inter font-regular text-sm",
                                      children: "Cancel",
                                    }),
                                  }),
                                  (0, l.jsx)("button", {
                                    className:
                                      "h-10 w-full rounded-lg bg-blue-100 flex items-center justify-center hover:opacity-80 disabled:opacity-50",
                                    onClick: () => S(),
                                    disabled: !r || 0 === b.length,
                                    children: a
                                      ? (0, l.jsx)(x.c, {
                                          color: "white",
                                          size: "sm",
                                        })
                                      : (0, l.jsx)("span", {
                                          className:
                                            "text-white font-inter font-regular text-sm",
                                          children: "Confirm",
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  document.getElementById("portal")
                )
              : null;
          },
          y = n(13664),
          h = n(47607),
          g = function (e) {
            var t, n, a, s, r;
            let {
              name: i,
              total: o,
              usdTotal: d,
              showAmount: c,
              icon: x,
              isGasTank: m,
            } = e;
            return (
              (null !==
                (r =
                  null === h.nk || void 0 === h.nk
                    ? void 0
                    : null === (t = h.nk.find((e) => e.name === i)) ||
                      void 0 === t
                    ? void 0
                    : t.logo) &&
                void 0 !== r) ||
                null === h.nk ||
                void 0 === h.nk ||
                null === (n = h.nk.find((e) => "ETH" === e.name)) ||
                void 0 === n ||
                n.logo,
              (0, l.jsxs)("div", {
                className: "w-full flex flex-row items-center justify-between",
                "data-sentry-component": "UserTransaction",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [
                      x &&
                        (0, l.jsx)("img", {
                          src: x,
                          alt: i,
                          className: "size-6 rounded-full",
                        }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, l.jsx)("span", {
                            className:
                              "font-inter font-normal text-xs text-lightTitles",
                            children: null == i ? void 0 : i.toUpperCase(),
                          }),
                          c &&
                            (0, l.jsx)("span", {
                              className:
                                "font-inter font-regular text-[10px] text-gray-300",
                              children:
                                null === (a = Number(null != o ? o : "0")) ||
                                void 0 === a
                                  ? void 0
                                  : a.toFixed(4),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("span", {
                    className:
                      "font-inter font-normal text-xs text-lightTitles",
                    children: m
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [d, " ", "USDC", " "],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            "$",
                            null === (s = Number(null != d ? d : "0.00")) ||
                            void 0 === s
                              ? void 0
                              : s.toFixed(2),
                          ],
                        }),
                  }),
                ],
              })
            );
          };
        function j() {
          return (j = Object.assign
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
        var b = function (e) {
            return o.createElement(
              "svg",
              j(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  fill: "none",
                },
                e
              ),
              s ||
                (s = o.createElement("path", {
                  stroke: "#BCE635",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.625,
                  d: "m7.584 11.096 1.76 1.029 3.072-4.25M2.484 10a7.516 7.516 0 1 1 15.032 0 7.516 7.516 0 0 1-15.032 0",
                }))
            );
          },
          w = function (e) {
            let { isOpen: t, setIsOpen: n } = e,
              [a, s] = (0, o.useState)(1),
              r = () => {
                if (3 === a) {
                  n(!1);
                  return;
                }
                s(a + 1);
              },
              i = (0, o.useRef)(null),
              x = (e) => {
                i.current && !i.current.contains(e.target) && n(!1);
              };
            return ((0, o.useEffect)(
              () => (
                document.addEventListener("mousedown", x),
                () => {
                  document.removeEventListener("mousedown", x);
                }
              ),
              []
            ),
            t)
              ? m.createPortal(
                  (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                      className:
                        "absolute top-0 left-0 h-screen w-screen p-4 flex items-center justify-center bg-dark-50 bg-opacity-50 z-[99999]",
                      children: (0, l.jsxs)(d.E.div, {
                        ref: i,
                        className:
                          "md:w-[480px] w-full border border-solid border-primary bg-primary p-6 relative flex flex-col gap-4 rounded-2xl overflow-y-auto",
                        initial: "hidden",
                        animate: "visible",
                        variants: {
                          hidden: { y: 50, opacity: 0 },
                          visible: { y: 0, opacity: 1 },
                        },
                        transition: { duration: 0.3 },
                        children: [
                          (0, l.jsx)(c.Z, {
                            className:
                              "w-5 h-5 absolute top-[14px] right-4 hover:cursor-pointer",
                            onClick: () => n(!1),
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-8",
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "font-inter font-regular text-lg text-lightTitles",
                                children: 1 === a && "Account Deletion",
                              }),
                              1 === a &&
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "font-inter font-regular text-sm text-lightTitles",
                                      children:
                                        "Are you sure you want to delete your account?",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className:
                                        "rounded-lg bg-tertiary border border-solid border-gray-200 p-4 flex flex-row gap-2 items-center",
                                      children: [
                                        (0, l.jsx)(y.Z, {}),
                                        (0, l.jsx)("span", {
                                          className:
                                            "font-inter font-regular text-sm text-lightTitles",
                                          children:
                                            "This action cannot be undone.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              2 === a &&
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className:
                                        "rounded-lg p-4 border border-solid border-gray-200",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "font-inter font-regular text-sm text-lightTitles",
                                        children:
                                          "Any residual funds in your Gas Tank and Agent Wallet will be sent to this address.",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className:
                                        "rounded-lg p-3 h-10 border border-solid border-gray-200 flex items-center",
                                      children: (0, l.jsx)("input", {
                                        placeholder: "Enter wallet address",
                                        className:
                                          "w-full bg-transparent font-inter font-regular text-xs text-lightTitles focus:outline-none pllaceholder:font-inter placeholder:text-gray-300 placeholder:text-xs",
                                      }),
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "px-3 flex flex-col gap-2",
                                      children: [
                                        (0, l.jsx)("span", {
                                          className:
                                            "font-inter font-regular text-xs text-lightTitles",
                                          children: "Assets",
                                        }),
                                        (0, l.jsx)(g, {
                                          name: "Ethereum",
                                          total: 23e-5,
                                          usdTotal: 30,
                                          showAmount: !0,
                                        }),
                                        (0, l.jsx)(g, {
                                          name: "Ethereum",
                                          total: 23e-5,
                                          usdTotal: 30,
                                          showAmount: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              3 === a &&
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "font-inter font-regular text-sm text-lightTitles",
                                      children:
                                        "Are you sure you want to delete your account?",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className:
                                        "rounded-lg bg-tertiary border border-solid border-gray-200 p-4 flex flex-row gap-2 items-center",
                                      children: [
                                        (0, l.jsx)(b, {
                                          className: "h-5 w-5 text-",
                                        }),
                                        (0, l.jsx)("span", {
                                          className:
                                            "font-inter font-regular text-sm text-lightTitles",
                                          children:
                                            "You have successfully deleted your account.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, l.jsxs)("div", {
                                className: "w-full flex flex-col gap-2",
                                children: [
                                  (0, l.jsx)("button", {
                                    className:
                                      "h-10 w-full rounded-lg bg-blue-100 flex items-center justify-center hover:opacity-80 disabled:opacity-50",
                                    onClick: () => r(),
                                    children: (0, l.jsxs)("span", {
                                      className:
                                        "text-white font-inter font-regular text-sm",
                                      children: [
                                        1 === a && "Continue",
                                        2 === a && "Confirm",
                                        3 === a && "Return Home",
                                      ],
                                    }),
                                  }),
                                  a < 3 &&
                                    (0, l.jsx)("button", {
                                      className:
                                        "h-10 w-full rounded-lg bg-secondary flex items-center justify-center hover:opacity-80 disabled:opacity-50",
                                      onClick: () => n(!1),
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "text-white font-inter font-regular text-sm",
                                        children: "Back",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  document.getElementById("portal")
                )
              : null;
          },
          v = function (e) {
            let { setIsUsernameModalOpen: t } = e,
              { username: n } = (0, u.a)();
            return (0, l.jsxs)("div", {
              className: "flex flex-col gap-3 w-full",
              "data-sentry-component": "ProfileUserInfo",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, l.jsx)("span", {
                  className:
                    "font-inter font-normal md:text-sm text-lg text-lightTitles",
                  children: "Basic Information",
                }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col gap-[3px] rounded-lg border border-solid border-gray-200 py-4 px-6",
                  children: [
                    (0, l.jsx)("span", {
                      className:
                        "font-inter text-gray-300 md:text-[10px] text-sm text-regular tracking-[2px] uppercase ",
                      children: "USERNAME",
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-row w-full justify-between",
                      children: [
                        (0, l.jsxs)("span", {
                          className:
                            "font-inter font-regular md:text-sm text-lg text-lightTitles",
                          children: ["@", n],
                        }),
                        (0, l.jsx)("span", {
                          className:
                            "font-inter font-normal md:text-xs text-base text-gray-100  opacity-70 cursor-not-allowed",
                          children: "Change",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          N = n(49e3),
          E = n(94407),
          _ = n(19400);
        ((a = r || (r = {})).deposit = "deposit"), (a.withdraw = "withdraw");
        var k = function () {
            let [e, t] = (0, o.useState)(!1),
              [n, a] = (0, o.useState)(!1),
              { setIsTransactionModalOpen: s, isTransactionModalOpen: r } = (0,
              E.h)(),
              { username: i } = (0, u.a)(),
              [d, c] = (0, o.useState)();
            return (
              (0, o.useEffect)(() => {
                r || c("deposit");
              }, [r]),
              (0, l.jsxs)("div", {
                className: "w-full",
                "data-sentry-component": "ProfileSettings",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "w-full flex flex-col md:gap-6 gap-10 items-center max-w-[574px] mx-auto md:pt-10 pt-8 md:overflow-y-auto overflow-y-hidden",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "md:hidden flex flex-col gap-4 items-center",
                        children: [
                          (0, l.jsx)(_.Z, {
                            "data-sentry-element": "SidebarWalletIcon",
                            "data-sentry-source-file": "index.tsx",
                            "data-sentry-element": "SidebarWalletIcon",
                          }),
                          (0, l.jsxs)("span", {
                            className:
                              "font-inter font-regular text-lg text-lightTitles",
                            children: ["@", i],
                          }),
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "font-inter font-normal text-lg text-lightTitles md:flex hidden",
                        children: "Profile",
                      }),
                      (0, l.jsx)(v, {
                        setIsUsernameModalOpen: a,
                        "data-sentry-element": "ProfileUserInfo",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "ProfileUserInfo",
                      }),
                      (0, l.jsx)("span", {
                        className:
                          "h-8 md:text-sm text-lg font-inter font-regular text-red-100 cursor-pointer hover:opacity-80",
                        onClick: () => t(!0),
                        children: "Delete Account",
                      }),
                    ],
                  }),
                  (0, l.jsx)(p, {
                    isOpen: n,
                    setIsOpen: a,
                    "data-sentry-element": "ChangeUsername",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "ChangeUsername",
                  }),
                  (0, l.jsx)(N.Z, {
                    type: d,
                    "data-sentry-element": "TransactionModal",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "TransactionModal",
                  }),
                  (0, l.jsx)(w, {
                    isOpen: e,
                    setIsOpen: t,
                    "data-sentry-element": "DeleteAccount",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "DeleteAccount",
                  }),
                ],
              })
            );
          },
          S = n(13390),
          T = function () {
            let { user: e } = (0, f.sv)();
            return (
              (0, o.useEffect)(() => {
                e || window.location.replace("/");
              }, [e]),
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(S.H, {
                    "data-sentry-element": "SEO",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "SEO",
                  }),
                  (0, l.jsx)(i.Z, {
                    title: "Profile",
                    "data-sentry-element": "AgentsLayout",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "AgentsLayout",
                    children: (0, l.jsx)(k, {
                      "data-sentry-element": "ProfileSettings",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "ProfileSettings",
                    }),
                  }),
                ],
              })
            );
          };
      },
      9008: function (e, t, n) {
        e.exports = n(68869);
      },
    },
    function (e) {
      e.O(0, [2445, 2215, 2888, 9774, 179], function () {
        return e((e.s = 99813));
      }),
        (_N_E = e.O());
    },
  ]);
