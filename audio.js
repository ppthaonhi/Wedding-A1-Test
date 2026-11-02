/**
 * Web Audio API Sound Synthesizer & Procedural Ambient Music
 * The Serendipity Wedding
 */

class WeddingAudioManager {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.analyser = null;
    this.isMusicPlaying = false;
    this.lofiTimer = null;
    this.visualizerCanvas = document.getElementById('audio-visualizer');
    this.visualizerCtx = this.visualizerCanvas ? this.visualizerCanvas.getContext('2d') : null;
    this.initVisualizer();
  }

  // Ensure AudioContext is initialized after user interaction (browser policy)
  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);

      // Analyser for visualizer
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Synthesize Champagne Glass Clink Sound 🥂
   * High resonant sine waves with metallic decaying harmonics
   */
  playGlassClink() {
    try {
      this.ensureContext();
      const now = this.ctx.currentTime;

      const freqs = [2400, 2750, 4800];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const initialVolume = idx === 0 ? 0.35 : 0.15;
        gain.gain.setValueAtTime(initialVolume, now);
        // Exponential decay gives crisp crystal ring
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 1.25);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  /**
   * Synthesize Magical Wedding Harp Chime 💖
   */
  playHarpChime() {
    try {
      this.ensureContext();
      const now = this.ctx.currentTime;
      // Pentatonic chord: C5, E5, G5, B5, D6
      const notes = [523.25, 659.25, 783.99, 987.77, 1174.66];

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = now + (i * 0.07);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.0001, noteTime);
        gain.gain.linearRampToValueAtTime(0.18, noteTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.4);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(noteTime);
        osc.stop(noteTime + 1.5);
      });
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  /**
   * Synthesize Firework Celebration Sound 🎆
   */
  playFirework() {
    try {
      this.ensureContext();
      const now = this.ctx.currentTime;

      // Pop / Thump (low freq sine)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.frequency.setValueAtTime(160, now);
      subOsc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
      subGain.gain.setValueAtTime(0.4, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      subOsc.connect(subGain);
      subGain.connect(this.masterGain);
      subOsc.start(now);
      subOsc.stop(now + 0.4);

      // Noise crackle buffer
      const bufferSize = this.ctx.sampleRate * 0.8;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.25));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.Q.setValueAtTime(3, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + 0.85);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  /**
   * Procedural Generative Lofi Wedding Music
   * Generates continuous warm romantic chord arpeggios
   */
  toggleMusic() {
    this.ensureContext();
    if (this.isMusicPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  startMusic() {
    this.isMusicPlaying = true;
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [196.00, 261.63, 293.66, 349.23], // G7sus4
    ];

    let chordIndex = 0;
    const playNextChord = () => {
      if (!this.isMusicPlaying) return;

      const chord = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      // Soft warm synth filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, this.ctx.currentTime);
      filter.connect(this.masterGain);

      // Play soft arpeggio notes
      chord.forEach((freq, noteIdx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = this.ctx.currentTime + (noteIdx * 0.45);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        // Warm subtle vibrato
        const vibrato = this.ctx.createOscillator();
        const vibratoGain = this.ctx.createGain();
        vibrato.frequency.value = 4.5;
        vibratoGain.gain.value = 1.2;
        vibrato.connect(osc.frequency);
        vibrato.start(noteTime);
        vibrato.stop(noteTime + 2.2);

        gain.gain.setValueAtTime(0.001, noteTime);
        gain.gain.linearRampToValueAtTime(0.08, noteTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 2.0);

        osc.connect(gain);
        gain.connect(filter);

        osc.start(noteTime);
        osc.stop(noteTime + 2.2);
      });

      this.lofiTimer = setTimeout(playNextChord, 2200);
    };

    playNextChord();
  }

  stopMusic() {
    this.isMusicPlaying = false;
    if (this.lofiTimer) {
      clearTimeout(this.lofiTimer);
      this.lofiTimer = null;
    }
  }

  /**
   * Draw Real-time Visualizer on the mini canvas
   */
  initVisualizer() {
    if (!this.visualizerCanvas || !this.visualizerCtx) return;

    const canvas = this.visualizerCanvas;
    const ctx = this.visualizerCtx;
    const dataArray = new Uint8Array(16);

    const render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (this.analyser && this.isMusicPlaying) {
        this.analyser.getByteFrequencyData(dataArray);
      } else {
        dataArray.fill(0);
      }

      const barWidth = 3;
      const barGap = 2;
      const totalBars = 8;
      const startX = (canvas.width - (totalBars * (barWidth + barGap))) / 2;

      for (let i = 0; i < totalBars; i++) {
        const val = this.isMusicPlaying ? dataArray[i * 2] || 10 : 4;
        const height = Math.max(3, (val / 255) * canvas.height * 0.9);
        const y = canvas.height - height;

        ctx.fillStyle = this.isMusicPlaying ? '#8C3B4A' : '#D4AF37';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(startX + (i * (barWidth + barGap)), y, barWidth, height, 1.5);
        } else {
          ctx.rect(startX + (i * (barWidth + barGap)), y, barWidth, height);
        }
        ctx.fill();
      }
    };

    render();
  }
}

// Global instance
window.weddingAudio = new WeddingAudioManager();
