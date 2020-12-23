(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    33: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "history", function () {
          return p;
        });
      var c = n(2),
        r = n(0),
        i = n(20),
        j = n.n(i),
        s = n(6),
        b = n(3),
        a = n(10),
        o = n(11),
        u = n(15),
        l = n(14),
        d = (function (e) {
          Object(u.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(c.jsxs)("div", {
                    children: [
                      Object(c.jsx)(s.b, { to: "/", children: "Redux Auth" }),
                      Object(c.jsx)(s.b, {
                        to: "/signup",
                        children: "Sign Up",
                      }),
                      Object(c.jsx)(s.b, {
                        to: "/signin",
                        children: "Sign In",
                      }),
                      Object(c.jsx)(s.b, {
                        to: "/signout",
                        children: "Sign Out",
                      }),
                      Object(c.jsx)(s.b, {
                        to: "/feature",
                        children: "Feature",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(r.Component),
        h = function (e) {
          var t = e.children;
          return Object(c.jsxs)("div", { children: [Object(c.jsx)(d, {}), t] });
        },
        O = (function (e) {
          Object(u.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            return Object(a.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(c.jsxs)("form", {
                    children: [
                      Object(c.jsx)("fieldset", {
                        children: Object(c.jsx)("label", { children: "Email" }),
                      }),
                      Object(c.jsx)("fieldset", {
                        children: Object(c.jsx)("label", {
                          children: "Password",
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(r.Component),
        x = n(22),
        p = Object(x.a)({ basename: "/dev" });
      j.a.render(
        Object(c.jsx)(s.a, {
          basename: "/dev",
          children: Object(c.jsxs)(h, {
            children: [
              Object(c.jsx)(b.a, {
                path: "/",
                exact: !0,
                component: function () {
                  return Object(c.jsx)("h3", {
                    children: "Welcome! Sign up or sign in!",
                  });
                },
              }),
              Object(c.jsx)(b.a, { path: "/signup", exact: !0, component: O }),
            ],
          }),
        }),
        document.querySelector("#root")
      );
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.9d450538.chunk.js.map
