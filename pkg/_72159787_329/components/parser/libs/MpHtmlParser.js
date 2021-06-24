function t(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

var i = function() {
    function t(t, i) {
        for (var s = 0; s < i.length; s++) {
            var e = i[s];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
            Object.defineProperty(t, e.key, e);
        }
    }
    return function(i, s, e) {
        return s && t(i.prototype, s), e && t(i, e), i;
    };
}(), s = require("./config.js"), e = s.blankChar, a = require("./CssHandler.js"), h = wx.getSystemInfoSync().windowWidth, r = function() {
    function r(i) {
        var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        t(this, r), this.attrs = {}, this.CssHandler = new a(s.tagStyle, h), this.data = i, 
        this.domain = s.domain, this.DOM = [], this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0, 
        s.prot = (this.domain || "").includes("://") ? this.domain.split("://")[0] : "http", 
        this.options = s, this.state = this.Text, this.STACK = [];
    }
    return i(r, [ {
        key: "parse",
        value: function() {
            for (var t; t = this.data[this.i]; this.i++) this.state(t);
            for (this.state == this.Text && this.setText(); this.STACK.length; ) this.popNode(this.STACK.pop());
            return this.DOM.length && (this.DOM[0].PoweredBy = "Parser", this.title && (this.DOM[0].title = this.title)), 
            this.DOM;
        }
    }, {
        key: "setAttr",
        value: function() {
            var t = this.attrName.toLowerCase();
            if (s.trustAttrs[t]) {
                var i = this.attrVal;
                i ? this.attrs[t] = "src" == t ? this.getUrl(this.decode(i, "amp")) : "href" == t || "style" == t ? this.decode(i, "amp") : i : s.boolAttrs[t] && (this.attrs[t] = "T");
            }
            for (this.attrVal = ""; e[this.data[this.i]]; ) this.i++;
            this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
        }
    }, {
        key: "setText",
        value: function() {
            var t, i = this.section();
            if (i) if (i = s.onText && s.onText(i, function() {
                return t = !0;
            }) || i, t) {
                this.data = this.data.substr(0, this.start) + i + this.data.substr(this.i);
                var a = this.start + i.length;
                for (this.i = this.start; this.i < a; this.i++) this.state(this.data[this.i]);
            } else {
                if (!this.pre) {
                    for (var h, r = [], n = i.length; h = i[--n]; ) (!e[h] || !e[r[0]] && (h = " ")) && r.unshift(h);
                    i = r.join("");
                }
                this.siblings().push({
                    type: "text",
                    text: this.decode(i)
                });
            }
        }
    }, {
        key: "setNode",
        value: function() {
            var t = {
                name: this.tagName.toLowerCase(),
                attrs: this.attrs
            }, i = s.selfClosingTags[t.name];
            if (this.attrs = {}, s.ignoreTags[t.name]) if (i) if ("source" == t.name) {
                var e = this.parent();
                e && ("video" == e.name || "audio" == e.name) && t.attrs.src && e.attrs.source.push(t.attrs.src);
            } else "base" != t.name || this.domain || (this.domain = t.attrs.href); else this.remove(t); else this.matchAttr(t), 
            i ? s.filter && 0 == s.filter(t, this) || this.siblings().push(t) : (t.children = [], 
            "pre" == t.name && s.highlight && (this.remove(t), this.pre = t.pre = !0), this.siblings().push(t), 
            this.STACK.push(t));
            "/" == this.data[this.i] && this.i++, this.start = this.i + 1, this.state = this.Text;
        }
    }, {
        key: "remove",
        value: function(t) {
            var i = this, a = t.name, h = this.i, r = function() {
                var s = i.data.substring(h, i.i + 1);
                t.attrs.xmlns || (s = ' xmlns="http://www.w3.org/2000/svg"' + s);
                for (var e = h; "<" != i.data[h]; ) h--;
                s = i.data.substring(h, e) + s;
                var a = i.parent();
                "100%" == t.attrs.width && a && (a.attrs.style || "").includes("inline") && (a.attrs.style = "width:300px;max-width:100%;" + a.attrs.style), 
                i.siblings().push({
                    name: "img",
                    attrs: {
                        src: "data:image/svg+xml;utf8," + s.replace(/#/g, "%23"),
                        ignore: "T"
                    }
                });
            };
            if ("svg" == t.name && "/" == this.data[h]) return r(this.i++);
            for (;;) {
                if (-1 == (this.i = this.data.indexOf("</", this.i + 1))) return void (this.i = "pre" == a || "svg" == a ? h : this.data.length);
                for (this.start = this.i += 2; !e[this.data[this.i]] && !this.isClose(); ) this.i++;
                if (this.section().toLowerCase() == a) return "pre" == a ? (this.data = this.data.substr(0, h + 1) + s.highlight(this.data.substring(h + 1, this.i - 5), t.attrs) + this.data.substr(this.i - 5), 
                this.i = h) : ("style" == a ? this.CssHandler.getStyle(this.data.substring(h + 1, this.i - 7)) : "title" == a && (this.title = this.data.substring(h + 1, this.i - 7)), 
                -1 == (this.i = this.data.indexOf(">", this.i)) && (this.i = this.data.length), 
                void ("svg" == a && r()));
            }
        }
    }, {
        key: "matchAttr",
        value: function(t) {
            var i = t.attrs, s = this.CssHandler.match(t.name, i, t) + (i.style || ""), a = {};
            switch (i.id && (1 & this.options.compress ? i.id = void 0 : this.options.useAnchor && this.bubble()), 
            2 & this.options.compress && i.class && (i.class = void 0), t.name) {
              case "a":
              case "ad":
                this.bubble();
                break;

              case "font":
                if (i.color && (a.color = i.color, i.color = void 0), i.face && (a["font-family"] = i.face, 
                i.face = void 0), i.size) {
                    var r = parseInt(i.size);
                    r < 1 ? r = 1 : r > 7 && (r = 7);
                    var n = [ "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large" ];
                    a["font-size"] = n[r - 1], i.size = void 0;
                }
                break;

              case "video":
              case "audio":
                i.id ? this[t.name + "Num"]++ : i.id = t.name + ++this[t.name + "Num"], "video" == t.name && (this.videoNum > 3 && (t.lazyLoad = 1), 
                i.width && (a.width = parseFloat(i.width) + (i.width.includes("%") ? "%" : "px"), 
                i.width = void 0), i.height && (a.height = parseFloat(i.height) + (i.height.includes("%") ? "%" : "px"), 
                i.height = void 0)), i.source = [], i.src && i.source.push(i.src), i.controls || i.autoplay || console.warn("存在没有 controls 属性的 " + t.name + " 标签，可能导致无法播放", t), 
                this.bubble();
                break;

              case "td":
              case "th":
                if (i.colspan || i.rowspan) for (var o, l = this.STACK.length; o = this.STACK[--l]; ) if ("table" == o.name) {
                    o.c = void 0;
                    break;
                }
            }
            i.align && (a["text-align"] = i.align, i.align = void 0);
            var d = s.split(";");
            s = "";
            for (var u = 0, c = d.length; u < c; u++) {
                var f = d[u].split(":");
                if (!(f.length < 2)) {
                    var m = f[0].trim().toLowerCase(), g = f.slice(1).join(":").trim();
                    g.includes("-webkit") || g.includes("-moz") || g.includes("-ms") || g.includes("-o") || g.includes("safe") ? s += ";" + m + ":" + g : a[m] && !g.includes("import") && a[m].includes("import") || (a[m] = g);
                }
            }
            if ("img" == t.name) {
                i["data-src"] && (i.src = i.src || i["data-src"], i["data-src"] = void 0), i.src && !i.ignore && (this.bubble() ? i.i = (this.imgNum++).toString() : i.ignore = "T"), 
                i.ignore && (a["max-width"] = "100%");
                var p;
                a.width ? p = a.width : i.width && (p = i.width.includes("%") ? i.width : i.width + "px"), 
                p && (a.width = p, i.width = "100%", parseInt(p) > h && (a.height = "", i.height && (i.height = void 0))), 
                a.height ? (i.height = a.height, a.height = "") : i.height && !i.height.includes("%") && (i.height += "px");
            }
            for (var v in a) {
                var b = a[v];
                if (b) {
                    if ((v.includes("flex") || "order" == v || "self-align" == v) && (t.c = 1), b.includes("url")) {
                        var y = b.indexOf("(");
                        if (-1 != y++) {
                            for (;'"' == b[y] || "'" == b[y] || e[b[y]]; ) y++;
                            b = b.substr(0, y) + this.getUrl(b.substr(y));
                        }
                    } else b.includes("rpx") ? b = b.replace(/[0-9.]+\s*rpx/g, function(t) {
                        return parseFloat(t) * h / 750 + "px";
                    }) : "white-space" == v && b.includes("pre") && (this.pre = t.pre = !0);
                    s += ";" + v + ":" + b;
                }
            }
            (s = s.substr(1)) && (i.style = s);
        }
    }, {
        key: "popNode",
        value: function(t) {
            if (t.pre) {
                t.pre = this.pre = void 0;
                for (var i = this.STACK.length; i--; ) this.STACK[i].pre && (this.pre = !0);
            }
            var e = this.siblings(), a = e.length, h = t.children;
            if ("head" == t.name || s.filter && 0 == s.filter(t, this)) return e.pop();
            var r = t.attrs;
            if (s.blockTags[t.name] ? t.name = "div" : s.trustTags[t.name] || (t.name = "span"), 
            "div" != t.name && "p" != t.name && "t" != t.name[0] || (a > 1 && " " == e[a - 2].text && e.splice(--a - 1, 1), 
            h.length && " " == h[h.length - 1].text && h.pop()), t.c && ("ul" == t.name || "ol" == t.name)) if ((t.attrs.style || "").includes("list-style:none")) for (var n, o = 0; n = h[o++]; ) "li" == n.name && (n.name = "div"); else if ("ul" == t.name) {
                for (var l = 1, d = this.STACK.length; d--; ) "ul" == this.STACK[d].name && l++;
                if (1 != l) for (var u = h.length; u--; ) h[u].floor = l;
            } else for (var c, f = 0, m = 1; c = h[f++]; ) "li" == c.name && (c.type = "ol", 
            c.num = function(t, i) {
                if ("a" == i) return String.fromCharCode(97 + (t - 1) % 26);
                if ("A" == i) return String.fromCharCode(65 + (t - 1) % 26);
                if ("i" == i || "I" == i) {
                    t = (t - 1) % 99 + 1;
                    var s = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ], e = ([ "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ][Math.floor(t / 10) - 1] || "") + (s[t % 10 - 1] || "");
                    return "i" == i ? e.toLowerCase() : e;
                }
                return t;
            }(m++, r.type) + ".");
            if ("table" == t.name) {
                var g = r.cellpadding, p = r.cellspacing, v = r.border;
                if (t.c && (this.bubble(), r.style = (r.style || "") + ";display:table", g || (g = 2), 
                p || (p = 2)), v && (r.style = "border:" + v + "px solid gray;" + (r.style || "")), 
                p && (r.style = "border-spacing:" + p + "px;" + (r.style || "")), (v || g || t.c) && function i(s) {
                    for (var e, a = 0; e = s[a]; a++) if ("text" != e.type) {
                        var h = e.attrs.style || "";
                        t.c && "t" == e.name[0] && (e.c = 1, h += ";display:table-" + ("th" == e.name || "td" == e.name ? "cell" : "tr" == e.name ? "row" : "row-group")), 
                        "th" == e.name || "td" == e.name ? (v && (h = "border:" + v + "px solid gray;" + h), 
                        g && (h = "padding:" + g + "px;" + h)) : i(e.children || []), h && (e.attrs.style = h);
                    }
                }(h), this.options.autoscroll) {
                    var b = Object.assign({}, t);
                    t.name = "div", t.attrs = {
                        style: "overflow:scroll"
                    }, t.children = [ b ];
                }
            }
            this.CssHandler.pop && this.CssHandler.pop(t), "div" != t.name || Object.keys(r).length || 1 != h.length || "div" != h[0].name || (e[a - 1] = h[0]);
        }
    }, {
        key: "bubble",
        value: function() {
            for (var t, i = this.STACK.length; t = this.STACK[--i]; ) {
                if (s.richOnlyTags[t.name]) return "table" != t.name || Object.hasOwnProperty.call(t, "c") || (t.c = 1), 
                !1;
                t.c = 1;
            }
            return !0;
        }
    }, {
        key: "decode",
        value: function(t, i) {
            for (var e, a, h = -1; -1 != (h = t.indexOf("&", h + 1)) && -1 != (e = t.indexOf(";", h + 2)); ) "#" == t[h + 1] ? (a = parseInt(("x" == t[h + 2] ? "0" : "") + t.substring(h + 2, e)), 
            isNaN(a) || (t = t.substr(0, h) + String.fromCharCode(a) + t.substr(e + 1))) : (a = t.substring(h + 1, e), 
            (s.entities[a] || a == i) && (t = t.substr(0, h) + (s.entities[a] || "&") + t.substr(e + 1)));
            return t;
        }
    }, {
        key: "getUrl",
        value: function(t) {
            return "/" == t[0] ? "/" == t[1] ? t = this.options.prot + ":" + t : this.domain && (t = this.domain + t) : this.domain && 0 != t.indexOf("data:") && !t.includes("://") && (t = this.domain + "/" + t), 
            t;
        }
    }, {
        key: "isClose",
        value: function() {
            return ">" == this.data[this.i] || "/" == this.data[this.i] && ">" == this.data[this.i + 1];
        }
    }, {
        key: "section",
        value: function() {
            return this.data.substring(this.start, this.i);
        }
    }, {
        key: "parent",
        value: function() {
            return this.STACK[this.STACK.length - 1];
        }
    }, {
        key: "siblings",
        value: function() {
            return this.STACK.length ? this.parent().children : this.DOM;
        }
    }, {
        key: "Text",
        value: function(t) {
            if ("<" == t) {
                var i = this.data[this.i + 1], s = function(t) {
                    return t >= "a" && t <= "z" || t >= "A" && t <= "Z";
                };
                s(i) ? (this.setText(), this.start = this.i + 1, this.state = this.TagName) : "/" == i ? (this.setText(), 
                s(this.data[++this.i + 1]) ? (this.start = this.i + 1, this.state = this.EndTag) : this.Comment()) : "!" == i && (this.setText(), 
                this.Comment());
            }
        }
    }, {
        key: "Comment",
        value: function() {
            var t;
            t = "--" == this.data.substring(this.i + 2, this.i + 4) ? "--\x3e" : "[CDATA[" == this.data.substring(this.i + 2, this.i + 9) ? "]]>" : ">", 
            -1 == (this.i = this.data.indexOf(t, this.i + 2)) ? this.i = this.data.length : this.i += t.length - 1, 
            this.start = this.i + 1, this.state = this.Text;
        }
    }, {
        key: "TagName",
        value: function(t) {
            if (e[t]) {
                for (this.tagName = this.section(); e[this.data[this.i]]; ) this.i++;
                this.isClose() ? this.setNode() : (this.start = this.i, this.state = this.AttrName);
            } else this.isClose() && (this.tagName = this.section(), this.setNode());
        }
    }, {
        key: "AttrName",
        value: function(t) {
            var i = e[t];
            if (i && (this.attrName = this.section(), t = this.data[this.i]), "=" == t) {
                for (i || (this.attrName = this.section()); e[this.data[++this.i]]; ) ;
                this.start = this.i--, this.state = this.AttrValue;
            } else i ? this.setAttr() : this.isClose() && (this.attrName = this.section(), this.setAttr());
        }
    }, {
        key: "AttrValue",
        value: function(t) {
            if ('"' == t || "'" == t) {
                if (this.start++, -1 == (this.i = this.data.indexOf(t, this.i + 1))) return this.i = this.data.length;
                this.attrVal = this.section(), this.i++;
            } else {
                for (;!e[this.data[this.i]] && !this.isClose(); this.i++) ;
                this.attrVal = this.section();
            }
            this.setAttr();
        }
    }, {
        key: "EndTag",
        value: function(t) {
            if (e[t] || ">" == t || "/" == t) {
                for (var i = this.section().toLowerCase(), s = this.STACK.length; s-- && this.STACK[s].name != i; ) ;
                if (-1 != s) {
                    for (var a; (a = this.STACK.pop()).name != i; ) ;
                    this.popNode(a);
                } else "p" != i && "br" != i || this.siblings().push({
                    name: i,
                    attrs: {}
                });
                this.i = this.data.indexOf(">", this.i), this.start = this.i + 1, -1 == this.i ? this.i = this.data.length : this.state = this.Text;
            }
        }
    } ]), r;
}();

module.exports = r;