/* Dates */

var date = new Date()
console.log(date)                    //  Sun May 29 2022 20:45:17 GMT+0530 (India Standard Time)
console.log(date.toString())         //  Sun May 29 2022 20:45:17 GMT+0530 (India Standard Time)
console.log(date.toDateString())     //  Sun May 29 2022
console.log(date.toTimeString())     //  20:45:17 GMT+0530 (India Standard Time)
console.log(date.toUTCString())      //  Sun, 29 May 2022 15:18:56 GMT
console.log(date.getDate())          //  29


var d2 = new Date(2017, 1, 2)
console.log(d2)                      //  Thu Feb 02 2017 00:00:00 GMT+0530 (India Standard Time)


var d2 = new Date(2017, 1, 4, 22, 43, 44)
console.log(d2)                      //  Sun Feb 05 2017 18:43:44 GMT+0530 (India Standard Time)