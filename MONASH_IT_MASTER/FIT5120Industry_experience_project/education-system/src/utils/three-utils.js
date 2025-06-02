// utils/three-utils.js - Complete Version

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create Three.js scene
export function createScene(container) {
  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB);
  
  // Add fog effect
  scene.fog = new THREE.Fog(0x87CEEB, 30, 100);
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 20, 30);
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  
  // Add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minPolarAngle = Math.PI / 6;
  controls.maxPolarAngle = Math.PI / 2;
  controls.minDistance = 10;
  controls.maxDistance = 50;
  
  // Add enhanced lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Slightly brighter ambient light
  scene.add(ambientLight);
  
  // Main directional light (sun)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(30, 50, 30); // Better position for shadows
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 500;
  directionalLight.shadow.camera.left = -50;
  directionalLight.shadow.camera.right = 50;
  directionalLight.shadow.camera.top = 50;
  directionalLight.shadow.camera.bottom = -50;
  scene.add(directionalLight);
  
  // Add auxiliary soft light from opposite direction to fill shadows
  const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.3);
  secondaryLight.position.set(-30, 40, -30);
  scene.add(secondaryLight);
  
  // Create ground
  let groundMaterial;
  try {
    const textureLoader = new THREE.TextureLoader();
    const grassTexture = textureLoader.load('/textures/grass.jpg');
    grassTexture.wrapS = THREE.RepeatWrapping;
    grassTexture.wrapT = THREE.RepeatWrapping;
    grassTexture.repeat.set(20, 20);
    
    groundMaterial = new THREE.MeshStandardMaterial({ 
      map: grassTexture,
      roughness: 0.8,
    });
  } catch (e) {
    console.warn('Failed to load texture:', e);
    // Fall back to basic material
    groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x7ec850,
      roughness: 0.8
    });
  }
  
  const groundGeometry = new THREE.PlaneGeometry(200, 200);
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  
  // Create distant mountains
  createMountains(scene);
  
  // Add trees as decoration
  addDecorations(scene);
  
  // Window resize handler
  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Create but don't make them reactive
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  return {
    scene,
    camera,
    renderer,
    controls,
    raycaster,
    mouse,
    destroy: () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    }
  };
}

// Create mountain background
function createMountains(scene) {
  const mountainGeometry = new THREE.BufferGeometry();
  const mountainPositions = [];
  const mountainWidth = 200;
  const mountainDepth = 200;
  const segmentsX = 20;
  const segmentsZ = 20;
  
  for (let z = 0; z <= segmentsZ; z++) {
    for (let x = 0; x <= segmentsX; x++) {
      const xPos = (x / segmentsX) * mountainWidth - mountainWidth / 2;
      const zPos = (z / segmentsZ) * mountainDepth - mountainDepth / 2;
      
      // Generate mountain height - higher further away to create visual depth
      let height = 0;
      const distanceFromCenter = Math.sqrt(xPos * xPos + zPos * zPos);
      
      if (distanceFromCenter > 30) {
        height = Math.sin(xPos * 0.05) * 5 + Math.cos(zPos * 0.05) * 5;
        height += Math.random() * 2;
        height = Math.max(0, height) * (distanceFromCenter / 30);
      }
      
      mountainPositions.push(xPos, height, zPos);
    }
  }
  
  // Create indices for correctly rendering triangles
  const indices = [];
  for (let z = 0; z < segmentsZ; z++) {
    for (let x = 0; x < segmentsX; x++) {
      const a = x + (segmentsX + 1) * z;
      const b = x + (segmentsX + 1) * (z + 1);
      const c = (x + 1) + (segmentsX + 1) * (z + 1);
      const d = (x + 1) + (segmentsX + 1) * z;
      
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }
  
  mountainGeometry.setIndex(indices);
  mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(mountainPositions, 3));
  mountainGeometry.computeVertexNormals();
  
  const mountainMaterial = new THREE.MeshStandardMaterial({
    color: 0xa5d6a7,
    flatShading: true,
    side: THREE.DoubleSide
  });
  
  const mountains = new THREE.Mesh(mountainGeometry, mountainMaterial);
  mountains.position.y = -1; // Sink slightly to blend with the ground
  mountains.receiveShadow = true;
  
  scene.add(mountains);
}

// Add trees and other decorations
function addDecorations(scene) {
  // Add trees
  const treePositions = [
    [-20, 0, -5], [-15, 0, 10], [-8, 0, -15], [8, 0, -15], 
    [15, 0, 10], [20, 0, -5], [-10, 0, 15], [10, 0, 15]
  ];
  
  // Create tree trunk
  const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.7, 3, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
  
  // Create tree leaves
  const leavesGeometry = new THREE.SphereGeometry(2, 8, 8);
  const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x2e7d32 });
  
  treePositions.forEach(position => {
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.set(position[0], position[1] + 1.5, position[2]);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    scene.add(trunk);
    
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(position[0], position[1] + 4, position[2]);
    leaves.castShadow = true;
    leaves.receiveShadow = true;
    scene.add(leaves);
  });
}

