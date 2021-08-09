$('.myGallery').click(function () {
    let src = $(this).data('image');
    $('#modal-gallery').attr('src', src);
    $('#gallery-modal').modal('show');
});

$(".section1").hide();
$(".section2").hide();
$(".section3").hide();

$('.3Dcarousel').click(function () {
    $('.section1').toggle(true);
    $(".section2").hide();
    $(".section3").hide();
    $("#supportMessage").hide()
});

$('.3Dcarousel2').click(function () {
    $('.section2').toggle(true);
    $(".section1").hide();
    $(".section3").hide();
    $("#supportMessage").hide()
});

$('.galleryImages').click(function () {
    $('.section3').toggle(true);
    $(".section1").hide();
    $(".section2").hide();
});

$('.hide').click(function () {
    $(".section1").hide();
    $(".section2").hide();
    $(".section3").hide();
    $("#supportMessage").hide()
})

let i = 0;
let images = document.getElementById('images');
let arrImage = ["images/Gallery/image_1.jpg", "images/Gallery/image_2.jpg", "images/Gallery/image_3.jpg", "images/Gallery/image_4.jpg", "images/Gallery/image_5.jpg", "images/Gallery/image_6.jpg", "images/Gallery/image_7.jpg", "images/Gallery/image_8.jpg", "images/Gallery/image_9.jpg"];
function left() {
    i--;
    if (i < 0) {
        i += arrImage.length;
    }
    images.src = arrImage[i];
}

function right() {
    i++;
    if (i == arrImage.length) {
        i = 0;
    }
    images.src = arrImage[i];
}

$("#showMessage").click(function(){
    document.getElementById('supportMessage').style.display = 'block';
})
