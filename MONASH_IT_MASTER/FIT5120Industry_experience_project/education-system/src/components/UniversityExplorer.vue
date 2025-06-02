<!-- components/UniversityExplorer.vue -->
<template>
  <div class="university-explorer">
    <div
      ref="threeContainer"
      class="three-container"
      @mousemove="onMouseMove"
      @click="onClick"
    ></div>
    

    
    <!-- University Information Panel -->
    <UniversityInfo
      v-if="currentUniversity"
      :university="currentUniversity"
      @watch-video="showVideoModal = true"
      @view-all-courses="viewAllCourses"
    />
    
    <!-- Video Modal -->
    <VideoModal
      v-if="showVideoModal && currentUniversity"
      :university="currentUniversity"
      @close="showVideoModal = false"
    />
    
    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      <button class="nav-btn active">Map</button>
      <button class="nav-btn">Courses</button>
      <button class="nav-btn">Settings</button>
    </div>
    
    <!-- Control Instructions -->
    <div class="controls-info">
      <p>W/A/S/D - Move | Click - Interact | Mouse Drag - Rotate View</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed, watch, markRaw } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { universities } from '../data/universities';
import { 
  createScene, 
  createUniversityBuilding, 
  createPlayer, 
  createInteractionPrompt 
} from '../utils/three-utils';
import UniversityInfo from './UniversityInfo.vue';
import VideoModal from './VideoModal.vue';

