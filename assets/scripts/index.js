function showId(id) {
    document.getElementById(id).style.display='initial';
}

function hideId(id) {
    document.getElementById(id).style.display='none';
}

function showSpoiler() {
    hideId('show-spoiler');
    showId('spoiler');
    showId('hide-spoiler');
}

function hideSpoiler() {
    showId('show-spoiler');
    hideId('spoiler');
    hideId('hide-spoiler');
}
