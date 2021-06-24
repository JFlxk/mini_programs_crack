function n(n, r) {
    return n.length >= r ? n : new Array(r - n.length + 1).join("0") + n;
}

function r(r) {
    for (var t = "", o = 0; o < r.length / 8; o++) t += n(parseInt(r.substr(8 * o, 8), 2).toString(16), 2);
    return t;
}

function t(r) {
    for (var t = "", o = 0; o < r.length / 2; o++) t += n(parseInt(r.substr(2 * o, 2), 16).toString(2), 8);
    return t;
}

function o(r) {
    for (var t = "", o = 0, u = r.length; o < u; o++) {
        var e = r.codePointAt(o);
        if (e <= 127) t += n(e.toString(2), 8); else if (e <= 2047) t += n((192 | e >>> 6).toString(2), 8), 
        t += n((128 | 63 & e).toString(2), 8); else if (e <= 55295 || e >= 57344 && e <= 65535) t += n((224 | e >>> 12).toString(2), 8), 
        t += n((128 | e >>> 6 & 63).toString(2), 8), t += n((128 | 63 & e).toString(2), 8); else {
            if (!(e >= 65536 && e <= 1114111)) throw t += n(e.toString(2), 8), new Error("input is not supported");
            o++, t += n((240 | e >>> 18 & 28).toString(2), 8), t += n((128 | e >>> 12 & 63).toString(2), 8), 
            t += n((128 | e >>> 6 & 63).toString(2), 8), t += n((128 | 63 & e).toString(2), 8);
        }
    }
    return t;
}

function u(r) {
    return r.reduce(function(r, t) {
        return r + n(t.toString(2), 8);
    }, "");
}

function e(n, r) {
    return n.substring(r % n.length) + n.substr(0, r % n.length);
}

function i(n, r, t) {
    for (var o = n || "", u = r || "", e = [], i = void 0, f = o.length - 1; f >= 0; f--) i = t(o[f], u[f], i), 
    e[f] = i[0];
    return e.join("");
}

function f(n, r) {
    return i(n, r, function(n, r) {
        return [ n === r ? "0" : "1" ];
    });
}

function c(n, r) {
    return i(n, r, function(n, r) {
        return [ "1" === n && "1" === r ? "1" : "0" ];
    });
}

function s(n, r) {
    return i(n, r, function(n, r) {
        return [ "1" === n || "1" === r ? "1" : "0" ];
    });
}

function g(n, r) {
    return i(n, r, function(n, r, t) {
        var o = t ? t[1] : "0";
        return n !== r ? [ "0" === o ? "1" : "0", o ] : [ o, n ];
    });
}

function a(n) {
    return i(n, void 0, function(n) {
        return [ "1" === n ? "0" : "1" ];
    });
}

function v(n) {
    return function() {
        for (var r = arguments.length, t = Array(r), o = 0; o < r; o++) t[o] = arguments[o];
        return t.reduce(function(r, t) {
            return n(r, t);
        });
    };
}

function d(n) {
    return v(f)(n, e(n, 9), e(n, 17));
}

function S(n) {
    return v(f)(n, e(n, 15), e(n, 23));
}

function h(n, r, t, o) {
    return o >= 0 && o <= 15 ? v(f)(n, r, t) : v(s)(c(n, r), c(n, t), c(r, t));
}

function l(n, r, t, o) {
    return o >= 0 && o <= 15 ? v(f)(n, r, t) : s(c(n, r), c(a(n), t));
}

function b(n) {
    return t(n >= 0 && n <= 15 ? "79cc4519" : "7a879d8a");
}

function p(n, r) {
    for (var t = [], o = [], u = 0; u < 16; u++) t.push(r.substr(32 * u, 32));
    for (var i = 16; i < 68; i++) t.push(v(f)(S(v(f)(t[i - 16], t[i - 9], e(t[i - 3], 15))), e(t[i - 13], 7), t[i - 6]));
    for (var c = 0; c < 64; c++) o.push(f(t[c], t[c + 4]));
    for (var s = [], a = 0; a < 8; a++) s.push(n.substr(32 * a, 32));
    for (var p = s[0], j = s[1], w = s[2], y = s[3], A = s[4], I = s[5], m = s[6], x = s[7], E = void 0, P = void 0, k = void 0, q = void 0, z = 0; z < 64; z++) P = f(E = e(v(g)(e(p, 12), A, e(b(z), z)), 7), e(p, 12)), 
    k = v(g)(h(p, j, w, z), y, P, o[z]), q = v(g)(l(A, I, m, z), x, E, t[z]), y = w, 
    w = e(j, 9), j = p, p = k, x = m, m = e(I, 19), I = A, A = d(q);
    return f([ p, j, w, y, A, I, m, x ].join(""), n);
}

module.exports = function(e) {
    for (var i = "string" == typeof e ? o(e) : u(e), f = i.length, c = f % 512, s = (i + "1" + n("", c = c >= 448 ? 512 - c % 448 - 1 : 448 - c - 1) + n(f.toString(2), 64)).toString(), g = (f + c + 65) / 512, a = t("7380166f4914b2b9172442d7da8a0600a96f30bc163138aae38dee4db0fb0e4e"), v = 0; v <= g - 1; v++) a = p(a, s.substr(512 * v, 512));
    return r(a);
};