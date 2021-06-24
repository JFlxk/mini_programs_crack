function e(e, r) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1234567812345678", n = new s(), a = new s().getZ(g, r.substr(2, 128), t), i = l.hexToArray(l.arrayToHex(a).toString()), o = e, u = l.hexToArray(o), d = new Array(n.getDigestSize());
    return n.blockUpdate(i, 0, i.length), n.blockUpdate(u, 0, u.length), n.doFinal(d, 0), 
    l.arrayToHex(d).toString();
}

function r(e) {
    var r = g.multiply(new n(e, 16));
    return "04" + l.leftPad(r.getX().toBigInteger().toString(16), 64) + l.leftPad(r.getY().toBigInteger().toString(16), 64);
}

function t() {
    var e = l.generateKeyPairHex(), r = y.decodePointHex(e.publicKey);
    return e.k = new n(e.privateKey, 16), e.x1 = r.getX().toBigInteger(), e;
}

var n = require("./../../../jsbn/index.js").BigInteger, a = require("./asn1.js"), i = a.encodeDer, o = a.decodeDer, s = require("./sm3.js"), u = require("./sm2.js"), l = require("./utils.js"), d = l.generateEcparam(), g = d.G, y = d.curve, v = d.n, c = 0;

module.exports = {
    generateKeyPairHex: l.generateKeyPairHex,
    doEncrypt: function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = new u();
        e = l.hexToArray(l.parseUtf8StringToHex(e)), r.length > 128 && (r = r.substr(r.length - 128));
        var a = r.substr(0, 64), i = r.substr(64);
        r = n.createPoint(a, i);
        var o = n.initEncipher(r);
        n.encryptBlock(e);
        var s = l.arrayToHex(e), d = new Array(32);
        return n.doFinal(d), d = l.arrayToHex(d), t === c ? o + s + d : o + d + s;
    },
    doDecrypt: function(e, r) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a = new u();
        r = new n(r, 16);
        var i = e.substr(0, 64), o = e.substr(0 + i.length, 64), s = i.length + o.length, d = e.substr(s, 64), g = e.substr(s + 64);
        t === c && (d = e.substr(e.length - 64), g = e.substr(s, e.length - s - 64));
        var y = l.hexToArray(g), v = a.createPoint(i, o);
        a.initDecipher(r, v), a.decryptBlock(y);
        var p = new Array(32);
        return a.doFinal(p), l.arrayToHex(p) === d ? l.arrayToUtf8(y) : "";
    },
    doSignature: function(a, o) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = s.pointPool, d = s.der, g = s.hash, y = s.publicKey, c = s.userId, p = "string" == typeof a ? l.parseUtf8StringToHex(a) : l.parseArrayBufferToHex(a);
        g && (p = e(p, y = y || r(o), c));
        var h = new n(o, 16), f = new n(p, 16), x = null, b = null, w = null;
        do {
            do {
                var H = void 0;
                x = (H = u && u.length ? u.pop() : t()).k, b = f.add(H.x1).mod(v);
            } while (b.equals(n.ZERO) || b.add(x).equals(v));
            w = h.add(n.ONE).modInverse(v).multiply(x.subtract(b.multiply(h))).mod(v);
        } while (w.equals(n.ZERO));
        return d ? i(b, w) : l.leftPad(b.toString(16), 64) + l.leftPad(w.toString(16), 64);
    },
    doVerifySignature: function(r, t, a) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = i.der, u = i.hash, d = i.userId, c = "string" == typeof r ? l.parseUtf8StringToHex(r) : l.parseArrayBufferToHex(r);
        u && (c = e(c, a, d));
        var p = void 0, h = void 0;
        if (s) {
            var f = o(t);
            p = f.r, h = f.s;
        } else p = new n(t.substring(0, 64), 16), h = new n(t.substring(64), 16);
        var x = y.decodePointHex(a), b = new n(c, 16), w = p.add(h).mod(v);
        if (w.equals(n.ZERO)) return !1;
        var H = g.multiply(h).add(x.multiply(w)), T = b.add(H.getX().toBigInteger()).mod(v);
        return p.equals(T);
    },
    getPoint: t
};