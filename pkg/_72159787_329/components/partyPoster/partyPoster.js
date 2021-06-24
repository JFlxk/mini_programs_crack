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
}(), a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), i = (require("./../../api/config.js"), 
require("./../../common/js/util.js")), s = require("./../../api/index-party.js"), l = (requirePlugin("XSEngine"), 
function(n) {
    function l() {
        var o, n, r, a;
        e(this, l);
        for (var s = arguments.length, c = Array(s), u = 0; u < s; u++) c[u] = arguments[u];
        return n = r = t(this, (o = l.__proto__ || Object.getPrototypeOf(l)).call.apply(o, [ this ].concat(c))), 
        r.data = {
            bg_url: "",
            QR_code: "",
            orgaName: "",
            rpx: 1,
            cavas_imgUrl: "",
            sessionId: (0, i.getSessionId)("sessionId"),
            fileUrl: "",
            is_canvas: !1,
            is_masking: !1
        }, r.events = {
            showPoster: function(e) {
                console.log(e, "------------参数---------"), this.is_canvas = e.is_canvas, this.is_canvas && (this.is_masking = !0, 
                this.getPoster()), this.$apply();
            }
        }, r.methods = {
            TapCloseCard: function() {
                this.is_canvas = !1, this.is_masking = !1;
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
        }, a = n, t(r, a);
    }
    return o(l, a.default.component), r(l, [ {
        key: "getPoster",
        value: function() {
            var e = this;
            (0, s.GetPoster)().then(function(t) {
                (0, i.log)("活动海报信息：", t), 2e5 == t.code ? (e.posterData = e.bg_url = t.data.imageUrl, 
                e.QR_code = t.data.mpQrCodeUrl, e.orgaName = t.data.orgaName, e.DrawCavas(), e.$apply()) : ((0, 
                i.log)("活动海报信息失败：", err), (0, i.alertText)(t.message));
            }).catch(function(e) {
                (0, i.alertText)(res.message), (0, i.log)(e);
            });
        }
    }, {
        key: "getdownloadFile",
        value: function(e) {
            return new Promise(function(t, o) {
                wx.downloadFile({
                    url: e,
                    success: function(e) {
                        200 === e.statusCode && t(e.tempFilePath);
                    },
                    fail: function(e) {
                        t(e);
                    }
                });
            });
        }
    }, {
        key: "setText",
        value: function(e, t, o, n, r, a, i, s, l, c) {
            var u = this;
            if (o *= u.rpx, n ? n *= u.rpx : n = "", a *= u.rpx, i *= u.rpx, c ? c *= u.rpx : c = "", 
            e.setFontSize(o), e.setFillStyle(r), e.setTextAlign(l), t) {
                for (var f = s.split(""), p = [], g = [], d = 0; d < f.length; d++) {
                    var h = f[d];
                    g.push(h);
                    var m = g.join("");
                    e.measureText(m).width > c ? (g.pop(), p.push(g.join("")), g = [ h ]) : d === f.length - 1 && p.push(m);
                }
                for (var v = 0; v < p.length; v++) e.fillText(p[v], a, i + o + v * n, c);
            } else e.fillText(s, a, i + o, c);
            e.restore();
        }
    }, {
        key: "DrawCavas",
        value: function() {
            var e = this, t = this;
            wx.showLoading({
                title: "拼命生成图片中~"
            }), wx.getSystemInfo({
                success: function(e) {
                    t.rpx = e.windowWidth / 750;
                }
            });
            var o = t.getdownloadFile(t.bg_url), n = t.getdownloadFile(t.QR_code);
            console.log(), Promise.all([ o, n ]).then(function(o) {
                var n = o[0], r = o[1], a = wx.createCanvasContext("firstCanvas"), i = t.rpx;
                a.drawImage(n, 0, 0, 610 * i, 750 * i), a.save(), a.beginPath(), a.arc(304 * i, 404 * i, 90 * i, 0, 2 * Math.PI), 
                a.clip(), a.drawImage(r, 214 * i, 314 * i, 180 * i, 180 * i), a.restore(), t.setText(a, "", 24, "", "#D80718", 305, 514, "微信识别二维码", "center"), 
                t.setText(a, "", 24, "", "#D80718", 305, 553, e.orgaName + "邀您参与活动", "center"), 
                a.draw(!1, setTimeout(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "firstCanvas",
                        success: function(e) {
                            wx.hideLoading(), t.cavas_imgUrl = e.tempFilePath, t.$apply();
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, 200));
            });
        }
    } ]), l;
}());

exports.default = l;