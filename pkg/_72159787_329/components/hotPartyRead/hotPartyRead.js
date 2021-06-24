function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function a(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
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

var i = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var o = e[a];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, a, o) {
        return a && t(e.prototype, a), o && t(e, o), e;
    };
}(), u = t(require("./../../npm/wepy/lib/wepy.js")), r = t(require("./../empty/empty.js")), s = t(require("./../load/load.js")), l = require("./../../api/index.js"), p = require("./../../common/js/util.js"), d = function(t) {
    function n() {
        var t, o, i, u;
        e(this, n);
        for (var l = arguments.length, d = Array(l), c = 0; c < l; c++) d[c] = arguments[c];
        return o = i = a(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [ this ].concat(d))), 
        i.props = {}, i.$repeat = {}, i.$props = {
            Empty: {
                size: "small"
            }
        }, i.$events = {}, i.components = {
            Empty: r.default,
            Load: s.default
        }, i.data = {
            studyList: [],
            studyTabIndex: 0,
            readList: [],
            opusList: [],
            playIndex: -1,
            audioCtx: "",
            isPullDown: !1,
            timer: null,
            playListTotal: "",
            tabIndex2: 0,
            isShowMore: !1,
            orgaColor: "#3B87DD",
            studyExtData: {},
            opusExtData: {},
            resourceExt: {}
        }, i.methods = {
            tapStudyShowTab: function(t) {
                if ((t *= 1) === this.studyTabIndex) return !1;
                this.studyTabIndex = t, this.loadStudyData(t);
            },
            tabChange: function(t) {
                if ((t *= 1) === this.tabIndex2) return !1;
                this.isShowMore = !1, this.tabIndex2 = t, this.loadLearnOutcome(t);
            },
            gotoPage: function(t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = void 0;
                1 == t ? o = "/packagePartyStudy/pages/study/study?tabIndex=" + this.studyTabIndex + "&categoryIndex=" + a : 2 == t ? o = "/packageReading/pages/childMaterial/childMaterial?dub_type=1&id=" + e.id + "&cateType=" + e.cateType + "&resouceTypeName=" + e.resouceTypeName : 3 == t ? o = "/packagePartyStudy/pages/learningResults/learningResults" : 4 == t && (o = "/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + e + "&playListTotal=" + this.playListTotal + "&entrance=learningResults"), 
                this.audioCtx && this.audioCtx.pause(), (0, p.skip)(o);
            },
            playHandler: function(t, e, a) {
                var o = this;
                this.audioCtx && this.audioCtx.pause(), t != this.playIndex ? (this.playIndex = t, 
                this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = e, this.audioCtx.play(), 
                this.audioCtx.onEnded(function() {
                    o.playIndex = -1;
                }), this.listenAction(t, a)) : this.playIndex = -1;
            },
            skipOpusDetail: function(t, e) {
                this.audioCtx && this.audioCtx.pause(), this.playIndex = -1, (0, p.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t + "&entrance=" + e);
            }
        }, u = o, a(i, u);
    }
    return o(n, u.default.component), i(n, [ {
        key: "loadStudyData",
        value: function(t) {
            var e = this, a = {
                pageNum: 1,
                pageSize: 6,
                typeId: 0
            };
            (t ? l.GetVideoType : l.GetAudioType)((0, p.getPublicParam)(a)).then(function(t) {
                if ((0, p.log)("党建学习分类列表获取", t), 2e5 != t.code) return !1;
                e.studyList = t.data.list || [], e.studyList.forEach(function(t) {
                    t.imgUrl = t.imgUrl.replace("http://", "https://");
                }), e.studyExtData = t.extData, e.$apply();
            }).catch(function(t) {
                (0, p.log)("党建学习分类列表获取失败", t);
            });
        }
    }, {
        key: "loadReadTypeData",
        value: function() {
            var t = this;
            (0, l.ResourceTypes)((0, p.getPublicParam)({})).then(function(e) {
                if ((0, p.log)("党建诵读分类列表获取", e), 2e5 != e.code) return !1;
                t.readList = e.data || [], e.data.length && (t.readList = e.data.slice(0, 6)), t.readList.forEach(function(t) {
                    t.icon = t.icon.replace("http://", "https://");
                }), t.resourceExt = e.extData, t.$apply();
            }).catch(function(t) {
                (0, p.log)("党建诵读分类列表获取失败", t);
            });
        }
    }, {
        key: "loadLearnOutcome",
        value: function(t) {
            var e = this, a = {
                pageNum: 1,
                pageSize: 6
            };
            (t ? l.GetOrgaVideoOpusRank : l.GetOrgaStudyOpusRank)((0, p.getPublicParam)(a)).then(function(t) {
                if ((0, p.log)("机构作品排行榜（学习成果）列表获取", t), 2e5 != t.code) return !1;
                e.opusList = t.data.list || [], e.playListTotal = t.data.total, e.isShowMore = !!e.opusList.length, 
                e.opusExtData = t.extData, e.$apply();
            }).catch(function(t) {
                (0, p.log)("机构作品排行榜（学习成果）列表获取失败", t);
            });
        }
    }, {
        key: "listenAction",
        value: function(t, e) {
            var a = {
                actionType: 2,
                opusId: e
            };
            (0, l.OpusAction)((0, p.getPublicParam)(a)).then(function(t) {});
        }
    }, {
        key: "refreshHandler",
        value: function() {
            this.studyTabIndex = 0, this.tabIndex2 = 0, this.loadStudyData(), this.loadReadTypeData(), 
            this.loadLearnOutcome();
        }
    }, {
        key: "clearTimer",
        value: function() {
            this.timer = null, clearTimeout(this.timer), this.audioCtx && this.audioCtx.stop(), 
            this.playIndex = -1;
        }
    }, {
        key: "updatePage",
        value: function() {
            this.refreshHandler(1);
        }
    }, {
        key: "updateOrgaTheme",
        value: function(t) {
            this.orgaColor = t, this.$apply();
        }
    }, {
        key: "onLoad",
        value: function(t) {
            (wx.getStorageSync("agencyZoneData") || {}).orgaId && this.refreshHandler();
        }
    } ]), n;
}();

exports.default = d;