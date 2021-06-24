function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : n(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), s = (require("./../../common/js/util.js"), 
function(n) {
    function s() {
        var o, n, i, r;
        t(this, s);
        for (var c = arguments.length, u = Array(c), l = 0; l < c; l++) u[l] = arguments[l];
        return n = i = e(this, (o = s.__proto__ || Object.getPrototypeOf(s)).call.apply(o, [ this ].concat(u))), 
        i.props = {
            isShowContest: {
                type: Boolean,
                default: !1
            },
            contestList: {
                type: Array,
                default: []
            },
            isShowSummitBtn: {
                type: Boolean,
                default: !1
            },
            isEmptyStatus: {
                type: Boolean,
                default: !1
            }
        }, i.data = {
            currentContest: null,
            isSelect: !1
        }, i.methods = {
            NoTap: function() {},
            commit: function() {
                var t = this;
                this.currentContest && this.isSelect && (this.$emit("commiting", this.currentContest), 
                setTimeout(function() {
                    t.isSelect = !1;
                }, 500));
            },
            onConctrolBgmProp: function() {
                this.$emit("onConctrolBgmProp");
            },
            onChooseContest: function(t, e) {
                this.currentContest = t.id;
                for (var o = 0, n = this.contestList.length; o < n; o++) t.id != this.contestList[o].id || this.contestList[o].isChoose ? (t.id == this.contestList[o].id ? this.isSelect = !1 : this.isSelect || (this.isSelect = !1), 
                this.contestList[o].isChoose = !1) : (this.contestList[o].isChoose = !0, this.isSelect = !0, 
                this.$emit("chooseContestItem", t));
            }
        }, r = n, e(i, r);
    }
    return o(s, i.default.component), s;
}());

exports.default = s;