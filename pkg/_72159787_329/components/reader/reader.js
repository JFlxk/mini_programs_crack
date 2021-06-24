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
}(), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), i = require("./../../common/js/util.js"), s = require("./../../api/index.js"), u = function(a) {
    function u() {
        var o, a, n, r;
        e(this, u);
        for (var c = arguments.length, l = Array(c), f = 0; f < c; f++) l[f] = arguments[f];
        return a = n = t(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(l))), 
        n.props = {
            is_skeleton5: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, n.config = {
            navigationBarTitleText: "",
            usingComponents: {}
        }, n.data = {
            readerData: [],
            firstData: [],
            secondData: [],
            thirdData: [],
            pageIndex: 1,
            isCanRequest: !0,
            noData: !1,
            refresh: "",
            orgaColor: "#3B87DD"
        }, n.components = {}, n.methods = {
            scroll: function(e) {
                this.isCanRequest && (this.pageIndex++, this.loadHotReader());
            },
            skipPersonHomepage: function(e, t) {
                this.$emit("hideInnerAudio"), t ? (0, i.skip)("/packageIndex/pages/personHomepage/personHomepage?uid=" + e + "&type=mine") : (0, 
                i.skip)("/packageIndex/pages/personHomepage/personHomepage?uid=" + e);
            },
            skipMore: function() {
                this.$emit("hideInnerAudio"), (0, i.skip)("/packagePopular/pages/popularList/popularList?activeIndex=4");
            },
            attention: function(e, t, o) {
                var a = this;
                (0, i.checkLogin)(function() {
                    if (!e) {
                        var n = {
                            action: e ? "cancel" : "follower",
                            beOpusId: "",
                            uid: t
                        }, r = (0, i.getPublicParam)(n);
                        (0, s.DoAttention)(r).then(function(t) {
                            2e5 == t.code ? (e || ((0, i.alertText)("已关注该朗读者了~"), 0 == o ? a.firstData.followerWxUser = 1 : 1 == o ? a.secondData.followerWxUser = 1 : 2 == o ? a.thirdData.followerWxUser = 1 : a.readerData[o].followerWxUser = 1), 
                            a.$apply()) : ((0, i.log)("DoAttention请求失败：", t), (0, i.alertText)(t.message));
                        }).catch(function(e) {
                            (0, i.log)(e);
                        });
                    }
                });
            }
        }, n.events = {
            updateReader: function(e) {
                var t = this;
                "refresh" == e && (t.refresh = e), t.reset();
                var o = t.$parent.$parent.$parent.globalData.isSwitch, a = wx.getStorageSync("agencyZoneData").orgaId;
                (0, i.log)("reader updateReader isSwitch || orgaId:", o, a, o || a), o || a ? setTimeout(function() {
                    t.loadHotReader();
                }, 500) : wx.nextTick(function() {
                    t.loadHotReader();
                });
            },
            updateOrgaColor: function(e) {
                e && (this.orgaColor = e);
            }
        }, r = a, t(n, r);
    }
    return o(u, r.default.component), n(u, [ {
        key: "loadHotReader",
        value: function() {
            var e = this, t = {
                pageNum: this.pageIndex,
                pageSize: 10
            }, o = (0, i.getPublicParam)(t);
            (0, s.GetHotReader)(o).then(function(t) {
                "refresh" == e.refresh && (e.refresh = "", e.$emit("setRefreshStat")), 2e5 == t.code ? (e.is_skeleton5 = !0, 
                setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, i.log)("GetHotReader人气朗读者获取成功：", t), e.readerData = e.readerData.concat(t.data.list), 
                e.readerData.length ? e.noData = !1 : e.noData = !0, e.firstData = e.readerData[0], 
                e.secondData = e.readerData[1], e.thirdData = e.readerData[2], t.data.isLastPage && (e.isCanRequest = !1), 
                e.$apply()) : (setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, i.log)("GetHotReader人气朗读者获取失败：", t), (0, i.alertText)(t.message));
            }).catch(function(t) {
                "refresh" == e.refresh && (e.refresh = "", e.$emit("setRefreshStat")), setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, i.log)("人气朗读者获取异常：", t);
            });
        }
    }, {
        key: "reset",
        value: function() {
            this.readerData = [], this.firstData = [], this.secondData = [], this.thirdData = [], 
            this.pageIndex = 1, this.isCanRequest = !0;
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
    } ]), u;
}();

exports.default = u;