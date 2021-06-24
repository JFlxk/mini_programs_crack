function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
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
}), exports.default = void 0;

var s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
}, r = function() {
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
}(), l = e(require("./../../npm/wepy/lib/wepy.js")), c = e(require("./../../components/navBar/navBar.js")), g = e(require("./../../components/hotReading/hotReading.js")), u = e(require("./../../components/hotExperts/hotExperts.js")), p = e(require("./../../components/hotPavilion/hotPavilion.js")), h = e(require("./../../components/popularOpus/popularOpus.js")), d = e(require("./../../components/reader/reader.js")), f = e(require("./../../components/listen/listen.js")), y = e(require("./../../components/hotPartyRead/hotPartyRead.js")), m = require("./../../api/index.js"), v = require("./../../common/js/util.js"), k = function(e) {
    function o() {
        var e, t, i, s;
        a(this, o);
        for (var r = arguments.length, l = Array(r), k = 0; k < r; k++) l[k] = arguments[k];
        return t = i = n(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [ this ].concat(l))), 
        i.config = {
            navigationBarTitleText: ""
        }, i.$repeat = {}, i.$props = {
            popularOpus: {
                "xmlns:v-bind": "",
                "v-bind:is_skeleton3.sync": "is_skeleton3",
                class: "{{!isShow_voxTraining?'borderTop24':''}}"
            },
            hotReading: {
                "v-bind:is_skeleton4.sync": "is_skeleton4"
            },
            reader: {
                "v-bind:is_skeleton5.sync": "is_skeleton5"
            },
            hotExperts: {
                "v-bind:is_skeleton6.sync": "is_skeleton6"
            },
            hotPavilion: {
                "v-bind:is_skeleton7.sync": "is_skeleton7"
            },
            listen: {
                "v-bind:is_skeleton8.sync": "is_skeleton8"
            },
            HotPartyRead: {
                class: "{{!isShow_voxTraining?'borderTop24':''}}"
            }
        }, i.$events = {}, i.components = {
            navBar: c.default,
            popularOpus: h.default,
            hotReading: g.default,
            reader: d.default,
            hotExperts: u.default,
            hotPavilion: p.default,
            listen: f.default,
            HotPartyRead: y.default
        }, i.data = {
            paddingTop: "128rpx",
            bannerIndex: 0,
            currentIndex: 0,
            bannerList: [],
            entranceData: [],
            interval: 1e3,
            positionID: "",
            isShowModule: 0,
            isShowBanner: !1,
            cgBannerDto: !1,
            isAgencyZone: !1,
            OrgaData: {},
            orgaActionType: "",
            agencyEntrance: [],
            isClickTimes: !1,
            timesTimer: null,
            isBannerEmpty: !1,
            isIPhoneX: !1,
            isShow_voxTraining: !1,
            isShow_YXZG: !1,
            loading: !0,
            is_skeleton1: !1,
            is_skeleton2: !1,
            is_skeleton3: !1,
            is_skeleton4: !1,
            is_skeleton5: !1,
            is_skeleton6: !1,
            is_skeleton7: !1,
            is_skeleton8: !1,
            isRefresh: !1,
            refreshStat: 0,
            partyReadType: null,
            soundSpaceList: [],
            openOrganList: !1,
            orgaId: "",
            orgaData: {},
            organList: [],
            isSoundSpace: 0,
            isOrgaNavigation: 0,
            isOrgaLists: 0,
            mpStatus: 0,
            orgaNavigation: [],
            childOrgaNavigation: [],
            page: 1,
            soundSpaceName: "",
            pageNum: 1,
            hasNext: !1,
            lastPage: !1,
            noDevice: !1,
            winHeight: null,
            orgaColor: "#3B87DD",
            showPartyOrga: null
        }, i.watch = {
            is_skeleton1: function(e) {
                this.watchSkeleton();
            },
            is_skeleton2: function(e) {
                this.watchSkeleton();
            },
            is_skeleton3: function(e) {
                this.watchSkeleton();
            },
            is_skeleton4: function(e) {
                this.watchSkeleton();
            },
            is_skeleton5: function(e) {
                this.watchSkeleton();
            },
            is_skeleton6: function(e) {
                this.watchSkeleton();
            },
            is_skeleton8: function(e) {
                this.watchSkeleton();
            }
        }, i.methods = {
            clickToPage: function(e) {
                0 != e.isOpening ? (0, v.skip)("/packagePartyStudy/pages/voiceSpace/voiceSpace?type=" + e.deviceType + "&deviceName=" + e.deviceName + "&isOrgaLists=" + e.isOrgaLists) : (0, 
                v.alertText)("当前设备暂未开通哦~");
            },
            onOrganzationDetails: function(e) {
                (0, v.skip)("/packagePartyStudy/pages/organzationDetails/organzationDetails?orgaId=" + e.orgaId + "&orgaName=" + e.orgaName);
            },
            onSwitchOrgan: function() {
                this.openOrganList = !this.openOrganList;
            },
            onCloseOrga: function() {
                this.openOrganList = !1;
            },
            onChooseOrgan: function(e) {
                this.openOrganList = !1, this.orgaId = e.orgaId, this.orgaData = {
                    orgaId: e.orgaId,
                    orgaName: e.orgaName
                }, this.authorize();
            },
            loadMoreNaviga: function() {
                this.hasNext && !this.lastPage && (this.pageNum++, this.getOrgaNavigations());
            },
            loadMoreOrgas: function() {
                this.hasNextPage && !this.isLastPage && (this.page++, this.getOrganLists());
            },
            refreshHandler: function() {
                this.bannerList = [], this.isShowBanner = !0, this.$apply(), this.loadBanner(), 
                this.getQueryHomeMenu(), this.$broadcast("setDownRefresh", "refresh"), this.$broadcast("updateReader", "refresh"), 
                this.isRefresh = !0;
            },
            restoreHandler: function(e) {
                this.isRefresh = !1;
            },
            tapYXZGImg: function() {
                this.setTimestamp(), (0, v.gotoApplet)();
            },
            tapClose: function() {
                this.setTimestamp();
            },
            tapVoxTraining: function() {
                (0, v.gotoApplet)();
            },
            goSearch: function() {
                this.$broadcast("hide"), (0, v.skip)("/packageReading/pages/searchPage/searchPage?type=opus");
            },
            goOpusDetail: function(e) {
                this.$broadcast("hide"), (0, v.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + e + "&entrance=" + names);
            },
            bannerChange: function(e) {
                e.detail.current, e.detail.source;
                this.bannerIndex = e.detail.current, this.$apply();
            },
            gotoPage: function(e, t) {
                var a = this;
                if (2 == e) {
                    if (a.isClickTimes) return !1;
                    a.clickTimes(), a.positionID = "", a.timesTimer += 1;
                }
                if ("ENABLE" != t.status) return (0, v.alertText)("该功能已被停用，请联系管理员。"), !1;
                if (1 == t.isNeedLogin && ((0, v.checkLogin)(null), (0, v.getLogining)())) return !1;
                if (1 == t.moduleType) t.moduleUrl ? (0, v.skip)(t.moduleUrl) : (0, v.alertText)("即将上线，敬请期待"); else if (2 == t.moduleType) 2 == t.moduleIndex && clearTimeout(a.timesTimer), 
                a.$broadcast("hide"), a.$emit("changeTabBar", t.moduleIndex); else if (3 == t.moduleType) {
                    if ("1" == e) {
                        if (a.isClickTimes) return !1;
                        a.clickTimes();
                    }
                    wx.navigateToMiniProgram({
                        appId: t.appId,
                        path: t.moduleUrl || "",
                        envVersion: "trial",
                        success: function(e) {}
                    });
                }
                a.$apply();
            },
            goActiveDetail: function(e, t, a, n, i, o, s) {
                if (this.$broadcast("hide"), this.cgBannerDto && this.bannerList.length - 1 == e && (0, 
                v.checkLogin)(function() {
                    (0, v.skip)("/packageActivity/pages/antiepidemicHome/antiepidemicHome");
                }), 7 === n) return (0, v.skip)("/packageActivity/pages/TaiyuanActivityHome/TaiyuanActivityHome"), 
                !1;
                if (1 == n) (0, v.skip)("/packageSquare/pages/activityDetail/activityDetail?activityId=" + t + "&activityName=" + a); else if (2 == n) (0, 
                v.skip)("/packageActivity/pages/graduaSeasonHome/graduaSeasonHome?activityId=" + t); else if (4 == n) i = 2 == i ? 1 : 3, 
                (0, v.skip)("/packageActivity/pages/activity/activity?activityId=" + t + "&activeIndex=" + i); else if (6 == n) (0, 
                v.skip)("/packageActivity/pages/studydayHome/studydayHome"); else if (8 == n && o) if ("/packageActivity/pages/TaiyuanQuestionnaire/TaiyuanQuestionnaire" === o) (0, 
                v.checkLogin)(function() {
                    (0, v.skip)("" + o);
                }); else if (o.includes("https://read.nicebooker.com")) {
                    var r = o.split("url=");
                    this.$parent.$preload("url", r[1]), (0, v.skip)("/packageIndex/pages/webview/webview");
                } else (0, v.skip)("" + o); else if (9 == n) (0, v.log)("点击了banner图，模板类型为9"); else {
                    if (10 == n) return void (null != s.appId ? (this.$broadcast("hide"), wx.navigateToMiniProgram({
                        appId: s.appId,
                        envVersion: "trial",
                        path: s.pathUrl || null,
                        success: function(e) {}
                    })) : (0, v.skip)("/packageSquare/pages/preheat423/preheat423?pathUrl=" + o));
                    if (3 == n && o) {
                        var l = {}, c = o.split("&"), g = !0, u = !1, p = void 0;
                        try {
                            for (var h, d = c[Symbol.iterator](); !(g = (h = d.next()).done); g = !0) {
                                var f = h.value.split("=");
                                l[f[0]] = f[1];
                            }
                        } catch (e) {
                            u = !0, p = e;
                        } finally {
                            try {
                                !g && d.return && d.return();
                            } finally {
                                if (u) throw p;
                            }
                        }
                        l.index && this.$emit("changeTabBar", l.index);
                    }
                }
            },
            scrollPosition: function(e) {
                e.detail.scrollTop <= 20 && (this.positionID = "");
            },
            orgaAction: function() {
                var e = this;
                (0, v.checkLogin)(function() {
                    var t = {
                        actionType: e.orgaActionType,
                        orgaId: parseInt(e.OrgaData.orgaId)
                    }, a = (0, v.getPublicParam)(t);
                    (0, m.UserCollectOrgaAction)(a).then(function(t) {
                        "200000" == t.code ? ((0, v.log)("UserCollectOrgaAction用户收藏机构操作获取成功：", t), (0, v.alertText)(t.message), 
                        e.orgaActionType = e.orgaActionType ? 0 : 1, e.$apply()) : ((0, v.log)("UserCollectOrgaAction用户收藏机构操作失败：", t), 
                        (0, v.alertText)(t.message));
                    }).catch(function(e) {
                        (0, v.log)("用户收藏机构操作获取异常：", e);
                    });
                });
            },
            goActivityEmpty: function() {
                (0, v.skip)("/packageIndex/pages/webview/webview?url=https://event.m.iyougu.com/");
            }
        }, i.events = {
            setRefreshStat: function() {
                this.isRefresh && (this.refreshStat++, this.refreshCall());
            },
            hideInnerAudio: function() {
                this.$broadcast("hide");
            },
            updateBanner: function(e) {
                var t = this, a = wx.getStorageSync("agencyZoneData").orgaId;
                t.bannerList = [], t.currentIndex = 0, t.bannerIndex = 0, (0, v.log)("updateBanner,index,currentIndex,", t.bannerIndex, t.currentIndex), 
                t.$apply(), a ? setTimeout(function() {
                    t.loadBanner();
                }, 500) : t.loadBanner();
            },
            hideBanner: function() {
                this.isShowBanner = !1, this.$apply();
            },
            updateAgency: function(e) {
                this.getagencyZoneData(e);
            },
            clearTimer: function() {
                var e = this;
                clearTimeout(e.timesTimer), e.timesTimer = null, e.$apply();
            }
        }, s = t, n(i, s);
    }
    return i(o, l.default.component), r(o, [ {
        key: "watchSkeleton",
        value: function() {
            this.is_skeleton1 && this.is_skeleton2 && this.is_skeleton3 && this.is_skeleton4 && this.is_skeleton5 && this.is_skeleton6 && this.is_skeleton7 && this.is_skeleton8 && (this.loading = !1, 
            this.$apply());
        }
    }, {
        key: "initYXZG",
        value: function() {
            var e = wx.getStorageSync("YXZG_time") || "", t = new Date().getTime(), a = wx.getStorageSync("agencyZoneData");
            a && a.orgaId ? this.isShow_YXZG = !1 : this.isShow_YXZG = !(e && e + 864e5 > t), 
            this.$apply();
        }
    }, {
        key: "setTimestamp",
        value: function() {
            this.isShow_YXZG = !1;
            var e = new Date().getTime();
            wx.setStorageSync("YXZG_time", e);
        }
    }, {
        key: "refreshCall",
        value: function() {
            this.isRefresh && 4 == this.refreshStat && (this.isRefresh = !1, this.refreshStat = 0);
        }
    }, {
        key: "loadBanner",
        value: function() {
            var e = this, t = this;
            t.isShowBanner = !0, (0, m.GetRecommendPlan)((0, v.getPublicParam)({
                showPage: 1
            })).then(function(a) {
                if (t.isRefresh && (t.refreshStat++, t.refreshCall()), 2e5 == a.code) {
                    e.is_skeleton1 = !0, setTimeout(function() {
                        wx.hideLoading();
                    }, 500), (0, v.log)("GetRecommendPlan轮播图获取成功：", a), t.currentIndex = 0, t.bannerIndex = 0, 
                    (0, v.log)("GetRecommendPlan,index,currentIndex,", t.bannerIndex, t.currentIndex);
                    var n = a.data.planListRecommendDtoList;
                    n.forEach(function(e) {
                        e.imageUrl = e.imageUrl && e.imageUrl.replace("http://", "https://");
                    }), t.bannerList = n;
                    var i = a.data.cgBannerDto;
                    i ? (i.imageUrl = i.indexBanner, t.cgBannerDto = !0, t.bannerList.push(i)) : t.cgBannerDto = !1, 
                    t.bannerList && 0 == t.bannerList.length && (t.isBannerEmpty = !0, t.isShowBanner = !1), 
                    t.$apply();
                } else setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, v.alertText)(a.message), (0, v.log)("GetRecommendPlan轮播图获取失败：", a);
            }).catch(function(e) {
                t.isRefresh && (t.refreshStat++, t.refreshCall()), setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, v.log)("请求异常", e);
            });
        }
    }, {
        key: "showModule",
        value: function() {
            var e = this;
            wx.nextTick(function() {
                e.isShowModule++, e.$apply();
            });
        }
    }, {
        key: "getUserOrga",
        value: function() {
            var e = this, t = {}, a = (0, v.getPublicParam)(t);
            (0, m.GetUserLogInOrga)(a).then(function(t) {
                if (console.log("-------------------------------------", t), 2e5 == t.code) {
                    (0, v.log)("GetUserLogInOrga用户当前机构获取成功：", t), e.isSoundSpace = t.data.isSoundSpace, 
                    e.isOrgaNavigation = t.data.isOrgaNavigation, e.isOrgaLists = t.data.isOrgaLists, 
                    e.mpStatus = t.data.mpStatus, e.soundSpaceName = t.data.soundSpaceName ? t.data.soundSpaceName : "";
                    var a = wx.getStorageSync("agencyZoneData").orgaId;
                    console.log("----------------------", a), a && (e.orgaNavigation = [], e.organList = [], 
                    1 == e.isOrgaNavigation && e.getOrgaNavigations(), 1 == e.isSoundSpace && e.getSoundSpaceList(), 
                    1 == e.isOrgaLists && e.getOrganLists());
                    var n = 1 === t.data.isOpenedReadWall;
                    (0, v.setIsOpenedReadWall)(n), e.$invoke("listen", "setIsOpenedReadWall", n);
                    var i = t.data.orgaType ? t.data.orgaType : -1;
                    e.partyReadType = i, e.showPartyOrga = (1 == i || 2 == i) && 1, e.$apply();
                } else (0, v.log)("GetUserLogInOrga用户当前机构获取失败：", t), (0, v.alertText)(t.message);
            }).catch(function(e) {
                (0, v.log)("GetUserLogInOrga用户当前机构获取异常：", e);
            });
        }
    }, {
        key: "getagencyZoneData",
        value: function(e) {
            var t = this;
            (0, v.getStorage)("agencyZoneData").then(function(a) {
                var n = a.data;
                if (t.OrgaData = n, e) return t.isAgencyZone = !0, !1;
                n.orgaId ? (t.getQueryHomeMenu(), t.getQueryOrgaTheme(), t.getUserOrga(), t.isAgencyZone = !0) : t.isAgencyZone = !1, 
                t.$apply();
            }).catch(function(e) {
                t.isAgencyZone = !1, t.agencyEntrance = [], t.$apply(), (0, v.setIsOpenedReadWall)(!1);
            });
        }
    }, {
        key: "getQueryHomeMenu",
        value: function() {
            var e = this, t = (0, v.getPublicParam)({});
            (0, m.QueryHomeMenu)(t).then(function(t) {
                e.isRefresh && (e.refreshStat++, e.refreshCall()), 2e5 == t.code ? ((0, v.log)("获取首页快捷入口数据成功：", t), 
                e.is_skeleton2 = !0, e.entranceData = t.data, e.$apply()) : (0, v.log)("获取首页快捷入口数据失败：", t);
            }).catch(function(t) {
                e.isRefresh && (e.refreshStat++, e.refreshCall()), (0, v.log)("获取首页快捷入口数据异常：", t);
            });
        }
    }, {
        key: "getQueryOrgaTheme",
        value: function() {
            var e = this, t = {}, a = (0, v.getPublicParam)(t);
            (0, m.QueryOrgaTheme)(a).then(function(t) {
                if (2e5 == t.code) {
                    if ((0, v.log)("机构主题风格：", t), t.data) {
                        var a = wx.getStorageSync("agencyZoneData");
                        a.is_order = !0, a = s({}, a, t.data), e.OrgaData = a, e.$emit("receiveOrgaData", a), 
                        (0, v.setStorage)("agencyZoneData", a), e.orgaColor = e.OrgaData.themeColor, e.$invoke("HotPartyRead", "updateOrgaTheme", e.orgaColor), 
                        e.$broadcast("updateOrgaColor", e.orgaColor);
                    }
                    e.$apply();
                } else (0, v.log)("机构主题风格：失败：", t), (0, v.alertText)(t.message);
            }).catch(function(e) {
                (0, v.log)("机构主题风格：：", e);
            });
        }
    }, {
        key: "clickTimes",
        value: function() {
            var e = this;
            e.isClickTimes = !0, e.timesTimer = setTimeout(function() {
                e.isClickTimes = !1;
            }, 300);
        }
    }, {
        key: "getSoundSpaceList",
        value: function() {
            var e = this, t = {}, a = (0, v.getPublicParam)(t);
            (0, m.GetHomeSoundSpaceList)(a).then(function(t) {
                console.log("有声空间数据：", t), 2e5 == t.code ? (e.soundSpaceList = t.data, e.noDevice = !e.soundSpaceList.length, 
                e.$apply()) : (0, v.alertText)(t.message);
            }).catch(function(e) {
                (0, v.log)("有声空间：", e);
            });
        }
    }, {
        key: "getOrganLists",
        value: function() {
            var e = this, a = {
                pageNum: this.page,
                pageSize: 10
            };
            (0, v.showLoading)("加载中"), (0, m.GetHomeOrgaList)((0, v.getPublicParam)(a)).then(function(a) {
                if (2e5 == a.code) {
                    var n;
                    (0, v.hideLoading)(), (n = e.organList).push.apply(n, t(a.data.list)), e.hasNextPage = a.data.hasNextPage, 
                    e.isLastPage = a.data.isLastPage, e.$apply();
                } else (0, v.alertText)(a.message);
                console.log("------------------------父子级机构列表----------------------", a);
            }).catch(function(e) {
                console.log("获取子级机构列表报错：", e);
            });
        }
    }, {
        key: "getOrgaNavigations",
        value: function() {
            var e = this, a = {
                pageNum: this.pageNum,
                pageSize: 10
            };
            (0, m.GetOrgaNavigationList)((0, v.getPublicParam)(a)).then(function(a) {
                if (console.log("---------------获取机构导航-----------------", a), 2e5 == a.code) {
                    var n;
                    (n = e.orgaNavigation).push.apply(n, t(a.data.list)), e.hasNext = a.data.hasNextPage, 
                    e.lastPage = a.data.isLastPage, e.childOrgaNavigation = e.orgaNavigation.length > 1 ? e.orgaNavigation.slice(1) : [], 
                    e.$apply();
                } else (0, v.alertText)(a.message);
            }).catch(function(e) {
                console.log("获取机构导航报错：", e);
            });
        }
    }, {
        key: "loginOrga",
        value: function() {
            var e = this, t = {
                orgaId: this.orgaId
            }, a = (0, v.getPublicParam)(t);
            (0, m.SwitchUserLogInOrga)(a).then(function(t) {
                if (2e5 == t.code) {
                    if ((0, v.log)("SwitchUserLogInOrga切换用户登录机构成功：", t), t.data.mpStatus) return wx.showToast({
                        title: 2 === t.data.mpStatus ? "该机构分区的使用授权已结束" : "该机构暂未开通小程序服务",
                        icon: "none"
                    });
                    1007 == e.orgaId && (e.orgaData.orgaName = "优谷朗读亭"), console.log("************************************", t.data.orgaType), 
                    l.default.$instance.globalData.isOrgaChannel = "", l.default.$instance.globalData.orgaType = t.data.orgaType, 
                    e.orgaData.orgaType = t.data.orgaType, l.default.$instance.globalData.isOrgaLists = t.data.isOrgaLists ? e.OrgaData.orgaId : null, 
                    (0, v.setStorage)("agencyZoneData", e.orgaData), wx.nextTick(function() {
                        wx.reLaunch({
                            url: "/pages/mainpage/mainpage"
                        });
                    }), e.$apply();
                } else (0, v.log)("SwitchUserLogInOrga切换用户登录机构失败：", t), (0, v.alertText)(t.message);
            }).catch(function(e) {
                (0, v.log)("切换用户登录机构异常：", e);
            });
        }
    }, {
        key: "authorize",
        value: function() {
            var e = this;
            (0, v.checkLogin)(function() {
                e.loginOrga();
            });
        }
    }, {
        key: "onLoad",
        value: function(e) {
            var t = this;
            wx.getSystemInfo({
                success: function(e) {
                    console.log("--------可见区域", e);
                    var a = e.windowHeight, n = 750 / e.windowWidth;
                    t.winHeight = a * n - e.statusBarHeight * n, console.log("------------------高度", t.winHeight);
                }
            }), this.bannerList = [], this.isShowBanner = !0, this.currentIndex = 0, this.bannerIndex = 0, 
            this.loadBanner(), this.getQueryHomeMenu(), this.showModule(), this.showModule(), 
            this.showModule(), this.isIPhoneX = this.$parent.Shipei;
            var a = l.default.$instance.globalData.orgaType || -1;
            this.partyReadType = a, this.showPartyOrga = (1 == a || 2 == a) && 1, this.$apply();
        }
    } ]), o;
}();

exports.default = k;