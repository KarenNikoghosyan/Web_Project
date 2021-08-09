$(".easy").hide();
$(".medium").hide();
$(".hard").hide();

$(".level1").click(function () {
    $(".easy").toggle(true);
    $(".medium").hide();
    $(".hard").hide();
})

$(".level2").click(function () {
    $(".medium").toggle(true);
    $(".easy").hide();
    $(".hard").hide();
})

$(".level3").click(function () {
    $(".hard").toggle(true);
    $(".easy").hide();
    $(".medium").hide();
})
$("#hide").click(function () {
    $(".easy").hide();
    $(".medium").hide();
    $(".hard").hide();
})

$('#smallSize').click(function () {
    document.getElementById('game1').style.width = '43%';
    document.getElementById('game2').style.width = '43%';
    document.getElementById('game3').style.width = '43%';
})

$('#mediumSize').click(function () {
    document.getElementById('game1').style.width = '50%';
    document.getElementById('game2').style.width = '50%';
    document.getElementById('game3').style.width = '50%';
})

$('#largeSize').click(function () {
    document.getElementById('game1').style.width = '63%';
    document.getElementById('game2').style.width = '63%';
    document.getElementById('game3').style.width = '63%';
})

let cards = [];
for (let i = 2; i <= 10; i++) {
    cards.push(`images/Cards/${i}_of_clubs.png`);
    cards.push(`images/Cards/${i}_of_diamonds.png`);
    cards.push(`images/Cards/${i}_of_hearts.png`);
    cards.push(`images/Cards/${i}_of_spades.png`);
}

let cards2 = ["ace", "jack", "king", "queen"];
for (let i = 0; i <= 3; i++) {
    cards.push(`images/Cards/${cards2[i]}_of_clubs.png`);
    cards.push(`images/Cards/${cards2[i]}_of_diamonds.png`);
    cards.push(`images/Cards/${cards2[i]}_of_hearts.png`);
    cards.push(`images/Cards/${cards2[i]}_of_spades.png`);
}

let cardsEasy = [];
for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * cards.length);
    let temp = cards;
    let removedCard = temp.splice(random, 1);
    removedCard = removedCard[0];
    cardsEasy.push(removedCard);
    cardsEasy.push(removedCard);
}

for (let i = 0; i < cardsEasy.length; i++) {
    let random = Math.floor(Math.random() * cardsEasy.length);
    let card = cardsEasy.splice(0, 1)[0];
    cardsEasy.splice(random, 0, card);
}

$("#game1 img").click(function () {
    let r = Math.floor(Math.random() * cardsEasy.length);
    $(this).attr('src', cardsEasy[r]);
})

let prev1 = '';
let prevIndex1 = 0;
let counter1 = 0;
$("#game1 img").click(function () {
    let position = $(this).index("#game1 img");
    let current = cardsEasy[position];
    $(this).attr('src', current);
    if (prev1.length == 0) {
        prev1 = current;
        prevIndex1 = position;
    }
    else {
        if (prev1 == current && prevIndex1 != position) {
            console.log(prevIndex1);
            console.log(position);
            counter1++;
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Correct.wav";
            myAudio.play();

        }
        else {
            setTimeout(function () {
                $(`#game1 img:nth-child(${position + 1}) `).attr('src', current);
            }, 100);

            setTimeout(function () {
                $(`#game1 img:nth-child(${position + 1}) `).attr('src', 'images/Cards/back.png');
                $(`#game1 img:nth-child(${prevIndex1 + 1}) `).attr('src', 'images/Cards/back.png');
            }, 200);
        }
        prev1 = '';
    }
    if (counter1 == 4) {
        clearInterval(downloadTimer);
        $("#game-modal").modal()
        var myAudio = document.createElement("audio");
        myAudio.src = "Sound/Win.wav";
        myAudio.play();
    }

})

let cardsMedium = [];
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * cards.length);
    let temp = cards;
    let removedCard = temp.splice(random, 1);
    removedCard = removedCard[0];
    cardsMedium.push(removedCard);
    cardsMedium.push(removedCard);
}

for (let i = 0; i < cardsMedium.length; i++) {
    let random = Math.floor(Math.random() * cardsMedium.length);
    let card = cardsMedium.splice(0, 1)[0];
    cardsMedium.splice(random, 0, card);
}

