function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function a(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
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
});

var n = function() {
    function t(t, e) {
        var a = [], o = !0, i = !1, n = void 0;
        try {
            for (var r, s = t[Symbol.iterator](); !(o = (r = s.next()).done) && (a.push(r.value), 
            !e || a.length !== e); o = !0) ;
        } catch (t) {
            i = !0, n = t;
        } finally {
            try {
                !o && s.return && s.return();
            } finally {
                if (i) throw n;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), r = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var o = e[a];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, a, o) {
        return a && t(e.prototype, a), o && t(e, o), e;
    };
}(), s = t(require("./../../npm/wepy/lib/wepy.js")), c = t(require("./../../components/navBar/navBar.js")), l = t(require("./../../components/dialog/dialog.js")), u = t(require("./../../components/materialMistake/materialMistake.js")), d = t(require("./../../components/recordHelp/recordHelp.js")), h = t(require("./../../components/readContent/readContent.js")), p = require("./../../api/config.js"), g = require("./../../api/index.js"), m = require("./../../common/js/util.js"), v = t(require("./../../common/js/mixin.js")), f = function(t) {
    function i() {
        var t, o, n, r;
        e(this, i);
        for (var s = arguments.length, p = Array(s), g = 0; g < s; g++) p[g] = arguments[g];
        return o = n = a(this, (t = i.__proto__ || Object.getPrototypeOf(i)).call.apply(t, [ this ].concat(p))), 
        n.config = {
            navigationBarTextStyle: "white",
            navigationBarTitleText: "朗读",
            usingComponents: {
                "wxc-dialog": "../../packages/@minui/wxc-dialog/dist/index"
            }
        }, n.$repeat = {}, n.$props = {
            navBar: {
                back: "true",
                home: "true",
                text: "朗读",
                backConfirm: "true",
                "xmlns:v-bind": "",
                "v-bind:navigationBarHeight.sync": "paddingTop"
            },
            materialMistake: {
                "v-bind:textId.sync": "textId"
            },
            readContent: {
                "v-bind:content.sync": "textContent"
            }
        }, n.$events = {}, n.components = {
            navBar: c.default,
            materialMistake: u.default,
            recordHelp: d.default,
            readContent: h.default,
            Dialog: l.default
        }, n.mixins = [ v.default ], n.data = {
            paddingTop: "128rpx",
            isFirstLoad: !0,
            loadingLeft: 0,
            isShowMask: !1,
            isCanSelctMusicOrText: !0,
            musicName: "",
            startDuration: 3,
            recordDuration: 0,
            recordDurationText: "00:00",
            tempFilePath: null,
            tempFilePath_video: null,
            timerRecord: null,
            timerRecord_video: null,
            recordPercent: 0,
            textId: null,
            textTitle: "",
            textAuthor: "",
            textContent: "",
            isCollect: !1,
            isCustom: !1,
            checkedStatus: 0,
            textAlign: "",
            isShowLibrary: !1,
            recordType: "audio",
            recordState_audio: "init",
            recordState_video: "init",
            video: null,
            videoTimeAlertShow: !1,
            videoFinishShow: !1,
            cameraPosi: "front",
            recordTypeShow: !0,
            materialShow: !1,
            readingContentShow: !0,
            volumeDialogShow: !1,
            giveUpDialogShow: !1,
            videoRestTime: 30,
            videoPercent: 100,
            videoDuration: "",
            playVideoShow: !0,
            isFullScreen: !0,
            backTop: "65rpx",
            helpTop: "169rpx",
            switchTop: "165rpx",
            readingContentTop: "285rpx",
            audioTimeWarnShow: !1,
            contentHeight: "100%",
            freeReading: null,
            previewBoxHeight: "calc(100vh - 480rpx)",
            specified: "",
            organizatio_id: "",
            fileUrl: "",
            startRecordLock: !1,
            soundCardData: null,
            opusId: ""
        }, n.customData = {
            isIOS: null,
            sessionId: null,
            innerAudioContext: null,
            cameraContext: null,
            progressWidth: 0,
            videoPath: null,
            posterPath: null,
            countInterval: null,
            musicUrl: null,
            dialog: null,
            videoContext: null,
            menuButton: null,
            videoRecordStopping: !1,
            recordStartTime: null,
            recordPauseTime: null,
            recordPauseDuration: 0,
            activityId: null,
            activityName: null,
            logined: null,
            previewBoxHeight: null,
            bgmTimeout: null,
            recommandMusicGetting: null
        }, n.methods = {
            tapFreeReading: function() {
                this.freeReading = !0, this.isShowLibrary = !1;
            },
            showRemind: function() {
                this.$invoke("recordHelp", "toggle");
            },
            tpa_errorBtn: function() {
                this.$invoke("materialMistake", "toggle");
            },
            toggleCheckedStatus: function() {
                this.checkedStatus = !this.checkedStatus && 1;
            },
            toggleReadingContent: function() {
                this.readingContentShow = !this.readingContentShow;
            },
            back: function() {
                var t = this;
                "init" !== this.recordState_video ? this.$invoke("Dialog", "show", {
                    content: "退出后，将不记录本次朗读作品，确定退出吗？",
                    confirm: function() {
                        t.customBack(), t.$invoke("Dialog", "hide");
                    }
                }) : this.customBack();
            },
            switchCamera: function() {
                this.cameraPosi = "front" === this.cameraPosi ? "back" : "front";
            },
            playVideo: function() {
                this.videoPercent = 100, this.customData.videoContext || (this.customData.videoContext = wx.createVideoContext("video")), 
                this.customData.videoContext.play();
            },
            videoPlay: function() {
                this.playVideoShow = !1, this.$apply();
            },
            videoPause: function() {
                this.playVideoShow = !0, this.$apply();
            },
            videoEnd: function() {
                this.playVideoShow = !0, this.$apply();
            },
            videoTimeUpdate: function(t) {
                this.videoPercent = 100 - t.detail.currentTime / t.detail.duration * 100, this.customData.videoDurationInited || (this.videoDuration = String(Math.floor(t.detail.duration)).padStart(2, "0"), 
                this.customData.videoDurationInited = !0), this.$apply();
            },
            videoError: function(t) {
                console.log("videoError", t);
            },
            collect_tap: function() {
                this.isCollect ? this.loadCancelResource() : this.loadAddResource();
            },
            showLibrary: function() {
                this.isShowLibrary = !0;
            },
            hideLibrary: function() {
                this.isShowLibrary = !1;
            },
            toggleMaterial: function() {
                this.materialShow = !this.materialShow;
            },
            onConfirm: function() {
                this.stopAudioRecord();
            },
            setEarphone: function(t) {
                this.hasEarphone = !!t, this.hideVolumeDialog(), "audio" === this.recordType ? this.recordAudioFn() : this.recordVideoFn();
            },
            onCancel: function() {
                this.hideDialog();
            },
            go: function(t) {
                if ("video" !== this.recordType || "init" === this.recordState_video) switch ((0, 
                m.log)(t), t) {
                  case "library":
                    (0, m.log)("跳转优谷文库"), (0, m.skip)("/packageReading/pages/library/library?fromRecording=true&specified=" + this.specified + (this.customData.activityId ? "&activityId=" + this.customData.activityId + "&activityName=" + this.customData.activityName : "")), 
                    this.isShowLibrary = !1, console.log("跳转优谷文库=======");
                    break;

                  case "upload":
                    (0, m.log)("跳转添加素材"), (0, m.skip)("/packageIndex/pages/addMaterial/addMaterial?type=reading"), 
                    this.isShowLibrary = !1;
                    break;

                  case "music":
                    if (!this.isCanSelctMusicOrText) break;
                    (0, m.log)("跳转背景音乐"), (0, m.skip)("/packageReading/pages/music/music");
                }
            },
            save: function() {
                var t = this;
                console.log("走 save方法", this.opusId), "end" === this.recordState_audio ? this.upload() : (this.recorderManager.onStop(function(e) {
                    (0, m.log)("录音结束，结果为：", e, "当前录制的时间：" + t.recordDuration), t.tempFilePath = e.tempFilePath;
                    var a = Math.round(e.duration / 1e3);
                    t.recordDuration = a < t.recordDuration || t.recordDuration <= 0 ? a : t.recordDuration, 
                    t.upload(), t.recorderManager.onStop(function(e) {
                        t.recordEnd(e);
                    });
                }), this.recorderManager.stop());
            },
            save_video: function() {
                !this.playVideoShow && this.customData.videoContext && this.customData.videoContext.pause(), 
                this.upload_video();
            },
            chooseVideo: function() {
                var t = this;
                this.customData.chooseVideoLock || (this.customData.chooseVideoLock = !0, setTimeout(function() {
                    t.customData.chooseVideoLock = !1;
                }, 800), wx.chooseVideo({
                    compressed: !0,
                    sourceType: [ "album" ],
                    success: function(e) {
                        return e.size > 73400320 ? wx.showModal({
                            title: "压缩后视频大于70M(压缩后:" + (e.size / 1048576).toFixed(1) + "M),请处理视频大小后重新上传"
                        }) : e.duration < 5 ? wx.showModal({
                            title: "视频长度不能少于5秒"
                        }) : (t.$preload("videoData", e), void (t.soundCardData ? (0, m.skip)("/packageReading/pages/previewUserVideo/previewUserVideo?soundCardData=" + JSON.stringify(t.soundCardData) + "&fromApplyLeadOpus=" + t.fromApplyLeadOpus + (t.$parent.globalData.textTitle ? "&worksTitle=" + t.$parent.globalData.textTitle : "") + (t.customData.activityId ? "&activityId=" + t.customData.activityId + "&activityName=" + t.customData.activityName : "")) : (0, 
                        m.skip)("/packageReading/pages/previewUserVideo/previewUserVideo?fromApplyLeadOpus=" + t.fromApplyLeadOpus + (t.$parent.globalData.textTitle ? "&worksTitle=" + t.$parent.globalData.textTitle : "") + (t.customData.activityId ? "&activityId=" + t.customData.activityId + "&activityName=" + t.customData.activityName : ""))));
                    }
                }));
            },
            showGiveUpDialog: function() {
                this.giveUpDialogShow = !0;
            },
            hideGiveUpDialog: function() {
                this.giveUpDialogShow = !1;
            },
            giveUpVideo: function() {
                this.giveUpDialogShow = !1, this.resetVideo();
            },
            startRecord_video: function() {
                var t = this;
                if (!this.startRecordLock) {
                    this.startRecordLock = !0, setTimeout(function() {
                        t.startRecordLock = !1;
                    }, 1e3);
                    wx.authorize({
                        scope: "scope.camera",
                        success: function() {
                            t.showVolumeDialog();
                        },
                        fail: function() {
                            wx.showModal({
                                title: "提示",
                                content: "您未授权摄像头，功能将无法使用",
                                showCancel: !0,
                                confirmText: "授权",
                                cancelText: "取消",
                                cancelColor: "#ccc",
                                confirmColor: "#3B87DD",
                                success: function(t) {
                                    t.confirm ? wx.openSetting({
                                        success: function(t) {
                                            console.log(t.authSetting);
                                        },
                                        fail: function() {
                                            console.log("授权设置录音失败");
                                        }
                                    }) : t.cancel && console.log("cancel");
                                },
                                fail: function() {
                                    console.log("openfail");
                                }
                            });
                        }
                    });
                }
            },
            stopVideoRecord: function() {
                this.stopVideoRecordFn();
            },
            showVideoFinish: function() {
                var t = this;
                this.videoFinishShow || (this.videoFinishShow = !0, this.$apply(), setTimeout(function() {
                    t.videoFinishShow = !1, t.$apply();
                }, 3e3));
            },
            startRecord: function() {
                var t = this;
                this.startRecordLock || (this.startRecordLock = !0, setTimeout(function() {
                    t.startRecordLock = !1;
                }, 1e3), "init" === this.recordState_audio ? (this.recordTypeShow && (this.recordTypeShow = !1), 
                wx.authorize({
                    scope: "scope.record",
                    success: function() {
                        t.showVolumeDialog();
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "您未授权录音，功能将无法使用",
                            showCancel: !0,
                            confirmText: "授权",
                            cancelText: "取消",
                            cancelColor: "#ccc",
                            confirmColor: "#3B87DD",
                            success: function(t) {
                                t.confirm ? wx.openSetting({
                                    success: function(t) {
                                        console.log(t.authSetting);
                                    },
                                    fail: function() {
                                        console.log("授权设置录音失败");
                                    }
                                }) : t.cancel && console.log("cancel");
                            },
                            fail: function() {
                                console.log("openfail");
                            }
                        });
                    }
                })) : "paused" === this.recordState_audio ? (this.recordState_audio = "working", 
                this.$apply(), this.customData.isIOS ? setTimeout(function() {
                    t.playMusic(), t.recorderManager.resume();
                }, 100) : (this.playMusic(), this.recorderManager.resume())) : "working" === this.recordState_audio ? (this.recorderManager.pause(), 
                clearInterval(this.timerRecord), this.recordState_audio = "paused", this.$apply(), 
                this.pauseMusic()) : (0, m.alert)("已到最大时长", "", "../../common/images/warning.png"));
            },
            restartRecord: function() {
                (0, m.log)("点击了重录按钮。。。"), this.showDialog();
            },
            close: function() {
                (0, m.log)("close前：", this.$parent.globalData), this.clearData(), (0, m.log)("close后：", this.$parent.globalData), 
                this.$apply();
            },
            setRecordType: function(t) {
                this.recordType !== t && (this.recordType = t);
            }
        }, n.events = {
            backConfirm: function() {
                var t = this;
                "init" !== this.recordState_audio ? this.$invoke("Dialog", "show", {
                    content: "退出后，将不记录本次朗读作品，确定退出吗？",
                    confirm: function() {
                        t.customBack(), t.$invoke("Dialog", "hide");
                    }
                }) : this.customBack();
            }
        }, r = o, a(n, r);
    }
    return o(i, s.default.page), r(i, [ {
        key: "clearData",
        value: function() {
            this.textContent = "", this.$parent.globalData.textId = null, this.textTitle = this.$parent.globalData.textTitle = null, 
            this.$parent.globalData.worksTitle = null, this.$parent.globalData.textAuthor = null, 
            this.$parent.globalData.textContent = null, this.$parent.globalData.isCollect = !1, 
            this.$parent.globalData.isCustom = !1, (0, m.log)("close后：", this.$parent.globalData);
        }
    }, {
        key: "customBack",
        value: function() {
            wx.navigateBack({
                fail: function() {
                    wx.redirectTo({
                        url: "/pages/mainpage/mainpage"
                    });
                }
            });
        }
    }, {
        key: "resetAudioRecord",
        value: function() {
            this.recordState_audio = "init", this.loadingLeft = 0, this.recordPercent = 0, this.recordDuration = 0, 
            this.recordDurationText = "00:00", this.customData.recordPauseTime = null, this.customData.recordPauseDuration = 0, 
            this.isCanSelctMusicOrText = !0, this.audioTimeWarnShow = !1, this.resetMusic();
        }
    }, {
        key: "stopAudioRecord",
        value: function() {
            var t = this;
            this.loadingLeft = 0, this.recordPercent = 0, this.recordDuration = 0, this.startDuration = 3, 
            this.recordDurationText = "00:00", this.isCanSelctMusicOrText = !0, this.recordState_audio = "init", 
            this.$apply(), this.stopMusic(), clearInterval(this.timerRecord), this.recorderManager.onStop(function(e) {
                t.recorderManager.onStop(function(e) {
                    t.recordEnd(e);
                });
            }), this.recorderManager.stop(), this.audioTimeWarnShow = !1, this.hideDialog(), 
            this.customData.recordPauseDuration = 0;
        }
    }, {
        key: "checkEarphone",
        value: function(t, e, a) {
            var o = this;
            return new Promise(function(i, n) {
                if (o.hasEarphone && o.$parent.globalData.musicUrl) {
                    var r = e <= o.$parent.globalData.musicDuration ? o.$parent.globalData.musicUrl : o.$parent.globalData.longMusicUrl, s = wx.createMediaContainer();
                    wx.downloadFile({
                        url: r,
                        success: function(e) {
                            var n = e.tempFilePath;
                            s.extractDataSource({
                                source: n
                            }), s.extractDataSource({
                                source: n,
                                success: function(e) {
                                    for (var n = 0; n < e.tracks.length; n++) if ("audio" === e.tracks[n].kind) {
                                        s.addTrack(e.tracks[n]);
                                        break;
                                    }
                                    s.extractDataSource({
                                        source: t,
                                        success: function(e) {
                                            for (var n = 0; n < e.tracks.length; n++) if ("video" === a) s.addTrack(e.tracks[n]); else if ("audio" === e.tracks[n].kind) {
                                                s.addTrack(e.tracks[n]);
                                                break;
                                            }
                                            s.export({
                                                success: function(t) {
                                                    if (o.customData.isIOS) i(t.tempFilePath); else {
                                                        for (var e = t.tempFilePath.split("//"), a = e[1].split("/"), n = a[a.length - 1].split("."), r = "", s = 0; s < a.length - 1; s++) r += a[s] + "/";
                                                        var c = e[0] + "//" + r + new Date().getTime() + "." + n[1];
                                                        wx.getFileSystemManager().renameSync(t.tempFilePath, c), i(c);
                                                    }
                                                },
                                                fail: function(e) {
                                                    o.mergeFail(e), i(t);
                                                }
                                            });
                                        },
                                        fail: function(e) {
                                            o.mergeFail(e), i(t);
                                        }
                                    });
                                }
                            });
                        },
                        fail: function(e) {
                            o.mergeFail(e), i(t);
                        }
                    });
                } else i(t);
            });
        }
    }, {
        key: "mergeFail",
        value: function(t) {
            console.log("mergeFail", t);
        }
    }, {
        key: "upload",
        value: function() {
            var t = this, e = this;
            (0, m.showLoading)("合成中..."), this.checkEarphone(this.tempFilePath, this.recordDuration, "audio").then(function(a) {
                var o = {
                    sessionId: t.customData.sessionId
                };
                t.hasEarphone && t.$parent.globalData.musicUrl ? (o.isTransFormat = 1, t.$parent.globalData.mergeOpusLocal = a) : t.$parent.globalData.mergeOpusLocal = null, 
                wx.uploadFile({
                    url: p.baseUrl + "/v1/opus/uploadOpusFile",
                    filePath: a,
                    name: "opusFile",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    formData: o,
                    success: function(a) {
                        (0, m.hideLoading)(), (0, m.log)("合成完成===>：", a);
                        var o = JSON.parse(a.data);
                        if (2e5 == o.code) {
                            var i = o.data;
                            e.$parent.globalData.file = i, e.$parent.globalData.duration = t.recordDuration, 
                            e.textTitle || (e.$parent.globalData.isCustom = !0), t.soundCardData ? t.saveToWorks("draft", e.$parent.globalData.file, e.$parent.globalData.duration) : (0, 
                            m.skip)("/packageReading/pages/preview/preview?fromApplyLeadOpus=" + e.fromApplyLeadOpus + (e.$parent.globalData.textTitle ? "&worksTitle=" + e.$parent.globalData.textTitle : "") + (e.customData.activityId ? "&activityId=" + e.customData.activityId + "&activityName=" + t.customData.activityName : "") + (e.$parent.globalData.textTitle ? "&worksTitle=" + e.$parent.globalData.textTitle : "")), 
                            t.resetAudioRecord(), e.$apply();
                        } else (0, m.alert)(o.message, "", "../../common/images/warning.png");
                    },
                    fail: function(t) {
                        (0, m.hideLoading)(), (0, m.log)("合成出错：", t), (0, m.alert)("合成出错,请重试", "", "../../common/images/warning.png"), 
                        e.$apply();
                    }
                }).onProgressUpdate(function(t) {
                    (0, m.log)("合成进度", t.progress), (0, m.showLoading)("已合成" + t.progress + "%");
                });
            });
        }
    }, {
        key: "saveToWorks",
        value: function(t, e, a) {
            var o = this, i = this, n = {
                activityId: i.soundCardData.actId,
                duration: a,
                isFreeReadRes: i.freeReading ? 1 : 0,
                opusType: t,
                isPlay: 0,
                title: i.textTitle || "自由朗读",
                resourceId: i.$parent.globalData.textId || 0,
                yunUrl: e
            };
            console.log("saveToWorks======params", n);
            var r = (0, m.getPublicParam)(n);
            console.log("提交参数 saveToWorks", r), (0, g.SaveOpus)(r).then(function(t) {
                if ((0, m.log)("上传成功===>", t), 2e5 == t.code) {
                    t.message;
                    o.soundCardData.id = i.$parent.globalData.textId || 0, o.soundCardData.textTitle = o.textTitle, 
                    o.soundCardData.textAuthor = o.textAuthor, o.soundCardData.freeReading = o.freeReading, 
                    o.soundCardData.fileUrl = e, o.soundCardData.time = a, o.soundCardData.opusId = t.data.opusId, 
                    (0, m.skip)("/packageSquare/pages/finishSoundCard/finishSoundCard?soundCardData=" + JSON.stringify(o.soundCardData)), 
                    i.$apply();
                } else (0, m.alert)(t.message, "", "./../../../common/images/warning.png");
            }).catch(function(t) {
                (0, m.log)("请求出错。。。", t), (0, m.alert)("请求异常", "", "./../../../common/images/warning.png"), 
                i.$apply();
            }), i.$apply();
        }
    }, {
        key: "loadRecommendMusic",
        value: function() {
            var t = this;
            if (!this.customData.recommendMusicGetting) {
                this.customData.recommandMusicGetting = !0;
                var e = {
                    resourceId: this.$parent.globalData.textId
                }, a = (0, m.getPublicParam)(e);
                (0, g.GetRecommendMusic)(a).then(function(e) {
                    2e5 == e.code ? ((0, m.log)("loadRecommendMusic推荐音乐获取成功：", e), e.data.musicName ? (t.musicName = e.data.musicName, 
                    t.$parent.globalData.musicUrl = e.data.url, t.$parent.globalData.musicName = e.data.musicName, 
                    t.$parent.globalData.musicId = e.data.id, t.$parent.globalData.musicDuration = e.data.duration, 
                    t.$parent.globalData.longMusicUrl = e.data.longMusicUrl, t.initMusic()) : (t.musicName = "", 
                    t.$parent.globalData.musicUrl = null, t.$parent.globalData.musicName = null, t.$parent.globalData.musicId = null, 
                    t.$parent.globalData.musicDuration = null), t.$apply()) : ((0, m.log)("loadRecommendMusic推荐音乐获取失败:", e), 
                    (0, m.alertText)(e.message)), t.customData.recommandMusicGetting = !1;
                }).catch(function(e) {
                    (0, m.hideLoading)(), (0, m.log)("推荐音乐获取异常:", e), t.customData.recommandMusicGetting = !1;
                });
            }
        }
    }, {
        key: "loadAddResource",
        value: function() {
            var t = this, e = {
                resourceId: this.$parent.globalData.textId
            }, a = (0, m.getPublicParam)(e);
            (0, g.AddResource)(a).then(function(e) {
                2e5 == e.code ? ((0, m.log)("loadAddResource收藏素材获取成功:", e), t.isCollect = !0, t.$parent.globalData.isCollect = !0, 
                wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    duration: 2e3
                }), t.$apply()) : ((0, m.log)("loadAddResource收藏素材获取失败:", e), (0, m.alertText)(e.message));
            }).catch(function(t) {
                (0, m.hideLoading)(), (0, m.log)("收藏素材获取异常:", t);
            });
        }
    }, {
        key: "loadCancelResource",
        value: function() {
            var t = this, e = {
                resourceId: this.$parent.globalData.textId
            }, a = (0, m.getPublicParam)(e);
            (0, g.CancelResource)(a).then(function(e) {
                2e5 == e.code ? ((0, m.log)("loadCancelResource取消收藏素材获取成功:", e), t.isCollect = !1, 
                t.$parent.globalData.isCollect = !1, wx.showToast({
                    title: "已取消收藏",
                    icon: "success",
                    duration: 2e3
                }), t.$apply()) : ((0, m.log)("loadCancelResource取消收藏素材获取失败:", e), (0, m.alertText)(e.message));
            }).catch(function(t) {
                (0, m.hideLoading)(), (0, m.log)("取消收藏素材获取异常:", t);
            });
        }
    }, {
        key: "recordAudioFn",
        value: function() {
            var t = this;
            clearInterval(this.timerRecord), this.isCanSelctMusicOrText = !1;
            this.$parent.globalData.textContent;
            var e = this.$parent.globalData.musicUrl;
            this.isShowMask = !0, this.$apply(), this.customData.countInterval = setInterval(function() {
                t.startDuration = t.startDuration - 1, 0 == t.startDuration && (clearInterval(t.customData.countInterval), 
                t.isShowMask = !1, t.startDuration = 3, t.startRecordLock = !0, setTimeout(function() {
                    t.startRecordLock = !1;
                }, 1e3), e || (t.musicName = "无配乐"), t.recorderManager.start(p.recordOptions), t.playMusic()), 
                t.$apply();
            }, 1e3);
        }
    }, {
        key: "recordVideoFn",
        value: function() {
            var t = this;
            console.log("recordVideoFn"), clearInterval(this.timerRecord_video), this.recordTypeShow && (this.recordTypeShow = !1), 
            this.recordState_video = "working", this.isShowMask = !0, this.$apply(), this.customData.cameraContext = wx.createCameraContext(), 
            this.customData.countInterval = setInterval(function() {
                t.startDuration = t.startDuration - 1, 0 == t.startDuration && (clearInterval(t.customData.countInterval), 
                t.isShowMask = !1, t.startDuration = 3, t.playMusic(), t.customData.cameraContext.startRecord({
                    success: function() {
                        t.timerRecord_video = setInterval(function() {
                            t.videoRestTime <= 2 && t.stopVideoRecordFn(!0), t.videoRestTime--, t.videoPercent = 100 - (100 - t.videoRestTime / 3 * 10), 
                            t.$apply(), t.videoRestTime <= 0 && clearInterval(t.timerRecord_video), console.log("录制视频" + t.videoRestTime);
                        }, 1e3);
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                })), t.$apply();
            }, 1e3);
        }
    }, {
        key: "handleVideoResult",
        value: function(t) {
            var e = this;
            console.log("产品大大看这里handleVideoResult", t), (0, m.showLoading)("合成中");
            var a = parseInt(this.videoDuration);
            a = a >= 30 ? 28 : a, this.checkEarphone(t.tempVideoPath, a, "video").then(function(a) {
                wx.hideLoading(), e.recordState_video = "end", e.customData.videoPath = a, e.customData.posterPath = t.tempThumbPath, 
                e.video = a, e.$apply();
            });
        }
    }, {
        key: "setProgressWidth",
        value: function() {
            var t = this, e = wx.createSelectorQuery();
            e.select("#progress-box").boundingClientRect(), e.exec(function(e) {
                t.customData.progressWidth = e[0].width - 10;
            });
        }
    }, {
        key: "setPerviewBoxHeight",
        value: function() {
            var t = this;
            if (this.customData.previewBoxHeight) this.previewBoxHeight = "calc(100vh - 350rpx - " + this.customData.previewBoxHeight + "px)"; else {
                var e = wx.createSelectorQuery();
                e.select(".navbar").boundingClientRect(), e.exec(function(e) {
                    var a = e[0].height;
                    t.previewBoxHeight = "calc(100vh - 350rpx - " + a + "px)", t.customData.previewBoxHeight = a, 
                    t.$apply();
                });
            }
        }
    }, {
        key: "upload_video",
        value: function() {
            var t = this;
            (0, m.showLoading)("上传中...");
            var e = parseInt(this.videoDuration);
            e = e >= 30 ? 28 : e, this.checkEarphone(this.customData.videoPath, e, "video").then(function(a) {
                t.customData.videoPath = a, Promise.all([ t.uploadPoster(), t.uploadVideoFile() ]).then(function(a) {
                    var o = n(a, 2), i = o[0], r = o[1];
                    t.resetVideo(), t.$preload("data", {
                        type: "video",
                        data: {
                            poster: i,
                            video: r,
                            videoLength: e
                        }
                    }), t.soundCardData ? t.saveToWorks("draft", r, e) : (0, m.skip)("/packageReading/pages/preview/preview?fromApplyLeadOpus=" + t.fromApplyLeadOpus + (t.$parent.globalData.textTitle ? "&worksTitle=" + t.$parent.globalData.textTitle : "") + (t.customData.activityId ? "&activityId=" + t.customData.activityId + "&activityName=" + t.customData.activityName : "")), 
                    console.log("this.customData.videoPath  --\x3e", t.customData.videoPath, r);
                }).catch(function(t) {
                    console.log(t), (0, m.hideLoading)();
                });
            });
        }
    }, {
        key: "uploadPoster",
        value: function() {
            var t = this;
            return new Promise(function(e, a) {
                wx.uploadFile({
                    url: p.baseUrl + "/v1/opus/uploadVideoImage",
                    filePath: t.customData.posterPath,
                    name: "imageFile",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    formData: {
                        sessionId: t.customData.sessionId
                    },
                    success: function(t) {
                        var a = JSON.parse(t.data);
                        if (2e5 == a.code) {
                            var o = a.data;
                            e(o);
                        } else (0, m.hideLoading)(), (0, m.alert)(a.message, "", "../../common/images/warning.png");
                    },
                    fail: function(t) {
                        (0, m.log)("上传海报出错：", t), (0, m.alert)("上传海报出错,请重试", "", "../../common/images/warning.png"), 
                        "uploadFile:fail socket timeout error" == t.errMsg && (0, m.alert)("上传海报超时,请重试", "", "../../common/images/warning.png"), 
                        a();
                    }
                }).onProgressUpdate(function(t) {
                    (0, m.log)("上传海报进度", t.progress);
                });
            });
        }
    }, {
        key: "uploadVideoFile",
        value: function() {
            var t = this;
            return new Promise(function(e, a) {
                wx.uploadFile({
                    url: p.baseUrl + "/v1/opus/uploadOpusFile",
                    filePath: t.customData.videoPath,
                    name: "opusFile",
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    formData: {
                        sessionId: t.customData.sessionId
                    },
                    success: function(t) {
                        var a = JSON.parse(t.data);
                        if (2e5 == a.code) {
                            var o = a.data;
                            e(o);
                        } else (0, m.alert)(a.message, "", "../../common/images/warning.png");
                    },
                    fail: function(t) {
                        (0, m.log)("上传视频出错：", t), (0, m.alert)("上传视频出错,请重试", "", "../../common/images/warning.png"), 
                        "uploadFile:fail socket timeout error" == t.errMsg && (0, m.alert)("上传视频超时,请重试", "", "../../common/images/warning.png"), 
                        a();
                    }
                }).onProgressUpdate(function(t) {
                    (0, m.log)("上传视频进度", t.progress);
                });
            });
        }
    }, {
        key: "initMusic",
        value: function() {
            var t = this;
            clearTimeout(this.customData.bgmTimeout), this.$parent.globalData.musicUrl && ((0, 
            m.showLoading)("加载背景音乐"), this.customData.innerAudioContext = wx.createInnerAudioContext(), 
            this.customData.innerAudioContext.loop = !0, this.customData.bgmTimeout = setTimeout(function() {
                (0, m.hideLoading)(), (0, m.alertText)("背景音乐加载失败");
            }, 6e3), this.customData.innerAudioContext.onCanplay(function() {
                (0, m.hideLoading)(), clearTimeout(t.customData.bgmTimeout);
            }), this.customData.innerAudioContext.src = this.$parent.globalData.musicUrl);
        }
    }, {
        key: "initRecorderManager",
        value: function() {
            var t = this;
            this.recorderManager = wx.getRecorderManager();
            var e = !1;
            this.recorderManager.onStart(function() {
                t.customData.isIOS && "init" !== t.recordState_audio || (t.customData.recordPauseDuration = new Date().getTime(), 
                t.recordState_audio = "working", t.$apply(), t.recordAudioCount());
            }), this.recorderManager.onResume(function() {
                e || (e = !0, t.customData.recordPauseDuration += new Date().getTime() - t.customData.recordPauseTime, 
                t.recordAudioCount(), setTimeout(function() {
                    e = !1;
                }, 500));
            }), this.recorderManager.onPause(function() {
                t.customData.recordPauseTime = new Date().getTime();
            }), this.recorderManager.onStop(function(e) {
                t.recordEnd(e);
            }), this.recorderManager.onError(function(e) {
                (0, m.log)("录音出错，错误为：", e), clearInterval(t.timerRecord);
            });
        }
    }, {
        key: "recordAudioCount",
        value: function() {
            var t = this;
            this.timerRecord = setInterval(function() {
                t.recordDuration = Math.round((new Date().getTime() - t.customData.recordPauseDuration) / 1e3), 
                t.recordDuration > 600 && (t.recordDuration = 600), t.recordPercent = t.recordDuration / 6, 
                t.loadingLeft = t.recordDuration / 600 * t.customData.progressWidth, t.recordDurationText = (0, 
                m.formatTime)(t.recordDuration, 1), t.recordDuration >= 590 && !t.audioTimeWarnShow && (t.audioTimeWarnShow = !0), 
                t.$apply();
            }, 1e3);
        }
    }, {
        key: "recordEnd",
        value: function(t) {
            clearInterval(this.timerRecord), this.stopMusic(), this.recordState_audio = "end", 
            this.audioTimeWarnShow = !1, this.$apply(), console.log("自动结束", t), this.tempFilePath = t.tempFilePath;
            var e = Math.round(t.duration / 1e3);
            e > 0 && (this.recordDuration <= 0 ? this.recordDuration = e : this.recordDuration = e < this.recordDuration ? e : this.recordDuration);
        }
    }, {
        key: "setReadingContent",
        value: function() {
            var t = this;
            this.textTitle = this.$parent.globalData.textTitle, this.textAuthor = this.$parent.globalData.textAuthor, 
            this.isCollect = this.$parent.globalData.isCollect, this.isCustom = this.$parent.globalData.isCustom, 
            this.textContent = this.$parent.globalData.textContent || "", this.$invoke("readContent", "init"), 
            this.textAlign = this.$parent.globalData.textAlign || "center", this.$parent.globalData.recordTypeShow && (this.recordTypeShow = !0, 
            this.$parent.globalData.recordTypeShow = null);
            var e = this.$parent.globalData.musicUrl;
            !e && this.textTitle ? this.loadRecommendMusic() : e ? (this.initMusic(), this.musicName = this.$parent.globalData.musicName) : this.musicName = "", 
            wx.nextTick(function() {
                var e = wx.createSelectorQuery();
                e.select("#contentSize").boundingClientRect(), e.exec(function(e) {
                    t.contentHeight = e[0].height + 100 + "px", t.$apply();
                });
            }), this.textId = this.$parent.globalData.textId;
        }
    }, {
        key: "playMusic",
        value: function() {
            this.$parent.globalData.musicUrl && this.customData.innerAudioContext && this.customData.innerAudioContext.play();
        }
    }, {
        key: "stopMusic",
        value: function() {
            this.$parent.globalData.musicUrl && this.customData.innerAudioContext && this.customData.innerAudioContext.stop();
        }
    }, {
        key: "pauseMusic",
        value: function() {
            this.$parent.globalData.musicUrl && this.customData.innerAudioContext.pause();
        }
    }, {
        key: "resetMusic",
        value: function() {
            this.$parent.globalData.musicUrl && this.customData.innerAudioContext.seek(0);
        }
    }, {
        key: "showDialog",
        value: function() {
            this.customData.dialog && this.customData.dialog.show();
        }
    }, {
        key: "hideDialog",
        value: function() {
            this.customData.dialog && this.customData.dialog.hide();
        }
    }, {
        key: "showVolumeDialog",
        value: function() {
            this.volumeDialogShow = !0, this.$apply();
        }
    }, {
        key: "hideVolumeDialog",
        value: function() {
            this.volumeDialogShow = !1;
        }
    }, {
        key: "showVideoTimeAlert",
        value: function() {
            var t = this;
            this.videoTimeAlertShow || (this.videoTimeAlertShow = !0, setTimeout(function() {
                t.videoTimeAlertShow = !1, t.$apply();
            }, 2e3));
        }
    }, {
        key: "resetVideo",
        value: function() {
            this.video = null, this.recordState_video = "init", this.videoRestTime = 30, this.videoPercent = 100, 
            this.customData.videoContext && this.customData.videoContext.stop();
        }
    }, {
        key: "stopVideoRecordFn",
        value: function(t) {
            var e = this;
            console.log("产品大大看这里stopVideoRecordFn delayLoading", t), this.videoRestTime > 25 ? this.showVideoTimeAlert() : this.customData.videoRecordStopping || (console.log("产品大大看这里stopVideoRecordFn2"), 
            this.customData.videoRecordStopping = !0, this.stopMusic(), this.readingContentShow && (this.readingContentShow = !1), 
            t ? setTimeout(function() {
                (0, m.showLoading)("压缩中");
            }, 1500) : (clearInterval(this.timerRecord_video), (0, m.showLoading)("压缩中")), console.log("产品大大看这里stopVideoRecordFn3"), 
            this.customData.cameraContext.stopRecord({
                compressed: !0,
                success: function(a) {
                    console.log("stopRecord", a), e.videoDuration = t ? 30 : String(30 - e.videoRestTime).padStart(2, "0"), 
                    e.$apply(), e.handleVideoResult(a);
                },
                fail: function(t) {
                    (0, m.hideLoading)(), console.log("停止录像报错：", t);
                },
                complete: function(t) {
                    e.customData.videoRecordStopping = !1;
                }
            }));
        }
    }, {
        key: "judgeFullScreen",
        value: function() {
            if (void 0 !== this.$parent.globalData.isFullScreen) return this.isFullScreen = this.$parent.globalData.isFullScreen, 
            void this.$apply();
            var t = !0, e = wx.getSystemInfoSync();
            e.windowHeight / e.windowWidth <= (e.windowHeight == e.screenHeight ? 1.8 : 1.65) && (t = !1, 
            this.isFullScreen = !1, this.$apply()), this.$parent.globalData.isFullScreen = t;
        }
    }, {
        key: "setPosi",
        value: function() {
            this.customData.menuButton || (this.customData.menuButton = wx.getMenuButtonBoundingClientRect());
            var t = this.customData.menuButton;
            this.backTop = t.top + "px";
            var e = t.top + t.height;
            this.helpTop = "calc(" + e + "px + 45rpx)", this.switchTop = "calc(" + e + "px + 44rpx)", 
            this.readingContentTop = "calc(" + e + "px + 122rpx)", this.$apply();
        }
    }, {
        key: "getMaterialDetail",
        value: function() {
            var t = this, e = {
                isMyResource: 0,
                resourceId: this.$parent.globalData.textId || 0
            }, a = (0, m.getPublicParam)(e);
            (0, m.showLoading)(), (0, g.GetMaterialDetail)(a).then(function(e) {
                (0, m.log)("获取资源详情111111111111111111111:", e), (0, m.hideLoading)(), "200000" == e.code && (t.textAlign = e.data.textAlign || "center", 
                t.$parent.globalData.textId = e.data.resourceId, t.textTitle = t.$parent.globalData.textTitle = e.data.resName, 
                t.textAuthor = t.$parent.globalData.textAuthor = e.data.author, t.textContent = t.$parent.globalData.textContent = e.data.content, 
                t.$invoke("readContent", "init"), t.$parent.globalData.worksTitle = e.data.resName, 
                t.isCustom = t.$parent.globalData.isCustom = e.data.isFreeReadRes, t.isCollect = t.$parent.globalData.isCollect = e.data.isCollect, 
                t.$apply(), !t.$parent.globalData.musicUrl && t.textTitle && t.customData.logined && t.loadRecommendMusic());
            }).catch(function(t) {
                (0, m.hideLoading)(), (0, m.log)("获取资源详情异常:", t);
            });
        }
    }, {
        key: "checkLogined",
        value: function() {
            var t = this;
            this.customData.logined || (0, m.checkLogin)(function() {
                t.customData.logined = !0;
            }, function() {
                (0, m.skip)("/pages/login/login?rejectRelaunch=true");
            });
        }
    }, {
        key: "onLoad",
        value: function(t) {
            var e = this;
            if (console.log("onLoad onLoad---\x3e", t), console.log("this.$parent.globalData.textId", this.$parent.globalData.textId), 
            t.soundCardData) {
                if (this.soundCardData = JSON.parse(t.soundCardData), console.log("JSON.parse(opt.soundCardData)", JSON.parse(t.soundCardData)), 
                this.soundCardData.resourceData) {
                    var a = this.soundCardData.resourceData;
                    this.textContent = a.content, this.textTitle = a.resName, this.textAuthor = a.author;
                } else console.log("外面"), t.noMaterial && (setTimeout(function() {
                    e.isShowLibrary = !0, e.$apply();
                }, 0), this.clearData());
                t.freeReading && (this.freeReading = !0), console.log("this.freeReading---\x3e", this.freeReading);
            }
            var o = wx.getStorageSync("agencyZoneData") || "";
            if (this.organizatio_id = o.orgaId || "", this.specified = t.specified || "", this.setPosi(), 
            t.freeReading && (this.$parent.globalData.isFreeRecord = !0, this.freeReading = !0), 
            this.setReadingContent(), "true" === t.fromApplyLeadOpus ? this.fromApplyLeadOpus = !0 : this.fromApplyLeadOpus = null, 
            this.customData.activityId = t.activityId, this.customData.activityName = t.activityName, 
            t.scene) {
                var i = decodeURIComponent(t.scene);
                if (console.log("scene,", i), i.indexOf("/") > -1) {
                    var n = i.split("/");
                    this.$parent.globalData.textId = n[1];
                } else this.$parent.globalData.textId = i.replace("resourceId=", "");
                this.getMaterialDetail();
            }
            console.log("onload this.isShowLibrary>>>>>>>>", this.textTitle);
        }
    }, {
        key: "onReady",
        value: function() {
            var t = wx.getSystemInfoSync();
            this.customData.isIOS = (0, m.isIOS)(t.system), this.setProgressWidth(), this.setPerviewBoxHeight(), 
            this.customData.sessionId = (0, m.getSessionId)("sessionId"), this.initRecorderManager(), 
            this.judgeFullScreen(), this.customData.dialog = this.$wxpage.selectComponent(".wxc-dialog");
        }
    }, {
        key: "onShow",
        value: function(t) {
            console.log("onShow ??????????"), this.checkLogined(), clearInterval(this.timerRecord), 
            clearInterval(this.timerRecord_video), this.onloaded ? this.setReadingContent() : this.onloaded = !0, 
            this.photo && "init" === this.recordState_video && (this.photo = null), this.materialShow && (this.materialShow = !1), 
            this.isShowLibrary && (this.isShowLibrary = !1), this.$parent.globalData.isFreeRecord && (this.freeReading = !0), 
            wx.getBackgroundAudioManager().stop(), console.log("onshow   this.isShowLibrary>>>>>>>>", this.isShowLibrary);
        }
    }, {
        key: "onHide",
        value: function() {
            clearInterval(this.timerRecord), clearInterval(this.timerRecord_video), clearInterval(this.customData.countInterval), 
            "working" === this.recordState_audio && (this.recorderManager.pause(), this.recordState_audio = "paused"), 
            this.customData.cameraContext && this.customData.cameraContext.stopRecord(), this.$parent.globalData.isFreeRecord = null;
        }
    }, {
        key: "onUnload",
        value: function() {
            console.log("onUnload @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"), this.soundCardData && this.clearData();
            var t = this;
            clearInterval(t.timerRecord), clearInterval(t.timerRecord_video), clearInterval(t.customData.countInterval), 
            "working" !== this.recordState_audio && "paused" !== this.recordState_audio || (this.recorderManager.onStop(function() {}), 
            t.recorderManager.stop()), t.customData.cameraContext && t.customData.cameraContext.stopRecord(), 
            this.stopMusic(), t.$parent.globalData.musicUrl = null, this.$parent.globalData.musicName = null, 
            this.resetCustomData(), this.$parent.globalData.mergeOpusLocal = null, this.$parent.globalData.isFreeRecord = null, 
            clearTimeout(this.customData.bgmTimeout);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            wx.getStorageSync("agencyZoneData");
            return (0, m.shareApp)("", "/pages/mainpage/mainpage");
        }
    }, {
        key: "resetCustomData",
        value: function() {
            this.customData.videoContext = null, this.customData.videoDurationInited = null, 
            this.customData.videoRecordStopping = !1, this.customData.recordStartTime = null, 
            this.customData.recordPauseTime = null, this.customData.recordPauseDuration = 0, 
            this.customData.activityId = null, this.customData.activityName = null, this.customData.recommandMusicGetting = null;
        }
    } ]), i;
}();

Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(f, "pages/recording/recording"));