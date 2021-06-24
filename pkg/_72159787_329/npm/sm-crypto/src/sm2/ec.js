function t(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

var i = function() {
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
}(), e = require("./../../../jsbn/index.js").BigInteger, n = new e("3"), u = function() {
    function e(i, n) {
        t(this, e), this.x = n, this.q = i;
    }
    return i(e, [ {
        key: "equals",
        value: function(t) {
            return t === this || this.q.equals(t.q) && this.x.equals(t.x);
        }
    }, {
        key: "toBigInteger",
        value: function() {
            return this.x;
        }
    }, {
        key: "negate",
        value: function() {
            return new e(this.q, this.x.negate().mod(this.q));
        }
    }, {
        key: "add",
        value: function(t) {
            return new e(this.q, this.x.add(t.toBigInteger()).mod(this.q));
        }
    }, {
        key: "subtract",
        value: function(t) {
            return new e(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
        }
    }, {
        key: "multiply",
        value: function(t) {
            return new e(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
        }
    }, {
        key: "divide",
        value: function(t) {
            return new e(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
        }
    }, {
        key: "square",
        value: function() {
            return new e(this.q, this.x.square().mod(this.q));
        }
    } ]), e;
}(), s = function() {
    function u(i, n, s, r) {
        t(this, u), this.curve = i, this.x = n, this.y = s, this.z = null == r ? e.ONE : r, 
        this.zinv = null;
    }
    return i(u, [ {
        key: "getX",
        value: function() {
            return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
        }
    }, {
        key: "getY",
        value: function() {
            return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
        }
    }, {
        key: "equals",
        value: function(t) {
            return t === this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(e.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(e.ZERO));
        }
    }, {
        key: "isInfinity",
        value: function() {
            return null === this.x && null === this.y || this.z.equals(e.ZERO) && !this.y.toBigInteger().equals(e.ZERO);
        }
    }, {
        key: "negate",
        value: function() {
            return new u(this.curve, this.x, this.y.negate(), this.z);
        }
    }, {
        key: "add",
        value: function(t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var i = this.x.toBigInteger(), n = this.y.toBigInteger(), s = this.z, r = t.x.toBigInteger(), l = t.y.toBigInteger(), h = t.z, o = this.curve.q, a = i.multiply(h).mod(o), m = r.multiply(s).mod(o), c = a.subtract(m), y = n.multiply(h).mod(o), f = l.multiply(s).mod(o), g = y.subtract(f);
            if (e.ZERO.equals(c)) return e.ZERO.equals(g) ? this.twice() : this.curve.infinity;
            var v = a.add(m), d = s.multiply(h).mod(o), q = c.square().mod(o), I = c.multiply(q).mod(o), p = d.multiply(g.square()).subtract(v.multiply(q)).mod(o), B = c.multiply(p).mod(o), b = g.multiply(q.multiply(a).subtract(p)).subtract(y.multiply(I)).mod(o), w = I.multiply(d).mod(o);
            return new u(this.curve, this.curve.fromBigInteger(B), this.curve.fromBigInteger(b), w);
        }
    }, {
        key: "twice",
        value: function() {
            if (this.isInfinity()) return this;
            if (!this.y.toBigInteger().signum()) return this.curve.infinity;
            var t = this.x.toBigInteger(), i = this.y.toBigInteger(), e = this.z, s = this.curve.q, r = this.curve.a.toBigInteger(), l = t.square().multiply(n).add(r.multiply(e.square())).mod(s), h = i.shiftLeft(1).multiply(e).mod(s), o = i.square().mod(s), a = o.multiply(t).multiply(e).mod(s), m = h.square().mod(s), c = l.square().subtract(a.shiftLeft(3)).mod(s), y = h.multiply(c).mod(s), f = l.multiply(a.shiftLeft(2).subtract(c)).subtract(m.shiftLeft(1).multiply(o)).mod(s), g = h.multiply(m).mod(s);
            return new u(this.curve, this.curve.fromBigInteger(y), this.curve.fromBigInteger(f), g);
        }
    }, {
        key: "multiply",
        value: function(t) {
            if (this.isInfinity()) return this;
            if (!t.signum()) return this.curve.infinity;
            for (var i = t.multiply(n), e = this.negate(), u = this, s = i.bitLength() - 2; s > 0; s--) {
                u = u.twice();
                var r = i.testBit(s);
                r !== t.testBit(s) && (u = u.add(r ? this : e));
            }
            return u;
        }
    } ]), u;
}(), r = function() {
    function n(i, e, u) {
        t(this, n), this.q = i, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(u), 
        this.infinity = new s(this, null, null);
    }
    return i(n, [ {
        key: "equals",
        value: function(t) {
            return t === this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
        }
    }, {
        key: "fromBigInteger",
        value: function(t) {
            return new u(this.q, t);
        }
    }, {
        key: "decodePointHex",
        value: function(t) {
            switch (parseInt(t.substr(0, 2), 16)) {
              case 0:
                return this.infinity;

              case 2:
              case 3:
                return null;

              case 4:
              case 6:
              case 7:
                var i = (t.length - 2) / 2, n = t.substr(2, i), u = t.substr(i + 2, i);
                return new s(this, this.fromBigInteger(new e(n, 16)), this.fromBigInteger(new e(u, 16)));

              default:
                return null;
            }
        }
    } ]), n;
}();

module.exports = {
    ECPointFp: s,
    ECCurveFp: r
};