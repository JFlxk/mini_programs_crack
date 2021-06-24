function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), i = require("./../../../jsbn/index.js").BigInteger, n = require("./sm3.js"), s = require("./utils.js"), r = function() {
    function r() {
        e(this, r), this.ct = 1, this.p2 = null, this.sm3keybase = null, this.sm3c3 = null, 
        this.key = new Array(32), this.keyOff = 0;
    }
    return t(r, [ {
        key: "reset",
        value: function() {
            this.sm3keybase = new n(), this.sm3c3 = new n();
            var e = s.hexToArray(s.leftPad(this.p2.getX().toBigInteger().toRadix(16), 64)), t = s.hexToArray(s.leftPad(this.p2.getY().toBigInteger().toRadix(16), 64));
            this.sm3keybase.blockUpdate(e, 0, e.length), this.sm3c3.blockUpdate(e, 0, e.length), 
            this.sm3keybase.blockUpdate(t, 0, t.length), this.ct = 1, this.nextKey();
        }
    }, {
        key: "nextKey",
        value: function() {
            var e = new n(this.sm3keybase);
            e.update(this.ct >> 24 & 255), e.update(this.ct >> 16 & 255), e.update(this.ct >> 8 & 255), 
            e.update(255 & this.ct), e.doFinal(this.key, 0), this.keyOff = 0, this.ct++;
        }
    }, {
        key: "initEncipher",
        value: function(e) {
            var t = s.generateKeyPairHex(), n = new i(t.privateKey, 16), r = t.publicKey;
            return this.p2 = e.multiply(n), this.reset(), r.length > 128 && (r = r.substr(r.length - 128)), 
            r;
        }
    }, {
        key: "encryptBlock",
        value: function(e) {
            this.sm3c3.blockUpdate(e, 0, e.length);
            for (var t = 0; t < e.length; t++) this.keyOff === this.key.length && this.nextKey(), 
            e[t] ^= 255 & this.key[this.keyOff++];
        }
    }, {
        key: "initDecipher",
        value: function(e, t) {
            this.p2 = t.multiply(e), this.reset();
        }
    }, {
        key: "decryptBlock",
        value: function(e) {
            for (var t = 0; t < e.length; t++) this.keyOff === this.key.length && this.nextKey(), 
            e[t] ^= 255 & this.key[this.keyOff++];
            this.sm3c3.blockUpdate(e, 0, e.length);
        }
    }, {
        key: "doFinal",
        value: function(e) {
            var t = s.hexToArray(s.leftPad(this.p2.getY().toBigInteger().toRadix(16), 64));
            this.sm3c3.blockUpdate(t, 0, t.length), this.sm3c3.doFinal(e, 0), this.reset();
        }
    }, {
        key: "createPoint",
        value: function(e, t) {
            var i = "04" + e + t;
            return s.getGlobalCurve().decodePointHex(i);
        }
    } ]), r;
}();

module.exports = r;