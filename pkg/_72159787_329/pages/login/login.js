function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t;
}

function a(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), s = e(require("./../../npm/wepy/lib/wepy.js")), r = e(require("./../../components/navBar/navBar.js")), c = require("./../../api/config.js"), u = require("./../../api/index.js"), l = require("./../../common/js/util.js"), d = function(e) {
    function o() {
        var e, a, i, s;
        t(this, o);
        for (var c = arguments.length, u = Array(c), d = 0; d < c; d++) u[d] = arguments[d];
        return a = i = n(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(u))), 
        i.config = {
            navigationBarTitleText: "",
            disableScroll: !0
        }, i.$repeat = {}, i.$props = {
            navBar: {
                back: "true",
                home: "",
                text: "",
                "xmlns:v-bind": "",
                "v-bind:navigationBarHeight.sync": "paddingTop"
            }
        }, i.$events = {}, i.components = {
            navBar: r.default
        }, i.data = {
            paddingTop: "128rpx",
            isShowPhoneMask: !1,
            rawData: "",
            signature: "",
            iv: "",
            encryptedData: "",
            Phoneiv: "",
            PhoneencryptedData: "",
            sessionId: "",
            agreed: !1,
            canIUseGetUserProfile: !1,
            userInfo: "",
            clickTimes: 0
        }, i.customData = {
            rejectRelaunch: null,
            rejectBackTwice: null
        }, i.methods = {
            getUserProfile: function() {
                var e = this;
                if (this.clickTimes >= 1) return !1;
                this.clickTimes++, wx.getUserProfile({
                    desc: "用于完善会员资料",
                    success: function(t) {
                        console.log(t, "------------------用于完善会员资料-----------------------");
                        var n = {};
                        n.detail = t, e.getUserInfo(n, "UserProfile");
                    }
                });
            },
            toAgreement: function() {
                wx.navigateTo({
                    url: "/packageIndex/pages/agreement/agreement"
                });
            },
            toPrivacy: function() {
                wx.navigateTo({
                    url: "/packageIndex/pages/privacyAgree/privacyAgree"
                });
            },
            toggleAgree: function(e) {
                this.agreed = !this.agreed;
            },
            cancel: function() {
                this.isShowPhoneMask = !1;
            },
            cancleLogin: function() {
                this.customData.rejectRelaunch ? wx.reLaunch({
                    url: "/pages/mainpage/mainpage"
                }) : (0, l.back)(this.customData.rejectBackTwice ? 2 : 1);
            },
            loginTap: function() {
                this.alertTimeout = setTimeout(function() {
                    (0, l.alertText)("请检查网络是否稳定");
                }, 7e3);
            },
            tryLogin: function() {
                this.agreeToast();
            }
        }, s = a, n(i, s);
    }
    return a(o, s.default.page), i(o, [ {
        key: "login",
        value: function() {
            var e = this;
            wx.showLoading(), wx.login({
                success: function(t) {
                    var n = {
                        code: t.code
                    }, a = (0, l.getPublicParam)(n);
                    wx.request({
                        url: c.baseUrl + "/v1/auth/loginRequest",
                        data: a,
                        method: "POST",
                        success: function(t) {
                            if (wx.hideLoading(), t && 2e5 == t.data.code) {
                                (0, l.log)("loginRequest登录成功:", t);
                                var n = t.data.data, a = n.sessionId;
                                e.sessionId = a, (0, l.setUserInfo)({
                                    sessionId: a
                                }), n.uid && wx.getStorageSync("agreementChecked") && (n.phoneNumber ? ((0, l.setUserInfo)({
                                    sessionId: n.sessionId,
                                    uid: n.uid,
                                    phoneNumber: n.phoneNumber
                                }), wx.setStorageSync("sessionId", n.sessionId), wx.setStorageSync("phoneNumber", n.phoneNumber), 
                                wx.setStorageSync("uid", n.uid), e.switchLoginOrga(), (0, l.back)()) : e.isShowPhoneMask = !0);
                            }
                        }
                    });
                }
            });
        }
    }, {
        key: "agreeToast",
        value: function() {
            wx.showToast({
                title: "请勾选同意用户协议",
                icon: "none"
            });
        }
    }, {
        key: "getUserInfo",
        value: function(e, t) {
            if (console.log("getUserInfo api,点击次数：", e, this.clickTimes), "UserProfile" != t && this.clickTimes >= 1) return !1;
            this.clickTimes++, this.rawData = e.detail.rawData, this.signature = e.detail.signature, 
            this.iv = e.detail.iv, this.encryptedData = e.detail.encryptedData, this.userInfo = JSON.stringify(e.detail.userInfo), 
            this.decrypUserInfo();
        }
    }, {
        key: "decrypUserInfo",
        value: function() {
            var e = this, t = {
                userInfo: this.userInfo
            }, n = (0, l.getPublicParam)(t);
            n.sessionId = this.sessionId, (0, u.DecrypUserInfo)(n).then(function(t) {
                2e5 == t.code ? ((0, l.log)("DecrypUserInfo解密用户信息成功:", t), e.$parent.globalData.userOpenid = t.data.openid, 
                t.data.phoneNumber ? ((0, l.setUserInfo)({
                    sessionId: e.sessionId,
                    uid: t.data.uId || t.data.uid,
                    phoneNumber: t.data.phoneNumber
                }), wx.setStorageSync("sessionId", e.sessionId), wx.setStorageSync("phoneNumber", t.data.phoneNumber), 
                wx.setStorageSync("uid", t.data.uId || t.data.uid), e.switchLoginOrga(), wx.setStorageSync("agreementChecked", !0), 
                (0, l.back)()) : e.isShowPhoneMask = !0, e.$apply()) : (0, l.log)("DecrypUserInfo解密用户信息失败:", t);
            }).catch(function(e) {});
        }
    }, {
        key: "getPhoneNumber",
        value: function(e) {
            var t = this;
            if ("getPhoneNumber:ok" == e.detail.errMsg) {
                this.Phoneiv = e.detail.iv, this.PhoneencryptedData = e.detail.encryptedData;
                var n = {
                    encryptedData: this.PhoneencryptedData,
                    iv: this.Phoneiv,
                    signature: this.signature,
                    rawData: this.rawData
                }, a = (0, l.getPublicParam)(n);
                (0, u.GetUid)(a).then(function(e) {
                    2e5 == e.code ? ((0, l.log)("GetUid获取成功：", e), (0, l.setUserInfo)({
                        sessionId: t.sessionId,
                        uid: e.data.uId || e.data.uid,
                        phoneNumber: e.data.phoneNumber
                    }), wx.setStorageSync("sessionId", t.sessionId), wx.setStorageSync("phoneNumber", e.data.phoneNumber), 
                    wx.setStorageSync("uid", e.data.uId || e.data.uid), t.switchLoginOrga(), wx.setStorageSync("agreementChecked", !0), 
                    (0, l.back)()) : (t.isShowPhoneMask = !1, t.$apply());
                }).catch(function(e) {});
            } else this.isShowPhoneMask = !1;
        }
    }, {
        key: "switchLoginOrga",
        value: function() {
            var e = this, t = {
                orgaId: wx.getStorageSync("agencyZoneData").orgaId
            }, n = (0, l.getPublicParam)(t);
            (0, u.SwitchUserLogInOrga)(n).then(function(t) {
                if (2e5 == t.code) {
                    if ((0, l.log)("SwitchUserLogInOrga切换用户登录机构成功：", t), t.data.mpStatus) return wx.showToast({
                        title: 2 === t.data.mpStatus ? "该机构分区的使用授权已结束" : "该机构暂未开通小程序服务",
                        icon: "none"
                    });
                    s.default.$instance.globalData.orgaType = t.data.orgaType, e.$parent.globalData.orgaAuthorize = t.data.mpStatus ? null : t.data.isAuthCode, 
                    e.$parent.globalData.orgaUserAuth = t.data.isUserAuth;
                } else (0, l.log)("SwitchUserLogInOrga切换用户登录机构失败：", t);
            }).catch(function(e) {
                (0, l.log)("切换用户登录机构异常：", e);
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {
            this.customData.rejectRelaunch = e.rejectRelaunch, this.customData.rejectBackTwice = e.rejectBackTwice, 
            this.clickTimes = 0, wx.getUserProfile && (this.canIUseGetUserProfile = !0), console.log(this.canIUseGetUserProfile, "=================================canIUseGetUserProfile======================================");
        }
    }, {
        key: "onReady",
        value: function() {
            this.login();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.clickTimes = 0, this.customData.rejectRelaunch = null, this.customData.rejectBackTwice = null, 
            (0, l.setLogining)(!1), (0, l.getUserInfo)("uid") || (0, l.setUserInfo)({
                sessionId: null
            });
        }
    } ]), o;
}();

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(d, "pages/login/login"));