function t(t) {
    var e = [], a = [];
    if (3 === (t = t.replace(/#/, "")).length) {
        for (var o = [], s = 0; s < 3; s++) o.push(t.charAt(s) + t.charAt(s));
        t = o.join("");
    }
    for (var r = 0; r < 3; r++) e[r] = "0x" + t.substr(2 * r, 2), a.push(parseInt(Number(e[r])));
    return a.join(",");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    properties: {
        status: {
            type: String,
            value: "hide",
            observer: function(t) {
                if ("show" === t) {
                    getApp().globalData || Object.assign(getApp(), {
                        globalData: {}
                    });
                    var e = getApp().globalData, a = (e._zIndex || 1e3) + 1;
                    e._zIndex = a, this.setData({
                        zIndex: a
                    });
                }
            }
        },
        opacity: {
            type: [ String, Number ],
            value: .6
        },
        backgroundColor: {
            type: String,
            value: "#000000"
        },
        locked: {
            type: [ String ],
            value: "hide"
        },
        contentAlign: {
            type: String,
            value: "tl"
        },
        __positionStyle: {
            type: String,
            value: "top:0; left:0"
        }
    },
    data: {
        zIndex: 1e3
    },
    methods: {
        toggle: function(t) {
            var e = this.data.status;
            "boolean" != typeof t && (t = "show" !== e), t ? this.show() : this.hide();
        },
        show: function() {
            this.setData({
                status: "show"
            });
        },
        hide: function() {
            this.setData({
                status: "hide"
            });
        },
        omMaskTap: function(t) {
            var e = this.data, a = t.detail, o = {};
            e.locked && "true" !== e.locked && (this.setData({
                status: "hide"
            }), this.triggerEvent("masktap", a, o));
        }
    },
    attached: function() {
        var e = this.data;
        this.setData({
            backgroundColor: t(e.backgroundColor)
        });
        var a = void 0;
        switch (e.contentAlign) {
          case "tl":
            a = "top:0; left:0";
            break;

          case "tr":
            a = "top:0; right:0";
            break;

          case "bl":
            a = "bottom:0; left:0";
            break;

          case "br":
            a = "bottom:0; right:0";
            break;

          case "cc":
            a = "top: 50%; left: 50%; transform: translate(-50%, -50%);";
        }
        this.setData({
            __positionStyle: a
        });
    }
});