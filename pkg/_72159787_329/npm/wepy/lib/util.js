function t(t) {
    return !(!t || "object" !== (void 0 === t ? "undefined" : r(t))) && !![ "@@__IMMUTABLE_ITERABLE__@@", "@@__IMMUTABLE_KEYED__@@", "@@__IMMUTABLE_INDEXED__@@", "@@__IMMUTABLE_ORDERED__@@", "@@__IMMUTABLE_RECORD__@@" ].filter(function(e) {
        return t[e];
    }).length;
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
};

exports.default = {
    $isEmpty: function(t) {
        return 0 === Object.keys(t).length;
    },
    $isEqual: function(e, n, o, i) {
        if (t(e)) return e.equals(n);
        if (t(n)) return n.equals(e);
        if (e === n) return 0 !== e || 1 / e == 1 / n;
        if (e !== e) return n !== n;
        if (!e || !n) return e === n;
        var u = void 0 === e ? "undefined" : r(e);
        return ("function" === u || "object" === u || "object" === (void 0 === n ? "undefined" : r(n))) && this.$isDeepEqual(e, n, o, i);
    },
    $isDeepEqual: function(e, n, o, i) {
        t(e) && (e = e.toJS()), t(n) && (n = n.toJS());
        var u = this, c = toString.call(e);
        if (c !== toString.call(n)) return !1;
        switch (c) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + n;

          case "[object Number]":
            return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +n;

          case "[object Symbol]":
            var l = "undefined" != typeof Symbol ? Symbol.prototype : null;
            return l.valueOf.call(e) === l.valueOf.call(n);
        }
        var f = "[object Array]" === c;
        if (!f) {
            if ("object" !== (void 0 === e ? "undefined" : r(e)) || "object" !== (void 0 === n ? "undefined" : r(n))) return e === n;
            var a = e.constructor, s = n.constructor;
            if (a !== s && !("function" == typeof a && a instanceof a && "function" == typeof s && s instanceof s) && "constructor" in e && "constructor" in n) return !1;
        }
        o = o || [], i = i || [];
        for (var p = o.length; p--; ) if (o[p] === e) return i[p] === n;
        if (o.push(e), i.push(n), f) {
            if ((p = e.length) !== n.length) return !1;
            for (;p--; ) if (!u.$isEqual(e[p], n[p], o, i)) return !1;
        } else {
            var y, b = Object.keys(e);
            if (p = b.length, Object.keys(n).length !== p) return !1;
            for (;p--; ) if (y = b[p], !u.$has(n, y) || !u.$isEqual(e[y], n[y], o, i)) return !1;
        }
        return o.pop(), i.pop(), !0;
    },
    $has: function(t, e) {
        if ("[object Array]" !== toString.call(e)) return t && hasOwnProperty.call(t, e);
        for (var r = e.length, n = 0; n < r; n++) {
            var o = e[n];
            if (!t || !hasOwnProperty.call(t, o)) return !1;
            t = t[o];
        }
        return !!r;
    },
    $extend: function() {
        var t, e, n, o, i, u, c = arguments[0] || {}, l = 1, f = arguments.length, a = !1, s = this;
        for ("boolean" == typeof c && (a = c, c = arguments[l] || {}, l++), "object" !== (void 0 === c ? "undefined" : r(c)) && "function" != typeof c && (c = {}), 
        l === f && (c = this, l--); l < f; l++) if (t = arguments[l]) for (e in t) n = c[e], 
        c !== (o = t[e]) && (a && o && (s.$isPlainObject(o) || (i = Array.isArray(o))) ? (i ? (i = !1, 
        u = n && Array.isArray(n) ? n : []) : u = n && s.$isPlainObject(n) ? n : {}, c[e] = s.$extend(a, u, o)) : c[e] = o);
        return c;
    },
    $copy: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Array.isArray(e) ? this.$extend(n, [], e) : "" + e == "null" ? e : "object" === (void 0 === e ? "undefined" : r(e)) ? t(e) ? e : this.$extend(n, {}, e) : e;
    },
    $isPlainObject: function(t) {
        var e, r;
        return !(!t || "[object Object]" !== Object.prototype.toString.call(t)) && (!(e = Object.getPrototypeOf(t)) || "function" == typeof (r = Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor) && Object.prototype.hasOwnProperty.toString.call(r) === Object.prototype.hasOwnProperty.toString.call(Object));
    },
    $resolvePath: function(t, e) {
        if (!e) return t;
        if ("/" === e[0]) return e = e.substr(1), this.$resolvePath("", e);
        if ("." !== e[0]) return this.$resolvePath(t, "./" + e);
        var r = t.split("/");
        return "." === e[0] && "/" === e[1] ? "." !== (e = e.substr(2))[0] ? (r.length ? r[r.length - 1] = e : r = [ e ], 
        1 === r.length ? "/" + r[0] : r.join("/")) : this.$resolvePath(r.join("/"), e) : "." === e[0] && "." === e[1] && "/" === e[2] ? (e = e.replace(/^\.*/gi, ""), 
        r.pop(), this.$resolvePath(r.join("/"), "." + e)) : "." === e[0] ? this.$resolvePath(t, e.substr(1)) : void 0;
    },
    $getParams: function(t) {
        var e = {}, r = t.indexOf("?");
        if (-1 !== r) {
            var n = void 0;
            t.substr(r + 1).split("&").forEach(function(t) {
                n = t.split("="), e[n[0]] = decodeURIComponent(n[1]);
            });
        }
        return e;
    },
    isImmutable: t,
    hyphenate: function(t) {
        return t.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
    },
    camelize: function(t) {
        return t.replace(/-(\w)/g, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }
};