import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 创建 Three.js 场景
export function createScene(container) {
  // 创建场景
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB);
  
  // 添加雾效果
  scene.fog = new THREE.Fog(0x87CEEB, 30, 100);
  
  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 20, 30);
  
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  
  // 添加控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minPolarAngle = Math.PI / 6;
  controls.maxPolarAngle = Math.PI / 2;
  controls.minDistance = 10;
  controls.maxDistance = 50;
  
  // 添加增强版灯光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // 稍微亮一点的环境光
  scene.add(ambientLight);
  
  // 主方向光（太阳）
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(30, 50, 30); // 更好的阴影位置
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
  
  // 添加辅助柔光，从相反方向填充阴影
  const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.3);
  secondaryLight.position.set(-30, 40, -30);
  scene.add(secondaryLight);
  
  // 创建地面
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
    // 回退到基本材质
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
  
  // 创建远处的山脉
  createMountains(scene);
  
  // 添加树木作为装饰
  addDecorations(scene);
  
  // 窗口大小调整处理
  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // 创建但不让它们成为响应式
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

// 创建山脉背景
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
      
      // 生成山脉高度 - 越远高度越高，创造视觉深度
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
  
  // 创建索引以便正确渲染三角形
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
  mountains.position.y = -1; // 稍微下沉一点，与地面融合
  mountains.receiveShadow = true;
  
  scene.add(mountains);
}

