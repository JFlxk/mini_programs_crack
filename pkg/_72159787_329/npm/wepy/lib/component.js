function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function i(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

function e(t, i) {
    return "function" == typeof t[i] ? (console.warn('You are not allowed to define a function "' + i + '" in data.'), 
    0) : -1 !== [ "data", "props", "methods", "events", "mixins" ].indexOf(i) ? (console.warn('"' + i + '" is reserved word, please fix it.'), 
    0) : "$" === i[0] ? (console.warn('"' + i + ': You can not define a property started with "$"'), 
    0) : 1;
}

function n(t, i) {
    var e = t.events ? t.events[i] : t.$events[i] ? t.$events[i] : void 0, n = void 0 === e ? "undefined" : r(e), o = void 0;
    if ("string" === n) {
        var a = t.methods && t.methods[e];
        "function" == typeof a && (o = a);
    } else ("function" === n || Array.isArray(e)) && (o = e);
    return o;
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = function() {
    function t(t, i) {
        for (var e = 0; e < i.length; e++) {
            var n = i[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(i, e, n) {
        return e && t(i.prototype, e), n && t(i, n), i;
    };
}(), r = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : o(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t);
}, s = t(require("./event.js")), p = t(require("./util.js")), f = {
    check: function(t, i) {
        switch (t) {
          case String:
            return "string" == typeof i;

          case Number:
            return "number" == typeof i;

          case Boolean:
            return "boolean" == typeof i;

          case Function:
            return "function" == typeof i;

          case Object:
            return "object" === (void 0 === i ? "undefined" : r(i));

          case Array:
            return "[object Array]" === toString.call(i);

          default:
            return i instanceof t;
        }
    },
    build: function(t) {
        var i = {};
        return "string" == typeof t ? i[t] = {} : "[object Array]" === toString.call(t) ? t.forEach(function(t) {
            i[t] = {};
        }) : Object.keys(t).forEach(function(e) {
            "function" == typeof t[e] ? i[e] = {
                type: [ t[e] ]
            } : "[object Array]" === toString.call(t[e]) ? i[e] = {
                type: t[e]
            } : i[e] = t[e], i[e].type && "[object Array]" !== toString.call(i[e].type) && (i[e].type = [ i[e].type ]);
        }), i;
    },
    valid: function(t, i, e) {
        var n = this, o = !1;
        if (t[i]) {
            if (t[i].type) return t[i].type.some(function(t) {
                return n.check(t, e);
            });
            o = !0;
        }
        return o;
    },
    getValue: function(t, i, e, n) {
        var o;
        return o = void 0 !== e && this.valid(t, i, e) ? e : "function" == typeof t[i].default ? t[i].default() : t[i].default, 
        t[i].coerce ? t[i].coerce.call(n, o) : o;
    }
}, h = function() {
    function t() {
        i(this, t), this.$com = {}, this.$events = {}, this.$mixins = [], this.$isComponent = !0, 
        this.$prefix = "", this.$mappingProps = {}, this.data = {}, this.methods = {};
    }
    return a(t, [ {
        key: "$init",
        value: function(t, i, n) {
            var o = this;
            this.$wxpage = t, this.$isComponent && (this.$root = i || this.$root, this.$parent = n || this.$parent, 
            this.$wxapp = this.$root.$parent.$wxapp), this.props && (this.props = f.build(this.props));
            var a = void 0, s = {}, h = this.props, c = void 0, u = void 0, $ = void 0, l = !1, d = void 0;
            if (void 0 === this.$initData ? this.$initData = p.default.$copy(this.data, !0) : this.data = p.default.$copy(this.$initData, !0), 
            this.$props) for (c in this.$props) for ($ in this.$props[c]) /\.sync$/.test($) && (this.$mappingProps[this.$props[c][$]] || (this.$mappingProps[this.$props[c][$]] = {}), 
            this.$mappingProps[this.$props[c][$]][c] = $.substring(7, $.length - 5));
            if (h) for (c in h) e(this, c) && (u = void 0, n && n.$props && n.$props[this.$name] && (u = n.$props[this.$name][c], 
            ($ = n.$props[this.$name]["v-bind:" + c + ".once"] || n.$props[this.$name]["v-bind:" + c + ".sync"]) ? "object" === (void 0 === $ ? "undefined" : r($)) ? function() {
                h[c].repeat = $.for, h[c].item = $.item, h[c].index = $.index, h[c].key = $.key, 
                h[c].value = $.value, l = !0;
                var t = $.for, i = n;
                t.split(".").forEach(function(t) {
                    i = i ? i[t] : {};
                }), !i || "object" !== (void 0 === i ? "undefined" : r(i)) && "string" != typeof i || (d = Object.keys(i)[0]), 
                o.$mappingProps[c] || (o.$mappingProps[c] = {}), o.$mappingProps[c].parent = {
                    mapping: $.for,
                    from: c
                };
            }() : (u = n[$], h[c].twoWay && (this.$mappingProps[c] || (this.$mappingProps[c] = {}), 
            this.$mappingProps[c].parent = $)) : "object" === (void 0 === u ? "undefined" : r(u)) && void 0 !== u.value && (this.data[c] = u.value)), 
            this.data[c] || h[c].repeat || (u = f.getValue(h, c, u, this), this.data[c] = u));
            "function" == typeof this.data && (this.data = this.data.apply(this.data));
            for (a in this.data) e(this, a) && (s["" + this.$prefix + a] = this.data[a], this[a] = this.data[a]);
            if (this.$data = p.default.$copy(this.data, !0), l && void 0 !== d && this.$setIndex(d), 
            this.computed) for (a in this.computed) if (e(this, a)) {
                var y = this.computed[a];
                s["" + this.$prefix + a] = y.call(this), this[a] = p.default.$copy(s["" + this.$prefix + a], !0);
            }
            this.setData(s);
            var v = Object.getOwnPropertyNames(this.$com);
            v.length && v.forEach(function(t) {
                o.$com[t].$init(o.getWxPage(), i, o);
            });
        }
    }, {
        key: "$initMixins",
        value: function() {
            var t = this;
            this.mixins ? "function" == typeof this.mixins && (this.mixins = [ this.mixins ]) : this.mixins = [], 
            this.mixins.forEach(function(i) {
                var e = new i();
                e.$init(t), t.$mixins.push(e);
            });
        }
    }, {
        key: "$onLoad",
        value: function() {
            for (var t = this, i = arguments.length, e = Array(i), n = 0; n < i; n++) e[n] = arguments[n];
            [].concat(this.$mixins, this).forEach(function(i) {
                i.onLoad && i.onLoad.apply(t, e);
            });
            var o = Object.getOwnPropertyNames(this.$com);
            o.length && o.forEach(function(i) {
                var e = t.$com[i];
                e.$onLoad.call(e);
            });
        }
    }, {
        key: "$onUnload",
        value: function() {
            for (var t = this, i = arguments.length, e = Array(i), n = 0; n < i; n++) e[n] = arguments[n];
            var o = Object.getOwnPropertyNames(this.$com);
            o.length && o.forEach(function(i) {
                var e = t.$com[i];
                e.$onUnload.call(e);
            }), [].concat(this.$mixins, this).forEach(function(i) {
                i.onUnload && i.onUnload.apply(t, e);
            });
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "setData",
        value: function(t, i) {
            if ("string" == typeof t) {
                if (i) {
                    var e = {};
                    e[t] = i, t = e;
                } else {
                    var n = {};
                    n[t] = this.data["" + t], t = n;
                }
                return this.$wxpage.setData(t);
            }
            var o = null, a = new RegExp("^" + this.$prefix.replace(/\$/g, "\\$"), "ig");
            for (o in t) {
                var r = o.replace(a, "");
                this.$data[r] = p.default.$copy(t[o], !0), p.default.isImmutable(t[o]) && (t[o] = t[o].toJS()), 
                void 0 === t[o] && delete t[o];
            }
            return "function" == typeof i ? this.$root.$wxpage.setData(t, i) : this.$root.$wxpage.setData(t);
        }
    }, {
        key: "getWxPage",
        value: function() {
            return this.$wxpage;
        }
    }, {
        key: "getCurrentPages",
        value: function(t) {
            function i() {
                return t.apply(this, arguments);
            }
            return i.toString = function() {
                return t.toString();
            }, i;
        }(function() {
            return getCurrentPages();
        })
    }, {
        key: "$setIndex",
        value: function(t) {
            var i = this;
            this.$index = t;
            var e = this.props, n = this.$parent, o = void 0, a = void 0, s = void 0;
            if (e) {
                for (o in e) a = void 0, n && n.$props && n.$props[this.$name] && (a = n.$props[this.$name][o], 
                (s = n.$props[this.$name]["v-bind:" + o + ".once"] || n.$props[this.$name]["v-bind:" + o + ".sync"]) && "object" === (void 0 === s ? "undefined" : r(s)) && function() {
                    var r = s.for, f = n;
                    if (0 === r.indexOf("[")) {
                        var h = [];
                        (r = r.substr(1, r.length - 2).trim()).split(",").forEach(function(t) {
                            var i = n;
                            t.trim().split(".").forEach(function(t) {
                                i = i ? i[t] : {};
                            }), h.push(i);
                        }), f = h;
                    } else r.split(".").forEach(function(t) {
                        f = f ? f[t] : {};
                    });
                    t = Array.isArray(f) ? +t : t, a = e[o].value === e[o].item ? f[t] : e[o].value === e[o].index ? t : e[o].value === e[o].key ? t : n[e[o].value], 
                    i.$index = t, i.data[o] = a, i[o] = a, i.$data[o] = p.default.$copy(i[o], !0);
                }());
                for (o in this.$com) this.$com[o].$index = void 0;
            }
        }
    }, {
        key: "$getComponent",
        value: function(t) {
            var i = this;
            if ("string" == typeof t) {
                if (-1 === t.indexOf("/")) return this.$com[t];
                if ("/" === t) return this.$parent;
                t.split("/").forEach(function(e, n) {
                    0 === n ? t = "" === e ? i.$root : "." === e ? i : ".." === e ? i.$parent : i.$getComponent(e) : e && (t = t.$com[e]);
                });
            }
            return "object" !== (void 0 === t ? "undefined" : r(t)) ? null : t;
        }
    }, {
        key: "$invoke",
        value: function(t, i) {
            if (!(t = this.$getComponent(t))) throw new Error("Invalid path: " + t);
            for (var e = t.methods ? t.methods[i] : "", n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
            if ("function" == typeof e) {
                var r = new s.default("", this, "invoke"), p = e.apply(t, o.concat(r));
                return t.$apply(), p;
            }
            if ("function" == typeof (e = t[i])) return e.apply(t, o);
            throw new Error("Invalid method: " + i);
        }
    }, {
        key: "$broadcast",
        value: function(t) {
            for (var i = arguments.length, e = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) e[o - 1] = arguments[o];
            for (var a = this, r = "string" == typeof t ? new s.default(t, this, "broadcast") : r, p = [ a ]; p.length && r.active; ) {
                var f = p.shift();
                for (var h in f.$com) if ("break" === function(i) {
                    i = f.$com[i], p.push(i);
                    var o = n(i, t);
                    if (o && i.$apply(function() {
                        o.apply(i, e.concat(r));
                    }), !r.active) return "break";
                    h = i;
                }(h)) break;
            }
        }
    }, {
        key: "$emit",
        value: function(t) {
            for (var i = this, e = arguments.length, o = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
            var r = this, p = this, f = new s.default(t, p, "emit");
            if (o = o.concat(f), this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                var h = this.$parent.$events[this.$name]["v-on:" + t];
                if (h && this.$parent.methods) {
                    var c = this.$parent.methods[h];
                    if ("function" == typeof c) return void this.$parent.$apply(function() {
                        c.apply(i.$parent, o);
                    });
                    throw new Error("Invalid method from emit, component is " + this.$parent.$name + ", method is " + h + ". Make sure you defined it already.\n");
                }
            }
            for (;r && void 0 !== r.$isComponent && f.active; ) !function() {
                var i = r, e = n(i, t);
                e && ("function" == typeof e ? i.$apply(function() {
                    e.apply(i, o);
                }) : Array.isArray(e) && (e.forEach(function(t) {
                    t.apply(i, o);
                }), i.$apply())), r = i.$parent;
            }();
        }
    }, {
        key: "$on",
        value: function(t, i) {
            var e = this;
            if ("string" == typeof t) (this.$events[t] || (this.$events[t] = [])).push(i); else if (Array.isArray(t)) t.forEach(function(t) {
                e.$on(t, i);
            }); else if ("object" === (void 0 === t ? "undefined" : r(t))) for (var n in t) this.$on(n, t[n]);
            return this;
        }
    }, {
        key: "$once",
        value: function(t, i) {
            var e = this, n = function n() {
                e.$off(t, n), i.apply(e, arguments);
            };
            n.fn = i, this.$on(t, n);
        }
    }, {
        key: "$off",
        value: function(t, i) {
            var e = this;
            if (void 0 === t) this.$events = {}; else if ("string" == typeof t) if (i) {
                for (var n = this.$events[t], o = n.length; o--; ) if (i === n[o] || i === n[o].fn) {
                    n.splice(o, 1);
                    break;
                }
            } else this.$events[t] = []; else Array.isArray(t) && t.forEach(function(t) {
                e.$off(t, i);
            });
            return this;
        }
    }, {
        key: "$apply",
        value: function(t) {
            "function" == typeof t ? (t.call(this), this.$apply()) : this.$$phase ? this.$$phase = "$apply" : this.$digest();
        }
    }, {
        key: "$digest",
        value: function() {
            var t = this, i = void 0, e = this.$data;
            for (this.$$phase = "$digest", this.$$dc = 0; this.$$phase; ) {
                if (++this.$$dc >= 3) throw new Error("Can not call $apply in $apply process");
                var n = {};
                if (this.computed) for (i in this.computed) {
                    var o = this.computed[i].call(this);
                    p.default.$isEqual(this[i], o) || (n[this.$prefix + i] = o, this[i] = p.default.$copy(o, !0));
                }
                for (i in e) if (!p.default.$isEqual(this[i], e[i])) {
                    if (this.watch && this.watch[i] && ("function" == typeof this.watch[i] ? this.watch[i].call(this, this[i], e[i]) : "string" == typeof this.watch[i] && "function" == typeof this.methods[i] && this.methods[i].call(this, this[i], e[i])), 
                    n[this.$prefix + i] = this[i], this.data[i] = this[i], e[i] = p.default.$copy(this[i], !0), 
                    this.$repeat && this.$repeat[i]) {
                        var a = this.$repeat[i];
                        this.$com[a.com].data[a.props] = this[i], this.$com[a.com].$setIndex(0), this.$com[a.com].$apply();
                    }
                    this.$mappingProps[i] && Object.keys(this.$mappingProps[i]).forEach(function(e) {
                        var n = t.$mappingProps[i][e];
                        "object" === (void 0 === n ? "undefined" : r(n)) ? t.$parent.$apply() : "parent" !== e || p.default.$isEqual(t.$parent.$data[n], t[i]) ? "parent" === e || p.default.$isEqual(t.$com[e].$data[n], t[i]) || (t.$com[e][n] = t[i], 
                        t.$com[e].data[n] = t[i], t.$com[e].$apply()) : (t.$parent[n] = t[i], t.$parent.data[n] = t[i], 
                        t.$parent.$apply());
                    });
                }
                if (Object.keys(n).length) this.setData(n, function() {
                    if (t.$$nextTick) {
                        var i = t.$$nextTick;
                        t.$$nextTick = null, i.promise ? i() : i.call(t);
                    }
                }); else if (this.$$nextTick) {
                    var s = this.$$nextTick;
                    this.$$nextTick = null, s.promise ? s() : s.call(this);
                }
                this.$$phase = "$apply" === this.$$phase && "$digest";
            }
        }
    }, {
        key: "$nextTick",
        value: function(t) {
            var i = this;
            if (void 0 === t) return new Promise(function(t, e) {
                i.$$nextTick = function() {
                    t();
                }, i.$$nextTick.promise = !0;
            });
            this.$$nextTick = t;
        }
    } ]), t;
}();

exports.default = h;