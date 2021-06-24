function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t;
}

function a(e, t) {
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

var i = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), r = require("./../../api/index.js"), l = require("./../../common/js/util.js"), u = function(n) {
    function u() {
        var a, n, i, o;
        e(this, u);
        for (var r = arguments.length, l = Array(r), g = 0; g < r; g++) l[g] = arguments[g];
        return n = i = t(this, (a = u.__proto__ || Object.getPrototypeOf(u)).call.apply(a, [ this ].concat(l))), 
        i.props = {
            navigationBarHeight: {
                type: Number,
                default: 0,
                twoWay: !0
            },
            bgColor: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: "",
                twoWay: !0
            },
            back: {
                type: String,
                default: "false"
            },
            home: {
                type: String,
                default: "false"
            },
            imgs: {
                type: String,
                default: "",
                twoWay: !0
            },
            types: {
                type: String,
                default: ""
            },
            isOrder: {
                type: Boolean,
                default: !1
            },
            agency_img: {
                type: String,
                default: ""
            },
            backConfirm: {
                type: String
            }
        }, i.watch = {
            text: function(e, t) {
                var a = this;
                e && e.length > 9 && (a.titleStyle = "titleStyle"), a.$apply();
            }
        }, i.data = {
            statusBarHeight: "",
            navigationBarHeight: "",
            backgroundColor: "#fff",
            color: "#000",
            imageWidth: "",
            imageHeight: "",
            titleStyle: "",
            homeIndex: ""
        }, i.methods = {
            backHome: function() {
                var e = this, t = getCurrentPages();
                if (t && t.length <= 1 && -1 != t[0].route.indexOf("pages/mainpage/mainpage")) return e.switchOrgaLogin(), 
                !1;
                wx.reLaunch({
                    url: "/pages/mainpage/mainpage"
                });
            },
            back: function() {
                if (this.backConfirm) return this.$emit("backConfirm");
                var e = this, t = getCurrentPages();
                return t && t.length <= 1 && -1 != t[0].route.indexOf("pages/mainpage/mainpage") ? (e.switchOrgaLogin(), 
                !1) : "背诵中" == e.text || "提交作业" == e.text ? (e.$emit("exitRecite", 1), !1) : "修改收货信息" == e.text ? (e.$emit("exitPages", 1), 
                !1) : void (t && t.length <= 1 ? -1 != t[0].route.indexOf("packageRecite/pages/parentHome") ? wx.reLaunch({
                    url: "/pages/mainpage/mainpage?index=5"
                }) : wx.reLaunch({
                    url: "/pages/mainpage/mainpage"
                }) : wx.navigateBack({
                    delta: 1
                }));
            },
            imgLoaded: function(e) {
                e.detail.width;
                var t = e.detail.height;
                this.imageHeight = t * (wx.getSystemInfoSync().windowWidth / e.detail.width) + "px", 
                this.imageHeight < this.navigationBarHeight && (this.imageHeight = "370px"), this.$apply();
            }
        }, o = n, t(i, o);
    }
    return a(u, o.default.component), i(u, [ {
        key: "setBackgroundColor",
        value: function(e) {
            "blue" === e ? (this.backgroundColor = "#3C86DF", this.color = "#fff") : e && e.custom ? (e.imgs ? this.imgs = e.imgs : (this.imgs = "", 
            this.backgroundColor = e.bgColor, this.color = e.color), console.log(e), this.$apply()) : (this.backgroundColor = "#fff", 
            this.color = "#000"), this.$apply();
        }
    }, {
        key: "setTitleColor",
        value: function(e) {
            this.color = "#fff", this.$apply();
        }
    }, {
        key: "setBackHome",
        value: function(e, t) {
            var a = this;
            1 == e && "true" === t ? (a.back = "true", a.home = "true") : (a.back = "false", 
            a.home = "false"), a.color = "#fff", a.homeIndex = e, a.$apply();
        }
    }, {
        key: "switchOrgaLogin",
        value: function() {
            var e = this, t = {
                orgaId: null
            }, a = (0, l.getPublicParam)(t);
            wx.removeStorage({
                key: "agencyZoneData"
            }), e.$parent.$parent.globalData.isOrgaChannel = "", e.$parent.$parent.globalData.mpOrigin = null, 
            e.$parent.$parent.globalData.useApplets = 0, e.$parent.$parent.globalData.orgaType = null, 
            e.$parent.$parent.globalData.orgaAuthorize = null, e.$parent.$parent.globalData.orgaUserAuth = null, 
            (0, l.checkLogin)(function() {
                (0, r.SwitchUserLogInOrga)(a).then(function(e) {
                    wx.reLaunch({
                        url: "/pages/mainpage/mainpage"
                    });
                });
            }, function() {
                wx.reLaunch({
                    url: "/pages/mainpage/mainpage"
                });
            });
        }
    }, {
        key: "onLoad",
        value: function() {
            var e = this;
            wx.getSystemInfo({
                success: function(t) {
                    e.statusBarHeight = t.statusBarHeight + "px", e.navigationBarHeight = t.statusBarHeight + 44 + "px", 
                    e.imageWidth = t.windowWidth, e.$apply();
                }
            });
        }
    } ]), u;
}();

exports.default = u;