function _0x2369(){const _0x19fee4=['AIzaSyDr7w','2095698AQemMd','81512mdnZoS','161624tgjFWI','343SOlKRK','13460alHmpS','3476VVzSQE','YB3QzKeUemLu','9xqpCedpLpftOYwcA','518JMTCUJ','45pdkDGD','1115954FzSbDD','119136xPUJqz','10hcHgkp'];_0x2369=function(){return _0x19fee4;};return _0x2369();}const _0x38b28b=_0x3885;(function(_0x3055a8,_0xd6cf72){const _0x403195=_0x3885,_0x135cd9=_0x3055a8();while(!![]){try{const _0x3aae5f=parseInt(_0x403195(0xc2))/0x1*(parseInt(_0x403195(0xc7))/0x2)+parseInt(_0x403195(0xca))/0x3+-parseInt(_0x403195(0xc0))/0x4*(parseInt(_0x403195(0xcb))/0x5)+-parseInt(_0x403195(0xbf))/0x6+parseInt(_0x403195(0xc9))/0x7+parseInt(_0x403195(0xc1))/0x8*(parseInt(_0x403195(0xc8))/0x9)+parseInt(_0x403195(0xc3))/0xa*(parseInt(_0x403195(0xc4))/0xb);if(_0x3aae5f===_0xd6cf72)break;else _0x135cd9['push'](_0x135cd9['shift']());}catch(_0x14fdae){_0x135cd9['push'](_0x135cd9['shift']());}}}(_0x2369,0x6795b),pta=_0x38b28b(0xcc),ptb=_0x38b28b(0xc5),ptc=_0x38b28b(0xc6));function _0x3885(_0xf340d5,_0x3ce297){const _0x236946=_0x2369();return _0x3885=function(_0x388552,_0x58d58c){_0x388552=_0x388552-0xbf;let _0x222e1f=_0x236946[_0x388552];return _0x222e1f;},_0x3885(_0xf340d5,_0x3ce297);}let dataapikey=pta+ptb+ptc;

  const firebaseConfig = {
    apiKey: dataapikey,
    authDomain: "septic-3172a.firebaseapp.com",
    projectId: "septic-3172a",
    databaseURL: "https://septic-3172a-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "septic-3172a.appspot.com",
    messagingSenderId: "279553956146",
    appId: "1:279553956146:web:4a345eeb09388b7b13df2b"
  };
      firebase.initializeApp(firebaseConfig);
      const database = firebase.database();
      const chatRef = database.ref("chat");
      const auth = firebase.auth();

      // Listen for new messages in the chat
      chatRef.on("child_added", function(snapshot) {
        const message = snapshot.val();
        displayMessage(message.senderName, message.text, message.date, message.time);
      });

      function handleKeyDown(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
      // Send a new message to the chat
      function sendMessage() {
        setDisplayNameFromMessage();
        const message = document.getElementById("message").value;
        if (message !== "") {
          if (message.startsWith("/nick ")) {
            const displayName = message.substr(6).trim();
            const user = auth.currentUser;
            const uid = user.uid;
            const messagesRef = firebase.database().ref("chat");
            messagesRef.once("value", (snapshot) => {
              snapshot.forEach((childSnapshot) => {
                const messageId = childSnapshot.key;
                const messageData = childSnapshot.val();
                if (messageData.sender === uid) {
                  firebase.database().ref("chat/" + messageId + "/senderName").set(displayName);
                }
              });
            });
            user.updateProfile({
              displayName: displayName
            }).then(() => {
              console.log("Display name updated successfully");
              document.getElementById("message").value = "";
              location.reload(); // Reload the page
            }).catch((error) => {
              console.log(error.message);
            });
          } else if (message.startsWith("/auth")) {
            auth.signInAnonymously()
              .then(() => {
                console.log("User signed in anonymously");
                document.getElementById("message").value = "";
              })
              .catch((error) => {
                console.log(error.message);
              });
          } else {
            const name = auth.currentUser.displayName || "Anonymous";
            const now = new Date();
            const date = now.toLocaleDateString("en-NZ", { timeZone: "Pacific/Auckland" });
            const time = now.toLocaleTimeString("en-NZ", { timeZone: "Pacific/Auckland" });
            chatRef.push().set({
              sender: auth.currentUser.uid,
              senderName: name,
              text: message,
              date: date,
              time: time
            });
            document.getElementById("message").value = "";
          }
        }
      }
      

function setDisplayNameFromMessage() {
  const message = document.getElementById("message").value;
  if (message.startsWith("/nick ")) {
    const displayName = message.substr(6).trim();
    const user = auth.currentUser;
    const uid = user.uid;
    const messagesRef = firebase.database().ref("chat");
    messagesRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const messageId = childSnapshot.key;
        const messageData = childSnapshot.val();
        if (messageData.sender === uid) {
          firebase.database().ref("chat/" + messageId + "/senderName").set(displayName);
        }
      });
    });
    user.updateProfile({
      displayName: displayName
    }).then(() => {
      console.log("Display name updated successfully");
      document.getElementById("message").value = "";
      location.reload(); // Reload the page
    }).catch((error) => {
      console.log(error.message);
    });
  }
}



      // Display a message in the chat
      function displayMessage(senderName, text, date, time) {
        const chat = document.getElementById("chat");
        const messageElement = document.createElement("div");
        messageElement.innerText = senderName + " (" + date + " " + time + "): " + text;
        chat.appendChild(messageElement);
      }