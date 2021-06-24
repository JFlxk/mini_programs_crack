function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), n = function() {
    function n(t, r, i) {
        e(this, n), this.active = !0, this.name = t, this.source = r, this.type = i;
    }
    return t(n, [ {
        key: "$destroy",
        value: function() {
            this.active = !1;
        }
    }, {
        key: "$transfor",
        value: function(e) {
            var t = 0;
            for (t in e) this[t] = e[t];
        }
    } ]), n;
}();

exports.default = n;