let prev2 = '';
let prevIndex2 = 0;
let counter2 = 0;
$("#game2 img").click(function () {
    let position = $(this).index("#game2 img");
    let current = cardsMedium[position];
    $(this).attr('src', current);
    if (prev2.length == 0) {
        prev2 = current;
        prevIndex2 = position;
    }
    else {
        if (prev2 == current && prevIndex2 != position) {
            counter2++;
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Correct.wav";
            myAudio.play();
        }
        else {

            setTimeout(function () {
                $(`#game2 img:nth-child(${position + 1}) `).attr('src', current);
            }, 100);

            setTimeout(function () {
                $(`#game2 img:nth-child(${position + 1}) `).attr('src', 'images/Cards/back.png');
                $(`#game2 img:nth-child(${prevIndex2 + 1}) `).attr('src', 'images/Cards/back.png');
            }, 200);
        }
        prev2 = '';
    }
    if (counter2 == 6) {
        clearInterval(downloadTimer2);
        $("#game-modal").modal()
        var myAudio = document.createElement("audio");
        myAudio.src = "Sound/Win.wav";
        myAudio.play();
    }
})

let cardsHard = [];
for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random() * cards.length);
    let temp = cards;
    let removedCard = temp.splice(random, 1);
    removedCard = removedCard[0];
    cardsHard.push(removedCard);
    cardsHard.push(removedCard);

}

for (let i = 0; i < cardsHard.length; i++) {
    let random = Math.floor(Math.random() * cardsHard.length);
    let card = cardsHard.splice(0, 1)[0];
    cardsHard.splice(random, 0, card);
}

let prev3 = '';
let prevIndex3 = 0;
let counter3 = 0;
$("#game3 img").click(function () {
    let position = $(this).index("#game3 img");
    let current = cardsHard[position];
    $(this).attr('src', current);
    if (prev3.length == 0) {
        prev3 = current;
        prevIndex3 = position;
    }
    else {
        if (prev3 == current && prevIndex3 != position) {
            counter3++;
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Correct.wav";
            myAudio.play();
        }
        else {
            setTimeout(function () {
                $(`#game3 img:nth-child(${position + 1}) `).attr('src', current);
            }, 100);

            setTimeout(function () {
                $(`#game3 img:nth-child(${position + 1}) `).attr('src', 'images/Cards/back.png');
                $(`#game3 img:nth-child(${prevIndex3 + 1}) `).attr('src', 'images/Cards/back.png');
            }, 250);
        }
        prev3 = '';
    }
    if (counter3 == 8) {
        clearInterval(downloadTimer3);
        $("#game-modal").modal()
        var myAudio = document.createElement("audio");
        myAudio.src = "Sound/Win.wav";
        myAudio.play();
    }

})
function reset() {
    document.location.href = "";
}

// Timer
let counterLevel = 0;
let timeleft;
let downloadTimer;
$(".level1").click(function () {
    if (counterLevel == 0) {
        counterLevel++;
    }
    else {
        document.location.href = "";
    }
    timeleft = 25;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Lose.wav";
            myAudio.play();
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
    $(".pause").click(function () {
        clearInterval(downloadTimer);
        $("#pause-modal1").modal()
    })
})

let downloadTimer2;
$(".level2").click(function () {
    if (counterLevel == 0) {
        counterLevel++;
    }
    else {
        document.location.href = "";
    }
    timeleft = 40;
    downloadTimer2 = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer2);
            document.getElementById("countdown2").innerHTML = "Finished";
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Lose.wav";
            myAudio.play();
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown2").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
    $(".pause").click(function () {
        clearInterval(downloadTimer2);
        $("#pause-modal2").modal()
    })
})

let downloadTimer3;
$(".level3").click(function () {
    if (counterLevel == 0) {
        counterLevel++;
    }
    else {
        document.location.href = "";
    }
    timeleft = 55;
    downloadTimer3 = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer3);
            document.getElementById("countdown3").innerHTML = "Finished";
            var myAudio = document.createElement("audio");
            myAudio.src = "Sound/Lose.wav";
            myAudio.play();
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown3").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
    $(".pause").click(function () {
        clearInterval(downloadTimer3);
        $("#pause-modal3").modal()
    })
})

function resume1() {
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
}

function resume2() {
    downloadTimer2 = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer2);
            document.getElementById("countdown2").innerHTML = "Finished";
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown2").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
}

function resume3() {
    downloadTimer3 = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer3);
            document.getElementById("countdown3").innerHTML = "Finished";
            $("#lose-modal").modal()
        } else {
            document.getElementById("countdown3").innerHTML = "<strong>Time: </strong>" + Math.round(timeleft) + " seconds remaining";
        }
        timeleft -= 0.1;
    }, 100);
}
