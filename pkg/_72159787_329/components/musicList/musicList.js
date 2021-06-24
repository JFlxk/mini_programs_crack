function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
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
}(), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), l = require("./../../common/js/util.js"), c = require("./../../api/index.js"), r = function(s) {
    function r() {
        var t, a, s, o;
        e(this, r);
        for (var c = arguments.length, u = Array(c), d = 0; d < c; d++) u[d] = arguments[d];
        return a = s = i(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [ this ].concat(u))), 
        s.props = {
            isShowProp: {
                type: Boolean,
                default: !1
            }
        }, s.data = {
            currentTab: 1,
            musicList: [],
            pageIndex: 1,
            hasNextPage: !1,
            isLastPage: !1,
            play_isShow: -1,
            audioCtx: "",
            progressPercent: 0,
            selectIndex: -1,
            totalCollect: null,
            id: "",
            tabs: [],
            dots_list: [],
            swiperCurrent: 0,
            is_show_musicList: !1,
            playIndex: -1
        }, s.methods = {
            onSwitchTab: function(t) {
                this.currentTab = t, this.pageIndex = 1, this.musicList = [], this.tabs = [], this.stopMusic(), 
                1 == t ? this.loadGetCollectList() : 2 == t ? this.loadBgMusicType() : this.loadGetOrgaList();
            },
            onConctrolBgmProp: function() {
                this.$emit("onConctrolBgmProp"), this.stopMusic();
            },
            onGoChooseBgm: function() {
                this.currentTab = 2, this.loadBgMusicType();
            },
            loadMore: function() {
                console.log(this.currentTab), this.hasNextPage && !this.isLastPage && (console.log(this.currentTab), 
                this.pageIndex++, 1 == this.currentTab ? this.loadGetCollectList() : 2 == this.currentTab ? this.loadBgMusicType() : 3 == this.currentTab && this.loadGetQueryByOrgaId());
            },
            collect_tap: function(t) {
                var e = this;
                (0, l.checkLogin)(function() {
                    0 == t.isCollect ? e.loadAddCollect(t) : e.loadCancelCollect(t);
                });
            },
            play: function(t, e, i) {
                var a = this;
                n.default.$instance.globalData.musicName = i.musicName, n.default.$instance.globalData.musicUrl = i.musicUrl, 
                n.default.$instance.globalData.musicId = i.id, n.default.$instance.globalData.musicDuration = i.duration, 
                n.default.$instance.globalData.longMusicUrl = i.longMusicUrl, this.audioCtx && this.audioCtx.pause(), 
                this.$apply(), e == this.playIndex ? this.audioCtx && this.audioCtx.paused ? setTimeout(function() {
                    a.audioCtx.play(), a.playIndex = e, a.$apply();
                }, 500) : (this.audioCtx.pause(), this.playIndex = -1, this.$apply()) : (this.audioCtx.src = t, 
                this.$apply(), setTimeout(function() {
                    a.playIndex = e, a.audioCtx.play(), a.$apply();
                }, 500));
            },
            onChooseMusic: function(t, e) {
                console.log(e), this.selectIndex = t, this.musicList[t].isChoose = !0, -1 != this.selectIndex && this.musicList[t].isChoose && (n.default.$instance.globalData.musicName = e.musicName, 
                n.default.$instance.globalData.musicUrl = e.musicUrl, n.default.$instance.globalData.musicId = e.id, 
                n.default.$instance.globalData.musicDuration = e.duration, n.default.$instance.globalData.longMusicUrl = e.longMusicUrl, 
                this.$emit("onChooseMusicItem", e), this.musicList[t].play_isShow = !1, this.audioCtx.pause()), 
                this.$apply();
            },
            tabChange: function(t) {
                this.id = t.id, this.musicList = [], this.pageIndex = 1, this.audioCtx && this.audioCtx.stop(), 
                this.playIndex = -1, 2 == this.currentTab ? (this.typeName = t.typeName, this.loadBgMusicList()) : (this.typeName = t.orgaName, 
                this.loadGetQueryByOrgaId());
            },
            swiperChange: function(t) {
                this.swiperCurrent = t.detail.current;
            }
        }, o = a, i(s, o);
    }
    return a(r, n.default.component), o(r, [ {
        key: "stopMusic",
        value: function() {
            this.audioCtx && this.audioCtx.stop(), this.playIndex = -1;
        }
    }, {
        key: "onLoad",
        value: function() {
            var t = this;
            this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.onPlay(function() {
                t.$apply();
            }), this.audioCtx.onTimeUpdate(function(e) {
                t.audioCtx.duration;
                t.progressPercent = 100 * (parseInt(t.audioCtx.currentTime) / parseInt(t.audioCtx.duration)).toFixed(3), 
                t.$apply();
            }), this.audioCtx.onStop(function() {
                t.progressPercent = 0, t.$apply();
            }), this.audioCtx.onEnded(function() {
                t.progressPercent = 0, t.musicList[t.selectIndex].play_isShow = !1, t.getPlayStroage(), 
                t.$apply();
            }), this.audioCtx.onError(function(t) {
                console.log("播放出错", t);
            }), this.loadGetCollectList();
        }
    }, {
        key: "loadGetCollectList",
        value: function() {
            var e = this, i = this, a = {
                appId: wx.getStorageSync("sessionId"),
                pageNum: i.pageIndex,
                pageSize: 10
            }, s = (0, l.getPublicParam)(a);
            (0, c.GetCollectList)(s).then(function(a) {
                if (2e5 == a.code) {
                    var s;
                    (0, l.log)("GetCollectList获取收藏音乐列表成功: ", a), e.totalCollect = a.data.total, (s = i.musicList).push.apply(s, t(a.data.list)), 
                    console.log(i.musicList), e.hasNextPage = a.data.hasNextPage, e.isLastPage = a.data.isLastPage;
                    for (var o = 0, n = e.musicList.length; o < n; o++) e.musicList[o].play_isShow = !1, 
                    e.musicList[o].isChoose = !1, e.musicList[o].durationend = (0, l.formatTime)(parseInt(e.musicList[o].duration));
                    e.is_show_musicList = !e.musicList.length, e.$apply();
                } else (0, l.log)("GetCollectList获取收藏音乐列表： ", err);
            }).catch(function(t) {
                (0, l.alert)("请求获取数据异常", "", "./../../../common/images/warning.png"), (0, l.log)(t);
            });
        }
    }, {
        key: "loadBgMusicList",
        value: function() {
            var e = this, i = this, a = {
                id: i.id,
                pageNum: i.pageIndex,
                pageSize: 10
            }, s = (0, l.getPublicParam)(a);
            (0, c.BgMusicList)(s).then(function(a) {
                if (2e5 == a.code) {
                    var s;
                    (0, l.log)("BgMusicsList音乐列表成功", a);
                    a.data.list;
                    for (var o = 0, n = a.data.list.length; o < n; o++) a.data.list[o].durationend = (0, 
                    l.formatTime)(parseInt(a.data.list[o].duration));
                    e.hasNextPage = a.data.hasNextPage, e.isLastPage = a.data.isLastPage, (s = i.musicList).push.apply(s, t(a.data.list)), 
                    console.log(i.musicList), e.is_show_musicList = !e.musicList.length, i.$apply();
                } else (0, l.log)("BgMusicsList音乐列表失败", err);
            }).catch(function(t) {
                (0, l.alert)("请求获取数据异常", "", "./../../../common/images/warning.png"), (0, l.log)(t);
            });
        }
    }, {
        key: "loadBgMusicType",
        value: function() {
            var t = this, e = {
                pageNum: 1,
                pageSize: 10
            }, i = (0, l.getPublicParam)(e);
            (0, c.BgMusicType)(i).then(function(e) {
                if (2e5 == e.code) {
                    var i = e.data;
                    t.indicator_dots = !(i.length < 5), t.id = i[0].id, t.typeName = i[0].typeName;
                    var a = Math.ceil(i.length / 8);
                    t.dots_list = a;
                    for (var s = [], o = 0; o < a; o++) s.push(i.splice(0, 8));
                    (0, l.log)("BgMusicsType音乐分类成功：", s), t.tabs = s, (0, l.log)("that.tabs：", t.tabs), 
                    t.isCurrent = !0, t.$apply(), t.loadBgMusicList();
                } else (0, l.log)("BgMusicsType音乐分类失败：", e), (0, l.alert)("请求异常", "", "./../../../common/images/warning.png");
            }).catch(function(t) {
                (0, l.alert)("获取数据异常"), (0, l.log)(t);
            });
        }
    }, {
        key: "loadGetOrgaList",
        value: function() {
            var t = this, e = {}, i = (0, l.getPublicParam)(e);
            (0, c.GetOrgaList)(i).then(function(e) {
                if (2e5 == e.code) {
                    for (var i = e.data, a = 0, s = i.length; a < s; a++) i[a].durationend = (0, l.formatTime)(parseInt(i[a].duration));
                    t.id = i[0].id, t.typeName = i[0].orgaName;
                    var o = Math.ceil(i.length / 8);
                    t.dots_list = o;
                    for (var n = [], c = 0; c < o; c++) n.push(i.splice(0, 8));
                    (0, l.log)("GetOrgaList机构音乐分类成功：", n), t.tabs = n, (0, l.log)("that.tabs：", t.tabs), 
                    t.isCurrent = !0, t.bgMusicList = [], t.$apply(), t.loadGetQueryByOrgaId();
                } else (0, l.log)("GetOrgaList机构音乐分类失败：", e), (0, l.alert)("请求异常", "", "./../../../common/images/warning.png");
            }).catch(function(t) {
                (0, l.alert)("获取数据异常"), (0, l.log)(t);
            });
        }
    }, {
        key: "loadGetQueryByOrgaId",
        value: function() {
            var e = this, i = this, a = {
                id: i.id,
                pageNum: i.pageIndex,
                pageSize: 10
            }, s = (0, l.getPublicParam)(a);
            (0, c.GetQueryByOrgaId)(s).then(function(a) {
                if (2e5 == a.code) {
                    var s;
                    (0, l.log)("GetQueryByOrgaId机构分类获取背景音乐分页列表", a);
                    for (var o = a.data.list, n = 0, c = o.length; n < c; n++) o[n].durationend = (0, 
                    l.formatTime)(parseInt(o[n].duration));
                    console.log(o), e.hasNextPage = a.data.hasNextPage, e.isLastPage = a.data.isLastPage, 
                    (s = i.musicList).push.apply(s, t(a.data.list)), e.is_show_musicList = !e.musicList.length, 
                    0 == i.musicList.length ? i.is_show_bgMusicList = !0 : i.is_show_bgMusicList = !1, 
                    i.$apply();
                } else (0, l.log)("GetQueryByOrgaId音乐列表失败", err);
            }).catch(function(t) {
                (0, l.alert)("请求获取数据异常", "", "./../../../common/images/warning.png"), (0, l.log)(t);
            });
        }
    }, {
        key: "getPlayStroage",
        value: function() {
            var t = this;
            if (t.play_select_index == t.select_index && t.play_title_id == t.id) {
                for (var e = t.musicList, i = 0, a = e.length; i < a; i++) e[i].id == t.play_item_id && (t.playIndex > -1 && (this.audioCtx.paused ? t.musicList[i].play_isShow = !1 : t.musicList[i].play_isShow = !0), 
                t.selectIndex = i);
                t.$apply();
            } else t.selectIndex = -1, t.$apply();
        }
    }, {
        key: "loadAddCollect",
        value: function(t) {
            var e = this, i = {
                musicBgId: t.id
            }, a = (0, l.getPublicParam)(i);
            (0, c.AddCollect)(a).then(function(i) {
                if (2e5 == i.code) {
                    for (var a = e.musicList, s = 0, o = a.length; s < o; s++) a[s].id == t.id && (a[s].isCollect = 1, 
                    1 == e.select_index && (e.total += 1));
                    e.musicList = a, wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), e.$apply(), (0, l.log)("AddCollect收藏背景音乐成功: ", i);
                } else (0, l.log)("AddCollect收藏背景音乐失败: ", i), (0, l.alert)("请求异常", "", "./../../../common/images/warning.png");
            }).catch(function(t) {
                (0, l.alert)("获取数据异常"), (0, l.log)(t);
            });
        }
    }, {
        key: "loadCancelCollect",
        value: function(t) {
            var e = this, i = {
                musicBgId: t.id
            }, a = (0, l.getPublicParam)(i);
            (0, c.CancelCollect)(a).then(function(i) {
                if (2e5 == i.code) {
                    for (var a = e.musicList, s = 0, o = a.length; s < o; s++) a[s].id == t.id && (a[s].isCollect = 0, 
                    1 == e.currentTab && (e.totalCollect -= 1), 1 == e.currentTab && a[s].play_isShow ? (e.selectIndex = -1, 
                    e.playIndex = -1, a[s].play_isShow = !1, e.audioCtx.pause()) : s < e.play_item_index && (e.playIndex -= 1));
                    e.musicList = a, wx.showToast({
                        title: "取消收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), e.$apply(), (0, l.log)("CancelCollect取消收藏背景音乐成功: ", i);
                } else (0, l.log)("CancelCollect取消收藏背景音乐乐失败: ", i), (0, l.alert)("请求异常", "", "./../../../common/images/warning.png");
            }).catch(function(t) {
                (0, l.alert)("获取数据异常"), (0, l.log)(t);
            });
        }
    } ]), r;
}();

exports.default = r;