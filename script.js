// musicPlayer.js

class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlists = {};
        this.currentPlaylist = [];
        this.currentIndex = 0;
        this.isShuffle = false;
        this.isRepeat = false;
        this.volume = 1;
        this.loadPreferences();
    }
    
    loadPreferences() {
        const preferences = JSON.parse(localStorage.getItem('musicPlayerPreferences')) || {};
        this.volume = preferences.volume || 1;
        this.isShuffle = preferences.isShuffle || false;
        this.isRepeat = preferences.isRepeat || false;
        this.audio.volume = this.volume;
    }
    
    savePreferences() {
        const preferences = {
            volume: this.volume,
            isShuffle: this.isShuffle,
            isRepeat: this.isRepeat
        };
        localStorage.setItem('musicPlayerPreferences', JSON.stringify(preferences));
    }
    
    loadPlaylists(folder) {
        // Logic to load playlists from the folder structure.
        // Populate this.playlists with loaded data.
    }
    
    play() {
        if (this.currentPlaylist.length > 0) {
            this.audio.src = this.currentPlaylist[this.currentIndex];
            this.audio.play();
        }
    }
    
    pause() {
        this.audio.pause();
    }
    
    next() {
        if (this.isShuffle) {
            this.currentIndex = Math.floor(Math.random() * this.currentPlaylist.length);
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.currentPlaylist.length;
        }
        this.play();
    }
    
    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.currentPlaylist.length) % this.currentPlaylist.length;
        this.play();
    }
    
    toggleShuffle() {
        this.isShuffle = !this.isShuffle;
        this.savePreferences();
    }
    
    toggleRepeat() {
        this.isRepeat = !this.isRepeat;
        this.savePreferences();
    }
    
    setVolume(volume) {
        this.volume = volume;
        this.audio.volume = this.volume;
        this.savePreferences();
    }
    
    seek(time) {
        this.audio.currentTime = time;
    }
    
    handleKeyboardShortcut(event) {
        // Implement keyboard shortcuts for play/pause, next, previous, etc.
    }
    
    search(query) {
        // Implement search functionality for current playlist.
    }
    
    sortByName() {
        this.currentPlaylist.sort();
    }
    
    sortByDuration() {
        // Sort based on the duration of the tracks.
    }
}

const player = new MusicPlayer();