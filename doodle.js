/**
 * HTML5 Canvas Interactive Doodle & Signature Pad
 * The Serendipity Wedding
 */

class WeddingDoodlePad {
  constructor() {
    this.canvas = document.getElementById('doodle-canvas');
    this.placeholder = document.getElementById('doodle-placeholder');
    this.clearBtn = document.getElementById('clear-doodle-btn');
    this.colorBtns = document.querySelectorAll('.color-picker-btn');

    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.hasDrawn = false;
    this.currentColor = '#8C3B4A';
    this.lineWidth = 3;

    this.initCanvasSize();
    this.bindEvents();
  }

  initCanvasSize() {
    // Handle high DPI screens
    const parent = this.canvas.parentElement;
    const rect = parent.getBoundingClientRect();
    const w = rect.width > 0 ? rect.width : 500;
    const h = rect.height > 0 ? rect.height : 144;
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;

    this.ctx.resetTransform && this.ctx.resetTransform();
    this.ctx.scale(dpr, dpr);

    // Initial styles
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.lineWidth;
  }

  bindEvents() {
    // Window resize
    window.addEventListener('resize', () => {
      // Preserve drawing on resize if needed
      const tempImg = this.hasDrawn ? this.canvas.toDataURL() : null;
      this.initCanvasSize();
      if (tempImg) {
        const img = new Image();
        img.onload = () => {
          this.ctx.drawImage(img, 0, 0, this.canvas.parentElement.clientWidth, this.canvas.parentElement.clientHeight);
        };
        img.src = tempImg;
      }
    });

    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    window.addEventListener('mouseup', () => this.stopDrawing());

    // Touch events for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        this.startDrawing(e.touches[0]);
      }
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        this.draw(e.touches[0]);
      }
    }, { passive: false });

    window.addEventListener('touchend', () => this.stopDrawing());

    // Clear button
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clear());
    }

    // Color picker buttons
    this.colorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.colorBtns.forEach(b => b.classList.remove('ring-2', 'ring-offset-1', 'scale-110'));
        btn.classList.add('ring-2', 'ring-offset-1', 'scale-110');
        this.currentColor = btn.getAttribute('data-color') || '#8C3B4A';
        this.ctx.strokeStyle = this.currentColor;
      });
    });
  }

  getCoordinates(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.hasDrawn = true;
    if (this.placeholder) {
      this.placeholder.style.display = 'none';
    }

    const { x, y } = this.getCoordinates(e);
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  draw(e) {
    if (!this.isDrawing) return;
    const { x, y } = this.getCoordinates(e);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  stopDrawing() {
    if (this.isDrawing) {
      this.ctx.closePath();
      this.isDrawing = false;
    }
  }

  clear() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.ctx.clearRect(0, 0, rect.width, rect.height);
    this.hasDrawn = false;
    if (this.placeholder) {
      this.placeholder.style.display = 'flex';
    }
  }

  getDrawingDataUrl() {
    return this.hasDrawn ? this.canvas.toDataURL('image/png') : null;
  }
}

// Global instance
window.addEventListener('load', () => {
  if (window.weddingDoodle) {
    window.weddingDoodle.initCanvasSize();
  }
});
window.weddingDoodle = new WeddingDoodlePad();
