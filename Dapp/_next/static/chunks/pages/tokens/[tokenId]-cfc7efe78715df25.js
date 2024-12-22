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
      (e._sentryDebugIds[t] = "95f7330f-3904-4585-bbe5-8b12cf110e88"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-95f7330f-3904-4585-bbe5-8b12cf110e88"));
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
        (e._sentryDebugIds[t] = "95f7330f-3904-4585-bbe5-8b12cf110e88"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-95f7330f-3904-4585-bbe5-8b12cf110e88"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4245],
    {
      83824: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/tokens/[tokenId]",
          function () {
            return n(24889);
          },
        ]);
      },
      24889: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return td;
            },
          });
        var a,
          r,
          s,
          l,
          i,
          o,
          d,
          c,
          u,
          m,
          p,
          x,
          y,
          h,
          f,
          g = n(85893),
          v = n(22215);
        function b(e) {
          let { children: t } = e;
          return (0, g.jsx)("div", {
            className: "h-max w-full max-w-[854px] mx-auto pt-10",
            "data-sentry-component": "ContentContainer",
            "data-sentry-source-file": "index.tsx",
            children: t,
          });
        }
        var w = n(67294),
          j = n(62001),
          C = n(10777),
          N = n(13926);
        let k = (e, t) => {
            let { contract_address: n, resolution: a, from: r, to: s } = e;
            return (0, C.a)({
              ...t,
              queryKey: ["historicalPrice", n, r, s, a],
              queryFn: async () => (0, N.wL)(e),
              enabled: !!n,
              refetchOnMount: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              retry: 4,
              retryDelay: 15e3,
            });
          },
          T = function (e, t) {
            let n,
              a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (((t = Number(t)), "bigint" == typeof e))
              return e * 10n ** BigInt(t);
            if ("number" == typeof e) {
              if (String(e).includes("e")) {
                let t = String(e - Math.floor(e)),
                  a = Math.max(0, t.length - 2);
                if (t.includes("e")) {
                  let e = t.replace(/^(\d+)(?:\.(\d+))?e.+$/, "$1$2").length;
                  a = Math.abs(+t.match(/^[\.\d]+e(-\d+)$/)[1]) + e - 1;
                }
                n = Number(e).toFixed(a);
              } else (n = String(e)).includes(".") || (n += ".");
            } else if ("string" != typeof e) return 0n;
            else if (((n = e), !e.includes(".")))
              return BigInt(e) * 10n ** BigInt(t);
            let [r, s] = n.split(".");
            s = s.replace(/0+$/, "");
            let l = BigInt(r) * 10n ** BigInt(t);
            if (s)
              try {
                let e = t - s.length;
                l +=
                  BigInt(s.substr(0, s.length + e)) *
                  10n ** BigInt(a ? Math.max(e, 0) : e);
              } catch (e) {
                throw Error("Number has more decimals than the Token");
              }
            return l;
          },
          _ = (e, t) => {
            try {
              t = Number(t);
              let n = BigInt(e).toString();
              if (Number(t) > n.length)
                return ("0." + "0".repeat(Number(t) - n.length) + n)
                  .replace(/0+$/, "")
                  .replace(/\.$/, "");
              return (
                (n.substr(0, n.length - Number(t)) || 0) +
                "." +
                n.substr(-Number(t)).replace(/0+$/, "")
              ).replace(/\.$/, "");
            } catch (e) {
              return;
            }
          };
        var S = n(34863),
          E = n(72657);
        let M = [
            { key: "15m", label: "15m", value: "15", tf: 900 },
            { key: "30m", label: "30m", value: "30", tf: 1800 },
            { key: "1h", label: "1h", value: "60", tf: 3600 },
            { key: "1d", label: "1d", value: "D", tf: 86400 },
            { key: "1w", label: "1w", value: "W", tf: 604800 },
          ],
          { format: I } = new Intl.DateTimeFormat("en-us", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !0,
          }),
          { format: D } = new Intl.DateTimeFormat("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          z = "#EBEEF312",
          F = {
            localization: {
              locale: "en-us",
              priceFormatter: (e) => String((0, E.T4)(e, "4")),
            },
            layout: {
              textColor: "rgba(255, 255, 255, 0.5)",
              background: { type: "solid", color: "transparent" },
              fontSize: 13,
              fontFamily: "Inter",
            },
            grid: { vertLines: { color: z }, horzLines: { color: z } },
            rightPriceScale: {
              borderColor: "#CFD5DF40",
              scaleMargins: { top: 0.1, bottom: 0.1 },
            },
            crosshair: {
              mode: 1,
              vertLine: {
                color: "#2388ff",
                style: 2,
                labelBackgroundColor: "#2388ff",
              },
              horzLine: {
                color: "#2388ff",
                style: 2,
                labelBackgroundColor: "#2962FF",
              },
            },
            timeScale: {
              borderColor: z,
              timeVisible: !0,
              secondsVisible: !1,
              tickMarkMaxCharacterLength: 10,
              tickMarkFormatter: (e, t) => {
                let n = new Date(1e3 * +e);
                return 3 === t ? I(n) : D(n);
              },
            },
          },
          B = {
            upColor: "#26a69a",
            wickUpColor: "#26a69a",
            downColor: "#ef5350",
            wickDownColor: "#ef5350",
            borderVisible: !1,
            priceFormat: { type: "price", precision: 9, minMove: 1e-9 },
          },
          L = (e) => +_(e, 18);
        var O = (e) => {
            let {
              pair: t,
              tokenAddress: n,
              tokenCreation: a,
              tokenFeed: r,
              onLastCloseValue: s,
            } = e;
            a = Math.floor(+new Date(a) / 1e3);
            let [l, i] = (0, w.useState)("1h"),
              o = (0, w.useRef)(null),
              d = (0, w.useRef)(null),
              c = M.find((e) => e.key === l);
            (0, w.useEffect)(() => {
              if (!r.channel) return;
              let e = r.channel.on("real_time_ticker", (e) => {
                let {
                  data: { c: t, t: n },
                } = e;
                if (0 == (t = +_(t, 18))) return;
                let a = d.current;
                if (!a) return;
                a.fillUntilNow();
                let r = a.data.find((e) => {
                  let { time: t } = e;
                  return t <= n && n < +t + a.tf;
                });
                if (!r)
                  return console.warn(
                    "[real_time_ticker] Point not found with time:",
                    n
                  );
                Object.assign(r, {
                  open: r.open,
                  close: t,
                  high: Math.max(r.high, t),
                  low: Math.min(r.low, t),
                }),
                  a.update();
              });
              return () => {
                var t;
                null === (t = r.channel) ||
                  void 0 === t ||
                  t.off("real_time_ticker", e);
              };
            }, [r.channel]);
            let {
              data: u,
              isLoading: m,
              error: p,
            } = k({
              contract_address: n,
              resolution: null == c ? void 0 : c.value,
              from: a,
              to: (0, w.useMemo)(() => {
                var e;
                return null === (e = Math.floor(Date.now() / 1e3)) ||
                  void 0 === e
                  ? void 0
                  : e.toString();
              }, [null == c ? void 0 : c.key]),
            });
            return ((0, w.useEffect)(() => {
              if (!u || !o.current) return;
              let e = (0, j.C2)(o.current, F),
                t = e.addCandlestickSeries(B);
              if (!u.t.length) return;
              let n = [],
                a = u.t[0],
                r = 0,
                l = function () {
                  let e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  r && (r = n[n.length - 1].close);
                  let t = u.t.length;
                  for (; a < Date.now() / 1e3; ) {
                    let e = u.t.indexOf(a),
                      s = a;
                    -1 !== e
                      ? (t--,
                        (r = L(u.c[e])),
                        n.push({
                          time: s,
                          open: L(u.o[e]),
                          high: L(u.h[e]),
                          low: L(u.l[e]),
                          close: r,
                        }))
                      : n.push({ time: s, open: r, high: r, low: r, close: r }),
                      (a += c.tf);
                  }
                  t &&
                    e &&
                    console.warn(
                      "[real_time_ticker]",
                      t,
                      "points missed from",
                      u.t.length
                    );
                },
                i = function () {
                  var a, r;
                  let l =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  t.setData(n),
                    null == s ||
                      s(
                        null === (a = n[n.length - 1]) || void 0 === a
                          ? void 0
                          : a.close
                      ),
                    l &&
                      e
                        .timeScale()
                        .setVisibleRange({
                          from:
                            (null === (r = n[n.length - 1 - 80]) || void 0 === r
                              ? void 0
                              : r.time) || 0,
                          to: n[n.length - 1].time,
                        });
                },
                m = () => {
                  if (!o.current) return;
                  let { height: t, width: n } =
                    o.current.getBoundingClientRect();
                  e.applyOptions({ height: t, width: n });
                };
              l(!0),
                m(),
                i(!0),
                (d.current = {
                  chart: e,
                  series: t,
                  fillUntilNow: l,
                  data: n,
                  update: i,
                  tf: c.tf,
                });
              let p = new ResizeObserver(m);
              p.observe(o.current), window.addEventListener("resize", m);
              let x = setInterval(() => {
                l(), i();
              }, 1e4);
              return () => {
                window.removeEventListener("resize", m),
                  p.disconnect(),
                  clearInterval(x),
                  e.remove();
              };
            }, [u]),
            m)
              ? (0, g.jsx)(S.c, {
                  color: "white",
                  size: "md",
                  className: "w-full h-full",
                })
              : p
              ? (0, g.jsx)("div", {
                  className: "flex items-center justify-center h-full text-sm",
                  children: "Error loading chart data",
                })
              : (0, g.jsxs)("div", {
                  className:
                    "flex flex-col rounded-lg py-2 w-full h-full relative",
                  "data-sentry-component": "RealtimeChart",
                  "data-sentry-source-file": "index.tsx",
                  children: [
                    (0, g.jsxs)("div", {
                      className:
                        "px-6 py-2 flex justify-between items-center border-b border-[#23263b] w-full flex-wrap gap-2",
                      children: [
                        (0, g.jsx)("div", {
                          className: "text-[#d1d4dc] text-semibold text-md",
                          children: t,
                        }),
                        (0, g.jsx)("div", {
                          className: "flex items-center",
                          children: (0, g.jsx)("div", {
                            className: "flex items-center gap-4",
                            children: M.map((e) =>
                              (0, g.jsx)(
                                "button",
                                {
                                  onClick: () => i(e.key),
                                  className: "text-xs py-1 ".concat(
                                    l === e.key
                                      ? "text-white"
                                      : "text-white/50 hover:text-white"
                                  ),
                                  children: e.label,
                                },
                                e.key
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, g.jsx)("div", {
                      ref: o,
                      className: "w-full h-full flex-1",
                    }),
                  ],
                });
          },
          P = n(25675),
          A = n.n(P),
          H = n(81275),
          U = n(80106),
          $ = n(81423),
          R = n(92526),
          Z = n(75751),
          q = n(41442),
          W = n(62599),
          V = n(16693),
          K = n(51973),
          G = n(87314),
          Y = n(67971),
          X = n(36123);
        let Q = (e, t) =>
            (0, w.useMemo)(() => {
              if (0n === e) return 0;
              if (e && t) {
                let n = _(e, t);
                if (isNaN(Number(n))) return;
                return n;
              }
            }, [e, t]),
          J = (e, t) => {
            let n = { address: e, abi: V.Wo },
              { address: a } = (0, G.m)(),
              { writeContractAsync: r } = (0, R.S)(),
              s = (0, Z.m)(),
              { watchAssetAsync: l } = (0, Y.d)(),
              i = (0, X.p)(),
              { data: o } = (0, q.u)({
                ...n,
                functionName: "decimals",
                args: [],
              }),
              { data: d } = (0, q.u)({
                ...n,
                functionName: "symbol",
                args: [],
              }),
              { data: c, refetch: u } = (0, q.u)({
                ...n,
                functionName: "balanceOf",
                args: [a],
              }),
              { data: m, refetch: p } = (0, q.u)({
                ...n,
                functionName: "allowance",
                args: [a, t],
              }),
              x = (0, w.useCallback)(
                async function (e) {
                  let a =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!Number(e))
                    throw "[useErc20Balance] Allowance not provided.";
                  if (!t) throw "[useErc20Balance] Spender not defined.";
                  if ((m || 0n) < e) {
                    let l = i("loading", "Please approve spending cap");
                    try {
                      let i = await r({
                        ...n,
                        functionName: "approve",
                        args: [t, e],
                      });
                      if (
                        (l.update(
                          "loading",
                          "Waiting for spending limit approval confirmation..."
                        ),
                        s)
                      )
                        try {
                          await (0, K.e)(s, {
                            hash: i,
                            confirmations: 12,
                            timeout: 3e4,
                          });
                        } catch (e) {}
                      l.update(
                        a ? "success" : "info",
                        "Spending limit approved successfully!",
                        3e3
                      );
                    } catch (e) {
                      throw (
                        (l.update(
                          "error",
                          "An error occurred, please try again",
                          3e3
                        ),
                        e)
                      );
                    }
                  }
                  return e;
                },
                [m]
              ),
              y = (0, w.useCallback)(
                function (e) {
                  let t =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1];
                  if (o) return T(e, o, t);
                },
                [o]
              ),
              h = (0, w.useCallback)(
                (e) => {
                  if (o) return _(e, o);
                },
                [o]
              ),
              f = (0, w.useCallback)(async () => {
                u(), p();
              }, [u, p]),
              g = (0, w.useCallback)(() => {
                l({
                  type: "ERC20",
                  options: { address: e, symbol: d, decimals: o },
                });
              }, [l, o, d]);
            return {
              raw: { balance: c, allowance: m },
              balance: Q(c, o),
              approve: x,
              allowance: Q(m, o),
              toBigint: y,
              toDecimal: h,
              reload: f,
              addAssetToWallet: g,
            };
          };
        var ee = n(98029),
          et = n(99563);
        let en = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = J($.y5, $.Uk),
            r = J(e, $.Uk),
            { broadcastLiveTicker: s } = (0, et.W)(),
            { writeContractAsync: l } = (0, R.S)(),
            i = (0, Z.m)(),
            o = (0, X.p)(),
            d = { address: $.Uk, abi: W.y },
            { data: c, refetch: u } = (0, q.u)({
              ...d,
              functionName: "getSPECReceived",
              args: [r.toBigint(t) || 0n, e],
            }),
            { data: m, refetch: p } = (0, q.u)({
              ...d,
              functionName: "getTokensReceived",
              args: [a.toBigint(t) || 0n, e],
            }),
            x = (0, ee.D)({
              mutationKey: [e, n],
              mutationFn: async (u) => {
                let { fromAgentToken: p, forceReload: x = !0 } = u,
                  h = p ? r.toBigint(t) : a.toBigint(t),
                  f = p ? c : m;
                if (!t || !Number(t) || !h || !f)
                  throw "[useAgentSwap] Value not provided";
                f -= BigInt(Math.floor((Number(f) / 100) * 3));
                try {
                  p ? await r.approve(h) : await a.approve(h);
                } catch (e) {
                  throw e;
                }
                let g = o("loading", "Please approve swap");
                try {
                  let t = await l({
                    ...d,
                    functionName: p
                      ? "swapExactTokensForSPEC"
                      : "swapExactSPECForTokens",
                    args: [
                      h,
                      f,
                      e,
                      BigInt(Math.floor(Date.now() / 1e3) + 3600),
                    ],
                  });
                  if (i) {
                    g.update(
                      "loading",
                      "Waiting for swap transaction confirmation..."
                    );
                    try {
                      await (0, K.e)(i, {
                        hash: t,
                        confirmations: 4,
                        timeout: 6e5,
                      }),
                        s({
                          token_project_id: n,
                          tx: t,
                          type: p ? "sell" : "buy",
                        });
                    } catch (e) {}
                  }
                  g.update(
                    "success",
                    "Token swap completed successfully!",
                    3e3
                  ),
                    x && (await y());
                } catch (e) {
                  throw (
                    (g.update(
                      "error",
                      "An error occurred during the swap, please try again",
                      3e3
                    ),
                    e)
                  );
                }
              },
            });
          (0, w.useEffect)(() => {
            let e = setInterval(() => {
              u(), p();
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [u, p]);
          let y = (0, w.useCallback)(async () => {
              a.reload(), r.reload(), u(), p();
            }, [a.reload, r.reload, u, p]),
            h = { toSpec: c, toAgent: m };
          return {
            swap: x,
            exchange: {
              quote: Number(t),
              raw: h,
              toSpec: a.toDecimal((null == h ? void 0 : h.toSpec) || 0),
              toAgent: r.toDecimal((null == h ? void 0 : h.toAgent) || 0),
            },
            tokens: { spec: a, agent: r },
            reload: y,
          };
        };
        var ea = n(83643);
        let er = { address: $.y5, symbol: "SPEC", image: U.Z },
          es = "w-6 h-6 min-w-6 min-h-6 rounded-lg",
          el = (e) => {
            let { image: t } = e;
            return t
              ? "string" == typeof t
                ? (0, g.jsx)(A(), {
                    alt: "token logo",
                    src: t,
                    width: 24,
                    height: 24,
                    className: es,
                  })
                : "function" == typeof t
                ? (0, w.cloneElement)((0, g.jsx)(t, {}), { className: es })
                : void 0
              : null;
          },
          ei = (e) => {
            let { agent: t, onSwap: n } = e,
              [a, r] = (0, w.useState)(),
              [s, l] = (0, w.useState)(!1),
              [i, o] = (0, w.useState)(!1),
              {
                tokens: d,
                exchange: c,
                swap: u,
                reload: m,
              } = en(t.address, a || void 0, null == t ? void 0 : t.tokenId);
            Object.assign(er, d.spec), Object.assign(t, d.agent);
            let p = i ? t : er,
              x = i ? er : t,
              y = i ? c.toSpec : c.toAgent,
              h = (0, w.useCallback)(() => {
                p && r(String(p.balance).replace(",", "."));
              }, [p, r]),
              f = (0, w.useCallback)(() => {
                o((e) => !e), r(y);
              }, [o, y]),
              v = (0, w.useCallback)(() => {
                u.mutateAsync({ fromAgentToken: i, forceReload: !1 })
                  .then(() => {
                    r(""), m(), null == n || n();
                  })
                  .catch(() => {});
              }, [u]),
              b = (0, w.useCallback)((e) => {
                e.key.match(/^[a-z+-]$/i) &&
                  !e.ctrlKey &&
                  (e.preventDefault(), e.stopPropagation());
              }, []),
              j =
                !!Number(a) &&
                !u.isPending &&
                Number(a) <= p.balance &&
                Number(a) > 0;
            return (0, g.jsxs)("div", {
              className: "flex flex-col gap-2",
              "data-sentry-component": "SwapWidget",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, g.jsxs)("div", {
                  className: "bg-primary border border-secondary rounded-lg",
                  children: [
                    (0, g.jsxs)("div", {
                      className: "p-4 text-xs",
                      children: [
                        (0, g.jsx)("div", {
                          className: "mb-2",
                          children: "You pay",
                        }),
                        (0, g.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, g.jsx)("input", {
                              lang: "en-US",
                              type: "number",
                              min: "0",
                              onKeyDown: b,
                              value: a,
                              onChange: (e) => r(e.target.value),
                              className:
                                "w-1/2 text-[22px] text-white border-0 bg-transparent outline-0 placeholder:text-contrast mr-auto",
                              placeholder: "0",
                            }),
                            (0, g.jsx)(el, {
                              ...p,
                              "data-sentry-element": "SwapWidgetImage",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "SwapWidgetImage",
                            }),
                            (0, g.jsx)("span", {
                              className: "font-semibold",
                              children: p.symbol,
                            }),
                          ],
                        }),
                        (0, g.jsxs)("div", {
                          className: "mt-2 flex items-center justify-end",
                          children: [
                            (0, g.jsx)("span", { children: "Balance:\xa0" }),
                            (0, g.jsx)("span", {
                              className:
                                "overflow-ellipsis overflow-hidden whitespace-nowrap",
                              children: isNaN(Number(p.balance))
                                ? "-"
                                : p.balance,
                            }),
                            (0, g.jsx)("span", { children: "\xa0" }),
                            (0, g.jsx)("div", {
                              onClick: h,
                              className:
                                "px-1.5 py-1 bg-[#006fee]/25 hover:bg-[#006fee]/50 cursor-pointer rounded-[36px] text-[#ebeef4] text-[10px] font-semibold",
                              children: "MAX",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, g.jsx)("div", {
                      className: "h-[1px] bg-secondary my-3 relative",
                      children: (0, g.jsx)("div", {
                        onClick: f,
                        className:
                          "overflow-hidden cursor-pointer rounded-full bg-primary border border-secondary absolute p-2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        children: (0, g.jsx)(H.Z, {
                          width: 18,
                          height: 18,
                          "data-sentry-element": "ArrowUpDown",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ArrowUpDown",
                        }),
                      }),
                    }),
                    (0, g.jsxs)("div", {
                      className: "p-4 text-xs",
                      children: [
                        (0, g.jsx)("div", {
                          className: "mb-2",
                          children: "You receive",
                        }),
                        (0, g.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, g.jsx)("input", {
                              type: "number",
                              lang: "en-US",
                              value: y,
                              className:
                                "pointer-events-none text-white w-1/2 text-[22px] border-0 bg-transparent outline-0 placeholder:text-contrast mr-auto",
                              placeholder: "0",
                            }),
                            (0, g.jsx)(el, {
                              ...x,
                              "data-sentry-element": "SwapWidgetImage",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "SwapWidgetImage",
                            }),
                            (0, g.jsx)("span", {
                              className: "font-semibold",
                              children: x.symbol,
                            }),
                          ],
                        }),
                        (0, g.jsxs)("div", {
                          className: "mt-2 flex justify-end",
                          children: [
                            (0, g.jsx)("span", { children: "Balance:\xa0" }),
                            (0, g.jsx)("span", {
                              className:
                                "overflow-ellipsis overflow-hidden whitespace-nowrap",
                              children: isNaN(Number(x.balance))
                                ? "-"
                                : x.balance,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)("div", {
                  onClick: v,
                  className:
                    "\n        bg-blue-100 transition-all ease-in-out text-white\n        "
                      .concat(
                        !u.isPaused && "hover:bg-blue-400",
                        "\n        cursor-pointer h-8 px-3 rounded-lg justify-center items-center inline-flex text-xs font-medium\n        "
                      )
                      .concat(
                        j ? "opacity-100" : "pointer-events-none opacity-50",
                        "\n      "
                      ),
                  children: u.isPending
                    ? (0, g.jsxs)(g.Fragment, {
                        children: [
                          (0, g.jsx)(S.c, {
                            color: "white",
                            size: "sm",
                            className: "mr-2",
                          }),
                          "Swapping...",
                        ],
                      })
                    : "Swap",
                }),
                (0, g.jsx)("div", {
                  onClick: () => l(!0),
                  className:
                    "cursor-pointer h-8 px-3 rounded-lg justify-center items-center inline-flex text-[#cfd5df] hover:text-white transition text-xs font-medium",
                  children: "Get SPEC",
                }),
                (0, g.jsx)(ea.Z, {
                  isOpen: s,
                  setIsOpen: l,
                  "data-sentry-element": "SwapWidgetModal",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "SwapWidgetModal",
                }),
              ],
            });
          };
        function eo(e) {
          let {
            children: t,
            columns: n,
            width: a,
            height: r,
            grow: s,
            className: l,
          } = e;
          return (
            isNaN(+(a || NaN)) || (a += "px"),
            isNaN(+(r || NaN)) || (r += "px"),
            (0, g.jsx)("div", {
              className:
                "\n        flex\n        gap-4\n        flex-col items-stretch\n        "
                  .concat(!!n && "xl:flex-row", "\n        ")
                  .concat(
                    !!s && "flex-1",
                    "\n        xl:min-w-[--min-width] xl:max-w-[--width]\n        xl:min-h-[--min-height] xl:max-h-[--height]\n        max-[1240px]:flex-col\n        "
                  )
                  .concat(l || "", "\n      "),
              style: {
                "--width": a,
                "--height": r,
                "--min-width": a,
                "--min-height": r,
              },
              "data-sentry-component": "ContentCardGrid",
              "data-sentry-source-file": "index.tsx",
              children: t,
            })
          );
        }
        let ed = Object.assign(
          function (e) {
            let { empty: t, noOverflow: n, children: a, className: r = "" } = e;
            return (0, g.jsx)("div", {
              className: "\n        relative\n        w-full "
                .concat(
                  !t && "p-6",
                  " rounded-[1rem]\n        bg-[#23283d]/50\n        text-contrast\n        [&::-webkit-scrollbar-track]:mt-16 [&::-webkit-scrollbar-track]:mb-5\n        "
                )
                .concat(!n && "overflow-auto overflow-x-hidden", "\n        ")
                .concat(r, "\n      "),
              "data-sentry-component": "ContentCardComp",
              "data-sentry-source-file": "index.tsx",
              children: a,
            });
          },
          {
            Line: () =>
              (0, g.jsx)("div", {
                className: "-mx-6 my-6 h-[1px] border-t border-[#23283D]",
                "data-sentry-component": "ContentCardLine",
                "data-sentry-source-file": "index.tsx",
              }),
            Title: (e) => {
              let { children: t, className: n, title: a } = e;
              return (0, g.jsxs)("div", {
                className:
                  "\n        relative z-10\n        pb-3 mb-3\n        text-[#acb4c0]\n        border-b border-[#4B5268]\n        flex justify-between items-end\n        ".concat(
                    n,
                    "\n      "
                  ),
                "data-sentry-component": "ContentCardTitle",
                "data-sentry-source-file": "index.tsx",
                children: [
                  (0, g.jsx)("div", {
                    className:
                      "text-xs font-medium uppercase leading-4 tracking-wide h-4",
                    children: a,
                  }),
                  (0, g.jsx)("div", {
                    className: "text-xs font-medium leading-4 h-4",
                    children: t,
                  }),
                ],
              });
            },
            ScrollableContent: (0, w.forwardRef)(function (e, t) {
              let { children: n, className: a } = e,
                r =
                  "ContentCardScrollableContent" +
                  (0, w.useId)().replace(/:/g, "_");
              return (0,
              g.jsxs)("div", { ref: t, className: "\n        ".concat(r, "\n        absolute\n        top-[3.25rem] left-0 right-0 bottom-0\n        p-6 pt-3\n        overflow-hidden overflow-y-auto\n        [&::-webkit-scrollbar-track]:mt-4 [&::-webkit-scrollbar-track]:mb-5\n        ").concat(null != a ? a : "", "\n      "), children: [(0, g.jsx)("style", { children: "\n        @keyframes detect-scroll {\n          from,\n          to {\n            --can-scroll: ;\n          }\n        }\n\n        .".concat(r, " {\n          animation: detect-scroll linear;\n          animation-timeline: scroll(self);\n\n          --scroll-size-if-can-scroll: var(--can-scroll) var(--scroll-bar-width);\n          --scroll-size-if-cant-scroll: 0px;\n          --scroll-size: var(--scroll-size-if-can-scroll, var(--scroll-size-if-cant-scroll));\n\n          padding-right: calc((1.5rem - var(--scroll-size)) / 2);\n          right: calc((1.5rem - var(--scroll-size)) / 2);\n        }\n      ") }), n] });
            }),
          }
        );
        var ec = n(39332),
          eu = n(79255),
          em = n(6849);
        function ep(e) {
          let { primary: t, secondary: n, className: a = "" } = e;
          return (0, g.jsx)("div", {
            className:
              "w-full bg-[#23283d]/50 border-none overflow-hidden flex items-center flex-wrap max-sm:flex-col max-sm:items-stretch " +
              a,
            "data-sentry-component": "ValuesCard",
            "data-sentry-source-file": "index.tsx",
            children: [t, n].map((e, t) =>
              (0, g.jsxs)(
                "div",
                {
                  className: "flex-1 py-4 px-6 flex flex-col gap-3 ".concat(
                    0 === t && "bg-primary"
                  ),
                  children: [
                    (0, g.jsx)("span", {
                      className:
                        "text-xs flex items-center gap-x-1 whitespace-nowrap min-w-[180px]",
                      children: null == e ? void 0 : e.title,
                    }),
                    (0, g.jsx)("div", {
                      className:
                        "w-full flex justify-between gap-6 max-[500px]:flex-col max-[500px]:items-stretch",
                      children:
                        null == e
                          ? void 0
                          : e.items.map((e, n) => {
                              let { label: a, value: r } = e;
                              return (0, g.jsxs)(
                                "div",
                                {
                                  className: "flex-1 w-max max-w-full",
                                  children: [
                                    (0, g.jsx)("div", {
                                      className:
                                        "text-lightTitles text-sm font-medium text-ellipsis whitespace-nowrap",
                                      children: r,
                                    }),
                                    (0, g.jsx)("div", {
                                      className:
                                        "text-contrast text-[10px] font-medium uppercase text-ellipsis whitespace-nowrap",
                                      children: a,
                                    }),
                                  ],
                                },
                                [t, n].join()
                              );
                            }),
                    }),
                  ],
                },
                t
              )
            ),
          });
        }
        let { format: ex } = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
          }),
          ey = (e) => {
            let { start: t = 0, value: n, target: a } = e,
              r = (n - t) / (a - t);
            return (0, g.jsxs)("div", {
              className: "w-full",
              "data-sentry-component": "ProgressBar",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, g.jsx)("div", {
                  className: "h-1.5 bg-secondary rounded-full overflow-hidden",
                  children: (0, g.jsx)("div", {
                    className:
                      "w-[--percentage] h-full bg-blue-50 rounded-full",
                    style: { "--percentage": 100 * r + "%" },
                  }),
                }),
                (0, g.jsx)("div", { className: "h-1.5" }),
                (0, g.jsxs)("div", {
                  className:
                    "relative flex justify-between text-[10px] font-semibold",
                  children: [
                    (0, g.jsx)("span", { children: ex(n) }),
                    (0, g.jsx)("span", { children: ex(a) }),
                  ],
                }),
              ],
            });
          },
          eh = (e) => {
            let t = document.createElement("div");
            return (t.textContent = e), t.innerHTML;
          },
          ef = (e) => {
            let t = eh(e)
              .replace(/\n\n*/g, '<div class="h-2"></div>')
              .replace(
                /([^a-z])\*\*?(.*?)\*?\*([^a-z]|$)/g,
                "$1<strong>$2</strong>$3"
              )
              .replace(/([^a-z])\_\_?(.*?)\_?\_([^a-z]|$)/g, "$1<em>$2</em>$3")
              .replace(
                /`(.*?)`/g,
                '<code class="font-source opacity-70">$1</code>'
              )
              .replace(
                /(\n|\<\/div\>)(\d+)\./g,
                '$1<strong class="opacity-60">$2. </strong>'
              )
              .replace(
                /(\n|\<\/div\>)(\s*)(?:\*|-)/g,
                '$1<span class="whitespace-pre">$2</span><strong class="opacity-60">• </strong>'
              );
            return (0, g.jsx)("div", {
              "data-message-style": !0,
              dangerouslySetInnerHTML: { __html: t },
              "data-sentry-component": "toMessageFormatted",
              "data-sentry-source-file": "messages.util.tsx",
            });
          },
          { format: eg } = new Intl.DateTimeFormat("en-us", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !0,
          }),
          { format: ev } = new Intl.DateTimeFormat("en-us", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          eb = (e) => {
            try {
              let t = Number.parseInt(e.slice(0, 4), 16),
                n = (t + 90) % 360,
                a = [
                  "hsl(".concat(n, "deg 73% 48%)"),
                  "hsl(".concat(n, "deg 86% 65%)"),
                ];
              return a[t % a.length];
            } catch (e) {
              return "";
            }
          },
          ew = (e) => {
            let {
                chat: t = [],
                agent: n = {},
                scrollRef: a,
                onClickHandle: r,
              } = e,
              s = (0, w.useRef)(null);
            a || (a = s);
            let l = (0, w.useMemo)(
                () =>
                  t
                    ? t.map((e) => ({
                        id: e.id,
                        message: e.content,
                        date: e.inserted_at,
                        user:
                          "user" !== e.role
                            ? n
                            : {
                                name: e.user_name || "",
                                color: e.user_id && eb(e.user_id),
                              },
                      }))
                    : [],
                [t]
              ),
              i = (0, w.useMemo)(
                () =>
                  l
                    .map((e) => ({ ...e, date: new Date(e.date) }))
                    .sort((e, t) => {
                      let { date: n } = e,
                        { date: a } = t;
                      return +n - +a;
                    })
                    .map((e, t, n) => {
                      let a = [e];
                      return (
                        (t && ev(n[t - 1].date) === ev(e.date)) ||
                          a.unshift({ day: e.date }),
                        a
                      );
                    })
                    .flat(),
                [l]
              );
            return (
              (0, w.useEffect)(() => {
                setTimeout(() => {
                  var e, t;
                  null === (t = a.current) ||
                    void 0 === t ||
                    t.scrollTo(
                      0,
                      null === (e = a.current) || void 0 === e
                        ? void 0
                        : e.scrollHeight
                    );
                });
              }, [i.length]),
              (0, g.jsx)("div", {
                ref: s,
                className: "flex flex-col gap-2",
                "data-sentry-component": "TokenChat",
                "data-sentry-source-file": "index.tsx",
                children: i.map((e, t) => {
                  if ("day" in e) {
                    let { day: t } = e;
                    return (0, g.jsxs)(
                      "div",
                      {
                        className: "py-2 flex gap-4 items-center text-xs",
                        children: [
                          (0, g.jsx)("div", {
                            className: "border-b border-secondary flex-1",
                          }),
                          ev(t).replace(",", ""),
                          (0, g.jsx)("div", {
                            className: "border-b border-secondary flex-1",
                          }),
                        ],
                      },
                      +t
                    );
                  }
                  let {
                    id: n,
                    user: { alias: a, name: s, image: l, color: i },
                    message: o,
                    date: d,
                  } = e;
                  return (0, g.jsxs)(
                    "div",
                    {
                      className: "flex p-3 bg-[#23283d]/50 rounded-2xl",
                      children: [
                        l &&
                          (0, g.jsx)("div", {
                            className: "mr-3",
                            children: (0, g.jsx)(A(), {
                              alt: s,
                              className:
                                "w-[24px h-[24px] min-w-[24px] object-cover bg-gray-200 rounded-full",
                              height: 24,
                              width: 24,
                              src: l,
                            }),
                          }),
                        (0, g.jsxs)("div", {
                          className: "flex flex-col gap-2 text-xs w-full",
                          children: [
                            (0, g.jsxs)("div", {
                              className: "flex gap-3 w-full flex-wrap gap-y-1",
                              children: [
                                a &&
                                  (0, g.jsx)(g.Fragment, {
                                    children: (0, g.jsx)("span", {
                                      className:
                                        "w-full text-gray-400 font-semibold ".concat(
                                          r ? "cursor-pointer" : ""
                                        ),
                                      onClick: () =>
                                        null == r ? void 0 : r(e),
                                      children: a,
                                    }),
                                  }),
                                (0, g.jsx)("span", {
                                  className:
                                    "text-gray-400 font-semibold ".concat(
                                      r ? "cursor-pointer" : ""
                                    ),
                                  style: { color: i },
                                  onClick: () => (null == r ? void 0 : r(e)),
                                  children: s,
                                }),
                                (0, g.jsx)("div", {
                                  className: "h-4 border-r border-[#4B5268]",
                                }),
                                (0, g.jsx)("span", {
                                  className: "font-semibold",
                                  children: eg(new Date(d)),
                                }),
                              ],
                            }),
                            (0, g.jsx)("div", {
                              className:
                                "whitespace-pre-line break-words *:w-full",
                              children: ef(o),
                            }),
                          ],
                        }),
                      ],
                    },
                    n || t
                  );
                }),
              })
            );
          };
        var ej = n(81371);
        let eC = new (n(82399).s)("https://bros.spectrallabs.xyz/api");
        async function eN(e) {
          try {
            return await eC.get(
              "/v1/rooms/".concat(
                e,
                "/messages?page_size=1000&order_by[]=inserted_at&order_directions[]=asc"
              )
            );
          } catch (e) {
            throw e;
          }
        }
        var ek = n(5024);
        let eT = function (e) {
            let { timeout: t = 1e4 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { user: n } = (0, ek.sv)(),
              { socket: a } = (0, ej.s)(),
              [r, s] = (0, w.useState)(),
              [l, i] = (0, w.useState)([]),
              [o, d] = (0, w.useState)(),
              [c, u] = (0, w.useState)([]),
              m = (0, w.useCallback)(
                (e) => {
                  (e = Array.isArray(e) ? e : [e]),
                    i((t) =>
                      [...t, ...e]
                        .filter(
                          (e, t, n) =>
                            !!e &&
                            n.findIndex((t) => {
                              let { id: n } = t;
                              return n === e.id;
                            }) === t
                        )
                        .map((e) => ({
                          ...e,
                          inserted_at: +new Date(e.inserted_at),
                        }))
                        .sort((e, t) => {
                          let { inserted_at: n } = e,
                            { inserted_at: a } = t;
                          return n - a;
                        })
                    );
                },
                [i]
              );
            (0, w.useEffect)(() => {
              i([]);
            }, [e]),
              (0, w.useEffect)(() => {
                if (a && e) {
                  let n = a.channel("room:".concat(e));
                  return (
                    n
                      .join()
                      .receive("ok", () => {
                        s(!0),
                          d(n),
                          i(
                            (t) => (
                              t.length ||
                                eN(e).then((e) => {
                                  let { data: t } = e;
                                  return m(t);
                                }),
                              t
                            )
                          );
                      })
                      .receive("error", (e) => {
                        s(!1);
                      }),
                    n.on("new_message", function () {
                      let { data: e } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      m(e);
                    }),
                    n.on("new_error_message", function () {
                      let { message: e } =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        n = Math.random(),
                        a = () => u((e) => e.filter((e) => e.id !== n));
                      u((t) => [...t, { id: n, message: e, dismiss: a }]),
                        !1 !== t && setTimeout(a, t);
                    }),
                    () => {
                      n.leave();
                    }
                  );
                }
              }, [a, e, m]),
              (0, w.useEffect)(() => {
                !n &&
                  e &&
                  eN(e).then((e) => {
                    let { data: t } = e;
                    return m(t);
                  });
              }, [n, e]);
            let p = (0, w.useCallback)(
              (e) => {
                o && o.push("new_message", { message: { content: e } });
              },
              [o]
            );
            return {
              connected: r && !!o,
              messages: l,
              errors: c,
              sendMessage: p,
            };
          },
          e_ = (e, t, n) => {
            let a = (0, w.useRef)(),
              r = (0, w.useMemo)(() => (t || !a.current ? e() : a.current), n);
            return (
              (0, w.useEffect)(() => {
                a.current = r;
              }, [r]),
              r
            );
          };
        var eS = n(34965);
        let eE = (0, w.forwardRef)((e, t) => {
          let {
              onSendMessage: n,
              cleanOnSend: a,
              sendOnEnter: r,
              actionBanner: s,
              actionBannerHandle: l,
              toastError: i,
              ...o
            } = e,
            d = (0, w.useRef)(null),
            c = () => {},
            [u, m] = (0, w.useState)(!1);
          (0, w.useEffect)(() => {
            m((e) => !!e && 2);
          }, [u]);
          let p = (0, w.useCallback)(() => {
              if (n) {
                var e;
                n(
                  (null === (e = d.current) || void 0 === e
                    ? void 0
                    : e.value) || ""
                );
              }
              a && d.current && (d.current.value = "");
            }, [d, n, a]),
            x = (0, w.useCallback)(
              (e) => {
                r &&
                  "Enter" === e.key &&
                  m((e) => (2 === e ? (h(l), !1) : (p(), c(!1), e))),
                  "ArrowUp" === e.key &&
                    (m((e) => 1 === e && 2),
                    e.preventDefault(),
                    e.stopPropagation()),
                  "ArrowDown" === e.key &&
                    (m((e) => (2 === e ? 1 : e)),
                    e.preventDefault(),
                    e.stopPropagation());
              },
              [p, r, l]
            ),
            y = (0, w.useCallback)(
              (e) => {
                let t = e.target;
                if (t) {
                  let { value: e } = t,
                    n = e
                      .slice(0, +t.selectionStart)
                      .split(" ")
                      .pop();
                  n.trim() && (null == l ? void 0 : l.startsWith(n)) && l !== n
                    ? (c(!1), m((e) => e || 1))
                    : m(!1);
                }
              },
              [p, r, l]
            ),
            h = (0, w.useCallback)(
              function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = d.current;
                if (!t || !e || t.value.includes(e)) return;
                c(!1);
                let { value: n } = t,
                  a = n
                    .slice(0, +t.selectionStart)
                    .split(" ")
                    .pop(),
                  r = t.selectionStart || n.length,
                  s = n.slice(0, r).trimEnd(),
                  l = " ".concat(e, " ");
                e.startsWith(a) && (l = e.slice(a.length, e.length) + " "),
                  (t.value = (s + l + n.slice(r)).replace(
                    new RegExp("^(?: )".concat(e)),
                    e
                  )),
                  (t.selectionStart = t.selectionEnd = s.length + l.length + 1),
                  t.focus();
              },
              [d]
            );
          (0, w.useImperativeHandle)(t, () => ({ injectHandle: h }), [h]);
          let f = e_(
            () => (null == i ? void 0 : i.message),
            !!(null == i ? void 0 : i.message),
            [null == i ? void 0 : i.message]
          );
          return (0, g.jsxs)("div", {
            className: "w-full relative group",
            children: [
              (0, g.jsx)("input", {
                ...o,
                ref: d,
                autoComplete: "off",
                onKeyDown: (e) => {
                  var t;
                  x(e),
                    null === (t = o.onKeyDown) || void 0 === t || t.call(o, e);
                },
                onKeyUp: (e) => {
                  var t;
                  y(e),
                    null === (t = o.onKeyUp) || void 0 === t || t.call(o, e);
                },
                onFocus: (e) => {
                  var t;
                  c((e) => void 0 === e),
                    y(e),
                    null === (t = o.onFocus) || void 0 === t || t.call(o, e);
                },
                onBlur: (e) => {
                  var t;
                  setTimeout(() => {
                    c(!1), m(!1);
                  }, 500),
                    null === (t = o.onBlur) || void 0 === t || t.call(o, e);
                },
                className:
                  " peer relative z-[2] w-full h-12 leading-12 pl-4 pr-16 bg-primary rounded-xl outline-0 placeholder:text-contrast border hover:border-gray-600 focus:border-gray-600 border-secondary ",
              }),
              (0, g.jsx)("div", {
                className: "\n          opacity-0 pointer-events-none ".concat(
                  s && !u
                    ? "peer-focus:opacity-100 peer-focus:cursor-pointer pointer-events-auto"
                    : "",
                  "\n          transition\n          absolute bottom-full left-1/2 -translate-x-1/2 mb-2\n          max-w-full w-max\n          px-4 py-3 rounded-lg\n          bg-success\n          text-gray-400 text-sm font-normal\n        "
                ),
                onClick: () => l && h(l),
                children: s,
              }),
              (0, g.jsxs)("div", {
                className: "\n          opacity-0 pointer-events-none ".concat(
                  i ? "opacity-100 cursor-pointer pointer-events-auto" : "",
                  "\n          transition\n          absolute bottom-full left-1/2 -translate-x-1/2 mb-2\n          max-w-full w-max\n          px-4 py-3 rounded-lg\n          bg-red-300\n          text-gray-400 text-sm font-normal\n          flex gap-2 items-center\n        "
                ),
                onClick: () => {
                  var e;
                  return null == i
                    ? void 0
                    : null === (e = i.dismiss) || void 0 === e
                    ? void 0
                    : e.call(i);
                },
                children: [
                  (0, g.jsx)(eS.Z, { width: 16, height: 16 }),
                  (0, g.jsx)("span", { children: f }),
                ],
              }),
              l &&
                (0, g.jsx)("div", {
                  className:
                    "\n            absolute bottom-full -mb-10\n            p-4 pb-0 w-full\n            transition-all\n            cursor-pointer\n            bg-[#353e5c] rounded-lg\n            border border-[#666f8d]\n            text-[#ebeef4] text-sm font-medium\n            "
                      .concat(u ? "pb-[52px] -mb-9" : "", "\n            ")
                      .concat(2 == u ? "bg-dark-50" : "", "\n          "),
                  onClick: () => l && h(l),
                  children: l,
                }),
              (0, g.jsxs)("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                className:
                  "\n          absolute right-2 top-1.5 z-[3]\n          transition\n          ".concat(
                    o.disabled
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer",
                    "\n        "
                  ),
                onClick: p,
                children: [
                  (0, g.jsx)("rect", {
                    width: "36",
                    height: "36",
                    rx: "12",
                    fill: "#006FEE",
                  }),
                  (0, g.jsx)("path", {
                    d: "M20.0254 12.9417L25.0837 18L20.0254 23.0583",
                    stroke: "white",
                    "stroke-width": "1.25",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                  (0, g.jsx)("path", {
                    d: "M10.9165 18H24.9415",
                    stroke: "white",
                    "stroke-width": "1.25",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ],
              }),
            ],
          });
        });
        function eM() {
          return (eM = Object.assign
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
        var eI = function (e) {
          return w.createElement(
            "svg",
            eM(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 12,
                height: 13,
                fill: "none",
              },
              e
            ),
            a ||
              (a = w.createElement("path", {
                stroke: "#ACB4C0",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m7.759 9.314-3.87-1.759m3.87-3.517-3.87 1.759M11.1 2.983a1.583 1.583 0 1 1-3.165 0 1.583 1.583 0 0 1 3.165 0M4.065 6.5A1.583 1.583 0 1 1 .9 6.5a1.583 1.583 0 0 1 3.165 0m7.035 3.517a1.583 1.583 0 1 1-3.166 0 1.583 1.583 0 0 1 3.166 0",
              }))
          );
        };
        function eD() {
          return (eD = Object.assign
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
        var ez = function (e) {
          return w.createElement(
            "svg",
            eD(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 12 13",
              },
              e
            ),
            r ||
              (r = w.createElement("path", {
                stroke: "#ACB4C0",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 0.906,
                d: "M6 2.9H2.4a1.2 1.2 0 0 0-1.2 1.2v6a1.2 1.2 0 0 0 1.2 1.2h6a1.2 1.2 0 0 0 1.2-1.2V6.5m-4.2.6 5.4-5.4m0 0h-3m3 0v3",
              }))
          );
        };
        function eF() {
          return (eF = Object.assign
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
        var eB = function (e) {
            return w.createElement(
              "svg",
              eF(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 18,
                  height: 18,
                  fill: "none",
                },
                e
              ),
              s ||
                (s = w.createElement("path", {
                  fill: "#006FEE",
                  d: "M9 .667A8.336 8.336 0 0 0 .667 9c0 4.6 3.733 8.333 8.333 8.333S17.333 13.6 17.333 9 13.6.667 9 .667m3.867 5.666c-.126 1.317-.667 4.517-.942 5.992-.117.625-.35.833-.567.858-.483.042-.85-.316-1.317-.625-.733-.483-1.15-.783-1.858-1.25-.825-.541-.292-.841.184-1.325.124-.125 2.258-2.066 2.3-2.241a.17.17 0 0 0-.042-.15c-.05-.042-.117-.025-.175-.017-.075.017-1.242.792-3.517 2.325-.333.225-.633.342-.9.333-.3-.008-.867-.166-1.291-.308-.526-.167-.934-.258-.9-.55.016-.15.224-.3.616-.458a374 374 0 0 1 4.858-2.092c2.317-.967 2.792-1.133 3.109-1.133.066 0 .225.016.325.1a.33.33 0 0 1 .117.225c-.009.05.008.2 0 .316",
                }))
            );
          },
          eL = n(7301),
          eO = n(49349),
          eP = n(69160),
          eA = n(97118),
          eH = n(90683);
        let eU = [
            { label: "Positions", value: "positions" },
            { label: "Balances", value: "balances" },
            { label: "Trade History", value: "tradeHistory" },
          ],
          { format: e$ } = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }),
          { format: eR } = new Intl.DateTimeFormat("en-UK", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: !0,
          }),
          eZ = {
            usd: (e) => e$(Number(e)),
            timestamp: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return e ? eR(new Date(e)).toUpperCase() : "";
            },
          },
          eq = {
            positions: [
              ["Coin", "coin"],
              [
                "Leverage",
                (e) => {
                  var t;
                  return (
                    (null === (t = e.leverage) || void 0 === t
                      ? void 0
                      : t.value) + "x"
                  );
                },
              ],
              ["Size", "size"],
              ["Value", (e) => e.market_price * e.size, "usd"],
              ["Entry Price", "entry_price", "usd"],
              ["Mark Price", "market_price", "usd"],
              ["Liq. Price", "liquidation_price", "usd"],
              ["Margin", "margin_used", "usd"],
              [
                "P&L (ROE %)",
                (e) =>
                  ""
                    .concat(eZ.usd(e.unrealized_pnl), " (")
                    .concat(
                      e.return_on_equity
                        ? (+e.return_on_equity).toFixed(2)
                        : "-",
                      "%)"
                    ),
              ],
            ],
            balances: [
              ["Total Balance", "total_balance", "usd"],
              ["Available Balance", "available_balance", "usd"],
            ],
            tradeHistory: [
              ["Timestamp", "timestamp", "timestamp"],
              ["Coin", "coin"],
              ["Direction", "direction"],
              ["Price", "price", "usd"],
              ["Size", "size"],
              ["Trade Value", "trade_value", "usd"],
              ["Closed P&L", "closed_pnl", "usd"],
            ],
          },
          eW = (e) => {
            let { tokenId: t } = e,
              [n, a] = (0, w.useState)(eU[0].value),
              { data: r, ...s } = (0, C.a)({
                queryKey: [t, n],
                queryFn: () => {
                  switch (n) {
                    case "tradeHistory":
                      return (0, N.Z9)(t);
                    case "positions":
                      return (0, N.Y4)(t);
                    case "balances":
                      return (0, N.cl)(t);
                  }
                },
                enabled: !!t,
                refetchInterval: 2e4,
              }),
              l = (0, w.useMemo)(() => {
                var e, t;
                return {
                  header:
                    (null === (e = eq[n]) || void 0 === e
                      ? void 0
                      : e.map((e) => {
                          let [t] = e;
                          return t;
                        })) || [],
                  content:
                    (null == r
                      ? void 0
                      : null === (t = r.data) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                          var t;
                          return (
                            (null === (t = eq[n]) || void 0 === t
                              ? void 0
                              : t.map((t) => {
                                  var n;
                                  let [, a, r] = t,
                                    s = "function" == typeof a ? a(e) : e[a];
                                  return (
                                    (null === (n = eZ[r]) || void 0 === n
                                      ? void 0
                                      : n.call(eZ, s)) || s
                                  );
                                })) || []
                          );
                        })) || [],
                };
              }, [r, n]);
            return (0, g.jsxs)("div", {
              "data-sentry-component": "TokenTransactionDetails",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, g.jsxs)("div", {
                  className:
                    "p-2 bg-primary flex items-center justify-between pr-4",
                  children: [
                    (0, g.jsx)("div", {
                      className: "flex gap-1",
                      children: eU.map((e) => {
                        let { label: t, value: r } = e;
                        return (0, g.jsx)(
                          "div",
                          {
                            onClick: () => a(r),
                            className:
                              "\n              py-2 px-3 text-xs font-medium\n              rounded-lg cursor-pointer\n              ".concat(
                                r === n
                                  ? "text-gray-400 bg-dark-50 pointer-events-none"
                                  : "text-contrast",
                                "\n            "
                              ),
                            children: t,
                          },
                          r
                        );
                      }),
                    }),
                    (0, g.jsx)(eu.e, {
                      content: (0, g.jsx)("span", {
                        className:
                          "font-inter max-w-[280px] whitespace-normal text-sm font-regular text-gray-400",
                        children:
                          "Values update every 5 minutes. For the latest data, visit HypurrScan.",
                      }),
                      placement: "bottom",
                      className:
                        "cursor-pointer rounded-lg border border-solid border-gray-200 bg-tertiary p-4",
                      "data-sentry-element": "Tooltip",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "Tooltip",
                      children: (0, g.jsx)(eO.Z, {
                        height: 12,
                        width: 12,
                        className: "cursor-pointer",
                        "data-sentry-element": "InfoIcon",
                        "data-sentry-source-file": "index.tsx",
                        "data-sentry-element": "InfoIcon",
                      }),
                    }),
                  ],
                }),
                (0, g.jsx)("div", {
                  className: "px-6 py-4 max-h-[300px] overflow-auto",
                  children: s.isLoading
                    ? (0, g.jsx)(S.c, {
                        color: "white",
                        size: "md",
                        className: "w-full h-40",
                      })
                    : (0, g.jsxs)("table", {
                        className: "w-full",
                        children: [
                          (0, g.jsx)("thead", {
                            className: "border-b-1 border-gray-200",
                            children: (0, g.jsx)("tr", {
                              children: l.header.map((e, t) =>
                                (0, g.jsx)(
                                  "th",
                                  {
                                    className:
                                      "pb-2 text-[#ebeef2] text-xs font-medium first-of-type:pl-0 pl-2.5 text-left",
                                    children: e,
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                          (0, g.jsx)("tbody", {
                            children: l.content.map((e, t) =>
                              (0, g.jsx)(
                                "tr",
                                {
                                  children: e.map((e, n) =>
                                    (0, g.jsx)(
                                      "td",
                                      {
                                        className:
                                          "\n                        py-2 first-of-type:pl-0 pl-2.5\n                        text-left text-xs font-normal\n                        overflow-hidden overflow-ellipsis\n                        ".concat(
                                            0 === t ? "pt-3" : "",
                                            "\n                      "
                                          ),
                                        children: e,
                                      },
                                      t + "-" + n
                                    )
                                  ),
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                }),
              ],
            });
          },
          { format: eV } = new Intl.DateTimeFormat("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          }),
          eK = (e) => {
            let t = document.createElement("div");
            return (t.textContent = e), t.innerHTML;
          },
          eG = (e) => {
            let t = e
              .map((e) => {
                let { executed_timestamp: t, message: n } = e,
                  a = "[".concat(eV(new Date(t || 0)).replace(",", ""), "]:");
                a = a.replace(/(\d+)/g, "<span data-c1>$1</span>");
                let r = eK(n)
                  .replace(/(\$[a-z]+)/gi, "<span data-c2>$1</span>")
                  .replace(/(\$[\d,.]*\d)/g, "<span data-c3>$1</span>")
                  .replace(
                    / ([\d,.]*\d+)(x?)([,.]?) /g,
                    " <span data-c4>$1$2</span>$3 "
                  );
                return "<span data-c0>".concat(a, "</span> ").concat(r);
              })
              .join("\n\n")
              .concat(
                "\n      <style>\n        [data-brain-data-highlight] { color: #acb4c0 }\n        [data-brain-data-highlight] [data-c0] { color: #f0f2f5 }\n        [data-brain-data-highlight] [data-c1] { color: #BCE635 } /* dates */\n        [data-brain-data-highlight] [data-c2] { color: #B358E3 } /* symbols */\n        [data-brain-data-highlight] [data-c3] { color: #E7B323 } /* currency */\n        [data-brain-data-highlight] [data-c4] { color: #34C6C6 } /* numbers */\n      </style>\n    "
              )
              .trim();
            return (0, g.jsx)("span", {
              "data-brain-data-highlight": !0,
              dangerouslySetInnerHTML: { __html: t },
              "data-sentry-component": "toBrainHighlight",
              "data-sentry-source-file": "brain.util.tsx",
            });
          },
          eY = (e) => {
            let { children: t } = e;
            return (0, g.jsxs)("span", {
              className: "group",
              "data-sentry-component": "InfoTooltip",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, g.jsx)(eO.Z, {
                  height: 12,
                  width: 12,
                  "data-sentry-element": "InfoIcon",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "InfoIcon",
                }),
                (0, g.jsx)("div", {
                  className:
                    "group-hover:opacity-1 p-4 bg-tertiary rounded-lg shadow absolute top-10 right-4 left-4 border border-gray-200 text-[#EBEFF5] leading-[21px] font-regular text-sm font-normal normal-case pointer-events-none transition opacity-0 group-hover:opacity-100 ",
                  children: t,
                }),
              ],
            });
          },
          eX = (e) => {
            let { socket: t } = (0, ej.s)(),
              [n, a] = (0, w.useState)(),
              [r, s] = (0, w.useState)();
            (0, w.useEffect)(() => {
              if (t && e) {
                let n = t.channel(e);
                return (
                  n
                    .join()
                    .receive("ok", () => {
                      a(!0), s(n);
                    })
                    .receive("error", (e) => {
                      a(!1);
                    }),
                  () => {
                    n.leave();
                  }
                );
              }
            }, [t, e]);
            let l = { connected: n && !!r, channel: r };
            return Object.assign(l, {
              on: function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                return (
                  (0, w.useEffect)(() => {
                    if (!r) return;
                    let n = r.on(e, (e) => {
                      null == t || t(e);
                    });
                    return () => {
                      null == r || r.off(e, n);
                    };
                  }, [r, ...n]),
                  l
                );
              },
            });
          };
        function eQ() {
          return (eQ = Object.assign
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
        var eJ = function (e) {
            return w.createElement(
              "svg",
              eQ(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  fill: "none",
                },
                e
              ),
              l ||
                (l = w.createElement("path", {
                  fill: "#E17726",
                  d: "M15.324.8 8.733 5.677l1.226-2.874z",
                })),
              i ||
                (i = w.createElement("path", {
                  fill: "#E27625",
                  d: "m.692.806 5.35 1.997 1.164 2.912zm11.98 10.365 2.913.056-1.018 3.458-3.555-.978zm-9.344 0 1.654 2.536-3.549.978-1.012-3.458z",
                })),
              o ||
                (o = w.createElement("path", {
                  fill: "#E27625",
                  d: "m7.048 4.974.119 3.845-3.563-.163 1.014-1.528.013-.015zm1.867-.043 2.454 2.182.013.015 1.013 1.529-3.561.162zm-3.829 6.252L7.031 12.7l-2.26 1.09zm5.828 0 .308 2.607-2.253-1.091z",
                })),
              d ||
                (d = w.createElement("path", {
                  fill: "#D5BFB2",
                  d: "m9.019 12.556 2.286 1.107-2.126 1.011.022-.668zm-2.038 0-.175 1.44.015.677-2.132-1.01z",
                })),
              c ||
                (c = w.createElement("path", {
                  fill: "#233447",
                  d: "m6.32 9.32.598 1.256-2.034-.596zm3.36 0 1.443.66-2.04.595z",
                })),
              u ||
                (u = w.createElement("path", {
                  fill: "#CC6228",
                  d: "m5.242 11.17-.33 2.701-1.762-2.643zm5.517 0 2.09.058-1.768 2.644zm1.688-2.667-1.522 1.55-1.174-.536-.561 1.181-.369-2.03zm-8.894 0 3.626.164-.369 2.031-.562-1.18-1.167.536z",
                })),
              m ||
                (m = w.createElement("path", {
                  fill: "#E27525",
                  d: "m3.45 8.185 1.722 1.747.06 1.725zm9.102-.003-1.785 3.478.067-1.728zm-5.458.11.07.436.17 1.086-.11 3.338-.52-2.681v-.028zm1.81-.007.392 2.158v.028l-.522 2.688-.02-.673-.082-2.691z",
                })),
              p ||
                (p = w.createElement("path", {
                  fill: "#F5841F",
                  d: "m10.988 9.862-.058 1.499-1.817 1.415-.367-.26.411-2.12zm-5.968 0 1.823.534.412 2.12-.367.26L5.07 11.36z",
                })),
              x ||
                (x = w.createElement("path", {
                  fill: "#C0AC9D",
                  d: "m4.34 13.33 2.325 1.102-.01-.47.194-.171h2.3l.202.17-.015.47 2.31-1.098-1.125.929-1.358.933H6.83l-1.358-.937z",
                })),
              y ||
                (y = w.createElement("path", {
                  fill: "#161616",
                  d: "m8.852 12.408.329.232.192 1.537-.278-.236H6.906l-.273.24.186-1.54.329-.233z",
                })),
              h ||
                (h = w.createElement("path", {
                  fill: "#763E1A",
                  d: "m14.889.935.79 2.373-.493 2.4.352.272-.476.363.357.276-.474.432.291.21-.772.902-3.166-.922-.027-.015-2.282-1.924zM1.11.935l5.9 4.367-2.282 1.924-.028.015-3.166.922-.772-.902.29-.21-.473-.432.358-.276-.484-.364.365-.272-.5-2.398z",
                })),
              f ||
                (f = w.createElement("path", {
                  fill: "#F5841F",
                  d: "m11.144 7.04 3.354.977 1.09 3.36h-2.875l-1.981.024 1.44-2.808zm-6.287 0-1.03 1.553L5.27 11.4l-1.98-.025H.417l1.084-3.359zm5.266-4.252-.938 2.534-.2 3.423L8.91 9.82l-.006 2.74H7.097L7.09 9.825l-.077-1.08-.199-3.422-.938-2.534z",
                }))
            );
          },
          e0 = n(12842),
          e2 = (e) => {
            let { poolAddress: t } = e,
              [n, a] = (0, w.useState)(!1);
            return (0, g.jsx)("div", {
              className:
                "w-full h-full overflow-hidden absolute top-0 right-0 left-0 bottom-0",
              "data-sentry-component": "BaseDexscreenerEmbedChart",
              "data-sentry-source-file": "DexscreenerChart.tsx",
              children: n
                ? (0, g.jsx)("div", {
                    className:
                      "w-full h-full flex items-center justify-center bg-transparent",
                    children: (0, g.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "text-lightTitles mb-2 text-sm opacity-80",
                          children: [
                            "Please wait as we complete the liquidity ",
                            (0, g.jsx)("br", {}),
                            " migration and update the chart.",
                          ],
                        }),
                        (0, g.jsx)("div", {
                          className:
                            "text-sm text-blue-500 cursor-pointer hover:opacity-80",
                          onClick: () => window.location.reload(),
                          children: "Click to refresh",
                        }),
                      ],
                    }),
                  })
                : (0, g.jsx)("iframe", {
                    id: "dextools-widget",
                    title: "DEXTools Trading Chart",
                    className: "w-[102%] h-full ml-[-2px]",
                    src: "https://www.dextools.io/widget-chart/en/base/pe-light/".concat(
                      t,
                      "?theme=dark&chartType=1&chartResolution=30&drawingToolbars=true"
                    ),
                  }),
            });
          },
          e1 = n(37003),
          e3 = n(93603);
        let e5 = (e) => {
          var t;
          let [n, a] = (0, w.useState)(null),
            r =
              null == e
                ? void 0
                : null === (t = e.token_project) || void 0 === t
                ? void 0
                : t.syntax_contract_address;
          return (
            (0, w.useEffect)(() => {
              let e,
                t = !0;
              async function s() {
                if (r)
                  try {
                    let e = await (0, e1.L)(e3.wagmiConfig, {
                      address: $.Uk,
                      abi: W.y,
                      functionName: "agentTokenUniswapPool",
                      args: [r],
                    });
                    t &&
                      "0x0000000000000000000000000000000000000000" !== e &&
                      a(e);
                  } catch (e) {}
              }
              return (
                s(),
                n || (e = setInterval(s, 5e3)),
                () => {
                  (t = !1), e && clearInterval(e);
                }
              );
            }, [r, n]),
            n
          );
        };
        var e6 = n(31173),
          e4 = (e) => {
            let { dotColor: t = "bg-gray-300/50", size: n = 1.5 } = e,
              a = {
                initial: { y: 0 },
                animate: (e) => ({
                  y: [0, -2, 0],
                  transition: {
                    duration: 1.2,
                    repeat: 1 / 0,
                    ease: [0.4, 0.05, 0.1, 0.95],
                    times: [0, 0.5, 1],
                    delay: 0.23 * e,
                    repeatDelay: 0.1,
                  },
                }),
              };
            return (0, g.jsx)(e6.E.div, {
              className: "inline-flex items-center gap-1 px-2 py-1",
              variants: {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.3 } },
              },
              initial: "initial",
              animate: "animate",
              "data-sentry-element": "unknown",
              "data-sentry-component": "TypingIndicator",
              "data-sentry-source-file": "index.tsx",
              children: [0, 1, 2].map((e) =>
                (0, g.jsx)(
                  e6.E.div,
                  {
                    custom: e,
                    className: "w-"
                      .concat(n, " h-")
                      .concat(n, " ")
                      .concat(t, " rounded-full"),
                    variants: a,
                    initial: "initial",
                    animate: "animate",
                  },
                  e
                )
              ),
            });
          },
          e8 = n(37122);
        let e7 = [
            {
              inputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "Burn",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
              ],
              name: "Mint",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount0In",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount1In",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount0Out",
                  type: "uint256",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "amount1Out",
                  type: "uint256",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "Swap",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint112",
                  name: "reserve0",
                  type: "uint112",
                },
                {
                  indexed: !1,
                  internalType: "uint112",
                  name: "reserve1",
                  type: "uint112",
                },
              ],
              name: "Sync",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              constant: !0,
              inputs: [],
              name: "DOMAIN_SEPARATOR",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "MINIMUM_LIQUIDITY",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "PERMIT_TYPEHASH",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [
                { internalType: "address", name: "", type: "address" },
                { internalType: "address", name: "", type: "address" },
              ],
              name: "allowance",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
              ],
              name: "burn",
              outputs: [
                { internalType: "uint256", name: "amount0", type: "uint256" },
                { internalType: "uint256", name: "amount1", type: "uint256" },
              ],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "decimals",
              outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "factory",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "getReserves",
              outputs: [
                { internalType: "uint112", name: "_reserve0", type: "uint112" },
                { internalType: "uint112", name: "_reserve1", type: "uint112" },
                {
                  internalType: "uint32",
                  name: "_blockTimestampLast",
                  type: "uint32",
                },
              ],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "_token0", type: "address" },
                { internalType: "address", name: "_token1", type: "address" },
              ],
              name: "initialize",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "kLast",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
              ],
              name: "mint",
              outputs: [
                { internalType: "uint256", name: "liquidity", type: "uint256" },
              ],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [{ internalType: "address", name: "", type: "address" }],
              name: "nonces",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
                { internalType: "uint8", name: "v", type: "uint8" },
                { internalType: "bytes32", name: "r", type: "bytes32" },
                { internalType: "bytes32", name: "s", type: "bytes32" },
              ],
              name: "permit",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "price0CumulativeLast",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "price1CumulativeLast",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
              ],
              name: "skim",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount0Out",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1Out",
                  type: "uint256",
                },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "bytes", name: "data", type: "bytes" },
              ],
              name: "swap",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [],
              name: "sync",
              outputs: [],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "token0",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "token1",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !0,
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: !1,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: !1,
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: !1,
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
          e9 = function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              a = (0, e8.Z)();
            return (0, C.a)({
              ...n,
              queryKey: ["uniswap-v2", e],
              queryFn: async () => {
                if (!e || !t) throw "No address";
                let [n, r] = await (0, e1.L)(a, {
                  abi: e7,
                  address: e,
                  functionName: "getReserves",
                });
                t = t.toLowerCase();
                let s = $.y5,
                  l = +_(s.toLowerCase() < t.toLowerCase() ? n : r, 18),
                  i = +_(s.toLowerCase() < t.toLowerCase() ? r : n, 18),
                  o = l / i,
                  d = o * i;
                return {
                  agentPriceInSpec: o,
                  agentMarketCapInSpec: d,
                  toUsd: (e) => ({
                    agentPrice: +o * Number(e),
                    marketCap: +d * Number(e),
                  }),
                };
              },
              enabled: !!e && !!t,
              refetchOnWindowFocus: !1,
            });
          };
        var te = n(73935),
          tt = n(52650),
          tn = n(40100);
        function ta(e) {
          let { open: t, setOpen: n, agentId: a, agent: r } = e,
            s = (0, X.p)(),
            l = (0, w.useMemo)(() => {
              var e, t;
              return (
                null == r
                  ? void 0
                  : null === (e = r.token_project) || void 0 === e
                  ? void 0
                  : e.syntax_contract_address
              )
                ? ""
                    .concat(window.location.origin, "/tokens/")
                    .concat(
                      null == r
                        ? void 0
                        : null === (t = r.token_project) || void 0 === t
                        ? void 0
                        : t.syntax_contract_address
                    )
                : "";
            }, [r]),
            i = (0, w.useMemo)(
              () =>
                "\uD83D\uDCA5Check out this fully autonomous AI agent on Spectral Syntax. It trades onchain and its token holders get to influence its thinking and decisions. \uD83E\uDDE0\uD83D\uDCA1",
              [r]
            ),
            o = (0, w.useMemo)(() => {
              let e = encodeURIComponent(i),
                t = encodeURIComponent(l);
              return {
                twitter: "https://twitter.com/intent/tweet?text="
                  .concat(e, "&url=")
                  .concat(t),
                telegram: "https://t.me/share/url?url="
                  .concat(encodeURIComponent(l), "&text=")
                  .concat(i),
                discord: "https://discord.com/channels/@me?message=".concat(
                  encodeURIComponent("".concat(i, "\n").concat(l))
                ),
              };
            }, [i, l]),
            d = (0, w.useCallback)(() => {
              navigator.clipboard.writeText("".concat(i, "\n").concat(l)),
                s("info", "Copied to clipboard!", { duration: 3e3 });
            }, [l, i]);
          return t
            ? te.createPortal(
                (0, g.jsx)(g.Fragment, {
                  children: (0, g.jsx)("div", {
                    className:
                      "absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-dark-50 bg-opacity-50 z-[99999] md:px-0 px-3",
                    children: (0, g.jsxs)(e6.E.div, {
                      className:
                        "md:w-[480px] w-full border border-solid border-primary bg-primary p-6 relative rounded-2xl",
                      initial: "hidden",
                      animate: "visible",
                      variants: {
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      },
                      transition: { duration: 0.3 },
                      children: [
                        (0, g.jsx)(tt.Z, {
                          className:
                            "w-5 h-5 absolute top-[14px] right-4 hover:cursor-pointer",
                          onClick: () => n(!1),
                        }),
                        (0, g.jsx)("div", {
                          className:
                            "font-inter text-lg font-medium text-lightTitles mb-8",
                          children: "Share this agent!",
                        }),
                        (0, g.jsxs)("div", {
                          children: [
                            (0, g.jsx)("div", {
                              className: "text-xs font-medium mb-3",
                              children: "Share Link",
                            }),
                            (0, g.jsxs)("div", {
                              className:
                                "flex flex-row h-10 items-center justify-between p-3 rounded-lg border border-solid border-secondary bg-primary resize-none transition-all ease-in-out scrollbar-hide",
                              children: [
                                (0, g.jsx)("span", {
                                  className:
                                    "grow bg-transparent text-gray-300 text-xs font-inter font-regular truncate w-8/10",
                                  children: l,
                                }),
                                (0, g.jsx)(tn.Z, {
                                  className:
                                    "w-4 h-4 text-gray-100 cursor-pointer hover:text-white shrink-0",
                                  onClick: d,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, g.jsxs)("div", {
                          children: [
                            (0, g.jsx)("div", {
                              className: "text-xs font-medium mb-3 mt-4",
                              children: "Share via Socials",
                            }),
                            (0, g.jsxs)("div", {
                              className:
                                "flex gap-4 *:rounded-full hover:*:opacity-80 *:transition-all *:cursor-pointer",
                              children: [
                                (0, g.jsx)("a", {
                                  href: o.twitter,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, g.jsxs)("svg", {
                                    width: "52",
                                    height: "52",
                                    viewBox: "0 0 52 52",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, g.jsx)("rect", {
                                        x: "0.5",
                                        y: "0.5",
                                        width: "51",
                                        height: "51",
                                        rx: "25.5",
                                        stroke: "#444B5F",
                                      }),
                                      (0, g.jsx)("path", {
                                        d: "M31.171 17.875H33.9277L27.9052 24.7583L34.9902 34.125H29.4419L25.0969 28.4442L20.1252 34.125H17.3669L23.8085 26.7625L17.0127 17.875H22.7002L26.6277 23.0675L31.171 17.875ZM30.2035 32.475H31.731L21.871 19.4383H20.2319L30.2035 32.475Z",
                                        fill: "#BAC0CC",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, g.jsx)("a", {
                                  href: o.telegram,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, g.jsxs)("svg", {
                                    width: "52",
                                    height: "52",
                                    viewBox: "0 0 52 52",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, g.jsx)("rect", {
                                        x: "0.5",
                                        y: "0.5",
                                        width: "51",
                                        height: "51",
                                        rx: "25.5",
                                        stroke: "#444B5F",
                                      }),
                                      (0, g.jsx)("path", {
                                        d: "M26 16C20.48 16 16 20.48 16 26C16 31.52 20.48 36 26 36C31.52 36 36 31.52 36 26C36 20.48 31.52 16 26 16ZM30.64 22.8C30.49 24.38 29.84 28.22 29.51 29.99C29.37 30.74 29.09 30.99 28.83 31.02C28.25 31.07 27.81 30.64 27.25 30.27C26.37 29.69 25.87 29.33 25.02 28.77C24.03 28.12 24.67 27.76 25.24 27.18C25.39 27.03 27.95 24.7 28 24.49C28.0069 24.4582 28.006 24.4252 27.9973 24.3938C27.9886 24.3624 27.9724 24.3337 27.95 24.31C27.89 24.26 27.81 24.28 27.74 24.29C27.65 24.31 26.25 25.24 23.52 27.08C23.12 27.35 22.76 27.49 22.44 27.48C22.08 27.47 21.4 27.28 20.89 27.11C20.26 26.91 19.77 26.8 19.81 26.45C19.83 26.27 20.08 26.09 20.55 25.9C23.47 24.63 25.41 23.79 26.38 23.39C29.16 22.23 29.73 22.03 30.11 22.03C30.19 22.03 30.38 22.05 30.5 22.15C30.6 22.23 30.63 22.34 30.64 22.42C30.63 22.48 30.65 22.66 30.64 22.8Z",
                                        fill: "#BAC0CC",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, g.jsxs)("svg", {
                                  width: "52",
                                  height: "52",
                                  viewBox: "0 0 52 52",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  onClick: () => {
                                    navigator.clipboard.writeText(
                                      "".concat(i, "\n").concat(l)
                                    ),
                                      s(
                                        "info",
                                        "Copied to clipboard! Paste it in Discord.",
                                        5e3
                                      );
                                  },
                                  children: [
                                    (0, g.jsx)("rect", {
                                      x: "0.5",
                                      y: "0.5",
                                      width: "51",
                                      height: "51",
                                      rx: "25.5",
                                      stroke: "#444B5F",
                                    }),
                                    (0, g.jsx)("path", {
                                      d: "M34.5967 19.0333C33.1633 18.3833 31.6367 17.9167 30.0467 17.6667C29.8387 18.0403 29.6053 18.5267 29.4433 18.9133C27.7467 18.68 26.0633 18.68 24.4033 18.9133C24.2413 18.5267 24.0013 18.0403 23.7933 17.6667C22.2033 17.9167 20.6733 18.3867 19.24 19.0367C16.1533 23.5867 15.32 28.02 15.7333 32.3867C17.6667 33.8067 19.5433 34.6667 21.3867 35.2267C21.8067 34.6467 22.18 34.0333 22.5 33.3867C21.7967 33.1133 21.1267 32.78 20.4867 32.3867C20.6487 32.2733 20.8067 32.1533 20.96 32.0333C24.2533 33.5667 27.8267 33.5667 31.08 32.0333C31.2333 32.1533 31.3913 32.2733 31.5533 32.3867C30.9133 32.78 30.24 33.1133 29.54 33.3867C29.86 34.0333 30.23 34.6467 30.6533 35.2267C32.4967 34.6667 34.3733 33.8067 36.3067 32.3867C36.7967 27.3467 35.4867 22.9533 34.5967 19.0333ZM23.2667 29.9867C22.2633 29.9867 21.4333 29.0533 21.4333 27.9167C21.4333 26.78 22.24 25.8467 23.2667 25.8467C24.2933 25.8467 25.1233 26.78 25.1 27.9167C25.1 29.0533 24.2933 29.9867 23.2667 29.9867ZM30.6733 29.9867C29.67 29.9867 28.84 29.0533 28.84 27.9167C28.84 26.78 29.6467 25.8467 30.6733 25.8467C31.7 25.8467 32.53 26.78 32.5067 27.9167C32.5067 29.0533 31.7 29.9867 30.6733 29.9867Z",
                                      fill: "#BAC0CC",
                                    }),
                                  ],
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
        }
        var tr = n(11163),
          ts = n(27282);
        let tl = { abi: W.y, address: $.Uk };
        var ti = (e) => {
            var t, n, a, r, s, l, i, o, d;
            let { setAgentToken: c } = e,
              { tokenId: u } = (0, ec.useParams)() || {},
              { user: m } = (0, ek.sv)(),
              p = (0, tr.useRouter)(),
              x = (0, w.useRef)(null),
              y = (0, w.useRef)(null),
              h = (0, w.useRef)(null),
              [f, v] = (0, w.useState)(!1),
              j = (0, C.a)({
                queryKey: ["agent", u],
                queryFn: () => (0, N.yB)(String(u)),
                refetchOnWindowFocus: !1,
                retry: 1,
                retryDelay: 5e3,
                enabled: !!u,
              }),
              k =
                null == j
                  ? void 0
                  : null === (t = j.data) || void 0 === t
                  ? void 0
                  : t.data,
              M = null == k ? void 0 : k.id,
              [I, D] = (0, w.useState)(),
              z = I || (null == k ? void 0 : k.token_project),
              { handle: F } = k || {},
              { userData: B } = (0, e0.a)(),
              L = (0, w.useMemo)(() => {
                var e, t;
                return (
                  (null == k
                    ? void 0
                    : null === (e = k.token_project) || void 0 === e
                    ? void 0
                    : e.contract_address) ||
                  (null == k
                    ? void 0
                    : null === (t = k.token_project) || void 0 === t
                    ? void 0
                    : t.syntax_contract_address)
                );
              }, [k]),
              P = e5(k),
              { data: H } = e9(P, L, { refetchInterval: 5e3 }),
              U = eT(
                null == k
                  ? void 0
                  : null === (n = k.governance_room) || void 0 === n
                  ? void 0
                  : n.id
              ),
              R = eT(
                null == k
                  ? void 0
                  : null === (a = k.trollbox_room) || void 0 === a
                  ? void 0
                  : a.id
              ),
              Z = null == k ? void 0 : k.token_project.id,
              { balance: W, ...V } = J(L);
            (0, w.useEffect)(() => {
              M && L && M !== L && p.replace("/tokens/".concat(L));
            }, [M, L]);
            let K = eX(Z && "tokens:".concat(Z)).on(
                "token_project_updated",
                (e) => {
                  D(e.data);
                }
              ),
              G = (0, w.useMemo)(
                () =>
                  P
                    ? {
                        title: "Uniswap",
                        contractAddress: P,
                        url: "https://dexscreener.com/base/".concat(P),
                        className: "bg-[#2388FF]/20",
                        subClassName: "!bg-[#2388ff]",
                      }
                    : {
                        title: "Syntax",
                        contractAddress: L,
                        url: ""
                          .concat(eL.u.blockExplorers.default.url, "/address/")
                          .concat(L),
                        className: "bg-[#bce635]/20",
                      },
                [P, k, L]
              ),
              Y = (0, w.useRef)(0),
              [X, Q] = (0, w.useState)([]),
              ee = (0, C.a)({
                queryKey: ["agentBrain", M],
                queryFn: () =>
                  (0, N.lU)(String(M)).then((e) => e.data.reverse()),
                refetchOnWindowFocus: !1,
                enabled: !!M && "undefined" !== M,
              });
            eX(M && "agent_brain:".concat(M)).on("new_thought", (e) => {
              let t = Date.now(),
                n = Math.max(0, Y.current - t + 1e3 + 1e3 * Math.random());
              (Y.current = t + n),
                setTimeout(() => {
                  Q((t) => t.concat([e.data]).slice(-50));
                }, n);
            });
            let et = (0, w.useMemo)(() => {
                let e = [...(ee.data || []), ...X].slice(-50);
                if (!e.length) return;
                let t = () => {
                  if (h.current) {
                    var e;
                    h.current.scrollTo({
                      behavior: "smooth",
                      top:
                        null === (e = h.current) || void 0 === e
                          ? void 0
                          : e.scrollHeight,
                    });
                  } else setTimeout(t, 200);
                };
                return setTimeout(() => t(), 300), eG(e);
              }, [ee.data, X]),
              { data: en, refetch: ea } = (0, q.u)({
                ...tl,
                functionName: "totalSPECDeposited",
                args: [L],
              }),
              { data: er, refetch: es } = (0, q.u)({
                ...tl,
                functionName: "getTokensReceived",
                args: [T(1, 18, !0), L],
              });
            (0, w.useEffect)(() => {
              if (P) return;
              let e = setInterval(() => {
                ea(), es();
              }, 5e3);
              return () => {
                clearInterval(e);
              };
            }, [P]);
            let [el, eh] = (0, w.useState)(),
              ef = Number(null == z ? void 0 : z.spec_price),
              eg = (0, w.useMemo)(() => {
                if (P) {
                  if (!H) return {};
                  let e = H.toUsd(ef);
                  return {
                    specPrice: H.agentPriceInSpec,
                    price: e.agentPrice,
                    marketCap: null == z ? void 0 : z.market_cap,
                  };
                }
                {
                  if (!er) return {};
                  let e = 1 / +_(BigInt(er), 18);
                  return {
                    specPrice: e,
                    price: el || (ef ? e * ef : void 0),
                    marketCap: null == z ? void 0 : z.market_cap,
                  };
                }
              }, [P, H, Number(er), ef, el, z]),
              ev = (0, w.useMemo)(() => {
                if (!k || !z) return {};
                let e = (e) =>
                    isNaN(Number(e))
                      ? e
                      : "$ " + (0, E.M3)(null != e ? e : "0", 5, 2, 2),
                  { specPrice: t, price: n, marketCap: a } = eg;
                return {
                  primary: {
                    title: "$".concat(z.ticker, " Token Metrics"),
                    items: [
                      {
                        label: (0, g.jsxs)(g.Fragment, {
                          children: [t ? (0, E.T4)(t, 4) : "—", " SPEC"],
                        }),
                        value: (0, g.jsxs)(g.Fragment, {
                          children: ["$ ", n ? (0, E.T4)(n, 4) : "—"],
                        }),
                      },
                      { label: "MarketCap", value: e(a) },
                      { label: "24H Vol", value: e(z.volume_24h) },
                    ],
                  },
                  secondary: {
                    title: (0, g.jsxs)(g.Fragment, {
                      children: [
                        (0, g.jsxs)("span", {
                          className: "flex items-center gap-x-1",
                          children: [
                            "Trading Wallet",
                            (0, g.jsx)(eu.e, {
                              content: (0, g.jsx)("span", {
                                className:
                                  "font-inter max-w-[280px] whitespace-normal text-sm font-regular text-gray-400",
                                children:
                                  "Values update every 5 mins. For latest data, visit HypurrScan.",
                              }),
                              placement: "bottom",
                              className:
                                "cursor-pointer rounded-lg border border-solid border-gray-200 bg-tertiary p-4",
                              children: (0, g.jsx)(eO.Z, {
                                height: 12,
                                width: 12,
                                className: "cursor-pointer",
                              }),
                            }),
                          ],
                        }),
                        k.wallet &&
                          (0, g.jsxs)(g.Fragment, {
                            children: [
                              (0, g.jsx)("div", { className: "flex-1" }),
                              (0, g.jsxs)("a", {
                                target: "_blank",
                                href: "https://hypurrscan.io/address/".concat(
                                  k.wallet
                                ),
                                className:
                                  "mr-2 flex items-center gap-x-1 underline underline-offset-1",
                                children: [
                                  "HypurrScan",
                                  (0, g.jsx)(ez, {
                                    width: 10,
                                    height: 10,
                                    className: "relative -top-[1px]",
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("a", {
                                target: "_blank",
                                href: ""
                                  .concat(
                                    eL.u.blockExplorers.default.url,
                                    "/address/"
                                  )
                                  .concat(k.wallet),
                                className:
                                  "flex items-center gap-x-1 underline underline-offset-1",
                                children: [
                                  "BaseScan",
                                  (0, g.jsx)(ez, {
                                    width: 10,
                                    height: 10,
                                    className: "relative -top-[1px]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    items: [
                      {
                        label: "Unrealized P&L",
                        value: e(z.unrealized_pnl || "—"),
                      },
                      {
                        label: "Total Balance",
                        value: e(z.total_balance || "—"),
                      },
                      {
                        label: "24H Trading Vol",
                        value: e(
                          (null == z ? void 0 : z.trading_volume_24h) || "—"
                        ),
                      },
                    ],
                  },
                };
              }, [k, eg]);
            (0, w.useEffect)(() => {
              if (!z) return;
              let { price: e } = eg;
              c({
                name: "".concat(z.name, " | $").concat(z.ticker),
                price: e ? (0, E.T4)(e, 4) : "—",
              });
            }, [k, eg]);
            let eb = +_(Number(en) || 0, 18),
              ej = Math.max(0, Math.min(1, eb / 2e3));
            (0, w.useEffect)(() => {
              B && (j.refetch(), ee.refetch());
            }, [B]),
              (0, w.useEffect)(() => {
                var e;
                k &&
                  !(0, $.OF)(
                    null == k
                      ? void 0
                      : null === (e = k.token_project) || void 0 === e
                      ? void 0
                      : e.syntax_contract_address
                  ) &&
                  p.push("/");
              }, [k]);
            let eC = (0, w.useCallback)(() => {
              let e = () => {
                ea(), es(), V.reload();
              };
              e(), setTimeout(e, 1e3), setTimeout(e, 4e3);
            }, [ea, es, V.reload]);
            if (
              !k ||
              !z ||
              !(0, $.OF)(
                null == k
                  ? void 0
                  : null === (r = k.token_project) || void 0 === r
                  ? void 0
                  : r.syntax_contract_address
              )
            )
              return (0, g.jsx)(S.c, {
                color: "white",
                size: "md",
                className: "m-auto",
              });
            let eN = { alias: k.name, name: F, image: k.image };
            return (0, g.jsxs)("div", {
              className: "h-max w-full mx-auto pt-0",
              "data-sentry-component": "TokenDetails",
              "data-sentry-source-file": "index.tsx",
              children: [
                (0, g.jsx)(ts.Z, {
                  agentId: k.id,
                  "data-sentry-element": "HyperliquidBanner",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "HyperliquidBanner",
                }),
                (0, g.jsxs)(b, {
                  "data-sentry-element": "ContentContainer",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "ContentContainer",
                  children: [
                    (0, g.jsx)(ta, {
                      open: f,
                      setOpen: v,
                      agentId: String(L),
                      agent: k,
                      "data-sentry-element": "TokenShare",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "TokenShare",
                    }),
                    (0, g.jsxs)(eo, {
                      "data-sentry-element": "ContentCardGrid",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "ContentCardGrid",
                      children: [
                        (0, g.jsxs)(ed, {
                          empty: !0,
                          "data-sentry-element": "ContentCard",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ContentCard",
                          children: [
                            (0, g.jsxs)("div", {
                              className:
                                "relative z-[2] -mb-4 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-[#1c2033] p-6",
                              children: [
                                (0, g.jsxs)("div", {
                                  className:
                                    "flex w-max flex-1 items-center gap-2",
                                  children: [
                                    k.image &&
                                      (0, g.jsx)(A(), {
                                        alt: k.name,
                                        className:
                                          "min-w-[80px] h-[80px] w-[80px] rounded-full object-cover bg-gray-200",
                                        height: 80,
                                        width: 80,
                                        src: k.image,
                                      }),
                                    (0, g.jsxs)("div", {
                                      className: "text-contrast",
                                      children: [
                                        (0, g.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, g.jsx)("span", {
                                              className:
                                                "mr-1 truncate text-lg font-semibold text-lightTitles",
                                              children: k.name,
                                            }),
                                            (0, g.jsxs)("span", {
                                              className: "text-sm font-normal",
                                              children: ["$", z.ticker],
                                            }),
                                          ],
                                        }),
                                        (0, g.jsx)("a", {
                                          target: "_blank",
                                          href: G.url,
                                          className: "inline-block",
                                          children: (0, g.jsxs)("div", {
                                            className: "h-6 px-2 ".concat(
                                              G.className,
                                              " inline-flex cursor-pointer items-center justify-start gap-1.5 whitespace-nowrap rounded-full"
                                            ),
                                            children: [
                                              (0, g.jsx)("div", {
                                                className: "".concat(
                                                  G.subClassName,
                                                  " h-1.5 w-1.5 rounded-full bg-[#bce635]"
                                                ),
                                              }),
                                              (0, g.jsxs)("div", {
                                                className:
                                                  "text-[10px] font-semibold text-gray-400",
                                                children: ["Live on ", G.title],
                                              }),
                                              (0, g.jsxs)("span", {
                                                className:
                                                  "relative top-[1px] flex items-center gap-x-1 text-[10px] font-medium text-[#acb4c0]",
                                                children: [
                                                  (0, em.Xn)(
                                                    null == G
                                                      ? void 0
                                                      : G.contractAddress
                                                  ),
                                                  (0, g.jsx)(ez, {
                                                    width: 12,
                                                    height: 12,
                                                    className:
                                                      "relative -top-[1px]",
                                                    "data-sentry-element":
                                                      "ExternalLinkIcon",
                                                    "data-sentry-source-file":
                                                      "index.tsx",
                                                    "data-sentry-element":
                                                      "ExternalLinkIcon",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, g.jsx)("div", { className: "h-2" }),
                                        (0, g.jsxs)("div", {
                                          className:
                                            "font-semi flex cursor-pointer items-center gap-x-1 text-xs",
                                          onClick: () => v(!0),
                                          children: [
                                            "Share",
                                            (0, g.jsx)(eI, {
                                              "data-sentry-element":
                                                "ShareIcon",
                                              "data-sentry-source-file":
                                                "index.tsx",
                                              "data-sentry-element":
                                                "ShareIcon",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, g.jsx)("div", {
                                  className: "w-max min-w-[240px] flex-1",
                                  children: (0, g.jsx)("div", {
                                    className: "text-xs",
                                    children: z.description,
                                  }),
                                }),
                              ],
                            }),
                            (0, g.jsx)(ep, {
                              ...ev,
                              className: "*:pt-8",
                              "data-sentry-element": "ValuesCard",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "ValuesCard",
                            }),
                          ],
                        }),
                        (0, g.jsxs)(eo, {
                          columns: !P,
                          "data-sentry-element": "ContentCardGrid",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ContentCardGrid",
                          children: [
                            (0, g.jsx)(ed, {
                              empty: !0,
                              className:
                                "overflow-hidden min-h-[380px] max-xl:h-[400px]",
                              "data-sentry-element": "ContentCard",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "ContentCard",
                              children: P
                                ? (0, g.jsx)(e2, { poolAddress: P })
                                : (0, g.jsx)(O, {
                                    tokenAddress:
                                      null == k
                                        ? void 0
                                        : null === (s = k.token_project) ||
                                          void 0 === s
                                        ? void 0
                                        : s.syntax_contract_address,
                                    pair:
                                      (null == k
                                        ? void 0
                                        : null === (l = k.token_project) ||
                                          void 0 === l
                                        ? void 0
                                        : l.ticker) + "/USD",
                                    tokenFeed: K,
                                    tokenCreation:
                                      null == k
                                        ? void 0
                                        : null === (i = k.token_project) ||
                                          void 0 === i
                                        ? void 0
                                        : i.inserted_at,
                                    onLastCloseValue: eh,
                                  }),
                            }),
                            (0, g.jsxs)(eo, {
                              width: P ? void 0 : 284,
                              columns: !!P,
                              "data-sentry-element": "ContentCardGrid",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "ContentCardGrid",
                              children: [
                                (0, g.jsxs)(ed, {
                                  className: P ? "flex-1" : "",
                                  "data-sentry-element": "ContentCard",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "ContentCard",
                                  children: [
                                    (0, g.jsx)(ed.Title, {
                                      title: (0, g.jsxs)(g.Fragment, {
                                        children: [
                                          "bonding curve progress: ",
                                          (0, g.jsxs)("b", {
                                            children: [
                                              (
                                                Math.round(1e4 * ej) / 100
                                              ).toFixed(2),
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      "data-sentry-element": "unknown",
                                      "data-sentry-source-file": "index.tsx",
                                      "data-sentry-element": "unknown",
                                    }),
                                    (0, g.jsx)(ey, {
                                      target: 2e3,
                                      value: eb,
                                      "data-sentry-element": "ProgressBar",
                                      "data-sentry-source-file": "index.tsx",
                                      "data-sentry-element": "ProgressBar",
                                    }),
                                    (0, g.jsx)("div", { className: "h-2" }),
                                    (0, g.jsxs)("div", {
                                      className: "text-xs",
                                      children: [
                                        "Once liquidity reaches ",
                                        ex(2e3),
                                        " SPEC, a pool will be launched on Uniswap.",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, g.jsxs)(ed, {
                                  className:
                                    "flex flex-col items-stretch ".concat(
                                      !!P && "flex-1"
                                    ),
                                  "data-sentry-element": "ContentCard",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "ContentCard",
                                  children: [
                                    (0, g.jsx)(ed.Title, {
                                      title: (0, g.jsx)(g.Fragment, {
                                        children: (0, g.jsxs)("span", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            "Swap",
                                            (0, g.jsx)(eu.e, {
                                              content: (0, g.jsxs)("span", {
                                                className:
                                                  "font-inter max-w-[280px] whitespace-normal text-sm font-regular text-gray-400",
                                                children: [
                                                  "Includes a 1% fee on Syntax.",
                                                  (0, g.jsx)("br", {}),
                                                  "On Uniswap, a 1% fee will apply until 25K SPEC liquidity is reached, after which the fee will be adjusted to 0.1%",
                                                ],
                                              }),
                                              placement: "top",
                                              className:
                                                "rounded-lg border border-solid border-gray-200 bg-tertiary p-4",
                                              children: (0, g.jsx)(eO.Z, {
                                                height: 12,
                                                width: 12,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      "data-sentry-element": "unknown",
                                      "data-sentry-source-file": "index.tsx",
                                      "data-sentry-element": "unknown",
                                      children: (0, g.jsxs)("div", {
                                        onClick: () => V.addAssetToWallet(),
                                        className: "flex cursor-pointer gap-1",
                                        children: [
                                          (0, g.jsx)(eP.Z, {
                                            size: 16,
                                            "data-sentry-element": "Plus",
                                            "data-sentry-source-file":
                                              "index.tsx",
                                            "data-sentry-element": "Plus",
                                          }),
                                          (0, g.jsx)(eJ, {
                                            "data-sentry-element":
                                              "MetaMaskIcon",
                                            "data-sentry-source-file":
                                              "index.tsx",
                                            "data-sentry-element":
                                              "MetaMaskIcon",
                                          }),
                                        ],
                                      }),
                                    }),
                                    P
                                      ? (0, g.jsx)(g.Fragment, {
                                          children: (0, g.jsx)("a", {
                                            href: "https://app.uniswap.org/swap?chain=base&inputCurrency="
                                              .concat($.y5, "&outputCurrency=")
                                              .concat(L),
                                            target: "_blank",
                                            children: (0, g.jsx)("div", {
                                              className:
                                                "\n                          w-full\n                          bg-[#fc72ff] transition-all ease-in-out text-white\n                          hover:bg-[#fc72ff]/80\n                          cursor-pointer h-8 px-3 rounded-lg justify-center items-center inline-flex text-xs font-medium\n                          mt-6\n                        ",
                                              children: "View on Uniswap",
                                            }),
                                          }),
                                        })
                                      : (0, g.jsx)(ei, {
                                          onSwap: () => eC(),
                                          agent: {
                                            address: z.syntax_contract_address,
                                            symbol: z.ticker,
                                            image: k.image,
                                            tokenId: null == z ? void 0 : z.id,
                                          },
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, g.jsxs)(eo, {
                          columns: !0,
                          height: "60vh",
                          "data-sentry-element": "ContentCardGrid",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ContentCardGrid",
                          children: [
                            (0, g.jsxs)(ed, {
                              className: "max-xl:h-[460px]",
                              "data-sentry-element": "ContentCard",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "ContentCard",
                              children: [
                                (0, g.jsx)(ed.Title, {
                                  title: (0, g.jsxs)("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      "Governance",
                                      (0, g.jsxs)(eY, {
                                        children: [
                                          "Engage with the community to govern the agent’s decisions. Your $",
                                          z.ticker,
                                          " holdings determine your power — more tokens, more influence.",
                                        ],
                                      }),
                                    ],
                                  }),
                                  "data-sentry-element": "unknown",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "unknown",
                                  children: (0, g.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      (0, g.jsxs)("a", {
                                        className:
                                          "flex transform-none cursor-pointer items-center gap-1 text-xs font-medium text-gray-300 hover:opacity-80",
                                        href: "https://basescan.org/token/".concat(
                                          z.syntax_contract_address,
                                          "#balances"
                                        ),
                                        target: "_blank",
                                        children: [
                                          "Holders",
                                          (0, g.jsx)(ez, {
                                            width: 12,
                                            className: "relative -top-[1px]",
                                            "data-sentry-element":
                                              "ExternalLinkIcon",
                                            "data-sentry-source-file":
                                              "index.tsx",
                                            "data-sentry-element":
                                              "ExternalLinkIcon",
                                          }),
                                        ],
                                      }),
                                      (0, g.jsx)(eu.e, {
                                        content: (0, g.jsx)("span", {
                                          className:
                                            "font-inter line-clamp-1 text-sm font-regular text-gray-400",
                                          children: "Coming Soon!",
                                        }),
                                        placement: "top",
                                        className:
                                          "rounded-lg border border-solid border-gray-200 bg-tertiary p-4",
                                        isDisabled: !!(null == k
                                          ? void 0
                                          : null === (o = k.governance_room) ||
                                            void 0 === o
                                          ? void 0
                                          : o.telegram_invite_link),
                                        "data-sentry-element": "Tooltip",
                                        "data-sentry-source-file": "index.tsx",
                                        "data-sentry-element": "Tooltip",
                                        children: (0, g.jsx)("a", {
                                          className: (
                                            null == k
                                              ? void 0
                                              : null ===
                                                  (d = k.governance_room) ||
                                                void 0 === d
                                              ? void 0
                                              : d.telegram_invite_link
                                          )
                                            ? "opacity-100"
                                            : "opacity-50",
                                          href: k.governance_room
                                            .telegram_invite_link,
                                          target: "_blank",
                                          children: (0, g.jsx)(eB, {
                                            height: 16,
                                            width: 16,
                                            viewBox: "0 0 18 18",
                                            "data-sentry-element":
                                              "TelegramIcon",
                                            "data-sentry-source-file":
                                              "index.tsx",
                                            "data-sentry-element":
                                              "TelegramIcon",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, g.jsx)(ed.ScrollableContent, {
                                  ref: x,
                                  className: "bottom-[64px] pb-8",
                                  "data-sentry-element": "unknown",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "unknown",
                                  children: (0, g.jsx)(ew, {
                                    agent: eN,
                                    scrollRef: x,
                                    chat: U.messages,
                                    onClickHandle: (e) => {
                                      var t;
                                      return null === (t = y.current) ||
                                        void 0 === t
                                        ? void 0
                                        : t.injectHandle(e.user.name);
                                    },
                                    "data-sentry-element": "TokenChat",
                                    "data-sentry-source-file": "index.tsx",
                                    "data-sentry-element": "TokenChat",
                                  }),
                                }),
                                (0, g.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0 right-0 p-6 pt-0",
                                  children: (0, g.jsx)(eE, {
                                    ref: y,
                                    disabled:
                                      !m || !U.connected || 1 > Number(W),
                                    onSendMessage: (e) => {
                                      m && e && U.sendMessage(e);
                                    },
                                    placeholder:
                                      1 > Number(W)
                                        ? "You must hold ".concat(
                                            z.ticker,
                                            " to participate."
                                          )
                                        : "Send a message...",
                                    cleanOnSend: !0,
                                    sendOnEnter: !0,
                                    actionBanner: (0, g.jsxs)(g.Fragment, {
                                      children: [
                                        "Tag the agent ",
                                        (0, g.jsx)("span", {
                                          className: "font-semibold",
                                          children: F,
                                        }),
                                        " for a reply!",
                                      ],
                                    }),
                                    actionBannerHandle: F,
                                    toastError: U.errors[U.errors.length - 1],
                                    "data-sentry-element": "InputMessage",
                                    "data-sentry-source-file": "index.tsx",
                                    "data-sentry-element": "InputMessage",
                                  }),
                                }),
                              ],
                            }),
                            (0, g.jsxs)(ed, {
                              className: "max-xl:h-[300px]",
                              "data-sentry-element": "ContentCard",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "ContentCard",
                              children: [
                                (0, g.jsx)(ed.Title, {
                                  title: (0, g.jsx)(g.Fragment, {
                                    children: (0, g.jsxs)("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        "Agent Brain",
                                        (0, g.jsx)(eY, {
                                          children:
                                            "Reflects real-time thinking and decisions of the agent based on governance chat and data feeds.",
                                        }),
                                      ],
                                    }),
                                  }),
                                  "data-sentry-element": "unknown",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "unknown",
                                }),
                                ee.isLoading
                                  ? (0, g.jsx)(S.c, {
                                      color: "white",
                                      size: "md",
                                      className: "mt-[100px] w-full flex-1",
                                    })
                                  : !!et &&
                                    (0, g.jsx)(ed.ScrollableContent, {
                                      ref: h,
                                      children: (0, g.jsxs)("div", {
                                        className:
                                          "whitespace-pre-line font-source text-xs font-medium text-[#f0f2f5]",
                                        children: [
                                          et,
                                          (0, g.jsx)("div", {
                                            className:
                                              "flex items-center justify-center pt-6",
                                            children: (0, g.jsx)(e4, {}),
                                          }),
                                        ],
                                      }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                        (0, g.jsx)(ed, {
                          empty: !0,
                          "data-sentry-element": "ContentCard",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ContentCard",
                          children: (0, g.jsx)(eW, {
                            tokenId: String(M),
                            "data-sentry-element": "TokenTransactionDetails",
                            "data-sentry-source-file": "index.tsx",
                            "data-sentry-element": "TokenTransactionDetails",
                          }),
                        }),
                        (0, g.jsxs)(ed, {
                          "data-sentry-element": "ContentCard",
                          "data-sentry-source-file": "index.tsx",
                          "data-sentry-element": "ContentCard",
                          children: [
                            (0, g.jsx)("div", {
                              id: "trollbox",
                              className: "relative -top-[120px]",
                            }),
                            (0, g.jsx)(ed.Title, {
                              title: "Trollbox",
                              "data-sentry-element": "unknown",
                              "data-sentry-source-file": "index.tsx",
                              "data-sentry-element": "unknown",
                              children: (0, g.jsxs)("a", {
                                className:
                                  "flex cursor-pointer items-center gap-1 text-xs font-medium text-gray-300 hover:opacity-80",
                                href: "#send-trollbox-message",
                                children: [
                                  "Scroll to bottom",
                                  (0, g.jsx)(eA.Z, {
                                    width: 12,
                                    "data-sentry-element": "ArrowDown",
                                    "data-sentry-source-file": "index.tsx",
                                    "data-sentry-element": "ArrowDown",
                                  }),
                                ],
                              }),
                            }),
                            (0, g.jsxs)(g.Fragment, {
                              children: [
                                m &&
                                  (0, g.jsx)(g.Fragment, {
                                    children: R.connected
                                      ? (0, g.jsx)(ew, {
                                          agent: eN,
                                          chat: R.messages,
                                        })
                                      : (0, g.jsx)(S.c, {
                                          color: "white",
                                          size: "md",
                                          className: "my-24 w-full",
                                        }),
                                  }),
                                !m &&
                                  (0, g.jsx)(ew, {
                                    agent: eN,
                                    chat: R.messages,
                                  }),
                              ],
                            }),
                            (0, g.jsxs)("div", {
                              className: "pt-3",
                              children: [
                                (0, g.jsx)(eE, {
                                  id: "send-trollbox-message",
                                  disabled: !m || !R.connected,
                                  onSendMessage: (e) => {
                                    m && e && R.sendMessage(e);
                                  },
                                  placeholder: "Send a message...",
                                  cleanOnSend: !0,
                                  sendOnEnter: !0,
                                  toastError: R.errors[R.errors.length - 1],
                                  "data-sentry-element": "InputMessage",
                                  "data-sentry-source-file": "index.tsx",
                                  "data-sentry-element": "InputMessage",
                                }),
                                (0, g.jsx)("div", {
                                  className: "w-full pt-3 text-center",
                                  children: (0, g.jsxs)("a", {
                                    className:
                                      "inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-gray-300 hover:opacity-80",
                                    href: "#trollbox",
                                    children: [
                                      "Scroll to top",
                                      (0, g.jsx)(eH.Z, {
                                        width: 12,
                                        "data-sentry-element": "ArrowUp",
                                        "data-sentry-source-file": "index.tsx",
                                        "data-sentry-element": "ArrowUp",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          to = n(13390),
          td = function () {
            let { tokenId: e } = (0, ec.useParams)() || {},
              [t, n] = (0, w.useState)(null);
            return (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(to.H, {
                  description:
                    "Check out this fully autonomous AI agent. Engage with the community to govern the agent’s decisions - more tokens, more influence.",
                  "data-sentry-element": "SEO",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "SEO",
                }),
                (0, g.jsx)(v.Z, {
                  tokenDetails: t,
                  "data-sentry-element": "AgentsLayout",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "AgentsLayout",
                  children: (0, g.jsx)(
                    ti,
                    {
                      setAgentToken: n,
                      "data-sentry-element": "TokenDetails",
                      "data-sentry-source-file": "index.tsx",
                      "data-sentry-element": "TokenDetails",
                    },
                    String(e)
                  ),
                }),
              ],
            });
          };
      },
    },
    function (e) {
      e.O(0, [2445, 7026, 2215, 7729, 2888, 9774, 179], function () {
        return e((e.s = 83824));
      }),
        (_N_E = e.O());
    },
  ]);
