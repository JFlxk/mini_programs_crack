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
}(require("./../../npm/wepy/lib/wepy.js")), a = require("./../../api/index.js"), u = require("./../../common/js/util.js"), l = function(n) {
    function l() {
        var o, n, r, i;
        e(this, l);
        for (var a = arguments.length, p = Array(a), c = 0; c < a; c++) p[c] = arguments[c];
        return n = r = t(this, (o = l.__proto__ || Object.getPrototypeOf(l)).call.apply(o, [ this ].concat(p))), 
        r.props = {
            is_skeleton7: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, r.data = {
            expertsList: []
        }, r.methods = {
            goto: function() {
                this.$emit("hideInnerAudio"), (0, u.skip)("/packagePopular/pages/popularList/popularList?activeIndex=3");
            },
            gotoDetail: function(e, t) {
                this.$emit("hideInnerAudio"), (0, u.skip)("/packageIndex/pages/welcomeToOrga/welcomeToOrga?orgaId=" + e + "&orgaName=" + t);
            }
        }, i = n, t(r, i);
    }
    return o(l, i.default.component), r(l, [ {
        key: "loadHotPavilion",
        value: function() {
            var e = this, t = {
                appId: "",
                pageNum: 1,
                pageSize: 3
            }, o = (0, u.getPublicParam)(t);
            (0, a.GetHotReaderRoom)(o).then(function(t) {
                2e5 == t.code ? (e.is_skeleton7 = !0, (0, u.log)("GetHotReaderRoom最热朗读亭获取成功：", t), 
                e.expertsList = t.data.list, e.$apply()) : ((0, u.log)("GetHotReaderRoom最热朗读亭获取失败：", err), 
                (0, u.alertText)(t.message));
            }).catch(function(e) {
                (0, u.log)(e);
            });
        }
    }, {
        key: "onLoad",
        value: function() {
            this.loadHotPavilion();
        }
    } ]), l;
}();

exports.default = l;