function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e ? t : e;
}

function r(t, e) {
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

for (var o = function() {
    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, r, i) {
        return r && t(e.prototype, r), i && t(e, i), e;
    };
}(), n = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../npm/wepy/lib/wepy.js")), a = (require("./../../common/js/util.js"), 
new Date()), u = [], l = [], s = [], c = [], f = [], h = a.getFullYear(); h <= a.getFullYear() + 5; h++) u.push(h + "年");

for (var p = 1; p <= 12; p++) p < 10 && (p = "0" + p), l.push(p + "月");

var y = 0;

y = a.getMonth() + 1 == 4 || a.getMonth() + 1 == 6 || a.getMonth() + 1 == 9 || a.getMonth() + 1 == 11 ? 30 : 31;

for (var m = 1; m <= y; m++) m < 10 && (m = "0" + m), s.push(m + "日");

for (var d = 0; d < 24; d++) d < 10 && (d = "0" + d), c.push(d + "时");

for (var v = 0; v < 60; v++) v < 10 && (v = "0" + v), f.push(v + "分");

var g = function(i) {
    function a() {
        var r, i, o, n;
        t(this, a);
        for (var h = arguments.length, p = Array(h), y = 0; y < h; y++) p[y] = arguments[y];
        return i = o = e(this, (r = a.__proto__ || Object.getPrototypeOf(a)).call.apply(r, [ this ].concat(p))), 
        o.props = {
            defaultDate: {
                type: String,
                value: ""
            }
        }, o.data = {
            time: "",
            multiArray: [ u, l, s, c, f ],
            multiIndex: [ 0, 0, 0, 0, 0 ],
            choose_year: ""
        }, o.methods = {
            bindMultiPickerChange: function(t) {
                this.setmultiIndex = t.detail.value;
                var e = this.multiIndex, r = this.multiArray[0][e[0]].replace("年", "") + "-" + this.multiArray[1][e[1]].replace("月", "") + "-" + this.multiArray[2][e[2]].replace("日", "") + " " + this.multiArray[3][e[3]].replace("时", "") + ":" + this.multiArray[4][e[4]].replace("分", "");
                r.replace("年", ""), this.time = r, this.$emit("pickChange", this.time);
            },
            bindMultiPickerColumnChange: function(t) {
                if (0 == t.detail.column) {
                    var e = this.data.multiArray[t.detail.column][t.detail.value];
                    console.log(e), this.choose_year = e;
                }
                if (1 == t.detail.column) {
                    var r = parseInt(this.data.multiArray[t.detail.column][t.detail.value]), i = [];
                    if (1 == r || 3 == r || 5 == r || 7 == r || 8 == r || 10 == r || 12 == r) {
                        for (var o = 1; o <= 31; o++) o < 10 && (o = "0" + o), i.push(o + "日");
                        this.multiArray[2] = i;
                    } else if (4 == r || 6 == r || 9 == r || 11 == r) {
                        for (var n = 1; n <= 30; n++) n < 10 && (n = "0" + n), i.push(n + "日");
                        this.multiArray[2] = i;
                    } else if (2 == r) {
                        var a = parseInt(this.data.choose_year);
                        if (console.log(a), a % 400 != 0 && a % 100 == 0 || a % 4 != 0) {
                            for (var u = 1; u <= 28; u++) u < 10 && (u = "0" + u), i.push(u + "日");
                            this.multiArray[2] = i;
                        } else {
                            for (var l = 1; l <= 29; l++) l < 10 && (l = "0" + l), i.push(l + "日");
                            this.multiArray[2] = i;
                        }
                    }
                    console.log(this.multiArray[2]);
                }
                var s = {
                    multiArray: this.multiArray,
                    multiIndex: this.multiIndex
                };
                s.multiIndex[t.detail.column] = t.detail.value;
                s.multiIndex;
                this.data = s;
            }
        }, n = i, e(o, n);
    }
    return r(a, n.default.component), o(a, [ {
        key: "updateDate",
        value: function(t) {
            var e = this.convertDateFromString(t), r = e.getFullYear() + "年";
            this.multiIndex = [ u.indexOf(r), e.getMonth(), e.getDate() - 1, e.getHours(), e.getMinutes() ], 
            this.$apply();
        }
    }, {
        key: "onLoad",
        value: function() {
            this.choose_year = this.multiArray[0][0];
            var t = this.convertDateFromString(this.defaultDate), e = t.getFullYear() + "年";
            this.multiIndex = [ u.indexOf(e), t.getMonth(), t.getDate() - 1, t.getHours(), t.getMinutes() ], 
            this.$apply();
        }
    }, {
        key: "convertDateFromString",
        value: function(t) {
            return t += ":01", t = t.substring(0, 19), t = t.replace(/-/g, "/"), t = new Date(t);
        }
    } ]), a;
}();

exports.default = g;