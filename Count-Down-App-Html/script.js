const myCounter = document.querySelectorAll('.counter-variable')

for (let i = 0; i < myCounter.length; i++) {
    const counter = myCounter[i]
    console.log(counter)
    // const startStamp = counter.dataset.start || '100' /** wecan give a default value if data is not present */
    // const startStamp = counter.dataset.start || '100'
    // console.log('DIV', startStamp, endtStamp)

    const startStamp = parseInt(counter.dataset.start, 10) //parseInt(string, radix)
    const endtStamp = parseInt(counter.dataset.end, 10)

    startCounter(counter, startStamp, endtStamp);
}

function startCounter(counterEl, startTime, endTime) {
    if (endTime > startTime) {
        console.warn('Invalid counter with endTime greater than starTime', counterEl)
        return
    }

    let counter = startTime
    counterEl.innerHTML = counter         // This is done because
    counter = counter - 1               // not to wait 1 sec to show data
    const intv = setInterval(() => {
        if (counter === endTime) {
            // counterEl.innerHTML = counter       /** showing last data then clearing interval if it is not written at top */
            clearInterval(intv)
        }
        counterEl.innerHTML = counter              
        counter--
    }, 1000)
}