// Helper function for handling color values
function parseColor(color) {
  // If color is already a number, return directly
  if (typeof color === 'number') {
    return color;
  }
  
  // If it's a hex string like "#FF5500", convert to number
  if (typeof color === 'string' && color.startsWith('#')) {
    return parseInt(color.substring(1), 16);
  }
  
  // Default fallback color
  return 0x0000FF; // Default blue
}

// Add landscaping around university buildings
function addLandscaping(scene, university, buildingGroup) {
  const { width, depth } = university.size;
  const position = university.position;
  
  // Add grass around the building
  const grassGeometry = new THREE.CircleGeometry(width * 1.5, 32);
  const grassMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x7ec850,
    roughness: 0.8
  });
  const grass = new THREE.Mesh(grassGeometry, grassMaterial);
  grass.rotation.x = -Math.PI / 2;
  grass.position.set(position.x, position.y - university.size.height/2 + 0.01, position.z);
  buildingGroup.add(grass);
  
  // Add shrubs around the building
  const bushGeometry = new THREE.SphereGeometry(0.6, 8, 8);
  const bushMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x33691e,
    roughness: 0.9
  });
  
  // Create semi-circle of shrubs in front of the building
  const numBushes = 6;
  for (let i = 0; i < numBushes; i++) {
    const angle = Math.PI * (i / (numBushes - 1) - 0.5);
    const bushDistance = width * 1.2;
    
    const bush = new THREE.Mesh(bushGeometry, bushMaterial);
    bush.position.set(
      position.x + Math.sin(angle) * bushDistance,
      position.y - university.size.height/2 + 0.3,
      position.z + Math.cos(angle) * bushDistance
    );
    bush.castShadow = true;
    bush.receiveShadow = true;
    
    // Slightly randomize bush size
    const scale = 0.8 + Math.random() * 0.4;
    bush.scale.set(scale, scale, scale);
    
    buildingGroup.add(bush);
  }
  
  // Add path to the entrance
  const pathGeometry = new THREE.PlaneGeometry(width * 0.3, depth * 1.2);
  const pathMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xd7ccc8,
    roughness: 0.9
  });
  const path = new THREE.Mesh(pathGeometry, pathMaterial);
  path.rotation.x = -Math.PI / 2;
  path.position.set(
    position.x,
    position.y - university.size.height/2 + 0.02,
    position.z + depth
  );
  buildingGroup.add(path);
  
  // Add small signpost
  const postGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);
  const postMaterial = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
  const post = new THREE.Mesh(postGeometry, postMaterial);
  post.position.set(
    position.x + width * 0.6,
    position.y - university.size.height/2 + 0.6,
    position.z + depth * 0.8
  );
  buildingGroup.add(post);
  
  // Direction sign on the post
  const signGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.05);
  const signMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xffffff
  });
  const sign = new THREE.Mesh(signGeometry, signMaterial);
  sign.position.set(
    position.x + width * 0.6,
    position.y - university.size.height/2 + 1.2,
    position.z + depth * 0.8
  );
  buildingGroup.add(sign);
  
  // Create text for the sign
  const signCanvas = document.createElement('canvas');
  const signContext = signCanvas.getContext('2d');
  signCanvas.width = 128;
  signCanvas.height = 64;
  
  signContext.fillStyle = '#FFFFFF';
  signContext.fillRect(0, 0, signCanvas.width, signCanvas.height);
  
  signContext.font = 'bold 16px Arial';
  signContext.fillStyle = '#000000';
  signContext.textAlign = 'center';
  signContext.textBaseline = 'middle';
  signContext.fillText('WELCOME', signCanvas.width / 2, signCanvas.height / 3);
  signContext.fillText(university.shortName, signCanvas.width / 2, 2 * signCanvas.height / 3);
  
  const signTexture = new THREE.CanvasTexture(signCanvas);
  const signTextSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: signTexture }));
  signTextSprite.scale.set(0.8, 0.5, 1);
  signTextSprite.position.set(
    position.x + width * 0.6,
    position.y - university.size.height/2 + 1.2,
    position.z + depth * 0.8 + 0.03
  );
  buildingGroup.add(signTextSprite);
}