// 添加树木和其他装饰物
function addDecorations(scene) {
  // 添加树木
  const treePositions = [
    [-20, 0, -5], [-15, 0, 10], [-8, 0, -15], [8, 0, -15], 
    [15, 0, 10], [20, 0, -5], [-10, 0, 15], [10, 0, 15]
  ];
  
  // 创建树干
  const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.7, 3, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
  
  // 创建树叶
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

// 处理颜色值的辅助函数
function parseColor(color) {
  // 如果颜色已经是数字，直接返回
  if (typeof color === 'number') {
    return color;
  }
  
  // 如果是十六进制字符串如 "#FF5500"，转换为数字
  if (typeof color === 'string' && color.startsWith('#')) {
    return parseInt(color.substring(1), 16);
  }
  
  // 默认回退颜色
  return 0x0000FF; // 默认蓝色
}

// 创建拱形窗户几何形状的辅助函数
function createArchedWindowGeometry(width, height, depth, isFrame = true) {
  const shape = new THREE.Shape();
  const halfWidth = width / 2;
  const arcHeight = height * 0.3;
  const rectHeight = height - arcHeight;
  
  // 绘制矩形部分
  shape.moveTo(-halfWidth, -rectHeight/2);
  shape.lineTo(halfWidth, -rectHeight/2);
  shape.lineTo(halfWidth, rectHeight/2);
  shape.lineTo(-halfWidth, rectHeight/2);
  
  // 绘制拱形顶部
  const arcPoints = 10;
  for (let i = 0; i <= arcPoints; i++) {
    const angle = Math.PI * (1 - i / arcPoints);
    const x = Math.cos(angle) * halfWidth;
    const y = Math.sin(angle) * arcHeight + rectHeight/2;
    shape.lineTo(x, y);
  }
  
  shape.lineTo(-halfWidth, rectHeight/2);
  
  // 挤出形状
  const extrudeSettings = {
    depth: depth,
    bevelEnabled: false
  };
  
  if (isFrame) {
    // 为框架创建内部开口
    const innerShape = new THREE.Shape();
    const innerHalfWidth = (width - 0.05) / 2;
    const innerArcHeight = (height - 0.05) * 0.3;
    const innerRectHeight = (height - 0.05) - innerArcHeight;
    
    // 矩形部分
    innerShape.moveTo(-innerHalfWidth, -innerRectHeight/2);
    innerShape.lineTo(innerHalfWidth, -innerRectHeight/2);
    innerShape.lineTo(innerHalfWidth, innerRectHeight/2);
    innerShape.lineTo(-innerHalfWidth, innerRectHeight/2);
    
    // 拱形部分
    for (let i = 0; i <= arcPoints; i++) {
      const angle = Math.PI * (1 - i / arcPoints);
      const x = Math.cos(angle) * innerHalfWidth;
      const y = Math.sin(angle) * innerArcHeight + innerRectHeight/2;
      innerShape.lineTo(x, y);
    }
    
    innerShape.lineTo(-innerHalfWidth, innerRectHeight/2);
    
    shape.holes.push(innerShape);
  }
  
  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

// 创建大学特色建筑周围的景观
function addUniversityLandscaping(scene, university, buildingGroup) {
  const { width, depth } = university.size;
  const position = university.position;
  
  // 共同基础 - 草坪
  const grassGeometry = new THREE.CircleGeometry(width * 1.5, 32);
  const grassMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x7ec850,
    roughness: 0.8
  });
  const grass = new THREE.Mesh(grassGeometry, grassMaterial);
  grass.rotation.x = -Math.PI / 2;
  grass.position.set(position.x, position.y - university.size.height/2 + 0.01, position.z);
  buildingGroup.add(grass);
  
  // 根据大学ID添加特色景观
  switch(university.id) {
    case '1': // 墨尔本大学 - 添加古典喷泉和雕像
      // 喷泉底座
      const fountainBaseGeometry = new THREE.CylinderGeometry(1.2, 1.5, 0.3, 16);
      const fountainBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xbdbdbd });
      const fountainBase = new THREE.Mesh(fountainBaseGeometry, fountainBaseMaterial);
      fountainBase.position.set(
        position.x,
        position.y - university.size.height/2 + 0.15,
        position.z + depth * 1.2
      );
      buildingGroup.add(fountainBase);
      
      // 喷泉柱
      const fountainPillarGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 8);
      const fountainPillar = new THREE.Mesh(fountainPillarGeometry, fountainBaseMaterial);
      fountainPillar.position.set(
        position.x,
        position.y - university.size.height/2 + 0.7,
        position.z + depth * 1.2
      );
      buildingGroup.add(fountainPillar);
      
      // 喷泉碗
      const fountainBowlGeometry = new THREE.CylinderGeometry(0.8, 0.5, 0.2, 16);
      const fountainBowl = new THREE.Mesh(fountainBowlGeometry, fountainBaseMaterial);
      fountainBowl.position.set(
        position.x,
        position.y - university.size.height/2 + 1.1,
        position.z + depth * 1.2
      );
      buildingGroup.add(fountainBowl);
      
      // 喷泉水 - 半透明蓝色
      const waterGeometry = new THREE.ConeGeometry(0.1, 0.6, 8);
      const waterMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x4fc3f7,
        transparent: true,
        opacity: 0.6
      });
      const water = new THREE.Mesh(waterGeometry, waterMaterial);
      water.position.set(
        position.x,
        position.y - university.size.height/2 + 1.7,
        position.z + depth * 1.2
      );
      buildingGroup.add(water);
      
      // 添加长石椅
      const benchGeometry = new THREE.BoxGeometry(2, 0.2, 0.5);
      const benchMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
      
      // 左椅子
      const leftBench = new THREE.Mesh(benchGeometry, benchMaterial);
      leftBench.position.set(
        position.x - width * 0.8,
        position.y - university.size.height/2 + 0.3,
        position.z + width * 0.8
      );
      leftBench.rotation.y = Math.PI / 4;
      buildingGroup.add(leftBench);
      
      // 右椅子
      const rightBench = new THREE.Mesh(benchGeometry, benchMaterial);
      rightBench.position.set(
        position.x + width * 0.8,
        position.y - university.size.height/2 + 0.3,
        position.z + width * 0.8
      );
      rightBench.rotation.y = -Math.PI / 4;
      buildingGroup.add(rightBench);
      break;
      
      case '2': // Monash University
      {
          const sculptureGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
          const sculptureMaterial = new THREE.MeshStandardMaterial({ 
              color: 0xf44336,
              metalness: 0.7,
              roughness: 0.2
          });
      const sculpture = new THREE.Mesh(sculptureGeometry, sculptureMaterial);
      sculpture.position.set(
        position.x + width * 0.8,
        position.y - university.size.height/2 + 1.5,
        position.z + depth * 0.8
      );
      sculpture.scale.set(0.8, 0.8, 0.8);
      sculpture.rotation.x = Math.PI / 6;
      buildingGroup.add(sculpture);
      
      // 雕塑底座
      const pedestalGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 16);
      const pedestalMaterial = new THREE.MeshStandardMaterial({ color: 0x263238 });
      const pedestal = new THREE.Mesh(pedestalGeometry, pedestalMaterial);
      pedestal.position.set(
        position.x + width * 0.8,
        position.y - university.size.height/2 + 0.1,
        position.z + depth * 0.8
      );
      buildingGroup.add(pedestal);
      
      // 添加现代长椅
      const modernBenchGeometry = new THREE.BoxGeometry(3, 0.1, 0.8);
      const modernBenchMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x90caf9,
        metalness: 0.5,
        roughness: 0.3
      });
      const modernBench = new THREE.Mesh(modernBenchGeometry, modernBenchMaterial);
      modernBench.position.set(
        position.x - width * 0.6,
        position.y - university.size.height/2 + 0.4,
        position.z + depth * 0.9
      );
      modernBench.rotation.y = Math.PI / 8;
      buildingGroup.add(modernBench);
      
      // 添加长椅腿
      const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8);
      const legMaterial = new THREE.MeshStandardMaterial({ color: 0x607d8b });
      
      // 添加四条腿
      [-1.3, 1.3].forEach(xOffset => {
        [-0.3, 0.3].forEach(zOffset => {
          const leg = new THREE.Mesh(legGeometry, legMaterial);
          // 应用椅子的旋转
          const rotatedX = Math.cos(Math.PI/8) * xOffset - Math.sin(Math.PI/8) * zOffset;
          const rotatedZ = Math.sin(Math.PI/8) * xOffset + Math.cos(Math.PI/8) * zOffset;
          
          leg.position.set(
            position.x - width * 0.6 + rotatedX,
            position.y - university.size.height/2 + 0.2,
            position.z + depth * 0.9 + rotatedZ
          );
          buildingGroup.add(leg);
        });
      });
      break;
      
    case '3': // 拉筹伯大学 - 花园
      // 添加围绕建筑的花坛
      const numberOfFlowerBeds = 8;
      const radius = width * 1.2;
      
      for (let i = 0; i < numberOfFlowerBeds; i++) {
        const angle = (i / numberOfFlowerBeds) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // 花坛
        const flowerBedGeometry = new THREE.CylinderGeometry(0.5, 0.6, 0.3, 8);
        const flowerBedMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
        const flowerBed = new THREE.Mesh(flowerBedGeometry, flowerBedMaterial);
        flowerBed.position.set(
          position.x + x,
          position.y - university.size.height/2 + 0.15,
          position.z + z
        );
        buildingGroup.add(flowerBed);
        
        // 花
        const flowerColors = [0xe91e63, 0xffeb3b, 0x4caf50, 0x2196f3];
        const flowerColor = flowerColors[i % flowerColors.length];
        
        const flowerGeometry = new THREE.SphereGeometry(0.3, 8, 8);
        const flowerMaterial = new THREE.MeshStandardMaterial({ color: flowerColor });
        const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
        flower.position.set(
          position.x + x,
          position.y - university.size.height/2 + 0.5,
          position.z + z
        );
        buildingGroup.add(flower);
      }
      
      // 添加一个小凉亭
      const gazeboRoofGeometry = new THREE.ConeGeometry(1.5, 0.8, 8);
      const gazeboRoofMaterial = new THREE.MeshStandardMaterial({ color: 0x8d6e63 });
      const gazeboRoof = new THREE.Mesh(gazeboRoofGeometry, gazeboRoofMaterial);
      gazeboRoof.position.set(
        position.x - width * 0.8,
        position.y - university.size.height/2 + 2.4,
        position.z - depth * 0.8
      );
      buildingGroup.add(gazeboRoof);
      
      // 凉亭柱子
      const gazeboPillarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
      const gazeboPillarMaterial = new THREE.MeshStandardMaterial({ color: 0xa1887f });
      
      // 添加8根柱子
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 1.2;
        const z = Math.sin(angle) * 1.2;
        
        const pillar = new THREE.Mesh(gazeboPillarGeometry, gazeboPillarMaterial);
        pillar.position.set(
          position.x - width * 0.8 + x,
          position.y - university.size.height/2 + 1,
          position.z - depth * 0.8 + z
        );
        buildingGroup.add(pillar);
      }
      
      // 凉亭底座
      const gazeboBaseGeometry = new THREE.CylinderGeometry(1.3, 1.3, 0.1, 8);
      const gazeboBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xbcaaa4 });
      const gazeboBase = new THREE.Mesh(gazeboBaseGeometry, gazeboBaseMaterial);
      gazeboBase.position.set(
        position.x - width * 0.8,
        position.y - university.size.height/2 + 0.05,
        position.z - depth * 0.8
      );
      buildingGroup.add(gazeboBase);
      break;
      
    case '4': // RMIT大学 - 现代艺术装置
      {
        // 创建绘画墙
        const muralGeometry = new THREE.BoxGeometry(width * 1.2, height * 0.8, 0.2);
        const muralMaterial = new THREE.MeshStandardMaterial({ color: 0xfafafa });
        const mural = new THREE.Mesh(muralGeometry, muralMaterial);
        mural.position.set(
          position.x - width * 1.2,
          position.y - university.size.height/2 + height * 0.4,
          position.z
        );
        mural.rotation.y = Math.PI / 2;
        buildingGroup.add(mural);
        
        // 在墙上添加抽象图案
        const patternGeometry = new THREE.PlaneGeometry(width * 1.1, height * 0.7);
        
        // 创建一个花哨的材质
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');
        patternCanvas.width = 256;
        patternCanvas.height = 256;
        
        // 创建彩色图案
        patternContext.fillStyle = '#ff5252';
        patternContext.fillRect(0, 0, 256, 256);
        
        // 添加几何图形
        patternContext.fillStyle = '#ffff00';
        patternContext.beginPath();
        patternContext.moveTo(128, 20);
        patternContext.lineTo(230, 230);
        patternContext.lineTo(25, 230);
        patternContext.closePath();
        patternContext.fill();
        
        patternContext.fillStyle = '#2196f3';
        patternContext.beginPath();
        patternContext.arc(180, 80, 50, 0, Math.PI * 2);
        patternContext.fill();
        
        patternContext.fillStyle = '#4caf50';
        patternContext.fillRect(20, 20, 60, 60);
        
        // Fix: Create the patternTexture from the canvas
        const patternTexture = new THREE.CanvasTexture(patternCanvas);
        
        const patternMaterial = new THREE.MeshBasicMaterial({
          map: patternTexture,
          side: THREE.DoubleSide
        });
        
        // Create the pattern mesh and add it to the building group
        const pattern = new THREE.Mesh(patternGeometry, patternMaterial);
        pattern.position.set(
          position.x - width * 1.2 - 0.11,
          position.y - university.size.height/2 + height * 0.4,
          position.z
        );
        pattern.rotation.y = Math.PI / 2;
        buildingGroup.add(pattern);
      
      // 添加几个现代座椅
      const modernSeatGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.8);
      const seatColors = [0xf44336, 0x2196f3, 0xffeb3b, 0x4caf50];
      
      for (let i = 0; i < 4; i++) {
        const seatMaterial = new THREE.MeshStandardMaterial({ color: seatColors[i] });
        const seat = new THREE.Mesh(modernSeatGeometry, seatMaterial);
        seat.position.set(
          position.x - width * 1.2 + (i - 1.5) * 1.1,
          position.y - university.size.height/2 + 0.2,
          position.z + depth * 0.8
        );
        seat.rotation.y = Math.PI / 12 * i;
        buildingGroup.add(seat);
      }
      break;
      
    case '5': // 迪肯大学 - 水景
      // 创建小池塘
      const pondGeometry = new THREE.CircleGeometry(width * 0.8, 32);
      const pondMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x0288d1,
        transparent: true,
        opacity: 0.8,
        metalness: 0.1,
        roughness: 0.2
      });
      const pond = new THREE.Mesh(pondGeometry, pondMaterial);
      pond.rotation.x = -Math.PI / 2;
      pond.position.set(
        position.x,
        position.y - university.size.height/2 + 0.02,
        position.z - depth * 1.2
      );
      buildingGroup.add(pond);
      
      // 池塘边缘
      const pondEdgeGeometry = new THREE.RingGeometry(width * 0.8, width * 0.9, 32);
      const pondEdgeMaterial = new THREE.MeshStandardMaterial({ color: 0x78909c });
      const pondEdge = new THREE.Mesh(pondEdgeGeometry, pondEdgeMaterial);
      pondEdge.rotation.x = -Math.PI / 2;
      pondEdge.position.set(
        position.x,
        position.y - university.size.height/2 + 0.03,
        position.z - depth * 1.2
      );
      buildingGroup.add(pondEdge);
      
      // 添加一些装饰石
      const numberOfRocks = 6;
      const rockGeometry = new THREE.DodecahedronGeometry(0.3);
      const rockMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x9e9e9e,
        roughness: 0.9
      });

      for (let i = 0; i < numberOfRocks; i++) {
        const angle = (i / numberOfRocks) * Math.PI * 2;
        const radius = width * 0.74;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        const rock = new THREE.Mesh(rockGeometry, rockMaterial);
        rock.position.set(
          position.x + x,
          position.y - university.size.height/2 + 0.15,
          position.z - depth * 1.2 + z
        );
        
        // 随机缩放
        const scale = 0.5 + Math.random() * 0.5;
        rock.scale.set(scale, scale, scale);
        
        // 随机旋转
        rock.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        buildingGroup.add(rock);
      }
      
      // 添加一个小喷泉
      const smallFountainGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.3, 16);
      const smallFountainMaterial = new THREE.MeshStandardMaterial({ color: 0xbdbdbd });
      const smallFountain = new THREE.Mesh(smallFountainGeometry, smallFountainMaterial);
      smallFountain.position.set(
        position.x,
        position.y - university.size.height/2 + 0.15,
        position.z - depth * 1.2
      );
      buildingGroup.add(smallFountain);
      
      // 添加水流
      const waterStreamGeometry = new THREE.ConeGeometry(0.05, 0.3, 8);
      const waterStreamMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x81d4fa,
        transparent: true,
        opacity: 0.7
      });
      const waterStream = new THREE.Mesh(waterStreamGeometry, waterStreamMaterial);
      waterStream.position.set(
        position.x,
        position.y - university.size.height/2 + 0.4,
        position.z - depth * 1.2
      );
      buildingGroup.add(waterStream);
      break;
      
    case '6': // 联邦大学 - 旗帜和纪念碑
      // 创建旗杆
      const flagpoleGeometry = new THREE.CylinderGeometry(0.05, 0.07, 5, 8);
      const flagpoleMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x9e9e9e,
        metalness: 0.7,
        roughness: 0.3
      });
      const flagpole = new THREE.Mesh(flagpoleGeometry, flagpoleMaterial);
      flagpole.position.set(
        position.x + width * 0.8,
        position.y - university.size.height/2 + 2.5,
        position.z + depth * 0.9
      );
      buildingGroup.add(flagpole);
      
      // 创建旗帜
      const flagGeometry = new THREE.PlaneGeometry(1.5, 1);
      
      // 创建旗帜纹理
      const flagCanvas = document.createElement('canvas');
      const flagContext = flagCanvas.getContext('2d');
      flagCanvas.width = 128;
      flagCanvas.height = 64;
      
      // 添加颜色和图案
      flagContext.fillStyle = '#9C27B0'; // 与大学颜色匹配
      flagContext.fillRect(0, 0, 128, 64);
      
      // 添加文字
      flagContext.fillStyle = '#FFFFFF';
      flagContext.font = 'bold 16px Arial';
      flagContext.textAlign = 'center';
      flagContext.textBaseline = 'middle';
      flagContext.fillText('Federation', 64, 20);
      flagContext.fillText('University', 64, 44);
      
      const flagTexture = new THREE.CanvasTexture(flagCanvas);
      const flagMaterial = new THREE.MeshBasicMaterial({
        map: flagTexture,
        side: THREE.DoubleSide
      });
      
      const flag = new THREE.Mesh(flagGeometry, flagMaterial);
      flag.position.set(
        position.x + width * 0.8 + 0.7,
        position.y - university.size.height/2 + 4,
        position.z + depth * 0.9
      );
      buildingGroup.add(flag);
      
      // 添加纪念碑
      const monumentBaseGeometry = new THREE.BoxGeometry(2, 0.5, 2);
      const monumentBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x455a64 });
      const monumentBase = new THREE.Mesh(monumentBaseGeometry, monumentBaseMaterial);
      monumentBase.position.set(
        position.x,
        position.y - university.size.height/2 + 0.25,
        position.z + depth * 1.2
      );
      buildingGroup.add(monumentBase);
      
      // 纪念碑柱子
      const monumentPillarGeometry = new THREE.BoxGeometry(1, 2, 1);
      const monumentPillarMaterial = new THREE.MeshStandardMaterial({ color: 0x607d8b });
      const monumentPillar = new THREE.Mesh(monumentPillarGeometry, monumentPillarMaterial);
      monumentPillar.position.set(
        position.x,
        position.y - university.size.height/2 + 1.5,
        position.z + depth * 1.2
      );
      buildingGroup.add(monumentPillar);
      
      // 顶部装饰
      const monumentTopGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const monumentTopMaterial = new THREE.MeshStandardMaterial({
        color: 0xf57f17,
        metalness: 0.6,
        roughness: 0.3
      });
      const monumentTop = new THREE.Mesh(monumentTopGeometry, monumentTopMaterial);
      monumentTop.position.set(
        position.x,
        position.y - university.size.height/2 + 3,
        position.z + depth * 1.2
      );
      buildingGroup.add(monumentTop);
      break;
      
    case '7': // 维多利亚大学 - 现代广场
      // 创建广场地面
      const plazaGeometry = new THREE.PlaneGeometry(width * 2, depth * 2);
      const plazaMaterial = new THREE.MeshStandardMaterial({ color: 0xe0e0e0 });
      const plaza = new THREE.Mesh(plazaGeometry, plazaMaterial);
      plaza.rotation.x = -Math.PI / 2;
      plaza.position.set(
        position.x,
        position.y - university.size.height/2 + 0.03,
        position.z + depth * 1.2
      );
      buildingGroup.add(plaza);
      
      // 添加装饰图案到广场
      const patternSize = 10;
      const patternGeometry = new THREE.CircleGeometry(0.3, 6);
      const patternMaterial = new THREE.MeshStandardMaterial({ color: 0x795548 });
      
      for (let i = 0; i < patternSize; i++) {
        for (let j = 0; j < patternSize; j++) {
          // 隔行隔列
          if ((i + j) % 2 === 0) {
            const pattern = new THREE.Mesh(patternGeometry, patternMaterial);
            pattern.rotation.x = -Math.PI / 2;
            pattern.position.set(
              position.x - width + i * (width * 2 / patternSize),
              position.y - university.size.height/2 + 0.04,
              position.z + j * (depth * 2 / patternSize)
            );
            buildingGroup.add(pattern);
          }
        }
      }
      
      // 添加现代风格的长椅
      for (let i = -1; i <= 1; i += 2) {
        // 长椅座位
        const benchGeometry = new THREE.BoxGeometry(2.5, 0.1, 0.6);
        const benchMaterial = new THREE.MeshStandardMaterial({
          color: 0x795548,
          roughness: 0.8
        });
        const bench = new THREE.Mesh(benchGeometry, benchMaterial);
        bench.position.set(
          position.x + i * width * 0.7,
          position.y - university.size.height/2 + 0.4,
          position.z + depth * 1.2
        );
        buildingGroup.add(bench);
        
        // 长椅腿
        for (let j = -1; j <= 1; j += 2) {
          const legGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.6);
          const legMaterial = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
          const leg = new THREE.Mesh(legGeometry, legMaterial);
          leg.position.set(
            position.x + i * width * 0.7 + j * 1.1,
            position.y - university.size.height/2 + 0.2,
            position.z + depth * 1.2
          );
          buildingGroup.add(leg);
        }
      }
      
      // 添加现代雕塑/装置 - 三角形结构
      const sculptureSize = 2;
      const sculptureHeight = 3;
      const sculptureGeometry = new THREE.ConeGeometry(sculptureSize / 2, sculptureHeight, 3);
      const sculptureMaterial = new THREE.MeshStandardMaterial({
        color: 0x795548,
        metalness: 0.2,
        roughness: 0.8
      });
      const sculpture = new THREE.Mesh(sculptureGeometry, sculptureMaterial);
      sculpture.position.set(
        position.x,
        position.y - university.size.height/2 + sculptureHeight/2,
        position.z + depth * 2
      );
      buildingGroup.add(sculpture);
      
      // 装饰雕塑
      const ringGeometry = new THREE.TorusGeometry(0.8, 0.1, 16, 32);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0x795548,
        metalness: 0.5,
        roughness: 0.5
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        position.x,
        position.y - university.size.height/2 + sculptureHeight + 0.5,
        position.z + depth * 2
      );
      ring.rotation.x = Math.PI / 2;
      buildingGroup.add(ring);
      break;
      
    default: // 默认添加一些树木和长凳
      // 添加草坪周围的灌木丛
      const numBushes = 6;
      const bushGeometry = new THREE.SphereGeometry(0.6, 8, 8);
      const bushMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x33691e,
        roughness: 0.9
      });
      
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
        
        // 稍微随机化灌木大小
        const scale = 0.8 + Math.random() * 0.4;
        bush.scale.set(scale, scale, scale);
        
        buildingGroup.add(bush);
      }
      
      // 添加通往门口的路径
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
  }
  
  // 添加默认的欢迎牌
  const signpostGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);
  const signpostMaterial = new THREE.MeshStandardMaterial({ color: 0x5d4037 });
  const signpost = new THREE.Mesh(signpostGeometry, signpostMaterial);
  signpost.position.set(
    position.x + width * 0.6,
    position.y - university.size.height/2 + 0.6,
    position.z + depth * 0.8
  );
  buildingGroup.add(signpost);
  
  // 标识牌
  const signGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.05);
  const signMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const sign = new THREE.Mesh(signGeometry, signMaterial);
  sign.position.set(
    position.x + width * 0.6,
    position.y - university.size.height/2 + 1.2,
    position.z + depth * 0.8
  );
  buildingGroup.add(sign);
  
  // 创建文本标识
  const signCanvas = document.createElement('canvas');
  const signContext = signCanvas.getContext('2d');
  signCanvas.width = 128;
  signCanvas.height = 64;
  
  // 从颜色获取十六进制值
  const hexColor = '#' + new THREE.Color(parseColor(university.color)).getHexString();
  
  signContext.fillStyle = '#FFFFFF';
  signContext.fillRect(0, 0, signCanvas.width, signCanvas.height);
  
  signContext.strokeStyle = hexColor;
  signContext.lineWidth = 4;
  signContext.strokeRect(4, 4, signCanvas.width - 8, signCanvas.height - 8);
  
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

