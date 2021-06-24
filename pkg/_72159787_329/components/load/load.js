function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), u = function(n) {
    function u() {
        var o, n, r, i;
        e(this, u);
        for (var a = arguments.length, f = Array(a), l = 0; l < a; l++) f[l] = arguments[l];
        return n = r = t(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(f))), 
        r.props = {
            finished: {
                type: Boolean,
                value: !1
            }
        }, r.data = {
            state: null
        }, r.methods = {
            setState: function(e) {
                var t = this;
                this.state = e, "nomore" === e && setTimeout(function() {
                    t.state = null, t.$apply();
                }, 1e3);
            }
        }, i = n, t(r, i);
    }
    return o(u, i.default.component), r(u, [ {
        key: "onLoad",
        value: function() {
            this.finished && (this.state = "nomore");
        }
    } ]), u;
}();

exports.default = u;