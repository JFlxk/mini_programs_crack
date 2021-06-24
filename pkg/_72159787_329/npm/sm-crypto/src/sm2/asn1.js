function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function r(t) {
    var e = t.toString(16);
    if ("-" !== e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
        var n = e.substr(1).length;
        n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
        for (var r = "", i = 0; i < n; i++) r += "f";
        e = new l(r, 16).xor(t).add(l.ONE).toString(16).replace(/^-/, "");
    }
    return e;
}

function i(t, e) {
    if ("8" !== t.substring(e + 2, e + 3)) return 1;
    var n = parseInt(t.substring(e + 3, e + 4), 10);
    return 0 === n ? -1 : n > 0 && n < 10 ? n + 1 : -2;
}

function u(t, e) {
    var n = i(t, e);
    return n < 1 ? "" : t.substring(e + 2, e + 2 + 2 * n);
}

function o(t, e) {
    var n = u(t, e);
    if ("" === n) return -1;
    return (parseInt(n.substring(0, 1), 10) < 8 ? new l(n, 16) : new l(n.substring(2), 16)).intValue();
}

function s(t, e) {
    var n = i(t, e);
    return n < 0 ? n : e + 2 * (n + 1);
}

function a(t, e) {
    var n = s(t, e), r = o(t, e);
    return t.substring(n, n + 2 * r);
}

function h(t, e) {
    return s(t, e) + 2 * o(t, e);
}

function f(t, e) {
    var n = [], r = s(t, e);
    n.push(r);
    for (var i = o(t, e), u = r, a = 0; ;) {
        var f = h(t, u);
        if (null == f || f - r >= 2 * i) break;
        if (a >= 200) break;
        n.push(f), u = f, a++;
    }
    return n;
}

var c = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), l = require("./../../../jsbn/index.js").BigInteger, g = function() {
    function t() {
        n(this, t), this.isModified = !0, this.hTLV = null, this.hT = "00", this.hL = "00", 
        this.hV = "";
    }
    return c(t, [ {
        key: "getLengthHexFromValue",
        value: function() {
            var t = this.hV.length / 2, e = t.toString(16);
            return e.length % 2 == 1 && (e = "0" + e), t < 128 ? e : (128 + e.length / 2).toString(16) + e;
        }
    }, {
        key: "getEncodedHex",
        value: function() {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), 
            this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
            this.isModified = !1), this.hTLV;
        }
    }, {
        key: "getFreshValueHex",
        value: function() {
            return "";
        }
    } ]), t;
}(), b = function(i) {
    function u(e) {
        n(this, u);
        var i = t(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return i.hT = "02", e && e.bigint && (i.hTLV = null, i.isModified = !0, i.hV = r(e.bigint)), 
        i;
    }
    return e(u, g), c(u, [ {
        key: "getFreshValueHex",
        value: function() {
            return this.hV;
        }
    } ]), u;
}(), p = function(r) {
    function i(e) {
        n(this, i);
        var r = t(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
        return r.hT = "30", r.asn1Array = [], e && e.array && (r.asn1Array = e.array), r;
    }
    return e(i, g), c(i, [ {
        key: "getFreshValueHex",
        value: function() {
            for (var t = "", e = 0; e < this.asn1Array.length; e++) t += this.asn1Array[e].getEncodedHex();
            return this.hV = t, this.hV;
        }
    } ]), i;
}();

module.exports = {
    encodeDer: function(t, e) {
        var n = new b({
            bigint: t
        }), r = new b({
            bigint: e
        });
        return new p({
            array: [ n, r ]
        }).getEncodedHex();
    },
    decodeDer: function(t) {
        var e = f(t, 0), n = e[0], r = e[1], i = a(t, n), u = a(t, r);
        return {
            r: new l(i, 16),
            s: new l(u, 16)
        };
    }
};