// 创建大学建筑
export function createUniversityBuilding(scene, university) {
  const { width, height, depth } = university.size;
  const colorValue = parseColor(university.color);
  
  // 为整个建筑创建一个组
  const buildingGroup = new THREE.Group();
  buildingGroup.userData = { id: university.id, type: 'university' };
  
  // 根据大学ID添加特色
  let buildingStyle = {};
  
  // 根据大学ID或短名称确定特色风格
  switch(university.id) {
    case '1': // 墨尔本大学 - 哥特式学术建筑
      buildingStyle = {
        roofStyle: 'gothic',
        hasTowers: true,
        hasColumns: true,
        windowStyle: 'arched',
        buildingTexture: 'stone',
        campusFeature: 'clock'
      };
      break;
    
    case '2': // 莫纳什大学 - 现代风格
      buildingStyle = {
        roofStyle: 'flat',
        hasTowers: false,
        hasColumns: false,
        windowStyle: 'modern',
        buildingTexture: 'glass',
        campusFeature: 'sculpture'
      };
      break;
      
    case '3': // 拉筹伯大学 - 田园风格
      buildingStyle = {
        roofStyle: 'sloped',
        hasTowers: false,
        hasColumns: true,
        windowStyle: 'square',
        buildingTexture: 'brick',
        campusFeature: 'garden'
      };
      break;
      
    case '4': // RMIT大学 - 未来主义
      buildingStyle = {
        roofStyle: 'curved',
        hasTowers: true,
        hasColumns: false,
        windowStyle: 'large',
        buildingTexture: 'metal',
        campusFeature: 'artwork'
      };
      break;
      
    case '5': // 迪肯大学 - 现代风格带有传统元素
      buildingStyle = {
        roofStyle: 'angled',
        hasTowers: false,
        hasColumns: true,
        windowStyle: 'grid',
        buildingTexture: 'concrete',
        campusFeature: 'pond'
      };
      break;
      
    case '6': // 联邦大学 - 乡村校园风格
      buildingStyle = {
        roofStyle: 'dome',
        hasTowers: true,
        hasColumns: true,
        windowStyle: 'traditional',
        buildingTexture: 'brick',
        campusFeature: 'flag'
      };
      break;
      
    case '7': // 维多利亚大学 - 简约现代风格
      buildingStyle = {
        roofStyle: 'asymmetric',
        hasTowers: false,
        hasColumns: false,
        windowStyle: 'ribbon',
        buildingTexture: 'panel',
        campusFeature: 'plaza'
      };
      break;
      
    default: // 默认风格
      buildingStyle = {
        roofStyle: 'standard',
        hasTowers: false,
        hasColumns: false,
        windowStyle: 'square',
        buildingTexture: 'default',
        campusFeature: 'trees'
      };
  }
  
  // 创建主体建筑结构 - 根据纹理调整材质
  let buildingMaterial;
  
  switch(buildingStyle.buildingTexture) {
    case 'stone':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.9,
        bumpScale: 0.05
      });
      break;
      
    case 'glass':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.7
      });
      break;
      
    case 'brick':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.8
      });
      break;
      
    case 'metal':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.4,
        metalness: 0.8
      });
      break;
      
    case 'concrete':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.7
      });
      break;
      
    case 'panel':
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.5
      });
      break;
      
    default:
      buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.7
      });
  }
  
  // 创建主体建筑
  const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
  building.position.set(
    university.position.x, 
    university.position.y + height/2, 
    university.position.z
  );
  building.castShadow = true;
  building.receiveShadow = true;
  buildingGroup.add(building);
  
  // 添加基座/地基
  const baseGeometry = new THREE.BoxGeometry(width + 0.5, height/10, depth + 0.5);
  const baseMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color(0x888888),
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
  
  // 根据风格添加屋顶
  let roof;
  
  switch(buildingStyle.roofStyle) {
    case 'gothic': // 墨尔本大学 - 尖顶
      const gothicRoofGeometry = new THREE.ConeGeometry(width/Math.sqrt(2), height*0.7, 4);
      gothicRoofGeometry.rotateY(Math.PI/4);
      const gothicRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0x555555),
        roughness: 0.6
      });
      roof = new THREE.Mesh(gothicRoofGeometry, gothicRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height + height/3, 
        university.position.z
      );
      break;
      
    case 'flat': // 莫纳什大学 - 平顶
      const flatRoofGeometry = new THREE.BoxGeometry(width, height/10, depth);
      const flatRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0x333333),
        roughness: 0.5
      });
      roof = new THREE.Mesh(flatRoofGeometry, flatRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height + height/20, 
        university.position.z
      );
      
      // 添加太阳能板
      const solarPanelGeometry = new THREE.BoxGeometry(width*0.7, height/20, depth*0.7);
      const solarPanelMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0x1a237e),
        roughness: 0.3,
        metalness: 0.8
      });
      const solarPanel = new THREE.Mesh(solarPanelGeometry, solarPanelMaterial);
      solarPanel.position.set(
        university.position.x, 
        university.position.y + height + height/8, 
        university.position.z
      );
      buildingGroup.add(solarPanel);
      break;
      
    case 'sloped': // 拉筹伯大学 - 斜顶
      // 使用一个简单的BoxGeometry，然后手动调整顶点创建倾斜效果
      const slopedRoofGeometry = new THREE.BoxGeometry(width+0.2, height/2, depth+0.2);
      const slopedRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0x795548),
        roughness: 0.7
      });
      roof = new THREE.Mesh(slopedRoofGeometry, slopedRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height + height/4, 
        university.position.z
      );
      
      // 让屋顶前高后低
      if (slopedRoofGeometry.vertices) {
        // 旧版Three.js用vertices
        slopedRoofGeometry.vertices[0].y -= height/3;
        slopedRoofGeometry.vertices[1].y -= height/3;
        slopedRoofGeometry.verticesNeedUpdate = true;
      } else {
        // 新版Three.js需要修改BufferGeometry
        const positionAttribute = slopedRoofGeometry.getAttribute('position');
        for (let i = 0; i < positionAttribute.count; i++) {
          // 查找顶部后方的顶点
          if (positionAttribute.getY(i) > 0 && positionAttribute.getZ(i) < 0) {
            positionAttribute.setY(i, positionAttribute.getY(i) - height/3);
          }
        }
        positionAttribute.needsUpdate = true;
        slopedRoofGeometry.computeVertexNormals();
      }
      break;
      
    case 'curved': // RMIT大学 - 曲线屋顶
      const curvedRoofGeometry = new THREE.SphereGeometry(width/2, 16, 8, 0, Math.PI*2, 0, Math.PI/2);
      const curvedRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue).multiplyScalar(0.7),
        roughness: 0.4,
        metalness: 0.6
      });
      roof = new THREE.Mesh(curvedRoofGeometry, curvedRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height, 
        university.position.z
      );
      break;
      
    case 'angled': // 迪肯大学 - 角度屋顶
      const angledRoofGeometry = new THREE.BoxGeometry(width+0.3, height/3, depth+0.3);
      const angledRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0x607d8b),
        roughness: 0.6
      });
      roof = new THREE.Mesh(angledRoofGeometry, angledRoofMaterial);
      roof.rotation.z = Math.PI * 0.05;
      roof.position.set(
        university.position.x + width/10, 
        university.position.y + height + height/6, 
        university.position.z
      );
      break;
      
    case 'dome': // 联邦大学 - 圆顶
      const domeRoofGeometry = new THREE.SphereGeometry(width/2, 32, 16, 0, Math.PI*2, 0, Math.PI/2);
      const domeRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(0xf57f17),
        roughness: 0.5
      });
      roof = new THREE.Mesh(domeRoofGeometry, domeRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height, 
        university.position.z
      );
      break;
      
    case 'asymmetric': // 维多利亚大学 - 不对称屋顶
      const asymmetricRoofGeometry = new THREE.BoxGeometry(width, height/3, depth);
      const asymmetricRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue).multiplyScalar(1.3),
        roughness: 0.5
      });
      roof = new THREE.Mesh(asymmetricRoofGeometry, asymmetricRoofMaterial);
      roof.rotation.z = Math.PI * 0.08;
      roof.rotation.x = Math.PI * 0.02;
      roof.position.set(
        university.position.x - width/8, 
        university.position.y + height + height/6, 
        university.position.z
      );
      break;
      
    default: // 标准屋顶
      const standardRoofGeometry = new THREE.ConeGeometry(width/Math.sqrt(2) + 0.5, height/2, 4);
      standardRoofGeometry.rotateY(Math.PI/4);
      const standardRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue).multiplyScalar(1.2),
        roughness: 0.6
      });
      roof = new THREE.Mesh(standardRoofGeometry, standardRoofMaterial);
      roof.position.set(
        university.position.x, 
        university.position.y + height + height/4, 
        university.position.z
      );
  }
  
  roof.castShadow = true;
  buildingGroup.add(roof);
  
  // 根据风格添加窗户
  const windowFrameMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5
  });
