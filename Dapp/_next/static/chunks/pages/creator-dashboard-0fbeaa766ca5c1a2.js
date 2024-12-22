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
      (e._sentryDebugIds[t] = "718fad7b-7c0c-4c51-9a12-259482849b04"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-718fad7b-7c0c-4c51-9a12-259482849b04"));
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
        (e._sentryDebugIds[t] = "718fad7b-7c0c-4c51-9a12-259482849b04"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-718fad7b-7c0c-4c51-9a12-259482849b04"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8371],
    {
      75348: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/creator-dashboard",
          function () {
            return n(17501);
          },
        ]);
      },
      17501: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            default: function () {
              return g;
            },
          });
        var r = n(85893),
          s = n(22215),
          a = n(26791),
          l = n(74523),
          d = n(72192),
          i = n(11163),
          u = n(67294),
          c = n(34863),
          o = n(12842),
          f = function () {
            var e;
            let { username: t, userData: n, creatorData: s } = (0, o.a)();
            (0, i.useRouter)();
            let {
                getAgentsByUserHandler: a,
                userAgents: f,
                agentsListData: y,
                getAllAgentsHandler: g,
                getSortedAgentsByUserHandler: x,
                sortedAgentsByUser: b,
              } = (0, l.k)(),
              [v, m] = (0, u.useState)(!0),
              [w, _] = (0, u.useState)("market_cap"),
              [h, p] = (0, u.useState)(!1),
              [E, j] = (0, u.useState)(),
              I = async () => {
                if (n) {
                  m(!0);
                  try {
                    await a(null == n ? void 0 : n.id);
                  } catch (e) {
                  } finally {
                    m(!1);
                  }
                }
              },
              N = async () => {
                await x(h, w, null == n ? void 0 : n.id);
              };
            (0, u.useEffect)(() => {
              if (w) {
                N();
                return;
              }
              I();
            }, [h, w, n]);
            let D = (0, u.useRef)(null);
            return (
              (0, u.useEffect)(() => {
                let e = (e) => {
                    if (null == D ? void 0 : D.current) {
                      let {
                        scrollTop: r,
                        scrollHeight: s,
                        clientHeight: l,
                      } = e.target;
                      if (r + l + 5 >= s) {
                        var t, n;
                        let e = w
                          ? null == b
                            ? void 0
                            : null === (t = b.meta) || void 0 === t
                            ? void 0
                            : t.end_cursor
                          : null == f
                          ? void 0
                          : null === (n = f.meta) || void 0 === n
                          ? void 0
                          : n.end_cursor;
                        w && e ? x(h, w, e) : e && a(e);
                      }
                    }
                  },
                  t = D.current;
                for (; t && "agent-layout-content" !== t.id; ) t = t.parentNode;
                if (t)
                  return (
                    t.addEventListener("scroll", e),
                    () => {
                      t.removeEventListener("scroll", e);
                    }
                  );
              }, [D.current, E, w, h]),
              (0, u.useEffect)(() => {
                f && j(f);
              }, [f]),
              (0, u.useEffect)(() => {
                b && j(b);
              }, [b]),
              (0, r.jsxs)("div", {
                className:
                  "w-full h-full flex flex-col gap-4  md:pt-10 pt-4 max-w-[768px] mx-auto",
                "data-sentry-component": "CreatorAgents",
                "data-sentry-source-file": "index.tsx",
                children: [
                  E
                    ? (0, r.jsx)(d.Z, {
                        title: "Your Created Agents",
                        agents: null == E ? void 0 : E.data,
                        currentFilter: w,
                        setCurrentFilter: _,
                        isAscendingOrder: h,
                        setIsAscendingOrder: p,
                      })
                    : (0, r.jsx)("div", {
                        className:
                          "flex w-full h-full items-center justify-center",
                        children: (0, r.jsx)(c.c, {
                          color: "white",
                          size: "md",
                        }),
                      }),
                  E &&
                    (null == E
                      ? void 0
                      : null === (e = E.data) || void 0 === e
                      ? void 0
                      : e.length) === 0 &&
                    (0, r.jsx)("div", {
                      className:
                        "flex items-center justify-center h-full w-full",
                      children: (0, r.jsx)("span", {
                        className:
                          "fonto-inter font-normal text-lightTitles text-lg",
                        children: "You have not created any agents.",
                      }),
                    }),
                ],
              })
            );
          },
          y = n(13390),
          g = function () {
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(y.H, {
                  "data-sentry-element": "SEO",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "SEO",
                }),
                (0, r.jsx)(s.Z, {
                  title: (0, r.jsx)(a.D, {}),
                  "data-sentry-element": "AgentsLayout",
                  "data-sentry-source-file": "index.tsx",
                  "data-sentry-element": "AgentsLayout",
                  children: (0, r.jsx)(f, {
                    "data-sentry-element": "CreatorAgents",
                    "data-sentry-source-file": "index.tsx",
                    "data-sentry-element": "CreatorAgents",
                  }),
                }),
              ],
            });
          };
      },
    },
    function (e) {
      e.O(0, [2445, 2215, 3719, 2888, 9774, 179], function () {
        return e((e.s = 75348));
      }),
        (_N_E = e.O());
    },
  ]);
