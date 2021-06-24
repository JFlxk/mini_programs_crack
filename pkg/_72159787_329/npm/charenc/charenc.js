var n = {
    utf8: {
        stringToBytes: function(t) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
        },
        bytesToString: function(t) {
            return decodeURIComponent(escape(n.bin.bytesToString(t)));
        }
    },
    bin: {
        stringToBytes: function(n) {
            for (var t = [], e = 0; e < n.length; e++) t.push(255 & n.charCodeAt(e));
            return t;
        },
        bytesToString: function(n) {
            for (var t = [], e = 0; e < n.length; e++) t.push(String.fromCharCode(n[e]));
            return t.join("");
        }
    }
};

module.exports = n;