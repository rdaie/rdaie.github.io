const quotes = [
    "Shadows whisper secrets.",
    "Silence echoes madness.",
    "Eyes in the darkness watch.",
    "Beware the empty mirror.",
    "Time weeps for lost souls.",
    "Whispers carry the curse.",
    "In dreams, reality crumbles.",
    "The void beckons.",
    "Tread softly on forgotten ground.",
    "Stars hide their fears.",
    "Lost souls haunt the night.",
    "The dead dance in moonlight.",
    "Beneath the surface lies chaos.",
    "The mind is a labyrinth.",
    "Echoes of the past linger.",
    "Shattered mirrors reflect despair.",
    "Whispers fade, secrets remain.",
    "The puppeteer pulls unseen strings.",
    "Reality fractures, truth shatters.",
    "Flickering lights, restless spirits.",
    "Beyond the veil, darkness waits.",
    "Whispers in the wind carry death.",
    "The moon weeps blood.",
    "In the shadows, nightmares breed.",
    "Lost in the labyrinth of time.",
    "Drowning in a sea of forgotten memories.",
    "Footsteps echo in the void.",
    "Minds unravel, sanity slips.",
    "Beware the mirror's reflection.",
    "The clock ticks, counting down.",
    "The walls have eyes.",
    "Chaos sleeps within order.",
    "Whispers of the forgotten haunt the living.",
    "The void stares back.",
    "Eternity hides in the darkness.",
    "The night consumes all light.",
    "Shadows dance with malevolence.",
    "Words hold the power of damnation.",
    "In the depths, nightmares awaken.",
    "Fragments of reality scatter.",
    "Fear feeds the darkness.",
    "The pen writes horrors untold.",
    "The soul weaves its own demise.",
    "Whispers of sorrow echo through time.",
    "In the silence, madness breeds.",
    "The dead seek vengeance.",
    "Lost in the labyrinth of the mind.",
    "Shattered dreams pave the path to despair.",
    "The puppet master pulls the strings of fate.",
    "Eyes reflect the void.",
    "Whispers crawl through the darkness.",
    "The night breathes a chilling lullaby.",
    "Secrets slumber within forgotten tombs.",
    "Eyes reflect the void of despair.",
    "In the depths, nightmares take flight.",
    "Time devours all things.",
    "The veil between worlds grows thin.",
    "Shadows dance with spectral grace.",
    "Voices echo from the forgotten past.",
    "In the mirror, a sinister reflection.",
    "The mind is a treacherous maze.",
    "The stars align, revealing horrors untold.",
    "Ghosts linger, tethered to the living.",
    "A melody of darkness fills the air.",
    "The whispers speak of ancient curses.",
    "Moonlight illuminates the path to madness.",
    "Beneath the surface, chaos awakens.",
    "Shattered memories, shards of the soul.",
    "In dreams, reality unravels.",
    "The fog conceals spectral apparitions.",
    "Whispers of the wind carry tales of woe.",
    "Time stands still, trapped in eternal night.",
    "The spiral staircase descends into oblivion.",
    "Shadows twist, contorting reality.",
    "The forgotten haunt the corridors of the mind.",
    "Beware the echoes of the forgotten.",
    "Visions of terror plague the mind's eye.",
    "In the void, whispers become screams.",
    "The puppet strings tangle, chaos ensues.",
    "The blood moon casts a crimson spell.",
    "Within the darkness, secrets lie dormant.",
    "Lost in the web of deceit.",
    "Whispers of the moon guide the lost.",
    "Eyes peer through the cracks of reality.",
    "The melody of despair echoes through time.",
    "Fragments of the past linger in shadows.",
    "The night sky weeps tears of sorrow.",
    "In the depths, the abyss stares back.",
    "Shadows embrace, entwined in darkness.",
    "The symphony of souls resonates in the night.",
    "The clock ticks, marking the passage of dread.",
    "Within the asylum of the mind, madness reigns.",
    "The threads of fate are spun with malevolence.",
    "Whispers of the heart lead to damnation.",
    "The moon's reflection reveals hidden truths.",
    "Echoes of forgotten whispers haunt the living.",
    "Through the cracked mirror, reality fractures.",
    "The forgotten cemetery breathes with ancient secrets.",
    "In the silence, the darkness listens.",
    "Lost in the labyrinth of nightmares.",
    "Shattered illusions, shattered minds.",
    "The pen drips with ink, stained with darkness."
  ];
  
  function makeRandomCharacterBlink() {
      const logoElement = document.querySelector('.logo');
      const characters = Array.from(logoElement.textContent);
  
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];
  
      const modifiedText = characters.map((character, index) => {
          if (index === randomIndex) {
              return `<span class="blinking">${randomCharacter}</span>`;
          }
          return character;
      }).join('');
  
      logoElement.innerHTML = modifiedText;
  }
  
  function generateRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quoteElement = document.getElementById('quote');
      quoteElement.textContent = quotes[randomIndex];
  }
  
  window.addEventListener('load', () => {
      const canvas = document.getElementById('starfield');
      const ctx = canvas.getContext('2d');
      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
  
      window.addEventListener('resize', () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          createStarfield();
      });
  
      function createStar() {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const radius = Math.random() * 1.5;
  
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2, false);
          ctx.fillStyle = '#fff';
          ctx.fill();
      }
  
      function createStarfield() {
          ctx.clearRect(0, 0, width, height);
          for (let i = 0; i < 100; i++) {
              createStar();
          }
      }
  
      createStarfield();
      generateRandomQuote();
      makeRandomCharacterBlink();
  });