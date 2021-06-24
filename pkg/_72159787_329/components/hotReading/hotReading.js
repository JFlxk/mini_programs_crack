function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t;
}

function o(e, t) {
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

var r = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var a = t[o];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, o, a) {
        return o && e(t.prototype, o), a && e(t, a), t;
    };
}(), n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), i = require("./../../api/index.js"), u = require("./../../common/js/util.js"), l = function(a) {
    function l() {
        var o, a, r, n;
        e(this, l);
        for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
        return a = r = t(this, (o = l.__proto__ || Object.getPrototypeOf(l)).call.apply(o, [ this ].concat(s))), 
        r.props = {
            is_skeleton4: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, r.data = {
            resourceList: [],
            hotResourceList: [],
            hotTypeList: [],
            orgaColor: "#3B87DD"
        }, r.events = {
            updateOrgaColor: function(e) {
                e && (this.orgaColor = e);
            }
        }, r.methods = {
            gotoTopCategory: function() {
                (0, u.skip)("/packagePopular/pages/topCategory/topCategory");
            },
            gotochildMaterial: function(e) {
                this.$emit("hideInnerAudio");
                var t = e.levelType;
                (0, u.skip)("/packageReading/pages/childMaterial/childMaterial?dub_type=" + e.type + "&id=" + e.resourceTypeId + "&resourceTypeId=" + e.resourceTypeId + "&cateType=" + e.cateType + "&resouceTypeName=" + e.remark + "&levelType=" + t + (e.type > 1 ? "&isNext=" + (t > 2 || null == t ? 0 : 1) : "") + (e.paId > 0 && (t >= 2 || null == t) ? "&paId=" + e.paId : ""));
            },
            changeMaterial: function() {
                var e = this;
                e.hotResourceList = (0, u.getRandomArrayElements)(e.resourceList, 3), e.hotResourceList.forEach(function(e, t) {
                    var o = e.count.toString();
                    if (-1 != o.indexOf("w") || -1 != o.indexOf("亿")) e.count = o; else {
                        var a = (0, u.transferNumber)(e.count, 1);
                        e.count = a;
                    }
                }), (0, u.log)(e.hotResourceList), e.$apply();
            },
            gotoRecord: function(e, t, o, a, r) {
                var n = this;
                (0, u.checkLogin)(function() {
                    n.$emit("hideInnerAudio", "1"), n.$parent.$parent.$parent.globalData.textId = e, 
                    n.$parent.$parent.$parent.globalData.textTitle = t, n.$parent.$parent.$parent.globalData.textAuthor = o, 
                    n.$parent.$parent.$parent.globalData.textContent = a, n.$parent.$parent.$parent.globalData.isCustom = 0, 
                    n.$apply(), n.getGetMaterialDetail(e);
                });
            },
            audition: function(e, t) {
                1 == e ? t ? (this.$emit("hideInnerAudio"), (0, u.skip)("/packageSquare/pages/newOpusDetail/newOpusDetail?opusId=" + t)) : (0, 
                u.alertText)("暂无试听作品!") : 2 == e && (0, u.skip)("/packagePopular/pages/professionerDetail/professionerDetail?opusId=" + t);
            }
        }, n = a, t(r, n);
    }
    return o(l, n.default.component), r(l, [ {
        key: "getGetMaterialDetail",
        value: function(e) {
            (0, u.showLoading)("玩命加载中...");
            var t = this, o = {
                isMyResource: 0,
                resourceId: e
            }, a = (0, u.getPublicParam)(o);
            (0, i.GetMaterialDetail)(a).then(function(e) {
                setTimeout(function() {
                    wx.hideLoading();
                }, 500), 2e5 == e.code ? ((0, u.log)("素材详情获取成功：", e), "ENABLE" == e.data.status ? (t.$parent.$parent.$parent.globalData.isCollect = e.data.isCollect, 
                t.$parent.$parent.$parent.globalData.textAlign = e.data.textAlign, t.$apply(), wx.getBackgroundAudioManager().stop(), 
                (0, u.skip)("/pages/recording/recording")) : (0, u.alert)("该素材已被停用，请选择其他素材。", "none", "", 3e3)) : ((0, 
                u.log)("素材详情获取失败：", e), (0, u.log)(e.message));
            }).catch(function(e) {
                setTimeout(function() {
                    wx.hideLoading();
                }, 500), (0, u.alert)("获取数据异常"), (0, u.log)(e);
            });
        }
    }, {
        key: "loadHotResource",
        value: function() {
            var e = this, t = (0, u.getPublicParam)("");
            (0, i.GetHotResource)(t).then(function(t) {
                if (2e5 == t.code) {
                    if (e.is_skeleton4 = !0, (0, u.log)("GetHotResource热门素材获取成功：", t), null == t.data || !t.data.length) return !1;
                    e.resourceList = t.data, e.hotResourceList = t.data.slice(0, 3), e.hotResourceList.forEach(function(e, t) {
                        var o = (0, u.transferNumber)(e.count, 1);
                        e.count = o;
                    }), (0, u.log)("hotResourceList热门素材数据：", e.hotResourceList), e.$apply();
                } else (0, u.log)("GetHotResource热门素材获取失败：", err), (0, u.alertText)(t.message);
            }).catch(function(e) {
                (0, u.log)(e);
            });
        }
    }, {
        key: "loadHotType",
        value: function() {
            var e = this, t = (0, u.getPublicParam)("");
            (0, i.GetHotType)(t).then(function(t) {
                if (2e5 == t.code) {
                    if ((0, u.log)("GetHotType热门分类获取成功：", t), !t.data) return !1;
                    e.hotTypeList = t.data.slice(0, 3), e.hotTypeList.forEach(function(e, t) {
                        var o = (0, u.transferNumber)(e.count, 1);
                        e.count = o;
                    }), (0, u.log)("hotTypeList热门分类数据：", e.hotTypeList), e.$apply();
                } else (0, u.log)("GetHotType热门分类获取失败：", err), (0, u.alertText)(t.message);
            }).catch(function(e) {
                (0, u.log)(e);
            });
        }
    }, {
        key: "onLoad",
        value: function() {
            this.loadHotResource(), this.loadHotType();
        }
    } ]), l;
}();

exports.default = l;