$(".visibility2").hide();
$(".visibility3").hide();
$(".visibility4").hide();
$(".visibility5").hide();
$(".visibility6").hide();
$(".visibility7").hide();
$(".visibility8").hide();

$('.animals').click(function () {
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility').toggle(true);
});

$('.nature').click(function () {
    $(".visibility").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility2').toggle(true);
});

$('.space').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility3').toggle(true);
});

$('.places').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility4').toggle(true);
});

$('.travel').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility5').toggle(true);
});

$('.music').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility7").hide();
    $(".visibility8").hide();
    $('.visibility6').toggle(true);
});

$('.architecture').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility8").hide();
    $('.visibility7').toggle(true);
});

$('.sports').click(function () {
    $(".visibility").hide();
    $(".visibility2").hide();
    $(".visibility3").hide();
    $(".visibility4").hide();
    $(".visibility5").hide();
    $(".visibility6").hide();
    $(".visibility7").hide();
    $('.visibility8').toggle(true);
});


$('.myimage').click(function () {
    let src = $(this).data('image');
    $('#modal-image').attr('src', src);
    $('#image-modal').modal('show');
});

document.getElementById('data-toggle').onchange = function (e) {
    if(e.target.checked) {
        document.getElementById('bodyColor').style.background = 'rgb(44, 42, 42)';
        document.getElementById('fontColor').style.color= 'white';
        document.getElementById('fontColor2').style.color= 'white';
        document.getElementById('fontColor3').style.color= 'white';
        document.getElementById('fontColor4').style.color= 'white';
        document.getElementById('arrow1').style.color= 'white';
        document.getElementById('arrow2').style.color= 'white';
        document.getElementById('lineColor1').style.backgroundColor= 'white';
        document.getElementById('lineColor2').style.backgroundColor= 'white';

    }
    else {
        document.getElementById('bodyColor').style.background = 'rgb(247, 231, 231)';
        document.getElementById('fontColor').style.color = 'black';
        document.getElementById('fontColor2').style.color = 'black';
        document.getElementById('fontColor3').style.color= 'black';
        document.getElementById('fontColor4').style.color= 'black';
        document.getElementById('arrow1').style.color= 'black';
        document.getElementById('arrow2').style.color= 'black';
        document.getElementById('lineColor1').style.backgroundColor= 'black';
        document.getElementById('lineColor2').style.backgroundColor= 'black';
    }
}

