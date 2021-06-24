function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e;
}

function r(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : n(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t);
}, a = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var r = e[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, o, r) {
        return o && t(e.prototype, o), r && t(e, r), e;
    };
}(), u = function t(e, o, r) {
    null === e && (e = Function.prototype);
    var n = Object.getOwnPropertyDescriptor(e, o);
    if (void 0 === n) {
        var i = Object.getPrototypeOf(e);
        return null === i ? void 0 : t(i, o, r);
    }
    if ("value" in n) return n.value;
    var a = n.get;
    if (void 0 !== a) return a.call(r);
}, l = t(require("./native.js")), p = t(require("./component.js")), f = t(require("./util.js")), c = function(t) {
    function n() {
        var t, r, i, a;
        e(this, n);
        for (var u = arguments.length, l = Array(u), p = 0; p < u; p++) l[p] = arguments[p];
        return r = i = o(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(l))), 
        i.$isComponent = !1, i.$preloadData = void 0, i.$prefetchData = void 0, a = r, o(i, a);
    }
    return r(n, p.default), a(n, [ {
        key: "$init",
        value: function(t, e) {
            this.$parent = e, this.$root = this, e.$wxapp || (e.$wxapp = getApp()), this.$wxapp = e.$wxapp, 
            u(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "$init", this).call(this, t, this);
        }
    }, {
        key: "onLoad",
        value: function() {
            u(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onLoad", this).call(this);
        }
    }, {
        key: "onUnload",
        value: function() {
            u(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "onUnload", this).call(this);
        }
    }, {
        key: "$preload",
        value: function(t, e) {
            if ("object" === (void 0 === t ? "undefined" : i(t))) {
                var o = void 0;
                for (o in t) this.$preload(o, t[o]);
            } else (this.$preloadData ? this.$preloadData : this.$preloadData = {})[t] = e;
        }
    }, {
        key: "$route",
        value: function(t, e) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof e) {
                var r = e + "?";
                if (o) {
                    var n = void 0;
                    for (n in o) r += n + "=" + o[n] + "&";
                }
                e = {
                    url: r = r.substring(0, r.length - 1)
                };
            } else o = f.default.$getParams(e.url);
            this.$parent.__route__ || (this.$parent.__route__ = getCurrentPages()[0].__route__, 
            this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__);
            var i = "/" !== this.$parent.__route__[0] ? "/" + this.$parent.__route__ : this.$parent.__route__, a = f.default.$resolvePath(i, e.url.split("?")[0]), u = this.$parent.$pages[a];
            if (u && u.onPrefetch) {
                var p = this.$parent.__prevPage__, c = void 0;
                p && p.$preloadData && (c = p.$preloadData), u.$prefetchData = u.onPrefetch(o, {
                    from: this,
                    preload: c
                });
            }
            return l.default[t](e);
        }
    }, {
        key: "$redirect",
        value: function(t, e) {
            return this.$route("redirectTo", t, e);
        }
    }, {
        key: "$navigate",
        value: function(t, e) {
            return this.$route("navigateTo", t, e);
        }
    }, {
        key: "$switch",
        value: function(t) {
            return "string" == typeof t && (t = {
                url: t
            }), l.default.switchTab(t);
        }
    }, {
        key: "$back",
        value: function(t) {
            var e = t || {};
            return "number" == typeof e && (e = {
                delta: e
            }), e.delta || (e.delta = 1), l.default.navigateBack(e);
        }
    } ]), n;
}();

exports.default = c;