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
}(), u = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), i = require("./../../api/index-party.js"), a = function(n) {
    function a() {
        var o, n, r, u;
        e(this, a);
        for (var i = arguments.length, l = Array(i), f = 0; f < i; f++) l[f] = arguments[f];
        return n = r = t(this, (o = a.__proto__ || Object.getPrototypeOf(a)).call.apply(o, [ this ].concat(l))), 
        r.props = {
            orgaId: {
                type: [ Number, Object ]
            }
        }, r.data = {
            ruleShow: !1,
            orgaRule: null
        }, r.methods = {
            toggle: function() {
                this.ruleShow = !this.ruleShow;
            }
        }, u = n, t(r, u);
    }
    return o(a, u.default.component), r(a, [ {
        key: "onLoad",
        value: function() {
            this.getRule();
        }
    }, {
        key: "getRule",
        value: function() {
            var e = this;
            this.orgaId && setTimeout(function() {
                (0, i.GetRule)().then(function(t) {
                    t.data && (e.orgaRule = t.data), e.$apply();
                });
            }, 0);
        }
    } ]), a;
}();

exports.default = a;