const day = document.getElementById('days')
const hour = document.getElementById('hours')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const dateI = document.querySelector('input[type="date"]');
const btn = document.getElementById('btn')
const cont = document.getElementById('container')
cont.style.display = 'none' 
const timerFunc = () => {
    const date = new Date()
    const date1 = new Date(dateI.value)
    if (dateI.value == '') {
        cont.style.display = 'none'
    } else {
        cont.style.display = 'flex'
        var diff = Math.abs(date1 - date) / (1000 * 3600 * 24);
        var days = Math.floor(diff)
        var hours = Math.floor((diff - days) * 24)
        var minutes = Math.floor(((diff - days) * 24 - hours) * 60)
        var seconds = Math.floor((((diff - days) * 24 - hours) * 60 - minutes) * 60)
        day.innerText = days
        hour.innerText = hours
        min.innerText = minutes
        sec.innerText = seconds
    }

}
const setNewDate = () => {
    console.log(dateI.value)
}
setInterval(timerFunc, 1000)


