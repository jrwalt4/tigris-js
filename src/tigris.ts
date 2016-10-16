// src/tigris.ts

export { sprintf } from 'sprintf'

export function uuid(): string {
    // create universally unique identifier
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4())
        .toLowerCase()
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function randFloatBtwn(lowVal:number, highVal:number):number {
    return Math.random() * (highVal - lowVal) + lowVal;
}

export function randIntBtwn(lowVal:number, highVal:number):number {
    return Math.round(randFloatBtwn(lowVal, highVal));
}

export function randFromSet<T>(set:T[]):T {
    return set[randIntBtwn(0, set.length - 1)];
};

export function duration(startDate:Date, endDate:Date, rounding?:number):number {
    return endDate.getTime() - startDate.getTime()
}

export function durationInHours(startDate:Date, endDate:Date):number {
    var duration = (endDate.getTime() - startDate.getTime()) / 3600000;
    return duration;
};

export function newDate():Date {
    // round to the nearest minute
    return new Date(round(Date.now(), 60000));
}

export function round(number:number, rounding?:number):number {
    rounding = rounding || 1;
    return Math.round(number / rounding) * rounding;
}