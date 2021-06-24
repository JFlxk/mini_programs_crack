function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t;
}

function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), i = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../npm/wepy/lib/wepy.js")), a = require("./../../api/config.js"), s = require("./../../common/js/util.js"), l = require("./../../api/index.js"), u = function(o) {
    function u() {
        var r, o, n, i;
        e(this, u);
        for (var l = arguments.length, c = Array(l), p = 0; p < l; p++) c[p] = arguments[p];
        return o = n = t(this, (r = u.__proto__ || Object.getPrototypeOf(u)).call.apply(r, [ this ].concat(c))), 
        n.props = {
            textId: {
                type: [ String, Number ]
            }
        }, n.data = {
            selectBtn_List: [ "内容有误", "排版错乱", "字段缺失", "标题出错", "作者出错", "其他" ],
            is_remarkImg: !1,
            error_tempFilePaths: "",
            selectBtn_index: 0,
            textarea_value: "",
            is_errorShow: !1
        }, n.methods = {
            fn: function() {},
            toggle: function() {
                this.is_errorShow = !this.is_errorShow;
            },
            textarea_input: function(e) {
                console.log("输入的反馈信息", e.detail.value), this.textarea_value = e.detail.value;
            },
            tap_selectBtn: function(e) {
                this.selectBtn_index = e;
            },
            sub_error: function() {
                if (!this.is_remarkImg) return (0, s.alertText)("请上传纠错图片~"), !1;
                this.postResourceErrorMark();
            },
            add_screenshot: function() {
                var e = this;
                wx.chooseImage({
                    count: 1,
                    sizeType: [ "original" ],
                    sourceType: [ "album" ],
                    success: function(t) {
                        e.error_tempFilePaths = t.tempFilePaths[0], wx.uploadFile({
                            url: a.baseUrl + "/v1/resource/uploadFile",
                            filePath: e.error_tempFilePaths,
                            name: "imageFile",
                            formData: {
                                sessionId: (0, s.getUserInfo)("sessionId")
                            },
                            success: function(t) {
                                (0, s.hideLoading)();
                                var r = JSON.parse(t.data);
                                (0, s.log)("---上传成功---：", t), 2e5 == r.code ? (e.is_remarkImg = !0, e.error_tempFilePaths = r.data.replace("http", "https"), 
                                console.log("上传成功返回的图片路径that.error_tempFilePaths", e.error_tempFilePaths), e.$apply()) : (0, 
                                s.log)("上传失败：", r);
                            },
                            fail: function(e) {
                                (0, s.hideLoading)(), (0, s.log)("上传出错：", e);
                            }
                        }).onProgressUpdate(function(e) {
                            console.log("上传进度", e.progress), (0, s.showLoading)("已上传" + e.progress + "%");
                        }), e.$apply();
                    }
                });
            }
        }, i = o, t(n, i);
    }
    return r(u, i.default.component), n(u, [ {
        key: "postResourceErrorMark",
        value: function() {
            var e = this, t = {
                errorMark: this.selectBtn_List[this.selectBtn_index],
                filePath: this.error_tempFilePaths,
                remark: this.textarea_value,
                resId: this.textId
            }, r = (0, s.getPublicParam)(t);
            (0, l.PostResourceErrorMark)(r).then(function(t) {
                2e5 == t.code ? ((0, s.log)("提交资源纠错成功：", t), (0, s.alertText)("提交成功"), e.is_errorShow = !1, 
                e.error_tempFilePaths = "", e.selectBtn_index = 0, e.textarea_value = "", e.is_remarkImg = !1, 
                e.$apply()) : (e.is_errorShow = !1, (0, s.log)("提交资源纠错失败：", t), (0, s.alertText)(t.message));
            }).catch(function(t) {
                console.log(t), e.is_errorShow = !1, (0, s.alertText)("获取数据异常");
            });
        }
    } ]), u;
}();

exports.default = u;