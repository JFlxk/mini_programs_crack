!function() {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
        rotl: function(r, t) {
            return r << t | r >>> 32 - t;
        },
        rotr: function(r, t) {
            return r << 32 - t | r >>> t;
        },
        endian: function(r) {
            if (r.constructor == Number) return 16711935 & t.rotl(r, 8) | 4278255360 & t.rotl(r, 24);
            for (var n = 0; n < r.length; n++) r[n] = t.endian(r[n]);
            return r;
        },
        randomBytes: function(r) {
            for (var t = []; r > 0; r--) t.push(Math.floor(256 * Math.random()));
            return t;
        },
        bytesToWords: function(r) {
            for (var t = [], n = 0, o = 0; n < r.length; n++, o += 8) t[o >>> 5] |= r[n] << 24 - o % 32;
            return t;
        },
        wordsToBytes: function(r) {
            for (var t = [], n = 0; n < 32 * r.length; n += 8) t.push(r[n >>> 5] >>> 24 - n % 32 & 255);
            return t;
        },
        bytesToHex: function(r) {
            for (var t = [], n = 0; n < r.length; n++) t.push((r[n] >>> 4).toString(16)), t.push((15 & r[n]).toString(16));
            return t.join("");
        },
        hexToBytes: function(r) {
            for (var t = [], n = 0; n < r.length; n += 2) t.push(parseInt(r.substr(n, 2), 16));
            return t;
        },
        bytesToBase64: function(t) {
            for (var n = [], o = 0; o < t.length; o += 3) for (var e = t[o] << 16 | t[o + 1] << 8 | t[o + 2], u = 0; u < 4; u++) 8 * o + 6 * u <= 8 * t.length ? n.push(r.charAt(e >>> 6 * (3 - u) & 63)) : n.push("=");
            return n.join("");
        },
        base64ToBytes: function(t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], o = 0, e = 0; o < t.length; e = ++o % 4) 0 != e && n.push((r.indexOf(t.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | r.indexOf(t.charAt(o)) >>> 6 - 2 * e);
            return n;
        }
    };
    module.exports = t;
}();