// 根据大学调整窗户颜色和样式
  let windowMaterial;
  
  switch(university.id) {
    case '1': // 墨尔本大学 - 蓝绿色玻璃
      windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x4db6ac,
        roughness: 0.2,
        metalness: 0.5
      });
      break;
      
    case '2': // 莫纳什大学 - 深蓝色玻璃
      windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1976d2,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.8
      });
      break;
      
    case '4': // RMIT - 红色调玻璃
      windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xef5350,
        roughness: 0.2,
        metalness: 0.5
      });
      break;
      
    default: // 默认浅蓝色玻璃
      windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xbbdefb,
        roughness: 0.2,
        metalness: 0.5
      });
  }
  
  // 窗户尺寸
  const windowWidth = width * 0.15;
  const windowHeight = height * 0.2;
  const windowDepth = 0.1;
  
  // 添加窗户 - 风格基于buildingStyle.windowStyle
  switch(buildingStyle.windowStyle) {
    case 'arched': // 拱形窗户 - 墨尔本大学
      // 前面的窗户
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 3; col++) {
          // 使用辅助函数创建拱形窗框
          const frame = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth + 0.1, windowHeight + 0.1, windowDepth),
            windowFrameMaterial
          );
          frame.position.set(
            university.position.x + (col - 1) * windowWidth * 1.5,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + depth/2 + 0.01
          );
          buildingGroup.add(frame);
          
          // 窗玻璃
          const glass = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth, windowHeight, windowDepth, false),
            windowMaterial
          );
          glass.position.set(
            university.position.x + (col - 1) * windowWidth * 1.5,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + depth/2 + 0.02
          );
          buildingGroup.add(glass);
        }
      }
      
      // 侧面的窗户
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
          // 左侧
          const leftFrame = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth + 0.1, windowHeight + 0.1, windowDepth),
            windowFrameMaterial
          );
          leftFrame.position.set(
            university.position.x - width/2 - 0.01,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + (col - 0.5) * windowWidth * 1.5
          );
          leftFrame.rotation.y = Math.PI / 2;
          buildingGroup.add(leftFrame);
          
          const leftGlass = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth, windowHeight, windowDepth, false),
            windowMaterial
          );
          leftGlass.position.set(
            university.position.x - width/2 - 0.02,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + (col - 0.5) * windowWidth * 1.5
          );
          leftGlass.rotation.y = Math.PI / 2;
          buildingGroup.add(leftGlass);
          
          // 右侧
          const rightFrame = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth + 0.1, windowHeight + 0.1, windowDepth),
            windowFrameMaterial
          );
          rightFrame.position.set(
            university.position.x + width/2 + 0.01,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + (col - 0.5) * windowWidth * 1.5
          );
          rightFrame.rotation.y = Math.PI / 2;
          buildingGroup.add(rightFrame);
          
          const rightGlass = new THREE.Mesh(
            createArchedWindowGeometry(windowWidth, windowHeight, windowDepth, false),
            windowMaterial
          );
          rightGlass.position.set(
            university.position.x + width/2 + 0.02,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + (col - 0.5) * windowWidth * 1.5
          );
          rightGlass.rotation.y = Math.PI / 2;
          buildingGroup.add(rightGlass);
        }
      }
      break;
      
    case 'modern': // 现代大窗户 - 莫纳什大学
      // 大型玻璃幕墙
      const frontGlassGeometry = new THREE.BoxGeometry(width * 0.8, height * 0.7, 0.1);
      const frontGlass = new THREE.Mesh(frontGlassGeometry, windowMaterial);
      frontGlass.position.set(
        university.position.x,
        university.position.y + height * 0.1,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(frontGlass);
      
      // 添加玻璃幕墙网格
      const gridSize = 6;
      const gridWidth = width * 0.8 / gridSize;
      const gridHeight = height * 0.7 / gridSize;
      
      for (let i = 0; i <= gridSize; i++) {
        // 水平线
        const hLineGeometry = new THREE.BoxGeometry(width * 0.8, 0.05, 0.12);
        const hLine = new THREE.Mesh(hLineGeometry, windowFrameMaterial);
        hLine.position.set(
          university.position.x,
          university.position.y - height * 0.25 + i * gridHeight,
          university.position.z + depth/2 + 0.03
        );
        buildingGroup.add(hLine);
        
        // 垂直线
        const vLineGeometry = new THREE.BoxGeometry(0.05, height * 0.7, 0.12);
        const vLine = new THREE.Mesh(vLineGeometry, windowFrameMaterial);
        vLine.position.set(
          university.position.x - width * 0.4 + i * gridWidth,
          university.position.y + height * 0.1,
          university.position.z + depth/2 + 0.03
        );
        buildingGroup.add(vLine);
      }
      
      // 侧面也加一些窗户
      const sideGlassGeometry = new THREE.BoxGeometry(0.1, height * 0.5, depth * 0.6);
      
      // 左侧玻璃
      const leftSideGlass = new THREE.Mesh(sideGlassGeometry, windowMaterial);
      leftSideGlass.position.set(
        university.position.x - width/2 - 0.02,
        university.position.y + height * 0.1,
        university.position.z
      );
      buildingGroup.add(leftSideGlass);
      
      // 右侧玻璃
      const rightSideGlass = new THREE.Mesh(sideGlassGeometry, windowMaterial);
      rightSideGlass.position.set(
        university.position.x + width/2 + 0.02,
        university.position.y + height * 0.1,
        university.position.z
      );
      buildingGroup.add(rightSideGlass);
      break;
      
    case 'ribbon': // 条形窗 - 维多利亚大学
      // 创建前面的条形窗
      const ribbonHeight = height * 0.15;
      for (let row = 0; row < 3; row++) {
        // 窗框
        const frameGeometry = new THREE.BoxGeometry(width * 0.9, ribbonHeight + 0.1, 0.1);
        const frame = new THREE.Mesh(frameGeometry, windowFrameMaterial);
        frame.position.set(
          university.position.x,
          university.position.y - height * 0.2 + row * ribbonHeight * 1.5,
          university.position.z + depth/2 + 0.01
        );
        buildingGroup.add(frame);
        
        // 窗玻璃
        const glassGeometry = new THREE.BoxGeometry(width * 0.88, ribbonHeight, 0.1);
        const glass = new THREE.Mesh(glassGeometry, windowMaterial);
        glass.position.set(
          university.position.x,
          university.position.y - height * 0.2 + row * ribbonHeight * 1.5,
          university.position.z + depth/2 + 0.02
        );
        buildingGroup.add(glass);
        
        // 添加一些垂直分隔
        for (let i = -2; i <= 2; i++) {
          const dividerGeometry = new THREE.BoxGeometry(0.05, ribbonHeight, 0.12);
          const divider = new THREE.Mesh(dividerGeometry, windowFrameMaterial);
          divider.position.set(
            university.position.x + i * (width * 0.88 / 5),
            university.position.y - height * 0.2 + row * ribbonHeight * 1.5,
            university.position.z + depth/2 + 0.03
          );
          buildingGroup.add(divider);
        }
      }
      break;
      
    case 'large': // RMIT - 大型不规则窗户
      // 创建一个自定义形状
      const largeWindowShape = new THREE.Shape();
      largeWindowShape.moveTo(-width * 0.35, -height * 0.25);
      largeWindowShape.lineTo(width * 0.35, -height * 0.25);
      largeWindowShape.lineTo(width * 0.25, height * 0.25);
      largeWindowShape.lineTo(-width * 0.25, height * 0.25);
      largeWindowShape.lineTo(-width * 0.35, -height * 0.25);
      
      const largeWindowGeometry = new THREE.ShapeGeometry(largeWindowShape);
      const largeWindow = new THREE.Mesh(largeWindowGeometry, windowMaterial);
      largeWindow.position.set(
        university.position.x,
        university.position.y + height * 0.1,
        university.position.z + depth/2 + 0.03
      );
      buildingGroup.add(largeWindow);
      
      // 为大窗户添加边框
      const largeWindowEdges = new THREE.EdgesGeometry(largeWindowGeometry);
      const largeWindowFrame = new THREE.LineSegments(
        largeWindowEdges,
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
      );
      largeWindowFrame.position.set(
        university.position.x,
        university.position.y + height * 0.1,
        university.position.z + depth/2 + 0.04
      );
      buildingGroup.add(largeWindowFrame);
      break;
      
    default: // 常规矩形窗户
      // 添加前面的窗户
      for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 3; col++) {
          // 窗框
          const frameGeometry = new THREE.BoxGeometry(windowWidth + 0.1, windowHeight + 0.1, windowDepth);
          const frame = new THREE.Mesh(frameGeometry, windowFrameMaterial);
          frame.position.set(
            university.position.x + (col - 1) * windowWidth * 1.5,
            university.position.y + height * 0.1 + row * windowHeight * 1.5,
            university.position.z + depth/2 + 0.01
          );
          buildingGroup.add(frame);
          
          // 窗玻璃
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
  }
  
  // 添加立柱特色
  if (buildingStyle.hasColumns) {
    const columnPositions = [];
    
    if (university.id === '1') { // 墨尔本大学 - 华丽的立柱
      // 前门廊立柱
      for (let i = -2; i <= 2; i++) {
        columnPositions.push([
          university.position.x + i * (width/5),
          university.position.y,
          university.position.z + depth/2 + 0.5
        ]);
      }
      
      // 使用华丽的科林斯式立柱
      columnPositions.forEach(pos => {
        const columnGeometry = new THREE.CylinderGeometry(0.25, 0.3, height * 0.8, 16);
        const columnMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xeceff1,
          roughness: 0.6
        });
        const column = new THREE.Mesh(columnGeometry, columnMaterial);
        column.position.set(pos[0], pos[1], pos[2]);
        buildingGroup.add(column);
        
        // 添加柱顶
        const capitalGeometry = new THREE.CylinderGeometry(0.4, 0.3, 0.25, 16);
        const capital = new THREE.Mesh(capitalGeometry, columnMaterial);
        capital.position.set(pos[0], pos[1] + height * 0.4, pos[2]);
        buildingGroup.add(capital);
        
        // 添加柱基
        const baseGeometry = new THREE.CylinderGeometry(0.35, 0.4, 0.25, 16);
        const base = new THREE.Mesh(baseGeometry, columnMaterial);
        base.position.set(pos[0], pos[1] - height * 0.4, pos[2]);
        buildingGroup.add(base);
      });
      
    } else if (university.id === '5') { // 迪肯大学 - 现代风格立柱
      // 前方的立柱，较少、较细
      for (let i = -1; i <= 1; i += 2) {
        columnPositions.push([
          university.position.x + i * (width/3),
          university.position.y,
          university.position.z + depth/2 + 0.3
        ]);
      }
      
      // 现代、简约的立柱
      columnPositions.forEach(pos => {
        const columnGeometry = new THREE.BoxGeometry(0.3, height * 0.9, 0.3);
        const columnMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x90a4ae,
          roughness: 0.5
        });
        const column = new THREE.Mesh(columnGeometry, columnMaterial);
        column.position.set(pos[0], pos[1], pos[2]);
        buildingGroup.add(column);
      });
      
    } else if (university.id === '6') { // 联邦大学 - 传统立柱
      // 四周立柱
      for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
          columnPositions.push([
            university.position.x + i * (width/2 - 0.3),
            university.position.y,
            university.position.z + j * (depth/2 - 0.3)
          ]);
        }
      }
      
      // 传统风格立柱
      columnPositions.forEach(pos => {
        const columnGeometry = new THREE.CylinderGeometry(0.2, 0.25, height * 0.9, 12);
        const columnMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xd7ccc8,
          roughness: 0.7
        });
        const column = new THREE.Mesh(columnGeometry, columnMaterial);
        column.position.set(pos[0], pos[1], pos[2]);
        buildingGroup.add(column);
        
        // 简单的柱顶
        const topGeometry = new THREE.BoxGeometry(0.4, 0.15, 0.4);
        const top = new THREE.Mesh(topGeometry, columnMaterial);
        top.position.set(pos[0], pos[1] + height * 0.45, pos[2]);
        buildingGroup.add(top);
        
        // 简单的柱基
        const baseGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.5);
        const base = new THREE.Mesh(baseGeometry, columnMaterial);
        base.position.set(pos[0], pos[1] - height * 0.45, pos[2]);
        buildingGroup.add(base);
      });
    } else { // 默认立柱
      // 前门立柱
      for (let i = -1; i <= 1; i += 2) {
        columnPositions.push([
          university.position.x + i * (width/3),
          university.position.y,
          university.position.z + depth/2 + 0.3
        ]);
      }
      
      // 标准立柱
      columnPositions.forEach(pos => {
        const columnGeometry = new THREE.CylinderGeometry(0.2, 0.2, height * 0.9, 8);
        const columnMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xe0e0e0,
          roughness: 0.6
        });
        const column = new THREE.Mesh(columnGeometry, columnMaterial);
        column.position.set(pos[0], pos[1], pos[2]);
        buildingGroup.add(column);
      });
    }
  }
  
  // 添加塔楼特色
  if (buildingStyle.hasTowers) {
    if (university.id === '1') { // 墨尔本大学 - 哥特式塔楼
      // 主塔楼
      const mainTowerGeometry = new THREE.BoxGeometry(width/4, height * 1.2, width/4);
      const mainTowerMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue).multiplyScalar(0.8),
        roughness: 0.8
      });
      const mainTower = new THREE.Mesh(mainTowerGeometry, mainTowerMaterial);
      mainTower.position.set(
        university.position.x + width/2 - width/8,
        university.position.y + height * 0.6,
        university.position.z + depth/2 - depth/8
      );
      buildingGroup.add(mainTower);
      
      // 塔楼尖顶
      const towerSpireGeometry = new THREE.ConeGeometry(width/8, height * 0.6, 4);
      const towerSpireMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x455a64,
        roughness: 0.6
      });
      const towerSpire = new THREE.Mesh(towerSpireGeometry, towerSpireMaterial);
      towerSpire.position.set(
        university.position.x + width/2 - width/8,
        university.position.y + height * 1.7,
        university.position.z + depth/2 - depth/8
      );
      buildingGroup.add(towerSpire);
      
      // 塔楼窗户
      const towerWindowGeometry = new THREE.BoxGeometry(width/8, height * 0.2, 0.1);
      const towerWindow = new THREE.Mesh(towerWindowGeometry, windowMaterial);
      towerWindow.position.set(
        university.position.x + width/2 - width/8,
        university.position.y + height * 0.8,
        university.position.z + depth/2 - depth/8 + width/8 + 0.01
      );
      buildingGroup.add(towerWindow);
      
      // 窗框
      const towerWindowFrameGeometry = new THREE.BoxGeometry(width/8 + 0.05, height * 0.2 + 0.05, 0.08);
      const towerWindowFrame = new THREE.Mesh(towerWindowFrameGeometry, windowFrameMaterial);
      towerWindowFrame.position.set(
        university.position.x + width/2 - width/8,
        university.position.y + height * 0.8,
        university.position.z + depth/2 - depth/8 + width/8 + 0.02
      );
      buildingGroup.add(towerWindowFrame);
      
      // 墨尔本大学特色 - 大钟
      if (buildingStyle.campusFeature === 'clock') {
        // 时钟表面
        const clockGeometry = new THREE.CircleGeometry(width/10, 32);
        
        // 创建时钟纹理
        const clockCanvas = document.createElement('canvas');
        const clockContext = clockCanvas.getContext('2d');
        clockCanvas.width = 128;
        clockCanvas.height = 128;
        
        // 绘制时钟表面
        clockContext.fillStyle = '#FFFFFF';
        clockContext.beginPath();
        clockContext.arc(64, 64, 60, 0, Math.PI * 2);
        clockContext.fill();
        
        // 绘制时钟边框
        clockContext.strokeStyle = '#000000';
        clockContext.lineWidth = 3;
        clockContext.beginPath();
        clockContext.arc(64, 64, 60, 0, Math.PI * 2);
        clockContext.stroke();
        
        // 绘制时钟数字
        clockContext.fillStyle = '#000000';
        clockContext.font = 'bold 16px Arial';
        clockContext.textAlign = 'center';
        clockContext.textBaseline = 'middle';
        for (let i = 1; i <= 12; i++) {
          const angle = (i - 3) * (Math.PI / 6);
          const x = 64 + Math.cos(angle) * 45;
          const y = 64 + Math.sin(angle) * 45;
          clockContext.fillText(i.toString(), x, y);
        }
        
        // 绘制时钟指针
        clockContext.strokeStyle = '#000000';
        clockContext.lineWidth = 2;
        // 时针
        clockContext.beginPath();
        clockContext.moveTo(64, 64);
        clockContext.lineTo(64 + 25, 64);
        clockContext.stroke();
        // 分针
        clockContext.lineWidth = 1;
        clockContext.beginPath();
        clockContext.moveTo(64, 64);
        clockContext.lineTo(64, 64 - 35);
        clockContext.stroke();
        
        const clockTexture = new THREE.CanvasTexture(clockCanvas);
        const clockMaterial = new THREE.MeshBasicMaterial({ map: clockTexture });
        
        const clock = new THREE.Mesh(clockGeometry, clockMaterial);
        clock.position.set(
          university.position.x + width/2 - width/8,
          university.position.y + height * 1.2,
          university.position.z + depth/2 - depth/8 + width/8 + 0.03
        );
        buildingGroup.add(clock);
      }
      
    } else if (university.id === '4') { // RMIT - 现代塔楼
      // 主塔楼 - 细长形
      const modernTowerGeometry = new THREE.CylinderGeometry(width/10, width/8, height * 1.5, 8);
      const modernTowerMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xd32f2f, // RMIT红色
        metalness: 0.7,
        roughness: 0.3
      });
      const modernTower = new THREE.Mesh(modernTowerGeometry, modernTowerMaterial);
      modernTower.position.set(
        university.position.x - width/2 + width/10,
        university.position.y + height * 0.75,
        university.position.z - depth/2 + depth/10
      );
      buildingGroup.add(modernTower);
      
      // 塔顶装饰
      const towerTopGeometry = new THREE.SphereGeometry(width/7, 16, 16);
      const towerTopMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf44336,
        metalness: 0.8,
        roughness: 0.2
      });
      const towerTop = new THREE.Mesh(towerTopGeometry, towerTopMaterial);
      towerTop.position.set(
        university.position.x - width/2 + width/10,
        university.position.y + height * 1.5,
        university.position.z - depth/2 + depth/10
      );
      buildingGroup.add(towerTop);
      
      // 塔楼连接结构 - 桥梁
      const bridgeGeometry = new THREE.BoxGeometry(width/2, height/10, width/8);
      const bridgeMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x616161,
        metalness: 0.6,
        roughness: 0.4
      });
      const bridge = new THREE.Mesh(bridgeGeometry, bridgeMaterial);
      bridge.position.set(
        university.position.x - width/4,
        university.position.y + height/2,
        university.position.z - depth/2 + depth/10
      );
      buildingGroup.add(bridge);
      
    } else if (university.id === '6') { // 联邦大学 - 传统塔楼
      // 中央塔楼 - 钟楼风格
      const tradTowerGeometry = new THREE.BoxGeometry(width/3, height * 1.3, width/3);
      const tradTowerMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue),
        roughness: 0.7
      });
      const tradTower = new THREE.Mesh(tradTowerGeometry, tradTowerMaterial);
      tradTower.position.set(
        university.position.x,
        university.position.y + height * 0.65,
        university.position.z - depth/2 + width/6
      );
      buildingGroup.add(tradTower);
      
      // 传统风格的塔顶
      const tradTowerRoofGeometry = new THREE.ConeGeometry(width/3 * 0.8, height * 0.5, 4);
      tradTowerRoofGeometry.rotateY(Math.PI/4);
      const tradTowerRoofMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf57f17, // 暖色调
        roughness: 0.6
      });
      const tradTowerRoof = new THREE.Mesh(tradTowerRoofGeometry, tradTowerRoofMaterial);
      tradTowerRoof.position.set(
        university.position.x,
        university.position.y + height * 1.3,
        university.position.z - depth/2 + width/6
      );
      buildingGroup.add(tradTowerRoof);
      
      // 钟楼窗口
      for (let i = -1; i <= 1; i += 2) {
        const towerWindowGeometry = new THREE.BoxGeometry(0.1, height * 0.25, width/6);
        const towerWindow = new THREE.Mesh(towerWindowGeometry, windowMaterial);
        towerWindow.position.set(
          university.position.x + i * (width/6 + 0.05),
          university.position.y + height * 0.75,
          university.position.z - depth/2 + width/6
        );
        buildingGroup.add(towerWindow);
        
        // 窗框
        const towerFrameGeometry = new THREE.BoxGeometry(0.12, height * 0.25 + 0.05, width/6 + 0.05);
        const towerFrame = new THREE.Mesh(towerFrameGeometry, windowFrameMaterial);
        towerFrame.position.set(
          university.position.x + i * (width/6 + 0.05),
          university.position.y + height * 0.75,
          university.position.z - depth/2 + width/6
        );
        buildingGroup.add(towerFrame);
      }
    }
  }
  
  // 添加门
  const doorWidth = width * 0.25;
  const doorHeight = height * 0.4;
  
  // 门框
