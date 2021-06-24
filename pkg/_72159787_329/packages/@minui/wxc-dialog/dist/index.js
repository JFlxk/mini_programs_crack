Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        title: {
            type: String
        },
        titleColor: {
            type: String,
            value: "#000000"
        },
        content: {
            type: String
        },
        contentColor: {
            type: String,
            value: "#888888"
        },
        confirmText: {
            type: String
        },
        confirmColor: {
            type: String,
            value: "#ff5777"
        },
        cancelText: {
            type: String
        },
        cancelColor: {
            type: String,
            value: "#666666"
        },
        image: {
            type: String
        }
    },
    data: {},
    methods: {
        show: function() {
            var t = this.selectComponent(".popup");
            t && t.show();
        },
        hide: function() {
            var t = this.selectComponent(".popup");
            t && t.hide();
        },
        onContentTap: function() {},
        cancelCallback: function() {
            this.triggerEvent("cancel");
        },
        confirmCallback: function() {
            this.triggerEvent("confirm");
        }
    }
});