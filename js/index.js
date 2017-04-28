function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}

$('#changeColorButton').click(function() {
    var r = getRandomNumber(0, 250);
    var g = getRandomNumber(0, 250);
    var b = getRandomNumber(0, 250);
    color = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(color);

    $('#changeMyColor').css('background-color', color)
    $('#changeMyColor').css('border-color', color)
});

$('#favoriteGame').click(function() {
    if ($('#favoriteGame').html() !== 'Just kidding, click again') {
        $('#me').css('background-image', 'url(img/2k14.jpg)')
        $('#meHeader').html('🔥🔥 NBA 2K14 baybee 🔥🔥')
        $('#meDescription').html('Lebron James everyone')
        $('#favoriteGame').html('Just kidding, click again')
    } else {
        $('#me').css('background-image', 'url(img/zelda.jpg)')
        $('#meHeader').html('Zelda: Ocarina of Time')
        $('#meDescription').html('Best game ever')
        $('#favoriteGame').html('Not kidding')
    }
});