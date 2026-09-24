(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Show the placeholder if the real photo hasn't been added yet
  var photoFrame = document.getElementById('photoFrame');
  var photoImg = document.getElementById('photoImg');
  photoImg.addEventListener('error', function () {
    photoFrame.classList.add('no-photo');
  });

  // Heart button: little burst of hearts on click
  var heartBtn = document.getElementById('heartBtn');
  var burst = document.getElementById('burst');

  heartBtn.addEventListener('click', function () {
    if (prefersReducedMotion) {
      heartBtn.classList.add('sent');
      setTimeout(function () { heartBtn.classList.remove('sent'); }, 500);
      return;
    }
    for (var i = 0; i < 8; i++) {
      var particle = document.createElement('span');
      particle.className = 'heart-particle';
      particle.textContent = Math.random() > 0.5 ? '♥' : '✦';
      var angle = Math.random() * Math.PI * 2;
      var distance = 40 + Math.random() * 40;
      particle.style.setProperty('--tx', (Math.cos(angle) * distance) + 'px');
      particle.style.setProperty('--ty', (Math.sin(angle) * distance) + 'px');
      particle.style.animationDelay = (Math.random() * 0.15) + 's';
      burst.appendChild(particle);
      particle.addEventListener('animationend', function () {
        this.remove();
      });
    }
  });

  // Flip cards
  var cards = document.querySelectorAll('.flip-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('flipped');
    });
  });

  // Rotating reminder messages
  var messages = [
    "You are, without competition, the best decision my group chat has ever made.",
    "I don't say this enough: I'm really glad you're back in my life.",
    "You make Tuesdays feel like an event. No idea how.",
    "If losing touch means finding our way back like this, worth it, every time.",
    "You're the friend I'd choose again. Every single time.",
    "Thank you for being the kind of friend I can just exist around.",
    "This website exists because a text message wasn't enough."
  ];
  var lastIndex = -1;
  var reminderBtn = document.getElementById('reminderBtn');
  var reminderMessage = document.getElementById('reminderMessage');

  reminderBtn.addEventListener('click', function () {
    var index;
    do {
      index = Math.floor(Math.random() * messages.length);
    } while (index === lastIndex && messages.length > 1);
    lastIndex = index;

    reminderMessage.classList.remove('show');
    reminderMessage.textContent = messages[index];
    // Force reflow so the fade-in transition restarts each time
    void reminderMessage.offsetWidth;
    reminderMessage.classList.add('show');
    reminderBtn.textContent = 'Tap for another';
  });
})();
