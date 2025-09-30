// ==========================
// Fetch JSON data and populate page
// ==========================
const fetchData = async () => {
  try {
    const response = await fetch("customize.json");
    const data = await response.json();

    Object.entries(data).forEach(([key, value], index, arr) => {
      if (value !== "") {
        const el = document.querySelector(`[data-node-name*="${key}"]`);
        if (!el) return;
        if (key === "imagePath") {
          el.setAttribute("src", value);
        } else {
          el.textContent = value; // safer than innerText for multilingual support
        }
      }

      // Run animation after last element
      if (index === arr.length - 1) {
        animationTimeline();
      }
    });
  } catch (err) {
    console.error("Error fetching JSON:", err);
  }
};

// ==========================
// Animate page elements
// ==========================
const animationTimeline = () => {
  const textBoxChars = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  // Split each character for animation
  if (textBoxChars) textBoxChars.innerHTML = textBoxChars.textContent.split("").map(c => `<span>${c}</span>`).join("");
  if (hbd) hbd.innerHTML = hbd.textContent.split("").map(c => `<span>${c}</span>`).join("");

  const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

  const tl = gsap.timeline();

  tl.to(".container", { visibility: "visible", duration: 0.1 })
    .from(".one", { opacity: 0, y: 10, duration: 0.7 })
    .from(".two", { opacity: 0, y: 10, duration: 0.4 })
    .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=2")
    .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
    .from(".three", { opacity: 0, y: 10, duration: 0.7 })
    .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=2")
    .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 })
    .from(".fake-btn", { scale: 0.2, opacity: 0, duration: 0.3 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", { backgroundColor: "rgb(127, 206, 248)", duration: 0.1 })
    .to(".four", { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, "+=0.7")
    .from(".idea-1", ideaTextTrans)
    .to(".idea-1", ideaTextTransLeave, "+=1.5")
    .from(".idea-2", ideaTextTrans)
    .to(".idea-2", ideaTextTransLeave, "+=1.5")
    .from(".idea-3", ideaTextTrans)
    .to(".idea-3 strong", { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff", duration: 0.5 })
    .to(".idea-3", ideaTextTransLeave, "+=1.5")
    .from(".idea-4", ideaTextTrans)
    .to(".idea-4", ideaTextTransLeave, "+=1.5")
    .from(".idea-5", { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0, duration: 0.7 }, "+=0.5")
    .to(".idea-5 .smiley", { rotation: 90, x: 8, duration: 0.7 }, "+=0.4")
    .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 }, "+=2")
    .staggerFrom(".idea-6 span", { scale: 3, opacity: 0, rotation: 15, ease: "expo.out", duration: 0.8 }, 0.2)
    .staggerTo(".idea-6 span", { scale: 3, opacity: 0, rotation: -15, ease: "expo.out", duration: 0.8 }, 0.2, "+=1")
    .staggerFromTo(".baloons img", { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000, duration: 2.5 }, 0.2)
    .from(".lydia-dp", { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45, duration: 0.5 }, "-=2")
    .from(".hat", { x: -100, y: 350, rotation: -180, opacity: 0, duration: 0.5 })
    .staggerFrom(".wish-hbd span", { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: "elastic.out(1,0.5)", duration: 0.7 }, 0.1)
    .staggerFromTo(".wish-hbd span", { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: "expo.out", duration: 0.7 }, 0.1, "party")
    .from(".wish h5", { opacity: 0, y: 10, skewX: "-15deg", duration: 0.5 }, "party")
    .staggerTo(".eight svg", { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4, duration: 1.5 }, 0.3)
    .to(".six", { opacity: 0, y: 30, zIndex: "-1", duration: 0.5 })
    .staggerFrom(".nine p", ideaTextTrans, 1.2)
    .to(".last-smile", { rotation: 90, duration: 0.5 });

  // Replay button
  const replyBtn = document.getElementById("replay");
  if (replyBtn) replyBtn.addEventListener("click", () => location.reload());
};

// ==========================
// Start the party (play audio and fetch data)
// ==========================
const startParty = () => {
  fetchData();
  conveti();
  const audio = document.getElementById("audio");
  if (audio) {
    audio.play().catch(() => console.warn("Autoplay blocked, user interaction needed"));
    audio.controls = false;
  }
  const containerZero = document.getElementById("containerzero");
  if (containerZero) containerZero.style.display = "none";
};

// ==========================
// Countdown Timer
// ==========================
const countDownDate = new Date("Sep 6, 2024 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const actionBtn = document.getElementById("actionbtn");
  if (!actionBtn) return;

  if (distance > 0) {
    actionBtn.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    actionBtn.disabled = true;
  } else {
    actionBtn.innerHTML = `<div class="cake">
            <div class="plate"></div>
            <div class="layer layer-bottom"></div>
            <div class="layer layer-middle"></div>
            <div class="layer layer-top"></div>
            <div class="icing"></div>
            <div class="drip drip1"></div>
            <div class="drip drip2"></div>
            <div class="drip drip3"></div>
            <div class="candle"><div class="flame"></div></div>
            <div class="prompt">Coba pencet deh</div>
        </div>`;
    actionBtn.disabled = false;
  }
}, 1000);

// ==========================
// Confetti Animation
// ==========================
function conveti() {
  let W = window.innerWidth;
  let H = window.innerHeight;
  const canvas = document.getElementById("canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const maxConfettis = 50;
  const particles = [];
  const colors = ["DodgerBlue","OliveDrab","Gold","Pink","SlateBlue","LightBlue","Gold","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"];

  const randomFromTo = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

  function ConfettiParticle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H - H;
    this.r = randomFromTo(11, 33);
    this.d = Math.random() * maxConfettis + 11;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
      context.beginPath();
      context.lineWidth = this.r / 2;
      context.strokeStyle = this.color;
      context.moveTo(this.x + this.tilt + this.r / 3, this.y);
      context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
      context.stroke();
    };
  }

  function draw() {
    requestAnimationFrame(draw);
    context.clearRect(0, 0, W, H);
    particles.forEach(p => p.draw());
    particles.forEach((p, i) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle - i / 3) * 15;
      if (p.x > W + 30 || p.x < -30 || p.y > H) {
        p.x = Math.random() * W;
        p.y = -30;
        p.tilt = Math.floor(Math.random() * 10) - 20;
      }
    });
  }

  window.addEventListener("resize", () => { W = window.innerWidth; H = window.innerHeight; canvas.width = W; canvas.height = H; });

  for (let i = 0; i < maxConfettis; i++) particles.push(new ConfettiParticle());
  canvas.width = W; canvas.height = H;
  draw();
}
