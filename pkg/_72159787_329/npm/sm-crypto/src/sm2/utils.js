function F() {
    var F = new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16), r = new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16), e = new n("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16), t = new o(F, r, e);
    return {
        curve: t,
        G: t.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"),
        n: new n("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16)
    };
}

function r(F, r) {
    return F.length >= r ? F : new Array(r - F.length + 1).join("0") + F;
}

var e = require("./../../../jsbn/index.js"), n = e.BigInteger, t = e.SecureRandom, o = require("./ec.js").ECCurveFp, a = new t(), u = F(), i = u.curve, g = u.G, c = u.n;

module.exports = {
    getGlobalCurve: function() {
        return i;
    },
    generateEcparam: F,
    generateKeyPairHex: function() {
        var F = new n(c.bitLength(), a).mod(c.subtract(n.ONE)).add(n.ONE), e = r(F.toString(16), 64), t = g.multiply(F);
        return {
            privateKey: e,
            publicKey: "04" + r(t.getX().toBigInteger().toString(16), 64) + r(t.getY().toBigInteger().toString(16), 64)
        };
    },
    parseUtf8StringToHex: function(F) {
        for (var r = (F = unescape(encodeURIComponent(F))).length, e = [], n = 0; n < r; n++) e[n >>> 2] |= (255 & F.charCodeAt(n)) << 24 - n % 4 * 8;
        for (var t = [], o = 0; o < r; o++) {
            var a = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            t.push((a >>> 4).toString(16)), t.push((15 & a).toString(16));
        }
        return t.join("");
    },
    parseArrayBufferToHex: function(F) {
        return Array.prototype.map.call(new Uint8Array(F), function(F) {
            return ("00" + F.toString(16)).slice(-2);
        }).join("");
    },
    leftPad: r,
    arrayToHex: function(F) {
        for (var r = [], e = 0, n = 0; n < 2 * F.length; n += 2) r[n >>> 3] |= parseInt(F[e], 10) << 24 - n % 8 * 4, 
        e++;
        for (var t = [], o = 0; o < F.length; o++) {
            var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
            t.push((a >>> 4).toString(16)), t.push((15 & a).toString(16));
        }
        return t.join("");
    },
    arrayToUtf8: function(F) {
        for (var r = [], e = 0, n = 0; n < 2 * F.length; n += 2) r[n >>> 3] |= parseInt(F[e], 10) << 24 - n % 8 * 4, 
        e++;
        try {
            for (var t = [], o = 0; o < F.length; o++) {
                var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                t.push(String.fromCharCode(a));
            }
            return decodeURIComponent(escape(t.join("")));
        } catch (F) {
            throw new Error("Malformed UTF-8 data");
        }
    },
    hexToArray: function(F) {
        var e = [], n = F.length;
        n % 2 != 0 && (F = r(F, n + 1)), n = F.length;
        for (var t = 0; t < n; t += 2) e.push(parseInt(F.substr(t, 2), 16));
        return e;
    }
};