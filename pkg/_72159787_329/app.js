function e(e, a) {
    if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
}

function a(e, a) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !a || "object" !== (void 0 === a ? "undefined" : i(a)) && "function" != typeof a ? e : a;
}

function t(e, a) {
    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === a ? "undefined" : i(a)));
    e.prototype = Object.create(a && a.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
}

var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = function() {
    function e(e, a) {
        for (var t = 0; t < a.length; t++) {
            var i = a[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(a, t, i) {
        return t && e(a.prototype, t), i && e(a, i), a;
    };
}(), r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./npm/wepy/lib/wepy.js")), n = require("./common/js/util.js"), s = require("./api/index.js"), l = require("./api/config.js"), g = function(i) {
    function g() {
        e(this, g);
        var t = a(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
        return t.config = {
            pages: [ "pages/mainpage/mainpage", "pages/recording/recording", "pages/login/login", "pages/bindphone/bindphone", "pages/voxTraining/voxTraining" ],
            subPackages: [ {
                root: "packageActivity",
                pages: [ "pages/activity/activity", "pages/apply/apply", "pages/flagWebpage/flagWebpage", "pages/antiepidemicHome/antiepidemicHome", "pages/antiepidemicAnswer/antiepidemicAnswer", "pages/antiepidemicResult/antiepidemicResult", "pages/antiepidemicList/antiepidemicList", "pages/antiepidemicCavas/antiepidemicCavas", "pages/TaiyuanActivityHome/TaiyuanActivityHome", "pages/TaiyuanQuestionnaire/TaiyuanQuestionnaire", "pages/ChangJiActivityHome/ChangJiActivityHome", "pages/studydayHome/studydayHome", "pages/celebrityDraw/celebrityDraw", "pages/modifyGoods/modifyGoods", "pages/luckyGoods/luckyGoods", "pages/activityDraw/activityDraw", "pages/childrenDayAddress/childrenDayAddress", "pages/graduaSeason/graduaSeason", "pages/graduaSeasonHome/graduaSeasonHome", "pages/themeActivities/themeActivities", "pages/multiCourseActivities/multiCourseActivities", "pages/information/information", "pages/festivalActivity/makePictures", "pages/festivalActivity/makeSuccess", "pages/festivalActivity/postcardIndex", "pages/festivalActivity/test" ]
            }, {
                root: "packageIndex",
                pages: [ "pages/readPavilion/readPavilion", "pages/editInfo/editInfo", "pages/personHomepage/personHomepage", "pages/opus/opus", "pages/organizationList/organizationList", "pages/myMaterial/myMaterial", "pages/addMaterial/addMaterial", "pages/enjoy/enjoy", "pages/attention/attention", "pages/myActivity/myActivity", "pages/feedBack/feedBack", "pages/news/news", "pages/aboutUs/aboutUs", "pages/welcomeToOrga/welcomeToOrga", "pages/webview/webview", "pages/AddRepresentative/AddRepresentative", "pages/agreement/agreement", "pages/privacyAgree/privacyAgree", "pages/readCard/readCard", "pages/bindingCard/bindingCard", "pages/prizeDetails/prizeDetails" ]
            }, {
                root: "packageReading",
                pages: [ "pages/searchPage/searchPage", "pages/childMaterial/childMaterial", "pages/dubMaterial/dubMaterial", "pages/library/library", "pages/music/music", "pages/preview/preview", "pages/previewUserVideo/previewUserVideo", "pages/videoClip/videoClip" ]
            }, {
                root: "packageSquare",
                pages: [ "pages/activityDetail/activityDetail", "pages/signUp/signUp", "pages/subpage/subpage", "pages/soundCard/soundCard", "pages/makeSoundCard/makeSoundCard", "pages/finishSoundCard/finishSoundCard", "pages/newOpusDetail/newOpusDetail", "pages/applyLeadOpus/applyLeadOpus", "pages/applyLeadVideoDub/applyLeadVideoDub", "pages/applyLeadPicture/applyLeadPicture", "pages/testimonials/testimonials", "pages/smallStage/smallStage", "pages/preheat423/preheat423" ]
            }, {
                root: "packagePopular",
                pages: [ "pages/topCategory/topCategory", "pages/followers/followers", "pages/professioner/professioner", "pages/agenceDetail/agenceDetail", "pages/popularList/popularList", "pages/dailySoundCard/dailySoundCard", "pages/soundCardDetail/soundCardDetail", "pages/professionerDetail/professionerDetail", "pages/famousPeople/famousPeople" ]
            }, {
                root: "packageRecite",
                pages: [ "pages/parentHome/parentHome", "pages/recite/recite", "pages/reciteEnds/reciteEnds", "pages/teacher/teacher", "pages/addGrade/addGrade", "pages/gradeDetail/gradeDetail", "pages/gradeWorkDetail/gradeWorkDetail", "pages/joinClassGuide/joinClassGuide", "pages/homeworkResources/homeworkResources", "pages/setHomework/setHomework", "pages/reciteDetail/reciteDetail", "pages/joinClass/joinClass", "pages/recitePractice/recitePractice", "pages/recitePracticeHistory/recitePracticeHistory", "pages/recitePracticeRank/recitePracticeRank", "pages/recitePracticeReport/recitePracticeReport", "pages/identity/identity", "pages/writeData/writeData", "pages/search/search", "pages/creationReadWork/creationReadWork", "pages/readHomework/readHomework", "pages/remark/remark", "pages/reciteMyMaterial/reciteMyMaterial", "pages/readHomeworkPreview/readHomeworkPreview" ]
            }, {
                root: "packagePlaza",
                pages: [ "pages/dynamicSquare/dynamicSquare", "pages/publishList/publishList", "pages/publishContent/publishContent", "pages/myContent/myContent" ]
            }, {
                root: "packageDub",
                pages: [ "pages/dub/dub" ]
            }, {
                root: "packageClockIn",
                pages: [ "pages/clockIn/clockIn", "pages/clockInRanking/clockInRanking", "pages/clockInRecord/clockInRecord" ]
            }, {
                root: "packageParty",
                pages: [ "myAchievement", "rank", "sign", "media", "mediaDetail", "probation", "feeling", "myFeeling", "partyMaterial", "partyMaterialDetails", "historyAnswer" ]
            }, {
                root: "packagePartyStudy",
                pages: [ "pages/study/study", "pages/learningResults/learningResults", "pages/resourceDetail", "pages/videoDetail", "pages/voiceSpace/voiceSpace", "pages/organzationDetails/organzationDetails" ]
            } ],
            window: {
                navigationStyle: "custom",
                backgroundColorTop: "red",
                navigationBarBackgroundColor: "#3B87DD",
                navigationBarTitleText: "优谷朗读",
                navigationBarTextStyle: "black",
                onReachBottomDistance: 50,
                enablePullDownRefresh: !1
            },
            networkTimeout: {
                uploadFile: 12e4
            },
            permission: {
                "scope.userLocation": {
                    desc: "您的位置信息将用于获取最近朗读亭位置"
                }
            },
            requiredBackgroundModes: [ "audio", "location" ],
            plugins: {
                XSEngine: {
                    version: "1.2.1",
                    provider: "wx7279a29ef86a3002"
                }
            },
            "skeleton-config": {
                global: {
                    loading: "shine",
                    text: {
                        color: "#EEEEEE"
                    },
                    image: {
                        shape: "rect",
                        color: "#EFEFEF",
                        shapeOpposite: []
                    },
                    button: {
                        color: "#EFEFEF",
                        excludes: []
                    },
                    pseudo: {
                        color: "#EFEFEF",
                        shape: "rect",
                        shapeOpposite: []
                    },
                    excludes: [],
                    remove: [ ".mainTabBar", ".border-btm" ],
                    empty: [],
                    hide: [],
                    grayBlock: [],
                    showNative: !1,
                    backgroundColor: "transparent",
                    mode: "fullscreen",
                    cssUnit: "rpx",
                    decimal: 4
                },
                pages: {
                    "pages/mainpage/mainpage": {}
                }
            },
            navigateToMiniProgramAppIdList: [ "wx38c58e37e43267c2", "wxaf72b72df76b1a23" ]
        }, t.globalData = {
            userInfo: {},
            sessionId: null,
            textId: null,
            textTitle: null,
            textAuthor: null,
            textContent: null,
            musicUrl: null,
            longMusicUrl: null,
            musicName: null,
            musicId: null,
            musicDuration: null,
            file: null,
            duration: 0,
            worksTitle: null,
            appIsFirstLoading: !0,
            activityId: null,
            type: null,
            phoneNumber: "",
            opusId: "",
            templateType: "",
            isCustom: !1,
            addStatus: 0,
            signUpBack: !1,
            backAudioManager: "",
            resetBgaudio: !1,
            isCollect: !1,
            userOpenid: null,
            reciteResult: null,
            recordVideo: !1,
            isOrgaChannel: "",
            fromMall: null,
            childrenDayPrizeIndex: null,
            recitePracticeRefresh: null,
            reciteInit: null,
            readingGraduation: null,
            refreshGraduation: null,
            fromGraduatActivity: null,
            activityShowMaterial: null,
            mergeOpusLocal: null,
            isFullScreen: null,
            textAlign: null,
            isFreeRecord: null,
            changeSign: !1,
            lat: null,
            lng: null,
            mpOrigin: null,
            useApplets: 0,
            orgaType: null,
            orgaAuthorize: null,
            orgaUserAuth: null,
            isOrgaLists: null,
            orgaOutlets: {},
            isPhoneX: null
        }, t.use("requestfix"), t;
    }
    return t(g, r.default.app), o(g, [ {
        key: "onLaunch",
        value: function(e) {
            this.login(), (0, n.log)("app onLaunch：", e), (0, n.updateApp)(), this.judgeFullScreen(), 
            this.checkFromMall(), wx.setInnerAudioOption({
                obeyMuteSwitch: !1,
                mixWithOther: !1
            }), (0, n.setKeepScreenOn)();
        }
    }, {
        key: "onShow",
        value: function(e) {
            if ((0, n.log)("app show：", e), this.netWorkChange(), this.getEnterScene(e.scene) ? this.globalData.mpOrigin = "qrcode" : this.getEnterScene(e.scene, 2) ? this.globalData.mpOrigin = "share" : this.getLocalOrga(e.query), 
            console.log(80, this.globalData.mpOrigin), "empty" == this.globalData.mpOrigin) return this.globalData.useApplets = 0, 
            !1;
            var a = e.query;
            "undefined" === a.orgaId && (a.orgaId = "", a.orgaName = "");
            var t = {
                orgaId: a.orgaId || "",
                orgaName: a.orgaName || ""
            };
            a.hasOwnProperty("orgaId") && (this.saveCodeCB(t), this.orgaChannelCB(e));
            var i = (0, n.getParams)(decodeURIComponent(e.query.q));
            if (i.hasOwnProperty("orgaId")) {
                i.orgaId = "0" == i.orgaId ? "" : i.orgaId;
                var o = {
                    orgaId: i.orgaId || "",
                    orgaName: i.orgaName || ""
                };
                this.saveCodeCB(o), this.orgaChannelCB(e), i.qutletsId && this.getOutletsInfo(i.qutletsId, i.orgaId), 
                this.globalData.mpOrigin = "qrcode";
            }
            var r = decodeURIComponent(e.query.scene), s = /^[0-9]*$/;
            if (r && s.test(parseInt(r)) && -1 == r.indexOf("/")) {
                var l = {
                    orgaId: "0" == r ? "" : r,
                    orgaName: ""
                };
                this.saveCodeCB(l), this.globalData.mpOrigin = "qrcode";
            }
            if (r && -1 != r.indexOf("/")) {
                var g = r.split("/")[0], p = {
                    orgaId: "0" == g ? "" : g,
                    orgaName: ""
                };
                this.saveCodeCB(p);
                var c = r.split("/")[2];
                c && this.getOutletsInfo(c, g), this.globalData.mpOrigin = "qrcode";
            }
        }
    }, {
        key: "onHide",
        value: function() {
            "qrcode" != this.globalData.mpOrigin && "share" != this.globalData.mpOrigin || (this.globalData.mpOrigin = "empty");
        }
    }, {
        key: "login",
        value: function() {
            if (wx.getStorageSync("agreementChecked")) {
                var e = wx.getStorageSync("uid");
                e ? (0, n.setUserInfo)({
                    sessionId: wx.getStorageSync("sessionId"),
                    uid: e,
                    phoneNumber: wx.getStorageSync("phoneNumber")
                }) : wx.login({
                    success: function(e) {
                        var a = {
                            code: e.code
                        }, t = (0, n.getPublicParam)(a);
                        wx.request({
                            url: l.baseUrl + "/v1/auth/loginRequest",
                            data: t,
                            method: "POST",
                            success: function(e) {
                                if (e && 2e5 == e.data.code) {
                                    var a = e.data.data;
                                    a.sessionId && a.uid && a.phoneNumber && ((0, n.setUserInfo)({
                                        sessionId: a.sessionId,
                                        uid: a.uid,
                                        phoneNumber: a.phoneNumber
                                    }), wx.setStorageSync("sessionId", a.sessionId), wx.setStorageSync("phoneNumber", a.phoneNumber), 
                                    wx.setStorageSync("uid", a.uid));
                                }
                            }
                        });
                    }
                });
            }
        }
    }, {
        key: "checkFromMall",
        value: function() {
            if (wx.getLaunchOptionsSync().referrerInfo.hasOwnProperty("extraData")) {
                var e = wx.getLaunchOptionsSync().referrerInfo.extraData;
                this.globalData.fromMall = e && e.fromMall, (0, n.log)("checkFromMall extraData:", e);
            }
        }
    }, {
        key: "switchLoginOrga",
        value: function(e) {
            var a = this, t = {
                orgaId: e.orgaId
            }, i = (0, n.getPublicParam)(t);
            (0, s.SwitchUserLogInOrga)(i).then(function(e) {
                2e5 == e.code ? ((0, n.log)("SwitchUserLogInOrga切换用户登录机构成功：", e), a.globalData.isSwitch = !0, 
                a.globalData.orgaType = e.data.orgaType, e.data.mpStatus ? (a.globalData.useApplets = e.data.mpStatus, 
                a.globalData.orgaAuthorize = null) : a.globalData.orgaAuthorize = e.data.isAuthCode, 
                a.globalData.orgaUserAuth = e.data.isUserAuth, a.globalData.mpStatus = e.data.mpStatus) : (0, 
                n.log)("SwitchUserLogInOrga切换用户登录机构失败：", e);
            }).catch(function(e) {
                (0, n.log)("切换用户登录机构异常：", e);
            });
        }
    }, {
        key: "orgaChannelCB",
        value: function(e) {
            var a = e.scene;
            console.log("orgaChannelCB", this.getEnterScene(a) || this.getEnterScene(a, 2) || this.getEnterScene(a, 3)), 
            this.getEnterScene(a) || this.getEnterScene(a, 2) || this.getEnterScene(a, 3) ? this.globalData.isOrgaChannel = 1 : this.globalData.isOrgaChannel = "";
        }
    }, {
        key: "saveCodeCB",
        value: function(e) {
            var a = this;
            wx.setStorageSync("agencyZoneData", e), (0, n.checkLogin)(this.switchLoginOrga.bind(this, e), function() {
                (0, n.log)("saveCodeCB不需要登录"), a.getOrgaMpState(e);
            });
        }
    }, {
        key: "judgeFullScreen",
        value: function() {
            var e = wx.getSystemInfoSync(), a = e.screenHeight / e.screenWidth, t = e.screenHeight === e.windowHeight ? 1.8 : 1.65;
            this.globalData.isFullScreen = a > t, console.log("onLaunch isFullScreen: ", this.globalData.isFullScreen), 
            -1 == e.model.indexOf("iPhone X") && -1 == e.model.indexOf("iPhone 11") && -1 == e.model.indexOf("iPhone 12") || (this.globalData.isPhoneX = !0, 
            this.$apply());
        }
    }, {
        key: "netWorkChange",
        value: function(e) {
            wx.onNetworkStatusChange(function(e) {
                var a = e.networkType;
                if (e.isConnected && "none" != a && "unknown" != a && "2g" != a) {
                    var t = getCurrentPages();
                    t[t.length - 1].networkChange && t[t.length - 1].networkChange();
                } else {
                    (0, n.alertText)("请检查网络是否稳定~", 3e3);
                    var i = setTimeout(function() {
                        wx.hideToast(), clearTimeout(i);
                    }, 3010);
                }
            });
        }
    }, {
        key: "getOutletsInfo",
        value: function(e, a) {
            var t = this, i = {
                qutletsId: e
            };
            (0, s.GetOrgaOutlets)((0, n.getPublicParam)(i)).then(function(e) {
                console.log("获取网点信息接口成功", e);
                var a = e.data, i = a.lat, o = a.lng;
                if (!a.isOpenDistanceRange) return t.globalData.useApplets = 0, !1;
                t.globalData.orgaOutlets = e.data, t.globalData.useApplets = 6, t.globalData.lng = o, 
                t.globalData.lat = i;
            }).catch(function(e) {
                console.log("获取网点信息接口异常", e);
            });
        }
    }, {
        key: "getEnterScene",
        value: function(e, a) {
            var t = [ 1011, 1012, 1013, 1047, 1048, 1049 ];
            return 2 == a ? t = [ 1007, 1008, 1014, 1043, 1044, 1073, 1074 ] : 3 == a && (t = [ 1035, 1036 ]), 
            t.includes(e);
        }
    }, {
        key: "getOrgaMpState",
        value: function() {
            var e = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
            (0, s.GetOrgaStatus)((0, n.getPublicParam)({
                orgaId: a.orgaId
            })).then(function(a) {
                console.log("获取机构小程序状态数据：", a);
                var i = e.globalData.useApplets;
                !t && i <= 0 && (e.globalData.useApplets = a.data.mpStatus), e.globalData.orgaType = a.data.orgaType, 
                e.globalData.mpStatus = a.data.mpStatus, e.globalData.orgaAuthorize = a.data.mpStatus ? null : a.data.isAuthCode, 
                e.globalData.orgaUserAuth = a.data.isUserAuth;
            });
        }
    }, {
        key: "getLocalOrga",
        value: function() {
            if ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).orgaId) return !1;
            var e = wx.getStorageSync("agencyZoneData") || {};
            e.orgaId && this.getOrgaMpState(e, "entrance");
        }
    } ]), g;
}();

App(require("./npm/wepy/lib/wepy.js").default.$createApp(g, {
    noPromiseAPI: [ "createSelectorQuery" ]
})), require("./_wepylogs.js");