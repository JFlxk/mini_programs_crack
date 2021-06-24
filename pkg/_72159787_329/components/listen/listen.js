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
        for (var s = arguments.length, l = Array(s), d = 0; d < s; d++) l[d] = arguments[d];
        return a = n = t(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(l))), 
        n.props = {
            is_skeleton8: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, n.data = {
            readCardData: [],
            pageIndex: 1,
            isCanRequest: !0,
            showMore: !0,
            refresh: "",
            orgaColor: "#3B87DD"
        }, n.methods = {
            scroll: function(e) {
                this.isCanRequest && (this.pageIndex++, this.loadHotReadCards());
            },
            skipSoundCardDetail: function(e, t) {
                wx.getBackgroundAudioManager().stop(), this.$emit("hideInnerAudio"), (0, i.skip)("/packagePopular/pages/soundCardDetail/soundCardDetail?targetItem=" + JSON.stringify(e) + "&is_everyday=is_everyday");
            },
            skipMore: function() {
                this.$emit("hideInnerAudio"), (0, i.skip)("/packagePopular/pages/dailySoundCard/dailySoundCard");
            }
        }, n.events = {
            subUpdate: function(e) {},
            updateOrgaColor: function(e) {
                e && (this.orgaColor = e);
            }
        }, r = a, t(n, r);
    }
    return o(u, r.default.component), n(u, [ {
        key: "loadHotReadCards",
        value: function() {
            var e = this, t = {
                pageNum: this.pageIndex,
                pageSize: 10
            }, o = (0, i.getPublicParam)(t);
            (0, s.GetHotReadCards)(o).then(function(t) {
                2e5 == t.code ? ((0, i.log)("GetHotReadCards每日必听获取成功：", t), e.is_skeleton8 = !0, 
                e.readCardData = e.readCardData.concat(t.data.list), t.data.isLastPage && (e.isCanRequest = !1), 
                e.$apply()) : ((0, i.log)("GetHotReadCards每日必听获取失败：", t), (0, i.alertText)(t.message));
            }).catch(function(e) {
                (0, i.log)("每日必听获取异常：", e);
            });
        }
    }, {
        key: "setIsOpenedReadWall",
        value: function(e) {
            console.log("setIsOpenedReadWall", e), this.showMore = !e && wx.getStorageSync("agencyZoneData"), 
            this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            this.loadHotReadCards();
        }
    }, {
        key: "onShow",
        value: function() {}
    } ]), u;
}();

exports.default = u;