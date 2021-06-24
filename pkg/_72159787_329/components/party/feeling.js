function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
}

function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : s(e)) && "function" != typeof e ? t : e;
}

function n(t, e) {
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

var a = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, i, o) {
        return i && t(e.prototype, i), o && t(e, o), e;
    };
}(), r = t(require("./../../npm/wepy/lib/wepy.js")), u = require("./../../api/index.js"), l = require("./../../api/index-party.js"), c = require("./../../common/js/util.js"), p = t(require("./../empty/empty.js")), d = t(require("./../load/load.js")), f = function(t) {
    function s() {
        var t, e, n, a;
        i(this, s);
        for (var r = arguments.length, u = Array(r), l = 0; l < r; l++) u[l] = arguments[l];
        return e = n = o(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(u))), 
        n.$repeat = {}, n.$props = {
            empty: {}
        }, n.$events = {}, n.components = {
            empty: p.default,
            load: d.default
        }, n.data = {
            show: !1,
            pageNum: 1,
            isLastPage: !1,
            is_empty: !1,
            list: [],
            isPlay: !1,
            playIndex: -1,
            audioCtx: "",
            total: 0
        }, n.events = {
            showList: function(t) {
                this.resourceId = t.resourceId, this.show = !0, this.reset(), this.getFindPerceptionByResourceId();
            }
        }, n.methods = {
            addFavor: function(t, e, i) {
                var o = this;
                (0, c.checkLogin)(function() {
                    t || o.opusAction(3, e, i);
                });
            },
            play: function(t, e, i) {
                var o = this;
                this.audioCtx && this.audioCtx.pause(), t != this.playIndex ? (this.playIndex = t, 
                this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = e, this.audioCtx.play(), 
                this.audioCtx.onEnded(function() {
                    o.playIndex = -1;
                }), this.list[t].islisten || this.opusAction(2, t, i)) : this.playIndex = -1;
            },
            toggle: function() {
                this.show = !1, this.reset(), this.$emit("setIsShowFeeling");
            },
            getData: function() {
                this.isLastPage || (this.pageNum++, this.getFindPerceptionByResourceId());
            },
            fn: function() {}
        }, a = e, o(n, a);
    }
    return n(s, r.default.component), a(s, [ {
        key: "reset",
        value: function() {
            this.pageNum = 1, this.isLastPage = !1, this.list = [], this.playIndex = -1, this.isplay = !1, 
            this.audioCtx && this.audioCtx.stop(), this.$apply();
        }
    }, {
        key: "getFindPerceptionByResourceId",
        value: function() {
            var t = this;
            (0, c.showLoading)("加载中~"), this.$invoke("load", "setState", "loading"), (0, l.GetFindPerceptionByResourceId)({
                pageNum: this.pageNum,
                pageSize: 10,
                resourceId: this.resourceId
            }).then(function(i) {
                (0, c.hideLoading)(), t.$invoke("load", "setState", null), t.total = i.data.total;
                for (var o = i.data.list, n = 0; n < o.length; n++) o[n].islisten = !1;
                t.list = [].concat(e(t.list), e(o)), t.is_empty = !t.list.length, t.isLastPage = i.data.isLastPage, 
                t.isLastPage && t.$invoke("load", "setState", "nomore"), console.log("资源关联的感悟列表:", i), 
                t.$apply();
            }).catch(function(t) {
                (0, c.hideLoading)(), console.log("资源关联的感悟列表失败:", t);
            });
        }
    }, {
        key: "opusAction",
        value: function(t, e, i) {
            var o = this, n = (0, c.getPublicParam)({
                opusId: i,
                actionType: t
            });
            (0, u.OpusAction)(n).then(function(i) {
                if (2e5 == i.code) switch ((0, c.log)("OpusAction操作成功:", i), t) {
                  case 2:
                    o.list[e].islisten = !0, o.list[e].listenCount++, o.$apply();
                    break;

                  case 3:
                    (0, c.alert)("点赞成功"), o.list[e].likeStatus = 1, o.list[e].likeCount++, o.$apply();
                }
            }).catch(function(t) {
                (0, c.log)("操作异常:", t);
            });
        }
    } ]), s;
}();

exports.default = f;