// Create university building
export function createUniversityBuilding(scene, university) {
  const { width, height, depth } = university.size;
  const colorValue = parseColor(university.color);
  
  // Create a group for the entire building
  const buildingGroup = new THREE.Group();
  buildingGroup.userData = { id: university.id, type: 'university' };
  
  // Main building structure, slightly adjusted dimensions
  const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
  const buildingMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(colorValue),
    roughness: 0.7
  });
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
  building.position.set(
    university.position.x, 
    university.position.y + height/2, 
    university.position.z
  );
  building.castShadow = true;
  building.receiveShadow = true;
  buildingGroup.add(building);
  
  // Add base/foundation, slightly larger
  const baseGeometry = new THREE.BoxGeometry(width + 0.5, height/10, depth + 0.5);
  const baseMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(0x888888), // Concrete-like color
    roughness: 0.9
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.set(
    university.position.x, 
    university.position.y + height/20 - height/2, 
    university.position.z
  );
  base.receiveShadow = true;
  buildingGroup.add(base);
  
  // Add pillars at corners
  const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.3, height, 8);
  const pillarMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(colorValue).multiplyScalar(0.8), // Darker than main building
    roughness: 0.5
  });
  
  // Add pillars at four corners
  const pillarPositions = [
    [width/2 - 0.3, -height/2, depth/2 - 0.3],
    [-width/2 + 0.3, -height/2, depth/2 - 0.3],
    [width/2 - 0.3, -height/2, -depth/2 + 0.3],
    [-width/2 + 0.3, -height/2, -depth/2 + 0.3]
  ];
  
  pillarPositions.forEach(pos => {
    const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
    pillar.position.set(
      university.position.x + pos[0],
      university.position.y + height/2 + pos[1],
      university.position.z + pos[2]
    );
    pillar.castShadow = true;
    buildingGroup.add(pillar);
  });
  
  // Improved roof - more interesting shape
  const roofGeometry = new THREE.ConeGeometry(width/Math.sqrt(2) + 0.5, height/2, 4);
  roofGeometry.rotateY(Math.PI/4); // Align with the building
  const roofMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(colorValue).multiplyScalar(1.2), // Slightly brighter
    roughness: 0.6
  });
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.position.set(
    university.position.x, 
    university.position.y + height + height/4, 
    university.position.z
  );
  roof.castShadow = true;
  buildingGroup.add(roof);
  
  // Add windows with frames
  const windowMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xbbdefb,
    roughness: 0.2,
    metalness: 0.5
  });
  
  const windowFrameMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5
  });
  
  // Add multiple windows on the front
  const windowWidth = width * 0.15;
  const windowHeight = height * 0.2;
  const windowDepth = 0.1;
  
  // Front windows (3x2 grid)
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      // Window frame
      const frameGeometry = new THREE.BoxGeometry(windowWidth + 0.1, windowHeight + 0.1, windowDepth);
      const frame = new THREE.Mesh(frameGeometry, windowFrameMaterial);
      frame.position.set(
        university.position.x + (col - 1) * windowWidth * 1.5,
        university.position.y + height * 0.1 + row * windowHeight * 1.5,
        university.position.z + depth/2 + 0.01
      );
      buildingGroup.add(frame);
      
      // Window glass
      const glassGeometry = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
      const glass = new THREE.Mesh(glassGeometry, windowMaterial);
      glass.position.set(
        university.position.x + (col - 1) * windowWidth * 1.5,
        university.position.y + height * 0.1 + row * windowHeight * 1.5,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(glass);
    }
  }
  
  // Add framed door
  const doorWidth = width * 0.25;
  const doorHeight = height * 0.4;
  
  // Door frame
  const doorFrameGeometry = new THREE.BoxGeometry(doorWidth + 0.2, doorHeight + 0.2, depth * 0.1);
  const doorFrame = new THREE.Mesh(doorFrameGeometry, windowFrameMaterial);
  doorFrame.position.set(
    university.position.x,
    university.position.y - height * 0.05,
    university.position.z + depth/2 + 0.01
  );
  buildingGroup.add(doorFrame);
  
  // Door
  const doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, depth * 0.1);
  const doorMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(colorValue).multiplyScalar(0.9),
    roughness: 0.4
  });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(
    university.position.x,
    university.position.y - height * 0.05,
    university.position.z + depth/2 + 0.02
  );
  buildingGroup.add(door);
  
  // Add door handle
  const knobGeometry = new THREE.SphereGeometry(0.1, 8, 8);
  const knobMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xd4af37, // Gold
    metalness: 0.8,
    roughness: 0.2
  });
  const knob = new THREE.Mesh(knobGeometry, knobMaterial);
  knob.position.set(
    university.position.x + doorWidth/4,
    university.position.y - height * 0.05,
    university.position.z + depth/2 + 0.08
  );
  buildingGroup.add(knob);
  
  // Add steps leading to the door
  const stepsMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xcccccc,
    roughness: 0.8
  });
  
  // Three steps with increasing width
  for (let i = 0; i < 3; i++) {
    const stepWidth = doorWidth + (3-i) * 0.2;
    const stepGeometry = new THREE.BoxGeometry(stepWidth, 0.15, 0.6);
    const step = new THREE.Mesh(stepGeometry, stepsMaterial);
    step.position.set(
      university.position.x,
      university.position.y - height/2 - 0.075 - i * 0.15,
      university.position.z + depth/2 + 0.3 + i * 0.3
    );
    step.castShadow = true;
    step.receiveShadow = true;
    buildingGroup.add(step);
  }
  
  // If visited, add marker
  if (university.visited) {
    const visitedGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const visitedMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
    const visitedMarker = new THREE.Mesh(visitedGeometry, visitedMaterial);
    visitedMarker.position.set(
      university.position.x + width/2 - 0.5,
      university.position.y + height/2 + 0.5,
      university.position.z + depth/2 + 0.5
    );
    buildingGroup.add(visitedMarker);
  }
  
  // Create university name label
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 128;
  
  // Create better-looking name label with university color
  context.fillStyle = '#FFFFFF';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add border with university color
  const hexColor = '#' + new THREE.Color(colorValue).getHexString();
  context.strokeStyle = hexColor;
  context.lineWidth = 8;
  context.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
  
  // Add university name with better typography
  context.font = 'bold 40px Arial';
  context.fillStyle = '#000000';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(university.shortName || university.name, canvas.width / 2, canvas.height / 2);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  
  const spriteMaterial = new THREE.SpriteMaterial({ 
    map: texture,
    transparent: true
  });
  const nameSprite = new THREE.Sprite(spriteMaterial);
  nameSprite.scale.set(12, 3, 1);
  nameSprite.position.set(
    university.position.x,
    university.position.y + height + 3,
    university.position.z
  );
  buildingGroup.add(nameSprite);
  
  // Add landscaping around the building
  addLandscaping(scene, university, buildingGroup);
  
  scene.add(buildingGroup);
  return buildingGroup;
}

