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

var i = function() {
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
}(), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), u = require("./../../common/js/util.js"), a = (require("./../../api/index.js"), 
function(n) {
    function a() {
        var o, n, i, r;
        e(this, a);
        for (var s = arguments.length, p = Array(s), l = 0; l < s; l++) p[l] = arguments[l];
        return n = i = t(this, (o = a.__proto__ || Object.getPrototypeOf(a)).call.apply(o, [ this ].concat(p))), 
        i.props = {
            videoList: {
                type: Array,
                default: []
            },
            audioList: {
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
        }, i.data = {
            currentType: 1,
            audioCtx: "",
            playIndex: -1,
            orgaColor: "#3B87DD"
        }, i.methods = {
            onSwitchType: function(e) {
                this.currentType = e, this.audioCtx && this.audioCtx.pause(), this.playIndex = -1, 
                this.$emit("onSwitchVideo", e);
            },
            onOpenDesc: function() {
                this.$emit("onOpenDescProp");
            },
            onClickAudioDetails: function(e) {
                (0, u.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + e);
            },
            onControlAudio: function(e, t) {
                if (this.audioCtx && this.audioCtx.pause(), this.playIndex != t) {
                    this.playIndex = t, this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = e, 
                    this.audioCtx.play();
                    var o = this;
                    this.audioCtx.onEnded(function() {
                        o.playIndex = -1, o.$apply();
                    });
                } else this.playIndex = -1;
            }
        }, i.events = {
            updateOrgaTheme: function(e) {
                this.orgaColor = e;
            }
        }, r = n, t(i, r);
    }
    return o(a, r.default.component), i(a, [ {
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
}());

exports.default = a;