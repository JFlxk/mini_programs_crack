function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function o(e, n) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !n || "object" !== (void 0 === n ? "undefined" : r(n)) && "function" != typeof n ? e : n;
}

function t(e, n) {
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

var i = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
    };
}(), a = e(require("./../../npm/wepy/lib/wepy.js")), l = e(require("./../../components/navBar/navBar.js")), u = (require("./../../api/config.js"), 
require("./../../api/index.js")), c = require("./../../common/js/util.js"), p = function(e) {
    function r() {
        var e, t, i, a;
        n(this, r);
        for (var p = arguments.length, s = Array(p), f = 0; f < p; f++) s[f] = arguments[f];
        return t = i = o(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
        i.config = {
            navigationBarTitleText: "更换手机"
        }, i.$repeat = {}, i.$props = {
            navBar: {
                back: "true",
                home: "true",
                text: "更换手机",
                "xmlns:v-bind": "",
                "v-bind:navigationBarHeight.sync": "paddingTop"
            }
        }, i.$events = {}, i.components = {
            navBar: l.default
        }, i.data = {
            paddingTop: "",
            type: null,
            isDisabled: !1,
            isDisabledConfirm: !1,
            btnText: "发送验证码",
            timer: null,
            times: 60,
            phoneNumber: "",
            verifyCode: ""
        }, i.methods = {
            bindPhone: function(e) {
                this.phoneNumber = e.detail.value;
            },
            bindCode: function(e) {
                this.verifyCode = e.detail.value;
            },
            getCode: function() {
                var e = this;
                if ((0, c.isPoneAvailable)(e.phoneNumber)) {
                    if (e.phoneNumber == wx.getStorageSync("phoneNumber")) return console.log("输入的手机号", e.phoneNumber), 
                    void (0, c.alert)("此手机号已绑定", "", "./../../common/images/warning.png");
                    e.isDisabled = !0;
                    var n = e.times;
                    e.timer = setInterval(function() {
                        n -= 1, e.btnText = n + "s后重新获取", 0 == n && (clearInterval(e.timer), e.btnText = "发送验证码", 
                        e.isDisabled = !1), e.$apply();
                    }, 1e3);
                    var o = {
                        strParma: e.phoneNumber
                    }, t = (0, c.getPublicParam)(o);
                    (0, u.PhoneCheck)(t).then(function(n) {
                        (0, c.log)("SendCode：", n), 2e5 == n.code ? ((0, c.alert)("发送成功"), e.isDisabledConfirm = !1, 
                        e.$apply()) : (console.log("嗯：", n), (0, c.alert)("此手机号已绑定", "", "./../../common/images/warning.png"));
                    }).catch(function(e) {
                        (0, c.log)("请求异常：", e), (0, c.alert)("请求异常", "", "./../../common/images/warning.png");
                    });
                } else (0, c.alert)("手机号不合法", "", "./../../common/images/warning.png");
            },
            bindConfirm: function() {
                var e = this;
                if (this.verifyCode) {
                    var n = {
                        code: e.verifyCode,
                        phoneNumber: e.phoneNumber
                    }, o = (0, c.getPublicParam)(n);
                    (0, u.SavePhone)(o).then(function(n) {
                        (0, c.log)("噢噢噢噢---\x3e", n), 2e5 == n.code ? (wx.setStorageSync("phoneNumber", e.phoneNumber), 
                        (0, c.alert)("更换成功"), setTimeout(function() {
                            (0, c.back)();
                        }, 1500)) : (0, c.alert)(n.message, "", "./../../common/images/warning.png"), e.$apply();
                    }).catch(function(e) {
                        (0, c.log)("请求异常:", e), (0, c.alert)("请求异常", "", "./../../common/images/warning.png");
                    });
                } else (0, c.alert)("验证码为空", "", "./../../common/images/warning.png");
            }
        }, a = t, o(i, a);
    }
    return t(r, a.default.page), i(r, [ {
        key: "onLoad",
        value: function(e) {
            this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            (0, c.log)("bindphone onShow");
        }
    }, {
        key: "onReady",
        value: function() {
            (0, c.log)("bindphone onReady");
        }
    }, {
        key: "onHide",
        value: function() {
            var e = this;
            clearInterval(e.timer), e.btnText = "发送验证码", e.isDisabled = !1, e.$apply(), (0, 
            c.log)("bindphone onHide");
        }
    }, {
        key: "onUnload",
        value: function() {
            var e = this;
            (0, c.log)("bindphone onUnload"), clearInterval(e.timer);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return (0, c.shareApp)();
        }
    } ]), r;
}();

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(p, "pages/bindphone/bindphone"));