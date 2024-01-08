new Vue({
  el: '#app',
  data: {
    title: "I'll Shoot Your Family - Photography",
    searchQuery: '',
    portfolioImages: [
      { src: 'images/sk81.jpg', alt: 'Skateboarder doing a trick' },
      { src: 'images/fm.jpg', alt: 'Smiling family in a park' },
      { src: 'images/am.jpg', alt: 'Amsterdam canal with selective colour' },
      { src: 'images/jb.jpg', alt: 'Studio shoot with hair salon' },
      { src: 'images/ct.jpg', alt: 'Cinque Terre coast' },
    ],
    services: [
      { name: 'Wedding Photography', price: '$999' },
      { name: 'Family Portraits', price: '$499' },
      { name: 'Event Photography', price: '$749' }
    ],
    contact: {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    filteredPortfolio() {
      if (this.searchQuery) {
        return this.portfolioImages.filter((image) => {
          return image.alt.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }
      return this.portfolioImages;
    }
  },

});

document.addEventListener('DOMContentLoaded', function() {
  var backgroundMusic = document.getElementById('background-music');
  backgroundMusic.volume = 0.2; // Set the volume to 20%
});

function toggleMusic() {
  var music = document.getElementById('background-music');
  if (music.paused) {
    music.play();
    document.getElementById('play-music').textContent = 'Pause Music';
  } else {
    music.pause();
    document.getElementById('play-music').textContent = 'Play Music';
  }
}
