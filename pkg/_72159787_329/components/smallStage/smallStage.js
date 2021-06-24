function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : o(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), r = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), a = require("./../../common/js/util.js"), u = function(o) {
    function a() {
        var n, o, i, r;
        t(this, a);
        for (var u = arguments.length, c = Array(u), l = 0; l < u; l++) c[l] = arguments[l];
        return o = i = e(this, (n = a.__proto__ || Object.getPrototypeOf(a)).call.apply(n, [ this ].concat(c))), 
        s.call(i), r = o, e(i, r);
    }
    return n(a, r.default.component), i(a, [ {
        key: "onHide",
        value: function() {
            this.audioCtx && this.audioCtx.pause();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.audioCtx && this.audioCtx.pause();
        }
    } ]), a;
}(), s = function() {
    var t = this;
    this.props = {
        bannerList: {
            type: Array,
            default: []
        },
        activityData: {
            type: Object,
            default: {}
        },
        rankListData: {
            type: Array,
            default: []
        },
        noData: {
            type: Boolean,
            default: !1
        },
        showUseDec: {
            type: String,
            default: ""
        }
    }, this.data = {
        currentIndex: 0,
        currentType: 1,
        audioCtx: "",
        playIndex: -1,
        orgaColor: "#3B87DD"
    }, this.methods = {
        changeBanner: function(t) {
            this.currentIndex = t.detail.current, this.$emit("onChangeBanner", this.currentIndex);
        },
        onOpenDesc: function() {
            this.$emit("onOpenDescProp");
        },
        onSwitchType: function(t) {
            this.currentType = t, this.$emit("onSwitchActivity", t);
        },
        onClickAudioDetails: function(t) {
            (0, a.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t);
        },
        onControlAudio: function(t, e) {
            if (this.audioCtx && this.audioCtx.pause(), this.playIndex != e) {
                this.playIndex = e, this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = t, 
                this.audioCtx.play();
                var n = this;
                this.audioCtx.onEnded(function() {
                    n.playIndex = -1, n.$apply();
                });
            } else this.playIndex = -1;
        }
    }, this.events = {
        updateOrgaTheme: function(t) {
            this.orgaColor = t;
        },
        "stageLists-broadcast": function() {
            console.log(arguments.length <= 0 ? void 0 : arguments[0]), t.noData = arguments.length <= 0 ? void 0 : arguments[0], 
            console.log(t.noData);
        }
    };
};

exports.default = u;