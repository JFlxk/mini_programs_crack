function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
};

Component({
    data: {
        canIUse: !!wx.chooseMessageFile,
        placeholder: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'/>",
        inlineTags: require("./../libs/config.js").inlineTags
    },
    properties: {
        nodes: Array,
        lazyLoad: Boolean
    },
    methods: {
        play: function(t) {
            if (this.top.group && this.top.group.pause(this.top.i), this.top.videoContexts.length > 1 && this.top.data.autopause) for (var e = this.top.videoContexts.length; e--; ) this.top.videoContexts[e].id != t.currentTarget.id && this.top.videoContexts[e].pause();
        },
        imgtap: function(t) {
            var e = t.currentTarget.dataset.attrs;
            if (!e.ignore) {
                var r = !0;
                if (this.top.triggerEvent("imgtap", {
                    id: t.currentTarget.id,
                    src: e.src,
                    ignore: function() {
                        return r = !1;
                    }
                }), r) {
                    if (this.top.group) return this.top.group.preview(this.top.i, e.i);
                    var a = this.top.imgList, i = a[e.i] ? a[e.i] : (a = [ e.src ], e.src);
                    wx.previewImage({
                        current: i,
                        urls: a
                    });
                }
            }
        },
        loadImg: function(e) {
            var r = e.target.dataset.i;
            this.data.lazyLoad && !this.data.nodes[r].load && this.setData(t({}, "nodes[" + r + "].load", !0));
        },
        linkpress: function(t) {
            var e = !0, r = t.currentTarget.dataset.attrs;
            r.ignore = function() {
                return e = !1;
            }, this.top.triggerEvent("linkpress", r), e && (r["app-id"] ? wx.navigateToMiniProgram({
                appId: r["app-id"],
                path: r.path
            }) : r.href && ("#" == r.href[0] ? this.top.navigateTo({
                id: r.href.substring(1)
            }) : 0 == r.href.indexOf("http") || 0 == r.href.indexOf("//") ? wx.setClipboardData({
                data: r.href,
                success: function() {
                    return wx.showToast({
                        title: "链接已复制"
                    });
                }
            }) : wx.navigateTo({
                url: r.href,
                fail: function() {
                    wx.switchTab({
                        url: r.href
                    });
                }
            })));
        },
        error: function(r) {
            var a, i = this, o = r.target.dataset.source, s = r.target.dataset.i, n = this.data.nodes[s];
            if ("video" == o || "audio" == o) {
                var d = (n.i || 0) + 1;
                if (d < n.attrs.source.length) return this.setData(t({}, "nodes[" + s + "].i", d));
                this.top && (a = this.top.getVideoContext(r.target.id));
            } else "img" == o && (a = {
                setSrc: function(e) {
                    i.setData(t({}, "nodes[" + s + "].attrs.src", e));
                }
            });
            this.top && this.top.triggerEvent("error", e({
                source: o,
                target: r.target,
                context: a
            }, r.detail));
        },
        loadVideo: function(e) {
            var r, a = e.target.dataset.i;
            this.setData((r = {}, t(r, "nodes[" + a + "].lazyLoad", !1), t(r, "nodes[" + a + "].attrs.autoplay", !0), 
            r));
        }
    }
});