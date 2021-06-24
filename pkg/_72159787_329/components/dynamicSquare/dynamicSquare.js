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
    return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e;
}

function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
}(), s = t(require("./../../npm/wepy/lib/wepy.js")), c = require("./../../api/index.js"), l = require("./../../common/js/util.js"), r = t(require("./../navBar/navBar.js")), u = t(require("./../load/load.js")), d = function(t) {
    function n() {
        var t, a, o, s;
        e(this, n);
        for (var d = arguments.length, h = Array(d), p = 0; p < d; p++) h[p] = arguments[p];
        return a = o = i(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(h))), 
        o.props = {
            navigationBarHeight: {
                type: Number,
                value: 0,
                twoWay: !0
            },
            model: {
                type: String,
                value: ""
            },
            sources: {
                type: String,
                value: ""
            }
        }, o.components = {
            navBar: r.default,
            load: u.default
        }, o.data = {
            tabs: [ "最新", "关注", "热门" ],
            currentIndex: 0,
            isShowDelMask: !1,
            isFullScreen: !1,
            dynamicData: [],
            pageNum: 1,
            isCanRequest: !0,
            currentAvatarUrl: "https://reading.oss.iyougu.com/uploads/mpFront/grain_mall/avatar.jpg",
            audioCtx: "",
            playIndex: -1,
            keyboardHeight: 0,
            commentTxt: "",
            wordsNum: 0,
            isShowComment: !1,
            isShowMore: !1,
            isShowInform: !1,
            radioData: [ {
                name: "违法犯罪",
                value: "1",
                checked: "true"
            }, {
                name: "低俗色情",
                value: "2"
            }, {
                name: "广告",
                value: "3"
            }, {
                name: "内容不符",
                value: "4"
            }, {
                name: "质量差",
                value: "5"
            }, {
                name: "其他",
                value: "6"
            } ],
            tipId: "",
            informContent: "",
            isOwn: "",
            tempOpusName: "",
            tempUId: "",
            tempOpusId: "",
            tempDynamicId: "",
            tempReplyId: "",
            musicUrl: "",
            opusType: "",
            imageUrl: "",
            videoContext: "",
            currentDynamicIndex: -1,
            currentCommentIndex: -1,
            isDubbing: !1,
            isLogin: !1,
            usnickName: "未登录",
            OrgaData: null,
            Shipei: !1,
            is_selectBtn: !1,
            isVideoIndex: -1,
            videoCtv: "",
            is_navbar: !0,
            scroll_top: 0,
            is_empty: !1,
            myData: [],
            isRefresh: !1,
            loading: !0,
            isCanPullDown: !1,
            tab_fixed_h: 0,
            isFixed: !1,
            banner_wrapper_h: 0
        }, o.watch = {
            isFullScreen: function(t, e) {
                t ? (this.$invoke("navBar", "setBackgroundColor", {
                    custom: 1,
                    color: "#fff",
                    bgColor: "#7f7f7f"
                }), this.$emit("setMainTabBar", "hidden")) : (this.$invoke("navBar", "setBackgroundColor", {
                    custom: 1,
                    imgs: "https://reading.oss.iyougu.com/ldtmp/icon/banner_4.png"
                }), this.$emit("setMainTabBar", "show"));
            }
        }, o.events = {
            hide: function(t) {
                this.audioCtx && this.audioCtx.pause(), this.playIndex = -1, this.videoCtv && this.videoCtv.stop(), 
                t && (this.isShowComment = !1), this.$apply();
            },
            pageUpdate: function(t) {
                var e = this;
                wx.getBackgroundAudioManager().stop(), wx.getStorageSync("sessionId") && wx.getStorageSync("phoneNumber") && this.loadMyMsgData(), 
                this.OrgaData = wx.getStorageSync("agencyZoneData"), this.is_selectBtn = !1, this.audioCtx = wx.createInnerAudioContext(), 
                this.audioCtx && this.audioCtx.pause(), this.videoCtv && this.videoCtv.stop(), wx.getSystemInfo({
                    success: function(t) {
                        var i = t.windowWidth / 750;
                        e.banner_wrapper_h = 452 * i, e.tab_fixed_h = 88 * i, e.$apply();
                    }
                }), "load" == t ? (setTimeout(function() {
                    e.reset(), e.getData(), (0, l.getSystemInfo)().then(function(t) {
                        console.log(t), -1 != t.model.indexOf("iPhone X") && (e.Shipei = !0, e.$apply());
                    });
                }, 500), this.isLogin = wx.getStorageSync("phoneNumber")) : "show" == t && (console.log("重新进入页面 销毁实例++++++++++++++++++++++++++++++++"), 
                this.videoCtv && this.videoCtv.stop(), this.isLogin !== wx.getStorageSync("phoneNumber") ? (setTimeout(function() {
                    e.reset(), e.getData(), e.$apply();
                }, 500), this.isLogin = wx.getStorageSync("phoneNumber")) : (this.reset(), this.getData())), 
                this.$apply();
            }
        }, o.methods = {
            refresherrefresh: function() {
                this.reset(), this.getData(), this.isRefresh = !0;
            },
            toggleOnce: function() {
                var t = this;
                setTimeout(function() {
                    t.is_selectBtn = !0, t.$apply(), setTimeout(function() {
                        t.is_selectBtn = !1, t.$apply();
                    }, 1500);
                }, 1e3);
            },
            NoShowComment: function() {
                console.log("+++++++++++++++++++++++++++++++++++++++++++"), this.isShowComment = !1, 
                this.$apply();
            },
            catchtapNoVideo: function() {},
            fullscreenchange: function(t) {
                t.detail.fullScreen ? (this.is_navbar = !1, this.$emit("is_Navbar", !1), this.$apply(), 
                console.log("进去全屏+++++++++++++++++++++++++++++", this.scroll_top)) : (this.is_navbar = !0, 
                this.$emit("is_Navbar", !0), this.$apply(), console.log("退出全屏+++++++++++++++++++++++++++++", this.scroll_top));
            },
            tapSelect_btn: function() {
                this.is_selectBtn = !this.is_selectBtn;
            },
            tabChange: function(t) {
                var e = this;
                t != this.currentIndex && (this.loading = !0, 1 === t ? (0, l.checkLogin)(function() {
                    e.currentIndex = t, e.reset(), wx.nextTick(function() {
                        e.getData();
                    });
                }) : (this.currentIndex = t, this.reset(), wx.nextTick(function() {
                    e.getData();
                })));
            },
            scrolling: function(t) {
                if (this.banner_wrapper_h - this.tab_fixed_h - parseInt(this.navigationBarHeight.replace("px", "")) <= t.detail.scrollTop) {
                    if (this.isFixed) return !1;
                    this.isFixed = !0, this.$apply();
                } else {
                    if (!this.isFixed) return !1;
                    this.isFixed = !1, this.$apply();
                }
            },
            scroll: function() {
                this.isCanRequest && (this.pageNum++, this.$invoke("load", "setState", "loading"), 
                this.getData());
            },
            showDelete: function(t, e) {
                this.currentDynamicIndex = e, this.tempDynamicId = t, this.isShowDelMask = !0, -1 != this.playIndex && (this.audioCtx && this.audioCtx.pause(), 
                this.playIndex = -1), this.videoCtv && this.videoCtv.stop(), this.videoCtv = "", 
                this.dynamicData[e].isShowVideo = !1, this.$apply();
            },
            cancel: function() {
                this.isShowDelMask = !1;
            },
            bindplay: function() {
                this.isDubbing && this.audioCtx.play();
            },
            bindpause: function() {
                this.isDubbing && this.audioCtx.pause();
            },
            videoEnded: function() {
                this.isDubbing && this.audioCtx.stop();
            },
            close: function() {
                this.isFullScreen = !1, this.videoContext.stop(), this.isDubbing && this.audioCtx && this.audioCtx.pause(), 
                this.isDubbing = !1;
            },
            showMore: function(t, e, i, a, n, o) {
                this.tempOpusId = t, this.tempDynamicId = e, this.tempReplyId = i, this.isOwn = a, 
                this.currentDynamicIndex = n, this.currentCommentIndex = o, this.isShowMore = !0, 
                this.$emit("is_Navbar", !1);
            },
            off: function() {
                this.isShowMore = !1, this.$emit("is_Navbar", !0);
            },
            action: function() {
                var t = this;
                this.isOwn ? this.delComment() : (0, l.checkLogin)(function() {
                    t.isShowInform = !0;
                });
            },
            closeInform: function() {
                this.isShowInform = !1, this.informContent = "";
            },
            radioChange: function(t) {
                this.tipId = t.detail.value;
                for (var e = 0, i = this.radioData.length; e < i; ++e) this.radioData[e].checked = this.radioData[e].value === t.detail.value;
                (0, l.log)("举报类型:", this.tipId);
            },
            handleContent: function(t) {
                this.informContent = t.detail.value, (0, l.log)("举报描述:", this.informContent);
            },
            sureInform: function() {
                var t = this, e = {
                    description: this.informContent,
                    tipId: this.tipId || 1,
                    opusId: this.tempOpusId,
                    dynamicId: this.tempDynamicId,
                    replyId: this.tempReplyId
                }, i = (0, l.getPublicParam)(e);
                (0, c.ReportOpus)(i).then(function(e) {
                    2e5 == e.code ? ((0, l.alertText)("提交成功~"), t.isShowInform = !1, t.informContent = "", 
                    t.$apply()) : (0, l.alertText)(e.message);
                }).catch(function(t) {
                    (0, l.log)("举报作品异常:", t);
                });
            },
            showAllComment: function(t) {
                this.dynamicData[t].isShowAllComment = !this.dynamicData[t].isShowAllComment;
            },
            goActivity: function(t, e, i) {
                1 === i ? (0, l.skip)("/packageSquare/pages/activityDetail/activityDetail?activityId=" + t + "&activityName=" + e) : 4 === i ? (0, 
                l.skip)("/packageActivity/pages/activity/activity?activityId=" + t + "&activeIndex=3") : 5 === i ? (0, 
                l.skip)("/packageSquare/pages/smallStage/smallStage?activityId=" + t) : 6 === i ? (0, 
                l.skip)("/packageActivity/pages/studydayHome/studydayHome") : 7 === i ? (0, l.skip)("/packageActivity/pages/TaiyuanActivityHome/TaiyuanActivityHome") : (0, 
                l.skip)("/packageSquare/pages/subpage/subpage?activityId=" + t + "&templateType=" + i);
            },
            go: function(t) {
                var e = this;
                (0, l.checkLogin)(function() {
                    switch (t) {
                      case "news":
                        (0, l.skip)("/packageIndex/pages/news/news?total_list=[" + e.myData.replyCount + "," + e.myData.dzCount + "," + e.myData.awardCount + "," + e.myData.noticCount + "]&unreadList=[0," + e.myData.unDzCount + "," + e.myData.unReadAwardCount + "," + e.myData.unReadFeedBackCount + "]"), 
                        e.is_selectBtn = !1;
                        break;

                      case "publishList":
                        (0, l.skip)("/packagePlaza/pages/publishList/publishList"), e.is_selectBtn = !1;
                        break;

                      case "myContent":
                        (0, l.skip)("/packagePlaza/pages/myContent/myContent"), e.is_selectBtn = !1;
                    }
                }, function() {
                    (0, l.skip)("/pages/login/login"), e.is_selectBtn = !1;
                });
            },
            goto: function(t) {
                (0, l.skip)("/packagePlaza/pages/myContent/myContent?uid=" + t);
            },
            skipOpusDetail: function(t, e) {
                (0, l.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t + "&activityId=" + e);
            },
            play: function(t, e, i, a, n) {
                if (this.audioCtx && (this.audioCtx.pause(), this.audioCtx.offCanplay(this.medieHideLoading)), 
                -1 != this.isVideoIndex && (this.dynamicData[this.isVideoIndex].isShowVideo = !1, 
                this.$apply()), "mp4-x" != i && "mp4-y" != i || n) if (n) {
                    console.log("点击了播放-----------配音作品+++++++++++++++++++++++++++"), this.videoCtv = wx.createVideoContext("myVideo"), 
                    this.dynamicData[t].isShowVideo = !0, this.musicUrl = n, this.isVideoIndex = t, 
                    this.playIndex = -1, this.isDubbing = !0, this.audioCtx.src = e, this.audioCtx.play(), 
                    this.$apply();
                    var o = this;
                    this.audioCtx.onEnded(function() {
                        o.videoCtv && o.videoCtv.stop(), o.playIndex = -1, o.$apply();
                    });
                } else {
                    if (console.log("点击了播放-----------音频作品+++++++++++++++++++++++++++"), this.playIndex == t) return void (this.playIndex = -1);
                    this.mediaLoading(), this.audioCtx.onCanplay(this.medieHideLoading), this.audioCtx.onPlay(this.medieHideLoading), 
                    this.playIndex = t, this.audioCtx.src = e, this.audioCtx.play();
                    var s = this;
                    this.audioCtx.onEnded(function() {
                        s.playIndex = -1, s.$apply();
                    });
                } else console.log("点击了播放------------视屏作品+++++++++++++++++++++++++++"), this.playIndex = -1, 
                this.dynamicData[t].isShowVideo = !0, this.musicUrl = e, this.isVideoIndex = t, 
                this.isDubbing = !1, this.$apply();
            },
            like: function(t) {
                var e = this;
                (0, l.checkLogin)(function() {
                    if (e.dynamicData[t].likeStatus) (0, l.alertText)("您已赞过~"); else {
                        var i = (0, l.getPublicParam)({
                            actionType: 3,
                            activityId: e.dynamicData[t].activityId || 0,
                            dynamicId: e.dynamicData[t].dynamicId,
                            opusId: e.dynamicData[t].opusId
                        });
                        (0, c.OpusAction)(i).then(function(i) {
                            2e5 == i.code ? ((0, l.log)("OpusAction操作成功:", i), (0, l.alertText)("点赞成功~"), e.dynamicData[t].likeCount++, 
                            e.dynamicData[t].likeStatus = 1, e.$apply()) : ((0, l.log)("DoAttention请求失败：", i), 
                            (0, l.alertText)(i.message));
                        }).catch(function(t) {
                            (0, l.log)("操作异常:", t);
                        });
                    }
                });
            },
            showComment: function(t, e, i, a) {
                var n = this;
                (0, l.checkLogin)(function() {
                    n.tempOpusName = t, n.tempUId = e, n.tempOpusId = i, n.isShowComment = !0, n.currentDynamicIndex = a;
                });
            },
            bindfocus: function(t) {
                this.keyboardHeight = t.detail.height + "px", this.$apply();
            },
            bindblur: function() {
                this.isShowComment = !1, this.keyboardHeight = 0;
            },
            bindinput: function(t) {
                this.commentTxt = t.detail.value, this.wordsNum = parseInt(t.detail.value.length), 
                this.$apply();
            },
            comment: function() {
                var t = this;
                if (!/\S+/g.test(this.commentTxt)) return (0, l.alertText)("请填写评论内容~"), !1;
                var e = (0, l.getPublicParam)({
                    opusName: this.tempOpusName,
                    opusUId: this.tempUId,
                    opusId: this.tempOpusId,
                    replyContent: this.commentTxt
                });
                (0, c.GetReplySave)(e).then(function(e) {
                    if (t.commentTxt = "", t.wordsNum = 0, 2e5 == e.code) {
                        (0, l.alertText)("评论成功~"), t.dynamicData[t.currentDynamicIndex].replyCount++;
                        var i = (0, l.getPublicParam)({
                            replyId: e.data
                        });
                        (0, c.GetReplyDetails)(i).then(function(e) {
                            2e5 == e.code ? (t.dynamicData[t.currentDynamicIndex].replyDtoList.unshift(e.data), 
                            t.$apply()) : (0, l.alertText)(e.message);
                        });
                    } else 80006 == e.code ? (0, l.alertText)("你对该动态的评论已达上限，去给其他动态评论吧~") : (0, l.alertText)(e.message);
                }).catch(function(e) {
                    t.commentTxt = "", t.wordsNum = 0, (0, l.log)(e);
                });
            },
            deleteDynamic: function() {
                var t = this, e = {
                    opusDynamicId: this.tempDynamicId
                }, i = (0, l.getPublicParam)(e);
                (0, c.DeleteDynamic)(i).then(function(e) {
                    2e5 == e.code ? ((0, l.alertText)("删除成功~"), t.dynamicData.splice(t.currentDynamicIndex, 1), 
                    t.isShowDelMask = !1, t.$apply()) : ((0, l.log)("deleteDynamic请求失败：", e), (0, l.alertText)(e.message));
                }).catch(function(t) {
                    (0, l.log)(t);
                });
            },
            attention: function(t) {
                var e = this;
                this.dynamicData[t].isFollowerWxUser || (0, l.checkLogin)(function() {
                    if (!e.dynamicData[t].isFollowerWxUser) {
                        var i = {
                            action: e.dynamicData[t].isFollowerWxUser ? "cancel" : "follower",
                            beOpusId: "",
                            uid: e.dynamicData[t].uid
                        }, a = (0, l.getPublicParam)(i);
                        (0, c.DoAttention)(a).then(function(i) {
                            2e5 == i.code ? e.dynamicData[t].isFollowerWxUser || ((0, l.alertText)("关注不走丢~"), 
                            e.dynamicData[t].isFollowerWxUser = 1, e.$apply()) : ((0, l.log)("DoAttention请求失败：", i), 
                            (0, l.alertText)(i.message));
                        }).catch(function(t) {
                            (0, l.log)(t);
                        });
                    }
                });
            }
        }, s = a, i(o, s);
    }
    return a(n, s.default.component), o(n, [ {
        key: "delComment",
        value: function() {
            var t = this, e = (0, l.getPublicParam)({
                replyId: this.tempReplyId
            });
            (0, c.GetReplyDel)(e).then(function(e) {
                2e5 == e.code ? ((0, l.alertText)("删除成功"), t.dynamicData[t.currentDynamicIndex].replyDtoList.splice(t.currentCommentIndex, 1), 
                t.dynamicData[t.currentDynamicIndex].replyCount--, t.$apply()) : (0, l.alertText)(e.message);
            }).catch(function(t) {
                (0, l.log)(t);
            });
        }
    }, {
        key: "loadNewestDynamic",
        value: function() {
            var t = this, e = {
                pageNum: this.pageNum,
                pageSize: 5
            }, i = (0, l.getPublicParam)(e);
            (0, c.GetNewestDynamic)(i).then(function(e) {
                if (t.$invoke("load", "setState", null), 2e5 == e.code) {
                    (0, l.log)("GetNewestDynamic最新动态成功：", e);
                    for (var i = e.data.list, a = 0; a < i.length; a++) i[a].isShowVideo = !1;
                    t.dynamicData = t.dynamicData.concat(i), t.isCanRequest = !e.data.isLastPage, 0 == t.dynamicData.length ? t.is_empty = !0 : (t.is_empty = !1, 
                    e.data.isLastPage && t.$invoke("load", "setState", "nomore")), t.isRefresh = !1, 
                    t.loading = !1, t.isCanPullDown = !0, t.$apply();
                } else (0, l.log)("GetNewestDynamic最新动态失败：", e), (0, l.alertText)(e.message);
            }).catch(function(t) {
                (0, l.log)("最新动态异常:", t);
            });
        }
    }, {
        key: "loadAttentionDynamic",
        value: function() {
            var t = this, e = {
                pageNum: this.pageNum,
                pageSize: 5
            }, i = (0, l.getPublicParam)(e);
            (0, c.GetAttentionDynamic)(i).then(function(e) {
                if (t.$invoke("load", "setState", null), 2e5 == e.code) {
                    (0, l.log)("GetAttentionDynamic关注动态成功：", e);
                    for (var i = e.data.list, a = 0; a < i.length; a++) i[a].isShowVideo = !1;
                    t.dynamicData = t.dynamicData.concat(i), t.isCanRequest = !e.data.isLastPage, 0 == t.dynamicData.length ? t.is_empty = !0 : (t.is_empty = !1, 
                    e.data.isLastPage && t.$invoke("load", "setState", "nomore")), t.isRefresh = !1, 
                    t.loading = !1, t.$apply();
                } else (0, l.log)("GetAttentionDynamic关注动态失败：", e), (0, l.alertText)(e.message);
            }).catch(function(t) {
                (0, l.log)("关注动态异常:", t);
            });
        }
    }, {
        key: "loadHotDynamic",
        value: function() {
            var t = this, e = {
                pageNum: this.pageNum,
                pageSize: 5
            }, i = (0, l.getPublicParam)(e);
            (0, c.GetHotDynamic)(i).then(function(e) {
                if (t.$invoke("load", "setState", null), 2e5 == e.code) {
                    (0, l.log)("GetHotDynamic热门动态成功：", e);
                    for (var i = e.data.list, a = 0; a < i.length; a++) i[a].isShowVideo = !1;
                    t.dynamicData = t.dynamicData.concat(i), t.isCanRequest = !e.data.isLastPage, 0 == t.dynamicData.length ? t.is_empty = !0 : (t.is_empty = !1, 
                    e.data.isLastPage && t.$invoke("load", "setState", "nomore")), t.isRefresh = !1, 
                    t.loading = !1, t.$apply();
                } else (0, l.log)("GetHotDynamic热门动态失败：", e), (0, l.alertText)(e.message);
            }).catch(function(t) {
                (0, l.log)("热门动态异常:", t);
            });
        }
    }, {
        key: "getData",
        value: function() {
            switch (this.currentIndex) {
              case 0:
                this.loadNewestDynamic();
                break;

              case 1:
                this.loadAttentionDynamic();
                break;

              case 2:
                this.loadHotDynamic();
            }
        }
    }, {
        key: "reset",
        value: function() {
            this.dynamicData = [], this.pageNum = 1, this.isCanRequest = !0, this.audioCtx && this.audioCtx.pause(), 
            this.playIndex = -1, this.is_empty = !1, this.isVideoIndex = -1, this.isFixed = !1;
        }
    }, {
        key: "loadMyMsgData",
        value: function() {
            var t = this;
            (0, c.GetMyMsgData)((0, l.getPublicParam)({})).then(function(e) {
                2e5 == e.code ? (t.myData = e.data, t.currentAvatarUrl = e.data.avatarUrl, t.$apply()) : (0, 
                l.alertText)(e.message);
            }).catch(function(t) {
                (0, l.log)(t);
            });
        }
    }, {
        key: "setKeyboardHeight",
        value: function() {
            "page" == this.sources || (this.keyboardHeight = this.model ? "148rpx" : "128rpx");
        }
    }, {
        key: "mediaLoading",
        value: function() {
            (0, l.showLoading)("音频正在缓冲...");
        }
    }, {
        key: "medieHideLoading",
        value: function() {
            (0, l.hideLoading)(), this.audioCtx && this.audioCtx.offWaiting();
        }
    } ]), n;
}();

exports.default = d;