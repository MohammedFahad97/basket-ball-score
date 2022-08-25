let homeScoreBtnOne = document.getElementById("home-screen-btn-1")
let homeScoreBtnThree = document.getElementById("home-screen-btn-3")
let homeScorenBtnTwo = document.getElementById("home-screen-btn-2")
let homeStoreEl = document.getElementById("home-screen")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
let guestScoreBtnOne = document.getElementById("guest-screen-btn-1")
let guestStoreEl = document.getElementById("guest-screen")
let guestScore = 0
function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
let guestScoreBtnTwo = document.getElementById("guest-screen-btn-2")

function increaseGuestScoreTwo(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
let guestScoreBtnThree = document.getElementById("guest-screen-btn-3")

function increaseGuestScoreThree(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}





