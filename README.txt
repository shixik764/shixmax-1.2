Shixmax — GitHub Pages package (Telegram-style)
Files included:
- index.html (login)
- register.html (signup + avatar upload via Uploadcare)
- index_main.html (chat rooms list)
- chat.html (chat room, upload files/images/audio via Uploadcare)
- profile.html (edit profile, avatar)
- settings.html (theme toggle)
- styles.css
- firebase.js (Firebase compat + Uploadcare widget preconfigured)

Deployment to GitHub Pages:
1. Create a new public repository on GitHub.
2. Upload all files to the repository root (Add file → Upload files).
3. Commit and push.
4. Settings → Pages → Select branch: main (root) → Save.
5. Wait 10–30s, open URL: https://YOUR_LOGIN.github.io/REPO_NAME/

Important:
- Replace firebaseConfig in firebase.js if you want to use another Firebase project.
- Enable Authentication (Email/Password), Realtime Database in Firebase Console.
- Add your GitHub Pages domain to Firebase Auth → Authorized domains if needed.
- Uploadcare public key already set (your key).

Security:
- For testing you may allow open DB rules, but for production set proper security rules.
