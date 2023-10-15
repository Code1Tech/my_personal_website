/*function start() {
    $(".overlay").fadeOut(1000);
    $(".main").fadeIn(1230);
    // play music
    var songName = "";

    var musicList = ['dreamspace.mp3', 'internetcrush.mp3', 'incoming.mp3', 'metamorphosis.mp3'];
    var song = musicList[Math.floor(Math.random() * musicList.length)];
    songName = song;

    var audio = new Audio(song);
    audio.preload = true;
    audio.play();

    var volume_notif = $(".notification");
    volume_notif.hide();
    var notif_text = volume_notif.find("span");
    function changeVolume(volume) {
        // change the volume of the audio
        audio.volume += volume;

        // set volume notification text to the volume percentage
        notif_text.text(Math.round(audio.volume * 100) + "%");
        // check if already visible
        if (!volume_notif.is(":visible")) {
            // if not visible, show it
            volume_notif.fadeIn(300);
        }
        // check if another volume change is already in the queue
        if (volume_notif.data("timeout")) {
            // if so, clear it
            clearTimeout(volume_notif.data("timeout"));
        }
        // set a timeout to hide the volume notification
        volume_notif.data("timeout", setTimeout(function() {
            // hide the volume notification
            volume_notif.fadeOut(300);
        }
        , 1000));
    }

    document.addEventListener('keydown', function(e) {
        // right arrow
        if (e.keyCode == 39) {
            // skip to next song
            var i = musicList.indexOf(songName);
            if (i == musicList.length - 1) {
                i = 0;
            } else {
                i++;
            }
            songName = musicList[i];
            audio.src = songName;
            audio.play();
        }
        // left arrow
        if (e.keyCode == 37) {
            // skip to previous song
            var i = musicList.indexOf(songName);
            if (i == 0) {
                i = musicList.length - 1;
            } else {
                i--;
            }
            songName = musicList[i];
            audio.src = songName;
            audio.play();
        }
        // up arrow
        if (e.keyCode == 38) {
            // increase volume
            changeVolume(0.1);
        }
        // down arrow
        if (e.keyCode == 40) {
            // decrease volume
            changeVolume(-0.1);
        }
        // space
        if (e.keyCode == 32) {
            // check if audio is paused
            if (audio.paused) {
                audio.play();
            }
            // check if audio is playing
            else if (!audio.paused) {
                audio.pause();
            }
        }
    });

    // audio time update
    audio.addEventListener('timeupdate', function() {
        var currenttime = audio.currentTime;
        var minutes = Math.floor(currenttime / 60);
        var seconds = Math.floor(currenttime - minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var duration = audio.duration;
        var minutesD = Math.floor(duration / 60);
        var secondsD = Math.floor(duration - minutesD * 60);
        if (secondsD < 10) {
            secondsD = "0" + secondsD;
        }

        var time = minutes + ":" + seconds + " / " + minutesD + ":" + secondsD;
        document.title = songName + " - " + time;
    });
    // ended event
    audio.addEventListener('ended', function() {
        // get the next song in the list and play it
        var i = musicList.indexOf(songName);
        if (i == musicList.length - 1) {
            i = 0;
        } else {
            i++;
        }
        songName = musicList[i];
        audio.src = songName;
        audio.play();
    });
    // pause event
    audio.addEventListener('pause', function() {
        document.title = "paused - " + songName;
    });

    // remove the onclick event from the .overlay div
    $(".overlay").attr("onclick", "");

    // change the #copyright-text to the current year
    var date = new Date();
    var year = date.getFullYear();
    year = year.toString();
    var text = "built with ❤️ by focat - " + year + " - original website by me and a friend: <a href='https://kalium.casualdev.repl.co'>Kalium</a>";
    document.getElementById("copyright-text").innerHTML = text;
}*/

// anti-select
document.onselectstart = function() {
    return false;
}
// anti context menu
document.oncontextmenu = function() {
    return false;
}
// anti inspect element keys
document.onkeydown = function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

/*
const pfp = document.getElementById('pfp');

pfp.addEventListener('mousemove', (e) => {
    const boundingRect = pfp.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;
    const centerX = boundingRect.width / 2;
    const centerY = boundingRect.height / 2;
    const percentX = (offsetX - centerX) / centerX;
    const percentY = (offsetY - centerY) / centerY;

    pfp.style.setProperty('--rotate-x', percentY * 100);
    pfp.style.setProperty('--rotate-y', percentX * 100);
});

pfp.addEventListener('mouseleave', () => {
    pfp.style.setProperty('--rotate-x', 0);
    pfp.style.setProperty('--rotate-y', 0);
});
*/