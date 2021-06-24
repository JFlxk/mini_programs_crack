function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : s(e)) && "function" != typeof e ? t : e;
}

function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : s(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, i, a) {
        return i && t(e.prototype, i), a && t(e, a), e;
    };
}(), n = t(require("./../../npm/wepy/lib/wepy.js")), r = t(require("./../../components/load/load.js")), c = require("./../../api/index.js"), h = require("./../../common/js/util.js"), l = function(t) {
    function s() {
        var t, a, o, n;
        e(this, s);
        for (var l = arguments.length, u = Array(l), p = 0; p < l; p++) u[p] = arguments[p];
        return a = o = i(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(u))), 
        o.config = {
            navigationBarTitleText: "活动"
        }, o.props = {
            newTab_h: {
                type: String,
                value: ""
            }
        }, o.components = {
            Load: r.default
        }, o.data = {
            activityListData: [],
            pageIndex: 1,
            isShowMore: !1,
            isCanRequest: !0,
            recommendActivity: [],
            status: [ "全部", "进行中", "即将开始", "已结束" ],
            statusIndex: 0,
            curStatus: "全部",
            isShowStatus: !1,
            tabs: [ "热门", "时间", "同城", "小舞台" ],
            activeIndex: 0,
            isShowRule: !1,
            longitude: "",
            latitude: "",
            address: "",
            isShowSearch: !1,
            searchLogData: [],
            hotSearchData: [],
            searchText: "",
            isFixed: !1,
            cgBannerDto: !1,
            isAgencyZone: !1,
            isShowReadPavilion: !0,
            isIPhoneX: !1,
            is_order: !1,
            isBannerEmpty: !1,
            isEmpty: !1,
            isRefresh: !1,
            refreshStat: null,
            loading: !0,
            is_skeleton1: !1,
            is_skeleton2: !1,
            tabChangeFn_text: "",
            swiper_h: 0,
            orgaColor: "#3B87DD"
        }, o.watch = {
            is_skeleton1: function(t) {
                this.watchSkeleton();
            },
            is_skeleton2: function(t) {
                this.watchSkeleton();
            }
        }, o.methods = {
            pulldown: function() {
                this.isShowStatus = !this.isShowStatus;
            },
            statusChange: function(t, e) {
                if (this.isShowStatus = !this.isShowStatus, this.statusIndex == e) return !1;
                this.curStatus = t, this.statusIndex = e, this.reset(), 3 == this.activeIndex ? this.loadStageList() : this.loadActivityList();
            },
            packup: function() {
                this.isShowStatus = !1;
            },
            tabChange: function(t) {
                if (this.activeIndex == t) return !1;
                this.activeIndex = t, this.reset(), 2 != t ? 3 == this.activeIndex ? this.loadStageList() : this.loadActivityList() : this.getLocation();
            },
            scroll: function() {
                this.isShowStatus = !1, this.isCanRequest && (this.pageIndex++, 3 == this.activeIndex ? this.loadStageList() : this.loadActivityList()), 
                this.$apply();
            },
            scrolling: function(t) {
                if (this.isShowStatus && (this.isShowStatus = !1), t.detail.scrollTop > parseInt(this.swiper_h)) {
                    if (this.isFixed) return !1;
                    this.isFixed = !0, this.$apply();
                } else {
                    if (!this.isFixed) return !1;
                    this.isFixed = !1, this.$apply();
                }
            },
            rule: function() {
                this.isShowRule = !0;
            },
            close: function() {
                this.isShowRule = !1;
            },
            showSearch: function() {
                this.isShowSearch = !0, this.loadSearchLog(), this.loadHotSearchActivity(), this.reset();
            },
            cancel: function() {
                this.isShowSearch = !1, this.searchText = "", this.$apply(), this.reset(), this.loadActivityList();
            },
            assign: function(t) {
                this.searchText = t, this.reset(), this.loadActivityList();
            },
            write: function(t) {
                console.log(t), this.searchText = t.detail.value, this.reset(), this.searchText.replace(/\s+/g, "") && this.loadActivityList();
            },
            clearWrite: function() {
                this.searchText = "", this.reset();
            },
            goActivity: function(t, e, i, a, s, o, n, r, c) {
                if (wx.getStorageSync("sessionId") && wx.getStorageSync("phoneNumber") && "string" == typeof n && n && this.saveSearchLog(n, e), 
                this.cgBannerDto && this.recommendActivity.length - 1 == t && (0, h.checkLogin)(function() {
                    (0, h.skip)("/packageActivity/pages/antiepidemicHome/antiepidemicHome");
                }), "newYear" == o) return (0, h.skip)("/packageActivity/pages/flagWebpage/flagWebpage"), 
                !1;
                if (7 === a) return (0, h.skip)("/packageActivity/pages/TaiyuanActivityHome/TaiyuanActivityHome"), 
                !1;
                if (1 == a) (0, h.skip)("/packageSquare/pages/activityDetail/activityDetail?activityId=" + e + "&activityName=" + i); else if (2 == a) (0, 
                h.skip)("/packageActivity/pages/graduaSeasonHome/graduaSeasonHome?activityId=" + e); else if (4 == a) s = 2 == s ? 1 : 3, 
                (0, h.skip)("/packageActivity/pages/activity/activity?activityId=" + e + "&activityName=" + i + "&activeIndex=" + s); else if (5 == a) (0, 
                h.skip)("/packageSquare/pages/smallStage/smallStage?activityId=" + e); else if (6 == a) (0, 
                h.skip)("/packageActivity/pages/studydayHome/studydayHome"); else if (8 == a && r) "/packageActivity/pages/TaiyuanQuestionnaire/TaiyuanQuestionnaire" === r ? (0, 
                h.checkLogin)(function() {
                    (0, h.skip)("" + r);
                }) : (0, h.skip)("" + r); else if (9 == a) (0, h.log)("点击了banner图，模板类型为9"); else {
                    if (10 == a) return void (null != c.appId ? (this.$broadcast("hide"), wx.navigateToMiniProgram({
                        appId: c.appId,
                        envVersion: "trial",
                        path: c.pathUrl || null,
                        success: function(t) {}
                    })) : (0, h.skip)("/packageSquare/pages/preheat423/preheat423?pathUrl=" + r));
                    if (3 == a && r) {
                        var l = {}, u = r.split("&"), p = !0, g = !1, d = void 0;
                        try {
                            for (var y, f = u[Symbol.iterator](); !(p = (y = f.next()).done); p = !0) {
                                var v = y.value.split("=");
                                l[v[0]] = v[1];
                            }
                        } catch (t) {
                            g = !0, d = t;
                        } finally {
                            try {
                                !p && f.return && f.return();
                            } finally {
                                if (g) throw d;
                            }
                        }
                        l.index && this.$emit("changeTabBar", l.index);
                    }
                }
            },
            goReadPavilion: function() {
                (0, h.skip)("/packageIndex/pages/readPavilion/readPavilion");
            },
            toSetting: function() {
                var t = this;
                wx.openSetting({
                    success: function(e) {
                        console.log(e.authSetting), e.authSetting["scope.userLocation"] && (t.activeIndex = 2, 
                        t.getLocation());
                    }
                });
            },
            clearSearchLog: function() {
                var t = this;
                this.searchLogData = [];
                var e = {}, i = (0, h.getPublicParam)(e);
                (0, c.DelSearchLog)(i).then(function(e) {
                    2e5 == e.code ? ((0, h.log)("DelSearchLog清空活动搜索记录成功：", e), t.$apply()) : ((0, h.log)("DelSearchLog清空活动搜索记录失败:", e), 
                    (0, h.alertText)(e.message));
                }).catch(function(t) {
                    (0, h.log)("清空活动搜索记录异常:", t);
                });
            },
            refreshHandler: function(t) {
                console.log("32143124131214", t), this.loading = !0, this.is_skeleton1 = !1, this.is_skeleton2 = !1, 
                this.resetInit(), this.isRefresh = !0;
            },
            restoreHandler: function(t) {
                this.isRefresh = !1;
            },
            goActivityEmpty: function() {
                (0, h.skip)("/packageIndex/pages/webview/webview?url=https://event.m.iyougu.com/");
            },
            updateOrgaInfo: function(t, e) {
                var i = this.$parent.$parent.globalData.orgaType || this.$parent.partyOrgaType, a = (1 == i || 2 == i) && 1;
                this.partyOrgaType = i, a && (this.orgaColor = this.$parent.actived_color), this.is_order = !0, 
                this.$apply();
            }
        }, o.events = {
            subUpdate: function(t, e) {
                var i = this;
                if (4 == t) {
                    this.isFixed = !1;
                    var a = this.$parent.$parent.globalData.orgaType || this.$parent.partyOrgaType, s = (1 == a || 2 == a) && 1;
                    this.partyOrgaType = a;
                    var o = this.$parent.orgaData;
                    if ((s || o.orgaId) && (this.orgaColor = this.$parent.actived_color), !this.tabChangeFn_text) {
                        if ("tabChangeFn" == e && (this.tabChangeFn_text = e), this.isShowSearch && !this.searchText) return;
                        this.resetInit();
                    }
                    setTimeout(function() {
                        wx.createSelectorQuery().select(".swiper").boundingClientRect(function(t) {
                            i.swiper_h = t.height, i.$apply();
                        }).exec();
                    }, 0);
                }
                (0, h.getStorage)("agencyZoneData").then(function(t) {
                    var e = t.data;
                    i.isAgencyZone = e.orgaId, e && e.is_order ? i.is_order = !0 : i.is_order = !1, 
                    i.$apply();
                }).catch(function(t) {
                    i.isAgencyZone = !1, i.$apply();
                }), this.isIPhoneX = this.$parent.Shipei;
            }
        }, n = a, i(o, n);
    }
    return a(s, n.default.component), o(s, [ {
        key: "watchSkeleton",
        value: function() {
            this.is_skeleton1 && this.is_skeleton2 && (this.loading = !1, this.$apply());
        }
    }, {
        key: "reset",
        value: function() {
            this.activityListData = [], this.pageIndex = 1, this.isCanRequest = !0, this.isShowMore = !1, 
            this.isEmpty = !1;
        }
    }, {
        key: "loadRecommendActivity",
        value: function() {
            var t = this, e = (0, h.getPublicParam)({
                showPage: 2
            });
            (0, c.GetRecommendPlan)(e).then(function(e) {
                if (2e5 == e.code) {
                    t.is_skeleton1 = !0, (0, h.log)("GetRecommendPlan推荐活动获取成功：", e), t.recommendActivity = e.data.planListRecommendDtoList;
                    var i = e.data.cgBannerDto;
                    i ? (i.imageUrl = i.indexBanner, t.cgBannerDto = !0, t.recommendActivity.push(i)) : t.cgBannerDto = !1, 
                    t.recommendActivity && 0 == t.recommendActivity.length && (t.isBannerEmpty = !0), 
                    t.refreshStat++, t.refreshCall(!0), t.$apply();
                } else (0, h.log)("GetRecommendPlan推荐活动获取失败:", e), (0, h.alertText)(e.message), 
                t.refreshCall();
            }).catch(function(e) {
                (0, h.log)("推荐活动获取异常:", e), t.refreshCall();
            });
        }
    }, {
        key: "loadActivityList",
        value: function() {
            var t = this;
            this.$invoke("Load", "setState", "loading");
            var e = {
                addr: "",
                orderBy: this.activeIndex + 1,
                pageNum: this.pageIndex,
                pageSize: 6,
                valid: this.statusIndex,
                searchText: this.searchText
            };
            2 === this.activeIndex && (e.addr = this.address);
            var i = (0, h.getPublicParam)(e);
            (0, c.GetActivityList)(i).then(function(e) {
                t.$invoke("Load", "setState", null), 2e5 == e.code ? (t.is_skeleton2 = !0, (0, h.log)("GetActivityList活动列表获取成功:", e), 
                t.isEmpty = !e.data.total, e.data.list && e.data.list.forEach(function(t, e) {
                    t.imageUrl && (t.imageUrl = t.imageUrl.replace("http://", "https://") + "?v=1");
                }), t.activityListData = t.activityListData.concat(e.data.list), t.isShowReadPavilion = e.extData, 
                e.data.isLastPage ? (t.isShowMore = !0, t.isCanRequest = !1, t.$invoke("Load", "setState", "nomore")) : t.isShowMore = !1, 
                t.refreshStat++, t.refreshCall(!0), t.$apply()) : ((0, h.log)("GetActivityList活动获取失败:", e), 
                (0, h.alertText)(e.message), t.refreshCall());
            }).catch(function(e) {
                (0, h.log)("活动获取异常:", e), t.refreshCall();
            });
        }
    }, {
        key: "loadStageList",
        value: function() {
            var t = this;
            this.$invoke("Load", "setState", "loading");
            var e = {
                pageNum: this.pageIndex,
                pageSize: 10,
                valid: this.statusIndex
            }, i = (0, h.getPublicParam)(e);
            (0, c.GetStageLists)(i).then(function(e) {
                t.is_skeleton2 = !0, t.$invoke("Load", "setState", null), 2e5 == e.code ? (t.isEmpty = !e.data.total, 
                (0, h.log)("GetStageLists小舞台活动获取成功:", e), t.activityListData = t.activityListData.concat(e.data.list), 
                e.data.isLastPage && (t.isCanRequest = !1, t.$invoke("Load", "setState", "nomore")), 
                t.$apply()) : ((0, h.log)("GetStageLists小舞台活动获取失败:", e), (0, h.alertText)(e.message));
            }).catch(function(t) {
                (0, h.log)("活动获取异常:", t);
            });
        }
    }, {
        key: "loadSearchLog",
        value: function() {
            var t = this, e = {
                pageNum: 1,
                pageSize: 5
            }, i = (0, h.getPublicParam)(e);
            (0, c.GetSearchLog)(i).then(function(e) {
                2e5 == e.code ? ((0, h.log)("GetSearchLog活动搜索记录成功：", e), t.searchLogData = e.data.list, 
                t.$apply()) : ((0, h.log)("GetSearchLog活动搜索记录失败:", e), (0, h.alertText)(e.message));
            }).catch(function(t) {
                (0, h.log)("活动搜索记录异常:", t);
            });
        }
    }, {
        key: "loadHotSearchActivity",
        value: function() {
            var t = this, e = {
                pageNum: 1,
                pageSize: 3
            }, i = (0, h.getPublicParam)(e);
            (0, c.GetHotSearchActivity)(i).then(function(e) {
                2e5 == e.code ? ((0, h.log)("GetHotSearchActivity热门搜索活动成功：", e), t.hotSearchData = e.data.list, 
                t.$apply()) : ((0, h.log)("GetHotSearchActivity热门搜索活动失败:", e), (0, h.alertText)(e.message));
            }).catch(function(t) {
                (0, h.log)("热门搜索活动异常:", t);
            });
        }
    }, {
        key: "saveSearchLog",
        value: function(t, e) {
            var i = this, a = {
                keyword: t,
                planActivityId: e
            }, s = (0, h.getPublicParam)(a);
            (0, c.SaveSearchLog)(s).then(function(t) {
                2e5 == t.code ? ((0, h.log)("SaveSearchLog保存活动搜索记录成功：", t), i.$apply()) : ((0, h.log)("SaveSearchLog保存活动搜索记录失败:", t), 
                (0, h.alertText)(t.message));
            }).catch(function(t) {
                (0, h.log)("保存活动搜索记录异常:", t);
            });
        }
    }, {
        key: "getLocation",
        value: function() {
            var t = this;
            wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    (0, h.log)("授权地理位置返回", e), t.latitude = e.latitude, t.longitude = e.longitude, wx.request({
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
                            console.log("腾讯api：", e), e && 200 == e.statusCode && e.data && (t.address = e.data.result.address_component.city, 
                            t.reset(), t.loadActivityList(), t.$apply());
                        },
                        fail: function(t) {
                            (0, h.log)(t);
                        }
                    });
                },
                fail: function(e) {
                    t.isEmpty = !0, t.isCanRequest = !1, t.$apply(), setTimeout(function() {
                        wx.hideLoading();
                    }, 500);
                }
            });
        }
    }, {
        key: "refreshCall",
        value: function(t) {
            this.isRefresh && this.refreshStat > 0 && (this.isRefresh = !1);
        }
    }, {
        key: "networkChange",
        value: function() {
            this.isShowSearch && !this.searchText || this.resetInit();
        }
    }, {
        key: "resetInit",
        value: function(t) {
            this.statusIndex = 0, this.curStatus = "全部", this.isShowStatus = !1, this.activeIndex = 0, 
            this.isFixed = !1, this.reset(), !t && this.loadActivityList(), this.loadRecommendActivity(), 
            this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {}
    } ]), s;
}();

exports.default = l;