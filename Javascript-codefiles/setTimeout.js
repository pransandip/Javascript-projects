/* setTimeout and setInterval */

// setTimeout

var timeoutID = setTimeout(bye, 4000)    /* timeoutID = 1 */

console.log("Hello Sandy")

// clearTimeout(timeoutID)

function bye() {
    console.log("Bye Bye 🙋‍♂️")
}


// setInterval

var count = 0
var intervalID = setInterval(counter, 1000)  /* intervalID = 2 */

// clearInterval(intervalID)

function counter() {
    console.log(++count)
}

