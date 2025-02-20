"use strict";
const Echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg == "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("Martin"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Martin" }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
