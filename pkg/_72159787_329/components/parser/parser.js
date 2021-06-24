function t(t) {
    for (var e = t.length, i = 5381; e--; ) i += (i << 5) + t.charCodeAt(e);
    return i;
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, i = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : e(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
}, n = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : i(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : i(t);
}, o = {}, r = require("./libs/MpHtmlParser.js"), a = wx.getFileSystemManager && wx.getFileSystemManager();

Component({
    options: {
        pureDataPattern: /^[acdgtu]|W/
    },
    properties: {
        html: {
            type: null,
            observer: function(t) {
                this._refresh ? this._refresh = !1 : this.setContent(t, !1, !0);
            }
        },
        autopause: {
            type: Boolean,
            value: !0
        },
        autoscroll: Boolean,
        autosetTitle: {
            type: Boolean,
            value: !0
        },
        compress: Number,
        domain: String,
        lazyLoad: Boolean,
        selectable: Boolean,
        tagStyle: Object,
        showWithAnimation: Boolean,
        useAnchor: Boolean,
        useCache: Boolean
    },
    relations: {
        "../parser-group/parser-group": {
            type: "ancestor"
        }
    },
    created: function() {
        this.imgList = [], this.imgList.setItem = function(t, e) {
            var i = this;
            if (t && e) {
                if (0 == e.indexOf("http") && this.includes(e)) {
                    for (var n, o = "", r = 0; (n = e[r]) && ("/" != n || "/" == e[r - 1] || "/" == e[r + 1]); r++) o += Math.random() > .5 ? n.toUpperCase() : n;
                    return o += e.substr(r), this[t] = o;
                }
                if (this[t] = e, e.includes("data:image")) {
                    var s = e.match(/data:image\/(\S+?);(\S+?),(.+)/);
                    if (!s) return;
                    var l = wx.env.USER_DATA_PATH + "/" + Date.now() + "." + s[1];
                    a && a.writeFile({
                        filePath: l,
                        data: s[3],
                        encoding: s[2],
                        success: function() {
                            return i[t] = l;
                        }
                    });
                }
            }
        }, this.imgList.each = function(t) {
            for (var e = 0, i = this.length; e < i; e++) this.setItem(e, t(this[e], e, this));
        };
    },
    detached: function() {
        this.imgList.each(function(t) {
            t && t.includes(wx.env.USER_DATA_PATH) && a && a.unlink({
                filePath: t
            });
        }), clearInterval(this._timer);
    },
    methods: {
        navigateTo: function(t) {
            var e = this;
            if (!this.data.useAnchor) return t.fail && t.fail({
                errMsg: "Anchor is disabled"
            });
            this.createSelectorQuery().select(".top" + (t.id ? ">>>#" + t.id : "")).boundingClientRect().selectViewport().scrollOffset().exec(function(i) {
                if (!i[0]) return e.group ? e.group.navigateTo(e.i, t) : t.fail && t.fail({
                    errMsg: "Label not found"
                });
                t.scrollTop = i[1].scrollTop + i[0].top + (t.offset || 0), wx.pageScrollTo(t);
            });
        },
        getText: function() {
            for (var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.html, i = "", n = 0; t = e[n++]; ) if ("text" == t.type) i += t.text.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); else if ("br" == t.type) i += "\n"; else {
                var o = "p" == t.name || "div" == t.name || "tr" == t.name || "li" == t.name || "h" == t.name[0] && t.name[1] > "0" && t.name[1] < "7";
                o && i && "\n" != i[i.length - 1] && (i += "\n"), t.children && (i += this.getText(t.children)), 
                o && "\n" != i[i.length - 1] ? i += "\n" : "td" != t.name && "th" != t.name || (i += "\t");
            }
            return i;
        },
        getVideoContext: function(t) {
            if (!t) return this.videoContexts;
            for (var e = this.videoContexts.length; e--; ) if (this.videoContexts[e].id == t) return this.videoContexts[e];
        },
        setContent: function(e, i, a) {
            var s = this, l = {};
            if (e) if ("string" == typeof e) {
                var h = new r(e, this.data);
                if (this.data.useCache) {
                    var c = t(e);
                    o[c] ? l.html = o[c] : (l.html = h.parse(), o[c] = l.html);
                } else l.html = h.parse();
                this._refresh = !0, this.triggerEvent("parse", l.html);
            } else if (e.constructor == Array) {
                if (e.length && "Parser" != e[0].PoweredBy) {
                    var u = new r("", this.data);
                    !function t(e) {
                        for (var i, n = 0; i = e[n]; n++) if ("text" != i.type) {
                            i.attrs = i.attrs || {};
                            for (var o in i.attrs) "string" != typeof i.attrs[o] && (i.attrs[o] = i.attrs[o].toString());
                            u.matchAttr(i), i.children && (u.STACK.push(i), t(i.children), u.popNode(u.STACK.pop()));
                        }
                    }(e), l.html = e;
                }
                a || (l.html = e);
            } else {
                if ("object" != (void 0 === e ? "undefined" : n(e)) || !e.nodes) return console.warn("错误的 html 类型：" + (void 0 === e ? "undefined" : n(e)));
                l.html = e.nodes, console.warn("错误的 html 类型：object 类型已废弃");
            } else {
                if (a || i) return;
                l.html = "";
            }
            i ? (this._refresh = !0, l.html = (this.data.html || []).concat(l.html)) : this.data.showWithAnimation && (l.showAm = "animation: show .5s"), 
            (l.html || l.showAm) && this.setData(l), this.data.html.length && this.data.html[0].title && this.data.autosetTitle && wx.setNavigationBarTitle({
                title: this.data.html[0].title
            }), this.imgList.length = 0, this.videoContexts = [];
            for (var f, m = this.selectAllComponents(".top,.top>>>._node"), d = 0; f = m[d++]; ) {
                f.top = this;
                for (var p, g = 0; p = f.data.nodes[g++]; ) if (!p.c) if ("img" == p.name) this.imgList.setItem(p.attrs.i, p.attrs.src); else if ("video" == p.name || "audio" == p.name) {
                    var v;
                    (v = "video" == p.name ? wx.createVideoContext(p.attrs.id, f) : f.selectComponent("#" + p.attrs.id)) && (v.id = p.attrs.id, 
                    this.videoContexts.push(v));
                }
            }
            (wx.nextTick || setTimeout)(function() {
                return s.triggerEvent("load");
            }, 50);
            var y;
            clearInterval(this._timer), this._timer = setInterval(function() {
                s.createSelectorQuery().select(".top").boundingClientRect(function(t) {
                    s.rect = t, t.height == y && (s.triggerEvent("ready", t), clearInterval(s._timer)), 
                    y = t.height;
                }).exec();
            }, 350);
        }
    }
});