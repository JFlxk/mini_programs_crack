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
}(require("./../../npm/wepy/lib/wepy.js")), i = require("./../../api/index.js"), s = require("./../../common/js/util.js"), u = function(n) {
    function u() {
        var o, n, r, a;
        e(this, u);
        for (var i = arguments.length, p = Array(i), l = 0; l < i; l++) p[l] = arguments[l];
        return n = r = t(this, (o = u.__proto__ || Object.getPrototypeOf(u)).call.apply(o, [ this ].concat(p))), 
        r.props = {
            is_skeleton6: {
                type: Boolean,
                default: !1,
                twoWay: !0
            }
        }, r.data = {
            pageIndex: 1,
            isShowMore: !1,
            isCanRequest: !0,
            expertsList: []
        }, r.methods = {
            gotoList: function() {
                (0, s.skip)("/packagePopular/pages/famousPeople/famousPeople");
            },
            goto: function(e) {
                this.$emit("hideInnerAudio"), (0, s.skip)("/packagePopular/pages/professioner/professioner?name=" + e.name + "&imageUrl=" + e.imageUrl + "&puserId=" + e.puserId + "&introduction=" + e.introduction);
            },
            scroll: function(e) {
                var t = this;
                t.isCanRequest && (t.pageIndex++, t.loadHotExperts());
            }
        }, a = n, t(r, a);
    }
    return o(u, a.default.component), r(u, [ {
        key: "checkStatus",
        value: function(e, t) {
            var o = this;
            t = t || 10, 1 == o.pageIndex ? (e < t ? (o.isShowMore = !0, o.isCanRequest = !1) : o.isShowMore = !1, 
            e || (o.isShowMore = !1)) : e ? o.isShowMore = !1 : (o.isShowMore = !0, o.isCanRequest = !1), 
            o.$apply();
        }
    }, {
        key: "loadHotExperts",
        value: function() {
            var e = this, t = {
                appId: "",
                pageNum: e.pageIndex,
                pageSize: 5
            }, o = (0, s.getPublicParam)(t);
            (0, i.GetProfessionalUser)(o).then(function(t) {
                if (2e5 == t.code) {
                    if (e.is_skeleton6 = !0, (0, s.log)("HotExperts名家示范获取成功：", t), !t.data.list) return !1;
                    t.data.list.forEach(function(e, t) {
                        var o = e.name;
                        e.name = (0, s.formatterStr)(o, 6, "...");
                    }), e.expertsList = e.expertsList.concat(t.data.list);
                    var o = t.data.list && t.data.list.length;
                    e.checkStatus(o, 5), e.$apply();
                } else (0, s.log)("HotExperts名家示范获取失败：", err), (0, s.alertText)(t.message);
            }).catch(function(e) {
                (0, s.log)(e);
            });
        }
    }, {
        key: "onLoad",
        value: function() {
            this.loadHotExperts();
        }
    } ]), u;
}();

exports.default = u;