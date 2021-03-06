function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function t(a, t) {
    if (!(a instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function e(a, t) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? a : t;
}

function i(a, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : n(t)));
    a.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(a, t) : a.__proto__ = t);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = function() {
    function a(a, t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(a, i.key, i);
        }
    }
    return function(t, e, i) {
        return e && a(t.prototype, e), i && a(t, i), t;
    };
}(), r = a(require("./../../npm/wepy/lib/wepy.js")), s = a(require("./../../components/dialog/dialog.js")), c = require("./../../common/js/util.js"), g = require("./../../api/config.js"), p = require("./../../api/index.js"), y = function(a) {
    function n() {
        var a, i, o, g;
        t(this, n);
        for (var y = arguments.length, u = Array(y), l = 0; l < y; l++) u[l] = arguments[l];
        return i = o = e(this, (a = n.__proto__ || Object.getPrototypeOf(n)).call.apply(a, [ this ].concat(u))), 
        o.config = {
            navigationBarTitleText: "??????",
            navigationBarBackgroundColor: "#3B87DD",
            navigationBarTextStyle: "white"
        }, o.$repeat = {}, o.$props = {
            dialog: {
                orgins: "personpage"
            }
        }, o.$events = {}, o.components = {
            dialog: s.default
        }, o.data = {
            paddingTop: "128rpx",
            isShow_agencyZoneData: !1,
            myData: [],
            myMsgData: [],
            myActivityData: {},
            collectMenu: [ {
                txt: "",
                bgc: "#66D0FE"
            }, {
                txt: "??????",
                bgc: "#66D0FE"
            }, {
                txt: "??????",
                bgc: "#FFC664"
            }, {
                txt: "????????????",
                bgc: "#73C5FF"
            } ],
            functionMenu: [ {
                icon: "icon-jiazhang",
                txt: "????????????",
                type: "parents"
            }, {
                icon: "icon-zhongxin_laoshi1",
                txt: "????????????",
                type: "teacher"
            }, {
                icon: "icon-zhongxin_guli1",
                txt: "????????????",
                type: "grain"
            }, {
                icon: "icon-zhongxin_sucai",
                txt: "????????????",
                type: "myMaterial"
            }, {
                icon: "icon-zhongxin_sshiting",
                txt: "????????????",
                type: "audition"
            }, {
                icon: "icon-zhongxin_daV",
                txt: "?????????V",
                type: "AddRepresentative"
            }, {
                icon: "icon-zhongxin_fankui",
                txt: "????????????",
                type: "feedBack"
            }, {
                icon: "icon-zhongxin_guanyu",
                txt: "????????????",
                type: "aboutUs"
            } ],
            orgaData: [],
            isShowOrga: !1,
            orgaItem: {},
            isShowRotate: !1,
            orgaId: null,
            isAgencyZone: !1,
            orgaColor: "#3B87DD",
            navigationBarHeight: "",
            isShowNickname: !1,
            isIPhoneX: !1,
            showNav: !1,
            isShow_voxTraining: !1,
            partyMain: {},
            partyOrgaType: null,
            showPartyOrga: null,
            bindCardImg: "https://reading.oss.iyougu.com/uploads/mpFront/ldtmp/applet/bindingCard.png"
        }, o.methods = {
            imgLoaded: function() {
                this.showNav = !0;
            },
            goto: function(a) {
                switch (a) {
                  case "message":
                    this.updateReplyStat(), (0, c.skip)("/packageIndex/pages/news/news?total_list=[" + this.myMsgData.replyCount + "," + this.myMsgData.dzCount + "," + this.myMsgData.awardCount + "," + this.myMsgData.noticCount + "]&unreadList=[0," + this.myMsgData.unDzCount + "," + this.myMsgData.unReadAwardCount + "," + this.myMsgData.unReadFeedBackCount + "]");
                    break;

                  case "editInfo":
                    (0, c.skip)("/packageIndex/pages/editInfo/editInfo");
                    break;

                  case "dynamic":
                    (0, c.skip)("/packagePlaza/pages/myContent/myContent?dynamic=dynamic");
                    break;

                  case "attention":
                    (0, c.skip)("/packageIndex/pages/attention/attention");
                    break;

                  case "fans":
                    (0, c.skip)("/packageIndex/pages/attention/attention?type=fans");
                    break;

                  case "grain":
                    this.gotoGrain();
                    break;

                  case "bindingCard":
                    (0, c.skip)("/packageIndex/pages/bindingCard/bindingCard");
                    break;

                  case "readCard":
                    (0, c.skip)("/packageIndex/pages/readCard/readCard");
                    break;

                  case "opus":
                    (0, c.skip)("/packageIndex/pages/opus/opus");
                    break;

                  case "read":
                    wx.reLaunch({
                        url: "/pages/mainpage/mainpage?index=2"
                    });
                    break;

                  case "myActivity":
                    (0, c.skip)("/packageIndex/pages/myActivity/myActivity");
                    break;

                  case "activity":
                    wx.reLaunch({
                        url: "/pages/mainpage/mainpage?index=4"
                    });
                    break;

                  case "parents":
                    (0, c.skip)("/packageRecite/pages/parentHome/parentHome");
                    break;

                  case "teacher":
                    this.gotoTeacherHome();
                    break;

                  case "myMaterial":
                    (0, c.skip)("/packageIndex/pages/myMaterial/myMaterial");
                    break;

                  case "audition":
                    (0, c.skip)("/packageIndex/pages/enjoy/enjoy?type=st");
                    break;

                  case "AddRepresentative":
                    (0, c.skip)("/packageIndex/pages/AddRepresentative/AddRepresentative");
                    break;

                  case "feedBack":
                    (0, c.skip)("/packageIndex/pages/feedBack/feedBack");
                    break;

                  case "aboutUs":
                    (0, c.skip)("/packageIndex/pages/aboutUs/aboutUs");
                    break;

                  case "partyStudy":
                    (0, c.skip)("/packagePartyStudy/pages/study/study?tabIndex=0&categoryIndex=0");
                }
            },
            gotoOpusDetail: function(a) {
                (0, c.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + a.opusId);
            },
            gotoCollect: function(a) {
                (0, c.skip)("/packageIndex/pages/enjoy/enjoy?type=sc&select_index=" + a);
            },
            changeOrga: function() {
                this.isShowOrga = !0;
            },
            close: function() {
                this.isShowOrga = !1;
            },
            radioClick: function(a, t) {
                for (var e = 0; e < this.orgaData.length; e++) this.orgaData[e].checked = !1;
                this.orgaData[a].checked = !0, this.orgaItem = t;
            },
            sure: function() {
                var a = this, t = {
                    orgaId: this.orgaItem.orgaId
                }, e = (0, c.getPublicParam)(t);
                (0, p.SwitchUserLogInOrga)(e).then(function(t) {
                    if (2e5 == t.code) {
                        if ((0, c.log)("SwitchUserLogInOrga?????????????????????????????????", t), t.data.mpStatus) return wx.showToast({
                            title: 2 === t.data.mpStatus ? "???????????????????????????????????????" : "????????????????????????????????????",
                            icon: "none"
                        });
                        null === a.orgaItem.orgaId ? (wx.removeStorage({
                            key: "agencyZoneData"
                        }), a.$parent.$parent.globalData.mpOrigin = null, a.$parent.$parent.globalData.useApplets = 0, 
                        a.$parent.$parent.globalData.orgaType = null) : ((0, c.setStorage)("agencyZoneData", {
                            orgaId: a.orgaItem.orgaId,
                            orgaName: a.orgaItem.orgaName,
                            orgaType: t.data.orgaType
                        }), a.$parent.$parent.globalData.orgaType = t.data.orgaType, a.$parent.$parent.globalData.isOrgaLists = null), 
                        a.isShowOrga = !1, a.isShowRotate = !0, setTimeout(function() {
                            a.isShowRotate = !1, wx.reLaunch({
                                url: "/pages/mainpage/mainpage?index=1"
                            });
                        }, 1e3);
                    } else (0, c.alertText)(t.message);
                    a.$apply();
                }).catch(function(t) {
                    a.isShowOrga = !1, (0, c.log)(t);
                });
            },
            activityClick: function() {
                var a = this;
                if (100 == this.myActivityData.templateType) return (0, c.skip)("/packageParty/myAchievement"), 
                !1;
                this.myActivityData.orgaId != this.orgaId ? this.$invoke("dialog", "show", {
                    title: "????????????",
                    content: "????????????" + (this.myActivityData.orgaName || "????????????") + "???????????????????????????",
                    confirm: function() {
                        var t = {
                            orgaId: a.myActivityData.orgaId
                        }, e = (0, c.getPublicParam)(t);
                        (0, p.SwitchUserLogInOrga)(e).then(function(t) {
                            if (2e5 == t.code) {
                                (0, c.log)("SwitchUserLogInOrga?????????????????????????????????", t);
                                var e = t.data.mpStatus;
                                if (e && parseInt(e) > 0) return (0, c.alertText)(1 == e ? "????????????????????????????????????" : "????????????????????????????????????"), 
                                !1;
                                null === a.myActivityData.orgaId ? wx.removeStorage({
                                    key: "agencyZoneData"
                                }) : (0, c.setStorage)("agencyZoneData", {
                                    orgaId: a.myActivityData.orgaId,
                                    orgaName: a.myActivityData.orgaName,
                                    orgaType: t.data.orgaType
                                }), r.default.$instance.globalData.orgaType = t.data.orgaType, r.default.$instance.globalData.orgaAuthorize = t.data.isAuthCode, 
                                r.default.$instance.globalData.orgaUserAuth = t.data.isUserAuth, a.gotoActivityDetail("orga"), 
                                a.$apply();
                            } else (0, c.alertText)(t.message);
                        }).catch(function(a) {
                            (0, c.log)(a);
                        });
                    }
                }) : this.gotoActivityDetail();
            },
            scrolling: function(a) {
                a.detail.scrollTop > 32 ? this.isShowNickname = !0 : this.isShowNickname = !1, this.$apply();
            }
        }, o.events = {
            subUpdate: function(a, t) {
                var e = this;
                if (5 == a) {
                    var i = wx.getStorageSync("agencyZoneData");
                    if (this.orgaId = i.orgaId, this.orgaColor = i.themeColor, i && i.orgaId) {
                        this.isAgencyZone = !0;
                        var n = this.$parent.$parent.globalData.orgaType;
                        this.partyOrgaType = n, this.showPartyOrga = (1 == n || 2 == n) && 1, 1 == this.showPartyOrga && (this.collectMenu[0].txt = "??????", 
                        this.orgaColor = this.$parent.actived_color, this.loadOrgaStudyCount()), 2 == n && (this.bindCardImg = "https://reading.oss.iyougu.com/uploads/mpFront/ldtmp/applet/bindingCardGreen.png");
                    }
                    "show" !== t && (this.isShowNickname = !1), (0, c.getSystemInfo)().then(function(a) {
                        e.navigationBarHeight = a.statusBarHeight + 44, e.$apply();
                    }), this.loadMyData(), this.loadMyMsgData(), this.loadMyactivity(), this.loadOrgas(), 
                    this.isIPhoneX = this.$parent.Shipei, this.$apply();
                }
            }
        }, g = i, e(o, g);
    }
    return i(n, r.default.component), o(n, [ {
        key: "gotoGrain",
        value: function() {
            wx.navigateToMiniProgram({
                appId: "wx38c58e37e43267c2",
                envVersion: "trial",
                success: function(a) {}
            });
        }
    }, {
        key: "gotoActivityDetail",
        value: function(a) {
            1 == this.myActivityData.templateType ? "orga" == a ? wx.reLaunch({
                url: "/packageSquare/pages/activityDetail/activityDetail?activityId=" + this.myActivityData.id + "&activityName=" + this.myActivityData.activityName
            }) : (0, c.skip)("/packageSquare/pages/activityDetail/activityDetail?activityId=" + this.myActivityData.id + "&activityName=" + this.myActivityData.activityName) : 4 == this.myActivityData.templateType || 7 == this.myActivityData.templateType ? "orga" == a ? wx.reLaunch({
                url: "/packageActivity/pages/activity/activity?activityId=" + this.myActivityData.id + "&activeIndex=3"
            }) : (0, c.skip)("/packageActivity/pages/activity/activity?activityId=" + this.myActivityData.id + "&activeIndex=3") : "orga" == a ? wx.reLaunch({
                url: "/packageSquare/pages/subpage/subpage?activityId=" + this.myActivityData.id + "&templateType=" + this.myActivityData.templateType
            }) : (0, c.skip)("/packageSquare/pages/subpage/subpage?activityId=" + this.myActivityData.id + "&templateType=" + this.myActivityData.templateType);
        }
    }, {
        key: "gotoTeacherHome",
        value: function() {
            if (this.myData.teacherName && this.myData.teacherId) {
                if ("ENABLE" != this.myData.teacherStatus) return void (0, c.alertText)("????????????????????????????????????????????????????????????????????????????????????");
                (0, c.skip)("/packageRecite/pages/teacher/teacher?teacherName=" + this.myData.teacherName + "&teacherId=" + this.myData.teacherId);
            } else {
                var a = wx.getStorageSync("agencyZoneData") || "";
                a && a.orgaId ? (0, c.skip)("/packageRecite/pages/writeData/writeData?orgaId=" + a.orgaId + "&orgaName=" + a.orgaName + "&is_agencyZone=true") : (0, 
                c.skip)("/packageRecite/pages/writeData/writeData");
            }
        }
    }, {
        key: "loadMyData",
        value: function() {
            var a = this;
            (0, p.GetMyData)((0, c.getPublicParam)({})).then(function(t) {
                2e5 == t.code ? (a.myData = t.data, a.myData.opusCount = a.myData.activityCount + a.myData.draftCount + a.myData.publishCount, 
                a.$apply()) : (0, c.log)(t);
            }).catch(function(a) {
                (0, c.log)(a);
            });
        }
    }, {
        key: "loadMyMsgData",
        value: function() {
            var a = this;
            (0, p.GetMyMsgData)((0, c.getPublicParam)({})).then(function(t) {
                2e5 == t.code ? (a.myMsgData = t.data, a.myMsgData.feedBackCount > 99 && (a.myMsgData.feedBackCount = "99+"), 
                a.$apply()) : (0, c.alertText)(t.message);
            }).catch(function(a) {
                (0, c.log)(a);
            });
        }
    }, {
        key: "loadMyactivity",
        value: function() {
            var a = this, t = (0, c.getPublicParam)({
                pageNum: 1,
                pageSize: 1
            });
            (0, p.GetMyActivitys)(t).then(function(t) {
                2e5 == t.code && (a.myActivityData = t.data.list[0], a.$apply());
            }).catch(function(a) {
                (0, c.log)(a);
            });
        }
    }, {
        key: "loadOrgas",
        value: function() {
            var a = this;
            (0, p.ChangeOrgas)((0, c.getPublicParam)({})).then(function(t) {
                2e5 == t.code && (a.orgaData = t.data, a.orgaData[0].checked = !0, a.orgaItem = a.orgaData[0], 
                a.$apply());
            }).catch(function(a) {
                (0, c.log)(a);
            });
        }
    }, {
        key: "updateReplyStat",
        value: function() {
            var a = this, t = (0, c.getPublicParam)("");
            (0, p.GetReplyStatus)(t).then(function(t) {
                "200000" == t.code && (a.myMsgData.feedBackCount = 0, a.$apply());
            }).catch(function(a) {
                (0, c.alertText)(a);
            });
        }
    }, {
        key: "loadOrgaStudyCount",
        value: function() {
            var a = this;
            (0, p.GetMineStudyCount)((0, c.getPublicParam)({})).then(function(t) {
                a.partyMain = t.data, a.$apply();
            }).catch(function(a) {
                console.log(a);
            });
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "onShareAppMessage",
        value: function() {
            var a = g.imgBaseUrl + "share.png";
            return (0, c.shareApp)("", "", a);
        }
    } ]), n;
}();

exports.default = y;