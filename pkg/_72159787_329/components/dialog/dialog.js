function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function o(t, o) {
    if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
}

function e(t, o) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !o || "object" !== (void 0 === o ? "undefined" : r(o)) && "function" != typeof o ? t : o;
}

function n(t, o) {
    if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === o ? "undefined" : r(o)));
    t.prototype = Object.create(o && o.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var e = arguments[o];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
}, a = t(require("./../../npm/wepy/lib/wepy.js")), c = t(require("./../loginAuthorCode/loginAuthorCode.js")), u = function(t) {
    function r() {
        var t, n, a, u;
        o(this, r);
        for (var f = arguments.length, s = Array(f), p = 0; p < f; p++) s[p] = arguments[p];
        return n = a = e(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [ this ].concat(s))), 
        a.props = {
            orgins: {
                type: String,
                default: ""
            }
        }, a.data = {
            componentShow: !1,
            params: {}
        }, a.customData = {
            defalutParams: {
                title: "温馨提示",
                showCancel: !0,
                cancelText: "取消",
                confirmText: "确定"
            }
        }, a.components = {
            OrgaAuth: c.default
        }, a.methods = {
            show: function(t) {
                this.params = i({}, this.customData.defalutParams, t), this.componentShow = !0;
            },
            hide: function() {
                this.componentShow = !1;
            },
            cancel: function() {
                if ("function" == typeof this.params.cancel) return this.params.cancel();
                this.componentShow = !1;
            },
            confirm: function() {
                if ("function" == typeof this.params.confirm) return this.params.confirm();
                this.componentShow = !1;
            }
        }, u = n, e(a, u);
    }
    return n(r, a.default.component), r;
}();

exports.default = u;