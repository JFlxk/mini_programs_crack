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

function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t;
}

function s(e, t) {
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

var r = function() {
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
}(), o = e(require("./../../npm/wepy/lib/wepy.js")), l = require("./../../api/config.js"), u = require("./../../api/index.js"), c = require("./../../common/js/util.js"), h = e(require("./../../components/navBar/navBar.js")), g = e(require("./../../components/load/load.js")), p = function(e) {
    function n() {
        var e, t, s, r;
        a(this, n);
        for (var l = arguments.length, p = Array(l), d = 0; d < l; d++) p[d] = arguments[d];
        return t = s = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(p))), 
        s.config = {
            navigationBarTitleText: "选择素材",
            enablePullDownRefresh: !1
        }, s.props = {
            newTab_h: {
                type: String,
                value: ""
            }
        }, s.components = {
            navBar: h.default,
            load: g.default
        }, s.data = {
            paddingTop: "128rpx",
            tabs: [ "热门素材", "我的原创", "我的收藏" ],
            activeIndex: 0,
            pageIndex: 1,
            isShowMore: !1,
            isCanRequest: !0,
            materialList: [],
            isUnderReview: "Y",
            sessionId: null,
            lazyLoad: !0,
            indicatorDots: !0,
            indicatorDotsCateg: !0,
            autoplay: !0,
            autoplayCateg: !1,
            circular: !0,
            circularCateg: !0,
            isHasMoreItem: !1,
            isThirdPage: !1,
            interval: 5e3,
            duration: 1e3,
            banners: [],
            bannersCateg: [ {} ],
            categList: [],
            categList2: [],
            categList3: [],
            typesList: [],
            isFirstLoading: !0,
            isLoading: !1,
            pageCount: 0,
            dataList: [],
            swiperCurrent: 0,
            materialPageNum: 1,
            material_list: [],
            isMaterialLoging: !1,
            isMaterialShow: !1,
            is_order: !1,
            newTab_list: [ {
                type: 1,
                typeName: "文库朗读"
            }, {
                type: 3,
                typeName: "趣味配音"
            }, {
                type: 2,
                typeName: "童声绘本"
            } ],
            gather_list: [ "自由朗读", "上传文章", "上传视频" ],
            newTab_index: 0,
            is_gather: !1,
            dubTab_index: 1,
            dub_list: [],
            is_guideMasking: !1,
            newTab_h: 0,
            HbOrPyModule_list: [],
            isLastPage: !1,
            is_dub_empty: !1,
            labelSetupType: null,
            loading: !0,
            is_skeleton1: !1,
            is_skeleton2: !1,
            isRefresh: !1,
            refreshStat: 0,
            orgaColor: "#3B87DD"
        }, s.watch = {
            is_skeleton1: function(e) {
                this.watchSkeleton();
            },
            is_skeleton2: function(e) {
                this.watchSkeleton();
            }
        }, s.methods = {
            refreshHandler: function() {
                this.funcTapNewTab(this.newTab_index), this.isRefresh = !0;
            },
            restoreHandler: function(e) {
                this.isRefresh = !1;
            },
            goSearch: function() {
                this.$broadcast("hide"), (0, c.skip)("/packageReading/pages/searchPage/searchPage?type=material");
            },
            gotoDubTab_index: function() {
                this.dubTab_index = 1, this.pageIndex = 1, this.dub_list = [], this.isLastPage = !1, 
                this.getHotHOPTypeResouces();
            },
            gotoMateterial: function(e) {
                var t = this, a = t.newTab_index;
                3 == t.labelSetupType ? ((0, c.skip)("/packageReading/pages/dubMaterial/dubMaterial?type=1&resourceId=" + e), 
                t.newTab_index = 3, setTimeout(function() {
                    t.newTab_index = a;
                }, 200)) : ((0, c.skip)("/packageReading/pages/dubMaterial/dubMaterial?type=2&resourceId=" + e), 
                t.newTab_index = 3, setTimeout(function() {
                    t.newTab_index = a;
                }, 200));
            },
            tapGuideMasking: function() {
                this.is_guideMasking = !1, (0, c.setStorage)("is_guideMasking", !0);
            },
            tapGtherGoto: function(e) {
                var t = this;
                (0, c.checkLogin)(function() {
                    0 == e ? (o.default.$instance.globalData.textTitle && (o.default.$instance.globalData.textId = null, 
                    o.default.$instance.globalData.textTitle = null, o.default.$instance.globalData.textAuthor = null, 
                    o.default.$instance.globalData.textContent = null, o.default.$instance.globalData.musicUrl = null, 
                    o.default.$instance.globalData.musicId = null, o.default.$instance.globalData.isCustom = !1), 
                    (0, c.skip)("/pages/recording/recording?freeReading=true"), t.is_gather = !1) : 1 == e ? ((0, 
                    c.skip)("/packageIndex/pages/addMaterial/addMaterial?type=reading"), t.is_gather = !1) : wx.chooseVideo({
                        compressed: !0,
                        sourceType: [ "album" ],
                        success: function(e) {
                            return e.size > 73400320 ? wx.showModal({
                                title: "压缩后视频大于70M(压缩后:" + (e.size / 1048576).toFixed(1) + "M),请处理视频大小后重新上传"
                            }) : e.duration < 5 ? wx.showModal({
                                title: "视频长度不能少于5秒"
                            }) : (t.$parent.$preload("videoData", e), t.is_gather = !1, void (0, c.skip)("/packageReading/pages/previewUserVideo/previewUserVideo"));
                        }
                    });
                });
            },
            bindscroll: function() {
                this.is_gather = !1;
            },
            tapDubTab: function(e) {
                var t = this;
                1 == e ? (this.dubTab_index = e, this.pageIndex = 1, this.dub_list = [], this.isLastPage = !1, 
                this.getHotHOPTypeResouces()) : (0, c.checkLogin)(function() {
                    t.dubTab_index = e, t.pageIndex = 1, t.materialPageNum = 1, t.dub_list = [], t.isLastPage = !1, 
                    t.loadGetResourceList();
                });
            },
            tapNewTab: function(e) {
                if (this.newTab_index == e) return !1;
                this.funcTapNewTab(e);
            },
            tapGather: function() {
                this.is_gather = !this.is_gather;
            },
            swiperChange: function(e) {
                this.swiperCurrent = e.detail.current, this.is_gather = !1;
            },
            scroll: function() {
                1 == this.labelSetupType ? 2 == this.activeIndex ? this.isMaterialShow || this.loadGetResourceList() : this.isCanRequest && (this.pageIndex++, 
                this.getData()) : this.isLastPage || (1 == this.dubTab_index ? (this.pageIndex++, 
                this.getHotHOPTypeResouces()) : (this.materialPageNum++, this.loadGetResourceList()));
            },
            tabChange: function(e) {
                var t = this;
                this.activeIndex = e, this.reset(), 1 == this.activeIndex ? (0, c.checkLogin)(function() {
                    t.getData();
                }) : 2 == this.activeIndex ? (0, c.checkLogin)(function() {
                    t.materialPageNum = 1, t.material_list = [], t.isMaterialShow = !1, t.loadGetResourceList();
                }) : this.getData();
            },
            gotoIndexOne: function() {
                this.activeIndex = 0, this.reset(), this.getData();
            },
            audition: function(e, t) {
                1 == e ? t ? (0, c.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t) : (0, 
                c.alertText)("暂无试听作品!") : 2 == e && (0, c.skip)("/packagePopular/pages/professionerDetail/professionerDetail?opusId=" + t);
            },
            goto: function(e, t, a, i, s) {
                var n = this;
                (0, c.checkLogin)(function() {
                    n.$parent.$parent.globalData.textId = e, n.$parent.$parent.globalData.textTitle = t, 
                    n.$parent.$parent.globalData.textAuthor = a, n.$parent.$parent.globalData.textContent = i, 
                    "true" == s ? (n.$parent.$parent.globalData.isCustom = !0, n.getGetMaterialDetail(1, e)) : (n.$parent.$parent.globalData.isCustom = !1, 
                    n.getGetMaterialDetail(0, e));
                });
            },
            openAddr: function() {
                (0, c.skip)("/pages/map/map?longitude=" + this.longitude + "&latitude=" + this.latitude);
            },
            cancelMaterial: function(e, t) {
                var a = this, i = {
                    resourceId: t
                }, s = (0, c.getPublicParam)(i);
                (0, u.CancelResource)(s).then(function(t) {
                    if (2e5 == t.code) {
                        if (1 != a.labelSetupType) {
                            for (var i = [], s = 0, n = a.dub_list.length; s < n; s++) s != e && i.push(a.dub_list[s]);
                            a.dub_list = i;
                        } else {
                            for (var r = [], o = 0, l = a.material_list.length; o < l; o++) o != e && r.push(a.material_list[o]);
                            a.material_list = r;
                        }
                        wx.showToast({
                            title: "取消收藏成功",
                            icon: "success",
                            duration: 2e3
                        }), a.$apply(), (0, c.log)("CancelCollect取消收藏素材成功: ", t);
                    } else (0, c.log)("CancelCollect取消收藏素材失败: ", t), (0, c.alert)("请求异常", "", "./../../../common/images/warning.png");
                }).catch(function(e) {
                    (0, c.alert)("获取数据异常"), (0, c.log)(e);
                });
            },
            updateOrgaInfo: function(e, t) {
                var a = this.$parent.$parent.globalData.orgaType || this.$parent.partyOrgaType, i = (1 == a || 2 == a) && 1;
                this.partyOrgaType = a, i && (this.orgaColor = this.$parent.actived_color), this.is_order = !0, 
                this.$apply();
            }
        }, s.events = {
            subUpdate: function(e) {
                if (2 == e) {
                    var t = this.$parent.$parent.globalData.orgaType, a = (1 == t || 2 == t) && 1, i = this.$parent.orgaData;
                    (a || i.orgaId) && (this.orgaColor = this.$parent.actived_color), null == this.labelSetupType && this.loadIndexResLabelSetup(), 
                    wx.getStorageSync("is_guideMasking") ? this.is_guideMasking = !1 : this.is_guideMasking = !0, 
                    this.is_gather = !1;
                }
            }
        }, r = t, i(s, r);
    }
    return s(n, o.default.component), r(n, [ {
        key: "watchSkeleton",
        value: function() {
            this.is_skeleton1 && this.is_skeleton2 && (this.loading = !1, this.$apply());
        }
    }, {
        key: "funcTapNewTab",
        value: function(e) {
            this.loading = !0, this.is_skeleton1 = !1, this.is_skeleton2 = !1;
            var t = this.newTab_list[e];
            this.newTab_index = e, this.is_gather = !1, this.labelSetupType = t && t.type, this.$apply(), 
            1 == t.type ? (this.loadResourceTypes(), this.activeIndex = 0, this.reset(), this.getData()) : (this.dubTab_index = 1, 
            this.pageIndex = 1, this.dub_list = [], this.HbOrPyModule_list = [], this.isLastPage = !1, 
            this.getIndexHbOrPyModule(), this.getHotHOPTypeResouces());
        }
    }, {
        key: "refreshCall",
        value: function() {
            this.isRefresh && 2 == this.refreshStat && (this.isRefresh = !1, this.refreshStat = 0);
        }
    }, {
        key: "getIndexHbOrPyModule",
        value: function() {
            var e = this, t = this, a = {
                type: t.labelSetupType || 0
            }, i = (0, c.getPublicParam)(a);
            (0, u.QueryIndexHbOrPyModule)(i).then(function(a) {
                if (e.isRefresh && (t.refreshStat++, t.refreshCall()), 2e5 == a.code) {
                    t.is_skeleton1 = !0, (0, c.log)("获取趣味配音/童声绘本分类成功：", a);
                    var i = a.data, s = a.data.length;
                    t.pageCount = Math.ceil(s / 8);
                    for (var n = 0; n < t.pageCount; n++) t.HbOrPyModule_list[n] = i.slice(8 * n, 8 * (n + 1));
                    t.swiperCurrent = 0, t.$apply();
                } else (0, c.log)("获取趣味配音/童声绘本分类失败：", a), (0, c.log)(a.message);
            }).catch(function(a) {
                e.isRefresh && (t.refreshStat++, t.refreshCall()), (0, c.alert)("获取数据异常"), (0, c.log)(a);
            });
        }
    }, {
        key: "getHotHOPTypeResouces",
        value: function() {
            var e = this, a = this, i = {
                pageNum: a.pageIndex,
                pageSize: 10,
                type: a.labelSetupType || 0
            }, s = (0, c.getPublicParam)(i);
            (0, u.QueryHotHOPTypeResouces)(s).then(function(i) {
                if (e.isRefresh && (a.refreshStat++, a.refreshCall()), 2e5 == i.code) {
                    a.is_skeleton2 = !0, (0, c.log)("查找热门素材之趣味配音/童声绘本成功：", i);
                    for (var s = i.data.list, n = 0, r = s.length; n < r; n++) s[n].duration = (0, c.formatTime)(parseInt(s[n].duration));
                    a.dub_list = [].concat(t(a.dub_list), t(s)), 0 != a.dub_list.length ? (a.is_dub_empty = !1, 
                    e.setLoadState(i.data.isLastPage)) : a.is_dub_empty = !0, a.isLastPage = i.data.isLastPage, 
                    a.$apply();
                } else (0, c.log)("查找热门素材之趣味配音/童声绘本失败：", err), (0, c.alertText)(i.message);
            }).catch(function(t) {
                e.isRefresh && e.isRefresh && (a.refreshStat++, a.refreshCall()), (0, c.log)(t);
            });
        }
    }, {
        key: "getGetMaterialDetail",
        value: function(e, t) {
            var a = this, i = {
                isMyResource: e,
                resourceId: t
            }, s = (0, c.getPublicParam)(i);
            (0, u.GetMaterialDetail)(s).then(function(e) {
                2e5 == e.code ? ((0, c.log)("素材详情获取成功：123", e), "ENABLE" == e.data.status ? (a.$parent.$parent.globalData.isCollect = e.data.isCollect, 
                a.$parent.$parent.globalData.textAlign = e.data.textAlign, (0, c.skip)("/pages/recording/recording"), 
                a.$apply()) : (0, c.alert)("该素材已被停用，请选择其他素材。", "none", "", 3e3), a.$apply()) : ((0, 
                c.log)("素材详情获取失败：", e), (0, c.log)(e.message));
            }).catch(function(e) {
                (0, c.alert)("获取数据异常"), (0, c.log)(e);
            });
        }
    }, {
        key: "loadGetResourceList",
        value: function() {
            var e = this, a = this, i = "";
            i = 1 == a.labelSetupType ? "wz" : 3 == a.labelSetupType ? "sp" : "hb";
            var s = {
                appId: wx.getStorageSync("sessionId"),
                pageNum: a.materialPageNum,
                pageSize: 10,
                resCategory: i
            }, n = (0, c.getPublicParam)(s);
            a.isMaterialLoging = !0, (0, u.GetResourceList)(n).then(function(i) {
                if (2e5 == i.code) {
                    if ((0, c.log)("GetResourceList素材列表成功", i), 1 == e.labelSetupType) {
                        a.isMaterialLoging = !1;
                        for (var s = i.data.list, n = 0, r = s.length; n < r; n++) s[n].readingCount = (0, 
                        c.transferNumber)(s[n].readingCount, 1);
                        s.length < 10 && (a.isMaterialShow = !0), a.material_list = a.material_list.concat(s), 
                        a.materialPageNum += 1, i.data.isLastPage && e.material_list.length && e.setLoadState(i.data.isLastPage);
                    } else if (2 == e.dubTab_index) {
                        for (var o = i.data.list, l = 0, u = o.length; l < u; l++) o[l].duration = (0, c.formatTime)(parseInt(o[l].duration));
                        a.dub_list = [].concat(t(a.dub_list), t(o)), 0 != a.dub_list.length ? (a.is_dub_empty = !1, 
                        e.setLoadState(i.data.isLastPage)) : a.is_dub_empty = !0, a.isLastPage = i.data.isLastPage, 
                        a.$apply();
                    }
                    a.$apply();
                } else (0, c.log)("GetResourceList素材列表失败", err);
            }).catch(function(e) {
                (0, c.alert)("请求获取数据异常", "", "./../../../common/images/warning.png"), (0, c.log)(e);
            });
        }
    }, {
        key: "loadResourceTypes",
        value: function() {
            var e = this, t = this, a = {}, i = (0, c.getPublicParam)(a);
            (0, u.ResourceTypes)(i).then(function(a) {
                if (e.isRefresh && (t.refreshStat++, t.refreshCall()), 2e5 == a.code) {
                    t.is_skeleton1 = !0, (0, c.log)("ResourceTypes素材分类获取成功：", a), t.isFirstLoading = !1, 
                    t.categList = a.data;
                    var i = a.data.length;
                    t.pageCount = Math.ceil(i / 8);
                    for (var s = 0; s < t.pageCount; s++) t.dataList[s] = t.categList.slice(8 * s, 8 * (s + 1));
                    t.$apply();
                } else (0, c.log)("ResourceTypes素材分类获取失败：", err), (0, c.alertText)(a.message);
            }).catch(function(a) {
                e.isRefresh && (t.refreshStat++, t.refreshCall()), (0, c.log)(a);
            });
        }
    }, {
        key: "loadHotMaterial",
        value: function() {
            var e = this, t = this, a = {
                pageNum: t.pageIndex,
                pageSize: 10
            }, i = (0, c.getPublicParam)(a);
            (0, u.HotMaterial)(i).then(function(a) {
                if (e.isRefresh && (t.refreshStat++, t.refreshCall()), 2e5 == a.code) {
                    t.is_skeleton2 = !0, (0, c.log)("HotMaterial热门素材获取成功：", a), t.materialList = t.materialList.concat(a.data.list);
                    var i = a.data.list.length;
                    t.checkStatus(i), a.data.isLastPage && !e.materialList.length && e.setLoadState(a.data.isLastPage), 
                    t.$apply();
                } else (0, c.log)("HotMaterial热门素材获取失败：", err), (0, c.alertText)(a.message);
            }).catch(function(a) {
                e.isRefresh && (t.refreshStat++, t.refreshCall()), (0, c.log)(a);
            });
        }
    }, {
        key: "loadMyMaterial",
        value: function() {
            var e = this, t = this, a = {
                pageNum: t.pageIndex,
                pageSize: 10
            }, i = (0, c.getPublicParam)(a);
            (0, u.MyMaterial)(i).then(function(a) {
                if (2e5 == a.code) {
                    (0, c.log)("MyMaterial我的素材获取成功：", a), t.materialList = t.materialList.concat(a.data.list);
                    var i = a.data.list.length;
                    t.checkStatus(i), a.data.isLastPage && !e.materialList.length && e.setLoadState(a.data.isLastPage), 
                    t.$apply();
                } else (0, c.log)("MyMaterial我的素材获取失败：", a), (0, c.alertText)(a.message);
            }).catch(function(e) {
                (0, c.log)(e);
            });
        }
    }, {
        key: "loadIndexResLabelSetup",
        value: function() {
            var e = this, t = (0, c.getPublicParam)({});
            (0, u.GetResLabelSetup)(t).then(function(t) {
                if ((0, c.log)("indexResLabelSetup获取资源展示内容设置:", t), 2e5 == t.code) {
                    var a = t.data || [];
                    e.newTab_list = a, e.labelSetupType = a[0] && a[0].type;
                } else e.labelSetupType = 1, (0, c.alertText)("获取设置失败，已使用默认");
                e.$apply(), e.init();
            }).catch(function(t) {
                (0, c.log)(t), e.labelSetupType = 1, e.init();
            });
        }
    }, {
        key: "getData",
        value: function() {
            switch (this.activeIndex) {
              case 0:
                this.loadHotMaterial();
                break;

              case 1:
                this.loadMyMaterial();
            }
        }
    }, {
        key: "setLoadState",
        value: function(e) {
            e && this.$invoke("load", "setState", "nomore");
        }
    }, {
        key: "checkStatus",
        value: function(e) {
            1 == this.pageIndex ? (e < 10 ? (this.isShowMore = !0, this.isCanRequest = !1) : this.isShowMore = !1, 
            e || (this.isShowMore = !1)) : e ? this.isShowMore = !1 : (this.isShowMore = !0, 
            this.isCanRequest = !1);
        }
    }, {
        key: "reset",
        value: function() {
            this.materialList = [], this.pageIndex = 1, this.isCanRequest = !0, this.isShowMore = !1;
        }
    }, {
        key: "init",
        value: function() {
            var e = wx.getStorageSync("agencyZoneData");
            e && e.is_order ? this.is_order = !0 : this.is_order = !1, 1 == this.labelSetupType ? (this.loadResourceTypes(), 
            this.activeIndex = 0, this.reset(), this.getData()) : (this.dubTab_index = 1, this.pageIndex = 1, 
            this.dub_list = [], this.HbOrPyModule_list = [], this.isLastPage = !1, this.getIndexHbOrPyModule(), 
            this.getHotHOPTypeResouces());
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            "add" == this.$parent.$parent.globalData.addStatus && (this.reset(), this.getData(), 
            this.$parent.$parent.globalData.addStatus = 0);
        }
    }, {
        key: "onReady",
        value: function() {}
    }, {
        key: "onShareAppMessage",
        value: function() {
            var e = l.imgBaseUrl + "share.png";
            return (0, c.shareApp)("", "", e);
        }
    } ]), n;
}();

exports.default = p;