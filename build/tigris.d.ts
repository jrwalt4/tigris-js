export { sprintf } from 'sprintf';
export declare function uuid(): string;
export declare function randFloatBtwn(lowVal: number, highVal: number): number;
export declare function randIntBtwn(lowVal: number, highVal: number): number;
export declare function randFromSet<T>(set: T[]): T;
export declare function duration(startDate: Date, endDate: Date, rounding?: number): number;
export declare function durationInHours(startDate: Date, endDate: Date): number;
export declare function newDate(): Date;
export declare function round(number: number, rounding?: number): number;
