function e(e) {
    for (var n = new Array(), t = void 0, a = e.length, r = 0; r < a; r++) (t = e.charCodeAt(r)) >= 65536 && t <= 1114111 ? (n.push(t >> 18 & 7 | 240), 
    n.push(t >> 12 & 63 | 128), n.push(t >> 6 & 63 | 128), n.push(63 & t | 128)) : t >= 2048 && t <= 65535 ? (n.push(t >> 12 & 15 | 224), 
    n.push(t >> 6 & 63 | 128), n.push(63 & t | 128)) : t >= 128 && t <= 2047 ? (n.push(t >> 6 & 31 | 192), 
    n.push(63 & t | 128)) : n.push(255 & t);
    return n;
}

function n() {
    console.log.apply(console, arguments);
}

function t(e, n, t, a) {
    console.log(e), wx.showToast({
        title: e,
        icon: n || "success",
        image: t || "",
        duration: 2e3,
        mask: !0,
        complete: a
    });
}

function a(e) {
    wx.navigateTo({
        url: e
    });
}

function r() {
    var e = new Date(), n = e.getFullYear(), t = e.getMonth() + 1, a = e.getDate();
    return n + "-" + (t < 10 ? "0" + t : t) + "-" + (a < 10 ? "0" + a : a);
}

function s(e, n) {
    var t = !1, a = o(r(), e) < 1, s = o(r(), n) > -1;
    return a && s && (t = !0), t;
}

function o(e, n) {
    var t = c(e).getTime(), a = c(n).getTime();
    return a > t ? 1 : a == t ? 0 : -1;
}

function c(e) {
    var n;
    return n = e.indexOf("-") > -1 ? e.split("-") : e.indexOf("/") > -1 ? e.split("/") : e.split("."), 
    new Date(n[0], n[1] - 1, n[2]);
}

var i = require("./../../api/config.js"), u = require("./../../npm/sm-crypto/src/index.js"), g = require("./../../npm/md5/md5.js"), f = require("./crypto.js"), l = {
    sessionId: null,
    phoneNumber: null,
    uid: null
}, p = !1, b = function() {
    return p;
}, k = function(e) {
    p = e;
}, I = !1;

