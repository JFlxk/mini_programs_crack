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
}(require("./../../npm/wepy/lib/wepy.js")), s = function(a) {
    function s() {
        var o, a, n, i;
        e(this, s);
        for (var l = arguments.length, r = Array(l), u = 0; u < l; u++) r[u] = arguments[u];
        return a = n = t(this, (o = s.__proto__ || Object.getPrototypeOf(s)).call.apply(o, [ this ].concat(r))), 
        n.data = {
            showMask: !1,
            dialogType: 0,
            saveOrgaType: null,
            getUseApplets: 0
        }, n.watch = {}, n.methods = {
            toggleMask: function() {
                this.showDialog(this.dialogType);
            }
        }, i = a, t(n, i);
    }
    return o(s, i.default.mixin), n(s, [ {
        key: "onShow",
        value: function() {
            var e = this;
            setTimeout(function() {
                var t = i.default.$instance.globalData, o = t.orgaType, a = t.mpOrigin, n = t.mpStatus, s = t.orgaAuthorize, l = t.orgaUserAuth;
                return console.log(100, o, a, i.default.$instance.globalData.useApplets, n, s, l), 
                !(s && (e.showOrgaAuth(), !l)) && ("empty" == a ? (e.showMask = !1, !1) : n ? (e.showOrgaDialog() || e.showDialog(n), 
                !1) : !!o && (e.getUseApplets = i.default.$instance.globalData.useApplets, console.log(101, e.getUseApplets, e.dialogType, e.saveOrgaType), 
                e.$apply(), void (e.getUseApplets ? e.getUseApplets <= 3 || (6 == e.getUseApplets ? e.getLocation() : e.showDialog(e.getUseApplets)) : e.hideDialog())));
            }, 1e3);
        }
    }, {
        key: "showDialog",
        value: function() {
            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, o = i.default.$instance.globalData.mpOrigin;
            if ("empty" == o) return !1;
            if (!t) return !1;
            var a = void 0, n = "确定", s = !1;
            if (!this.saveOrgaType && (this.saveOrgaType = t), this.dialogType = t, console.log(30, this.saveOrgaType, this.dialogType, t, o), 
            this.showMask = !0, this.$apply(), 1 === t || 3 === t) a = "访问失败，该机构已停用，请联系相关管理员处理"; else if (2 === t) a = "访问失败，该机构已过期，请联系相关管理员处理"; else if (4 === t) a = "访问失败，当前定位已超出该机构党建诵读小程序可访问的距离范围"; else if (5 === t) a = "访问失败，该资源已停用，可回到首页查看其他资源", 
            n = "回到首页"; else if (7 === t) a = "抱歉，该作品已停用", n = "返回首页"; else if (8 === t) a = "定位获取失败，请点击右上角“...”，进入设置，位置信息选择“使用小程序期间和离开小程序后”"; else {
                if (9 === t) return this.getLocation(), !1;
                a = "因资源版权保护，扫码访问党建学习诵读平台须允许获取当前手机定位，请点击“允许”", n = "允许", s = !0;
            }
            this.$invoke("Dialog", "show", {
                content: a,
                cancelText: "取消",
                confirmText: n,
                showCancel: s,
                confirm: function() {
                    e.$invoke("Dialog", "hide"), t <= 3 ? (e.showMask = !1, e.updatePage && e.updatePage(), 
                    e.gotoIndex(null)) : 6 == t ? e.getLocation() : 5 === t || 7 === t ? (e.showMask = !1, 
                    e.gotoIndex()) : 8 === t && (i.default.$instance.globalData.mpOrigin = "qrcode", 
                    wx.openSetting({
                        success: function(t) {
                            t.authSetting["scope.userLocation"] && e.getLocation();
                        }
                    }));
                },
                cancel: function() {
                    console.log(36, e.saveOrgaType, e.dialogType), e.$invoke("Dialog", "hide");
                }
            });
        }
    }, {
        key: "hideDialog",
        value: function() {
            var e = wx.createSelectorQuery();
            e.select("_mask").boundingClientRect(), this.saveOrgaType && (this.showMask = !0), 
            e.exec(function(e) {
                if (!e[0]) return !1;
            }), this.showMask = !1, this.$invoke("Dialog", "hide");
        }
    }, {
        key: "gotoIndex",
        value: function(e) {
            null == e && (i.default.$instance.globalData.isOrgaChannel = "", i.default.$instance.globalData.mpOrigin = null, 
            i.default.$instance.globalData.useApplets = 0, i.default.$instance.globalData.orgaType = null, 
            wx.removeStorage({
                key: "agencyZoneData"
            }), wx.removeStorage({
                key: "sceneCodeFrom"
            })), this.saveOrgaType = null, this.showMask = !1, wx.reLaunch({
                url: "/pages/mainpage/mainpage"
            });
        }
    }, {
        key: "getUserScope",
        value: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.userLocation"] || (e.showMask = !1, e.showDialog(6));
                }
            });
        }
    }, {
        key: "getLocation",
        value: function() {
            var e = this, t = i.default.$instance.globalData, o = t.lat, a = t.lng, n = t.mpStatus, s = t.orgaOutlets;
            if (!s.isOpenDistanceRange) return this.showMask = !1, !1;
            wx.getLocation({
                type: "gcj02",
                success: function(t) {
                    if (console.log("授权地理位置返回", t), "getLocation:ok" == t.errMsg) {
                        var l = t.latitude, r = t.longitude, u = e.outletDistance(Number(a), Number(o), r, l), c = s.distanceRange ? s.distanceRange / 1e3 : 0;
                        console.log("网点距离", u, n, c), Math.abs(u) > c ? e.showDialog(4) : n || (e.showMask = !1, 
                        e.saveOrgaType = null, setTimeout(function() {
                            i.default.$instance.globalData.useApplets = 0;
                        }, 200), e.dialogType = 0, e.$apply());
                    }
                    wx.request({
                        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=",
                        data: {
                            key: "XFUBZ-LMD65-VUGII-QKAZL-ZADU5-BTBFU",
                            location: t.latitude + "," + t.longitude
                        },
                        method: "GET",
                        header: {
                            "Content-Type": "application/json"
                        },
                        dataType: "json",
                        success: function(e) {
                            console.log("腾讯地图api：", e);
                        },
                        fail: function(e) {
                            console.log("腾讯地图api fail：", e);
                        }
                    });
                },
                fail: function(t) {
                    console.log("授权地理位置失败", t), e.showDialog(8);
                }
            });
        }
    }, {
        key: "outletDistance",
        value: function(e, t, o, a) {
            console.log("distance:", e, t, o, a);
            var n = Math.sin, i = Math.cos, s = Math.asin, l = Math.PI, r = Math.hypot, u = function(e, t) {
                return e *= l / 180, t *= l / 180, {
                    x: i(t) * i(e),
                    y: i(t) * n(e),
                    z: n(t)
                };
            }, c = u(e, t), g = u(o, a);
            return 2 * s(r(c.x - g.x, c.y - g.y, c.z - g.z) / 2) * 6371.393;
        }
    }, {
        key: "showOrgaAuth",
        value: function() {
            var e = getCurrentPages(), t = e[e.length - 1].route;
            if (console.log(102, t, e.length), -1 != t.indexOf("packagePartyStudy/pages/resourceDetail") && this.hideAutoPlay(), 
            e.length > 1) return !1;
            this.$broadcast("orgaAuthorizeCall");
        }
    }, {
        key: "showOrgaDialog",
        value: function() {
            var e = getCurrentPages(), t = e[e.length - 1].route, o = [ "pages/mainpage/mainpage", "packageActivity/pages/activity/activity", "packagePopular/pages/dailySoundCard/dailySoundCard" ].filter(function(e) {
                return t.indexOf(e) > -1;
            }).length > 0;
            return console.log(103, t, o), o;
        }
    } ]), s;
}();

exports.default = s;