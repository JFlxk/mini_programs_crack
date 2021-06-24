!function() {
    var r = require("./../crypt/crypt.js"), e = require("./../charenc/charenc.js").utf8, n = require("./../is-buffer/index.js"), t = require("./../charenc/charenc.js").bin, i = function i(o, s) {
        o.constructor == String ? o = s && "binary" === s.encoding ? t.stringToBytes(o) : e.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : Array.isArray(o) || (o = o.toString());
        for (var c = r.bytesToWords(o), u = 8 * o.length, a = 1732584193, f = -271733879, g = -1732584194, y = 271733878, l = 0; l < c.length; l++) c[l] = 16711935 & (c[l] << 8 | c[l] >>> 24) | 4278255360 & (c[l] << 24 | c[l] >>> 8);
        c[u >>> 5] |= 128 << u % 32, c[14 + (u + 64 >>> 9 << 4)] = u;
        for (var h = i._ff, v = i._gg, _ = i._hh, d = i._ii, l = 0; l < c.length; l += 16) {
            var b = a, T = f, p = g, j = y;
            f = d(f = d(f = d(f = d(f = _(f = _(f = _(f = _(f = v(f = v(f = v(f = v(f = h(f = h(f = h(f = h(f, g = h(g, y = h(y, a = h(a, f, g, y, c[l + 0], 7, -680876936), f, g, c[l + 1], 12, -389564586), a, f, c[l + 2], 17, 606105819), y, a, c[l + 3], 22, -1044525330), g = h(g, y = h(y, a = h(a, f, g, y, c[l + 4], 7, -176418897), f, g, c[l + 5], 12, 1200080426), a, f, c[l + 6], 17, -1473231341), y, a, c[l + 7], 22, -45705983), g = h(g, y = h(y, a = h(a, f, g, y, c[l + 8], 7, 1770035416), f, g, c[l + 9], 12, -1958414417), a, f, c[l + 10], 17, -42063), y, a, c[l + 11], 22, -1990404162), g = h(g, y = h(y, a = h(a, f, g, y, c[l + 12], 7, 1804603682), f, g, c[l + 13], 12, -40341101), a, f, c[l + 14], 17, -1502002290), y, a, c[l + 15], 22, 1236535329), g = v(g, y = v(y, a = v(a, f, g, y, c[l + 1], 5, -165796510), f, g, c[l + 6], 9, -1069501632), a, f, c[l + 11], 14, 643717713), y, a, c[l + 0], 20, -373897302), g = v(g, y = v(y, a = v(a, f, g, y, c[l + 5], 5, -701558691), f, g, c[l + 10], 9, 38016083), a, f, c[l + 15], 14, -660478335), y, a, c[l + 4], 20, -405537848), g = v(g, y = v(y, a = v(a, f, g, y, c[l + 9], 5, 568446438), f, g, c[l + 14], 9, -1019803690), a, f, c[l + 3], 14, -187363961), y, a, c[l + 8], 20, 1163531501), g = v(g, y = v(y, a = v(a, f, g, y, c[l + 13], 5, -1444681467), f, g, c[l + 2], 9, -51403784), a, f, c[l + 7], 14, 1735328473), y, a, c[l + 12], 20, -1926607734), g = _(g, y = _(y, a = _(a, f, g, y, c[l + 5], 4, -378558), f, g, c[l + 8], 11, -2022574463), a, f, c[l + 11], 16, 1839030562), y, a, c[l + 14], 23, -35309556), g = _(g, y = _(y, a = _(a, f, g, y, c[l + 1], 4, -1530992060), f, g, c[l + 4], 11, 1272893353), a, f, c[l + 7], 16, -155497632), y, a, c[l + 10], 23, -1094730640), g = _(g, y = _(y, a = _(a, f, g, y, c[l + 13], 4, 681279174), f, g, c[l + 0], 11, -358537222), a, f, c[l + 3], 16, -722521979), y, a, c[l + 6], 23, 76029189), g = _(g, y = _(y, a = _(a, f, g, y, c[l + 9], 4, -640364487), f, g, c[l + 12], 11, -421815835), a, f, c[l + 15], 16, 530742520), y, a, c[l + 2], 23, -995338651), g = d(g, y = d(y, a = d(a, f, g, y, c[l + 0], 6, -198630844), f, g, c[l + 7], 10, 1126891415), a, f, c[l + 14], 15, -1416354905), y, a, c[l + 5], 21, -57434055), g = d(g, y = d(y, a = d(a, f, g, y, c[l + 12], 6, 1700485571), f, g, c[l + 3], 10, -1894986606), a, f, c[l + 10], 15, -1051523), y, a, c[l + 1], 21, -2054922799), g = d(g, y = d(y, a = d(a, f, g, y, c[l + 8], 6, 1873313359), f, g, c[l + 15], 10, -30611744), a, f, c[l + 6], 15, -1560198380), y, a, c[l + 13], 21, 1309151649), g = d(g, y = d(y, a = d(a, f, g, y, c[l + 4], 6, -145523070), f, g, c[l + 11], 10, -1120210379), a, f, c[l + 2], 15, 718787259), y, a, c[l + 9], 21, -343485551), 
            a = a + b >>> 0, f = f + T >>> 0, g = g + p >>> 0, y = y + j >>> 0;
        }
        return r.endian([ a, f, g, y ]);
    };
    i._ff = function(r, e, n, t, i, o, s) {
        var c = r + (e & n | ~e & t) + (i >>> 0) + s;
        return (c << o | c >>> 32 - o) + e;
    }, i._gg = function(r, e, n, t, i, o, s) {
        var c = r + (e & t | n & ~t) + (i >>> 0) + s;
        return (c << o | c >>> 32 - o) + e;
    }, i._hh = function(r, e, n, t, i, o, s) {
        var c = r + (e ^ n ^ t) + (i >>> 0) + s;
        return (c << o | c >>> 32 - o) + e;
    }, i._ii = function(r, e, n, t, i, o, s) {
        var c = r + (n ^ (e | ~t)) + (i >>> 0) + s;
        return (c << o | c >>> 32 - o) + e;
    }, i._blocksize = 16, i._digestsize = 16, module.exports = function(e, n) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
        var o = r.wordsToBytes(i(e, n));
        return n && n.asBytes ? o : n && n.asString ? t.bytesToString(o) : r.bytesToHex(o);
    };
}();