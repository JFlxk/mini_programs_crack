var e = require("./config.js"), a = require("./../common/js/util.js");

module.exports = {
    request: function(n) {
        var t = Object.assign({}, e.commonParams, n), o = t.url, i = t.data, r = t.method, s = t.header, u = t.dataType;
        return new Promise(function(n, t) {
            wx.request({
                url: e.baseUrl + o,
                data: i,
                method: r,
                header: s,
                dataType: u,
                success: function(e) {
                    if (e && 200 == e.statusCode && e.data) {
                        if ("800001" == e.data.code) {
                            if ((0, a.getLogining)()) return;
                            return (0, a.setLogining)(!0), wx.navigateTo({
                                url: "/pages/login/login"
                            });
                        }
                        n(e.data);
                    } else console.log(e), t(e);
                },
                fail: function(e) {
                    (0, a.alert)("请求超时", "", "./../common/images/warning.png"), (0, a.hideLoading)();
                }
            });
        });
    }
};