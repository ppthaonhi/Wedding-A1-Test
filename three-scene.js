/**
 * Three.js 3D Interactive Wedding Rings Scene
 * Supports Dynamic Ring Configurations for Different Couples
 * The Serendipity Chapel
 */

(function initThreeScene() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const width = container.clientWidth || 400;
  const height = container.clientHeight || 300;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Group for the rings so we can tilt/rotate them together
  const ringsGroup = new THREE.Group();
  scene.add(ringsGroup);

  // Materials with defaults
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    metalness: 0.88,
    roughness: 0.18,
  });

  const diamondMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.1,
    roughness: 0.05,
    transparent: true,
    opacity: 0.95,
  });

  // Ring 1: Groom's Band
  const ringGeo1 = new THREE.TorusGeometry(1.4, 0.16, 32, 100);
  const ring1 = new THREE.Mesh(ringGeo1, goldMaterial);
  ring1.rotation.x = Math.PI / 2.3;
  ring1.rotation.y = 0.3;
  ring1.position.x = -0.7;
  ringsGroup.add(ring1);

  // Ring 2: Bride's Solitaire Ring (Interlocked)
  const ringGeo2 = new THREE.TorusGeometry(1.3, 0.13, 32, 100);
  const ring2 = new THREE.Mesh(ringGeo2, goldMaterial);
  ring2.rotation.x = Math.PI / 2.1;
  ring2.rotation.y = -0.4;
  ring2.position.x = 0.7;
  ringsGroup.add(ring2);

  // Gem Mount on Ring 2
  let diamondGeo = new THREE.OctahedronGeometry(0.32, 2);
  let diamond = new THREE.Mesh(diamondGeo, diamondMaterial);
  diamond.position.set(0, 1.4, 0);
  ring2.add(diamond);

  // Floating Sparkle Particles (Fairy dust)
  const particlesCount = 75;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 8;
    positions[i + 1] = (Math.random() - 0.5) * 6;
    positions[i + 2] = (Math.random() - 0.5) * 4;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xE8A598,
    size: 0.08,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });
  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xFFFBF0, 1.3);
  scene.add(ambientLight);

  const mainPointLight = new THREE.PointLight(0xFFE4B5, 2.5, 20);
  mainPointLight.position.set(4, 5, 5);
  scene.add(mainPointLight);

  const fillPointLight = new THREE.PointLight(0xE8A598, 1.8, 15);
  fillPointLight.position.set(-4, -2, 3);
  scene.add(fillPointLight);

  const diamondSparkleLight = new THREE.PointLight(0xFFFFFF, 2.2, 10);
  diamondSparkleLight.position.set(0, 3, 2);
  scene.add(diamondSparkleLight);

  // Dynamic Ring Theme Updater
  window.update3DRingTheme = function(ringConfig) {
    if (!ringConfig) return;

    // Update metal band color & properties
    if (ringConfig.metalColor) {
      goldMaterial.color.setHex(ringConfig.metalColor);
      goldMaterial.metalness = ringConfig.metalness !== undefined ? ringConfig.metalness : 0.88;
      goldMaterial.roughness = ringConfig.roughness !== undefined ? ringConfig.roughness : 0.18;
    }

    // Update gemstone color & properties
    if (ringConfig.gemColor) {
      diamondMaterial.color.setHex(ringConfig.gemColor);
      diamondMaterial.opacity = ringConfig.gemOpacity || 0.95;
    }

    // Update particle dust color
    if (ringConfig.particleColor) {
      particleMat.color.setHex(ringConfig.particleColor);
    }

    // Update sparkle light tint
    if (ringConfig.sparkleLightColor) {
      diamondSparkleLight.color.setHex(ringConfig.sparkleLightColor);
    }
  };

  // Mouse / Touch Interaction Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }

    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      ringsGroup.rotation.y += deltaX * 0.01;
      ringsGroup.rotation.x += deltaY * 0.01;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  container.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      ringsGroup.rotation.y += deltaX * 0.01;
      ringsGroup.rotation.x += deltaY * 0.01;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Idle floating rotation if not dragging
    if (!isDragging) {
      ringsGroup.rotation.y += 0.006;
      ringsGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Mouse parallax easing
      targetRotationY = mouseX * 0.4;
      targetRotationX = -mouseY * 0.3;
      ringsGroup.rotation.z += (targetRotationX - ringsGroup.rotation.z) * 0.05;
    }

    // Sparkle diamond rotation
    diamond.rotation.y = elapsedTime * 0.8;

    // Slowly rotate particle dust
    particleSystem.rotation.y = elapsedTime * 0.04;
    particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

    renderer.render(scene, camera);
  }

  animate();

  // Responsive Resize
  function updateDimensions() {
    if (!container) return;
    const newW = container.clientWidth || 400;
    const newH = container.clientHeight || 300;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  }

  window.addEventListener('resize', updateDimensions);
  window.addEventListener('load', updateDimensions);
  setTimeout(updateDimensions, 100);
})();
