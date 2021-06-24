var e = {
    url: "",
    data: {},
    method: "POST",
    header: {
        "Content-Type": "application/json"
    },
    dataType: "json"
}, a = {
    duration: 6e5,
    sampleRate: 44100,
    numberOfChannels: 2,
    encodeBitRate: 32e4,
    format: "mp3"
};

module.exports = {
    recordOptions: a,
    baseUrl: "https://mpapi.ygr.iyougu.com/mpapi/ygldt",
    imgBaseUrl: "https://dps.ygr.iyougu.com/mgr/img/mp/",
    commonParams: e,
    ERR_OK: 200,
    mapKey: "AJLBZ-KQ6WD-I2X4X-HDQWZ-R4BJH-XOB4C",
    VERSION: "v6.1.5",
    AppID: "wxe0b4a0eb543e00c6",
    zIndexNum: 998
};