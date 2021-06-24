function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e;
    };
}(), r = require("./../../../jsbn/index.js").BigInteger, s = require("./utils.js"), n = function(t, e, i, r, s) {
    for (var n = 0; n < s; n++) i[r + n] = t[e + n];
}, h = {
    minValue: -2147483648,
    maxValue: 2147483647,
    parse: function(t) {
        if (t < this.minValue) {
            for (var e = Number(-t).toString(2), i = e.substr(e.length - 31, 31), r = "", s = 0; s < i.length; s++) r += "0" === i.substr(s, 1) ? "1" : "0";
            return parseInt(r, 2) + 1;
        }
        if (t > this.maxValue) {
            for (var n = Number(t).toString(2), h = n.substr(n.length - 31, 31), o = "", u = 0; u < h.length; u++) o += "0" === h.substr(u, 1) ? "1" : "0";
            return -(parseInt(o, 2) + 1);
        }
        return t;
    },
    parseByte: function(t) {
        if (t < 0) {
            for (var e = Number(-t).toString(2), i = e.substr(e.length - 8, 8), r = "", s = 0; s < i.length; s++) r += "0" === i.substr(s, 1) ? "1" : "0";
            return (parseInt(r, 2) + 1) % 256;
        }
        if (t > 255) {
            var n = Number(t).toString(2);
            return parseInt(n.substr(n.length - 8, 8), 2);
        }
        return t;
    }
}, o = function() {
    function o() {
        t(this, o), this.xBuf = [], this.xBufOff = 0, this.byteCount = 0, this.DIGEST_LENGTH = 32, 
        this.v0 = [ 1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214 ], 
        this.v0 = [ 1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082 ], 
        this.v = new Array(8), this.v_ = new Array(8), this.X0 = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
        this.X = new Array(68), this.xOff = 0, this.T_00_15 = 2043430169, this.T_16_63 = 2055708042, 
        arguments.length > 0 ? this.initDigest(arguments.length <= 0 ? void 0 : arguments[0]) : this.init();
    }
    return i(o, [ {
        key: "init",
        value: function() {
            this.xBuf = new Array(4), this.reset();
        }
    }, {
        key: "initDigest",
        value: function(t) {
            this.xBuf = [].concat(t.xBuf), this.xBufOff = t.xBufOff, this.byteCount = t.byteCount, 
            n(t.X, 0, this.X, 0, t.X.length), this.xOff = t.xOff, n(t.v, 0, this.v, 0, t.v.length);
        }
    }, {
        key: "getDigestSize",
        value: function() {
            return this.DIGEST_LENGTH;
        }
    }, {
        key: "reset",
        value: function() {
            this.byteCount = 0, this.xBufOff = 0;
            for (var t = Object.keys(this.xBuf), e = 0, i = t.length; e < i; e++) this.xBuf[t[e]] = null;
            n(this.v0, 0, this.v, 0, this.v0.length), this.xOff = 0, n(this.X0, 0, this.X, 0, this.X0.length);
        }
    }, {
        key: "processBlock",
        value: function() {
            var t = void 0, e = this.X, i = new Array(64);
            for (t = 16; t < 68; t++) e[t] = this.p1(e[t - 16] ^ e[t - 9] ^ this.rotate(e[t - 3], 15)) ^ this.rotate(e[t - 13], 7) ^ e[t - 6];
            for (t = 0; t < 64; t++) i[t] = e[t] ^ e[t + 4];
            var r = this.v, s = this.v_;
            n(r, 0, s, 0, this.v0.length);
            var o = void 0, u = void 0, f = void 0, a = void 0, l = void 0;
            for (t = 0; t < 16; t++) l = this.rotate(s[0], 12), o = h.parse(h.parse(l + s[4]) + this.rotate(this.T_00_15, t)), 
            u = (o = this.rotate(o, 7)) ^ l, f = h.parse(h.parse(this.ff_00_15(s[0], s[1], s[2]) + s[3]) + u) + i[t], 
            a = h.parse(h.parse(this.gg_00_15(s[4], s[5], s[6]) + s[7]) + o) + e[t], s[3] = s[2], 
            s[2] = this.rotate(s[1], 9), s[1] = s[0], s[0] = f, s[7] = s[6], s[6] = this.rotate(s[5], 19), 
            s[5] = s[4], s[4] = this.p0(a);
            for (t = 16; t < 64; t++) l = this.rotate(s[0], 12), o = h.parse(h.parse(l + s[4]) + this.rotate(this.T_16_63, t)), 
            u = (o = this.rotate(o, 7)) ^ l, f = h.parse(h.parse(this.ff_16_63(s[0], s[1], s[2]) + s[3]) + u) + i[t], 
            a = h.parse(h.parse(this.gg_16_63(s[4], s[5], s[6]) + s[7]) + o) + e[t], s[3] = s[2], 
            s[2] = this.rotate(s[1], 9), s[1] = s[0], s[0] = f, s[7] = s[6], s[6] = this.rotate(s[5], 19), 
            s[5] = s[4], s[4] = this.p0(a);
            for (t = 0; t < 8; t++) r[t] ^= h.parse(s[t]);
            this.xOff = 0, n(this.X0, 0, this.X, 0, this.X0.length);
        }
    }, {
        key: "processWord",
        value: function(t, e) {
            var i = t[e] << 24;
            i |= (255 & t[++e]) << 16, i |= (255 & t[++e]) << 8, i |= 255 & t[++e], this.X[this.xOff] = i, 
            16 == ++this.xOff && this.processBlock();
        }
    }, {
        key: "processLength",
        value: function(t) {
            this.xOff > 14 && this.processBlock(), this.X[14] = this.urShiftLong(t, 32), this.X[15] = 4294967295 & t;
        }
    }, {
        key: "intToBigEndian",
        value: function(t, e, i) {
            e[i] = 255 & h.parseByte(this.urShift(t, 24)), e[++i] = 255 & h.parseByte(this.urShift(t, 16)), 
            e[++i] = 255 & h.parseByte(this.urShift(t, 8)), e[++i] = 255 & h.parseByte(t);
        }
    }, {
        key: "doFinal",
        value: function(t, e) {
            this.finish();
            for (var i = 0; i < 8; i++) this.intToBigEndian(this.v[i], t, e + 4 * i);
            return this.reset(), this.DIGEST_LENGTH;
        }
    }, {
        key: "update",
        value: function(t) {
            this.xBuf[this.xBufOff++] = t, this.xBufOff === this.xBuf.length && (this.processWord(this.xBuf, 0), 
            this.xBufOff = 0), this.byteCount++;
        }
    }, {
        key: "blockUpdate",
        value: function(t, e, i) {
            for (;0 !== this.xBufOff && i > 0; ) this.update(t[e]), e++, i--;
            for (;i > this.xBuf.length; ) this.processWord(t, e), e += this.xBuf.length, i -= this.xBuf.length, 
            this.byteCount += this.xBuf.length;
            for (;i > 0; ) this.update(t[e]), e++, i--;
        }
    }, {
        key: "finish",
        value: function() {
            var t = this.byteCount << 3;
            for (this.update(128); 0 !== this.xBufOff; ) this.update(0);
            this.processLength(t), this.processBlock();
        }
    }, {
        key: "rotate",
        value: function(t, e) {
            return t << e | this.urShift(t, 32 - e);
        }
    }, {
        key: "p0",
        value: function(t) {
            return t ^ this.rotate(t, 9) ^ this.rotate(t, 17);
        }
    }, {
        key: "p1",
        value: function(t) {
            return t ^ this.rotate(t, 15) ^ this.rotate(t, 23);
        }
    }, {
        key: "ff_00_15",
        value: function(t, e, i) {
            return t ^ e ^ i;
        }
    }, {
        key: "ff_16_63",
        value: function(t, e, i) {
            return t & e | t & i | e & i;
        }
    }, {
        key: "gg_00_15",
        value: function(t, e, i) {
            return t ^ e ^ i;
        }
    }, {
        key: "gg_16_63",
        value: function(t, e, i) {
            return t & e | ~t & i;
        }
    }, {
        key: "urShift",
        value: function(t, e) {
            return (t > h.maxValue || t < h.minValue) && (t = h.parse(t)), t >>> e;
        }
    }, {
        key: "urShiftLong",
        value: function(t, e) {
            var i = void 0, s = new r();
            if (s.fromInt(t), s.signum() >= 0) i = s.shiftRight(e).intValue(); else {
                var n = new r();
                n.fromInt(2);
                var h = ~e, o = "";
                if (h < 0) {
                    for (var u = 64 + h, f = 0; f < u; f++) o += "0";
                    var a = new r();
                    a.fromInt(t >> e);
                    var l = new r("10" + o, 2);
                    o = l.toRadix(10), i = l.add(a).toRadix(10);
                } else i = (t >> e) + (o = n.shiftLeft(~e).intValue());
            }
            return i;
        }
    }, {
        key: "getZ",
        value: function(t, i, r) {
            var n = 0;
            if (r) {
                if ("string" != typeof r) throw new Error("sm2: Type of userId Must be String! Receive Type: " + (void 0 === r ? "undefined" : e(r)));
                if (r.length >= 8192) throw new Error("sm2: The Length of userId Must Less Than 8192! Length: " + r.length);
                n = 4 * (r = s.parseUtf8StringToHex(r)).length;
            }
            if (this.update(n >> 8 & 255), this.update(255 & n), r) {
                var h = s.hexToArray(r);
                this.blockUpdate(h, 0, h.length);
            }
            var o = s.hexToArray(s.leftPad(t.curve.a.toBigInteger().toRadix(16), 64)), u = s.hexToArray(s.leftPad(t.curve.b.toBigInteger().toRadix(16), 64)), f = s.hexToArray(s.leftPad(t.getX().toBigInteger().toRadix(16), 64)), a = s.hexToArray(s.leftPad(t.getY().toBigInteger().toRadix(16), 64)), l = s.hexToArray(i.substr(0, 64)), g = s.hexToArray(i.substr(64, 64));
            this.blockUpdate(o, 0, o.length), this.blockUpdate(u, 0, u.length), this.blockUpdate(f, 0, f.length), 
            this.blockUpdate(a, 0, a.length), this.blockUpdate(l, 0, l.length), this.blockUpdate(g, 0, g.length);
            var v = new Array(this.getDigestSize());
            return this.doFinal(v, 0), v;
        }
    } ]), o;
}();

module.exports = o;