export default {
  name: 'UniversityExplorer',
  components: {
    UniversityInfo,
    VideoModal
  },
  setup() {
    // References and State
    const threeContainer = ref(null);
    const threeEnv = ref(null);
    const player = ref(null);
    const universityBuildings = ref([]);
    const currentUniversity = ref(null);
    const showVideoModal = ref(false);
    const interactionPrompt = ref(null);
    const hoveredUniversity = ref(null);
    const notifications = ref(3);
    
    // Animation Frame Request ID
    let animationFrameId = null;
    
    // Keyboard Controls
    const keys = {
      w: false,
      a: false,
      s: false,
      d: false,
      ArrowUp: false,    // Add arrow key support
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };
        
    // Computed Properties
    const visitedUniversities = computed(() => 
      universities.filter(uni => uni.visited).length
    );
    
    const totalCourses = computed(() => 
      universities.reduce((total, uni) => total + uni.courses.length, 0)
    );
    
    const discoveredCourses = computed(() => {
      // In a real application, this would be calculated from state
      // Here, assume 5 courses discovered
      return 5;
    });
    
    const watchedVideos = computed(() => {
      // In a real application, this would be calculated from state
      // Here, assume 1 video watched
      return 1;
    });
    
    // Handle Mouse Move - Use non-reactive handling
    const onMouseMove = (event) => {
      if (!threeEnv.value) return;
      
      const rect = threeContainer.value.getBoundingClientRect();
      
      // Set values directly, bypassing Vue's reactivity
      const mouseX = ((event.clientX - rect.left) / threeContainer.value.clientWidth) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / threeContainer.value.clientHeight) * 2 + 1;
      
      threeEnv.value.mouse.x = mouseX;
      threeEnv.value.mouse.y = mouseY;
      
      checkIntersections();
    };
    
    // Check Mouse Intersections with Objects - Optimize Three.js handling
    const checkIntersections = () => {
      if (!threeEnv.value || !player.value) return;
      
      // Create a one-time flattened array to avoid recalculation
      const objectsToIntersect = [];
      universityBuildings.value.forEach(building => {
        building.children.forEach(child => {
          objectsToIntersect.push(child);
        });
      });
      
      // Set raycaster
      threeEnv.value.raycaster.setFromCamera(threeEnv.value.mouse, threeEnv.value.camera);
      
      // Calculate intersections
      const intersects = threeEnv.value.raycaster.intersectObjects(objectsToIntersect, true);
      
      // Reset previously hovered university
      if (hoveredUniversity.value) {
        const prevBuilding = universityBuildings.value.find(
          b => b.userData.id === hoveredUniversity.value.id
        );
        if (prevBuilding) {
          // Restore original scale
          gsap.to(prevBuilding.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        }
        hoveredUniversity.value = null;
      }
      
      // Handle new intersections
      if (intersects.length > 0) {
        let buildingParent = null;
        
        // Find the first parent group that is a university building
        for (const intersect of intersects) {
          let obj = intersect.object;
          while (obj.parent && !obj.userData.type) {
            obj = obj.parent;
          }
          
          if (obj.userData && obj.userData.type === 'university') {
            buildingParent = obj;
            break;
          }
        }
        
        if (buildingParent) {
          const uniId = buildingParent.userData.id;
          const university = universities.find(u => u.id === uniId);
          
          if (university) {
            hoveredUniversity.value = university;
            
            // Slightly scale up the building to indicate hover
            gsap.to(buildingParent.scale, { x: 1.05, y: 1.05, z: 1.05, duration: 0.3 });
            
            // Show interaction prompt
            if (interactionPrompt.value) {
              threeEnv.value.scene.remove(interactionPrompt.value);
            }
            
            interactionPrompt.value = createInteractionPrompt(
              threeEnv.value.scene,
              new THREE.Vector3(
                university.position.x,
                university.position.y + university.size.height + 20,
                university.position.z
              ),
              `Click to view ${university.name}`
            );
          }
        } else if (interactionPrompt.value) {
          // Remove prompt if not hovering over a building
          threeEnv.value.scene.remove(interactionPrompt.value);
          interactionPrompt.value = null;
        }
      } else if (interactionPrompt.value) {
        // Remove prompt if no intersections
        threeEnv.value.scene.remove(interactionPrompt.value);
        interactionPrompt.value = null;
      }
    };
    
    // Handle Click
    const onClick = (event) => {
      if (hoveredUniversity.value) {
        // Set the currently selected university
        currentUniversity.value = hoveredUniversity.value;
        
        // Focus the camera on the selected university
        if (threeEnv.value) {
          const uni = hoveredUniversity.value;
          
          // Calculate new camera position
          const targetPosition = new THREE.Vector3(
            uni.position.x,
            uni.position.y + uni.size.height * 2,
            uni.position.z + 15
          );
          
          // Animate transition to new camera position
          gsap.to(threeEnv.value.camera.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
              // Ensure camera always looks at the university building
              threeEnv.value.camera.lookAt(
                new THREE.Vector3(uni.position.x, uni.position.y, uni.position.z)
              );
            }
          });
          
          // Move player in front of the university building
          gsap.to(player.value.position, {
            x: uni.position.x,
            z: uni.position.z + 5,
            duration: 1.5,
            ease: "power2.inOut"
          });
          
          // Mark as visited
          if (!uni.visited) {
            // In a real application, this should update the data state
            // This is just an example, not actually updating data
            console.log(`Mark ${uni.name} as visited`);
            
            // Add visited marker
            const visitedGeometry = new THREE.SphereGeometry(0.5, 16, 16);
            const visitedMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
            const visitedMarker = new THREE.Mesh(visitedGeometry, visitedMaterial);
            
            const building = universityBuildings.value.find(b => b.userData.id === uni.id);
            
            if (building) {
              visitedMarker.position.set(
                uni.position.x + uni.size.width/2 - 0.5,
                uni.position.y + uni.size.height/2 + 0.5,
                uni.position.z + uni.size.depth/2 + 0.5
              );
              building.add(visitedMarker);
            }
          }
        }
      }
    };
    
    // Handle Key Down
    const onKeyDown = (event) => {
      if (event.key.toLowerCase() in keys || event.key in keys) {
        keys[event.key.toLowerCase()] = true;
        keys[event.key] = true;
      }
      
      // ESC key closes the current selected university
      if (event.key === 'Escape' && currentUniversity.value) {
        closeUniversityInfo();
      }
    };
    
    // Handle Key Up
    const onKeyUp = (event) => {
      if (event.key.toLowerCase() in keys || event.key in keys) {
        keys[event.key.toLowerCase()] = false;
        keys[event.key] = false;
      }
    };
    
    // Close University Info Panel
    const closeUniversityInfo = () => {
      currentUniversity.value = null;
      
      // Reset camera position
      if (threeEnv.value) {
        gsap.to(threeEnv.value.camera.position, {
          x: 0,
          y: 20,
          z: 30,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            threeEnv.value.camera.lookAt(new THREE.Vector3(0, 0, 0));
          }
        });
      }
    };
    
    // Watch Video
    const watchVideo = () => {
      if (currentUniversity.value) {
        console.log("Opening video modal for university:", currentUniversity.value.name);
        console.log("Video URL:", currentUniversity.value.videoUrl);
        showVideoModal.value = true;
        // In a real application, this should update the watched videos count
      }
    };
    
    // View All Courses
    const viewAllCourses = () => {
      if (currentUniversity.value) {
        console.log(`Viewing all courses for ${currentUniversity.value.name}`);
        // In a real application, this would navigate to a courses page or open a courses list modal
      }
    };
    
    // Animation Loop
    const animate = () => {
      if (!threeEnv.value) return;
      
      // Update controls
      threeEnv.value.controls.update();
      
      // Keyboard control for player movement
      if (player.value) {
        const moveSpeed = 0.2;
        const playerPosition = player.value.position.clone();
        
        // Support WASD and arrow keys
        if (keys.w || keys.ArrowUp) playerPosition.z -= moveSpeed;
        if (keys.s || keys.ArrowDown) playerPosition.z += moveSpeed;
        if (keys.a || keys.ArrowLeft) playerPosition.x -= moveSpeed;
        if (keys.d || keys.ArrowRight) playerPosition.x += moveSpeed;
        
        // Update player position
        player.value.position.copy(playerPosition);
        
        // If player moves, automatically close the current info panel
        if ((keys.w || keys.a || keys.s || keys.d || 
             keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight) && 
             currentUniversity.value) {
          closeUniversityInfo();
        }
        
        // Make camera follow player - optional
        if (threeEnv.value.camera && !currentUniversity.value) {
          const cameraOffset = new THREE.Vector3(0, 5, 10); // Camera offset
          threeEnv.value.camera.position.x = playerPosition.x + cameraOffset.x;
          threeEnv.value.camera.position.z = playerPosition.z + cameraOffset.z;
          threeEnv.value.camera.lookAt(playerPosition);
        }
        
        // Calculate movement vector and rotate player to face movement direction
        const direction = new THREE.Vector2(0, 0);
        if (keys.w || keys.ArrowUp) direction.y -= 1;
        if (keys.s || keys.ArrowDown) direction.y += 1;
        if (keys.a || keys.ArrowLeft) direction.x -= 1;
        if (keys.d || keys.ArrowRight) direction.x += 1;
        
        // If there's movement input, rotate player to face movement direction
        if (direction.length() > 0) {
          // Calculate angle (in radians)
          const angle = Math.atan2(direction.x, direction.y);
          // Set player orientation
          player.value.rotation.y = angle;
        }
      }
      
      // Render scene
      threeEnv.value.renderer.render(threeEnv.value.scene, threeEnv.value.camera);
      
      // Request next frame
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize player and set position in the init function
    onMounted(() => {
      if (!threeContainer.value) return;
      
      try {
        // Create Three.js environment - Use markRaw to prevent reactive handling
        threeEnv.value = markRaw(createScene(threeContainer.value));
        
        // Create university buildings - Use markRaw to prevent reactive handling
        universityBuildings.value = universities.map(university => 
          markRaw(createUniversityBuilding(threeEnv.value.scene, university))
        );
        
        // Create player character - Use markRaw to prevent reactive handling
        player.value = markRaw(createPlayer(threeEnv.value.scene));
        
        // Set initial player position - Center of the scene
        player.value.position.set(0, 0, 0);
        
        // Set initial camera position, looking down at player
        threeEnv.value.camera.position.set(0, 20, 30);
        threeEnv.value.camera.lookAt(new THREE.Vector3(0, 0, 0));
        
        // Add keyboard listeners
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        
        // Start animation loop
        animate();
        
        console.log("Three.js scene initialized successfully");
      } catch (error) {
        console.error("Error initializing Three.js scene:", error);
      }
    });
    
    // Cleanup
    onUnmounted(() => {
      console.log("Cleaning up Three.js resources");
      // Remove keyboard listeners
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      
      // Cancel animation frame
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Destroy Three.js environment
      if (threeEnv.value) {
        threeEnv.value.destroy();
      }
    });
    
    return {
      threeContainer,
      universities,
      currentUniversity,
      showVideoModal,
      notifications,
      visitedUniversities,
      discoveredCourses,
      totalCourses,
      watchedVideos,
      onMouseMove,
      onClick,
      watchVideo,
      viewAllCourses,
      closeUniversityInfo
    };
  }
};
</script>

