function t(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
}

function n(n) {
    return "function" == typeof n.readFloatLE && "function" == typeof n.slice && t(n.slice(0, 0));
}

module.exports = function(o) {
    return null != o && (t(o) || n(o) || !!o._isBuffer);
};