// src/tigris.ts
"use strict";
var sprintf_1 = require('sprintf');
exports.sprintf = sprintf_1.sprintf;
function uuid() {
    // create universally unique identifier
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4())
        .toLowerCase();
}
exports.uuid = uuid;
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function randFloatBtwn(lowVal, highVal) {
    return Math.random() * (highVal - lowVal) + lowVal;
}
exports.randFloatBtwn = randFloatBtwn;
function randIntBtwn(lowVal, highVal) {
    return Math.round(randFloatBtwn(lowVal, highVal));
}
exports.randIntBtwn = randIntBtwn;
function randFromSet(set) {
    return set[randIntBtwn(0, set.length - 1)];
}
exports.randFromSet = randFromSet;
;
function duration(startDate, endDate, rounding) {
    return endDate.getTime() - startDate.getTime();
}
exports.duration = duration;
function durationInHours(startDate, endDate) {
    var duration = (endDate.getTime() - startDate.getTime()) / 3600000;
    return duration;
}
exports.durationInHours = durationInHours;
;
function newDate() {
    // round to the nearest minute
    return new Date(round(Date.now(), 60000));
}
exports.newDate = newDate;
function round(number, rounding) {
    rounding = rounding || 1;
    return Math.round(number / rounding) * rounding;
}
exports.round = round;
