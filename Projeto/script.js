// script.js

// Functionality for a music player

class MusicPlayer {
    constructor() {
        this.playlist = [];
        this.currentTrackIndex = 0;
        this.isPlaying = false;
    }

    addTrack(track) {
        this.playlist.push(track);
    }

    play() {
        if (this.playlist.length > 0) {
            this.isPlaying = true;
            console.log(`Playing: ${this.playlist[this.currentTrackIndex].title}`);
        } else {
            console.log('No tracks in the playlist');
        }
    }

    pause() {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log('Playback paused');
        }
    }

    next() {
        if (this.currentTrackIndex < this.playlist.length - 1) {
            this.currentTrackIndex++;
            this.play();
        } else {
            console.log('End of playlist');
        }
    }

    previous() {
        if (this.currentTrackIndex > 0) {
            this.currentTrackIndex--;
            this.play();
        } else {
            console.log('This is the first track');
        }
    }

    displayPlaylist() {
        this.playlist.forEach((track, index) => {
            console.log(`${index + 1}: ${track.title}`);
        });
    }
}

// Example usage:
const player = new MusicPlayer();
player.addTrack({ title: 'Track 1' });
player.addTrack({ title: 'Track 2' });
player.displayPlaylist();
player.play();
player.next();
player.pause();
      
