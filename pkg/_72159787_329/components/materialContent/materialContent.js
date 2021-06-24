function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e;
}

function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var i = t(require("./../../npm/wepy/lib/wepy.js")), a = t(require("./../readContent/readContent.js"));

require("./../../api/config.js");

require("./../../api/index.js");

require("./../../common/js/util.js");

var p = function(t) {
    function r() {
        var t, o, i, p;
        e(this, r);
        for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
        return o = i = n(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [ this ].concat(u))), 
        i.props = {
            is_material_box: {
                type: Boolean
            },
            title: {
                type: String
            },
            name: {
                type: String
            },
            content: {
                type: String
            },
            textAlign: {
                type: String
            }
        }, i.$repeat = {}, i.$props = {
            readContent: {
                "xmlns:v-bind": "",
                "v-bind:content.sync": "content",
                fontsize: "28"
            }
        }, i.$events = {}, i.components = {
            readContent: a.default
        }, i.data = {
            paddingTop: "128rpx",
            Shipei: !1,
            is_material_box: !1
        }, i.methods = {
            tapMasking: function() {
                this.is_material_box = !1;
            },
            tapLookFullText: function() {
                this.$invoke("readContent", "init"), this.is_material_box = !0;
            }
        }, p = o, n(i, p);
    }
    return o(r, i.default.component), r;
}();

exports.default = p;