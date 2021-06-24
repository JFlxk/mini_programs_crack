(function() {
    function t(t, i, o) {
        null != t && ("number" == typeof t ? this.fromNumber(t, i, o) : null == i && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, i));
    }
    function i() {
        return new t(null);
    }
    function o(t) {
        return R.charAt(t);
    }
    function r(t, i) {
        var o = O[t.charCodeAt(i)];
        return null == o ? -1 : o;
    }
    function s(t) {
        var o = i();
        return o.fromInt(t), o;
    }
    function e(t) {
        var i, o = 1;
        return 0 != (i = t >>> 16) && (t = i, o += 16), 0 != (i = t >> 8) && (t = i, o += 8), 
        0 != (i = t >> 4) && (t = i, o += 4), 0 != (i = t >> 2) && (t = i, o += 2), 0 != (i = t >> 1) && (t = i, 
        o += 1), o;
    }
    function h(t) {
        this.m = t;
    }
    function n(t) {
        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
        this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
    }
    function u(t, i) {
        return t & i;
    }
    function f(t, i) {
        return t | i;
    }
    function p(t, i) {
        return t ^ i;
    }
    function a(t, i) {
        return t & ~i;
    }
    function c(t) {
        if (0 == t) return -1;
        var i = 0;
        return 0 == (65535 & t) && (t >>= 16, i += 16), 0 == (255 & t) && (t >>= 8, i += 8), 
        0 == (15 & t) && (t >>= 4, i += 4), 0 == (3 & t) && (t >>= 2, i += 2), 0 == (1 & t) && ++i, 
        i;
    }
    function m(t) {
        for (var i = 0; 0 != t; ) t &= t - 1, ++i;
        return i;
    }
    function l() {}
    function v(t) {
        return t;
    }
    function T(o) {
        this.r2 = i(), this.q3 = i(), t.ONE.dlShiftTo(2 * o.t, this.r2), this.mu = this.r2.divide(o), 
        this.m = o;
    }
    function y(t) {
        N[x++] ^= 255 & t, N[x++] ^= t >> 8 & 255, N[x++] ^= t >> 16 & 255, N[x++] ^= t >> 24 & 255, 
        x >= F && (x -= F);
    }
    function d() {
        y(new Date().getTime());
    }
    function D() {
        if (null == q) {
            for (d(), (q = S()).init(N), x = 0; x < N.length; ++x) N[x] = 0;
            x = 0;
        }
        return q.next();
    }
    function g() {}
    function b() {
        this.i = 0, this.j = 0, this.S = new Array();
    }
    function S() {
        return new b();
    }
    var B, w = "undefined" != typeof navigator;
    w && "Microsoft Internet Explorer" == navigator.appName ? (t.prototype.am = function(t, i, o, r, s, e) {
        for (var h = 32767 & i, n = i >> 15; --e >= 0; ) {
            var u = 32767 & this[t], f = this[t++] >> 15, p = n * u + f * h;
            s = ((u = h * u + ((32767 & p) << 15) + o[r] + (1073741823 & s)) >>> 30) + (p >>> 15) + n * f + (s >>> 30), 
            o[r++] = 1073741823 & u;
        }
        return s;
    }, B = 30) : w && "Netscape" != navigator.appName ? (t.prototype.am = function(t, i, o, r, s, e) {
        for (;--e >= 0; ) {
            var h = i * this[t++] + o[r] + s;
            s = Math.floor(h / 67108864), o[r++] = 67108863 & h;
        }
        return s;
    }, B = 26) : (t.prototype.am = function(t, i, o, r, s, e) {
        for (var h = 16383 & i, n = i >> 14; --e >= 0; ) {
            var u = 16383 & this[t], f = this[t++] >> 14, p = n * u + f * h;
            s = ((u = h * u + ((16383 & p) << 14) + o[r] + s) >> 28) + (p >> 14) + n * f, o[r++] = 268435455 & u;
        }
        return s;
    }, B = 28), t.prototype.DB = B, t.prototype.DM = (1 << B) - 1, t.prototype.DV = 1 << B;
    t.prototype.FV = Math.pow(2, 52), t.prototype.F1 = 52 - B, t.prototype.F2 = 2 * B - 52;
    var M, E, R = "0123456789abcdefghijklmnopqrstuvwxyz", O = new Array();
    for (M = "0".charCodeAt(0), E = 0; E <= 9; ++E) O[M++] = E;
    for (M = "a".charCodeAt(0), E = 10; E < 36; ++E) O[M++] = E;
    for (M = "A".charCodeAt(0), E = 10; E < 36; ++E) O[M++] = E;
    h.prototype.convert = function(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
    }, h.prototype.revert = function(t) {
        return t;
    }, h.prototype.reduce = function(t) {
        t.divRemTo(this.m, null, t);
    }, h.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o), this.reduce(o);
    }, h.prototype.sqrTo = function(t, i) {
        t.squareTo(i), this.reduce(i);
    }, n.prototype.convert = function(o) {
        var r = i();
        return o.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), o.s < 0 && r.compareTo(t.ZERO) > 0 && this.m.subTo(r, r), 
        r;
    }, n.prototype.revert = function(t) {
        var o = i();
        return t.copyTo(o), this.reduce(o), o;
    }, n.prototype.reduce = function(t) {
        for (;t.t <= this.mt2; ) t[t.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
            var o = 32767 & t[i], r = o * this.mpl + ((o * this.mph + (t[i] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[o = i + this.m.t] += this.m.am(0, r, t, i, 0, this.m.t); t[o] >= t.DV; ) t[o] -= t.DV, 
            t[++o]++;
        }
        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
    }, n.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o), this.reduce(o);
    }, n.prototype.sqrTo = function(t, i) {
        t.squareTo(i), this.reduce(i);
    }, t.prototype.copyTo = function(t) {
        for (var i = this.t - 1; i >= 0; --i) t[i] = this[i];
        t.t = this.t, t.s = this.s;
    }, t.prototype.fromInt = function(t) {
        this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
    }, t.prototype.fromString = function(i, o) {
        var s;
        if (16 == o) s = 4; else if (8 == o) s = 3; else if (256 == o) s = 8; else if (2 == o) s = 1; else if (32 == o) s = 5; else {
            if (4 != o) return void this.fromRadix(i, o);
            s = 2;
        }
        this.t = 0, this.s = 0;
        for (var e = i.length, h = !1, n = 0; --e >= 0; ) {
            var u = 8 == s ? 255 & i[e] : r(i, e);
            u < 0 ? "-" == i.charAt(e) && (h = !0) : (h = !1, 0 == n ? this[this.t++] = u : n + s > this.DB ? (this[this.t - 1] |= (u & (1 << this.DB - n) - 1) << n, 
            this[this.t++] = u >> this.DB - n) : this[this.t - 1] |= u << n, (n += s) >= this.DB && (n -= this.DB));
        }
        8 == s && 0 != (128 & i[0]) && (this.s = -1, n > 0 && (this[this.t - 1] |= (1 << this.DB - n) - 1 << n)), 
        this.clamp(), h && t.ZERO.subTo(this, this);
    }, t.prototype.clamp = function() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; ) --this.t;
    }, t.prototype.dlShiftTo = function(t, i) {
        var o;
        for (o = this.t - 1; o >= 0; --o) i[o + t] = this[o];
        for (o = t - 1; o >= 0; --o) i[o] = 0;
        i.t = this.t + t, i.s = this.s;
    }, t.prototype.drShiftTo = function(t, i) {
        for (var o = t; o < this.t; ++o) i[o - t] = this[o];
        i.t = Math.max(this.t - t, 0), i.s = this.s;
    }, t.prototype.lShiftTo = function(t, i) {
        var o, r = t % this.DB, s = this.DB - r, e = (1 << s) - 1, h = Math.floor(t / this.DB), n = this.s << r & this.DM;
        for (o = this.t - 1; o >= 0; --o) i[o + h + 1] = this[o] >> s | n, n = (this[o] & e) << r;
        for (o = h - 1; o >= 0; --o) i[o] = 0;
        i[h] = n, i.t = this.t + h + 1, i.s = this.s, i.clamp();
    }, t.prototype.rShiftTo = function(t, i) {
        i.s = this.s;
        var o = Math.floor(t / this.DB);
        if (o >= this.t) i.t = 0; else {
            var r = t % this.DB, s = this.DB - r, e = (1 << r) - 1;
            i[0] = this[o] >> r;
            for (var h = o + 1; h < this.t; ++h) i[h - o - 1] |= (this[h] & e) << s, i[h - o] = this[h] >> r;
            r > 0 && (i[this.t - o - 1] |= (this.s & e) << s), i.t = this.t - o, i.clamp();
        }
    }, t.prototype.subTo = function(t, i) {
        for (var o = 0, r = 0, s = Math.min(t.t, this.t); o < s; ) r += this[o] - t[o], 
        i[o++] = r & this.DM, r >>= this.DB;
        if (t.t < this.t) {
            for (r -= t.s; o < this.t; ) r += this[o], i[o++] = r & this.DM, r >>= this.DB;
            r += this.s;
        } else {
            for (r += this.s; o < t.t; ) r -= t[o], i[o++] = r & this.DM, r >>= this.DB;
            r -= t.s;
        }
        i.s = r < 0 ? -1 : 0, r < -1 ? i[o++] = this.DV + r : r > 0 && (i[o++] = r), i.t = o, 
        i.clamp();
    }, t.prototype.multiplyTo = function(i, o) {
        var r = this.abs(), s = i.abs(), e = r.t;
        for (o.t = e + s.t; --e >= 0; ) o[e] = 0;
        for (e = 0; e < s.t; ++e) o[e + r.t] = r.am(0, s[e], o, e, 0, r.t);
        o.s = 0, o.clamp(), this.s != i.s && t.ZERO.subTo(o, o);
    }, t.prototype.squareTo = function(t) {
        for (var i = this.abs(), o = t.t = 2 * i.t; --o >= 0; ) t[o] = 0;
        for (o = 0; o < i.t - 1; ++o) {
            var r = i.am(o, i[o], t, 2 * o, 0, 1);
            (t[o + i.t] += i.am(o + 1, 2 * i[o], t, 2 * o + 1, r, i.t - o - 1)) >= i.DV && (t[o + i.t] -= i.DV, 
            t[o + i.t + 1] = 1);
        }
        t.t > 0 && (t[t.t - 1] += i.am(o, i[o], t, 2 * o, 0, 1)), t.s = 0, t.clamp();
    }, t.prototype.divRemTo = function(o, r, s) {
        var h = o.abs();
        if (!(h.t <= 0)) {
            var n = this.abs();
            if (n.t < h.t) return null != r && r.fromInt(0), void (null != s && this.copyTo(s));
            null == s && (s = i());
            var u = i(), f = this.s, p = o.s, a = this.DB - e(h[h.t - 1]);
            a > 0 ? (h.lShiftTo(a, u), n.lShiftTo(a, s)) : (h.copyTo(u), n.copyTo(s));
            var c = u.t, m = u[c - 1];
            if (0 != m) {
                var l = m * (1 << this.F1) + (c > 1 ? u[c - 2] >> this.F2 : 0), v = this.FV / l, T = (1 << this.F1) / l, y = 1 << this.F2, d = s.t, D = d - c, g = null == r ? i() : r;
                for (u.dlShiftTo(D, g), s.compareTo(g) >= 0 && (s[s.t++] = 1, s.subTo(g, s)), t.ONE.dlShiftTo(c, g), 
                g.subTo(u, u); u.t < c; ) u[u.t++] = 0;
                for (;--D >= 0; ) {
                    var b = s[--d] == m ? this.DM : Math.floor(s[d] * v + (s[d - 1] + y) * T);
                    if ((s[d] += u.am(0, b, s, D, 0, c)) < b) for (u.dlShiftTo(D, g), s.subTo(g, s); s[d] < --b; ) s.subTo(g, s);
                }
                null != r && (s.drShiftTo(c, r), f != p && t.ZERO.subTo(r, r)), s.t = c, s.clamp(), 
                a > 0 && s.rShiftTo(a, s), f < 0 && t.ZERO.subTo(s, s);
            }
        }
    }, t.prototype.invDigit = function() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var i = 3 & t;
        return i = i * (2 - (15 & t) * i) & 15, i = i * (2 - (255 & t) * i) & 255, i = i * (2 - ((65535 & t) * i & 65535)) & 65535, 
        (i = i * (2 - t * i % this.DV) % this.DV) > 0 ? this.DV - i : -i;
    }, t.prototype.isEven = function() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
    }, t.prototype.exp = function(o, r) {
        if (o > 4294967295 || o < 1) return t.ONE;
        var s = i(), h = i(), n = r.convert(this), u = e(o) - 1;
        for (n.copyTo(s); --u >= 0; ) if (r.sqrTo(s, h), (o & 1 << u) > 0) r.mulTo(h, n, s); else {
            var f = s;
            s = h, h = f;
        }
        return r.revert(s);
    }, t.prototype.toString = function(t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var i;
        if (16 == t) i = 4; else if (8 == t) i = 3; else if (2 == t) i = 1; else if (32 == t) i = 5; else {
            if (4 != t) return this.toRadix(t);
            i = 2;
        }
        var r, s = (1 << i) - 1, e = !1, h = "", n = this.t, u = this.DB - n * this.DB % i;
        if (n-- > 0) for (u < this.DB && (r = this[n] >> u) > 0 && (e = !0, h = o(r)); n >= 0; ) u < i ? (r = (this[n] & (1 << u) - 1) << i - u, 
        r |= this[--n] >> (u += this.DB - i)) : (r = this[n] >> (u -= i) & s, u <= 0 && (u += this.DB, 
        --n)), r > 0 && (e = !0), e && (h += o(r));
        return e ? h : "0";
    }, t.prototype.negate = function() {
        var o = i();
        return t.ZERO.subTo(this, o), o;
    }, t.prototype.abs = function() {
        return this.s < 0 ? this.negate() : this;
    }, t.prototype.compareTo = function(t) {
        var i = this.s - t.s;
        if (0 != i) return i;
        var o = this.t;
        if (0 != (i = o - t.t)) return this.s < 0 ? -i : i;
        for (;--o >= 0; ) if (0 != (i = this[o] - t[o])) return i;
        return 0;
    }, t.prototype.bitLength = function() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + e(this[this.t - 1] ^ this.s & this.DM);
    }, t.prototype.mod = function(o) {
        var r = i();
        return this.abs().divRemTo(o, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && o.subTo(r, r), 
        r;
    }, t.prototype.modPowInt = function(t, i) {
        var o;
        return o = t < 256 || i.isEven() ? new h(i) : new n(i), this.exp(t, o);
    }, t.ZERO = s(0), t.ONE = s(1), l.prototype.convert = v, l.prototype.revert = v, 
    l.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o);
    }, l.prototype.sqrTo = function(t, i) {
        t.squareTo(i);
    }, T.prototype.convert = function(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var o = i();
        return t.copyTo(o), this.reduce(o), o;
    }, T.prototype.revert = function(t) {
        return t;
    }, T.prototype.reduce = function(t) {
        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, 
        t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; ) t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; ) t.subTo(this.m, t);
    }, T.prototype.mulTo = function(t, i, o) {
        t.multiplyTo(i, o), this.reduce(o);
    }, T.prototype.sqrTo = function(t, i) {
        t.squareTo(i), this.reduce(i);
    };
    var A = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], V = (1 << 26) / A[A.length - 1];
    t.prototype.chunkSize = function(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t));
    }, t.prototype.toRadix = function(t) {
        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
        var o = this.chunkSize(t), r = Math.pow(t, o), e = s(r), h = i(), n = i(), u = "";
        for (this.divRemTo(e, h, n); h.signum() > 0; ) u = (r + n.intValue()).toString(t).substr(1) + u, 
        h.divRemTo(e, h, n);
        return n.intValue().toString(t) + u;
    }, t.prototype.fromRadix = function(i, o) {
        this.fromInt(0), null == o && (o = 10);
        for (var s = this.chunkSize(o), e = Math.pow(o, s), h = !1, n = 0, u = 0, f = 0; f < i.length; ++f) {
            var p = r(i, f);
            p < 0 ? "-" == i.charAt(f) && 0 == this.signum() && (h = !0) : (u = o * u + p, ++n >= s && (this.dMultiply(e), 
            this.dAddOffset(u, 0), n = 0, u = 0));
        }
        n > 0 && (this.dMultiply(Math.pow(o, n)), this.dAddOffset(u, 0)), h && t.ZERO.subTo(this, this);
    }, t.prototype.fromNumber = function(i, o, r) {
        if ("number" == typeof o) if (i < 2) this.fromInt(1); else for (this.fromNumber(i, r), 
        this.testBit(i - 1) || this.bitwiseTo(t.ONE.shiftLeft(i - 1), f, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(o); ) this.dAddOffset(2, 0), 
        this.bitLength() > i && this.subTo(t.ONE.shiftLeft(i - 1), this); else {
            var s = new Array(), e = 7 & i;
            s.length = 1 + (i >> 3), o.nextBytes(s), e > 0 ? s[0] &= (1 << e) - 1 : s[0] = 0, 
            this.fromString(s, 256);
        }
    }, t.prototype.bitwiseTo = function(t, i, o) {
        var r, s, e = Math.min(t.t, this.t);
        for (r = 0; r < e; ++r) o[r] = i(this[r], t[r]);
        if (t.t < this.t) {
            for (s = t.s & this.DM, r = e; r < this.t; ++r) o[r] = i(this[r], s);
            o.t = this.t;
        } else {
            for (s = this.s & this.DM, r = e; r < t.t; ++r) o[r] = i(s, t[r]);
            o.t = t.t;
        }
        o.s = i(this.s, t.s), o.clamp();
    }, t.prototype.changeBit = function(i, o) {
        var r = t.ONE.shiftLeft(i);
        return this.bitwiseTo(r, o, r), r;
    }, t.prototype.addTo = function(t, i) {
        for (var o = 0, r = 0, s = Math.min(t.t, this.t); o < s; ) r += this[o] + t[o], 
        i[o++] = r & this.DM, r >>= this.DB;
        if (t.t < this.t) {
            for (r += t.s; o < this.t; ) r += this[o], i[o++] = r & this.DM, r >>= this.DB;
            r += this.s;
        } else {
            for (r += this.s; o < t.t; ) r += t[o], i[o++] = r & this.DM, r >>= this.DB;
            r += t.s;
        }
        i.s = r < 0 ? -1 : 0, r > 0 ? i[o++] = r : r < -1 && (i[o++] = this.DV + r), i.t = o, 
        i.clamp();
    }, t.prototype.dMultiply = function(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }, t.prototype.dAddOffset = function(t, i) {
        if (0 != t) {
            for (;this.t <= i; ) this[this.t++] = 0;
            for (this[i] += t; this[i] >= this.DV; ) this[i] -= this.DV, ++i >= this.t && (this[this.t++] = 0), 
            ++this[i];
        }
    }, t.prototype.multiplyLowerTo = function(t, i, o) {
        var r = Math.min(this.t + t.t, i);
        for (o.s = 0, o.t = r; r > 0; ) o[--r] = 0;
        var s;
        for (s = o.t - this.t; r < s; ++r) o[r + this.t] = this.am(0, t[r], o, r, 0, this.t);
        for (s = Math.min(t.t, i); r < s; ++r) this.am(0, t[r], o, r, 0, i - r);
        o.clamp();
    }, t.prototype.multiplyUpperTo = function(t, i, o) {
        --i;
        var r = o.t = this.t + t.t - i;
        for (o.s = 0; --r >= 0; ) o[r] = 0;
        for (r = Math.max(i - this.t, 0); r < t.t; ++r) o[this.t + r - i] = this.am(i - r, t[r], o, 0, 0, this.t + r - i);
        o.clamp(), o.drShiftTo(1, o);
    }, t.prototype.modInt = function(t) {
        if (t <= 0) return 0;
        var i = this.DV % t, o = this.s < 0 ? t - 1 : 0;
        if (this.t > 0) if (0 == i) o = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) o = (i * o + this[r]) % t;
        return o;
    }, t.prototype.millerRabin = function(o) {
        var r = this.subtract(t.ONE), s = r.getLowestSetBit();
        if (s <= 0) return !1;
        var e = r.shiftRight(s);
        (o = o + 1 >> 1) > A.length && (o = A.length);
        for (var h = i(), n = 0; n < o; ++n) {
            h.fromInt(A[Math.floor(Math.random() * A.length)]);
            var u = h.modPow(e, this);
            if (0 != u.compareTo(t.ONE) && 0 != u.compareTo(r)) {
                for (var f = 1; f++ < s && 0 != u.compareTo(r); ) if (0 == (u = u.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                if (0 != u.compareTo(r)) return !1;
            }
        }
        return !0;
    }, t.prototype.clone = function() {
        var t = i();
        return this.copyTo(t), t;
    }, t.prototype.intValue = function() {
        if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }, t.prototype.byteValue = function() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24;
    }, t.prototype.shortValue = function() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16;
    }, t.prototype.signum = function() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
    }, t.prototype.toByteArray = function() {
        var t = this.t, i = new Array();
        i[0] = this.s;
        var o, r = this.DB - t * this.DB % 8, s = 0;
        if (t-- > 0) for (r < this.DB && (o = this[t] >> r) != (this.s & this.DM) >> r && (i[s++] = o | this.s << this.DB - r); t >= 0; ) r < 8 ? (o = (this[t] & (1 << r) - 1) << 8 - r, 
        o |= this[--t] >> (r += this.DB - 8)) : (o = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, 
        --t)), 0 != (128 & o) && (o |= -256), 0 == s && (128 & this.s) != (128 & o) && ++s, 
        (s > 0 || o != this.s) && (i[s++] = o);
        return i;
    }, t.prototype.equals = function(t) {
        return 0 == this.compareTo(t);
    }, t.prototype.min = function(t) {
        return this.compareTo(t) < 0 ? this : t;
    }, t.prototype.max = function(t) {
        return this.compareTo(t) > 0 ? this : t;
    }, t.prototype.and = function(t) {
        var o = i();
        return this.bitwiseTo(t, u, o), o;
    }, t.prototype.or = function(t) {
        var o = i();
        return this.bitwiseTo(t, f, o), o;
    }, t.prototype.xor = function(t) {
        var o = i();
        return this.bitwiseTo(t, p, o), o;
    }, t.prototype.andNot = function(t) {
        var o = i();
        return this.bitwiseTo(t, a, o), o;
    }, t.prototype.not = function() {
        for (var t = i(), o = 0; o < this.t; ++o) t[o] = this.DM & ~this[o];
        return t.t = this.t, t.s = ~this.s, t;
    }, t.prototype.shiftLeft = function(t) {
        var o = i();
        return t < 0 ? this.rShiftTo(-t, o) : this.lShiftTo(t, o), o;
    }, t.prototype.shiftRight = function(t) {
        var o = i();
        return t < 0 ? this.lShiftTo(-t, o) : this.rShiftTo(t, o), o;
    }, t.prototype.getLowestSetBit = function() {
        for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + c(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
    }, t.prototype.bitCount = function() {
        for (var t = 0, i = this.s & this.DM, o = 0; o < this.t; ++o) t += m(this[o] ^ i);
        return t;
    }, t.prototype.testBit = function(t) {
        var i = Math.floor(t / this.DB);
        return i >= this.t ? 0 != this.s : 0 != (this[i] & 1 << t % this.DB);
    }, t.prototype.setBit = function(t) {
        return this.changeBit(t, f);
    }, t.prototype.clearBit = function(t) {
        return this.changeBit(t, a);
    }, t.prototype.flipBit = function(t) {
        return this.changeBit(t, p);
    }, t.prototype.add = function(t) {
        var o = i();
        return this.addTo(t, o), o;
    }, t.prototype.subtract = function(t) {
        var o = i();
        return this.subTo(t, o), o;
    }, t.prototype.multiply = function(t) {
        var o = i();
        return this.multiplyTo(t, o), o;
    }, t.prototype.divide = function(t) {
        var o = i();
        return this.divRemTo(t, o, null), o;
    }, t.prototype.remainder = function(t) {
        var o = i();
        return this.divRemTo(t, null, o), o;
    }, t.prototype.divideAndRemainder = function(t) {
        var o = i(), r = i();
        return this.divRemTo(t, o, r), new Array(o, r);
    }, t.prototype.modPow = function(t, o) {
        var r, u, f = t.bitLength(), p = s(1);
        if (f <= 0) return p;
        r = f < 18 ? 1 : f < 48 ? 3 : f < 144 ? 4 : f < 768 ? 5 : 6, u = f < 8 ? new h(o) : o.isEven() ? new T(o) : new n(o);
        var a = new Array(), c = 3, m = r - 1, l = (1 << r) - 1;
        if (a[1] = u.convert(this), r > 1) {
            var v = i();
            for (u.sqrTo(a[1], v); c <= l; ) a[c] = i(), u.mulTo(v, a[c - 2], a[c]), c += 2;
        }
        var y, d, D = t.t - 1, g = !0, b = i();
        for (f = e(t[D]) - 1; D >= 0; ) {
            for (f >= m ? y = t[D] >> f - m & l : (y = (t[D] & (1 << f + 1) - 1) << m - f, D > 0 && (y |= t[D - 1] >> this.DB + f - m)), 
            c = r; 0 == (1 & y); ) y >>= 1, --c;
            if ((f -= c) < 0 && (f += this.DB, --D), g) a[y].copyTo(p), g = !1; else {
                for (;c > 1; ) u.sqrTo(p, b), u.sqrTo(b, p), c -= 2;
                c > 0 ? u.sqrTo(p, b) : (d = p, p = b, b = d), u.mulTo(b, a[y], p);
            }
            for (;D >= 0 && 0 == (t[D] & 1 << f); ) u.sqrTo(p, b), d = p, p = b, b = d, --f < 0 && (f = this.DB - 1, 
            --D);
        }
        return u.revert(p);
    }, t.prototype.modInverse = function(i) {
        var o = i.isEven();
        if (this.isEven() && o || 0 == i.signum()) return t.ZERO;
        for (var r = i.clone(), e = this.clone(), h = s(1), n = s(0), u = s(0), f = s(1); 0 != r.signum(); ) {
            for (;r.isEven(); ) r.rShiftTo(1, r), o ? (h.isEven() && n.isEven() || (h.addTo(this, h), 
            n.subTo(i, n)), h.rShiftTo(1, h)) : n.isEven() || n.subTo(i, n), n.rShiftTo(1, n);
            for (;e.isEven(); ) e.rShiftTo(1, e), o ? (u.isEven() && f.isEven() || (u.addTo(this, u), 
            f.subTo(i, f)), u.rShiftTo(1, u)) : f.isEven() || f.subTo(i, f), f.rShiftTo(1, f);
            r.compareTo(e) >= 0 ? (r.subTo(e, r), o && h.subTo(u, h), n.subTo(f, n)) : (e.subTo(r, e), 
            o && u.subTo(h, u), f.subTo(n, f));
        }
        return 0 != e.compareTo(t.ONE) ? t.ZERO : f.compareTo(i) >= 0 ? f.subtract(i) : f.signum() < 0 ? (f.addTo(i, f), 
        f.signum() < 0 ? f.add(i) : f) : f;
    }, t.prototype.pow = function(t) {
        return this.exp(t, new l());
    }, t.prototype.gcd = function(t) {
        var i = this.s < 0 ? this.negate() : this.clone(), o = t.s < 0 ? t.negate() : t.clone();
        if (i.compareTo(o) < 0) {
            var r = i;
            i = o, o = r;
        }
        var s = i.getLowestSetBit(), e = o.getLowestSetBit();
        if (e < 0) return i;
        for (s < e && (e = s), e > 0 && (i.rShiftTo(e, i), o.rShiftTo(e, o)); i.signum() > 0; ) (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), 
        (s = o.getLowestSetBit()) > 0 && o.rShiftTo(s, o), i.compareTo(o) >= 0 ? (i.subTo(o, i), 
        i.rShiftTo(1, i)) : (o.subTo(i, o), o.rShiftTo(1, o));
        return e > 0 && o.lShiftTo(e, o), o;
    }, t.prototype.isProbablePrime = function(t) {
        var i, o = this.abs();
        if (1 == o.t && o[0] <= A[A.length - 1]) {
            for (i = 0; i < A.length; ++i) if (o[0] == A[i]) return !0;
            return !1;
        }
        if (o.isEven()) return !1;
        for (i = 1; i < A.length; ) {
            for (var r = A[i], s = i + 1; s < A.length && r < V; ) r *= A[s++];
            for (r = o.modInt(r); i < s; ) if (r % A[i++] == 0) return !1;
        }
        return o.millerRabin(t);
    }, t.prototype.square = function() {
        var t = i();
        return this.squareTo(t), t;
    }, t.prototype.Barrett = T;
    var q, N, x;
    if (null == N) {
        N = new Array(), x = 0;
        var L;
        if ("undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
            var I = new Uint8Array(32);
            for (window.crypto.getRandomValues(I), L = 0; L < 32; ++L) N[x++] = I[L];
        } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
            var Z = window.crypto.random(32);
            for (L = 0; L < Z.length; ++L) N[x++] = 255 & Z.charCodeAt(L);
        }
        for (;x < F; ) L = Math.floor(65536 * Math.random()), N[x++] = L >>> 8, N[x++] = 255 & L;
        x = 0, d();
    }
    g.prototype.nextBytes = function(t) {
        var i;
        for (i = 0; i < t.length; ++i) t[i] = D();
    }, b.prototype.init = function(t) {
        var i, o, r;
        for (i = 0; i < 256; ++i) this.S[i] = i;
        for (o = 0, i = 0; i < 256; ++i) o = o + this.S[i] + t[i % t.length] & 255, r = this.S[i], 
        this.S[i] = this.S[o], this.S[o] = r;
        this.i = 0, this.j = 0;
    }, b.prototype.next = function() {
        var t;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], 
        this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
    };
    var F = 256;
    t.SecureRandom = g, t.BigInteger = t, "undefined" != typeof exports ? exports = module.exports = t : (this.BigInteger = t, 
    this.SecureRandom = g);
}).call(void 0);