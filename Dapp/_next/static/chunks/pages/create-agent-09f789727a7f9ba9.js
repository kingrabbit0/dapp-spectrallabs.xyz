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
      (e._sentryDebugIds[t] = "c9f0f685-0a5e-4d42-bd91-a4c6e01687b5"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c9f0f685-0a5e-4d42-bd91-a4c6e01687b5"));
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
        (e._sentryDebugIds[t] = "c9f0f685-0a5e-4d42-bd91-a4c6e01687b5"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-c9f0f685-0a5e-4d42-bd91-a4c6e01687b5"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4253],
    {
      51541: function (e, t, l) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/create-agent",
          function () {
            return l(23502);
          },
        ]);
      },
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
      23502: function (e, t, l) {
        "use strict";
        l.r(t),
          l.d(t, {
            default: function () {
              return tt;
            },
          });
        var n,
          r,
          a,
          s,
          o,
          i,
          c,
          d,
          u,
          x,
          m,
          f,
          p,
          h,
          g,
          v,
          w,
          y,
          b,
          j,
          N,
          E,
          k,
          _,
          C,
          A,
          S,
          O,
          I,
          F,
          M,
          B,
          z,
          q = l(85893),
          U = l(22215),
          L = l(67294),
          R = l(63118),
          T = l(74523),
          Z = l(6080),
          P = l(95584),
          D = l(31521);
        let G =
          "flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group";
        var H = l(34863),
          W = l(39332),
          V = l(11163),
          Y = l(5024),
          K = (e, t) => {
            (0, L.useEffect)(() => {
              if (e) {
                e.style.height = "0px";
                let t = e.scrollHeight;
                e.style.height = t + "px";
              }
            }, [e, t]);
          },
          X = l(52650);
        function J() {
          return (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var $ = function (e) {
            return L.createElement(
              "svg",
              J(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              r ||
                (r = L.createElement("path", {
                  stroke: "#CFD5DF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.2,
                  d: "M13.628 5.42H9.64V1.434M4.014 14.799h7.972c1.036 0 1.876-.84 1.876-1.876V5.185L9.876 1.2H4.014c-1.036 0-1.876.84-1.876 1.876v9.848c0 1.036.84 1.876 1.876 1.876",
                }))
            );
          },
          Q = function (e) {
            let { file: t, setFile: l, fileSizeError: n } = e;
            return (0, q.jsxs)("div", {
              className:
                "h-[42px] w-full flex flex-row gap-[10px] py-[6px] px-3 bg-tertiary rounded-lg items-center justify-between w-full  mb-4",
              "data-sentry-component": "FileCard",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, q.jsxs)("div", {
                  className:
                    "flex flex-row gap-2 items-center w-full max-w-[calc(100%-3rem)]",
                  children: [
                    (0, q.jsx)("div", {
                      children: (0, q.jsx)($, {
                        "data-sentry-element": "FileIcon",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "FileIcon",
                      }),
                    }),
                    (0, q.jsx)("span", {
                      className:
                        "font-inter font-regular text-gray-300 text-sm truncate grow ".concat(
                          n ? "w-fit" : "w-full"
                        ),
                      children: null == t ? void 0 : t.name,
                    }),
                    n &&
                      (0, q.jsx)("span", {
                        className:
                          "font-inter font-normal text-sm text-red-50 w-max shrink-0",
                        children: "The maximum size allowed is 1MB.",
                      }),
                  ],
                }),
                (0, q.jsx)(X.Z, {
                  className: "h-3 w-3 cursor-pointer hover:opacity-80 shrink-0",
                  onClick: () => {
                    l(null);
                  },
                  "data-sentry-element": "Close",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "Close",
                }),
              ],
            });
          },
          ee = l(13307);
        function et() {
          return (et = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var el = function (e) {
          return L.createElement(
            "svg",
            et(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
              },
              e
            ),
            a ||
              (a = L.createElement("path", {
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 10,
                strokeWidth: 1.5,
                d: "M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83",
              }))
          );
        };
        function en() {
          return (en = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var er = function (e) {
            return L.createElement(
              "svg",
              en(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 18,
                  height: 18,
                  fill: "none",
                },
                e
              ),
              s ||
                (s = L.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.3,
                  d: "m16.4 8.95-6.243 6.031c-1.957 1.891-5.131 1.891-7.089 0a4.73 4.73 0 0 1 .019-6.867l5.76-5.544c1.34-1.294 3.512-1.294 4.851 0a3.235 3.235 0 0 1-.013 4.699L7.86 12.864a1.9 1.9 0 0 1-2.619 0 1.746 1.746 0 0 1 0-2.53l4.825-4.661",
                }))
            );
          },
          ea = l(82399),
          es = l(87066);
        let eo = new ea.s("https://bros.spectrallabs.xyz/api");
        async function ei(e, t) {
          try {
            let l = await eo.post("/v1/uploads", {
              file_name: e,
              session_id: t,
            });
            return null == l ? void 0 : l.data;
          } catch (e) {
            throw e;
          }
        }
        async function ec(e) {
          try {
            let t = await eo.post("/v1/uploads", { key: e });
            return null == t ? void 0 : t.data;
          } catch (e) {
            throw e;
          }
        }
        async function ed(e, t) {
          try {
            let l = await es.Z.put(t, e);
            return null == l ? void 0 : l.data;
          } catch (e) {
            throw e;
          }
        }
        var eu = function (e) {
            let {
                session: t,
                file: l,
                setFile: n,
                fileSizeError: r,
                setFileSizeError: a,
                handleNewPrompt: s,
                sendNewMessage: o,
                prompt: i,
                disabled: c,
              } = e,
              { currentAgent: d } = (0, T.k)(),
              u = (0, L.useRef)(null),
              { sendNewFileMessageThroughSocket: x, disabledSendMessage: m } =
                (0, Z.R)(),
              f = () => {
                var e;
                null === (e = u.current) || void 0 === e || e.click();
              },
              p = async () => {
                if (l && l.size <= 1048576)
                  try {
                    let e = await ei(
                      null == l ? void 0 : l.name,
                      null == t ? void 0 : t.id
                    );
                    await ed(l, null == e ? void 0 : e.url),
                      x(
                        null == l ? void 0 : l.name,
                        null == e ? void 0 : e.key
                      ),
                      n(null);
                  } catch (e) {}
                i && o();
              };
            return (0, q.jsxs)("div", {
              className: "flex flex-row gap-4 items-center",
              "data-sentry-component": "AgentInputButtons",
              "data-sentry-source-file": "index.tsx",
              children: [
                (null == d ? void 0 : d.id) === R.n9 &&
                  !i &&
                  (0, q.jsxs)(q.Fragment, {
                    children: [
                      (0, q.jsx)(er, {
                        className:
                          "text-gray-300 hover:text-white cursor-pointer flex",
                        onClick: () => !m && f(),
                      }),
                      (0, q.jsx)("input", {
                        type: "file",
                        ref: u,
                        style: { display: "none" },
                        onChange: (e) => {
                          var t;
                          let l =
                            null === (t = e.target.files) || void 0 === t
                              ? void 0
                              : t[0];
                          l && (l.size > 1048576 ? a(!0) : a(!1), n(l)),
                            (e.target.value = "");
                        },
                        accept: ".sol",
                      }),
                    ],
                  }),
                (null == d ? void 0 : d.id) === R.n9
                  ? (0, q.jsx)(ee.A, {
                      isIconOnly: !0,
                      type: "submit",
                      className:
                        "md:w-[40px] md:h-[40px] md:min-w-[40px] md:min-h-[40px] bg-blue-50  md:p-0  text-white flex items-center justify-center disabled:opacity-80 self-end",
                      disabled:
                        m ||
                        c ||
                        r ||
                        (!l && (!i || !(null == i ? void 0 : i.trim()))),
                      onClick: p,
                      isLoading: !r && m,
                      children: (0, q.jsx)(el, {}),
                    })
                  : (0, q.jsx)(ee.A, {
                      isIconOnly: !0,
                      type: "submit",
                      className:
                        "md:w-[40px] md:h-[40px] md:min-w-[40px] md:min-h-[40px] bg-blue-50  md:p-0  text-white flex items-center justify-center disabled:opacity-80 self-end",
                      disabled:
                        m || !i || !(null == i ? void 0 : i.trim()) || c || r,
                      onClick: s,
                      isLoading: m,
                      children: (0, q.jsx)(el, {}),
                    }),
              ],
            });
          },
          ex = function (e) {
            let {
                session: t,
                placeholder: l,
                isDefault: n,
                disabled: r,
                agentSelected: a,
              } = e,
              [s, o] = (0, L.useState)(""),
              [i, c] = (0, L.useState)(!1),
              [d, u] = (0, L.useState)(!1),
              [x, m] = (0, L.useState)(null),
              { user: f } = (0, Y.sv)(),
              {
                createChatWithPrompt: p,
                sendNewMessageThroughSocket: h,
                disabledSendMessage: g,
              } = (0, Z.R)(),
              { currentAgent: v, getAgentsWithSessionsHandler: w } = (0, T.k)(),
              y = (0, L.useRef)(null);
            K(y.current, s);
            let b = (0, W.useSearchParams)(),
              j = (0, V.useRouter)(),
              N = (e) => {
                o(e.target.value);
              },
              E = async () => {
                ((null == t ? void 0 : t.id) || "" == s) && (h(s), o(""));
              },
              k = async () => {
                if (v || (null == t ? void 0 : t.agent) === R.M4) {
                  E();
                  return;
                }
                void 0 !== a && p(s, a);
              },
              _ =
                (null == j ? void 0 : j.pathname) === "/create-agent"
                  ? "Message Agent Builder..."
                  : l;
            return (
              (0, L.useEffect)(() => {
                !g &&
                  (null == y ? void 0 : y.current) &&
                  !r &&
                  (null == y || y.current.focus()),
                  x || u(!1);
              }, [g, r, null == b ? void 0 : b.get("session"), x]),
              (0, L.useEffect)(() => {
                m(null);
              }, [null == b ? void 0 : b.get("session")]),
              (0, q.jsxs)("form", {
                className: "w-full "
                  .concat(
                    n ? "h-[56px]" : " min-h-[56px] max-h-[350px]",
                    "  border border-secondary hover:border-gray-600 rounded-2xl bg-primary flex flex-col items-center justify-between p-2 pl-4 ease-in-out transition-all\n      "
                  )
                  .concat(f ? "" : " cursor-not-allowed", "\n      "),
                onSubmit: (e) => e.preventDefault(),
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                "data-sentry-component": "AgentInput",
                "data-sentry-source-file": "index.tsx",
                children: [
                  x &&
                    (0, q.jsx)("div", {
                      className: "flex flex-row gap-2 w-full items-start",
                      children: (0, q.jsx)(Q, {
                        file: x,
                        setFile: m,
                        fileSizeError: d,
                      }),
                    }),
                  (0, q.jsxs)("div", {
                    className: "flex flex-row w-full justify-between",
                    children: [
                      (0, q.jsx)("textarea", {
                        ref: y,
                        placeholder: _ || "",
                        className: "px-2 self-center "
                          .concat(
                            (null == j ? void 0 : j.pathname) === "/"
                              ? "h-6 max-h-6"
                              : "max-h-[316px] h-max",
                            " overflow-y-auto bg-primary placeholder:text-gray-300 h-max w-full outline-none placeholder:md:text-base focus:placeholder:text-transparent placeholder:text-sm placeholder:whitespace-pre-line font-inter placeholder:font-regular placeholder:transition-all placeholder:ease-in-out font-regular text-white resize-none\n        "
                          )
                          .concat(
                            i && "placeholder:text-lightTitles",
                            "\n        "
                          ),
                        onChange: (e) => N(e),
                        value: s,
                        disabled: g || r || d,
                        autoFocus: !0,
                        onKeyDown: (e) => {
                          "Enter" !== e.key ||
                            e.shiftKey ||
                            g ||
                            "" === s ||
                            k();
                        },
                      }),
                      (0, q.jsx)(eu, {
                        session: t,
                        file: x,
                        setFile: m,
                        fileSizeError: d,
                        setFileSizeError: u,
                        handleNewPrompt: k,
                        sendNewMessage: E,
                        prompt: s,
                        disabled: r,
                        "data-sentry-element": "AgentInputButtons",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "AgentInputButtons",
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          em = l(17017);
        function ef() {
          return (ef = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var ep = function (e) {
            return L.createElement(
              "svg",
              ef(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              o ||
                (o = L.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.2,
                  d: "M.8 2.786v10.428c0 1.097.89 1.986 1.986 1.986h10.428c1.097 0 1.986-.89 1.986-1.986V4.276h-1.986m0 0H2.538a1.738 1.738 0 1 1 0-3.476h8.69c1.096 0 1.986.89 1.986 1.986zm-.745 4.717a.497.497 0 1 1-.993 0 .497.497 0 0 1 .993 0",
                }))
            );
          },
          eh = l(80106),
          eg = l(47607),
          ev = l(7301),
          ew = l(12842);
        function ey() {
          return {
            switchToBaseChain: async (e, t, l, n, r, a) => {
              var s, o, i, c, d;
              if (
                a ||
                e !==
                  (null === (o = t[0]) || void 0 === o
                    ? void 0
                    : null === (s = o.chain) || void 0 === s
                    ? void 0
                    : s.id)
              )
                try {
                  await (null == l
                    ? void 0
                    : null === (d = l[0]) || void 0 === d
                    ? void 0
                    : d.switchChain(
                        r ||
                          (null === (c = t[0]) || void 0 === c
                            ? void 0
                            : null === (i = c.chain) || void 0 === i
                            ? void 0
                            : i.id)
                      )),
                    n(!1);
                } catch (e) {
                  if (!a && (null == e ? void 0 : e.code) === 4001) {
                    n(!0);
                    return;
                  }
                  window.location.replace("/");
                }
            },
          };
        }
        var eb = function (e) {
            var t, l, n, r;
            let { sessionAgent: a, setShowNetworkSuggestion: s } = e,
              { currentWalletChain: o } = (0, ew.a)(),
              { currentAgent: i } = (0, T.k)(),
              { connectWallet: c } = (0, Y.sv)(),
              { wallets: d } = (0, Y.rB)(),
              u = (0, V.useRouter)(),
              { switchToBaseChain: x } = ey();
            return (0, q.jsxs)(q.Fragment, {
              children: [
                !(null == d ? void 0 : d[0]) &&
                  (0, q.jsxs)("div", {
                    className:
                      "w-full max-w-[800px] rounded-2xl backdrop-blur-sm bg-primary/50 flex flex-row p-6 gap-3 border border-gray-200 relative",
                    children: [
                      (null == a ? void 0 : a.image)
                        ? (0, q.jsx)("img", {
                            src: null == a ? void 0 : a.image,
                            alt: "wrapper",
                            className: "rounded-full h-6 w-6 shrink-0 grow-0",
                            style: {
                              objectFit: "cover",
                              objectPosition: "center",
                            },
                          })
                        : (null == i ? void 0 : i.image)
                        ? (0, q.jsx)("img", {
                            className: "rounded-full h-6 w-6",
                            src:
                              (null == i ? void 0 : i.image) ||
                              "/CardImageWrapper.svg",
                            alt: "img",
                          })
                        : (0, q.jsx)(eh.Z, {
                            className:
                              "rounded-full h-6 w-6 flex shrink-0 grow-0",
                          }),
                      (0, q.jsxs)("div", {
                        className: "flex flex-col items-start gap-4",
                        children: [
                          (0, q.jsx)("div", {
                            className: "flex flex-row gap-3 items-center mt-1",
                            children: (0, q.jsx)("span", {
                              className:
                                "font-auto font-normal text-sm text-gray-400",
                              children: null == a ? void 0 : a.name,
                            }),
                          }),
                          (0, q.jsxs)("div", {
                            className:
                              "w-full md:w-auto font-inter font-regular text-sm leading-[21px] text-gray-300 flex flex-col gap-y-2",
                            children: [
                              (0, q.jsxs)("span", {
                                children: [
                                  "You need to connect a wallet to use ",
                                  null == a ? void 0 : a.name,
                                ],
                              }),
                              (0, q.jsxs)(ee.A, {
                                className:
                                  "hidden w-[200px] bg-blue-100 flex items-center md:h-10 rounded-lg hover:bg-blue-400",
                                onClick: c,
                                children: [
                                  (0, q.jsx)("span", {
                                    className:
                                      "font-inter font-regular text-sm text-white",
                                    children: "Connect wallet",
                                  }),
                                  (0, q.jsx)(ep, { className: "text-white" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (null == d ? void 0 : d[0]) &&
                  !(null == d
                    ? void 0
                    : null === (t = d[0]) || void 0 === t
                    ? void 0
                    : t.linked) &&
                  (0, q.jsxs)("div", {
                    className: "".concat(
                      (
                        null == u
                          ? void 0
                          : null === (l = u.pathname) || void 0 === l
                          ? void 0
                          : l.includes("/chat")
                      )
                        ? "md:max-w-[800px] w-full"
                        : "w-full",
                      " rounded-2xl backdrop-blur-sm bg-primary/50 flex flex-row p-6 gap-3 border border-gray-200 relative"
                    ),
                    children: [
                      (null == a ? void 0 : a.image)
                        ? (0, q.jsx)("img", {
                            src: null == a ? void 0 : a.image,
                            alt: "wrapper",
                            className: "rounded-full h-6 w-6 shrink-0 grow-0",
                            style: {
                              objectFit: "cover",
                              objectPosition: "center",
                            },
                          })
                        : (null == i ? void 0 : i.image)
                        ? (0, q.jsx)("img", {
                            className: "rounded-full h-6 w-6",
                            src:
                              (null == i ? void 0 : i.image) ||
                              "/CardImageWrapper.svg",
                            alt: "img",
                          })
                        : (0, q.jsx)(eh.Z, {
                            className:
                              "rounded-full h-6 w-6 flex shrink-0 grow-0",
                          }),
                      (0, q.jsxs)("div", {
                        className: "flex flex-col items-start gap-4",
                        children: [
                          (0, q.jsx)("div", {
                            className: "flex flex-row gap-3 items-center mt-1",
                            children: (0, q.jsx)("span", {
                              className:
                                "font-auto font-normal text-sm text-gray-400",
                              children: null == a ? void 0 : a.name,
                            }),
                          }),
                          (0, q.jsxs)("div", {
                            className:
                              "w-full md:w-auto font-inter font-regular text-sm leading-[21px] text-gray-300 flex flex-col gap-y-2",
                            children: [
                              (0, q.jsxs)("span", {
                                children: [
                                  "You need to sign to use ",
                                  null == a ? void 0 : a.name,
                                ],
                              }),
                              (0, q.jsxs)(ee.A, {
                                className:
                                  "hidden w-[180px] bg-blue-100 flex items-center md:h-10 rounded-lg hover:bg-blue-400",
                                onClick: () => {
                                  var e;
                                  return null == d
                                    ? void 0
                                    : null === (e = d[0]) || void 0 === e
                                    ? void 0
                                    : e.loginOrLink();
                                },
                                children: [
                                  (0, q.jsx)("span", {
                                    className:
                                      "font-inter font-regular text-sm text-white",
                                    children: "Connect and Sign",
                                  }),
                                  (0, q.jsx)(ep, { className: "text-white" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (null == d
                  ? void 0
                  : null === (n = d[0]) || void 0 === n
                  ? void 0
                  : n.linked) &&
                  o !== (null === ev.u || void 0 === ev.u ? void 0 : ev.u.id) &&
                  (0, q.jsxs)("div", {
                    className: "".concat(
                      (
                        null == u
                          ? void 0
                          : null === (r = u.pathname) || void 0 === r
                          ? void 0
                          : r.includes("/chat")
                      )
                        ? "md:max-w-[800px] w-full"
                        : "w-full",
                      " rounded-2xl backdrop-blur-sm bg-primary/50 flex flex-row p-6 gap-3 border border-gray-200 relative "
                    ),
                    children: [
                      (null == a ? void 0 : a.image)
                        ? (0, q.jsx)("img", {
                            className: "rounded-full h-6 w-6",
                            src:
                              (null == i ? void 0 : i.image) ||
                              "/CardImageWrapper.svg",
                            alt: "img",
                          })
                        : (0, q.jsx)(eh.Z, {
                            className:
                              "rounded-full h-6 w-6 flex shrink-0 grow-0",
                          }),
                      (0, q.jsxs)("div", {
                        className: "flex flex-col items-start gap-4",
                        children: [
                          (0, q.jsx)("div", {
                            className: "flex flex-row gap-3 items-center mt-1",
                            children: (0, q.jsx)("span", {
                              className:
                                "font-auto font-normal text-sm text-gray-400",
                              children: null == a ? void 0 : a.name,
                            }),
                          }),
                          (0, q.jsxs)("div", {
                            className:
                              "w-full md:w-auto font-inter font-regular text-sm leading-[21px] text-gray-300 flex flex-col gap-y-2",
                            children: [
                              (0, q.jsxs)("span", {
                                children: [
                                  "Switch to Base to use ",
                                  null == a ? void 0 : a.name,
                                ],
                              }),
                              eg.Zk.map((e, t) =>
                                (0, q.jsxs)(
                                  "div",
                                  {
                                    onClick: () => {
                                      var t;
                                      return x(
                                        null == e
                                          ? void 0
                                          : null === (t = e.chain) ||
                                            void 0 === t
                                          ? void 0
                                          : t.id,
                                        eg.Zk,
                                        d,
                                        s
                                      );
                                    },
                                    className:
                                      "w-[200px] flex items-center gap-x-2 border-1 border-gray-200 rounded p-2 hover:opacity-80 cursor-pointer",
                                    children: [
                                      e.logo,
                                      (0, q.jsxs)("span", {
                                        children: ["Switch to ", e.name],
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            });
          },
          ej = l(6849);
        function eN() {
          return (eN = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eE = function (e) {
          return L.createElement(
            "svg",
            eN(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 42 42",
              },
              e
            ),
            i ||
              (i = L.createElement("path", {
                fill: "#141828",
                stroke: "url(#TestMachineIcon_svg__a)",
                d: "M41.5 21c0 11.322-9.178 20.5-20.5 20.5S.5 32.322.5 21 9.678.5 21 .5 41.5 9.678 41.5 21Z",
              })),
            c ||
              (c = L.createElement("path", {
                fill: "url(#TestMachineIcon_svg__b)",
                d: "M30.3 17.373c.062.02.096.023.124.04q.368.211.736.425.31.177.62.354l.706.407.62.353.64.364c.083.047.105.116.105.209q-.003 1.544-.002 3.086v5.673c0 .071-.009.142-.013.209l-12.621 7.25h-.078l-.54-.312q-.348-.203-.697-.403c-.22-.125-.442-.246-.661-.372q-.383-.22-.765-.442c-.23-.132-.46-.26-.688-.395-.039-.023-.066-.064-.115-.114l5.261-3.024c-.048-.046-.082-.091-.127-.117q-.498-.294-1-.581c-.314-.18-.632-.357-.945-.538-.268-.155-.532-.318-.8-.473-.31-.18-.624-.354-.935-.533-.265-.153-.526-.312-.79-.465-.261-.152-.525-.299-.786-.45q-.401-.236-.801-.47c-.167-.097-.337-.189-.503-.285q-.329-.19-.655-.383-.266-.15-.532-.3-.24-.14-.479-.281c-.185-.109-.372-.216-.576-.335-.008-.03-.023-.076-.03-.123-.006-.038-.002-.076-.002-.114v-8.748c0-.09.012-.179.018-.259.334-.19.65-.369.964-.55q.333-.193.664-.388c.058-.035.114-.08.178-.097.058-.016.135-.023.184.003.165.084.32.186.48.279q.328.19.659.378.162.093.322.19c.058.066.053.146.053.226v7.113c.083.058.164.125.254.178q.503.294 1.01.583.548.31 1.091.624c.31.18.617.366.927.547.219.127.441.248.66.374q.246.143.49.286l.52.3q.244.143.49.285c.27.157.544.31.814.468q.322.191.644.382c.212.124.426.243.639.366l.813.474c.199.115.398.233.6.344.034.019.095.02.128.002.208-.114.412-.238.618-.357q.252-.143.503-.287c.226-.13.45-.264.676-.393.223-.128.448-.25.67-.377l.63-.362c.176-.102.352-.206.531-.303.065-.035.097-.082.1-.152q.002-.069 0-.137v-8.853z",
              })),
            d ||
              (d = L.createElement("path", {
                fill: "url(#TestMachineIcon_svg__c)",
                d: "M28.377 16.29v9.19c-.06.04-.124.085-.191.124q-.313.182-.628.363l-.688.391q-.167.098-.334.192-.044.024-.089.04c-.53-.314-1.063-.603-1.578-.927V18.45c-.002-.075-.035-.127-.102-.165q-.483-.282-.968-.565c-.272-.157-.547-.307-.818-.464-.31-.18-.617-.366-.927-.546-.363-.21-.729-.414-1.092-.624-.313-.182-.623-.37-.936-.552-.318-.183-.639-.36-.956-.543-.36-.209-.715-.423-1.074-.63-.222-.13-.449-.25-.67-.38q-.466-.271-.928-.546l-.44-.256c-.078-.044-.158-.052-.239-.006l-.461.265-.51.297q-.407.233-.816.466-.409.234-.816.469-.334.193-.666.387c-.13.075-.262.148-.407.23-.005.07-.013.145-.013.22v8.657c0 .051-.007.103-.012.178-.06-.015-.11-.017-.148-.039q-.43-.241-.857-.488-.303-.177-.605-.355-.413-.237-.827-.473l-.804-.464-.276-.154v-9.12l.73-.42.806-.461q.35-.198.697-.398.402-.236.803-.469.4-.226.8-.451c.17-.097.337-.2.506-.299l.641-.364.814-.47c.224-.127.449-.25.672-.38.22-.126.435-.258.655-.385.222-.127.448-.248.67-.376q.384-.22.765-.442.334-.194.669-.386.337-.197.676-.392.33-.186.66-.37.247-.143.49-.286l.5-.29.548-.317q.23-.134.463-.265c.069-.04.14-.034.207.004q.47.274.94.547c.218.126.442.245.661.37q.32.187.637.373l.502.286q.177.1.355.2c.097.056.193.115.307.184-.05.044-.084.09-.13.116q-.338.198-.679.39-.256.146-.512.291l-.492.283-.667.385-.814.47q-.34.192-.68.384-.319.186-.636.372-.252.143-.502.287c-.05.03-.091.072-.158.124l8.97 5.195z",
              })),
            u ||
              (u = L.createElement("path", {
                fill: "url(#TestMachineIcon_svg__d)",
                d: "M22.996 11.101c.03-.042.046-.09.079-.108.306-.179.617-.351.925-.527q.315-.181.628-.364.27-.154.54-.309.25-.146.498-.291.376-.222.757-.435a.16.16 0 0 1 .129.003c.251.139.498.285.748.428q.413.236.825.473c.174.1.343.204.517.304l.63.358q.413.239.825.476c.222.127.448.25.67.378.22.127.436.259.655.386.163.095.33.183.494.277.32.184.64.372.96.556.273.156.547.308.82.464.045.026.085.06.132.095v4.021c0 .02-.016.04-.028.067z",
              })),
            x ||
              (x = L.createElement("path", {
                fill: "url(#TestMachineIcon_svg__e)",
                d: "M8.5 28.49v-4.072l10.887 6.25c-.06.126-.182.154-.28.212-.216.13-.438.252-.658.377l-.688.395q-.248.147-.498.293-.251.143-.502.285l-.65.372-.227.129z",
              })),
            m ||
              (m = L.createElement(
                "defs",
                null,
                L.createElement(
                  "linearGradient",
                  {
                    id: "TestMachineIcon_svg__a",
                    x1: -4.46,
                    x2: 57.652,
                    y1: 0.256,
                    y2: 29.113,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "TestMachineIcon_svg__b",
                    x1: 11.858,
                    x2: 41.606,
                    y1: 15.302,
                    y2: 28.662,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "TestMachineIcon_svg__c",
                    x1: 6.39,
                    x2: 36.144,
                    y1: 6.125,
                    y2: 19.47,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "TestMachineIcon_svg__d",
                    x1: 21.845,
                    x2: 36.085,
                    y1: 9.105,
                    y2: 17.742,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "TestMachineIcon_svg__e",
                    x1: 7.344,
                    x2: 21.63,
                    y1: 24.469,
                    y2: 33.161,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                )
              ))
          );
        };
        function ek() {
          return (ek = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var e_ = function (e) {
          return L.createElement(
            "svg",
            ek(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 42 42",
              },
              e
            ),
            f ||
              (f = L.createElement("path", {
                fill: "#141828",
                stroke: "url(#OnchainExplorerIcon_svg__a)",
                d: "M41.5 21c0 11.322-9.178 20.5-20.5 20.5S.5 32.322.5 21 9.678.5 21 .5 41.5 9.678 41.5 21Z",
              })),
            p ||
              (p = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__b)",
                fillRule: "evenodd",
                d: "m16.246 29.071-4.242 4.242a2.346 2.346 0 1 1-3.317-3.317l4.242-4.242z",
                clipRule: "evenodd",
              })),
            h ||
              (h = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__c)",
                fillRule: "evenodd",
                d: "M35.152 17.754c0 6.028-4.887 10.915-10.916 10.915S13.32 23.783 13.32 17.755c0-6.029 4.887-10.916 10.916-10.916s10.916 4.887 10.916 10.916m-1.804 0a9.112 9.112 0 1 1-18.223 0 9.112 9.112 0 0 1 18.223 0",
                clipRule: "evenodd",
              })),
            g ||
              (g = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__d)",
                fillRule: "evenodd",
                d: "M15.74 24.607a11 11 0 0 0 1.654 1.653l-6.221 6.221a1.17 1.17 0 1 1-1.654-1.653z",
                clipRule: "evenodd",
              })),
            v ||
              (v = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__e)",
                d: "m24.206 17.279-1.72-.895c-.393-.206-.782-.417-1.176-.623l-3.392-1.784-.117-.056c0 .038-.005.078-.005.115q.001 3.573-.004 7.145c0 .13.058.186.16.24 1.711.897 3.42 1.8 5.13 2.698q.56.29 1.12.575l-.001-2.81q0-2.303.003-4.604zm-.803 6.067q-.42-.214-.84-.43l-3.847-2.025c-.078-.042-.121-.083-.121-.18.004-1.787.002-3.573.002-5.36l.003-.086q.045.02.089.042 1.272.667 2.544 1.338c.294.155.586.314.882.468q.645.337 1.288.67 0 1.728-.002 3.454v2.108z",
              })),
            w ||
              (w = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__f)",
                d: "M30.61 14.094q-.002-.086-.006-.173l-3.027 1.588-3.374 1.77q0 2.303-.004 4.604 0 1.405.002 2.81c.052-.022.108-.042.159-.067q3.035-1.599 6.073-3.192c.126-.067.179-.136.179-.285-.006-2.351-.004-4.704-.004-7.055zm-.931 6.808c-1.52.795-3.037 1.596-4.556 2.394q-.059.028-.12.05V21.24q0-1.726.003-3.453l2.53-1.328 2.27-1.191.003.13q0 2.645.003 5.292c0 .112-.038.164-.133.214z",
              })),
            y ||
              (y = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__g)",
                d: "m24.204 16.44-1.288-.671-.882-.468-2.544-1.338-.089-.042c.05-.03.096-.063.148-.09q1.909-1.004 3.818-2.005.384-.204.772-.399a.18.18 0 0 1 .14.004q1.893.994 3.788 1.994l.821.424c.042.021.08.05.117.074q-1.134.596-2.27 1.19l-2.529 1.329z",
              })),
            b ||
              (b = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__h)",
                fillRule: "evenodd",
                d: "m24.203 18.119-1.754-1.755.037.02 1.521.792.198.197zm4.318 4.317 2.831 2.832.374-.374-2.715-2.715zm-8.796-9.542-.49.257-2.538-2.538.374-.374z",
                clipRule: "evenodd",
              })),
            j ||
              (j = L.createElement("path", {
                fill: "url(#OnchainExplorerIcon_svg__i)",
                fillRule: "evenodd",
                d: "m31.726 10.613-2.55 2.55-.49-.257 2.666-2.667zM24.43 17.16l1.571-.823-1.797 1.796v-.747zm-5.024 5.025-2.71 2.71.374.373 2.825-2.826z",
                clipRule: "evenodd",
              })),
            N ||
              (N = L.createElement(
                "defs",
                null,
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__a",
                    x1: -4.46,
                    x2: 57.652,
                    y1: 0.256,
                    y2: 29.113,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__b",
                    x1: 7.124,
                    x2: 19.319,
                    y1: 25.804,
                    y2: 31.47,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__c",
                    x1: 11.002,
                    x2: 43.288,
                    y1: 6.971,
                    y2: 21.971,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__d",
                    x1: 8.304,
                    x2: 20.456,
                    y1: 24.657,
                    y2: 30.304,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__e",
                    x1: 17.111,
                    x2: 27.824,
                    y1: 13.987,
                    y2: 16.95,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__f",
                    x1: 23.518,
                    x2: 34.229,
                    y1: 13.986,
                    y2: 16.949,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__g",
                    x1: 18.381,
                    x2: 28.04,
                    y1: 11.446,
                    y2: 20.019,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__h",
                    x1: 15.101,
                    x2: 37.326,
                    y1: 10.331,
                    y2: 20.657,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "OnchainExplorerIcon_svg__i",
                    x1: 15.101,
                    x2: 37.326,
                    y1: 10.331,
                    y2: 20.657,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                )
              ))
          );
        };
        function eC() {
          return (eC = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eA = function (e) {
          return L.createElement(
            "svg",
            eC(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 42 42",
              },
              e
            ),
            E ||
              (E = L.createElement("path", {
                fill: "#141828",
                stroke: "url(#MoonmakerSidebarIcon_svg__a)",
                d: "M41.5 21c0 11.322-9.178 20.5-20.5 20.5S.5 32.322.5 21 9.678.5 21 .5 41.5 9.678 41.5 21Z",
              })),
            k ||
              (k = L.createElement("path", {
                fill: "url(#MoonmakerSidebarIcon_svg__b)",
                d: "M21.218 25.035c6.196 0 11.219-5.023 11.219-11.219S27.414 2.598 21.218 2.598 10 7.62 10 13.816s5.023 11.219 11.218 11.219",
              })),
            _ ||
              (_ = L.createElement("path", {
                fill: "#141828",
                d: "m25.185 16.709-4.061-6.167v8.239z",
              })),
            C ||
              (C = L.createElement("path", {
                fill: "#141828",
                d: "m25.4 16.92-4.276 2.19v-.327l-3.767-2.075 3.767-6.164v-.562l-4.07 6.664-3.651 1.404 7.721-12.64v4.57l4.367 6.664 4.099 1.575-8.317-13.612L12.85 18.39l8.422 4.64 8.228-4.534-4.1-1.575m-4.276 5.698-7.727-4.257 3.744-1.44 3.982 2.195v3.502z",
              })),
            A ||
              (A = L.createElement("path", {
                fill: "url(#MoonmakerSidebarIcon_svg__c)",
                d: "M4.535 19.3c0-2.084.423-4.07 1.186-5.874a15 15 0 0 0-.369 3.331c0 8.286 6.675 15.004 14.91 15.004 1.656 0 3.25-.273 4.738-.774q-.957.109-1.943.11c-9.218 0-16.237-8.16-15.923-17.117.125-3.555.913-4.664 1.267-5.98C4.763 11.711 3 16.604 3 20.342 3 27.842 9.006 33.929 16.442 34 9.647 32.602 4.535 26.552 4.535 19.3",
              })),
            S ||
              (S = L.createElement("path", {
                fill: "url(#MoonmakerSidebarIcon_svg__d)",
                d: "M16 36.368c9.073-.282 16.605-6.638 18.611-15.112-.712 8.913-7.416 16.148-16.11 17.734 3.019.1 6.103-.566 8.954-2.09 7.734-4.13 11.122-13.156 8.37-21.148 2.204 5.176 1.999 10.864-.204 15.714A18.08 18.08 0 0 0 39 20.92c0-5.58-2.52-10.573-6.493-13.919a21.5 21.5 0 0 1 1.536 8.007c0 10.694-7.791 19.58-18.043 21.36",
              })),
            O ||
              (O = L.createElement(
                "defs",
                null,
                L.createElement(
                  "linearGradient",
                  {
                    id: "MoonmakerSidebarIcon_svg__a",
                    x1: -4.46,
                    x2: 57.652,
                    y1: 0.256,
                    y2: 29.113,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#2388FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#BCE635" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "MoonmakerSidebarIcon_svg__b",
                    x1: 7.617,
                    x2: 40.798,
                    y1: 2.734,
                    y2: 18.15,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#3592FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#CBFF24" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "MoonmakerSidebarIcon_svg__c",
                    x1: 0.664,
                    x2: 34.926,
                    y1: 8.158,
                    y2: 21.628,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#3592FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#CBFF24" })
                ),
                L.createElement(
                  "linearGradient",
                  {
                    id: "MoonmakerSidebarIcon_svg__d",
                    x1: 13.558,
                    x2: 50.764,
                    y1: 7.195,
                    y2: 19.619,
                    gradientUnits: "userSpaceOnUse",
                  },
                  L.createElement("stop", {
                    offset: 0.31,
                    stopColor: "#3592FF",
                  }),
                  L.createElement("stop", { offset: 0.8, stopColor: "#CBFF24" })
                )
              ))
          );
        };
        function eS() {
          return (eS = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eO = function (e) {
          return L.createElement(
            "svg",
            eS(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 14 14",
              },
              e
            ),
            I ||
              (I = L.createElement("path", {
                stroke: "#ACB4C0",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.3,
                d: "m5.806 12.117-4.747.856.792-4.814 6.695-6.663a1.58 1.58 0 0 1 2.248 0l1.678 1.678a1.583 1.583 0 0 1 0 2.248L5.81 12.117z",
              }))
          );
        };
        function eI() {
          return (eI = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eF = function (e) {
            return L.createElement(
              "svg",
              eI(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "inherit",
                  height: "inherit",
                  fill: "none",
                  viewBox: "0 0 14 14",
                },
                e
              ),
              F ||
                (F = L.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.2,
                  d: "m5.072 7.875 1.404.821L8.93 5.304M1 7a6 6 0 1 1 12 0A6 6 0 0 1 1 7",
                }))
            );
          },
          eM = l(10486),
          eB = function (e) {
            var t;
            let { name: l, fileKey: n } = e,
              [r, a] = (0, L.useState)(!0),
              [s, o] = (0, L.useState)(!1),
              [i, c] = (0, L.useState)(""),
              d = async () => {
                a(!0);
                try {
                  let e = await ec(n),
                    t = await es.Z.get(null == e ? void 0 : e.url);
                  c(null == t ? void 0 : t.data);
                } catch (e) {
                } finally {
                  a(!1);
                }
              };
            return (
              (0, L.useEffect)(() => {
                n && s && d();
              }, [n, s]),
              (0, q.jsxs)("div", {
                className:
                  "min-h-[42px] flex flex-col gap-2 py-[6px] px-3 w-full md:w-[764px] rounded-lg bg-tertiary cursor-pointer",
                "data-sentry-component": "ChatFile",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, q.jsxs)("div", {
                    className:
                      "justify-between flex flex-row items-center w-full my-[7px]",
                    onClick: () => o(!s),
                    children: [
                      (0, q.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                          (0, q.jsx)($, {
                            className: "h-4 w-4",
                            "data-sentry-element": "FileIcon",
                            "data-sentry-source-file": "index.tsx",
                            "data-sentry-element": "FileIcon",
                          }),
                          (0, q.jsx)("span", {
                            className:
                              "font-inter font-regular text-xs text-gray-300",
                            children: l,
                          }),
                        ],
                      }),
                      (0, q.jsx)(eM.Z, {
                        className: "h-4 w-4 transition-all ".concat(
                          s ? "rotate-180" : "rotate-0"
                        ),
                        "data-sentry-element": "ChevronDown",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "ChevronDown",
                      }),
                    ],
                  }),
                  s &&
                    (0, q.jsxs)("div", {
                      className:
                        "p-6 bg-primary/50 rounded-lg font-source text-gray-1000",
                      children: [
                        r &&
                          (0, q.jsx)("div", {
                            className:
                              "w-full flex items-center justify-center py-6",
                            children: (0, q.jsx)(H.c, {
                              size: "sm",
                              color: "white",
                            }),
                          }),
                        !r &&
                          (0, q.jsx)(q.Fragment, {
                            children: i
                              ? (0, q.jsx)(q.Fragment, {
                                  children:
                                    null == i
                                      ? void 0
                                      : null === (t = i.split("\n")) ||
                                        void 0 === t
                                      ? void 0
                                      : t.map((e, t) =>
                                          (0, q.jsxs)(
                                            "span",
                                            {
                                              className:
                                                "leading-4 text-wrap grow-0 w-full",
                                              children: [
                                                e,
                                                (0, q.jsx)("br", {}),
                                              ],
                                            },
                                            t
                                          )
                                        ),
                                })
                              : (0, q.jsxs)("div", {
                                  className:
                                    "flex items-center flex-col justify-center gap-y-2",
                                  children: [
                                    (0, q.jsx)("span", {
                                      children:
                                        "File content couldn't be fetched.",
                                    }),
                                    (0, q.jsx)(ee.A, {
                                      isIconOnly: !0,
                                      type: "submit",
                                      className:
                                        "w-auto px-4  bg-blue-50 text-white",
                                      onClick: d,
                                      children: (0, q.jsx)("span", {
                                        className: "text-xs",
                                        children: "Fetch again",
                                      }),
                                    }),
                                  ],
                                }),
                          }),
                      ],
                    }),
                ],
              })
            );
          },
          ez = function (e) {
            var t, l;
            let {
                message: n,
                session: r,
                canEdit: a,
                withFile: s,
                fileName: o,
                fileKey: i,
              } = e,
              { username: c } = (0, ew.a)(),
              [d, u] = (0, L.useState)(!1),
              [x, m] = (0, L.useState)(null == n ? void 0 : n.content),
              { sendNewMessageThroughSocket: f, disabledSendMessage: p } = (0,
              Z.R)(),
              h = (0, V.useRouter)(),
              { isRightSidebarOpen: g } = (0, P.A)(),
              { wallets: v } = (0, Y.rB)(),
              w = async (e, t) => {
                f(e), u(!1);
              };
            return (0, q.jsxs)("div", {
              className: "".concat(
                (null == h
                  ? void 0
                  : null === (t = h.pathname) || void 0 === t
                  ? void 0
                  : t.includes("/chat")) && !g
                  ? "md:w-[800px]"
                  : "w-full",
                " flex flex-row gap-3 py-6"
              ),
              "data-sentry-component": "UserMessage",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, q.jsx)("div", {
                  className:
                    "h-6 w-6 bg-blue-50 flex items-center justify-center rounded-full shrink-0 growth-0",
                  children: (0, q.jsx)("span", {
                    className: "font-inter text-white font-medium text-xs",
                    children: null == c ? void 0 : c.charAt(0).toUpperCase(),
                  }),
                }),
                (0, q.jsxs)("div", {
                  className: "flex flex-col gap-4 relative w-full",
                  children: [
                    (0, q.jsxs)("div", {
                      className: "flex flex-row gap-3 items-center mt-1",
                      children: [
                        (0, q.jsx)("span", {
                          className:
                            "font-inter text-white text-sm font-normal leading-[18px] ",
                          children:
                            c ||
                            (0, ej.Xn)(
                              null == v
                                ? void 0
                                : null === (l = v[0]) || void 0 === l
                                ? void 0
                                : l.address
                            ),
                        }),
                        a &&
                          (0, q.jsx)(eO, {
                            className:
                              "h-[14px] w-[14px] hover:cursor-pointer hover:opacity-80 ".concat(
                                p && "opacity-50"
                              ),
                            onClick: () => {
                              p || u(!0);
                            },
                          }),
                      ],
                    }),
                    d
                      ? (0, q.jsxs)("div", {
                          className:
                            "flex flex-col bg-primary/50 rounded-2xl border border-solid border-secondary",
                          children: [
                            (0, q.jsx)("textarea", {
                              className:
                                "md:h-max w-full bg-transparent p-6 focus:outline-none text-white resize-none",
                              defaultValue: null == n ? void 0 : n.content,
                              onChange: (e) => m(e.target.value),
                            }),
                            (0, q.jsxs)("div", {
                              className:
                                "w-full py-4 px-6 flex flex-row gap-1 justify-end bg-primary rounded-b-2xl border-t border-solid border-secondary",
                              children: [
                                (0, q.jsx)("div", {
                                  className:
                                    "px-3 text-white font-inter text-xs font-regular flex items-center hover:cursor-pointer hover:opacity-80",
                                  onClick: () => u(!1),
                                  children: "Cancel",
                                }),
                                (0, q.jsxs)("div", {
                                  className:
                                    "flex items-center h-8 px-3 text-white font-inter text-xs font-regular bg-blue-100 flex flex-row gap-3 rounded-lg hover:cursor-pointer hover:bg-blue-400",
                                  onClick: () =>
                                    w(x, null == r ? void 0 : r.id),
                                  children: [
                                    "Save",
                                    (0, q.jsx)(eF, { className: "w-5 h-5" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, q.jsxs)("div", {
                          className:
                            "w-full md:w-auto font-inter font-regular text-sm leading-[21px] text-gray-300 flex flex-col gap-3 whitespace-pre-wrap",
                          children: [
                            null == n ? void 0 : n.content,
                            s && (0, q.jsx)(eB, { name: o, fileKey: i }),
                          ],
                        }),
                  ],
                }),
              ],
            });
          },
          eq = l(21636),
          eU = l(21373),
          eL = l(84283);
        function eR() {
          return (eR = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eT = function (e) {
            return L.createElement(
              "svg",
              eR(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 12,
                  height: 12,
                  fill: "none",
                },
                e
              ),
              M ||
                (M = L.createElement("path", {
                  fill: "currentColor",
                  d: "M9.102 1.125h1.654l-3.613 4.13 4.25 5.62H8.066L5.458 7.467l-2.983 3.408H.82l3.865-4.417L.607 1.124H4.02l2.356 3.116zm-.58 8.76h.916L3.522 2.063H2.54z",
                }))
            );
          },
          eZ = l(55186),
          eP = l(12371),
          eD = function (e) {
            var t;
            let { message: l } = e,
              n = (0, D.a)("(max-width: 768px)"),
              [r, a] = (0, L.useState)("");
            return (
              (0, L.useEffect)(() => {
                (null == l ? void 0 : l.content) &&
                  a((0, ej.Ci)(null == l ? void 0 : l.content));
              }, [null == l ? void 0 : l.content]),
              (0, q.jsxs)("div", {
                className:
                  "w-full font-inter font-regular text-sm leading-[21px] text-gray-300 text-wrap flex flex-col md:flex-row lg:flex-row gap-y-2 items-start justify-between overflow-x-auto",
                "data-sentry-component": "CodeMessage",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, q.jsxs)("span", {
                    className:
                      "text-gray-300 text-sm flex flex-col gap-2 break-words a:underline a:text-white reactMarkDown",
                    style: { width: n ? "calc(100% - 24px)" : "100%" },
                    children: [
                      (0, q.jsx)(eq.U, {
                        className:
                          "prose text-sm [&>*]:text-sm [&>*]:font-light [&>*]:[&>*]:font-light font-inter flex flex-col [&>*]:w-full w-full  [&>*]:text-gray-300 [&>*]:[&>*]:text-gray-300 [&>*]:bg-transparent [&>*]:leading-[21px]",
                        children: r,
                        remarkPlugins: [eZ.Z],
                        components: {
                          code(e) {
                            let {
                              children: t,
                              className: l,
                              node: n,
                              ...r
                            } = e;
                            return /language-(\w+)/.exec(l || "")
                              ? (0, q.jsx)(eU.Z, {
                                  PreTag: "div",
                                  lineProps: {
                                    style: {
                                      wordBreak: "break-all",
                                      whiteSpace: "pre-wrap",
                                    },
                                  },
                                  wrapLines: !0,
                                  children: String(t).replace(/\n$/, ""),
                                  language: "typescript",
                                  style: {
                                    ...eL.vk,
                                    'pre[class*="language-"]': {
                                      ...(null === eL.vk || void 0 === eL.vk
                                        ? void 0
                                        : eL.vk['pre[class*="language-"]']),
                                      background: "rgb(21 23 40)",
                                    },
                                    'code[class*="language-"]': {
                                      ...(null === eL.vk || void 0 === eL.vk
                                        ? void 0
                                        : eL.vk['code[class*="language-"]']),
                                      background: "rgb(21 23 40)",
                                    },
                                    'code[class*="language-"]::-moz-selection':
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "inherit",
                                        textShadow: "none",
                                      },
                                    'code[class*="language-"] *::-moz-selection':
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "inherit",
                                        textShadow: "none",
                                      },
                                    'pre[class*="language-"] *::-moz-selection':
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "inherit",
                                        textShadow: "none",
                                      },
                                    'code[class*="language-"]::selection': {
                                      background: "rgb(21 23 40)",
                                      color: "inherit",
                                      textShadow: "none",
                                    },
                                    'code[class*="language-"] *::selection': {
                                      background: "rgb(21 23 40)",
                                      color: "inherit",
                                      textShadow: "none",
                                    },
                                    'pre[class*="language-"] *::selection': {
                                      background: "rgb(21 23 40)",
                                      color: "inherit",
                                      textShadow: "none",
                                    },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus":
                                      {
                                        background: "rgb(21 23 40)",
                                        color: "hsl(220, 14%, 71%)",
                                      },
                                  },
                                })
                              : (0, q.jsx)("code", {
                                  ...r,
                                  className: l + " code-backticks",
                                  children: t,
                                });
                          },
                        },
                        "data-sentry-element": "Markdown",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "Markdown",
                      }),
                      (null == l
                        ? void 0
                        : null === (t = l.meta) || void 0 === t
                        ? void 0
                        : t.website_url) &&
                        (0, q.jsx)("div", {
                          className: "flex justify-end w-full",
                          children: (0, q.jsxs)("button", {
                            className:
                              "h-8 rounded-lg px-3 gap-2 flex flex-row items-center bg-primary hover:bg-tertiary text-gray-300 hover:text-white",
                            onClick: () => {
                              var e, t, n;
                              let r = "Hey, I just created "
                                .concat(
                                  null == l
                                    ? void 0
                                    : null === (e = l.meta) || void 0 === e
                                    ? void 0
                                    : e.name,
                                  " ($"
                                )
                                .concat(
                                  null == l
                                    ? void 0
                                    : null === (t = l.meta) || void 0 === t
                                    ? void 0
                                    : t.symbol,
                                  ") using @SpectralLabs Syntax MoonMaker. Check out my website: https://aimemecoins.xyz/"
                                )
                                .concat(
                                  null == l
                                    ? void 0
                                    : null === (n = l.meta) || void 0 === n
                                    ? void 0
                                    : n.name
                                );
                              window.open(
                                "https://twitter.com/intent/tweet?text=".concat(
                                  r
                                ),
                                "_blank"
                              );
                            },
                            children: [
                              (0, q.jsx)(eT, {}),
                              (0, q.jsx)("span", {
                                className:
                                  "font-inter font-normal text-xs no-underline",
                                style: { textDecoration: "none" },
                                children: "Share",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  (null == l ? void 0 : l.bytecode) &&
                    (0, q.jsxs)("span", {
                      className:
                        "text-gray-300 hover:text-white text-sm underline underline-offset-4 cursor-pointer flex items-center gap-x-1",
                      onClick: () => {
                        (0, ej.RB)(null == l ? void 0 : l.bytecode);
                      },
                      children: [
                        "open bytecode",
                        (0, q.jsx)(eP.Z, { size: 16 }),
                      ],
                    }),
                  (null == l ? void 0 : l.hash) &&
                    (0, q.jsxs)("span", {
                      className:
                        "text-gray-300 hover:text-white text-sm underline underline-offset-4 cursor-pointer flex items-center gap-x-1",
                      onClick: () => {
                        window.open(null == l ? void 0 : l.hash, "_blank");
                      },
                      children: [
                        "view onchain",
                        (0, q.jsx)(eP.Z, { size: 16 }),
                      ],
                    }),
                ],
              })
            );
          };
        ((n = B || (B = {})).user = "user"), (n.assistant = "assistant");
        var eG = function (e) {
            var t, l;
            let {
                message: n,
                session: r,
                loading: a,
                canEdit: s = !0,
                isThread: o,
                index: i,
                withFile: c,
                fileName: d,
                fileKey: u,
                sessionAgent: x,
              } = e,
              m = (0, V.useRouter)(),
              { isRightSidebarOpen: f } = (0, P.A)(),
              { loadingMessage: p } = (0, Z.R)();
            return a
              ? (0, q.jsxs)("div", {
                  className: "w-full ".concat(
                    (null == m
                      ? void 0
                      : null === (l = m.pathname) || void 0 === l
                      ? void 0
                      : l.includes("/create-agent")) && !f
                      ? "w-full"
                      : "md:max-w-[800px]",
                    " rounded-2xl backdrop-blur-sm bg-primary/50 flex flex-row p-6 gap-3 relative "
                  ),
                  children: [
                    (null == x ? void 0 : x.id) === R.nA
                      ? (0, q.jsx)(eA, {
                          className:
                            "rounded-full h-6 w-6 flex shrink-0 grow-0",
                        })
                      : (null == x ? void 0 : x.id) === R.dM ||
                        (null == x ? void 0 : x.id) === R.n9 ||
                        (null == x ? void 0 : x.id) === R.HL
                      ? (0, q.jsxs)(q.Fragment, {
                          children: [
                            (null == x ? void 0 : x.id) === R.dM &&
                              (0, q.jsx)(eh.Z, {
                                className:
                                  "rounded-full h-6 w-6 flex shrink-0 grow-0",
                              }),
                            (null == x ? void 0 : x.id) === R.n9 &&
                              (0, q.jsx)(eE, {
                                className:
                                  "rounded-full h-6 w-6 flex shrink-0 grow-0",
                              }),
                            (null == x ? void 0 : x.id) === R.HL &&
                              (0, q.jsx)(e_, {
                                className:
                                  "rounded-full h-6 w-6 flex shrink-0 grow-0",
                              }),
                          ],
                        })
                      : (null == x ? void 0 : x.image)
                      ? (0, q.jsx)("img", {
                          src:
                            (null == x ? void 0 : x.image) ||
                            "/CardImageWrapper.svg",
                          alt: "wrapper",
                          className: "rounded-full h-6 w-6 shrink-0 grow-0",
                          style: {
                            objectFit: "cover",
                            objectPosition: "center",
                          },
                        })
                      : (0, q.jsx)(eh.Z, {
                          className:
                            "rounded-full h-6 w-6 flex shrink-0 grow-0",
                        }),
                    (0, q.jsxs)("div", {
                      className: "flex flex-col items-start gap-4",
                      children: [
                        (0, q.jsxs)("div", {
                          className: "flex flex-row gap-3 items-center",
                          children: [
                            (null == x ? void 0 : x.name) === "Spectral Syntax"
                              ? (0, q.jsx)("span", {
                                  className:
                                    "font-carbon text-green-100 text-lg font-normal mt-[-2px]",
                                  children: "SYNTAX",
                                })
                              : (0, q.jsx)("span", {
                                  className:
                                    "font-inter text-gray-400 text-sm font-regular leading-[18px] ",
                                  children:
                                    (null == x ? void 0 : x.id) === R.nA
                                      ? "MoonMaker"
                                      : (null == x ? void 0 : x.name) ||
                                        "Syntax Agent Builder",
                                }),
                            (0, q.jsx)("div", {
                              className: "bg-gray-200 h-full w-[1px]",
                            }),
                            (0, q.jsx)("span", {
                              className:
                                "font-inter font-regular text-xs text-gray-300",
                              children: n.inserted_at
                                ? (0, ej.uS)(null == n ? void 0 : n.inserted_at)
                                : "Now",
                            }),
                          ],
                        }),
                        (0, q.jsxs)("div", {
                          className: "w-full flex flex-row items-center gap-3",
                          children: [
                            (0, q.jsx)(H.c, { color: "white", size: "sm" }),
                            (0, q.jsx)("span", {
                              className:
                                "text-sm text-gray-300 font-inter font-regular",
                              children:
                                (null == m ? void 0 : m.pathname) ===
                                "/create-agent"
                                  ? p
                                  : "Loading...",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, q.jsx)(q.Fragment, {
                  children:
                    (null == n ? void 0 : n.role) == "user"
                      ? (0, q.jsx)(ez, {
                          message: n,
                          session: r,
                          canEdit: s,
                          withFile: c,
                          fileKey: u,
                          fileName: d,
                        })
                      : (0, q.jsxs)("div", {
                          className: ""
                            .concat(
                              (null == m
                                ? void 0
                                : null === (t = m.pathname) || void 0 === t
                                ? void 0
                                : t.includes("/chat")) && !f
                                ? "md:w-[800px] max-w-full"
                                : "w-full",
                              " backdrop-blur-sm bg-primary/50 flex flex-row p-6 gap-3 relative\n          "
                            )
                            .concat(
                              o && 0 == i
                                ? "rounded-tr-2xl rounded-b-2xl"
                                : "rounded-2xl",
                              "\n          "
                            ),
                          children: [
                            (null == x ? void 0 : x.id) === R.nA
                              ? (0, q.jsx)(eA, {
                                  className:
                                    "rounded-full h-6 w-6 flex shrink-0 grow-0",
                                })
                              : (null == x ? void 0 : x.id) === R.dM ||
                                (null == x ? void 0 : x.id) === R.n9 ||
                                (null == x ? void 0 : x.id) === R.HL
                              ? (0, q.jsxs)(q.Fragment, {
                                  children: [
                                    (null == x ? void 0 : x.id) === R.dM &&
                                      (0, q.jsx)(eh.Z, {
                                        className:
                                          "rounded-full h-6 w-6 flex shrink-0 grow-0",
                                      }),
                                    (null == x ? void 0 : x.id) === R.n9 &&
                                      (0, q.jsx)(eE, {
                                        className:
                                          "rounded-full h-6 w-6 flex shrink-0 grow-0",
                                      }),
                                    (null == x ? void 0 : x.id) === R.HL &&
                                      (0, q.jsx)(e_, {
                                        className:
                                          "rounded-full h-6 w-6 flex shrink-0 grow-0",
                                      }),
                                  ],
                                })
                              : (null == x ? void 0 : x.image)
                              ? (0, q.jsx)("img", {
                                  src:
                                    (null == x ? void 0 : x.image) ||
                                    "/CardImageWrapper.svg",
                                  alt: "wrapper",
                                  className:
                                    "rounded-full h-6 w-6 shrink-0 grow-0",
                                  style: {
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  },
                                })
                              : (0, q.jsx)(eh.Z, {
                                  className:
                                    "rounded-full h-6 w-6 flex shrink-0 grow-0",
                                }),
                            (0, q.jsxs)("div", {
                              className: "flex w-full flex-col gap-4",
                              children: [
                                (0, q.jsxs)("div", {
                                  className:
                                    "flex flex-row gap-3 items-center mt-[3px]",
                                  children: [
                                    (null == x ? void 0 : x.name) ===
                                    "Spectral Syntax"
                                      ? (0, q.jsx)("span", {
                                          className:
                                            "font-carbon text-green-100 text-lg font-normal mt-[-2px]",
                                          children: "SYNTAX",
                                        })
                                      : (0, q.jsx)("span", {
                                          className:
                                            "font-inter text-gray-400 text-sm font-regular leading-[18px] ",
                                          children:
                                            (null == x ? void 0 : x.id) === R.nA
                                              ? "MoonMaker"
                                              : (null == x ? void 0 : x.name) ||
                                                "Syntax Agent Builder",
                                        }),
                                    (0, q.jsx)("div", {
                                      className: "bg-gray-200 h-full w-[1px]",
                                    }),
                                    (0, q.jsx)("span", {
                                      className:
                                        "font-inter font-regular text-xs text-gray-300",
                                      children: n.inserted_at
                                        ? (0, ej.Li)(n.inserted_at)
                                        : "Now",
                                    }),
                                  ],
                                }),
                                (0, q.jsx)(eD, { message: n }),
                              ],
                            }),
                          ],
                        }),
                });
          },
          eH = l(79255),
          eW = function (e) {
            var t, l;
            let { messages: n, session: r } = e,
              [a, s] = (0, L.useState)(!0),
              { threadToUpdate: o } = (0, Z.R)(),
              i = (0, V.useRouter)(),
              c = (0, L.useMemo)(
                () =>
                  o
                    ? null == n
                      ? void 0
                      : n.map((e) =>
                          (null == o ? void 0 : o.id) ===
                          (null == e ? void 0 : e.id)
                            ? o
                            : e
                        )
                    : n,
                [n]
              );
            return (0, q.jsxs)("div", {
              className: "flex ".concat(
                (
                  null == i
                    ? void 0
                    : null === (t = i.pathname) || void 0 === t
                    ? void 0
                    : t.includes("/chat")
                )
                  ? "md:w-[800px]"
                  : "w-full",
                " items-start justify-between pl-4 pt-3 gap-6"
              ),
              "data-sentry-component": "Thread",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, q.jsx)("div", {
                  className:
                    "w-[0.5px] min-h-6 h-full bg-gray-200 relative ".concat(
                      n.length > 1 ? "opacity-100" : "opacity-0"
                    ),
                  children: (0, q.jsx)(eH.e, {
                    content: a ? "Close thread" : "Open thread",
                    color: "primary",
                    placement: "right",
                    "data-sentry-element": "Tooltip",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "Tooltip",
                    children: (0, q.jsx)("div", {
                      onClick: () => s(!a),
                      className:
                        "w-[30px] h-[30px] flex items-center justify-center rounded-full border-[1px] border-solid border-gray-200 cursor-pointer hover:opacity-80 absolute top-[-15px] left-[-15px] bg-primary transition-all ".concat(
                          a ? "rotate-[0deg]" : "rotate-[-90deg]"
                        ),
                      children: (0, q.jsx)(eM.Z, {
                        className: "w-4 h-4",
                        "data-sentry-element": "ChevronDown",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "ChevronDown",
                      }),
                    }),
                  }),
                }),
                (0, q.jsx)("div", {
                  className: "flex flex-col w-full p-2 text-xs",
                  children:
                    null === (l = a ? c : [null == c ? void 0 : c[0]]) ||
                    void 0 === l
                      ? void 0
                      : l.map((e, t) =>
                          (0, q.jsxs)("div", {
                            className: "w-full",
                            children: [
                              (null == e ? void 0 : e.type) === "text" &&
                                (0, q.jsx)(eG, {
                                  message: e,
                                  session: r,
                                  isThread: !0,
                                  index: t,
                                }),
                              (null == e ? void 0 : e.type) === "code" &&
                                (0, q.jsx)(em.dn, {
                                  text: null == e ? void 0 : e.content,
                                  language: "python",
                                  showLineNumbers: !1,
                                  theme: em.cL,
                                }),
                            ],
                          })
                        ),
                }),
              ],
            });
          },
          eV = function (e) {
            var t, l;
            let {
                session: n,
                messages: r,
                isChatLoaded: a,
                setIsChatLoaded: s,
                sessionAgent: o,
              } = e,
              i = (0, V.useRouter)(),
              c = (0, L.useRef)(null),
              { isRightSidebarOpen: d } = (0, P.A)(),
              {
                disabledSendMessage: u,
                loadingMessageData: x,
                getMessagesBySessionHandler: m,
              } = (0, Z.R)(),
              { wallets: f } = (0, Y.rB)(),
              { currentWalletChain: p, userActiveWallet: h } = (0, ew.a)(),
              { switchToBaseChain: g } = ey(),
              [v, w] = (0, L.useState)(!1),
              y = () => {
                setTimeout(() => {
                  var e;
                  return null == c
                    ? void 0
                    : null === (e = c.current) || void 0 === e
                    ? void 0
                    : e.scrollIntoView({ behavior: "smooth" });
                }, 1e3);
              },
              b = (0, L.useMemo)(() => {
                var e;
                return null == r
                  ? void 0
                  : null === (e = r.data) || void 0 === e
                  ? void 0
                  : e.filter(
                      (e) =>
                        (null == e ? void 0 : e.web3_session_id) ===
                        (null == n ? void 0 : n.id)
                    );
              }, [r, n]);
            return ((0, L.useEffect)(() => {
              var e;
              (null == i
                ? void 0
                : null === (e = i.query) || void 0 === e
                ? void 0
                : e.id) === R.nA && g(p, eg.Zk, f, w);
            }, [
              null == i
                ? void 0
                : null === (t = i.query) || void 0 === t
                ? void 0
                : t.id,
            ]),
            (0, L.useEffect)(() => {
              if (r) {
                var e;
                if (a) {
                  y();
                  return;
                }
                null == c ||
                  null === (e = c.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" }),
                  s(!0);
              }
            }, [r, v, a]),
            (0, L.useEffect)(() => {
              if (u) {
                var e;
                null == c ||
                  null === (e = c.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "auto" });
              }
            }, [u]),
            !n || x)
              ? (0, q.jsx)("div", {
                  className: "h-full w-full flex items-center justify-center",
                  children: (0, q.jsx)(H.c, { color: "white" }),
                })
              : (0, q.jsxs)("div", {
                  className:
                    "w-full h-full flex flex-col gap-3 md:mb-10 pb-[56px] md:overflow-y-auto lg:overflow-y-auto justify-start items-center pb-4 px-0 pt-4\n            "
                      .concat(d && "md:px-[96px]", "\n            ")
                      .concat(
                        (null == i ? void 0 : i.pathname) === "/create-agent"
                          ? "md:mb-10 mb-0 md:pb-[2px] -mt-0.5"
                          : "",
                        "\n            "
                      ),
                  "data-sentry-component": "ChatScroller",
                  "data-sentry-source-file": "index.tsx",
                  children: [
                    (0, q.jsxs)("div", {
                      className:
                        "hidden flex flex-row gap-4 items-center w-full max-w-[800px] md:py-6 md:pt-[22px] sticky top-0 z-[50]",
                      children: [
                        (0, q.jsx)("div", {
                          className: "h-[1px] bg-secondary w-full",
                        }),
                        (0, q.jsx)("span", {
                          className:
                            "font-inter font-regular text-xs text-gray-300 shrink-0",
                          children: (0, ej.uS)(
                            null == n ? void 0 : n.inserted_at
                          ),
                        }),
                        (0, q.jsx)("div", {
                          className: "h-[1px] bg-secondary w-full",
                        }),
                      ],
                    }),
                    (null == b ? void 0 : b.length) === 0 &&
                      (null == o ? void 0 : o.id) === R.M4 &&
                      (0, q.jsx)(
                        eG,
                        {
                          message: {
                            content:
                              "Hey there, welcome to Syntax Agent Builder. I'm designed to help you build your own agent with custom behavior.",
                          },
                          session: n,
                          sessionAgent: o,
                        },
                        "message-agent-creator"
                      ),
                    null == b
                      ? void 0
                      : b.map((e, t) => {
                          var l, r, a, s;
                          return (0, q.jsxs)(
                            "div",
                            {
                              className:
                                "w-full max-w-[800px] rounded-2xl ".concat(
                                  (null == e ? void 0 : e.role) !== "user" &&
                                    "border border-gray-200"
                                ),
                              children: [
                                (null == e ? void 0 : e.type) === "text" &&
                                  (0, q.jsx)(
                                    eG,
                                    { message: e, session: n, sessionAgent: o },
                                    "message-".concat(t)
                                  ),
                                (null == e ? void 0 : e.type) === "code" &&
                                  (0, q.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex flex-col p-2 text-xs w-full max-w-[800px]",
                                      children: [
                                        (0, q.jsx)(em.dn, {
                                          text: null == e ? void 0 : e.content,
                                          language: "python",
                                          showLineNumbers: !1,
                                          theme: em.cL,
                                        }),
                                        (null == e
                                          ? void 0
                                          : e.threaded_messages) &&
                                          (null == e
                                            ? void 0
                                            : null ===
                                                (r = e.threaded_messages) ||
                                              void 0 === r
                                            ? void 0
                                            : null ===
                                                (l = r.filter(
                                                  (e) => null !== e
                                                )) || void 0 === l
                                            ? void 0
                                            : l.length) > 0 &&
                                          (0, q.jsx)(
                                            eW,
                                            {
                                              messages:
                                                null == e
                                                  ? void 0
                                                  : null ===
                                                      (a =
                                                        e.threaded_messages) ||
                                                    void 0 === a
                                                  ? void 0
                                                  : a.filter((e) => null !== e),
                                              session: n,
                                            },
                                            null == e ? void 0 : e.id
                                          ),
                                      ],
                                    },
                                    (null == e ? void 0 : e.id) + "-" + t
                                  ),
                                (null == e ? void 0 : e.type) === "file_ref" &&
                                  (0, q.jsx)(
                                    eG,
                                    {
                                      message: { content: "", role: "user" },
                                      session: n,
                                      withFile: !0,
                                      canEdit: !1,
                                      fileName: null == e ? void 0 : e.content,
                                      fileKey:
                                        null == e
                                          ? void 0
                                          : null === (s = e.meta) ||
                                            void 0 === s
                                          ? void 0
                                          : s.key,
                                    },
                                    (null == e ? void 0 : e.id) + "file"
                                  ),
                              ],
                            },
                            (null == e ? void 0 : e.id) + "-" + t
                          );
                        }),
                    u &&
                      (0, q.jsx)(
                        eG,
                        { message: {}, session: n, loading: !0 },
                        "message-loader"
                      ),
                    ((null == i
                      ? void 0
                      : null === (l = i.query) || void 0 === l
                      ? void 0
                      : l.id) === R.nA ||
                      (null == o ? void 0 : o.outputs_transaction)) &&
                      (0, q.jsx)(eb, {
                        sessionAgent: o,
                        setShowNetworkSuggestion: w,
                      }),
                    (0, q.jsx)("div", {
                      ref: c,
                      className:
                        "md:mb-[52px] md:mt-0 mt-8 h-[1px] bg-secondary w-full opacity-0",
                      children: "bottom div",
                    }),
                  ],
                });
          },
          eY = l(2268),
          eK = function (e) {
            var t, l, n, r, a, s;
            let { session: o, messages: i, socket: c } = e,
              d = (0, W.useSearchParams)(),
              u = (0, V.useRouter)(),
              { sendNewMessageThroughSocket: x, newJob: m } = (0, Z.R)(),
              {
                getJobByIdHandler: f,
                currentJob: p,
                getJobsBySessionHandler: h,
              } = (0, eY.t)(),
              {
                currentAgent: g,
                setCurrentAgent: v,
                getAgentByIdHandler: w,
              } = (0, T.k)(),
              {
                isRightSidebarOpen: y,
                setContentType: b,
                setIsRightSidebarOpen: j,
              } = (0, P.A)(),
              N = (0, D.a)("(max-width: 768px)"),
              E = [
                "What is the circulating supply of BTC?",
                'Write me the logic for creating tic tac toe onchain. Name this contract "The tic tac toe game"',
                'Create me a meme coin ERC20 that has 100,000,000 tokens minted on launch, name of the token is "aimemecoin" and the ticket is "AIMC"',
              ],
              [k, _] = (0, L.useState)(0),
              [C, A] = (0, L.useState)(!1),
              [S, O] = (0, L.useState)(E),
              [I, F] = (0, L.useState)(),
              { userData: M } = (0, ew.a)();
            return ((0, L.useEffect)(() => {
              var e;
              _(
                null == i
                  ? void 0
                  : null === (e = i.data) || void 0 === e
                  ? void 0
                  : e.length
              );
            }, [i]),
            (0, L.useEffect)(() => {
              let e = async () => {
                F(await w(R.M4));
              };
              if (!g && (null == u ? void 0 : u.pathname) === "/create-agent") {
                e();
                return;
              }
              F(g);
            }, [g]),
            (0, L.useEffect)(() => {
              if ((A(!1), (null == I ? void 0 : I.id) === R.dM && I)) {
                O(E);
                return;
              }
              if (I) {
                var e;
                if (
                  (null == I
                    ? void 0
                    : null === (e = I.conversation_templates) || void 0 === e
                    ? void 0
                    : e.length) > 3
                ) {
                  O(null == I ? void 0 : I.conversation_templates.slice(0, 3));
                  return;
                }
                O((null == I ? void 0 : I.conversation_templates) || []);
                return;
              }
            }, [o, I]),
            (0, L.useEffect)(() => {
              let e = async () => {
                  await f(null == m ? void 0 : m.id), y || (j(!0), b("jobs"));
                },
                t = async () => {
                  for (let e = 0; e < 5; e++)
                    await h(null == o ? void 0 : o.id),
                      await new Promise((e) => setTimeout(e, 3e3));
                };
              (null == m ? void 0 : m.id) && (e(), t());
            }, [null == m ? void 0 : m.id]),
            (0, L.useEffect)(() => {
              (null == d ? void 0 : d.get("prompt")) &&
                o &&
                x(null == d ? void 0 : d.get("prompt"));
            }, [null == d ? void 0 : d.get("prompt"), o]),
            o &&
              (g ||
                (null == u
                  ? void 0
                  : null === (t = u.pathname) || void 0 === t
                  ? void 0
                  : t.includes("/create-agent"))))
              ? (0, q.jsxs)("div", {
                  className:
                    "flex w-full flex-col justify-between relative z-[0]",
                  style: {
                    height: "".concat(
                      u.pathname.includes("/chat")
                        ? "calc(100vh - ".concat(N ? "156" : "120", "px)")
                        : N
                        ? "98%"
                        : "100%"
                    ),
                  },
                  "data-sentry-component": "Chat",
                  "data-sentry-source-file": "index.tsx",
                  children: [
                    (0, q.jsxs)("div", {
                      className:
                        "flex flex-col h-full w-auto md:w-full justify-between items-center overflow-y-auto md:mb-0  ".concat(
                          N && "no-scrollbar",
                          " "
                        ),
                      style: { height: "calc(100vh-800px)" },
                      children: [
                        (0, q.jsx)(eV, {
                          session: o,
                          messages: i,
                          isChatLoaded: C,
                          setIsChatLoaded: A,
                          sessionAgent: I,
                          "data-sentry-element": "ChatScroller",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ChatScroller",
                        }),
                        (null == i
                          ? void 0
                          : null === (l = i.data) || void 0 === l
                          ? void 0
                          : l.length) < 2 &&
                          (null == o ? void 0 : o.agent) !== R.nA &&
                          (0, q.jsx)("div", {
                            className: "flex-row flex-wrap gap-2 "
                              .concat(
                                G,
                                " w-full md:max-w-[820px] md:mb-[88px] mb-2 md:px-[7px]\n              "
                              )
                              .concat(
                                (
                                  null == u
                                    ? void 0
                                    : null === (n = u.pathname) || void 0 === n
                                    ? void 0
                                    : n.includes("/chat")
                                )
                                  ? "flex"
                                  : "hidden",
                                "\n              "
                              ),
                            children: S.map((e) =>
                              (0, q.jsx)(
                                "div",
                                {
                                  className:
                                    "max-w-[802px] py-[6px] px-3 rounded-lg border border-solid border-secondary hover:cursor-pointer text-gray-300 hover:border-gray-600 hover:text-white transition-all",
                                  onClick: () => x(e),
                                  children: (0, q.jsx)("span", {
                                    className:
                                      "font-inter text-sm font-regular",
                                    children: e,
                                  }),
                                },
                                e + S
                              )
                            ),
                          }),
                      ],
                    }),
                    (0, q.jsx)("div", {
                      className: "".concat(
                        (
                          null == u
                            ? void 0
                            : null === (r = u.pathname) || void 0 === r
                            ? void 0
                            : r.includes("/chat")
                        )
                          ? "absolute lg:absolute"
                          : "relative px-0",
                        " md:flex lg:flex absolute lg:absolute md:left-[0px] md:bottom-0 bottom-[-10px] w-full items-center justify-center "
                      ),
                      children: (0, q.jsxs)("div", {
                        className: "w-full max-w-[801px] "
                          .concat(G, " flex flex-col ")
                          .concat(y && "mx-[96px]"),
                        children: [
                          (0, q.jsx)(ex, {
                            disabled: !1,
                            session: o,
                            placeholder:
                              (null == u
                                ? void 0
                                : null === (a = u.query) || void 0 === a
                                ? void 0
                                : a.id) === R.n9
                                ? "Upload a file, or paste your solidity code here"
                                : "Write your message...",
                            "data-sentry-element": "AgentInput",
                            "data-sentry-source-file": "index.tsx",
                            "data-sentry-element": "AgentInput",
                          }),
                          (0, q.jsxs)("span", {
                            className:
                              "w-full text-center text-gray-300 text-xs font-inter font-regular ".concat(
                                (!(null == u
                                  ? void 0
                                  : null === (s = u.pathname) || void 0 === s
                                  ? void 0
                                  : s.includes("/chat")) ||
                                  N) &&
                                  "hidden",
                                " "
                              ),
                            children: [
                              "Syntax may make mistakes, please review information before deploying onchain. For more details, please refer to our",
                              " ",
                              (0, q.jsx)("a", {
                                href: "https://www.spectrallabs.xyz/terms-of-use.html",
                                target: "_blank",
                                className:
                                  "text-gray-300 underline underline-offset-1",
                                children: "Terms of Use",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : (0, q.jsx)("div", {
                  className: "h-full w-full flex items-center justify-center",
                  children: (0, q.jsx)(H.c, { color: "white" }),
                });
          };
        function eX() {
          return (eX = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var n in l)
                    Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
                }
                return e;
              }).apply(this, arguments);
        }
        var eJ = function (e) {
            return L.createElement(
              "svg",
              eX(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              z ||
                (z = L.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M6.333 10.664a1.94 1.94 0 0 0-.881-.976 1.97 1.97 0 0 0-2.441.472 1.93 1.93 0 0 0-.446 1.233 1.44 1.44 0 0 1-.465 1.061 1.47 1.47 0 0 1-1.1.39c.322.554.82.988 1.417 1.234.597.245 1.259.289 1.883.124a2.94 2.94 0 0 0 1.57-1.039 2.9 2.9 0 0 0 .606-1.77c0-.258-.05-.504-.143-.729m0 0A10.5 10.5 0 0 0 8.54 9.617m-3.287-.016c.264-.77.619-1.506 1.057-2.193m2.23 2.21a10.4 10.4 0 0 0 3.105-3.004l2.527-3.756a.74.74 0 0 0-.093-.94.75.75 0 0 0-.948-.092l-3.79 2.505A10.4 10.4 0 0 0 6.31 7.41a4.4 4.4 0 0 1 2.23 2.21",
                }))
            );
          },
          e$ = l(19293),
          eQ = l(93463),
          e0 = function (e) {
            let {
                value: t,
                setValue: l,
                placeholder: n,
                isTextArea: r,
                isDisabled: a,
                height: s,
                className: o,
                ...i
              } = e,
              c = (e) => {
                l(e.target.value);
              };
            return r
              ? (0, q.jsx)(eQ.Z, {
                  placeholder: n,
                  className:
                    "focus:outline-none p-3 pl-4 rounded-lg h-max-[200px] grow border border-solid border-secondary grow "
                      .concat(
                        !a && "hover:border-gray-600",
                        "  bg-gray-200 placeholder:text-gray-300 focus:placeholder:text-transparent placeholder:md:text-xs md:text-xs placeholder:text-base text-base text-white font-regular resize-none transition-all ease-in-out scrollbar-hide focus:transition-none "
                      )
                      .concat(o),
                  style: { height: s || 80 },
                  value: t,
                  onChange: c,
                  disabled: a,
                })
              : (0, q.jsx)("textarea", {
                  ...i,
                  placeholder: n,
                  className:
                    "focus:outline-none p-3 pl-4 h-[40px] max-h-20 rounded-lg border border-solid border-secondary "
                      .concat(!a && "hover:border-gray-600", " ")
                      .concat(
                        (!t || (null == t ? void 0 : t.length) < 70) && "h-10",
                        " bg-transparent focus:placeholder:text-transparent placeholder:text-gray-300 placeholder:md:text-xs md:text-xs placeholder:text-base text-base text-white font-regular resize-none transition-all ease-in-out scrollbar-hide border-b focus:transition-none "
                      )
                      .concat(o),
                  style: { height: s || 40 },
                  value: t,
                  onChange: c,
                  disabled: a,
                });
          },
          e1 = l(25675),
          e2 = l.n(e1),
          e3 = l(16987),
          e4 = l(36123),
          e6 = function (e) {
            let { imageUrl: t, setImageUrl: l, setImageFile: n, size: r } = e,
              a = (0, e4.p)(),
              s = (0, L.useRef)(null);
            return (0, q.jsxs)("div", {
              className: "relative w-max",
              "data-sentry-component": "ImageInput",
              "data-sentry-source-file": "index.tsx",
              children: [
                t
                  ? (0, q.jsx)("div", {
                      className: "relative rounded-full overflow-hidden",
                      style: { height: r, width: r },
                      children: (0, q.jsx)(e2(), {
                        src: t,
                        alt: "image",
                        className: "rounded-full",
                        layout: "fill",
                        objectFit: "cover",
                      }),
                    })
                  : (0, q.jsx)("div", {
                      className: "relative rounded-full overflow-hidden",
                      style: { height: r, width: r },
                      children: (0, q.jsx)(e2(), {
                        src: e3.Z,
                        alt: "image",
                        layout: "fill",
                        objectFit: "cover",
                      }),
                    }),
                (0, q.jsxs)("label", {
                  className:
                    "absolute rounded-full bottom-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer z-[20]",
                  style: { height: r, width: r },
                  children: [
                    (0, q.jsx)("span", {
                      className:
                        "font-inter font-xs font-regular underline underline-offset-2 text-white decoration-1",
                      children: "edit",
                    }),
                    (0, q.jsx)("input", {
                      ref: s,
                      type: "file",
                      accept: "image/webp, image/jpeg, image/png",
                      onChange: (e) => {
                        if (e.target.files && e.target.files[0]) {
                          let t = e.target.files[0];
                          if (
                            !["image/webp", "image/jpeg", "image/png"].includes(
                              t.type
                            )
                          ) {
                            a(
                              "error",
                              "Only webp, jpg, jpeg, and png files are allowed."
                            ),
                              s.current && (s.current.value = "");
                            return;
                          }
                          if (t.size > 1048576) {
                            a("error", "The file size cannot exceed 1 MB", 3e3),
                              s.current && (s.current.value = "");
                            return;
                          }
                          l(URL.createObjectURL(t)), n(t);
                        }
                        s.current && (s.current.value = "");
                      },
                      className: "absolute inset-0 opacity-0 cursor-pointer",
                    }),
                  ],
                }),
              ],
            });
          },
          e5 = function () {
            let {
                agentName: e,
                agentSymbol: t,
                initialPurchaseAmount: l,
                setAgentName: n,
                setAgentSymbol: r,
                setInitialPurchaseAmount: a,
                setFile: s,
              } = (0, e$.E)(),
              o = (0, D.a)("(max-width: 768px)"),
              [i, c] = (0, L.useState)(void 0),
              d = o ? 45 : 40;
            return (0, q.jsxs)("div", {
              className:
                "md:w-auto w-full shrink-0 flex flex-col gap-3 font-inter md:pt-0 pt-10 snap-x md:text-xs text-base",
              "data-sentry-component": "AgentBuilderForms",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, q.jsxs)("div", {
                  className:
                    "flex md:flex-row md:items-end items-center flex-col md:gap-2 gap-4 w-full",
                  children: [
                    (0, q.jsx)(e6, {
                      imageUrl: i,
                      setImageUrl: c,
                      setImageFile: s,
                      size: o ? "96px" : "48px",
                      "data-sentry-element": "ImageInput",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "ImageInput",
                    }),
                    (0, q.jsxs)("div", {
                      className: "flex flex-col gap-2 grow md:w-auto w-full",
                      children: [
                        (0, q.jsx)("span", {
                          className: "text-lightTitles font-normal",
                          children: "Name*",
                        }),
                        (0, q.jsx)(e0, {
                          maxLength: 15,
                          placeholder: "Enter agent name",
                          value: e,
                          setValue: n,
                          height: d,
                          "data-sentry-element": "Input",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "Input",
                        }),
                      ],
                    }),
                    (0, q.jsxs)("div", {
                      className: "flex flex-col gap-2 grow md:w-auto w-full",
                      children: [
                        (0, q.jsx)("span", {
                          className: "text-lightTitles font-normal",
                          children: "Ticker*",
                        }),
                        (0, q.jsx)(e0, {
                          maxLength: 6,
                          placeholder: "Enter symbol",
                          value: t,
                          setValue: (e) => {
                            r(e.replace(/[^A-Za-z0-9]/g, ""));
                          },
                          height: d,
                          style: { textTransform: "uppercase" },
                          "data-sentry-element": "Input",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "Input",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, q.jsxs)("div", {
                  className: "flex flex-col gap-2 mt-1.5",
                  children: [
                    (0, q.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        (0, q.jsx)("span", {
                          className: "text-lightTitles font-normal",
                          children: "How many tokens would you like to buy?",
                        }),
                        (0, q.jsx)("span", {
                          className: "text-gray-300 font-regular",
                          children:
                            "The total supply is fixed at 1B tokens. You can buy between 100K (minimum) and 10M (maximum)  tokens, capped at 1% of supply. (1% =~ 50 SPEC)",
                        }),
                      ],
                    }),
                    (0, q.jsx)("input", {
                      className:
                        "focus:outline-none bg-transparent p-3 pl-4 md:h-10 h-[45px] max-h-20 rounded-lg border border-solid border-secondary focus:placeholder:text-transparent placeholder:text-gray-300 placeholder:md:text-xs md:text-xs placeholder:text-base text-base text-white font-regular resize-none transition-all ease-in-out scrollbar-hide border-b focus:transition-none",
                      onChange: (e) => a(e.target.value),
                      type: "number",
                      placeholder: "Enter amount",
                    }),
                  ],
                }),
              ],
            });
          },
          e8 = l(20970),
          e7 = l(45712),
          e9 = function () {
            var e;
            let [t, l] = (0, L.useState)(1),
              [n, r] = (0, L.useState)(null),
              { messagesBySession: a, builderSession: s } = (0, Z.R)(),
              {
                deployAgent: o,
                loadingAgentCreation: i,
                disableAgentCreation: c,
                resetForm: d,
                agentName: u,
                agentSymbol: x,
                initialPurchaseAmount: m,
              } = (0, e$.E)(),
              f = (0, D.a)("(max-width: 768px)"),
              p = (0, e4.p)(),
              h = (0, L.useMemo)(() => a, [a]),
              g = (0, L.useRef)(),
              v = (e) => {
                g.current.scrollLeft = e;
              };
            return (
              (0, L.useEffect)(() => {
                if (1 === t) {
                  v(0);
                  return;
                }
                v(window.screen.width);
              }, [
                null == g
                  ? void 0
                  : null === (e = g.current) || void 0 === e
                  ? void 0
                  : e.scrollLeft,
                t,
              ]),
              (0, L.useEffect)(
                () => (
                  v(0),
                  () => {
                    d();
                  }
                ),
                []
              ),
              (0, q.jsxs)("div", {
                className:
                  "md:max-w-[574px] w-full h-full shrink-0 flex flex-col items-center mx-auto relative pt-8",
                "data-sentry-component": "AgentBuilder",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, q.jsx)("div", {
                    className:
                      "md:hidden flex flex-col gap-[10px] w-screen absolute top-[16px] z-[20] bg-dark-50",
                    children:
                      2 == t
                        ? (0, q.jsx)(q.Fragment, {
                            children: (0, q.jsxs)("div", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, q.jsxs)("button", {
                                  className:
                                    "h-[45px] p-3 bg-tertiary flex flex-row grow max-w-[145px] items-center justify-center text-white",
                                  onClick: () => l(1),
                                  children: [
                                    (0, q.jsx)(e8.Z, { size: 20 }),
                                    (0, q.jsx)("span", {
                                      className:
                                        "font-regular text-base font-inter",
                                      children: "Back",
                                    }),
                                  ],
                                }),
                                (0, q.jsxs)("button", {
                                  className:
                                    "h-[45px] p-3 bg-blue-100 flex flex-row grow items-center justify-center text-white disabled:opacity-50",
                                  onClick: o,
                                  disabled: c || i,
                                  children: [
                                    (0, q.jsx)("span", {
                                      className:
                                        "font-regular text-base font-inter",
                                      children: "Deploy",
                                    }),
                                    (0, q.jsx)(e7.Z, { size: 20 }),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : (0, q.jsxs)("button", {
                            className:
                              "h-[45px] p-3 bg-blue-100 flex flex-row grow items-center justify-center text-white disabled:opacity-50",
                            onClick: () => l(2),
                            disabled: !u || !x,
                            children: [
                              (0, q.jsx)("span", {
                                className: "font-regular text-base font-inter",
                                children: "Next",
                              }),
                              (0, q.jsx)(e7.Z, { size: 20 }),
                            ],
                          }),
                  }),
                  (0, q.jsxs)("div", {
                    className:
                      "md:w-full w-full flex md:flex-col flex-row md:gap-0 gap-8 overflow-hidden snap-center overflow-y-auto scrollbar-hide ",
                    style: { height: "calc(100vh - 64px)" },
                    ref: g,
                    children: [
                      (0, q.jsx)(e5, {
                        "data-sentry-element": "AgentBuilderForms",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "AgentBuilderForms",
                      }),
                      (0, q.jsxs)("div", {
                        className:
                          "flex flex-col md:gap-0 gap-4 w-full shrink-0 pt-3 mt-4 md:mt-0",
                        children: [
                          (0, q.jsx)("div", {
                            className:
                              "flex md:h-12 h-[68px] flex-row border-b border-solid border-gray-200 font-inter font-normal text-xs text-gray-300 shrink-0",
                            children: (0, q.jsxs)("div", {
                              className:
                                "w-1/2.5 py-3 px-3 flex flex-row md:justify-normal justify-center items-center gap-1 md:rounded-none mb-0 transition-all ease-in-out hover:text-lightTitles cursor-pointer shrink-0 md:mt-[1px] md:bg-transparent text-lightTitles border-b border-solid border-blue-100",
                              children: [
                                (0, q.jsx)("div", {
                                  className: "flex flex-row items-center gap-2",
                                  children: (0, q.jsx)(eJ, {
                                    "data-sentry-element": "BrushIcon",
                                    "data-sentry-source-file": "index.tsx",
                                    "data-sentry-element": "BrushIcon",
                                  }),
                                }),
                                (0, q.jsx)("span", {
                                  children: "Build Your Agent's Personality",
                                }),
                              ],
                            }),
                          }),
                          (0, q.jsx)("div", {
                            className:
                              "w-full shrink-0 flex h-auto flex-row gap-1 grow snap-x scrollbar-hide scroll-smooth",
                            children: (0, q.jsx)("div", {
                              className: "".concat(
                                2 != t && f ? "hidden" : "flex",
                                " md:w-full w-full md:h-[calc(100vh-475px)] grow shrink-0 relative snap-center md:pt-0 pt-2"
                              ),
                              children: (0, q.jsx)(eK, {
                                socket: n,
                                session: s,
                                messages: h,
                                "data-sentry-element": "Chat",
                                "data-sentry-source-file": "index.tsx",
                                "data-sentry-element": "Chat",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, q.jsxs)("div", {
                    className:
                      " w-full md:max-w-[574px] flex flex-col md:gap-4 gap-2 md:-mt-4",
                    children: [
                      (0, q.jsxs)("button", {
                        className:
                          "h-8 w-full md:flex hidden flex-row gap-1 items-center justify-center rounded-lg px-3 bg-blue-100 ".concat(
                            i || c
                              ? "text-white/50"
                              : "hover:bg-blue-400 cursor-pointer text-white",
                            " font-inter font-normal text-xs shrink-0"
                          ),
                        onClick: () => {
                          if (x.length < 3) {
                            p(
                              "error",
                              "Ticker should be at least 3 characters.",
                              3e3
                            );
                            return;
                          }
                          o();
                        },
                        disabled: c || i,
                        children: [
                          "Deploy",
                          (0, q.jsx)(e7.Z, {
                            size: 12,
                            "data-sentry-element": "ArrowRight",
                            "data-sentry-source-file": "index.tsx",
                            "data-sentry-element": "ArrowRight",
                          }),
                        ],
                      }),
                      (0, q.jsx)("span", {
                        className: "".concat(
                          f && 2 !== t ? " hidden" : "flex",
                          " md:w-[704px] w-full text-center font-inter font-regular text-gray-800 text-xs md:pt-0 pt-2"
                        ),
                        children:
                          "Includes 0.01 ETH launch fee, that covers liquidity, initial trading funds for your agent, and a service fee.",
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          te = l(13390),
          tt = function () {
            return (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(te.H, {
                  "data-sentry-element": "SEO",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "SEO",
                }),
                (0, q.jsx)(U.Z, {
                  title: "Create New Agent",
                  "data-sentry-element": "AgentsLayout",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "AgentsLayout",
                  children: (0, q.jsx)(e9, {
                    "data-sentry-element": "AgentBuilder",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "AgentBuilder",
                  }),
                }),
              ],
            });
          };
      },
    },
    function (e) {
      e.O(
        0,
        [2445, 5082, 8504, 2079, 4424, 9172, 2215, 7729, 2888, 9774, 179],
        function () {
          return e((e.s = 51541));
        }
      ),
        (_N_E = e.O());
    },
  ]);