export function createPlayer(scene) {
  const player = new THREE.Group();
  
  // Head
  const headGeometry = new THREE.BoxGeometry(1, 1, 1);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffe082 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.5;
  head.castShadow = true;
  player.add(head);
  
  // Body
  const bodyGeometry = new THREE.BoxGeometry(0.8, 1, 0.5);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffeb3b });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 0.5;
  body.castShadow = true;
  player.add(body);
  
  // Left leg
  const leftLegGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.4);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
  const leftLeg = new THREE.Mesh(leftLegGeometry, legMaterial);
  leftLeg.position.set(-0.2, -0.4, 0);
  leftLeg.castShadow = true;
  player.add(leftLeg);
  
  // Right leg
  const rightLegGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.4);
  const rightLeg = new THREE.Mesh(rightLegGeometry, legMaterial);
  rightLeg.position.set(0.2, -0.4, 0);
  rightLeg.castShadow = true;
  player.add(rightLeg);
  
  // Label - "YOU"
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 128;
  canvas.height = 64;
  
  context.fillStyle = '#FFFFFF';
  context.strokeStyle = '#000000';
  context.lineWidth = 4;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeRect(0, 0, canvas.width, canvas.height);
  
  context.font = 'bold 24px Arial';
  context.fillStyle = '#000000';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText('YOU', canvas.width / 2, canvas.height / 2);
  
  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const nameSprite = new THREE.Sprite(spriteMaterial);
  nameSprite.scale.set(5, 2.5, 1);
  nameSprite.position.y = 3;
  player.add(nameSprite);
  
  // Add a small light source following the player, to make player visible in dark environments
  const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
  pointLight.position.set(0, 2, 0);
  player.add(pointLight);
  
  // Set initial position at screen center area
  player.position.set(0, 0, 0);
  player.name = 'player';
  
  scene.add(player);
  
  return player;
}

// Interaction prompt - improved version
export function createInteractionPrompt(scene, position, text) {
  // Create canvas for text texture
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // Set canvas dimensions
  canvas.width = 512;
  canvas.height = 128;
  
  // Create semi-transparent white background
  context.fillStyle = 'rgba(255, 255, 255, 0.85)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add blue border to improve visibility
  context.strokeStyle = '#2196f3';
  context.lineWidth = 4;
  context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
  
  // Set text style with shadow to improve readability
  context.font = 'bold 36px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.shadowColor = 'rgba(0, 0, 0, 0.3)';
  context.shadowBlur = 4;
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.fillStyle = '#1a237e'; // Deep blue text
  
  // Draw text
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  
  // Create sprite using canvas texture
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ 
    map: texture,
    transparent: true,
    // Key settings to make the label always visible
    sizeAttenuation: false,
    depthTest: false
  });
  
  const sprite = new THREE.Sprite(material);
  
  // Set position
  sprite.position.copy(position);
  
  // Adjust size for better visibility (adjust as needed)
  sprite.scale.set(8, 2, 1);
  
  // Add to scene
  scene.add(sprite);
  
  return sprite;
}