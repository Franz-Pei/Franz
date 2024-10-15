import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp();

const uid = 'SNYBKKaMahQg0GS6nxz0KqsjgTX2';  // 替换为你的用户 UID

admin.auth().setCustomUserClaims(uid, { role: 'admin' })
  .then(() => {
    console.log(`Admin role set for user: ${uid}`);
    // 在前端环境中不需要调用 process.exit()
  })
  .catch((error) => {
    
    console.error('Error setting custom claims:', error);
  });
