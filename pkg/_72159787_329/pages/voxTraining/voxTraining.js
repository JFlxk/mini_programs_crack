function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function t(e, n) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !n || "object" !== (void 0 === n ? "undefined" : r(n)) && "function" != typeof n ? e : n;
}

function o(e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : r(n)));
    e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(n, t, o) {
        return t && e(n.prototype, t), o && e(n, o), n;
    };
}(), i = e(require("./../../npm/wepy/lib/wepy.js")), u = e(require("./../../components/navBar/navBar.js")), p = (require("./../../api/config.js"), 
require("./../../api/index.js")), c = require("./../../common/js/util.js"), f = function(e) {
    function r() {
        var e, o, a, i;
        n(this, r);
        for (var p = arguments.length, c = Array(p), f = 0; f < p; f++) c[f] = arguments[f];
        return o = a = t(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(c))), 
        a.config = {
            navigationBarTitleText: "声音训练营"
        }, a.$repeat = {}, a.$props = {
            navBar: {
                back: "true",
                home: "true",
                text: "声音训练营"
            }
        }, a.$events = {}, a.components = {
            navBar: u.default
        }, a.data = {
            appId: ""
        }, a.methods = {
            goto: function() {
                wx.navigateToMiniProgram({
                    appId: this.appId,
                    envVersion: "trial",
                    success: function(e) {}
                });
            }
        }, i = o, t(a, i);
    }
    return o(r, i.default.page), a(r, [ {
        key: "onLoad",
        value: function(e) {
            var n = this;
            (0, p.GetMpAppid)((0, c.getPublicParam)({
                strParma: "trainCampMp"
            })).then(function(e) {
                2e5 == e.code ? ((0, c.log)("GetMpAppid获取成功：", e), n.appId = e.data) : (0, c.log)("GetMpAppid失败：", e);
            }).catch(function(e) {
                (0, c.log)("请求异常：", e);
            });
        }
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "onReady",
        value: function() {}
    }, {
        key: "onHide",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "onShareAppMessage",
        value: function() {
            return (0, c.shareApp)("声音训练营，让表达更动听", "/pages/voxTraining/voxTraining");
        }
    } ]), r;
}();

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/voxTraining/voxTraining"));