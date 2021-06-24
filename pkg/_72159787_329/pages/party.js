function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, i) {
    return a in t ? Object.defineProperty(t, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = i, t;
}

function i(t) {
    if (Array.isArray(t)) {
        for (var a = 0, i = Array(t.length); a < t.length; a++) i[a] = t[a];
        return i;
    }
    return Array.from(t);
}

function e(t, a) {
    if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function n(t, a) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" !== (void 0 === a ? "undefined" : s(a)) && "function" != typeof a ? t : a;
}

function o(t, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === a ? "undefined" : s(a)));
    t.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : t.__proto__ = a);
}

var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var r = function() {
    function t(t, a) {
        for (var i = 0; i < a.length; i++) {
            var e = a[i];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
            Object.defineProperty(t, e.key, e);
        }
    }
    return function(a, i, e) {
        return i && t(a.prototype, i), e && t(a, e), a;
    };
}(), u = t(require("./../npm/wepy/lib/wepy.js")), c = t(require("./../components/party/tab.js")), h = t(require("./../components/party/rule.js")), l = t(require("./../components/transcribeing/transcribeing.js")), d = t(require("./../components/partyPoster/partyPoster.js")), p = t(require("./../components/party/feeling.js")), g = t(require("./../components/load/load.js")), y = require("./../api/index-party.js"), f = (require("./../api/index.js"), 
require("./../common/js/util.js")), w = function(t) {
    function s() {
        var t, a, i, o;
        e(this, s);
        for (var r = arguments.length, u = Array(r), y = 0; y < r; y++) u[y] = arguments[y];
        return a = i = n(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(u))), 
        i.$repeat = {}, i.$props = {
            RankTab: {
                "xmlns:v-bind": "",
                "v-bind:tabs.sync": "rankTabs",
                "v-bind:tabIndex.sync": "rankTabIndex",
                "v-bind:shrinkPadding.sync": "shrinkRankPadding",
                emitEvent: "rankTabChange"
            },
            SwearTab: {
                "v-bind:tabs.once": "swearTabs",
                "v-bind:tabIndex.sync": "swearTabIndex",
                emitEvent: "swearTabChange"
            },
            Rule: {
                "v-bind:orgaId.sync": "orgaId"
            }
        }, i.$events = {}, i.components = {
            RankTab: c.default,
            SwearTab: c.default,
            Rule: h.default,
            transcribeing: l.default,
            poster: d.default,
            Feeling: p.default,
            load: g.default
        }, i.data = {
            navbarHeight: 64,
            mainImg: "https://reading.oss.iyougu.com/ldtmp/images/party100/mainImg.png?v=3",
            mainImg_orga: "https://reading.oss.iyougu.com/ldtmp/images/party100/mainImg_orga.png?v=2",
            mainImg_tab1: "https://reading.oss.iyougu.com/ldtmp/images/party100/mainImg_tab1.png",
            orgaId: null,
            whiteTabs: !1,
            tabs: [ "学习成果", "重温誓词", "学习四史", "诵读比赛" ],
            tabIndex: 0,
            activity: {
                isSign: null,
                orgaNum: "...",
                signNum: "...",
                unitIntroduction: "...",
                videoUrl: "...",
                viewNum: "..."
            },
            playIconShow: !0,
            playIconShow_down: !0,
            orgaSwiperList: [],
            rankTabs: [ "单位榜单", "个人榜单" ],
            rankTabIndex: 0,
            rankList_orga: [],
            rankList0: [],
            rankList1: [],
            myRank: {
                allRank: "...",
                avatarUrl: "...",
                nickName: "...",
                oathNum: "..."
            },
            mediaList: [],
            productTabs: [ "留声墙", "朗读亭", "小舞台" ],
            productTabIndex: 0,
            productList: [ "优谷留声墙具备生成和展示声音作品、多媒体内容、主题活动、文化大数据等功能，机构用户可以将本机构的特色文化以留声墙这种新颖、生动的方式展现出来，打造文化新亮点。", "朗读亭，它作为一个专业、隔音、独立、沉浸式的高品质发声空间，集朗读、发声训练、语言学习、智能语音测评、录制分享为一体，通过把文字作品转化为有声语言的训练和创作活动，让你能随时随地进行朗读练习和分享。", "优谷朗读小舞台是基于线下朗读活动使用场景研发的一款智能化活动支持工具，可作为师生展示平台，用于举办线下朗读活动，同时支持学校朗读教学成果展示，还能实现线上线下作品同步，是提升校园朗读文化的优选产品。" ],
            orgaOpus: null,
            orgaOpusPlaying: !1,
            swearTabs: [ "中国共产党", "中国少年先锋队", "中国共青团" ],
            swearTabIndex: 0,
            swearData: [],
            swearList: [],
            swearListState: null,
            swearListTotal: "...",
            noneSwear: !1,
            swearPlaying: !0,
            swearId: null,
            rule2Show: !1,
            isChantMasking: !0,
            activityList: [],
            shrinkRankPadding: !1,
            readActivityList: [],
            chantData: "",
            chantList: [],
            pageNum: 1,
            isRequest: !0,
            isPartyHistoryRule: !1,
            materiaList: [],
            historrankList: [],
            oneGethistorrankList: !0,
            newhistorrankList: [],
            perceptionList: [],
            statistics: {},
            myRankOwer: {},
            materiaExtData: {},
            HistoryTabIndex: 1,
            rankingListTab: "全国榜单",
            answerSheetRule: "",
            answerSheetId: "",
            isOathActivityEnd: ""
        }, i.customData = {
            orgaAudio: null,
            swearAudio: null,
            swearText: {
                1: "  我是中国少年先锋队队员。我在队旗下宣誓：我热爱中国共产党，热爱祖国，热爱人民，好好学习，好好锻炼，准备着：为共产主义事业贡献力量!",
                2: "  我志愿加入中国共产主义青年团，坚决拥护中国共产党的领导，遵守团的章程，执行团的决议，履行团员义务，严守团的纪律，勤奋学习，积极工作，吃苦在前，享受在后，为共产主义事业而奋斗。",
                3: "  我志愿加入中国共产党，拥护党的纲领，遵守党的章程，履行党员义务，执行党的决定，严守党的纪律，保守党的秘密，对党忠诚，积极工作，为共产主义奋斗终身，随时准备为党和人民牺牲一切，永不叛党。"
            },
            video_1: null,
            video_2: null,
            video0: null,
            video1: null,
            video2: null,
            swearIndex: null
        }, i.methods = {
            showFeeling: function(t) {
                this.$broadcast("showList", {
                    resourceId: t
                });
            },
            gotoHistoryRank: function() {
                (0, f.skip)("/packageParty/rank?srcType=HistorRank" + (this.orgaId ? "&orgaId=" + this.orgaId : "") + "&answerSheetId=" + this.answerSheetId);
            },
            tapHistoryTab: function(t) {
                this.HistoryTabIndex = t, this.$apply(), this.historRank(t), this.getRankOwer(t);
            },
            gotoMyAchievement: function() {
                (0, f.checkLogin)(function() {
                    (0, f.skip)("/packageParty/myAchievement");
                });
            },
            gotoHistoryAnswer: function() {
                var t = this;
                (0, f.checkLogin)(function() {
                    (0, f.skip)("/packageParty/historyAnswer?answerSheetId=" + t.answerSheetId);
                });
            },
            gotoPartyMaterialDetails: function(t) {
                (0, f.skip)("/packageParty/partyMaterialDetails?resourceId=" + t);
            },
            gotoPartyMaterial: function(t) {
                (0, f.skip)("/packageParty/partyMaterial?tabIndex=" + t);
            },
            tapPartyHistoryRule: function() {
                this.isPartyHistoryRule = !this.isPartyHistoryRule;
            },
            gotoActivity: function(t, a) {
                (0, f.skip)("/packageActivity/pages/activity/activity?activityId=" + t + "&isParty=" + (a ? "true" : ""));
            },
            scrolltolower: function() {
                3 == this.tabIndex && this.isRequest && this.getChantData();
            },
            tapChant: function() {
                wx.setStorageSync("isChantMasking", !0), this.isChantMasking = !1;
            },
            pageHide: function() {
                this.customData.swearAudio && this.customData.swearAudio.stop(), this.customData.orgaAudio && this.customData.orgaAudio.stop();
            },
            showCard: function(t) {
                this.stopAudioVideo(), this.$broadcast("show", {
                    is_transcribe: !1,
                    is_canvas: !0,
                    oathId: t
                });
            },
            refresh: function() {
                this.init();
            },
            setTabIndex: function(t) {
                this.tabIndex = t, 0 === t && this.swearPlaying && this.customData.swearAudio.stop(), 
                1 === t && this.orgaOpusPlaying && this.customData.orgaAudio.stop();
            },
            setProductTabIndex: function(t) {
                this.productTabIndex = t;
            },
            toggleRule: function() {
                this.$invoke("Rule", "toggle");
            },
            toggleRule2: function() {
                this.rule2Show = !this.rule2Show;
            },
            toRank: function() {
                wx.navigateTo({
                    url: "/packageParty/rank" + (this.orgaId ? "?orgaId=" + this.orgaId : "")
                });
            },
            toPerceptionRank: function() {
                wx.navigateTo({
                    url: "/packageParty/feeling" + (this.orgaId ? "?orgaId=" + this.orgaId : "")
                });
            },
            toMyPage: function() {
                wx.navigateTo({
                    url: "/packageParty/myAchievement"
                });
            },
            toMedia: function() {
                wx.navigateTo({
                    url: "/packageParty/media"
                });
            },
            toSign: function() {
                var t = this;
                (0, f.checkLogin)(function() {
                    t.activity.isSign || wx.navigateTo({
                        url: "/packageParty/sign"
                    });
                });
            },
            toMediaDetail: function(t) {
                wx.navigateTo({
                    url: "/packageParty/mediaDetail?id=" + t
                });
            },
            toContact: function(t) {
                wx.navigateTo({
                    url: "/packageParty/probation"
                });
            },
            pageScroll: function(t) {
                this.whiteTabs ? t.detail.scrollTop <= 20 && (this.whiteTabs = !1) : t.detail.scrollTop > 20 && (this.whiteTabs = !0);
            },
            swearListChange: function(t) {
                this.swearList.length > 4 && t.detail.current + 5 >= this.swearList.length && this.getSwearList(!0), 
                t.detail.current > this.customData.swearIndex && this.swearPlaying && this.customData.swearAudio.pause();
            },
            playSwear: function(t, a) {
                this.swearId === t.oathId ? this.swearPlaying ? (this.swearPlaying = !1, this.customData.swearAudio.pause()) : (this.swearPlaying = !0, 
                this.customData.swearAudio.play()) : (this.customData.swearAudio.src = t.yunUrl, 
                this.swearId = t.oathId, this.swearPlaying = !0), this.customData.swearIndex = a;
            },
            toQuestionnair: function() {
                wx.navigateTo({
                    url: "/packageActivity/pages/TaiyuanQuestionnaire/TaiyuanQuestionnaire?answerSheetId=10"
                });
            },
            swear: function(t) {
                var a = this;
                if (console.log(t, "77777777"), 1 == this.isOathActivityEnd && 1 != t.isOath) return (0, 
                f.alertText)("活动已结束"), !1;
                (0, f.checkLogin)(function() {
                    if (!a.activity.isSign) return wx.navigateTo({
                        url: "/packageParty/sign"
                    });
                    a.stopAudioVideo(), a.$broadcast("show", {
                        type: t.oathType,
                        is_transcribe: !t.isOath,
                        is_canvas: !!t.isOath,
                        oathId: t.oathId
                    });
                });
            },
            showPoster: function() {
                this.stopAudioVideo(), this.$broadcast("showPoster", {
                    is_canvas: !0
                });
            },
            playVideo: function(t) {
                -1 != t ? -2 != t ? (this.customData["video" + t].play(), this.$apply()) : this.customData.video_2.play() : this.customData.video_1.play();
            },
            videoPlay: function(t) {
                return -1 == t ? (this.playIconShow = !1, void this.customData.video_2.stop()) : -2 == t ? (this.playIconShow_down = !1, 
                void this.customData.video_1.stop()) : (this.swearData[t].playIconShow = !1, void this.$apply());
            },
            videoEnd: function(t) {
                -1 != t ? -2 != t ? (this.swearData[t].playIconShow = !0, this.$apply()) : this.playIconShow_down = !0 : this.playIconShow = !0;
            },
            playOrgaOpus: function() {
                this.orgaOpusPlaying ? (this.customData.orgaAudio.pause(), this.orgaOpusPlaying = !1) : (this.customData.orgaAudio.src = this.orgaOpus.yunUrl, 
                this.customData.orgaAudio.play(), this.orgaOpusPlaying = !0);
            },
            nextOrgaOpus: function() {
                this.initOpus();
            },
            toTab1: function() {
                this.tabIndex = 1;
            }
        }, i.events = {
            rankTabChange: function(t) {
                this.rankTabIndex = t, this.$apply();
            },
            swearTabChange: function(t) {
                this.getActivityDetail(), this.swearTabIndex = t, this.$apply();
            },
            refresh: function() {
                this.init();
            }
        }, o = a, n(i, o);
    }
    return o(s, u.default.component), r(s, [ {
        key: "onLoad",
        value: function() {
            this.init(), this.setNavbarHeight(), this.$invoke("SwearTab", "initTabImg", 0), 
            this.checkPartySeen();
        }
    }, {
        key: "init",
        value: function() {
            this.getChantMasking(), this.getOrga(), this.getActivityDetail(), this.initSwiper(), 
            this.initRank(), this.initReadActivityList(), this.initMedia(), this.initOpus(), 
            this.initSwearTemplate(), this.getSwearList(), this.getChantData(!0), this.historPerception(), 
            this.getQueryRootTypes(), this.getRule();
        }
    }, {
        key: "resetChantDat",
        value: function() {
            this.pageNum = 1, this.chantList = [], this.isRequest = !0, this.$apply();
        }
    }, {
        key: "getRule",
        value: function() {
            var t = this;
            (0, y.GetAnswerSheetRule)((0, f.getPublicParam)()).then(function(a) {
                t.answerSheetRule = a.data, t.$apply();
            });
        }
    }, {
        key: "historPerception",
        value: function() {
            var t = this;
            (0, y.GetALLHistorPerception)({
                pageNum: 1,
                pageSize: 3
            }).then(function(a) {
                console.log(a, "***************"), t.statistics.perceptiontotal = a.extData, t.perceptionList = a.data.list, 
                t.$apply();
            });
        }
    }, {
        key: "getRankOwer",
        value: function(t) {
            var a = this, i = t || "";
            i || (i = this.orgaId ? 1 : 2), wx.getStorageSync("sessionId") && wx.getStorageSync("phoneNumber") && (0, 
            y.GetRankOwer)({
                answerSheetId: this.answerSheetId,
                type: i
            }).then(function(t) {
                a.myRankOwer = t.data, a.$apply();
            });
        }
    }, {
        key: "historRank",
        value: function(t) {
            var a = this, i = t || "";
            i || (i = this.orgaId ? 1 : 2), this.historrankList = [], (0, f.showLoading)("加载中~"), 
            (0, y.GetHistorRank)({
                pageNum: 1,
                pageSize: 5,
                answerSheetId: this.answerSheetId,
                type: i
            }).then(function(t) {
                (0, f.hideLoading)(), a.newhistorrankList = t.data.list, a.historrankList = t.data.list, 
                a.$apply();
            }).catch(function(t) {
                (0, f.hideLoading)(), console.log(t);
            });
        }
    }, {
        key: "getQueryRootTypes",
        value: function() {
            var t = this;
            (0, y.GetQueryRootTypes)().then(function(a) {
                console.log("获取四史tab资源分类:", a), t.materiaList = a.data, t.materiaExtData = a.extData, 
                t.$apply();
            }).catch(function(t) {
                console.log("获取四史tab资源分类失败:", t);
            });
        }
    }, {
        key: "getChantData",
        value: function(t) {
            var a = this;
            this.$invoke("load", "setState", "loading"), (0, y.GetGraMasterSlaveActivityInfos)({
                pageNum: t ? 1 : this.pageNum,
                pageSize: 10
            }).then(function(e) {
                a.$invoke("load", "setState", null), console.log("获取诵读活动主会场/分会场信息:", e), a.chantData = e.data, 
                t && a.resetChantDat(), e.extData && e.extData.list.length && (e.extData.list.forEach(function(t) {
                    t.browseCount && (t.browseCount = (0, f.transferNumber)(t.browseCount, 1)), t.listenCount && (t.listenCount = (0, 
                    f.transferNumber)(t.listenCount, 1)), t.participateCount && (t.participateCount = (0, 
                    f.transferNumber)(t.participateCount, 1)), t.voteCount && (t.voteCount = (0, f.transferNumber)(t.voteCount, 1));
                }), a.chantList = [].concat(i(a.chantList), i(e.extData.list)), a.pageNum == e.extData.pages ? (a.isRequest = !1, 
                a.$invoke("load", "setState", "nomore")) : a.pageNum++), a.$apply();
            }).catch(function(t) {
                console.log("获取诵读活动主会场/分会场信息失败:", t);
            });
        }
    }, {
        key: "initReadActivityList",
        value: function() {
            var t = this;
            (0, y.GetReadActivityList)().then(function(a) {
                console.log("首页-诵读比赛--活动成果列表:", a), t.readActivityList = a.data;
            }).catch(function(t) {
                console.log("首页-诵读比赛--活动成果列表失败:", t);
            });
        }
    }, {
        key: "getChantMasking",
        value: function() {
            this.isChantMasking = !wx.getStorageSync("isChantMasking");
        }
    }, {
        key: "getOrga",
        value: function() {
            var t = wx.getStorageSync("agencyZoneData");
            t ? (this.HistoryTabIndex = 1, this.orgaId = t.orgaId) : this.HistoryTabIndex = 2, 
            this.$apply();
        }
    }, {
        key: "getActivityDetail",
        value: function() {
            var t = this;
            (0, y.GetActivityDetail)().then(function(a) {
                t.activity = a.data, t.answerSheetId = a.data.answerSheetId, t.historRank(), t.getRankOwer(), 
                t.initVideoContext(), t.isOathActivityEnd = a.data.isOathActivityEnd, t.$apply();
            });
        }
    }, {
        key: "initVideoContext",
        value: function(t) {
            if (!t) return this.customData.video_1 = wx.createVideoContext("video_1", this), 
            void (this.customData.video_2 = wx.createVideoContext("video_2", this));
            this.customData.video0 = wx.createVideoContext("video0", this), this.customData.video1 = wx.createVideoContext("video1", this), 
            this.customData.video2 = wx.createVideoContext("video2", this);
        }
    }, {
        key: "initSwiper",
        value: function() {
            var t = this;
            this.orgaId || (0, y.GetOrgaSwiperList)().then(function(a) {
                t.orgaSwiperList = a.data, t.$apply();
            });
        }
    }, {
        key: "initRank",
        value: function() {
            var t = this;
            this.orgaId ? (0, y.GetChildOrgaList)().then(function(a) {
                a.data && a.data.length ? (t.rankTabs = [ "子单位榜单", "内部榜单", "全国榜单" ], t.rankList_orga = a.data.slice(0, 6), 
                t.shrinkRankPadding = !0) : t.rankTabs = [ "内部榜单", "全国榜单" ], 0 === t.rankTabIndex && t.$invoke("RankTab", "initTabImg", 0), 
                t.$apply(), t.getRank0_orga(), t.getRank1();
            }) : (this.getRank0(), this.getRank1()), this.getMyRank();
        }
    }, {
        key: "getRank0",
        value: function() {
            var t = this;
            (0, y.GetOrgaList)({
                pageNum: 1,
                pageSize: 6
            }).then(function(a) {
                a.data.list.length ? t.rankList0 = a.data.list : t.rankList0 = null, t.$apply();
            });
        }
    }, {
        key: "getRank1",
        value: function() {
            var t = this;
            (0, y.GetRankList)({
                orgaId: null,
                pageNum: 1,
                pageSize: 5
            }).then(function(a) {
                a.data.list.length ? t.rankList1 = a.data.list : t.rankList1 = null, t.$apply();
            });
        }
    }, {
        key: "getRank0_orga",
        value: function() {
            var t = this;
            (0, y.GetRankList)(a({
                orgaId: this.orgaId,
                pageNum: 1,
                pageSize: 6
            }, "orgaId", this.orgaId)).then(function(a) {
                a.data.list.length ? t.rankList0 = a.data.list : t.rankList0 = null, t.$apply();
            });
        }
    }, {
        key: "getMyRank",
        value: function() {
            var t = this;
            (0, f.checkLogin)(function() {
                (0, y.GetMyRank)().then(function(a) {
                    t.myRank = a.data, t.$apply();
                });
            }, function() {});
        }
    }, {
        key: "initMedia",
        value: function() {
            var t = this;
            this.orgaId || (0, y.GetMediaList)({
                pageNum: 1,
                pageSize: 3
            }).then(function(a) {
                t.mediaList = a.data.list, t.$apply();
            });
        }
    }, {
        key: "initOpus",
        value: function() {
            var t = this;
            (0, y.GetOrgaOpus)().then(function(a) {
                a.data && (t.orgaOpusPlaying && (t.customData.orgaAudio.src = a.data.yunUrl, t.customData.orgaAudio.play()), 
                t.orgaOpus = a.data, t.initOpusAudioContext()), t.$apply();
            });
        }
    }, {
        key: "initOpusAudioContext",
        value: function() {
            var t = this;
            this.customData.orgaAudio || (this.customData.orgaAudio = wx.createInnerAudioContext(), 
            this.customData.orgaAudio.onPlay(function() {
                t.orgaOpusPlaying = !0, t.$apply();
            }), this.customData.orgaAudio.onEnded(function() {
                t.orgaOpusPlaying = !1, t.$apply();
            }), this.customData.orgaAudio.onStop(function() {
                t.orgaOpusPlaying = !1, t.$apply();
            }), this.customData.orgaAudio.onError(function(a) {
                console.log(a), t.orgaOpusPlaying = !1, t.$apply();
            }));
        }
    }, {
        key: "getSwearList",
        value: function(t) {
            var a = this;
            if (!this.swearListState) {
                this.swearListState = "loading", t || (this.swearList = []);
                var i = this.swearList.length;
                (0, y.GetSwearList)({
                    lastOathId: i ? this.swearList[i - 1].oathId : null,
                    pageSize: 10
                }).then(function(t) {
                    t.data.list.length && Array.prototype.push.apply(a.swearList, t.data.list), t.data.isLastPage ? a.swearList.length ? a.swearListState = "nomore" : a.noneSwear = !0 : a.swearListState = null, 
                    "..." === a.swearListTotal && (a.swearListTotal = t.data.total), a.$apply(), a.initSwearAudioContext();
                });
            }
        }
    }, {
        key: "initSwearAudioContext",
        value: function() {
            var t = this;
            this.customData.swearAudio || (this.customData.swearAudio = wx.createInnerAudioContext(), 
            this.customData.swearAudio.autoplay = !0, this.customData.swearAudio.onPlay(function() {
                t.swearPlaying = !0, t.$apply();
            }), this.customData.swearAudio.onPause(function() {
                t.swearPlaying = !1, t.$apply();
            }), this.customData.swearAudio.onEnded(function() {
                t.swearPlaying = !1, t.$apply();
            }), this.customData.swearAudio.onStop(function() {
                t.swearPlaying = !1, t.$apply();
            }), this.customData.swearAudio.onError(function(a) {
                console.log(a), t.swearPlaying = !1, t.$apply();
            }));
        }
    }, {
        key: "initSwearTemplate",
        value: function() {
            var t = this;
            (0, y.GetUserOathList)().then(function(a) {
                var i = a.data, e = !0, n = !1, o = void 0;
                try {
                    for (var s, r = i[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) {
                        var u = s.value;
                        u.swearText = t.customData.swearText[u.oathType], u.playIconShow = !0;
                    }
                } catch (t) {
                    n = !0, o = t;
                } finally {
                    try {
                        !e && r.return && r.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                t.swearData = i, t.$apply(), t.initVideoContext(!0);
            });
        }
    }, {
        key: "checkPartySeen",
        value: function() {
            wx.getStorageSync("partySeen") && (this.tabIndex = 1, this.$apply());
        }
    }, {
        key: "stopAudioVideo",
        value: function() {
            try {
                this.customData.video_1.stop(), this.customData.video_2.stop(), this.customData.video0.stop(), 
                this.customData.video1.stop(), this.customData.video2.stop();
            } catch (t) {
                console.log(t);
            }
            this.customData.swearAudio && this.customData.swearAudio.stop();
        }
    }, {
        key: "setNavbarHeight",
        value: function() {
            this.navbarHeight = wx.getSystemInfoSync().statusBarHeight + 44, this.$apply();
        }
    } ]), s;
}();

exports.default = w;