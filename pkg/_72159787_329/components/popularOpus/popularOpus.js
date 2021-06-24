function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : a(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : a(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var a = e[o];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, o, a) {
        return o && t(e.prototype, o), a && t(e, a), e;
    };
}(), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), s = require("./../../common/js/util.js"), r = require("./../../api/index.js"), u = function(a) {
    function u() {
        var o, a, i, n;
        t(this, u);
        for (var r = arguments.length, p = Array(r), l = 0; l < r; l++) p[l] = arguments[l];
        return a = i = e(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(p))), 
        i.props = {
            is_skeleton3: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, i.config = {
            navigationBarTitleText: ""
        }, i.data = {
            tabs: [ "朗读作品", "视频作品" ],
            activeIndex: 0,
            opusData: [],
            audioCtx: "",
            playIndex: -1,
            noData: !1,
            refresh: "",
            orgaColor: "#3B87DD"
        }, i.methods = {
            tabChange: function(t) {
                this.activeIndex = t, this.reset(), this.getData();
            },
            skipOpusDetail: function(t, e) {
                this.audioCtx && this.audioCtx.pause(), this.playIndex = -1, (0, s.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t + "&entrance=" + e);
            },
            skipMore: function() {
                (0, s.skip)("/packagePopular/pages/popularList/popularList?activeIndex=" + this.activeIndex);
            },
            playVideo: function(t, e, o) {
                t && this.$emit("setMainPageVideo", {
                    url: t,
                    poster: e,
                    opusSource: o
                });
            },
            play: function(t, e) {
                if (wx.getBackgroundAudioManager().stop(), this.audioCtx && this.audioCtx.pause(), 
                this.playIndex != e) {
                    this.playIndex = e, this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = t, 
                    this.audioCtx.play();
                    var o = this;
                    this.audioCtx.onEnded(function() {
                        o.playIndex = -1, o.$apply();
                    }), this.setOpusCount(this.opusData[e].opusId);
                } else this.playIndex = -1;
            }
        }, i.events = {
            hide: function() {
                this.audioCtx && this.audioCtx.pause(), this.playIndex = -1;
            },
            setDownRefresh: function(t) {
                this.refresh = t, this.reset(), this.getData();
            },
            updateOrgaColor: function(t) {
                t && (this.orgaColor = t, this.$apply());
            }
        }, n = a, e(i, n);
    }
    return o(u, n.default.component), i(u, [ {
        key: "loadHotVFOpus",
        value: function() {
            var t = this;
            (0, s.showLoading)("");
            var e = {
                pageNum: 1,
                pageSize: 4
            }, o = (0, s.getPublicParam)(e);
            (0, r.GetHotVFOpus)(o).then(function(e) {
                "refresh" == t.refresh && (t.refresh = "", t.$emit("setRefreshStat")), wx.hideLoading(), 
                2e5 == e.code ? (t.is_skeleton3 = !0, (0, s.log)("GetHotVFOpus朗读作品获取成功：", e), e.data.list.length ? (t.opusData = t.opusData.concat(e.data.list), 
                t.noData = !1) : t.noData = !0, t.$apply()) : ((0, s.log)("GetHotVFOpus朗读作品获取失败：", e), 
                (0, s.alertText)(e.message));
            }).catch(function(e) {
                "refresh" == t.refresh && (t.refresh = "", t.$emit("setRefreshStat")), (0, s.alertText)("朗读作品获取异常"), 
                (0, s.log)("朗读作品获取异常：", e);
            });
        }
    }, {
        key: "getHotVideoOpus",
        value: function() {
            var t = this;
            (0, s.showLoading)("");
            var e = {
                pageNum: 1,
                pageSize: 4
            }, o = (0, s.getPublicParam)(e);
            (0, r.GetHotVideoOpus)(o).then(function(e) {
                if (t.is_skeleton3 = !0, "refresh" == t.refresh && (t.refresh = "", t.$emit("setRefreshStat")), 
                wx.hideLoading(), console.log("视频作品结果在这里", e), 2e5 == e.code) {
                    (0, s.log)("GetHotVideoOpus视频作品获取成功：", e);
                    var o = e.data.list;
                    o && o.length ? (t.opusData = t.opusData.concat(e.data.list), t.noData = !1) : t.noData = !0, 
                    t.$apply();
                } else (0, s.log)("GetHotVideoOpus视频作品获取失败：", e), (0, s.alertText)(e.message);
            }).catch(function(e) {
                "refresh" == t.refresh && (t.refresh = "", t.$emit("setRefreshStat")), (0, s.alertText)("视频作品获取异常"), 
                (0, s.log)("视频作品获取异常：", e);
            });
        }
    }, {
        key: "reset",
        value: function() {
            this.opusData = [], this.audioCtx && this.audioCtx.pause(), this.playIndex = -1;
        }
    }, {
        key: "getData",
        value: function() {
            switch (this.activeIndex) {
              case 0:
                this.loadHotVFOpus();
                break;

              case 1:
                this.getHotVideoOpus();
            }
        }
    }, {
        key: "setOpusCount",
        value: function(t) {
            var e = (0, s.getPublicParam)({
                opusId: t,
                actionType: 2,
                activityId: 0
            });
            (0, r.OpusAction)(e);
        }
    }, {
        key: "onLoad",
        value: function() {
            var t = this, e = t.$parent.$parent.$parent.globalData.isSwitch, o = wx.getStorageSync("agencyZoneData").orgaId;
            (0, s.log)("pouplaroups onload isSwitch || orgaId,", e, o, e || o), e || o ? setTimeout(function() {
                t.getData();
            }, 500) : this.getData();
        }
    }, {
        key: "onShow",
        value: function() {}
    } ]), u;
}();

exports.default = u;