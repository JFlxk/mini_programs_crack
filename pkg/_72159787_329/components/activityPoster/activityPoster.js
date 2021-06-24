function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e ? t : e;
}

function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : i(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e;
    };
}(), o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), s = require("./../../api/index.js"), r = require("./../../common/js/util.js"), c = function(i) {
    function c() {
        var a, i, n, o;
        t(this, c);
        for (var s = arguments.length, l = Array(s), h = 0; h < s; h++) l[h] = arguments[h];
        return i = n = e(this, (a = c.__proto__ || Object.getPrototypeOf(c)).call.apply(a, [ this ].concat(l))), 
        n.props = {
            bgImg: {
                type: String
            },
            activityId: {
                type: Number
            },
            name: {
                type: String
            },
            orgaId: {
                type: Number,
                value: null
            },
            main: {
                type: Boolean
            },
            mainColor: {
                type: String
            },
            origin: {
                type: String,
                value: ""
            }
        }, n.data = {
            poster: null,
            componentShow: !1,
            canvasWidth: 937,
            canvasHeight: 1161,
            closeTop: "200rpx"
        }, n.customData = {
            qr: null,
            closeTop: null,
            activityName: null,
            isIOS: null,
            textLeftOffset: 0
        }, n.methods = {
            close: function() {
                this.toggle();
            },
            show: function() {
                this.toggle(), this.poster || this.draw();
            },
            save: function() {
                wx.saveImageToPhotosAlbum({
                    filePath: this.poster,
                    success: function() {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function(t) {
                        wx.getSetting({
                            success: function(e) {
                                !1 === e.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                                    title: "开通权限",
                                    content: "开启相册访问权限才能保存至手机哦",
                                    confirmText: "去开启",
                                    success: function(t) {
                                        t.confirm && wx.openSetting();
                                    }
                                }) : ((0, r.alertText)("保存失败，请重试！"), console.log("保存失败", t));
                            }
                        });
                    }
                });
            }
        }, n.events = {
            show: function() {
                this.toggle(), this.poster || this.draw();
            }
        }, o = i, e(n, o);
    }
    return a(c, o.default.component), n(c, [ {
        key: "toggle",
        value: function() {
            this.componentShow = !this.componentShow, this.$emit("posterToggle");
        }
    }, {
        key: "draw",
        value: function() {
            var t = this;
            if ((0, r.showLoading)("生成图片中…"), this.main) {
                var e = {}, a = "CJActivity" === this.origin ? s.CJActivityPoster : "midaf" === this.origin ? s.MidafPoster : s.GetPoster;
                if ("midaf" === this.origin) {
                    var i = wx.getStorageSync("agencyZoneData");
                    e.orgaId = i && i.orgaId || 1007, this.name = i && i.orgaName;
                }
                a((0, r.getPublicParam)(e)).then(function(e) {
                    var a = e.data;
                    "midaf" === t.origin ? (t.bgImg = "https://reading.oss.iyougu.com/uploads/themeActivities/midaf_posterBg.jpg?v=2", 
                    t.customData.qr = a.replace("http://", "https://")) : (t.name = a.orgaName, t.bgImg = a.imageUrl.replace("http://", "https://"), 
                    t.customData.qr = a.mpQrCodeUrl.replace("http://", "https://")), t.drawFn();
                }).catch(function(t) {
                    console.log(t), wx.hideLoading(), wx.showModal({
                        title: "生成失败",
                        showCancel: !1
                    });
                });
            } else {
                var n = this.origin && -1 != this.origin.indexOf("graduate") ? s.GetGraduationPoster : "schedule" === this.origin ? s.GetActivitySchedulePoster : s.GetPoster_single, o = {};
                "schedule" === this.origin ? o.scheduleId = this.activityId : (o.activityId = this.activityId, 
                this.origin && (o.pagePoster = "graduate" === this.origin ? 1 : 2, o.orgaId = this.orgaId ? this.orgaId : 0)), 
                n((0, r.getPublicParam)(o)).then(function(e) {
                    var a = e.data;
                    t.bgImg = a.fullImg.replace("http://", "https://"), t.customData.qr = a.mpQrCodeUrl.replace("http://", "https://"), 
                    t.name = a.orgaName, t.customData.activityName = a.activityName || a.scheduleName, 
                    t.drawFn();
                }).catch(function(t) {
                    console.log(t), wx.hideLoading(), wx.showModal({
                        title: "生成失败",
                        showCancel: !1
                    });
                });
            }
        }
    }, {
        key: "drawFn",
        value: function() {
            var t = this;
            Promise.all([ this.getBgImg(), this.getQr() ]).then(function(e) {
                var a = wx.createCanvasContext("canvas", t);
                t.drawBgImg(a, e).then(function() {
                    t.drawTitle(a), a.setFontSize(37);
                    var i = (t.canvasWidth - a.measureText("微信识别二维码").width) / 2, n = .886 * t.canvasHeight;
                    t.drawShadow(a, "微信识别二维码", i, n), a.fillStyle = "#FFFFFF", a.fillText("微信识别二维码", i, n), 
                    a.draw(!0), a.setFontSize(33);
                    var o = (t.name ? t.name : "优谷朗读亭") + "邀您参与活动", s = (t.canvasWidth - a.measureText(o).width) / 2, r = .94 * t.canvasHeight;
                    t.drawShadow(a, o, s, r), a.fillStyle = "#FFFFFF", a.fillText(o, s, r), a.draw(!0), 
                    a.shadowColor = "#ffffff";
                    var c = .285 * t.canvasWidth;
                    a.beginPath(), a.arc(t.canvasWidth / 2, .58 * t.canvasHeight + c / 2, (c + 15) / 2, 0, 2 * Math.PI), 
                    a.clip(), a.fill(), a.drawImage(e[1], t.canvasWidth / 2 - c / 2, .58 * t.canvasHeight, c, c), 
                    a.draw(!0, setTimeout(function() {
                        wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: t.canvasWidth,
                            height: t.canvasHeight,
                            destWidth: t.canvasWidth,
                            destHeight: t.canvasHeight,
                            canvasId: "canvas",
                            success: function(e) {
                                wx.hideLoading(), t.poster = e.tempFilePath, t.$apply();
                            },
                            fail: function(t) {
                                console.log("fail", t);
                            }
                        }, t);
                    }, 500));
                });
            }).catch(function(t) {
                console.log(t), wx.hideLoading(), (0, r.alertText)("出错啦！请重试");
            });
        }
    }, {
        key: "drawBgImg",
        value: function(t, e) {
            var a = this;
            return new Promise(function(i, n) {
                if (a.main && "CJActivity" !== a.origin && "midaf" !== a.origin) t.drawImage(e[0].path, 0, 0, a.canvasWidth, a.canvasHeight), 
                t.draw(), i(); else {
                    t.fillStyle = a.mainColor;
                    if (a.judgeIOS()) {
                        var o = wx.createCanvasContext("bgImgCanvas", a);
                        if (o.setFillStyle(a.mainColor), o.fillStyle = a.mainColor, o.beginPath(), o.moveTo(50, 0), 
                        o.arcTo(a.canvasWidth, 0, a.canvasWidth, a.canvasHeight, 25), o.arcTo(a.canvasWidth, a.canvasHeight, 0, a.canvasHeight, 25), 
                        o.arcTo(0, a.canvasHeight, 0, 0, 25), o.arcTo(0, 0, a.canvasWidth, 0, 25), o.clip(), 
                        o.fill(), e[0]) {
                            var s = a.canvasWidth / e[0].width * e[0].height;
                            o.drawImage(e[0].path, 0, 0, a.canvasWidth, s);
                        }
                        o.draw(!0, setTimeout(function() {
                            wx.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: a.canvasWidth,
                                height: a.canvasHeight,
                                destWidth: a.canvasWidth,
                                destHeight: a.canvasHeight,
                                canvasId: "bgImgCanvas",
                                success: function(e) {
                                    t.drawImage(e.tempFilePath, 0, 0, a.canvasWidth, a.canvasHeight), i();
                                },
                                fail: function(t) {
                                    console.log("bgImgCanvas fail", t), i();
                                }
                            }, a);
                        }, 500));
                    } else {
                        if (t.beginPath(), t.moveTo(50, 0), t.arcTo(a.canvasWidth, 0, a.canvasWidth, a.canvasHeight, 25), 
                        t.arcTo(a.canvasWidth, a.canvasHeight, 0, a.canvasHeight, 25), t.arcTo(0, a.canvasHeight, 0, 0, 25), 
                        t.arcTo(0, 0, a.canvasWidth, 0, 25), t.clip(), t.fill(), e[0]) {
                            var r = a.canvasWidth / e[0].width * e[0].height;
                            t.drawImage(e[0].path, 0, 0, a.canvasWidth, r);
                        }
                        t.draw(!0), i();
                    }
                }
            });
        }
    }, {
        key: "drawTitle",
        value: function(t) {
            var e = this.customData.activityName;
            if ("CJActivity" === this.origin ? e = "粤港澳大湾区首届绘本配音大赛" : "midaf" === this.origin && (e = "2020“中秋&国庆”双节主题活动"), 
            e) {
                this.judgeIOS() || (t.shadowOffsetX = 0, t.shadowOffsetY = 2, t.shadowColor = "rgba(0,0,0,0.3)", 
                t.shadowBlur = 4), t.fillStyle = "#FFFFFF", t.setFontSize(40);
                var a = .8 * this.canvasWidth, i = t.measureText(e).width, n = .5 * this.canvasHeight;
                if (i <= a) {
                    var o = (this.canvasWidth - i) / 2;
                    return this.drawShadow(t, e, o, n), t.fillStyle = "#FFFFFF", void t.fillText(e, o, n);
                }
                var s = e.substr(0, 10);
                if (e = e.split("").slice(10), this.drawTitleFn(t, s, e, a, n), e.length) {
                    var r = e.join("");
                    this.drawTitleFn(t, r, e, a, n + 55, !0);
                }
            }
        }
    }, {
        key: "drawTitleFn",
        value: function(t, e, a, i, n, o) {
            if (o) {
                for (var s = !1, r = 0; r < a.length && t.measureText(e).width > i; r++) e = e.substr(0, e.length - 1), 
                s = !0;
                var c = this.getTextLeftOffset(t, e);
                s && (e += "..."), this.drawShadow(t, e, c, n), t.fillStyle = "#FFFFFF", t.fillText(e, c, n);
            } else {
                if (a.length) for (var l = 0; l < a.length && t.measureText(e).width < i; l++) e += a.shift(), 
                l--;
                var h = this.getTextLeftOffset(t, e);
                this.drawShadow(t, e, h, n), t.fillStyle = "#FFFFFF", t.fillText(e, h, n);
            }
        }
    }, {
        key: "getTextLeftOffset",
        value: function(t, e) {
            if (this.customData.textLeftOffset) return this.customData.textLeftOffset;
            var a = (this.canvasWidth - t.measureText(e).width) / 2;
            return this.customData.textLeftOffset = a, a;
        }
    }, {
        key: "drawShadow",
        value: function(t, e, a, i) {
            this.judgeIOS() && (t.fillStyle = "rgba(0,0,0,0.3)", t.fillText(e, a + 1, i + 1), 
            t.fillStyle = "rgba(0,0,0,0.3)", t.fillText(e, a + 2, i + 2));
        }
    }, {
        key: "getBgImg",
        value: function() {
            var t = this;
            return new Promise(function(e, a) {
                t.bgImg || e(null), wx.getImageInfo({
                    src: t.bgImg,
                    success: function(t) {
                        e(t);
                    },
                    fail: function(t) {
                        console.log(t), a("背景图出错");
                    }
                });
            });
        }
    }, {
        key: "getQr",
        value: function() {
            var t = this;
            return new Promise(function(e, a) {
                wx.getImageInfo({
                    src: t.customData.qr,
                    success: function(t) {
                        e(t.path);
                    },
                    fail: function(t) {
                        console.log(t), a("二维码出错");
                    }
                });
            });
        }
    }, {
        key: "setCloseTop",
        value: function() {
            if (this.customData.closeTop) this.closeTop = this.customData.closeTop; else {
                var t = wx.getMenuButtonBoundingClientRect();
                this.closeTop = "calc(" + (t.top + t.height) + "px + 40rpx)", this.customData.closeTop = this.closeTop;
            }
        }
    }, {
        key: "judgeIOS",
        value: function() {
            if (null === this.customData.isIOS) {
                var t = (0, r.isIOS)(wx.getSystemInfoSync().system);
                return this.customData.isIOS = t, t;
            }
            return this.customData.isIOS;
        }
    } ]), c;
}();

exports.default = c;