$('#spotifySearchForm').submit(function(e) {
    e.preventDefault();

    var spotifySearch = $('#spotifySearch');
    var spotifyPlayer = $('#spotifyPlayer');
    var searchValue = spotifySearch.val();

    var queryString = $.param({ q: searchValue });
    var url = 'https://api.spotify.com/v1/search?' + queryString + '&type=track&limit=5';

    var query = $.ajax({ url: url });
    query.then(function(spotifyResponse) {
        song = spotifyResponse.tracks.items[0].uri;

        var queryString = $.param({ uri: song });

        var player = '<iframe src="https://embed.spotify.com/?' + queryString + '" width="100%" height="380" frameborder="0" allowtransparency="true"></iframe>'
        spotifyPlayer.html(player);

        listSearchResults(spotifyResponse.tracks.items);
    });
})

function listSearchResults(tracks) {
    var searchResults = $('#searchResults');
    searchResults.html('<div class="searchResult"><b>Not your song? Try one of these<b></div>');

    tracks.forEach(function(track) {
        artist = track.artists[0].name;
        name = track.name;
        searchResults.append('<div class="searchResult">' + artist + ' - ' + name + '</div>')
    });
}