module.exports = {
    updateApp: function() {
        n("执行了updateApp");
        var e = wx.getUpdateManager();
        e.onUpdateReady(function() {
            e.applyUpdate();
        }), e.onUpdateFailed(function() {
            t("版本下载失败", "", "./../images/warning.png");
        });
    },
    getScene: function(e) {
        var t = e.scene;
        switch (n("执行getScene：", t), t) {
          case 1001:
            n("场景值ID：" + t + "，来源：发现栏小程序主入口");
            break;

          case 1005:
            n("场景值ID：" + t + "，来源：顶部搜索框的搜索结果页");
            break;

          case 1006:
            n("场景值ID：" + t + "，来源：发现栏小程序主入口搜索框的搜索结果页");
            break;

          case 1007:
            n("场景值ID：" + t + "，来源：单人聊天会话中的小程序消息卡片");
            break;

          case 1008:
            n("场景值ID：" + t + "，来源：群聊会话中的小程序消息卡片");
            break;

          case 1011:
            n("场景值ID：" + t + "，来源：扫描二维码");
            break;

          case 1012:
            n("场景值ID：" + t + "，来源：长按图片识别二维码");
            break;

          case 1013:
            n("场景值ID：" + t + "，来源：手机相册选取二维码");
            break;

          case 1014:
            n("场景值ID：" + t + "，来源：小程序模版消息");
            break;

          case 1017:
            n("场景值ID：" + t + "，来源：前往体验版的入口页");
            break;

          case 1019:
            n("场景值ID：" + t + "，来源：微信钱包");
            break;

          case 1020:
            n("场景值ID：" + t + "，来源：公众号 profile 页相关小程序列表(可获取来源公众号 appId)");
            break;

          case 1022:
            n("场景值ID：" + t + "，来源：聊天顶部置顶小程序入口");
            break;

          case 1023:
            n("场景值ID：" + t + "，来源：安卓系统桌面图标");
            break;

          case 1024:
            n("场景值ID：" + t + "，来源：小程序 profile 页");
            break;

          case 1025:
            n("场景值ID：" + t + "，来源：扫描一维码");
            break;

          case 1026:
            n("场景值ID：" + t + "，来源：附近小程序列表");
            break;

          case 1027:
            n("场景值ID：" + t + "，来源：顶部搜索框搜索结果页“使用过的小程序”列表");
            break;

          case 1028:
            n("场景值ID：" + t + "，来源：我的卡包");
            break;

          case 1029:
            n("场景值ID：" + t + "，来源：卡券详情页");
            break;

          case 1030:
            n("场景值ID：" + t + "，来源：自动化测试下打开小程序");
            break;

          case 1031:
            n("场景值ID：" + t + "，来源：长按图片识别一维码");
            break;

          case 1032:
            n("场景值ID：" + t + "，来源：手机相册选取一维码");
            break;

          case 1034:
            n("场景值ID：" + t + "，来源：微信支付完成页");
            break;

          case 1035:
            n("场景值ID：" + t + "，来源：公众号自定义菜单(可获取来源公众号 appId)");
            break;

          case 1036:
            n("场景值ID：" + t + "，来源：App 分享消息卡片");
            break;

          case 1037:
            n("场景值ID：" + t + "，来源：小程序打开小程序");
            break;

          case 1038:
            n("场景值ID：" + t + "，来源：从另一个小程序返回");
            break;

          case 1039:
            n("场景值ID：" + t + "，来源：摇电视");
            break;

          case 1042:
            n("场景值ID：" + t + "，来源：添加好友搜索框的搜索结果页");
            break;

          case 1043:
            n("场景值ID：" + t + "，来源：公众号模板消息(可获取来源公众号 appId)");
            break;

          case 1044:
            n("场景值ID：" + t + "，来源：带 shareTicket 的小程序消息卡片");
            break;

          case 1047:
            n("场景值ID：" + t + "，来源：扫描小程序码");
            break;

          case 1049:
            n("场景值ID：" + t + "，来源：手机相册选取小程序码");
            break;

          case 1052:
            n("场景值ID：" + t + "，来源：卡券的适用门店列表");
            break;

          case 1053:
            n("场景值ID：" + t + "，来源：搜一搜的结果页");
            break;

          case 1054:
            n("场景值ID：" + t + "，来源：顶部搜索框小程序快捷入口");
            break;

          case 1056:
            n("场景值ID：" + t + "，来源：音乐播放器菜单");
            break;

          case 1057:
            n("场景值ID：" + t + "，来源：钱包中的银行卡详情页");
            break;

          case 1058:
            n("场景值ID：" + t + "，来源：公众号文章");
            break;

          case 1059:
            n("场景值ID：" + t + "，来源：体验版小程序绑定邀请页");
            break;

          case 1064:
            n("场景值ID：" + t + "，来源：微信连Wi-Fi状态栏");
            break;

          case 1067:
            n("场景值ID：" + t + "，来源：公众号文章广告");
            break;

          case 1068:
            n("场景值ID：" + t + "，来源：附近小程序列表广告");
            break;

          case 1071:
            n("场景值ID：" + t + "，来源：钱包中的银行卡列表页");
            break;

          case 1072:
            n("场景值ID：" + t + "，来源：二维码收款页面");
            break;

          case 1073:
            n("场景值ID：" + t + "，来源：客服消息列表下发的小程序消息卡片");
            break;

          case 1074:
            n("场景值ID：" + t + "，来源：公众号会话下发的小程序消息卡片");
            break;

          case 1078:
            n("场景值ID：" + t + "，来源：连Wi-Fi成功页");
            break;

          case 1089:
            n("场景值ID：" + t + "，来源：微信聊天主界面下拉");
            break;

          case 1090:
            n("场景值ID：" + t + "，来源：长按小程序右上角菜单唤出最近使用历史");
            break;

          case 1092:
            n("场景值ID：" + t + "，来源：城市服务入口");
            break;

          default:
            n("未知来源...");
        }
    },
    formatMonth: function(e) {
        var n = "";
        switch (e) {
          case "01":
            n = "一月";
            break;

          case "02":
            n = "二月";
            break;

          case "03":
            n = "三月";
            break;

          case "04":
            n = "四月";
            break;

          case "05":
            n = "五月";
            break;

          case "06":
            n = "六月";
            break;

          case "07":
            n = "七月";
            break;

          case "08":
            n = "八月";
            break;

          case "09":
            n = "九月";
            break;

          case "10":
            n = "十月";
            break;

          case "11":
            n = "十一月";
            break;

          case "21":
            n = "十二月";
        }
        return n;
    },
    formatTime: function(e, n) {
        var t = e / 60, a = parseInt(t);
        a < 10 && (a = "0" + a);
        var r = e % 60, s = parseInt(r);
        return s < 10 && (s = "0" + s), n && 1 == n ? a + ":" + s : a + "'" + s + "''";
    },
    shareApp: function(e, t, a, r) {
        return n("分享：" + e + "," + t + "," + a + "，imgBaseUrl:", i.imgBaseUrl + "share.png"), 
        {
            title: e || "让朗读成为一种习惯",
            path: t || "/pages/mainpage/mainpage",
            imageUrl: a || "",
            success: function(e) {
                r(), console.log("分享成功：", e);
            },
            fail: function(e) {}
        };
    },
    setTitle: function(e) {
        wx.setNavigationBarTitle({
            title: e
        });
    },
    log: n,
    setStorage: function(e, n) {
        wx.setStorage({
            key: e,
            data: n,
            success: function(e) {
                console.log("数据缓存成功：", e);
            },
            fail: function(e) {
                console.log("数据缓存失败：", e);
            }
        });
    },
    getStorage: function(e) {
        return new Promise(function(n, t) {
            wx.getStorage({
                key: e,
                success: function(e) {
                    n(e);
                },
                fail: function(e) {
                    t(e);
                }
            });
        });
    },
    getStorageSync: function(e) {
        return wx.getStorageSync(e);
    },
    removeStorage: function(e) {
        wx.removeStorage({
            key: e,
            success: function(e) {
                console.log("移除缓存数据成功：", e);
            },
            fail: function(e) {
                console.log("移除缓存数据失败：", e);
            }
        });
    },
    alert: t,
    alertText: function(e, n, t) {
        console.log(e), wx.showToast({
            title: e,
            duration: n || 1500,
            mask: !0,
            icon: "none",
            complete: t
        });
    },
    showModal: function(e, n, t, a) {
        wx.showModal({
            title: e || "提示",
            content: n || "这是一个模态弹窗",
            success: function(e) {
                e.confirm ? (t(), console.log("用户点击确定")) : e.cancel && (a(), console.log("用户点击取消"));
            }
        });
    },
    getCurrentPageUrl: function() {
        var e = getCurrentPages();
        return e[e.length - 1].route;
    },
    getCurrentPageUrlWithArgs: function() {
        var e = getCurrentPages(), n = e[e.length - 1], t = n.route, a = n.options, r = t + "?";
        for (var s in a) r += s + "=" + a[s] + "&";
        return r = r.substring(0, r.length - 1);
    },
    getCurrentPagesParams: function() {
        var e = getCurrentPages();
        return e[e.length - 1].options;
    },
    skip: a,
    redirectTo: function(e) {
        wx.redirectTo({
            url: e
        });
    },
    back: function(e) {
        var n = e || 1;
        wx.navigateBack({
            delta: n
        });
    },
    getLocation: function() {
        return new Promise(function(e, n) {
            wx.getLocation({
                type: "gcj02",
                success: function(n) {
                    e(n);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    openLocation: function(e, n) {
        wx.openLocation({
            latitude: e,
            longitude: n
        });
    },
    showLoading: function(e) {
        wx.showLoading({
            title: e,
            mask: !0,
            success: function(e) {}
        });
    },
    hideLoading: function() {
        wx.hideLoading({
            fail: function() {}
        });
    },
    getSessionId: function(e) {
        return wx.getStorageSync(e);
    },
    formatContent: function(e) {
        return e.replace(/\s/g, "");
    },
    formatContentToWrap: function(e) {
        return e.split("↵");
    },
    formatDate: function(e) {
        return e.split(" ")[0].split("-");
    },
    isPoneAvailable: function(e) {
        return !!/^[1][0-9]{10}$/.test(e);
    },
    strToArr: function(e) {
        return e.split(",");
    },
    checkSession: function() {
        return new Promise(function(e, n) {
            wx.checkSession({
                success: function() {
                    e();
                },
                fail: function() {
                    n();
                }
            });
        });
    },
    getParams: function(e) {
        var n = new Object();
        if (-1 != e.indexOf("?")) {
            var t = e.split("?")[1];
            if (-1 != t.indexOf("&")) for (var a = t.split("&"), r = 0; r < a.length; r++) n[a[r].split("=")[0]] = a[r].split("=")[1]; else n[t.split("=")[0]] = t.split("=")[1];
        }
        return n;
    },
    isIOS: function(e) {
        return /(iOS)/.test(e);
    },
    openSetting: function() {
        return new Promise(function(e, n) {
            wx.openSetting({
                success: function(n) {
                    e(n);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    getSystemInfo: function() {
        return new Promise(function(e, n) {
            wx.getSystemInfo({
                success: function(n) {
                    e(n);
                },
                fail: function(e) {
                    n(e);
                }
            });
        });
    },
    setKeepScreenOn: function() {
        wx.setKeepScreenOn({
            keepScreenOn: !0,
            success: function() {
                n("setKeepScreenOn...");
            }
        });
    },
    getUserInfo: function(e) {
        return l[e];
    },
    getPublicParam: function(e) {
        var n = new Date().getTime().toString(), t = "", a = "", r = "34579e94698e469d971efeaa9d2d77da";
        l.sessionId && (r = l.sessionId, t = l.sessionId);
        var s = [ r.substring(0, 16), r.substring(16) ], o = f.enc.Utf8.parse(s[0]), c = f.enc.Utf8.parse(s[1]), i = f.enc.Utf8.parse(n), u = f.AES.encrypt(i, o, {
            iv: c,
            mode: f.mode.CBC,
            padding: f.pad.Pkcs7
        }).toString(), p = g(n + s[1]);
        wx.getStorageSync("agencyZoneData") && (a = wx.getStorageSync("agencyZoneData").orgaId);
        var b = {
            data: e,
            encrypt: u,
            sessionId: t,
            logInOrgaId: a,
            sign: p
        };
        return console.log("请求的参数：", b), b;
    },
    getdate: r,
    inDate: function(e, n) {
        return s(e.y + "-" + e.m + "-" + e.d, n.y + "-" + n.m + "-" + n.d);
    },
    isDateBetween: s,
    formatTimestamp: function(e, n) {
        n = n || "-";
        var t = new Date(e), a = t.getFullYear(), r = t.getMonth() + 1;
        r = r < 10 ? "0" + r : r;
        var s = t.getDate();
        s = s < 10 ? "0" + s : s;
        var o = t.getHours();
        o = o < 10 ? "0" + o : o;
        var c = t.getMinutes();
        return c = c < 10 ? "0" + c : c, a + n + r + n + s + " " + o + ":" + c;
    },
    formatterStr: function(e, n, t) {
        return e.length <= n ? e : (t = t || "", e.substring(0, n) + t);
    },
    getRandomArrayElements: function(e, n) {
        for (var t, a, r = e.slice(0), s = e.length, o = s - n; s-- > o; ) t = r[a = Math.floor((s + 1) * Math.random())], 
        r[a] = r[s], r[s] = t;
        return r.slice(o);
    },
    transferNumber: function(e, n) {
        var t = e.toString();
        if (t.length < 5) return t;
        if (t.length > 8) {
            var a = t.substring(t.length - 8, t.length - 8 + n);
            return parseFloat(parseInt(e / 1e8) + "." + a) + "亿";
        }
        if (t.length > 4) {
            var r = t.substring(t.length - 4, t.length - 4 + n);
            return parseFloat(parseInt(e / 1e4) + "." + r) + "w";
        }
    },
    checkLogin: function(e, n) {
        if (!l.sessionId || !l.uid || !l.phoneNumber) {
            if (n) return n();
            if (b()) return;
            return k(!0), a("/pages/login/login");
        }
        e && e();
    },
    setUserInfo: function(e) {
        l = e;
    },
    getLogining: b,
    setLogining: k,
    getIsOpenedReadWall: function() {
        return I;
    },
    setIsOpenedReadWall: function(e) {
        I = e;
    },
    gotoApplet: function() {
        wx.navigateToMiniProgram({
            appId: "wx82014462acb8689c",
            path: "",
            envVersion: "trial",
            success: function(e) {}
        });
    },
    decryCall: function(e, n) {
        return u.sm4.decrypt(e, n);
    },
    getKeyVal: function() {
        var n = wx.getStorageSync("CulturalKey");
        return n = n.substr(5, 16).toLowerCase(), e(n);
    },
    setKeyVal: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "qxpm7r9vebm5whfz", n = "t13%S";
        n = n.concat(e).toUpperCase().concat("yE"), wx.setStorageSync("CulturalKey", n);
    }
};