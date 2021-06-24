Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        maskOptions: {
            type: Object,
            value: {}
        },
        locked: {
            type: String,
            value: "hide"
        },
        animationMode: {
            type: String,
            value: "none"
        },
        align: {
            type: String,
            value: "center"
        },
        status: {
            type: String,
            value: "hide",
            observer: function(t) {
                if ("show" !== t && "hide" !== t || this.setData({
                    maskStatus: t
                }), "show" === t) {
                    getApp().globalData || Object.assign(getApp(), {
                        globalData: {}
                    });
                    var e = getApp().globalData, s = (e._zIndex || 1e3) + 1;
                    e._zIndex = s, this.setData({
                        zIndex: s
                    });
                }
            }
        }
    },
    data: {
        maskStatus: "hide",
        zIndex: 1e3
    },
    methods: {
        toggle: function(t) {
            var e = this.data.status;
            "boolean" != typeof t && (t = "show" !== e), t ? this.show() : this.hide();
        },
        showMask: function() {
            this.setData({
                maskStatus: "show"
            });
        },
        hideMask: function() {
            this.setData({
                maskStatus: "hide"
            });
        },
        show: function() {
            var t = this;
            "none" !== this.data.animationMode ? (this.showMask(), this.setData({
                status: "fadeIn"
            }), setTimeout(function() {
                t.setData({
                    status: "show"
                });
            }, 50)) : (this.showMask(), this.setData({
                status: "show"
            }));
        },
        forceHide: function() {
            this.setData({
                status: "hide"
            }), this.hideMask();
        },
        popupTap: function() {
            "true" !== this.data.locked && (this.hide(), this.triggerEvent("popuptap", {}, {}));
        },
        hide: function() {
            var t = this;
            "none" !== this.data.animationMode ? (this.setData({
                status: "fadeOut"
            }), clearTimeout(this._timer), this._timer = setTimeout(function() {
                t.forceHide();
            }, 300)) : this.forceHide();
        },
        onContentTap: function() {}
    }
});