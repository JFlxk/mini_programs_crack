function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? e : t;
}

function o(e, t) {
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
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), c = require("./../../api/index.js"), u = require("./../../common/js/util.js"), a = function(n) {
    function a() {
        var o, n, r, i;
        e(this, a);
        for (var s = arguments.length, l = Array(s), p = 0; p < s; p++) l[p] = arguments[p];
        return n = r = t(this, (o = a.__proto__ || Object.getPrototypeOf(a)).call.apply(o, [ this ].concat(l))), 
        r.props = {
            voiceList: {
                type: Array,
                default: []
            },
            showUseDec: {
                type: String,
                default: ""
            }
        }, r.data = {
            currentType: 1,
            orgaColor: "#3B87DD"
        }, r.methods = {
            onSwitchType: function(e) {
                this.currentType = e, this.$emit("onSwitchCard", e);
            },
            onOpenDesc: function() {
                this.$emit("onOpenDescProp");
            },
            onClickVoiceDetails: function(e) {
                console.log(e), (0, u.skip)("/packagePopular/pages/soundCardDetail/soundCardDetail?targetItem=" + JSON.stringify(e) + "&fromCardWall=" + this.currentType + "&isParty=" + !0);
            },
            onClickLike: function(e) {
                var t = this;
                (0, u.checkLogin)(function() {
                    if (t.voiceList[e].likeStatus) (0, u.alertText)("您已赞过~"); else {
                        var o = (0, u.getPublicParam)({
                            actionType: 3,
                            opusId: t.voiceList[e].opusId
                        });
                        (0, c.OpusAction)(o).then(function(o) {
                            2e5 == o.code ? (console.log("OpusAction操作成功:", o), (0, u.alertText)("点赞成功~"), t.voiceList[e].likeCount++, 
                            t.voiceList[e].likeStatus = 1, t.$apply()) : (console.log("DoAttention请求失败：", o), 
                            (0, u.alertText)(o.message));
                        }).catch(function(e) {
                            console.log("操作异常:", e);
                        });
                    }
                });
            },
            onChooseProduct: function(e) {
                1 != e ? 2 != e || (0, u.skip)("/pages/recording/recording") : (0, u.skip)("/packageIndex/pages/opus/opus?type=0");
            }
        }, r.events = {
            updateOrgaTheme: function(e) {
                this.orgaColor = e;
            }
        }, i = n, t(r, i);
    }
    return o(a, i.default.component), r(a, [ {
        key: "onLoad",
        value: function() {}
    } ]), a;
}();

exports.default = a;