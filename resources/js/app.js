const countdown = document.getElementById('countdown')
const currentYear = new Date().getFullYear()
const goal = new Date("Dec 25, " + currentYear + " 18:00:00").getTime()
const loading = document.getElementById('loading')
const dateText = document.getElementById('dateText')
dateText.innerHTML = `Aftel datum is December 25, ${currentYear} 18:00:00`

let lastDays = -1
let lastHours = -1
let lastMinutes = -1
let lastSeconds = -1

const interval = setInterval(() => {
    const now = new Date().getTime()
    const distance = goal - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (lastDays !== days) {
        countdown.children[0].innerHTML = `${days}<span class="text-2xl">Days</span>`
        lastDays = days
    }
    if (lastHours !== hours) {
        countdown.children[1].innerHTML = `${hours}<span class="text-2xl">Hours</span>`
        lastHours = hours
    }
    if (lastMinutes !== minutes) {
        countdown.children[2].innerHTML = `${minutes}<span class="text-2xl">Minutes</span>`
        lastMinutes = minutes
    }
    if (lastSeconds !== seconds) {
        countdown.children[3].innerHTML = `${seconds}<span class="text-2xl">Seconds</span>`
        lastSeconds = seconds
    }

    if (loading.style.display !== 'none') {
        loading.style.display = 'none'
    }
}, 1000)
