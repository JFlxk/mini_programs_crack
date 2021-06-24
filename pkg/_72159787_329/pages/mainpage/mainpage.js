function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t;
}

function i(e, t) {
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

var n = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
    };
}(), r = e(require("./../../npm/wepy/lib/wepy.js")), s = require("./../../common/js/util.js"), c = require("./../../api/index.js"), g = e(require("./../../components/navBar/navBar.js")), d = e(require("./../../components/orgaState/orgaState.js")), p = e(require("./../square/square.js")), u = e(require("./../party.js")), l = e(require("./../reading/reading.js")), h = e(require("./../moreActivities/moreActivities.js")), v = e(require("./../person/person.js")), y = e(require("./../../components/dialog/dialog.js")), f = e(require("./../../common/js/mixin.js")), m = function(e) {
    function o() {
        var e, i, n, r;
        t(this, o);
        for (var c = arguments.length, m = Array(c), b = 0; b < c; b++) m[b] = arguments[b];
        return i = n = a(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(m))), 
        n.config = {
            disableScroll: !0
        }, n.$repeat = {}, n.$props = {
            navBar: {
                class: "agencyZoneBar",
                "xmlns:v-bind": "",
                "v-bind:text.sync": "titleText",
                "v-bind:back.once": "true",
                home: "false",
                "v-bind:imgs.sync": "topImg",
                types: "org",
                "v-bind:isOrder.sync": "is_order",
                "v-bind:navigationBarHeight.sync": "paddingTop",
                "v-bind:agency_img.sync": "agency_img"
            },
            square: {},
            reading: {
                "v-bind:newTab_h.sync": "paddingTop"
            },
            moreActivities: {
                "v-bind:newTab_h.sync": "paddingTop"
            },
            person: {},
            Party: {}
        }, n.$events = {}, n.components = {
            navBar: g.default,
            square: p.default,
            reading: l.default,
            moreActivities: h.default,
            person: v.default,
            orgaState: d.default,
            Party: u.default,
            Dialog: y.default
        }, n.mixins = [ f.default ], n.data = {
            paddingTop: "128rpx",
            activeIndex: 1,
            titleText: "",
            query: "",
            titleArr: [ "", "", "", "搜索", "" ],
            Shipei: "",
            isFirstOpt: !1,
            isAgencyZone: !1,
            topImg: "",
            orgaData: {},
            videoUrl: null,
            videoPoster: null,
            opusSource: 2,
            videoShow: !1,
            is_order: !1,
            agency_img: "",
            actived_color: "#3B87DD",
            showTabBar: "",
            is_navbar: !0,
            partyMove: !1,
            hideParty: !0,
            partyOrgaType: null
        }, n.customData = {
            videoContext: null,
            originFrom: "",
            dynamicSquareToggled: !1
        }, n.watch = {
            activeIndex: function(e) {
                this.isAgencyZone && (1 == this.$parent.globalData.isOrgaChannel || this.$invoke("navBar", "setBackHome", e, 1 == e ? "true" : ""));
            }
        }, n.methods = {
            tabChange: function(e) {
                this.tabChangeFn(e);
            },
            gotoActive: function() {
                (0, s.skip)("/packageIndex/pages/webview/webview?url=https://wx.ygr.iyougu.com/activityEnroll/MP");
            },
            videoPlay: function() {
                this.$broadcast("hide");
            },
            hideVideo: function() {
                this.videoShow = !this.videoShow, this.customData.videoContext.stop(), this.customData.videoContext.seek(0);
            }
        }, n.events = {
            changeTabBar: function(e) {
                var t = this;
                t.activeIndex = e, t.titleText = t.titleArr[t.activeIndex - 1], t.$broadcast("subUpdate", t.activeIndex);
            },
            setMainPageVideo: function(e) {
                this.opusSource = e.opusSource, this.videoUrl = e.url, this.videoPoster = e.poster, 
                this.videoShow = !0, this.$apply(), this.customData.videoContext.play();
            },
            setMainTabBar: function(e) {
                this.showTabBar = e, this.$apply();
            },
            is_Navbar: function(e) {
                this.is_navbar = e, this.$apply();
            },
            receiveOrgaData: function(e) {
                e.is_order && (this.agency_img = e.themeBgUrl, this.actived_color = e.themeColor, 
                this.is_order = e.is_order), this.orgaData = e, this.$apply();
            },
            orgaMpStatus: function(e) {
                this.partyOrgaType = e.orgaType, this.$apply();
            }
        }, r = i, a(n, r);
    }
    return i(o, r.default.page), n(o, [ {
        key: "tabChangeFn",
        value: function(e) {
            var t = this, a = 3 == e && 3 == this.activeIndex;
            if (this.activeIndex = e, this.$broadcast("hide"), this.titleText = this.titleArr[this.activeIndex - 1], 
            this.$invoke("navBar", "setBackgroundColor"), this.$apply(), 5 == this.activeIndex) this.topImg = "", 
            this.setNavigationBar("#ffffff", "easeOut"), (0, s.log)("this.isFirstOpt 5:", this.isFirstOpt), 
            (0, s.checkLogin)(function() {
                t.$broadcast("subUpdate", t.activeIndex), t.isFirstOpt = !1;
            }, function() {
                t.isFirstOpt ? (t.isFirstOpt = !1, t.$apply()) : ((0, s.skip)("/pages/login/login"), 
                t.isFirstOpt = !0, t.$apply());
            }); else if (1 == this.activeIndex) "dynamic" === this.customData.originFrom && this.$broadcast("updateAgency"), 
            this.AgencyZone(); else {
                var i = wx.getStorageSync("agencyZoneData");
                i && i.orgaId ? (this.topImg = "https://reading.oss.iyougu.com/ldtmp/icon/banner_4.png", 
                i.isOrder && (this.topImg = "", this.agency_img = i.themeBgUrl)) : (this.topImg = "", 
                this.setNavigationBar("#000000", "easeOut")), this.$broadcast("subUpdate", this.activeIndex, "tabChangeFn"), 
                3 != this.activeIndex || a || (this.$invoke("Party", "refresh"), this.seenParty());
            }
            3 != this.activeIndex && this.$invoke("Party", "pageHide");
        }
    }, {
        key: "seenParty",
        value: function() {
            wx.getStorage({
                key: "partySeen",
                fail: function() {
                    wx.setStorage({
                        key: "partySeen",
                        data: !0
                    });
                }
            });
        }
    }, {
        key: "AgencyZone",
        value: function() {
            var e = this;
            (0, s.getStorage)("agencyZoneData").then(function(t) {
                var a = t.data, i = wx.getStorageSync("sceneCodeFrom");
                a.orgaId ? (e.isAgencyZone = !0, a.orgaName ? e.titleText = a.orgaName : e.loginOrga("scene"), 
                e.topImg = "https://reading.oss.iyougu.com/ldtmp/icon/banner_4.png", e.setNavigationBar("#ffffff", "easeOut"), 
                1 === e.$parent.globalData.isOrgaChannel || "activity" == i ? e.$invoke("navBar", "setBackHome", e.activeIndex, "false") : e.$invoke("navBar", "setBackHome", e.activeIndex, "true")) : (e.isAgencyZone = !1, 
                e.titleText = "热门", e.topImg = "", e.setNavigationBar("#000000", "easeOut"), e.$invoke("navBar", "setBackHome", e.activeIndex, "false"), 
                (0, s.setIsOpenedReadWall)(!1)), e.$apply();
            }).catch(function(t) {
                e.isAgencyZone = !1, e.topImg = "", e.setNavigationBar("#000000", "easeOut"), e.$apply(), 
                (0, s.setIsOpenedReadWall)(!1);
            });
        }
    }, {
        key: "loginOrga",
        value: function(e) {
            var t = this, a = this, i = {}, o = (0, s.getPublicParam)(i);
            (0, c.GetUserLogInOrga)(o).then(function(i) {
                if (2e5 == i.code) {
                    if ("scene" == e) {
                        (0, s.log)("GetUserLogInOrga用户登录机构成功 scene：", i), a.orgaData.orgaName = a.orgaData.orgaName || i.data.orgaName, 
                        a.orgaData.orgaId = i.data.orgaId, (0, s.setStorage)("agencyZoneData", a.orgaData);
                        var o = 1 == i.data.orgaType || 2 == i.data.orgaType, n = 4 == t.activeIndex || 2 == t.activeIndex;
                        if (o && n) {
                            a.titleText = "";
                            var c = 4733 != i.data.orgaId;
                            i.data.orgaId && c && t.showDialog(9), 4 == t.activeIndex && t.$invoke("moreActivities", "updateOrgaInfo", i.data, t.is_order), 
                            2 == t.activeIndex && t.$invoke("reading", "updateOrgaInfo", i.data, t.is_order);
                        } else a.titleText = i.data.orgaName;
                        a.$apply(), (0, s.setIsOpenedReadWall)(1 === i.data.isOpenedReadWall);
                    }
                    if (i.data.mpStatus) return t.$invoke("orgaState", "show", i.data.mpStatus);
                    a.partyOrgaType = i.data.orgaType, r.default.$instance.globalData.orgaType = i.data.orgaType, 
                    a.$apply();
                } else (0, s.log)("GetUserLogInOrga用户登录机构失败：", i), (0, s.alertText)(i.message);
            }).catch(function(e) {
                (0, s.log)("切换用户登录机构异常：", e);
            });
        }
    }, {
        key: "setNavigationBar",
        value: function(e, t) {
            wx.setNavigationBarColor({
                frontColor: e,
                backgroundColor: e,
                animation: {
                    duration: 200,
                    timingFunc: t
                }
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {
            var t = this;
            this.activeIndex = e.index || 1, this.customData.originFrom = e.originFrom;
            var a = this, i = (0, s.getParams)(decodeURIComponent(e.q)), o = decodeURIComponent(e.scene);
            if ((0, s.log)("----mainpage queryCode | sceneCode | opt", i, o, e), i.orgaId && (a.$parent.globalData.isOrgaChannel = 1, 
            a.orgaData.orgaId = i.orgaId, a.orgaData.orgaName = i.orgaName, (0, s.setStorage)("agencyZoneData", a.orgaData), 
            a.loginOrga("scene"), a.$invoke("navBar", "setBackHome", a.activeIndex, "false")), 
            e.scene) {
                var n = o.split("=");
                if ("oathId" == n[0]) this.activeIndex = 3, setTimeout(function() {
                    t.$invoke("Party", "showCard", n[1]);
                }, 500); else if (a.$parent.globalData.isOrgaChannel = 1, o && -1 == o.indexOf("/")) a.orgaData.orgaId = o, 
                (0, s.setStorage)("agencyZoneData", a.orgaData); else {
                    var r = o.split("/")[1];
                    -1 == r ? this.activeIndex = 4 : 3 == r ? this.activeIndex = 3 : -2 == r && (this.activeIndex = 2), 
                    this.$broadcast("updateAgency", "");
                }
                setTimeout(function() {
                    a.loginOrga("scene");
                }, 500), a.$invoke("navBar", "setBackHome", a.activeIndex, "false");
            }
            this.$broadcast("subUpdate", this.activeIndex), this.$parent.globalData.isFullScreen && (this.Shipei = "Shipei"), 
            this.updateOrgaSet(), this.checkNeedParty();
        }
    }, {
        key: "checkNeedParty",
        value: function() {
            var e = this;
            (0, c.CheckNeedParty)((0, s.getPublicParam)({})).then(function(t) {
                t.data || (e.hideParty = !1, e.$apply());
            });
        }
    }, {
        key: "updateOrgaSet",
        value: function() {
            var e = wx.getStorageSync("agencyZoneData");
            if (!e || e && 0 == e.themeStatus) return !1;
            e.is_order && (this.agency_img = e.themeBgUrl, this.actived_color = e.themeColor, 
            this.is_order = e.is_order), this.$broadcast("updateAgency", 1), this.orgaData = e, 
            this.$apply(), this.$invoke("orgaState", "init");
        }
    }, {
        key: "onShow",
        value: function() {
            var e = this;
            5 == this.activeIndex ? (0, s.checkLogin)(function() {
                e.$broadcast("subUpdate", e.activeIndex, "show"), e.isFirstOpt = !1;
            }, function() {
                e.activeIndex = 4, e.isFirstOpt = !1, t && t.orgaId ? (e.topImg = "https://reading.oss.iyougu.com/ldtmp/icon/banner_4.png", 
                t.isOrder && (e.topImg = "", e.agency_img = t.themeBgUrl)) : (e.topImg = "", e.setNavigationBar("#000000", "easeOut")), 
                e.$broadcast("subUpdate", e.activeIndex), e.$apply(), e.$invoke("navBar", "setBackgroundColor", null);
                var t = wx.getStorageSync("agencyZoneData");
            }) : (this.isFirstOpt = !1, this.titleText = this.titleArr[this.activeIndex - 1], 
            4 != this.activeIndex && this.$broadcast("subUpdate", this.activeIndex, "show")), 
            1 == this.activeIndex && (this.$broadcast("updateAgency", ""), this.$broadcast("updateReader"), 
            this.AgencyZone()), 3 == this.activeIndex && (this.$invoke("Party", "refresh"), 
            this.$broadcast("updateAgency", ""), this.$broadcast("updateReader"), this.AgencyZone()), 
            this.$apply(), this.$invoke("orgaState", "recover");
        }
    }, {
        key: "onReady",
        value: function() {
            this.customData.videoContext = wx.createVideoContext("video");
        }
    }, {
        key: "onHide",
        value: function() {
            this.$broadcast("hide"), this.$broadcast("clearTimer"), this.$invoke("Party", "pageHide");
        }
    }, {
        key: "onShareAppMessage",
        value: function(e) {
            var t = wx.getStorageSync("agencyZoneData"), a = void 0;
            if (3 == this.activeIndex) {
                var i = "我正在" + (t && t.orgaName ? "(" + t.orgaName + ")" : "(优谷朗读)") + "参加“献礼中国共产党成立100周年系列活动”！你也快来参加吧！";
                return a = "/pages/mainpage/mainpage?orgaId=" + (t && t.orgaId ? t.orgaId : 0) + "&orgaName=" + (t && t.orgaName ? t.orgaName : "优谷朗读") + "&index=3", 
                (0, s.shareApp)(i, a);
            }
            return a = "/pages/mainpage/mainpage?orgaId=" + t.orgaId + "&orgaName=" + t.orgaName, 
            (0, s.shareApp)("", a);
        }
    } ]), o;
}();

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(m, "pages/mainpage/mainpage"));