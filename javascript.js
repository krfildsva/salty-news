
//Audio function in genshin-sountrack.html
const audio = document.getElementById("myAudio");

function playSound() {
    audio.play();
  }
function pauseAudio() {
    audio.pause();
  }

audio.addEventListener('timeupdate', function() {
    const currentTime = document.getElementById('currentTime');
    
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
  
    currentTime.textContent = `${minutes}:${seconds}`;
  });

//Tabs function in movies-article2.html
  const tabs = document.querySelectorAll('.nav-link');
  const tabContent = document.querySelectorAll('.tab-pane');

  tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          tabs.forEach((t) => t.classList.remove('active'));
          tab.classList.add('active');
          tabContent.forEach((content) => content.classList.remove('active'));
          tabContent[index].classList.add('active');
      });
  });


