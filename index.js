$('.menu-bars').click(function() {
    $('nav').slideToggle('slow')
})

$('.article-grid').mouseover(function() {
    $(this).find('h3').css('color', '#5EB6CC')
})

$('.article-grid').mouseleave(function() {
    $(this).find('h3').css('color', '#2C2E2C')
})

$('.more-grid div').mouseover(function() {
    $(this).find('h3').css('color', '#5EB6CC')
})

$('.more-grid div').mouseleave(function() {
    $(this).find('h3').css('color', '#2C2E2C')
})