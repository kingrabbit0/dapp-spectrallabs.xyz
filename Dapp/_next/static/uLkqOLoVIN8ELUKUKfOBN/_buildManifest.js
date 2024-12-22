(self.__BUILD_MANIFEST = (function (s, a, e, t) {
  return {
    __rewrites: {
      afterFiles: [
        {
          has: void 0,
          source: "/maintenance",
          destination: "/maintenance.html",
        },
      ],
      beforeFiles: [],
      fallback: [],
    },
    "/": [s, a, e, "static/chunks/pages/index-f4e09ae3d1e0c0cb.js"],
    "/_error": ["static/chunks/pages/_error-c9ed35f098527f00.js"],
    "/agent-dashboard": [
      s,
      "static/chunks/1748-1d4427368c86df59.js",
      "static/chunks/3883-53be9b5568bd549b.js",
      "static/chunks/5636-285fbaf93981ed72.js",
      a,
      "static/chunks/pages/agent-dashboard-b76832518c6a4be3.js",
    ],
    "/create-agent": [
      s,
      "static/chunks/react-syntax-highlighter/refractor-core-import-b962b54ad41eaae9.js",
      "static/chunks/react-syntax-highlighter_languages_refractor_sqf-41a89e1ecb9ff4b3.js",
      "static/chunks/react-syntax-highlighter_languages_refractor_cshtml-f19a2f180fc55ea7.js",
      "static/chunks/react-syntax-highlighter_languages_refractor_factor-1747413ddd1b7c17.js",
      "static/chunks/9172-314f160681d9d58b.js",
      a,
      t,
      "static/chunks/pages/create-agent-09f789727a7f9ba9.js",
    ],
    "/creator-dashboard": [
      s,
      a,
      e,
      "static/chunks/pages/creator-dashboard-0fbeaa766ca5c1a2.js",
    ],
    "/explore/[id]": [
      s,
      a,
      "static/chunks/pages/explore/[id]-ef14847ba6934809.js",
    ],
    "/profile": [s, a, "static/chunks/pages/profile-b7355fc209429e40.js"],
    "/share/[id]": [s, a, "static/chunks/pages/share/[id]-822be77ce4d197fe.js"],
    "/staking": [s, a, "static/chunks/pages/staking-5fc9c926bc474d96.js"],
    "/tokens/[tokenId]": [
      s,
      "static/chunks/7026-6a5db860979439d9.js",
      a,
      t,
      "static/chunks/pages/tokens/[tokenId]-cfc7efe78715df25.js",
    ],
    sortedPages: [
      "/",
      "/_app",
      "/_error",
      "/agent-dashboard",
      "/create-agent",
      "/creator-dashboard",
      "/explore/[id]",
      "/profile",
      "/share/[id]",
      "/staking",
      "/tokens/[tokenId]",
    ],
  };
})(
  "static/chunks/2445-068335a6d56864bc.js",
  "static/chunks/2215-72f91d2c4da1aa29.js",
  "static/chunks/3719-a6a8fe12b0512e67.js",
  "static/chunks/7729-b1171a17abb6e5c6.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
