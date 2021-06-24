!function(e) {
    function t() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(4294967295 * Math.random());
    }
    function n(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }
    function r(e) {
        return (n(e, "Object") || n(e, "Array")) && Object.keys(e).forEach(function(t) {
            var o = e[t];
            n(o, "Object") || n(o, "Array") ? e[t] = r(o) : e[t] = "" + o;
        }), e;
    }
    function o(e) {
        return n(e, "String") && /^\d{11}$/.test(e);
    }
    function i(e) {
        return n(e, "String") && 28 === e.length;
    }
    function a(e) {
        return new Promise(function(t, n) {
            return e.data = e.data || {}, A.blacklist && (-1 < A.blacklist.indexOf("all") && e.data.et || -1 < A.blacklist.indexOf("behavior") && "behavior" === e.data.et) ? t() : (e.data.v = S, 
            e.data.rqc = ++U, function(e) {
                return JSON.stringify(e).length <= 204800;
            }(e.data) ? (e.success = function(e) {
                return t(e);
            }, e.fail = function(e) {
                return n(e);
            }, void function(e) {
                if (!1 !== A.trackStatus) {
                    var t = e.data.et ? {
                        mtj_ii: e.data.uuid || "",
                        mtj_et: e.data.et,
                        mtj_en: e.data.en
                    } : {};
                    b.request({
                        url: e.url,
                        data: e.data,
                        header: Object.assign({
                            "content-type": "application/json"
                        }, t, e.header),
                        method: e.method || "POST",
                        dataType: e.dataType || "json",
                        success: function(t) {
                            e.success && e.success(t);
                        },
                        fail: function(t) {
                            e.fail && e.fail(t);
                        }
                    });
                }
            }(e)) : (U--, n(new Error("invalid data"))));
        });
    }
    function c(e, r) {
        var o = n(r, "Object") ? JSON.stringify(r) : "" + r;
        a({
            url: w,
            dataType: "string",
            data: Object.assign({}, q, {
                et: "error",
                en: e,
                ep: {
                    ex: o
                },
                rid: t()
            })
        });
    }
    function u(e) {
        e.rid = t(), e.aso = e.aso || {};
        var n = {
            url: w,
            dataType: "string",
            data: Object.assign({}, q, e)
        };
        a(n), (M.circleToken || M.circleByThreeFingers) && ("page" === e.et && "show" === e.en || "behavior" === e.et && "tap" === e.en) && (n.url = "https://hmma.baidu.com/mini.gif?circle=1", 
        n.data.token = M.circleToken, a(n).catch(function(e) {
            return console.error(e);
        }));
    }
    function s(e) {
        try {
            return b.getStorageSync(e);
        } catch (e) {
            c("getStorageSync", e);
        }
    }
    function f(e, t) {
        try {
            b.setStorageSync(e, t);
        } catch (e) {
            c("setStorageSync", e);
        }
    }
    function l() {
        return Promise.resolve().then(function() {
            var e = s(P);
            return n(e, "String") && 32 === e.length || (e = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(255 * Math.random())) & 15 >> e / 4).toString(16);
            }), f(P, e)), e;
        });
    }
    function h() {
        return k || (q.sid = t(), q.rqc = 0, k = Promise.all([ l(), new Promise(function(e) {
            b.getSystemInfo({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), new Promise(function(e) {
            b.getNetworkType({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = s(I), t = n(e, "Object") ? e : {};
            return new Promise(function(e) {
                b.getSetting({
                    success: function(n) {
                        n.authSetting && n.authSetting["scope.userInfo"] ? b.getUserInfo({
                            success: function(n) {
                                delete n.userInfo.errMsg, e(Object.assign(t, n.userInfo));
                            },
                            fail: function() {
                                e(t);
                            }
                        }) : e(t);
                    },
                    fail: function() {
                        e(t);
                    }
                });
            });
        }), new Promise(function(e) {
            if (!A.getLocation) return e({});
            b.getLocation({
                type: "wgs84",
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = s(T);
            return n(e, "Object") ? e : {};
        }) ]).then(function(e) {
            q.uuid = e[0], N.system = r(e[1]), N.network = r(e[2]), 0 < Object.keys(e[3]).length && (N.user = r(e[3])), 
            0 < Object.keys(e[4]).length && (N.location = r(e[4])), 0 < Object.keys(e[5]).length && (N.userProperty = JSON.stringify(e[5])), 
            "devtools" === N.system.platform && A.latestVersion && function(e, t) {
                for (var n = S.split("."), r = t.split("."), o = 0; o < 3; o++) {
                    var i = +n[o] || 0, a = +r[o] || 0;
                    if (a < i) return 1;
                    if (i < a) return -1;
                }
                return 0;
            }(0, A.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心 https://mtj.baidu.com/web/sdk/index 下载最新版本");
        }));
    }
    function p() {
        return O || (O = new Promise(function(e) {
            var t = N.system.system.match(/^iOS (\d+)/i);
            if (t && 13 < +t[1]) return e("");
            b.getClipboardData({
                success: function(t) {
                    e(t.data);
                },
                fail: function() {
                    e();
                }
            });
        }).then(function(e) {
            if (!A.disableCircling && 36 === e.length) {
                var t = e.match(/^mtj_(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/);
                return t ? (M.circleToken = "".concat(t[1], "-").concat(t[2], "-").concat(t[3], "-").concat(t[4], "-").concat(t[5]), 
                new Promise(function(e) {
                    b.setClipboardData({
                        data: "",
                        complete: function() {
                            e();
                        }
                    });
                })) : void 0;
            }
        }));
    }
    function d(e, t, n) {
        var r = t[e];
        t[e] = function(t) {
            if (n.call(this, t, e), r) return r.apply(this, arguments);
        };
    }
    function g(e) {
        _.app.forEach(function(t) {
            d(t, e, C[t]);
        }), e.mtj = $, B(e);
    }
    function m(e) {
        _.page.forEach(function(t) {
            d(t, e, V[t]);
        }), _.share.forEach(function(t) {
            !function(e, t, n) {
                var r = t[e];
                t[e] = function(e) {
                    var t = r && r.apply(this, arguments);
                    return n.call(this, e, t);
                };
            }(t, e, V[t]);
        }), Object.keys(e).forEach(function(t) {
            "function" == typeof e[t] && -1 === _.page.indexOf(t) && -1 === _.share.indexOf(t) && d(t, e, V.onAction);
        }), K(e);
    }
    function y(e) {
        return _.page.forEach(function(t) {
            d(t, e.methods, V[t]);
        }), L(e);
    }
    function v(e) {
        return _.page.forEach(function(t) {
            d(t, e.methods, V[t]);
        }), F(e);
    }
    function j() {
        var e;
        !function(e) {
            b = e;
        }(wx);
        try {
            e = require("./mtj-wx-sdk.config.js");
        } catch (e) {
            return void console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中");
        }
        e && e.appKey ? (q.key = e.appKey, A.getLocation = e.getLocation || !1, A.disableCircling = e.disableCircling || !1, 
        A.trackStatus = !(!1 === s(E)), function() {
            var e = s(x);
            if (e) {
                Object.keys(e).forEach(function(t) {
                    A[t] = e[t];
                });
                var t = e.updateTimestamp || 0;
                if (+new Date() - t < 864e5) return Promise.resolve();
            }
            a({
                url: "https://hmma.baidu.com/mini.conf",
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    type: "wx",
                    key: q.key
                }
            }).then(function(e) {
                if (e && e.data) {
                    var t = e.data;
                    Object.keys(t).forEach(function(e) {
                        A[e] = t[e];
                    }), t.updateTimestamp = +new Date(), f(x, t);
                } else c("remoteConfig", e);
            }).catch(function(e) {
                c("sendRequest", e);
            });
        }(), y.prototype.constructor = L, e.hasPlugin || (App = g, Page = m), module.exports = {
            App: g,
            Page: m,
            Behavior: y,
            Component: v
        }) : console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段");
    }
    var b, k, O, S = "1.10.10", w = "https://hmma.baidu.com/mini.gif", _ = {
        app: [ "onShow", "onHide", "onError" ],
        page: [ "onShow", "onHide" ],
        share: [ "onShareAppMessage" ],
        behavior: [ "tap" ]
    }, P = "mtj_uuid", I = "mtj_user", T = "mtj_user_property", E = "mtj_track_status", x = "mtj_remote_config", A = {}, q = {
        type: 1
    }, N = {
        aso: {}
    }, M = {}, U = 0, C = {
        onLaunch: function() {
            u({
                et: "app",
                en: "launch"
            });
        },
        onShow: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, n = (N.aso.query || []).filter(function(e) {
                return 0 === e.key.indexOf("mtj_");
            });
            return N.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? N.aso.referrerInfo = t.referrerInfo : delete N.aso.referrerInfo, 
            N.aso.path = t.path || "", N.aso.query = Object.keys(t.query || {}).map(function(e) {
                return {
                    key: e,
                    value: t.query[e]
                };
            }), 0 < n.length && !/(^|,)mtj_/.test(Object.keys(t.query || {}).join(",")) && (N.aso.query = N.aso.query.concat(n)), 
            h().then(function() {
                return function(e) {
                    return new Promise(function(t) {
                        if (!e) return t();
                        b.getShareInfo({
                            shareTicket: e,
                            success: function(e) {
                                delete e.errMsg, t(e);
                            },
                            fail: function() {
                                t({});
                            }
                        });
                    });
                }(t.shareTicket);
            }).then(function(e) {
                e ? N.aso.shareInfo = e : delete N.aso.shareInfo, u(Object.assign({
                    et: "app",
                    en: "show"
                }, N));
            }).catch(function(e) {
                c("app.onShow", e);
            });
        },
        onHide: function() {
            O = null, u({
                et: "app",
                en: "hide"
            });
        },
        onError: function(e) {
            u({
                et: "app",
                en: "error",
                ep: {
                    ex: n(e, "Object") ? JSON.stringify(r(e)) : "" + e
                }
            });
        }
    }, J = -1, R = -1, D = 0, V = {
        onShow: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            return q.path = t.route, q.query = Object.keys(t.options).map(function(e) {
                return {
                    key: e,
                    value: t.options[e]
                };
            }).filter(function(e) {
                return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
            }), h().then(p).then(function() {
                u(Object.assign({
                    et: "page",
                    en: "show"
                }, N));
            }).catch(function(e) {
                c("page.onShow", e);
            });
        },
        onHide: function() {
            u({
                et: "page",
                en: "hide",
                ep: void 0
            });
        },
        onShareAppMessage: function(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : {}, r = {
                from: e.from,
                path: n.path
            };
            if (!r.path) {
                var o = q.query.map(function(e) {
                    return e.key + "=" + e.value;
                }).join("&");
                r.path = q.path + (o ? "?" + o : "");
            }
            n.title && (r.title = "" + n.title), e.target && (r.target = JSON.stringify(e.target)), 
            u(Object.assign({
                et: "share",
                en: "action",
                ep: r
            }, N));
            var i = N.aso.query.filter(function(e) {
                return "mtj_shuuid" === e.key;
            }), a = i[0] ? i[0].value.split("_") : [];
            q.uuid !== a[a.length - 1] && a.push(q.uuid);
            var c = a.slice(Math.max(0, a.length - 3)).join("_");
            return n.path = function(e, t, n) {
                var r = 0 < (e = e.replace(new RegExp(t + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?";
                return e + r + t + "=" + encodeURIComponent(n);
            }(r.path, "mtj_shuuid", c), n;
        },
        onAction: function(e, t) {
            if (e && e.type && e.currentTarget) if ("tap" !== e.type) {
                if ("touchmove" === e.type && e.touches instanceof Array) {
                    if (-1 !== J) return;
                    if (3 === e.touches.length) {
                        if (D += 1, clearTimeout(R), 3 === D) return M.circleByThreeFingers = !0, M.circleToken = void 0, 
                        void u(Object.assign({
                            et: "page",
                            en: "show"
                        }, N));
                        J = setTimeout(function() {
                            J = -1, R = setTimeout(function() {
                                D = 0;
                            }, 500);
                        }, 1e3);
                    }
                }
            } else {
                var n = [ {
                    key: "xpath",
                    value: "#" + (e.currentTarget.id || t)
                } ];
                u(Object.assign({
                    et: "behavior",
                    en: "tap",
                    ep: {
                        data: n
                    }
                }, N));
            }
        }
    }, $ = {
        trackEvent: function(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            if (!function(e) {
                return n(e, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(e);
            }(e)) return Promise.reject(new Error("事件名称不合法"));
            var o = Object.keys(r).filter(function(e) {
                return function(e) {
                    return n(e, "String") && /^[a-z0-9_]{1,32}$/.test(e);
                }(e) && function(e) {
                    return n(e, "String") || n(e, "Number");
                }(r[e]);
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + r[e],
                    type: n(r[e], "String") ? "string" : "number"
                };
            });
            return h().then(function() {
                u(Object.assign({
                    et: "event",
                    en: "" + e,
                    ep: {
                        data: o
                    }
                }, N));
            }).catch(function(e) {
                c("trackEvent", e);
            });
        },
        setTrackStatus: function(e) {
            n(e, "Boolean") && (A.trackStatus = e, f(E, e));
        },
        setUserInfo: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, r = t.tel, a = t.openId;
            return h().then(function() {
                var e = s(I), t = n(e, "Object") ? e : {};
                o(r) && (t.tel = N.user.tel = r.substr(r.length - 11)), i(a) && (t.openId = N.user.openId = a), 
                (t.tel || t.openId) && f(I, t), n(r, "Undefined") || o(r) || console.error("手机号 ".concat(r, " 不合法")), 
                n(a, "Undefined") || i(a) || console.error("openid ".concat(a, " 不合法"));
            }).catch(function(e) {
                c("setUserInfo", e);
            });
        },
        setUserId: function(e) {
            return Promise.resolve().then(function() {
                if (!(n(e, "String") || n(e, "Number") && Number.isFinite(e))) return Promise.reject(new Error("userId只能是字符串或数字"));
                var t = "" + e, r = s(T), o = n(r, "Object") ? r : {};
                if (!o.uid_ || o.uid_[0] !== t) {
                    o.uid_ = [ t, "1" ], f(T, o), N.userProperty = JSON.stringify(o);
                    var i = [ {
                        key: "uid",
                        value: t
                    } ];
                    return h().then(function() {
                        u(Object.assign({
                            et: "api",
                            en: "setUserId",
                            ep: {
                                data: i
                            }
                        }, N));
                    }).catch(function(e) {
                        c("setUserId", e);
                    });
                }
            });
        },
        setUserProperty: function(e) {
            return Promise.resolve().then(function() {
                var t = s(T), r = n(t, "Object") ? t : {};
                if (n(e, "Null")) Object.keys(r).forEach(function(e) {
                    "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1) && delete r[e];
                }); else if (!n(e, "Object")) return Promise.reject(new Error("userProperty必须是对象"));
                var o = Object.keys(r).filter(function(e) {
                    return "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1);
                }).length;
                Object.keys(e || {}).forEach(function(t) {
                    var i = e[t];
                    "" !== t && "_" !== t.charAt(0) && "_" !== t.charAt(t.length - 1) && (n(i, "Null") ? r[t] && (delete r[t], 
                    o--) : !(n(i, "String") || n(i, "Number") && Number.isFinite(i)) || 256 < t.length || 256 < ("" + i).length || !r[t] && 100 <= o || (r[t] || o++, 
                    r[t] = [ i, "1" ]));
                }), f(T, r), N.userProperty = JSON.stringify(r);
            });
        }
    }, B = App, K = Page, L = Behavior, F = Component;
    j(), e.init = j;
}({});