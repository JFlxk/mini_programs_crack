function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
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

var a = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, o, n) {
        return o && t(e.prototype, o), n && t(e, n), e;
    };
}(), r = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), u = require("./../../common/js/util.js"), p = function(n) {
    function p() {
        var o, n, a, r;
        t(this, p);
        for (var i = arguments.length, l = Array(i), s = 0; s < i; s++) l[s] = arguments[s];
        return n = a = e(this, (o = p.__proto__ || Object.getPrototypeOf(p)).call.apply(o, [ this ].concat(l))), 
        a.props = {}, a.data = {
            opusData: {},
            playStat: "",
            position: 0,
            backAudio: ""
        }, a.methods = {
            goTo: function() {
                "disabled" != this.playStat && (0, u.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + this.opusData.opusId + "&entrance=" + this.opusData.entrance + "&$type=background");
            }
        }, a.events = {
            subUpdate2: function(t) {
                var e = this;
                (0, u.getStorage)("backAudio").then(function(t) {
                    console.log(t);
                    var o = t.data;
                    if (o) {
                        e.opusData = o;
                        var n = wx.getBackgroundAudioManager();
                        void 0 == n.paused || 1 == n.paused ? e.playStat = "pause" : e.playStat = e.opusData.isPlaying, 
                        e.$apply(), n.onPlay(function() {
                            e.playStat = "playing", e.$apply();
                        }), n.onPause(function() {
                            e.playStat = "pause", e.$apply();
                        }), n.onStop(function() {
                            e.playStat = "pause", e.$apply();
                        }), n.onEnded(function(t) {
                            e.playStat = "pause", e.$apply();
                        });
                    }
                }).catch(function(t) {
                    console.log(t);
                });
            }
        }, r = n, e(a, r);
    }
    return o(p, r.default.component), a(p, [ {
        key: "onLoad",
        value: function() {
            console.log("onLoad"), this.playStat = "disabled", this.$apply();
        }
    } ]), p;
}();

exports.default = p;