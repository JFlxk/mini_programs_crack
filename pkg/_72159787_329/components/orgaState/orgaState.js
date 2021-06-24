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

var a = function() {
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
}(require("./../../npm/wepy/lib/wepy.js")), r = require("./../../api/index.js"), u = require("./../../common/js/util.js"), c = function(o) {
    function c() {
        var n, o, a, l;
        t(this, c);
        for (var s = arguments.length, f = Array(s), h = 0; h < s; h++) f[h] = arguments[h];
        return o = a = e(this, (n = c.__proto__ || Object.getPrototypeOf(c)).call.apply(n, [ this ].concat(f))), 
        a.data = {
            componentShow: !1,
            state: null,
            count: 5
        }, a.customData = {
            countTimeout: null,
            initing: null,
            hidden: null
        }, a.methods = {
            init: function(t) {
                var e = this;
                if (!this.componentShow) {
                    this.customData.initing = !0;
                    var n = wx.getStorageSync("agencyZoneData");
                    n && (0, r.GetOrgaStatus)((0, u.getPublicParam)({
                        orgaId: n.orgaId
                    })).then(function(n) {
                        if (e.customData.initing = !1, n.data.mpStatus) return e.state = n.data.mpStatus, 
                        e.componentShow = !0, e.$apply(), void e.countFn();
                        i.default.$instance.globalData.orgaAuthorize = n.data.mpStatus ? null : n.data.isAuthCode, 
                        i.default.$instance.globalData.orgaUserAuth = n.data.isUserAuth, i.default.$instance.globalData.orgaType = n.data.orgaType, 
                        e.$emit("orgaMpStatus", n.data), "function" == typeof t && t();
                    });
                }
            },
            confirm: function() {
                clearTimeout(this.customData.countTimeout), this.toPlatform();
            },
            show: function(t) {
                this.componentShow || this.customData.initing || (this.state = t, this.componentShow = !0, 
                this.countFn());
            },
            recover: function() {
                this.customData.hidden && (this.countFn(), this.customData.hidden = !1);
            }
        }, a.events = {
            hide: function() {
                this.componentShow && (clearTimeout(this.customData.countTimeout), this.customData.hidden = !0);
            }
        }, l = o, e(a, l);
    }
    return n(c, i.default.component), a(c, [ {
        key: "countFn",
        value: function() {
            var t = this;
            this.customData.countTimeout = setTimeout(function() {
                if (!t.customData.hidden) {
                    if (t.count--, t.count <= 0) return t.toPlatform();
                    t.$apply(), t.countFn();
                }
            }, 1e3);
        }
    }, {
        key: "toPlatform",
        value: function() {
            var t = this;
            (0, u.checkLogin)(function() {
                t.switchOrgaLogin();
            }, function() {
                t.switchOrgaCall();
            });
        }
    }, {
        key: "switchOrgaLogin",
        value: function() {
            var t = this, e = {
                orgaId: null
            };
            (0, r.SwitchUserLogInOrga)((0, u.getPublicParam)(e)).then(function(e) {
                2e5 == e.code ? (t.switchOrgaCall(), i.default.$instance.globalData.orgaType = e.data.orgaType) : console.log("orgaState SwitchUserLogInOrga:", e);
            }).catch(function(t) {
                console.log("orgaState SwitchUserLogInOrga:", t);
            });
        }
    }, {
        key: "switchOrgaCall",
        value: function() {
            i.default.$instance.globalData.isOrgaChannel = "", i.default.$instance.globalData.mpOrigin = null, 
            i.default.$instance.globalData.useApplets = 0, i.default.$instance.globalData.orgaType = null, 
            i.default.$instance.globalData.orgaAuthorize = null, i.default.$instance.globalData.orgaUserAuth = null, 
            wx.removeStorage({
                key: "agencyZoneData"
            }), wx.removeStorage({
                key: "sceneCodeFrom"
            }), wx.reLaunch({
                url: "/pages/mainpage/mainpage"
            });
        }
    } ]), c;
}();

exports.default = c;