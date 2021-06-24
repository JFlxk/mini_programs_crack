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
}(require("./../../npm/wepy/lib/wepy.js")), a = (require("./../../api/config.js"), 
require("./../../common/js/util.js"), require("./../../api/index-party.js"), requirePlugin("XSEngine"), 
function(n) {
    function a() {
        var o, n, r, i;
        e(this, a);
        for (var s = arguments.length, l = Array(s), c = 0; c < s; c++) l[c] = arguments[c];
        return n = r = t(this, (o = a.__proto__ || Object.getPrototypeOf(a)).call.apply(o, [ this ].concat(l))), 
        r.data = {
            bg_url: "",
            QR_code: "",
            orgaName: "",
            rpx: 1,
            cavas_imgUrl: "",
            is_canvas: !1,
            is_masking: !1,
            paddingTop: 0
        }, r.events = {
            showPoster: function(e) {
                console.log(e, "--------------------------------接收的参数-----------------------"), 
                this.is_canvas = !0, this.is_masking = !0, this.bg_url = e.bg_url ? e.bg_url.replace("http://", "https://") : "", 
                this.QR_code = e.QR_code ? e.QR_code.replace("http://", "https://") : "", this.orgaName = e.orgaName, 
                this.paddingTop = e.paddingTop, this.DrawCavas(), this.$apply();
            }
        }, r.methods = {
            TapCloseCard: function() {
                this.is_canvas = !1, this.is_masking = !1, this.$emit("closeFilter");
            },
            subCard: function() {
                var e = this;
                wx.getSetting({
                    success: function(t) {
                        !1 === t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                            title: "提示",
                            content: "若不打开授权，则无法将图片保存在相册中！",
                            success: function(e) {
                                e.confirm ? wx.openSetting({
                                    success: function(e) {
                                        console.log(e.authSetting);
                                    }
                                }) : e.cancel && console.log("用户点击取消");
                            }
                        }) : wx.saveImageToPhotosAlbum({
                            filePath: e.cavas_imgUrl,
                            success: function(e) {
                                wx.showToast({
                                    title: "保存图片成功！"
                                });
                            },
                            fail: function(e) {
                                wx.showToast({
                                    title: "保存图片失败！"
                                });
                            }
                        });
                    }
                });
            }
        }, i = n, t(r, i);
    }
    return o(a, i.default.component), r(a, [ {
        key: "getImageInfo",
        value: function(e) {
            return new Promise(function(t, o) {
                wx.getImageInfo({
                    src: e,
                    success: function(e) {
                        t(e);
                    },
                    fail: function(e) {
                        t(e);
                    }
                });
            });
        }
    }, {
        key: "setText",
        value: function(e, t, o, n, r, i, a, s, l, c) {
            var u = this;
            if (o *= u.rpx, n ? n *= u.rpx : n = "", i *= u.rpx, a *= u.rpx, c ? c *= u.rpx : c = "", 
            e.setFontSize(o), e.setTextAlign(l), t) {
                for (var p = s.split(""), f = [], h = [], g = 0; g < p.length; g++) {
                    var x = p[g];
                    h.push(x);
                    var d = h.join("");
                    e.measureText(d).width > c ? (h.pop(), f.push(h.join("")), h = [ x ]) : g === p.length - 1 && f.push(d);
                }
                for (var v = 0; v < f.length; v++) e.fillStyle = "rgba(0,0,0,0.3)", e.fillText(f[v], i + 1 * u.rpx, a + 1 * u.rpx + o + v * n, c), 
                e.fillText(f[v], i + 2 * u.rpx, a + 2 * u.rpx + o + v * n, c), e.setFillStyle(r), 
                e.fillText(f[v], i, a + o + v * n, c);
            } else e.fillStyle = "rgba(0,0,0,0.3)", e.fillText(s, i + 1 * u.rpx, a + 1 * u.rpx + o, c), 
            e.fillText(s, i + 2 * u.rpx, a + 2 * u.rpx + o, c), e.setFillStyle(r), e.fillText(s, i, a + o, c);
            e.restore();
        }
    }, {
        key: "roundRect",
        value: function(e, t, o, n, r, i) {
            arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            var a = this;
            a.rpx, a.rpx, n *= a.rpx, r *= a.rpx, i *= a.rpx, e.save(), e.beginPath(), e.moveTo(50, 0), 
            e.arcTo(n, 0, n, r, i), e.arcTo(n, r, 0, r, i), e.arcTo(0, r, 0, 0, i), e.arcTo(0, 0, n, 0, i), 
            e.fill(), e.closePath(), e.clip();
        }
    }, {
        key: "DrawCavas",
        value: function() {
            var e = this, t = this;
            wx.showLoading({
                title: "拼命生成图片中~"
            });
            var o = t.getImageInfo(t.bg_url), n = t.getImageInfo(t.QR_code);
            Promise.all([ o, n ]).then(function(o) {
                var n = o[0], r = o[1], i = wx.createCanvasContext("firstCanvas"), a = t.rpx;
                t.roundRect(i, 0, 0, 590, 730, 20), i.drawImage(n.path, 0, 0, n.width, 730 * n.width / 590, 0, 0, 590 * a, 730 * a), 
                i.restore(), i.save(), i.beginPath(), i.arc(295 * a, 508 * a, 90 * a, 0, 2 * Math.PI), 
                i.setFillStyle("#fff"), i.fill(), i.clip(), i.drawImage(r.path, 211 * a, 425 * a, 168 * a, 168 * a), 
                i.restore(), t.setText(i, "", 28, "", "#FFFFFF", 295, 618, "微信识别二维码", "center"), 
                t.setText(i, "", 24, "", "#FFFFFF", 295, 658, e.orgaName + "邀您参与活动", "center"), 
                i.draw(!1, setTimeout(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "firstCanvas",
                        success: function(e) {
                            wx.hideLoading(), t.cavas_imgUrl = e.tempFilePath, t.$apply();
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, 200)), t.$apply();
            });
        }
    } ]), a;
}());

exports.default = a;