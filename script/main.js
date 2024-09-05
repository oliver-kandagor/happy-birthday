// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        dataArr = Object.keys(data);
        dataArr.map(customData => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                  .querySelector(`[data-node-name*="${customData}"]`)
                  .setAttribute("src", data[customData]);
            } else {
              document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
            }
          }

          // Check if the iteration is over
          // Run amimation if so
          if (dataArr.length === dataArr.indexOf(customData) + 1) {
            animationTimeline();
          }

        });
      });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
      .split("")
      .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
      .to(".container", 0.1, {
        visibility: "visible"
      })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(
          ".one",
          0.7,
          {
            opacity: 0,
            y: 10
          },
          "+=2"
      )
      .to(
          ".two",
          0.7,
          {
            opacity: 0,
            y: 10
          },
          "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
        // scale: 0.7
      })
      .to(
          ".three",
          0.7,
          {
            opacity: 0,
            y: 10
          },
          "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
      })
      .staggerTo(
          ".hbd-chatbox span",
          0.5,
          {
            visibility: "visible"
          },
          0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
      })
      .to(
          ".four",
          0.5,
          {
            scale: 0.2,
            opacity: 0,
            y: -150
          },
          "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff"
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
          ".idea-5",
          0.7,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0
          },
          "+=0.5"
      )
      .to(
          ".idea-5 .smiley",
          0.7,
          {
            rotation: 90,
            x: 8
          },
          "+=0.4"
      )
      .to(
          ".idea-5",
          0.7,
          {
            scale: 0.2,
            opacity: 0
          },
          "+=2"
      )
      .staggerFrom(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut
          },
          0.2
      )
      .staggerTo(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut
          },
          0.2,
          "+=1"
      )
      .staggerFromTo(
          ".baloons img",
          2.5,
          {
            opacity: 0.9,
            y: 1400
          },
          {
            opacity: 1,
            y: -1000
          },
          0.2
      )
      .from(
          ".lydia-dp",
          0.5,
          {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45
          },
          "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0
      })
      .staggerFrom(
          ".wish-hbd span",
          0.7,
          {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5)
          },
          0.1
      )
      .staggerFromTo(
          ".wish-hbd span",
          0.7,
          {
            scale: 1.4,
            rotationY: 150
          },
          {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut
          },
          0.1,
          "party"
      )
      .from(
          ".wish h5",
          0.5,
          {
            opacity: 0,
            y: 10,
            skewX: "-15deg"
          },
          "party"
      )
      .staggerTo(
          ".eight svg",
          1.5,
          {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4
          },
          0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1"
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
          ".last-smile",
          0.5,
          {
            rotation: 90
          },
          "+=1"
      );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    window.location.reload();
  });
};

// click event to play the audio

const startParty = () => {
  fetchData();
  conveti();
  document.getElementById('audio').play();
  document.getElementById('audio').controls = false;
  document.getElementById('containerzero').style.display = 'none';
}

// Set the date we're counting down to
let countDownDate = new Date("Sep 6, 2024 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("actionbtn").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  // enable the button if the time is up
  if (distance < 0) {
    document.getElementById("actionbtn").innerHTML = `
        <div class="cake">
            <div class="plate"></div>
            <div class="layer layer-bottom"></div>
            <div class="layer layer-middle"></div>
            <div class="layer layer-top"></div>
            <div class="icing"></div>
            <div class="drip drip1"></div>
            <div class="drip drip2"></div>
            <div class="drip drip3"></div>
            <div class="candle">
                <div class="flame"></div>
            </div>
            <div class="prompt">
            Coba pencet deh
            </div>
        </div>
    `;
    document.getElementById("actionbtn").disabled = false;
  }
}, 1000);


function conveti() {
  let W = window.innerWidth;
  let H = window.innerHeight;
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const maxConfettis = 50;
  const particles = [];

  const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
  ];

  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
      context.beginPath();
      context.lineWidth = this.r / 2;
      context.strokeStyle = this.color;
      context.moveTo(this.x + this.tilt + this.r / 3, this.y);
      context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
      return context.stroke();
    };
  }

  function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
      results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
      particle = particles[i];

      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
      particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

      if (particle.y <= H) remainingFlakes++;

      // If a confetti has fluttered out of view,
      // bring it back to above the viewport and let if re-fall.
      if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
        particle.x = Math.random() * W;
        particle.y = -30;
        particle.tilt = Math.floor(Math.random() * 10) - 20;
      }
    }

    return results;
  }

  window.addEventListener(
      "resize",
      function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      false
  );

// Push new confetti objects to `particles[]`
  for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
  }

// Initialize
  canvas.width = W;
  canvas.height = H;
  Draw();
}