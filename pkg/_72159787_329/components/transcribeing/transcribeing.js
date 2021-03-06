function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
}

function i(e, t) {
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

var o = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t;
    };
}(), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), s = require("./../../api/config.js"), r = require("./../../common/js/util.js"), c = require("./../../api/index-party.js"), l = requirePlugin("XSEngine"), u = function(a) {
    function u() {
        var i, a, o, s;
        e(this, u);
        for (var c = arguments.length, l = Array(c), d = 0; d < c; d++) l[d] = arguments[d];
        return a = o = t(this, (i = u.__proto__ || Object.getPrototypeOf(u)).call.apply(i, [ this ].concat(l))), 
        o.data = {
            randomArr: [],
            oathRole: [ "?????????????????????", "???????????????", "???????????????" ],
            oathRoleStr: [ "??????", "??????", "??????" ],
            oathArr: [ "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????!", "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" ],
            is_recording: "",
            is_play: !1,
            is_masking: !1,
            is_transcribe: !1,
            is_canvas: !1,
            type: "",
            audioCtx: "",
            initState: !1,
            XSData: null,
            openid: "",
            connectTimes: 0,
            auditionInterval: "",
            recordTimer: "",
            duration: 0,
            durationEnd: "00???00",
            auditionTime: "",
            auditionTimeEnd: "00???00",
            recordUrl: "",
            overall: "",
            iconArr: [ [ "https://reading.oss.iyougu.com/uploads/cardBgImg/fc8632c7e992491bb696f2ba567d1884.png", "https://reading.oss.iyougu.com/uploads/cardBgImg/32b53b4013fb48ae93cd67785b66e43e.png" ], [ "https://reading.oss.iyougu.com/uploads/cardBgImg/600b25d502654abf90b9f5b3fd483a27.png", "https://reading.oss.iyougu.com/uploads/cardBgImg/650933f0d15347dc93715d2a0732c261.png" ], [ "https://reading.oss.iyougu.com/uploads/cardBgImg/f44822c7c45741bda9ffb2d1f5b61487.png", "https://reading.oss.iyougu.com/uploads/cardBgImg/971bdca9e7db4163b900ff653d5cd387.png" ] ],
            bg_url: [ "https://reading.oss.iyougu.com/uploads/cardBgImg/725f7b11c92b4144a1770a9e80052b2f.png", "https://reading.oss.iyougu.com/uploads/cardBgImg/5b137fd3523541bf905fdbd64051863e.png", "https://reading.oss.iyougu.com/uploads/cardBgImg/19dd01adacd740d59893f5e24eb09b08.png" ],
            QR_code: "",
            orgaName: "",
            rpx: 1,
            cardText: [],
            cavas_imgUrl: "",
            sessionId: "",
            fileUrl: "",
            oathId: "",
            createTime: "",
            is_submit: !1,
            isEvalMessage: !1,
            nickName: null,
            context: "",
            resourceId: ""
        }, o.watch = {
            duration: function(e, t) {
                this.durationEnd = (0, r.formatTime)(e, 1), this.auditionTime = e, this.$apply();
            },
            auditionTime: function(e, t) {
                this.auditionTimeEnd = (0, r.formatTime)(e, 1), this.$apply();
            },
            is_canvas: function(e, t) {
                this.is_masking = !(!e && !this.is_transcribe);
            },
            is_transcribe: function(e, t) {
                this.is_masking = !(!e && !this.is_canvas);
            }
        }, o.events = {
            show: function(e) {
                this.sessionId = (0, r.getSessionId)("sessionId"), console.log(e, "------------??????---------", this.sessionId), 
                this.type = e.type, this.oathId = e.oathId, this.is_canvas = e.is_canvas, this.resourceId = e.resourceId, 
                this.openid = n.default.$instance.globalData.userOpenid;
                if (this.initAudio(), this.is_canvas && this.getOathDetails(), e.is_transcribe) {
                    for (var t = 0; t < 30; t++) this.randomArr[t] = Math.random();
                    this.getJurisdiction();
                }
                this.$apply();
            }
        }, o.methods = {
            TapStartRecord: function() {
                this.startRecord();
            },
            TapAnewRecord: function() {
                var e = this;
                if (this.isAnewRecord) return !1;
                this.isAnewRecord = !0, (0, r.showLoading)("??????????????????~"), this.resetRecord(), setTimeout(function() {
                    e.startRecord();
                }, 1e3);
            },
            TapEndRecord: function() {
                this.duration < 8 ? (0, r.alertText)("????????????????????????8???") : (clearInterval(this.recordTimer), 
                this.auditionTime = this.duration, this.XSData.stopRecord(), this.is_recording = "end"), 
                this.$apply();
            },
            play: function() {
                this.is_play ? (this.audioCtx.pause(), this.is_play = !1, clearInterval(this.auditionInterval)) : this.audioCtx.play(), 
                this.$apply();
            },
            submit: function() {
                return this.isEvalMessage ? !this.is_submit && (this.is_submit = !0, this.type && this.overall < 75 ? ((0, 
                r.alertText)("????????????????????????????????????????????????????????????~", 2e3), void (this.is_submit = !1)) : (this.upfile(), 
                void this.$apply())) : (console.log("????????????????????????????????????~"), !1);
            },
            subCard: function() {
                var e = this;
                wx.getSetting({
                    success: function(t) {
                        !1 === t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
                            title: "??????",
                            content: "????????????????????????????????????????????????????????????",
                            success: function(e) {
                                e.confirm ? wx.openSetting({
                                    success: function(e) {
                                        console.log(e.authSetting);
                                    }
                                }) : e.cancel && console.log("??????????????????");
                            }
                        }) : wx.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: function(t) {
                                console.log("------------------------that.cavas_imgUrl-------------------------", e.cavas_imgUrl), 
                                e.cavas_imgUrl ? e.setImageToPhotosAlbum() : e.context.draw(!0, setTimeout(function() {
                                    wx.canvasToTempFilePath({
                                        canvasId: "firstCanvas",
                                        success: function(t) {
                                            wx.hideLoading(), e.cavas_imgUrl = t.tempFilePath, e.setImageToPhotosAlbum(), e.$apply();
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        }
                                    });
                                }, 200));
                            },
                            fail: function(e) {
                                (0, r.alertText)("????????????????????????????????????????????????");
                            }
                        });
                    }
                });
            },
            TapCloseCard: function() {
                this.resetColse();
            }
        }, s = a, t(o, s);
    }
    return i(u, n.default.component), o(u, [ {
        key: "resetRecord",
        value: function() {
            this.is_recording = "", this.duration = 0, this.recordUrl = "", this.overall = "", 
            this.is_play = !1, this.auditionTime = 0, clearInterval(this.auditionInterval), 
            clearInterval(this.recordTimer), this.auditionInterval = null, this.recordTimer = null, 
            this.XSData && this.XSData.stopRecord(), this.initState = !1, this.audioCtx && this.audioCtx.stop(), 
            this.isEvalMessage = !1, this.is_submit = !1, this.$apply();
        }
    }, {
        key: "getJurisdiction",
        value: function() {
            var e = this;
            wx.getSetting({
                success: function(t) {
                    t.authSetting["scope.record"] ? e.initState || e.reviewsInit() : e.authorized();
                },
                fail: function() {},
                complete: function() {}
            });
        }
    }, {
        key: "resetColse",
        value: function() {
            wx.hideLoading(), this.is_canvas = !1, this.is_masking = !1, this.is_transcribe = !1, 
            this.resourceId = "", this.resetRecord(), this.XSData && this.XSData.destroyEngine(), 
            this.$apply();
        }
    }, {
        key: "upfile",
        value: function() {
            var e = this;
            wx.uploadFile({
                url: s.baseUrl + "/v1/opus/uploadOpusFile",
                filePath: this.recordUrl,
                name: "opusFile",
                header: {
                    "Content-Type": "multipart/form-data"
                },
                formData: {
                    sessionId: this.sessionId
                },
                success: function(t) {
                    var i = JSON.parse(t.data);
                    2e5 == i.code ? ((0, r.log)("???????????????", i), e.fileUrl = i.data, e.type && e.postSaveOath(i.data), 
                    e.resourceId && e.savePerception(i.data)) : (e.is_submit = !1, (0, r.log)("???????????????", i), 
                    (0, r.alert)(i.message)), e.$apply();
                },
                fail: function(e) {
                    this.is_submit = !1, (0, r.log)("???????????????", e), (0, r.alert)("????????????,?????????"), "uploadFile:fail socket timeout error" == e.errMsg && (0, 
                    r.alert)("????????????,?????????"), this.$apply();
                }
            }).onProgressUpdate(function(e) {
                (0, r.log)("????????????", e.progress);
            });
        }
    }, {
        key: "postSaveOath",
        value: function(e) {
            var t = this;
            (0, c.PostSaveOath)({
                oathType: this.type,
                yunUrl: e
            }).then(function(e) {
                (0, r.log)("???????????????", e), 2e5 == e.code ? ((0, r.alertText)("???????????????????????????~???????????????"), t.oathId = e.data, 
                t.getOathDetails(), t.$apply(), t.$emit("refresh")) : (t.is_submit = !1, (0, r.log)("?????????????????????", err), 
                (0, r.alertText)(e.message)), t.$apply();
            }).catch(function(e) {
                t.is_submit = !1, (0, r.alertText)(res.message), (0, r.log)(e), t.$apply();
            });
        }
    }, {
        key: "savePerception",
        value: function(e) {
            var t = this;
            (0, c.SavePerception)({
                duration: this.duration,
                resourceId: this.resourceId,
                yunUrl: e
            }).then(function(e) {
                (0, r.log)("???????????????", e), 2e5 == e.code ? ((0, r.alertText)("??????????????????????????????????????????"), t.is_submit = !1, 
                t.$emit("refresh"), t.resetColse(), t.$apply()) : (t.is_submit = !1, (0, r.log)("?????????????????????", err), 
                (0, r.alertText)(e.message)), t.$apply();
            }).catch(function(e) {
                t.is_submit = !1, (0, r.alertText)(res.message), (0, r.log)(e), t.$apply();
            });
        }
    }, {
        key: "setImageToPhotosAlbum",
        value: function() {
            var e = this;
            wx.saveImageToPhotosAlbum({
                filePath: e.cavas_imgUrl,
                success: function(e) {
                    wx.showToast({
                        title: "?????????????????????",
                        icon: "success"
                    });
                },
                fail: function(e) {
                    wx.showToast({
                        title: "?????????????????????",
                        icon: "none"
                    });
                }
            });
        }
    }, {
        key: "authorized",
        value: function() {
            wx.authorize({
                scope: "scope.record",
                success: function() {},
                fail: function() {
                    wx.showModal({
                        title: "??????",
                        content: "??????????????????????????????????????????",
                        showCancel: !0,
                        confirmText: "??????",
                        cancelText: "??????",
                        cancelColor: "#ccc",
                        confirmColor: "#3B87DD",
                        success: function(e) {
                            e.confirm ? wx.openSetting({
                                success: function(e) {
                                    console.log(e.authSetting);
                                },
                                fail: function() {
                                    console.log("????????????????????????");
                                }
                            }) : e.cancel && console.log("cancel");
                        },
                        fail: function() {
                            console.log("openfail");
                        }
                    });
                }
            });
        }
    }, {
        key: "reviewsInit",
        value: function() {
            var e = this, t = this;
            (0, r.showLoading)("???????????????????????????...."), t.XSData = new l.ssEngine({
                appid: "a309",
                userid: t.openid,
                logOpen: !0,
                coreType: "cn.pred.score",
                healthyCheckTime: 2e3,
                engineFirstInitDone: function() {
                    (0, r.log)("engine first init done"), (0, r.hideLoading)(), t.initState = !0, t.is_transcribe = !0, 
                    t.is_masking = !0, t.$apply();
                },
                getEvalMessage: function(i) {
                    t.initState = !0, console.log(i, "-------------------------????????????????????????-----------------------"), 
                    1 == i.eof && (console.log("???????????????", i), t.isEvalMessage = !0, t.overall = i.result.overall, 
                    t.XSData.stopRecord(), clearInterval(e.recordTimer), e.auditionTime = e.duration, 
                    e.isAnewRecord ? e.is_recording = "" : e.is_recording = "end"), t.$apply();
                },
                getRequestId: function(e) {
                    (0, r.log)("======= request_id = " + e);
                },
                noAvailableWS: function() {
                    t.connectTimes > 3 ? ((0, r.hideLoading)(), t.initState = !1, (0, r.alertText)("???????????????????????????????????????", 3e3)) : t.connectTimes += 1, 
                    t.$apply();
                },
                getAvailableWS: function() {
                    (0, r.log)("??????ws????????????");
                },
                recorderCallback: function(e, i) {
                    "onStop" == e ? ((0, r.log)("????????????????????????", i), t.recordUrl = i.tempFilePath, t.audioCtx.src = t.recordUrl, 
                    clearInterval(t.recordTimer), t.recordTimer = null) : (0, r.log)("===== ????????? =====,", e, i), 
                    t.$apply();
                }
            }), t.$apply();
        }
    }, {
        key: "startRecord",
        value: function() {
            var e = this;
            if ((0, r.hideLoading)(), this.isAnewRecord = !1, "underway" == this.is_recording) return !1;
            this.is_recording = "underway";
            var t = this.type ? t = this.oathArr[this.type - 1] : "refText????????????";
            console.log(t, "-----------------------refText---------------------------------------------------"), 
            this.XSData.startRecord({
                coreType: "cn.pred.score",
                evalTime: 3e5,
                refText: t
            }), this.recordTimer = setInterval(function() {
                e.duration += 1, e.$apply();
            }, 1e3);
        }
    }, {
        key: "initAudio",
        value: function() {
            var e = this;
            this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.onPlay(function() {
                e.is_play = !0, e.auditionInterval = setInterval(function() {
                    if (e.is_canvas) return clearInterval(e.auditionInterval), !1;
                    e.auditionTime -= 1, 0 == e.auditionTime && (e.auditionTime = 0, e.$apply(), setTimeout(function() {
                        e.is_play = !1, e.auditionTime = e.duration, clearInterval(e.auditionInterval), 
                        e.auditionInterval = null, e.audioCtx.stop(), e.$apply();
                    }, 1e3));
                }, 1e3), e.$apply();
            }), this.audioCtx.onTimeUpdate(function(t) {
                e.$apply();
            }), this.audioCtx.onStop(function() {
                console.log("????????????"), e.is_play = !1, e.auditionTime = e.duration, clearInterval(e.auditionInterval), 
                e.auditionInterval = null, e.$apply();
            }), this.audioCtx.onEnded(function() {
                console.log("????????????"), e.is_play = !1, e.auditionTime = e.duration, clearInterval(e.auditionInterval), 
                e.auditionInterval = null, e.$apply();
            }), this.audioCtx.onError(function(e) {
                console.log("????????????", e);
            });
        }
    }, {
        key: "getdownloadFile",
        value: function(e) {
            return new Promise(function(t, i) {
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
        value: function(e, t, i, a, o, n, s, r, c, l) {
            var u = this;
            if (i *= u.rpx, a ? a *= u.rpx : a = "", n *= u.rpx, s *= u.rpx, l ? l *= u.rpx : l = "", 
            e.setFontSize(i), e.setFillStyle(o), e.setTextAlign(c), t) {
                for (var d = r.split(""), h = [], p = [], f = 0; f < d.length; f++) {
                    var g = d[f];
                    p.push(g);
                    var m = p.join("");
                    e.measureText(m).width > l ? (p.pop(), h.push(p.join("")), p = [ g ]) : f === d.length - 1 && h.push(m);
                }
                for (var v = 0; v < h.length; v++) e.fillText(h[v], n, s + i + v * a, l);
            } else e.fillText(r, n, s + i, l);
            e.restore();
        }
    }, {
        key: "DrawCavas",
        value: function() {
            var e = this, t = this;
            wx.showLoading({
                title: "?????????????????????~"
            }), wx.getSystemInfo({
                success: function(e) {
                    t.rpx = e.windowWidth / 750;
                }
            });
            var i = "";
            i = this.createTime ? new Date(this.createTime) : new Date(), this.cardText = [ "    ??????" + i.getFullYear() + "???" + (i.getMonth() + 1) + "???" + i.getDate() + "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", "    ??????" + i.getFullYear() + "???" + (i.getMonth() + 1) + "???" + i.getDate() + "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????", "    ??????" + i.getFullYear() + "???" + (i.getMonth() + 1) + "???" + i.getDate() + "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" ];
            var a = t.getdownloadFile(t.bg_url[t.type - 1]), o = t.getdownloadFile(t.QR_code);
            Promise.all([ a, o ]).then(function(a) {
                var o = a[0], n = a[1], s = wx.createCanvasContext("firstCanvas");
                e.context = s;
                var r = t.rpx, c = t.type - 1, l = "";
                switch (c) {
                  case 0:
                    l = "#D80718";
                    break;

                  case 1:
                    l = "#8F5024";
                    break;

                  case 2:
                    l = "#DF4E1C";
                }
                s.drawImage(o, 0, 0, 702 * r, 916 * r), t.setText(s, "", 28, "", "#333333", 95, 150, e.nickName, "left", 527), 
                t.setText(s, "", 28, "", "#333333", 95, 150, e.nickName, "left", 527), t.setText(s, "", 28, "", "#333333", 95, 150, e.nickName, "left", 527), 
                t.setText(s, 1, 26, 48, "#333333", 95, 207, t.cardText[c], "", 527), t.setText(s, "", 26, "", "#333333", 480, 361, i.getFullYear() + "." + (i.getMonth() + 1) + "." + i.getDate()), 
                s.setStrokeStyle(l), s.strokeRect(268 * r, 443 * r, 164 * r, 164 * r), t.setText(s, "", 20, "", "#999999", 350, 614, "?????????????????????", "center", 527), 
                t.setText(s, "", 22, "", "#333333", 350, 644, t.orgaName, "center", 527), t.setText(s, "", 22, "", "#333333", 350, 644, t.orgaName, "center", 527), 
                t.setText(s, "", 20, "", "rgba(255, 255, 255, 0.5)", 350, 808, "????????????????????????????????????", "center", 527), 
                s.save(), s.drawImage(n, 275 * r, 450 * r, 150 * r, 150 * r), s.restore(), s.draw(!1, setTimeout(function() {
                    wx.canvasToTempFilePath({
                        canvasId: "firstCanvas",
                        success: function(e) {
                            wx.hideLoading(), t.cavas_imgUrl = e.tempFilePath, t.$apply();
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, 500));
            });
        }
    }, {
        key: "getOathDetails",
        value: function() {
            var e = this;
            (0, c.GetOathDetails)({
                oathId: this.oathId
            }).then(function(t) {
                (0, r.log)("????????????????????????", t), 2e5 == t.code ? (e.resetRecord(), e.orgaName = t.data.orgaName || "", 
                e.QR_code = t.data.imageUrl, e.type = t.data.oathType, e.audioCtx.src = t.data.yunUrl, 
                e.is_transcribe = !1, e.is_canvas = !0, e.is_submit = !1, e.createTime = t.data.createTime, 
                e.nickName = t.data.nickName + (3 == t.data.oathType ? "?????????" : "?????????"), e.DrawCavas(), 
                e.$apply()) : (e.is_submit = !1, (0, r.log)("?????????????????????????????????", err), (0, r.alertText)(t.message));
            }).catch(function(t) {
                e.is_submit = !1, (0, r.alertText)(res.message), (0, r.log)(t);
            });
        }
    }, {
        key: "onHide",
        value: function() {
            this.XSData && this.XSData.destroyEngine();
        }
    }, {
        key: "onUnload",
        value: function() {
            this.XSData && this.XSData.destroyEngine();
        }
    } ]), u;
}();

exports.default = u;