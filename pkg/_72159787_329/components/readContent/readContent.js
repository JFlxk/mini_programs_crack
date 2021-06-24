function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : o(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), u = function(o) {
    function u() {
        var n, o, r, i;
        t(this, u);
        for (var f = arguments.length, a = Array(f), c = 0; c < f; c++) a[c] = arguments[c];
        return o = r = e(this, (n = u.__proto__ || Object.getPrototypeOf(u)).call.apply(n, [ this ].concat(a))), 
        r.props = {
            content: {
                type: String
            },
            fontsize: {
                type: [ Number, String ],
                default: 36
            }
        }, r.data = {
            arr: []
        }, r.methods = {
            init: function() {
                var t = this;
                setTimeout(function() {
                    if (!t.content) return !1;
                    for (var e = t.content.split(""), n = 0; n < e.length; n++) " " !== e[n] && "　" !== e[n] || (t.getNext(e, n).match(/^[A-Za-z]/g) ? e[n] = 1 : e[n] = 0);
                    t.arr = e, t.$apply();
                }, 0);
            }
        }, i = o, e(r, i);
    }
    return n(u, i.default.component), r(u, [ {
        key: "getNext",
        value: function(t, e) {
            return e++, " " === t[e] || "　" === t[e] ? this.getNext(t, e) : t[e] ? t[e] : "";
        }
    } ]), u;
}();

exports.default = u;