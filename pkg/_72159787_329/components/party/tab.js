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
}(require("./../../npm/wepy/lib/wepy.js")), a = function(o) {
    function a() {
        var n, o, r, i;
        t(this, a);
        for (var u = arguments.length, f = Array(u), s = 0; s < u; s++) f[s] = arguments[s];
        return o = r = e(this, (n = a.__proto__ || Object.getPrototypeOf(a)).call.apply(n, [ this ].concat(f))), 
        r.props = {
            emitEvent: {
                type: String
            },
            tabs: {
                type: Object,
                default: []
            },
            tabIndex: {
                type: Number,
                default: 0,
                twoWay: !0
            },
            shrinkPadding: {
                type: Boolean
            }
        }, r.data = {
            tabImg: ""
        }, r.methods = {
            setTabImg: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.tabImg = this.getTabImg(t);
            },
            setTabIndex: function(t) {
                this.tabIndex = t, this.tabImg = this.getTabImg(t), this.$emit(this.emitEvent, t);
            }
        }, i = o, e(r, i);
    }
    return n(a, i.default.component), r(a, [ {
        key: "onLoad",
        value: function() {
            this.initTabImg();
        }
    }, {
        key: "initTabImg",
        value: function() {
            var t = this;
            setTimeout(function() {
                t.tabImg = t.getTabImg(0), t.$apply();
            }, 100);
        }
    }, {
        key: "getTabImg",
        value: function(t) {
            return "https://reading.oss.iyougu.com/ldtmp/images/party100/tabImg/" + this.tabs.length + t + ".png?v=1";
        }
    } ]), a;
}();

exports.default = a;