// 门框
  const doorFrameGeometry = new THREE.BoxGeometry(doorWidth + 0.2, doorHeight + 0.2, depth * 0.1);
  const doorFrameMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    roughness: 0.5
  });
  const doorFrame = new THREE.Mesh(doorFrameGeometry, doorFrameMaterial);
  doorFrame.position.set(
    university.position.x,
    university.position.y - height * 0.05,
    university.position.z + depth/2 + 0.01
  );
  buildingGroup.add(doorFrame);
  
  // 自定义大学门的颜色和样式
  let doorMaterial;
  let doorGeometry;
  
  switch(university.id) {
    case '1': // 墨尔本大学 - 木质双门
      doorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x5d4037, // 深木色
        roughness: 0.8
      });
      
      // 双门（两个门板）
      for (let i = -1; i <= 1; i += 2) {
        doorGeometry = new THREE.BoxGeometry(doorWidth/2 - 0.05, doorHeight, depth * 0.1);
        const doorPart = new THREE.Mesh(doorGeometry, doorMaterial);
        doorPart.position.set(
          university.position.x + i * doorWidth/4,
          university.position.y - height * 0.05,
          university.position.z + depth/2 + 0.02
        );
        buildingGroup.add(doorPart);
        
        // 门把手
        const handleGeometry = new THREE.SphereGeometry(0.08, 8, 8);
        const handleMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xffd700, // 金色
          metalness: 0.8,
          roughness: 0.2
        });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(
          university.position.x + i * (doorWidth/4 - 0.1),
          university.position.y - height * 0.05,
          university.position.z + depth/2 + 0.08
        );
        buildingGroup.add(handle);
      }
      break;
      
    case '2': // 莫纳什大学 - 现代玻璃门
      doorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x2196f3,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.7
      });
      doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, depth * 0.05);
      const glassDoor = new THREE.Mesh(doorGeometry, doorMaterial);
      glassDoor.position.set(
        university.position.x,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(glassDoor);
      
      // 金属框架
      const frameEdgesGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(doorWidth, doorHeight, depth * 0.06));
      const frameEdges = new THREE.LineSegments(
        frameEdgesGeometry,
        new THREE.LineBasicMaterial({ color: 0x9e9e9e })
      );
      frameEdges.position.set(
        university.position.x,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(frameEdges);
      
      // 现代把手 - 垂直长条
      const modernHandleGeometry = new THREE.BoxGeometry(0.05, doorHeight * 0.5, 0.08);
      const modernHandleMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x9e9e9e,
        metalness: 0.9,
        roughness: 0.1
      });
      const modernHandle = new THREE.Mesh(modernHandleGeometry, modernHandleMaterial);
      modernHandle.position.set(
        university.position.x + doorWidth/4,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.08
      );
      buildingGroup.add(modernHandle);
      break;
      
    case '4': // RMIT - 红色现代门
      doorMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xd32f2f, // RMIT红色
        roughness: 0.4,
        metalness: 0.6
      });
      doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, depth * 0.08);
      const redDoor = new THREE.Mesh(doorGeometry, doorMaterial);
      redDoor.position.set(
        university.position.x,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(redDoor);
      
      // 特色把手 - 圆形
      const circleHandleGeometry = new THREE.TorusGeometry(0.15, 0.03, 16, 32);
      const circleHandleMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xfafafa,
        metalness: 0.7,
        roughness: 0.3
      });
      const circleHandle = new THREE.Mesh(circleHandleGeometry, circleHandleMaterial);
      circleHandle.position.set(
        university.position.x + doorWidth/4,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.1
      );
      circleHandle.rotation.y = Math.PI / 2;
      buildingGroup.add(circleHandle);
      break;
      
    default: // 默认门
      doorMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(colorValue).multiplyScalar(0.9),
        roughness: 0.4
      });
      doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, depth * 0.1);
      const door = new THREE.Mesh(doorGeometry, doorMaterial);
      door.position.set(
        university.position.x,
        university.position.y - height * 0.05,
        university.position.z + depth/2 + 0.02
      );
      buildingGroup.add(door);
      
      // 添加默认门把手
      const knobGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const knobMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xd4af37, // 金色
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
  }
  
  // 添加台阶
  const stepsMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xcccccc,
    roughness: 0.8
  });
  
  // 三个宽度递增的台阶
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
  
  // 如果已访问，添加标记
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
  
  // 创建大学名称标签
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 128;
  
  // 获取大学颜色的十六进制值
  const hexColor = '#' + new THREE.Color(colorValue).getHexString();
  
  // 创建带有大学颜色的更好看的名称标签
  context.fillStyle = '#FFFFFF';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // 添加大学颜色的边框
  context.strokeStyle = hexColor;
  context.lineWidth = 8;
  context.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
  
  // 添加带有更好排版的大学名称
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
  
  // 添加建筑周围的特色景观
  addUniversityLandscaping(scene, university, buildingGroup);
  
  scene.add(buildingGroup);
  return buildingGroup;
}

