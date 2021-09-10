l = {
    sessionId: "680d4fc0459541e08cca7e4146aa2b35",
    phoneNumber: null,
    uid: null
}
var g = require("./md5.js"),f = require("./crypto.js");

var n = new Date().getTime().toString(), t = "", a = "", r = "34579e94698e469d971efeaa9d2d77da";
l.sessionId && (r = l.sessionId, t = l.sessionId);
var s = [ r.substring(0, 16), r.substring(16) ], o = f.enc.Utf8.parse(s[0]), c = f.enc.Utf8.parse(s[1]), i = f.enc.Utf8.parse(n), u = f.AES.encrypt(i, o, {
	iv: c,
	mode: f.mode.CBC,
	padding: f.pad.Pkcs7
}).toString(), p = g(n + s[1]);
var b = {
	// data: e,
	encrypt: u,
	sessionId: t,
	logInOrgaId: a,
	sign: p
};
return console.log("请求的参数：", b), b;