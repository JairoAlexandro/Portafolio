const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
let circles = [];
const mouse = { x: null, y: null };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  mouse.x = touch.clientX;
  mouse.y = touch.clientY;
});

window.addEventListener('touchend', () => {
  mouse.x = null;
  mouse.y = null;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.initialSpeed = Math.hypot(dx, dy);
    this.radius = radius;
  }

draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'grey';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fill();
    ctx.shadowBlur = 0; // Reset shadowBlur to avoid affecting other drawings
}

  update() {
    if (mouse.x !== null && mouse.y !== null) {
      const distance = Math.hypot(mouse.x - this.x, mouse.y - this.y);
      const attractionStrength = distance < 150 ? 0.1 : 0;
      const angle = Math.atan2(mouse.y - this.y, mouse.x - this.x);
      this.dx += Math.cos(angle) * attractionStrength;
      this.dy += Math.sin(angle) * attractionStrength;
    }

    const currentSpeed = Math.hypot(this.dx, this.dy);
    if (currentSpeed > this.initialSpeed) {
      this.dx *= 0.98;
      this.dy *= 0.98;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

function init() {
  circles = [];
  const circleCount = window.innerWidth < 768 ? 30 : 50;
  for (let i = 0; i < circleCount; i++) {
    const radius = 5.5;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const dx = (Math.random() - 0.5) * 2;
    const dy = (Math.random() - 0.5) * 2;
    circles.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(circle => circle.update());
}

init();
animate();