export function createPlayer(scene) {
  const player = new THREE.Group();
  
  // 头部
  const headGeometry = new THREE.BoxGeometry(1, 1, 1);
  const headMaterial = new THREE.MeshStandardMaterial({ color: 0xffe082 });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  head.position.y = 1.5;
  head.castShadow = true;
  player.add(head);
  
  // 身体
  const bodyGeometry = new THREE.BoxGeometry(0.8, 1, 0.5);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffeb3b });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.y = 0.5;
  body.castShadow = true;
  player.add(body);
  
  // 左腿
  const leftLegGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.4);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
  const leftLeg = new THREE.Mesh(leftLegGeometry, legMaterial);
  leftLeg.position.set(-0.2, -0.4, 0);
  leftLeg.castShadow = true;
  player.add(leftLeg);
  
  // 右腿
  const rightLegGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.4);
  const rightLeg = new THREE.Mesh(rightLegGeometry, legMaterial);
  rightLeg.position.set(0.2, -0.4, 0);
  rightLeg.castShadow = true;
  player.add(rightLeg);
  
  // 标签 - "YOU"
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
  
  // 添加一个小光源跟随玩家，使玩家在黑暗环境中也可见
  const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
  pointLight.position.set(0, 2, 0);
  player.add(pointLight);
  
  // 设置初始位置在屏幕中央附近
  player.position.set(0, 0, 0);
  player.name = 'player';
  
  scene.add(player);
  
  return player;
}

// 交互提示 - 改进版本
export function createInteractionPrompt(scene, position, text) {
  // 为文本纹理创建画布
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // 设置画布尺寸
  canvas.width = 512;
  canvas.height = 128;
  
  // 创建半透明的白色背景
  context.fillStyle = 'rgba(255, 255, 255, 0.85)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // 添加蓝色边框以提高可见度
  context.strokeStyle = '#2196f3';
  context.lineWidth = 4;
  context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
  
  // 设置带阴影的文本样式以提高可读性
  context.font = 'bold 36px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.shadowColor = 'rgba(0, 0, 0, 0.3)';
  context.shadowBlur = 4;
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.fillStyle = '#1a237e'; // 深蓝色文本
  
  // 绘制文本
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  
  // 使用画布纹理创建精灵
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ 
    map: texture,
    transparent: true,
    // 关键设置，使标签始终可见
    sizeAttenuation: false,
    depthTest: false
  });
  
  const sprite = new THREE.Sprite(material);
  
  // 设置位置
  sprite.position.copy(position);
  
  // 调整大小以提高可见度（根据需要调整）
  sprite.scale.set(8, 2, 1);
  
  // 添加到场景
  scene.add(sprite);
  
  return sprite;
}