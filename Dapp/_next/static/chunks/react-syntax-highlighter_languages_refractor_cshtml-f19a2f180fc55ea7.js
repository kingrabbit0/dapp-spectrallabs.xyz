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
      s = new e.Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = "4049ac75-c704-42b3-856b-133456cbb804"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-4049ac75-c704-42b3-856b-133456cbb804"));
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
        s = new e.Error().stack;
      s &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[s] = "4049ac75-c704-42b3-856b-133456cbb804"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-4049ac75-c704-42b3-856b-133456cbb804"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2079, 3318],
    {
      61958: function (e) {
        function s(e) {
          !(function (e) {
            function s(e, s) {
              return e.replace(/<<(\d+)>>/g, function (e, r) {
                return "(?:" + s[+r] + ")";
              });
            }
            function r(e, r, n) {
              return RegExp(s(e, r), n || "");
            }
            function n(e, s) {
              for (var r = 0; r < s; r++)
                e = e.replace(/<<self>>/g, function () {
                  return "(?:" + e + ")";
                });
              return e.replace(/<<self>>/g, "[^\\s\\S]");
            }
            var a =
                "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
              t = "class enum interface record struct",
              o =
                "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
              i =
                "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
            function c(e) {
              return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
            }
            var u = c(t),
              l = RegExp(c(a + " " + t + " " + o + " " + i)),
              d = c(t + " " + o + " " + i),
              p = c(a + " " + t + " " + i),
              g = n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
              b = n(/\((?:[^()]|<<self>>)*\)/.source, 2),
              f = /@?\b[A-Za-z_]\w*\b/.source,
              h = s(/<<0>>(?:\s*<<1>>)?/.source, [f, g]),
              m = s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d, h]),
              y = /\[\s*(?:,\s*)*\]/.source,
              w = s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [m, y]),
              k = s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [
                g,
                b,
                y,
              ]),
              v = s(/\(<<0>>+(?:,<<0>>+)+\)/.source, [k]),
              x = s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [
                v,
                m,
                y,
              ]),
              _ = { keyword: l, punctuation: /[<>()?,.:[\]]/ },
              E = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
              I = /"(?:\\.|[^\\"\r\n])*"/.source,
              S = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
            (e.languages.csharp = e.languages.extend("clike", {
              string: [
                {
                  pattern: r(/(^|[^$\\])<<0>>/.source, [S]),
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern: r(/(^|[^@$\\])<<0>>/.source, [I]),
                  lookbehind: !0,
                  greedy: !0,
                },
              ],
              "class-name": [
                {
                  pattern: r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [m]),
                  lookbehind: !0,
                  inside: _,
                },
                {
                  pattern: r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
                    f,
                    x,
                  ]),
                  lookbehind: !0,
                  inside: _,
                },
                {
                  pattern: r(/(\busing\s+)<<0>>(?=\s*=)/.source, [f]),
                  lookbehind: !0,
                },
                {
                  pattern: r(/(\b<<0>>\s+)<<1>>/.source, [u, h]),
                  lookbehind: !0,
                  inside: _,
                },
                {
                  pattern: r(/(\bcatch\s*\(\s*)<<0>>/.source, [m]),
                  lookbehind: !0,
                  inside: _,
                },
                { pattern: r(/(\bwhere\s+)<<0>>/.source, [f]), lookbehind: !0 },
                {
                  pattern: r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [w]),
                  lookbehind: !0,
                  inside: _,
                },
                {
                  pattern: r(
                    /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/
                      .source,
                    [x, p, f]
                  ),
                  inside: _,
                },
              ],
              keyword: l,
              number:
                /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
              operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
              punctuation: /\?\.?|::|[{}[\];(),.:]/,
            })),
              e.languages.insertBefore("csharp", "number", {
                range: { pattern: /\.\./, alias: "operator" },
              }),
              e.languages.insertBefore("csharp", "punctuation", {
                "named-parameter": {
                  pattern: r(/([(,]\s*)<<0>>(?=\s*:)/.source, [f]),
                  lookbehind: !0,
                  alias: "punctuation",
                },
              }),
              e.languages.insertBefore("csharp", "class-name", {
                namespace: {
                  pattern: r(
                    /(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/
                      .source,
                    [f]
                  ),
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
                "type-expression": {
                  pattern: r(
                    /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/
                      .source,
                    [b]
                  ),
                  lookbehind: !0,
                  alias: "class-name",
                  inside: _,
                },
                "return-type": {
                  pattern: r(
                    /<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/
                      .source,
                    [x, m]
                  ),
                  inside: _,
                  alias: "class-name",
                },
                "constructor-invocation": {
                  pattern: r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [x]),
                  lookbehind: !0,
                  inside: _,
                  alias: "class-name",
                },
                "generic-method": {
                  pattern: r(/<<0>>\s*<<1>>(?=\s*\()/.source, [f, g]),
                  inside: {
                    function: r(/^<<0>>/.source, [f]),
                    generic: {
                      pattern: RegExp(g),
                      alias: "class-name",
                      inside: _,
                    },
                  },
                },
                "type-list": {
                  pattern: r(
                    /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/
                      .source,
                    [u, h, f, x, l.source, b, /\bnew\s*\(\s*\)/.source]
                  ),
                  lookbehind: !0,
                  inside: {
                    "record-arguments": {
                      pattern: r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [h, b]),
                      lookbehind: !0,
                      greedy: !0,
                      inside: e.languages.csharp,
                    },
                    keyword: l,
                    "class-name": { pattern: RegExp(x), greedy: !0, inside: _ },
                    punctuation: /[,()]/,
                  },
                },
                preprocessor: {
                  pattern: /(^[\t ]*)#.*/m,
                  lookbehind: !0,
                  alias: "property",
                  inside: {
                    directive: {
                      pattern:
                        /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                      lookbehind: !0,
                      alias: "keyword",
                    },
                  },
                },
              });
            var $ = I + "|" + E,
              B = s(
                /\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/
                  .source,
                [$]
              ),
              R = n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2),
              D =
                /\b(?:assembly|event|field|method|module|param|property|return|type)\b/
                  .source,
              z = s(/<<0>>(?:\s*\(<<1>>*\))?/.source, [m, R]);
            e.languages.insertBefore("csharp", "class-name", {
              attribute: {
                pattern: r(
                  /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/
                    .source,
                  [D, z]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  target: {
                    pattern: r(/^<<0>>(?=\s*:)/.source, [D]),
                    alias: "keyword",
                  },
                  "attribute-arguments": {
                    pattern: r(/\(<<0>>*\)/.source, [R]),
                    inside: e.languages.csharp,
                  },
                  "class-name": {
                    pattern: RegExp(m),
                    inside: { punctuation: /\./ },
                  },
                  punctuation: /[:,]/,
                },
              },
            });
            var j = /:[^}\r\n]+/.source,
              A = n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2),
              N = s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [A, j]),
              H = n(
                s(
                  /[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/
                    .source,
                  [$]
                ),
                2
              ),
              C = s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [H, j]);
            function F(s, n) {
              return {
                interpolation: {
                  pattern: r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [s]),
                  lookbehind: !0,
                  inside: {
                    "format-string": {
                      pattern: r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                        n,
                        j,
                      ]),
                      lookbehind: !0,
                      inside: { punctuation: /^:/ },
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                      pattern: /[\s\S]+/,
                      alias: "language-csharp",
                      inside: e.languages.csharp,
                    },
                  },
                },
                string: /[\s\S]+/,
              };
            }
            e.languages.insertBefore("csharp", "string", {
              "interpolation-string": [
                {
                  pattern: r(
                    /(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/
                      .source,
                    [N]
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: F(N, A),
                },
                {
                  pattern: r(
                    /(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,
                    [C]
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: F(C, H),
                },
              ],
              char: { pattern: RegExp(E), greedy: !0 },
            }),
              (e.languages.dotnet = e.languages.cs = e.languages.csharp);
          })(e);
        }
        (e.exports = s),
          (s.displayName = "csharp"),
          (s.aliases = ["dotnet", "cs"]);
      },
      90312: function (e, s, r) {
        var n = r(61958);
        function a(e) {
          e.register(n),
            (function (e) {
              var s = /\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//
                  .source,
                r =
                  /@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/
                    .source +
                  "|" +
                  /'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/
                    .source;
              function n(e, n) {
                for (var a = 0; a < n; a++)
                  e = e.replace(/<self>/g, function () {
                    return "(?:" + e + ")";
                  });
                return e
                  .replace(/<self>/g, "[^\\s\\S]")
                  .replace(/<str>/g, "(?:" + r + ")")
                  .replace(/<comment>/g, "(?:" + s + ")");
              }
              var a = n(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source, 2),
                t = n(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source, 2),
                o = n(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source, 2),
                i = n(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source, 2),
                c =
                  /(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/
                    .source,
                u = /(?!\d)[^\s>\/=$<%]+/.source + c + /\s*\/?>/.source,
                l =
                  /\B@?/.source +
                  "(?:" +
                  /<([a-zA-Z][\w:]*)/.source +
                  c +
                  /\s*>/.source +
                  "(?:" +
                  (/[^<]/.source + "|" + /<\/?(?!\1\b)/.source) +
                  u +
                  "|" +
                  n(
                    /<\1/.source +
                      c +
                      /\s*>/.source +
                      "(?:" +
                      (/[^<]/.source + "|") +
                      /<\/?(?!\1\b)/.source +
                      u +
                      "|<self>)*" +
                      /<\/\1\s*>/.source,
                    2
                  ) +
                  ")*" +
                  /<\/\1\s*>/.source +
                  "|" +
                  /</.source +
                  u +
                  ")";
              e.languages.cshtml = e.languages.extend("markup", {});
              var d = {
                pattern: /\S[\s\S]*/,
                alias: "language-csharp",
                inside: e.languages.insertBefore(
                  "csharp",
                  "string",
                  {
                    html: {
                      pattern: RegExp(l),
                      greedy: !0,
                      inside: e.languages.cshtml,
                    },
                  },
                  { csharp: e.languages.extend("csharp", {}) }
                ),
              };
              e.languages.insertBefore("cshtml", "prolog", {
                "razor-comment": {
                  pattern: /@\*[\s\S]*?\*@/,
                  greedy: !0,
                  alias: "comment",
                },
                block: {
                  pattern: RegExp(
                    /(^|[^@])@/.source +
                      "(?:" +
                      [
                        o,
                        /(?:code|functions)\s*/.source + o,
                        /(?:for|foreach|lock|switch|using|while)\s*/.source +
                          a +
                          /\s*/.source +
                          o,
                        /do\s*/.source +
                          o +
                          /\s*while\s*/.source +
                          a +
                          /(?:\s*;)?/.source,
                        /try\s*/.source +
                          o +
                          /\s*catch\s*/.source +
                          a +
                          /\s*/.source +
                          o +
                          /\s*finally\s*/.source +
                          o,
                        /if\s*/.source +
                          a +
                          /\s*/.source +
                          o +
                          "(?:" +
                          /\s*else/.source +
                          "(?:" +
                          /\s+if\s*/.source +
                          a +
                          ")?" +
                          /\s*/.source +
                          o +
                          ")*",
                      ].join("|") +
                      ")"
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: { keyword: /^@\w*/, csharp: d },
                },
                directive: {
                  pattern:
                    /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
                  lookbehind: !0,
                  greedy: !0,
                  inside: { keyword: /^@\w+/, csharp: d },
                },
                value: {
                  pattern: RegExp(
                    /(^|[^@])@/.source +
                      /(?:await\b\s*)?/.source +
                      "(?:" +
                      /\w+\b/.source +
                      "|" +
                      a +
                      ")(?:" +
                      /[?!]?\.\w+\b/.source +
                      "|" +
                      a +
                      "|" +
                      t +
                      "|" +
                      i +
                      a +
                      ")*"
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  alias: "variable",
                  inside: { keyword: /^@/, csharp: d },
                },
                "delegate-operator": {
                  pattern: /(^|[^@])@(?=<)/,
                  lookbehind: !0,
                  alias: "operator",
                },
              }),
                (e.languages.razor = e.languages.cshtml);
            })(e);
        }
        (e.exports = a), (a.displayName = "cshtml"), (a.aliases = ["razor"]);
      },
    },
  ]);
