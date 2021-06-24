function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var a = t[o];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, o, a) {
        return o && e(t.prototype, o), a && e(t, a), t;
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), r = require("./../../common/js/util.js"), l = require("./../../api/index.js"), u = function(a) {
    function u() {
        var o, a, n, c;
        e(this, u);
        for (var s = arguments.length, g = Array(s), f = 0; f < s; f++) g[f] = arguments[f];
        return a = n = t(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(g))), 
        n.props = {}, n.data = {
            is_wechatLog: !1,
            logCode: "",
            showCodeBox: !1,
            loadNum: 0,
            isOrgaList: null
        }, n.methods = {
            onClickWechatLog: function() {
                var e = this;
                (0, r.checkLogin)(function() {
                    e.is_wechatLog = !0;
                }, function() {
                    e.is_wechatLog = !1, (0, r.skip)("/pages/login/login");
                });
            },
            getCodeNum: function(e) {
                this.logCode = e.detail.value;
            },
            onClickConfirm: function() {
                var e = this;
                if (!this.logCode) return !1;
                var t = {
                    authCode: this.logCode || ""
                };
                (0, l.SaveAuthCode)((0, r.getPublicParam)(t)).then(function(t) {
                    console.log("authorCode SaveAuthCode:", t), 2e5 == t.code ? ((0, r.alertText)("验证成功"), 
                    e.showCodeBox = !1, i.default.$instance.globalData.orgaUserAuth = 1, e.$apply()) : 400001 == t.code ? (0, 
                    r.alertText)(t.message) : (0, r.alertText)("验证异常/(ㄒoㄒ)/~~");
                }).catch(function(e) {
                    console.log("authorCode SaveAuthCode err:", e);
                });
            },
            toPlatform: function() {
                this.toPlatOrgaFn();
            },
            toOrga: function() {
                this.toPlatOrgaFn(!0);
            },
            showCodeBoxFn: function() {
                this.showCodeBox = !0, this.check();
            },
            hideCodeBoxFn: function() {
                this.showCodeBox = !1;
            }
        }, n.events = {
            orgaAuthorizeCall: function() {
                this.loadNum++, this.showCodeBox = !0, this.isOrgaList = i.default.$instance.globalData.isOrgaLists, 
                this.check();
            }
        }, c = a, t(n, c);
    }
    return o(u, i.default.component), n(u, [ {
        key: "switchOrgaLogin",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, o = {
                orgaId: t
            };
            (0, l.SwitchUserLogInOrga)((0, r.getPublicParam)(o)).then(function(o) {
                if (console.log("authorCode switchOrgaLogin:", o), 2e5 == o.code) {
                    if (!t) return e.switchOrgaCall(), !1;
                    if (o.data.mpStatus) return wx.showToast({
                        title: 2 === o.data.mpStatus ? "该机构分区的使用授权已结束" : "该机构暂未开通小程序服务",
                        icon: "none"
                    });
                    (0, r.setStorage)("agencyZoneData", {
                        orgaId: o.data.orgaId,
                        orgaName: o.data.orgaName,
                        orgaType: o.data.orgaType
                    }), i.default.$instance.globalData.orgaType = o.data.orgaType, i.default.$instance.globalData.isOrgaLists = null, 
                    wx.reLaunch({
                        url: "/pages/mainpage/mainpage"
                    });
                }
            }).catch(function(e) {
                console.log("authorCode switchOrgaLogin err:", e);
            });
        }
    }, {
        key: "switchOrgaCall",
        value: function() {
            i.default.$instance.globalData.isOrgaChannel = "", i.default.$instance.globalData.mpOrigin = null, 
            i.default.$instance.globalData.useApplets = 0, i.default.$instance.globalData.orgaType = null, 
            i.default.$instance.globalData.orgaAuthorize = null, i.default.$instance.globalData.orgaUserAuth = null, 
            this.loadNum = 0, this.logCode = "", wx.removeStorage({
                key: "agencyZoneData"
            }), wx.removeStorage({
                key: "sceneCodeFrom"
            }), wx.reLaunch({
                url: "/pages/mainpage/mainpage"
            });
        }
    }, {
        key: "check",
        value: function() {
            var e = this;
            (0, r.checkLogin)(function() {
                var t = i.default.$instance.globalData.orgaUserAuth;
                if (console.log(103, t, e.loadNum), t) {
                    var o = getCurrentPages();
                    e.loadNum <= 1 && o.length <= 1 && console.log("用户已授权"), e.is_wechatLog = !1, e.showCodeBox = !1, 
                    e.logCode = "";
                } else e.is_wechatLog = !0;
                e.$apply();
            }, function() {
                e.is_wechatLog = !1;
            });
        }
    }, {
        key: "toPlatOrgaFn",
        value: function(e) {
            var t = this;
            (0, r.checkLogin)(function() {
                e ? t.switchOrgaLogin(t.isOrgaList) : t.switchOrgaLogin();
            }, function() {
                t.switchOrgaCall();
            });
        }
    }, {
        key: "onLoad",
        value: function() {}
    } ]), u;
}();

exports.default = u;