<style scoped>
.university-explorer {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.three-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.score-card-container {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 200px;
  z-index: 2;
}

.university-info {
  position: absolute;
  bottom: 120px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  border: 2px solid #ccc;
  max-height: 60vh;
  overflow-y: auto;
}

.university-info h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.university-info p {
  margin-bottom: 15px;
  line-height: 1.5;
  color: #555;
}

.video-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s;
}

.video-btn:hover {
  background-color: #e64a19;
}

.video-icon {
  margin-right: 8px;
  font-size: 20px;
}

.courses-preview {
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.courses-preview h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.course-item {
  background-color: #f0f0f0;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  color: #333;
}

.view-all-btn {
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  transition: background-color 0.3s;
}

.view-all-btn:hover {
  background-color: #1976d2;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
}

.video-container {
  margin-top: 20px;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
}

.video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.play-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.nav-btn {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 30px;
  margin: 0 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-btn.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}

.controls-info {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 20px;
  z-index: 2;
}

.controls-info p {
  margin: 0;
  color: white;
  font-size: 14px;
}

@media (max-width: 768px) {
  .score-card-container {
    width: 150px;
  }
  
  .university-info {
    width: calc(100% - 40px);
    bottom: 90px;
  }
  
  .nav-btn {
    padding: 10px 15px;
    margin: 0 5px;
  }
  
  .controls-info {
    padding: 5px 10px;
  }
  
  .controls-info p {
    font-size: 12px;
  }
}
</style>