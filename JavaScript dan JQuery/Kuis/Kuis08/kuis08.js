$(document).ready(function() {
    // Hide images on click
    $('#hideBtn').click(function() {
        $('img.imgCircle').hide(1000);
    });
    $('#showBtn').click(function() {
        $('img.imgCircle').show(1000);
    });

    $('#fadeInBtn').click(function() {
        $('img.imgCircle').fadeIn(1000);
    });

    $('#fadeOutBtn').click(function() {
        $('img.imgCircle').fadeOut(1000);
    });

    $('#slideUpBtn').click(function() {
        $('img.imgCircle').slideUp(1000);
    });

    $('#slideDownBtn').click(function() {
        $('img.imgCircle').slideDown(1000);
    });


    // Additional button functionality can be added here
});