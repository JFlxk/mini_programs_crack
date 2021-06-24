function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
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
}), exports.default = void 0;

var r = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js"));

require("./../../api/index.js"), require("./../../common/js/util.js");

var i = function(n) {
    function i() {
        var o, n, r, u;
        t(this, i);
        for (var c = arguments.length, f = Array(c), p = 0; p < c; p++) f[p] = arguments[p];
        return n = r = e(this, (o = i.__proto__ || Object.getPrototypeOf(i)).call.apply(o, [ this ].concat(f))), 
        r.props = {
            hasOpus: {
                type: Boolean
            }
        }, r.data = {
            componentShow: !1
        }, r.methods = {
            toggle: function() {
                this.componentShow = !this.componentShow;
            },
            confirm: function() {
                this.componentShow = !1, this.$emit("midafConfirm");
            }
        }, u = n, e(r, u);
    }
    return o(i, r.default.component), i;
}();

exports.default = i;