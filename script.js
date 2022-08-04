const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const msecondElement = document.querySelector('.msecond')

const startButton = document.querySelector('.start')
const lapButton = document.querySelector('.lap')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const clearButton = document.querySelector('.clear')

let minute = 00,
    second = 00,
    msecond = 00,
    interval

    const results = document.querySelector('.results')

startButton.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

lapButton.addEventListener("click", () => {
    const block = document.createElement('div')
    block.innerText =  minute + ':' + second + ':' + msecond
    results.appendChild(block)
})

pauseButton.addEventListener("click", () => {
    clearInterval(interval)
})

stopButton.addEventListener("click", () => {
    clearInterval(interval)
    clearFields()
})

clearButton.addEventListener("click", () => {
    clearChildren(results)
})

function startTimer () {
    msecond++

    // mseconds
    if (msecond < 9) {
        msecondElement.innerText = "0" + msecond
    }
    if (msecond > 9) {
        msecondElement.innerText = msecond
    }
    if (msecond > 99) {
        second++
        secondElement.innerText = "0" + second
        msecond = 0
        msecondElement.innerText = "0" + msecond
    }

    // second
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }

    // minutes
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (minute > 59) {
        clearInterval(interval)
        clearFields()
    }

}

function clearFields () {
    minute = 00
    second = 00
    msecond = 00
    interval
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    msecondElement.textContent = "00"
}

function clearChildren(node) {
    while (node.lastChild)
        node.removeChild(node.lastChild);
}