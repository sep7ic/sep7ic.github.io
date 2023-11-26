const firebaseConfig = {
  apiKey: dataapikey,
  authDomain: "septic-3172a.firebaseapp.com",
  projectId: "septic-3172a",
  databaseURL: "https://septic-3172a-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "septic-3172a.appspot.com",
  messagingSenderId: "279553956146",
  appId: "1:279553956146:web:4a345eeb09388b7b13df2b"
};firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const chatRef = database.ref("chat");
const auth = firebase.auth();

chatRef.on("child_added", function(snapshot) {
  const message = snapshot.val();
  displayMessage(message.senderName, message.text, message.date, message.time, message.sender, message.color, message.approved);
});

function handleKeyDown(event) {
  if (event.key === "Enter" || event.keyCode === 13 || event.keyCode === 9) {
    sendMessage();
  }
}

function sendMessage() {
  setDisplayNameFromMessage();
  const message = document.getElementById("message").value;

  if (message !== "") {
    if (message.startsWith("/nick ")) {
      const displayName = message.substr(6).trim();
      updateDisplayName(displayName);
    } else if (message.startsWith("/colour ")) {
      const color = message.substr(8).trim();
      updateColor(color);
    }  else if (message.startsWith("/auth")) {
      auth.signInAnonymously()
        .then(() => {
          console.log("User signed in anonymously");
          document.getElementById("message").value = "";
          location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      if (!auth.currentUser){
  const authinit = document.createElement("span");
  authinit.innerHTML = '<span style="color: DimGrey;">you must first run /auth</span><br>';
  chat.insertBefore(authinit, chat.firstChild);
}
      const name = auth.currentUser.displayName || "Anonymous";
      const now = new Date();
      const date = now.toLocaleDateString("en-NZ", { timeZone: "Pacific/Auckland" });
      const time = now.toLocaleTimeString("en-NZ", { timeZone: "Pacific/Auckland", hour12: false });
      const timestamp = Date.now(); 
      const color = getUserColor(auth.currentUser.uid);
      chatRef.push().set({
        sender: auth.currentUser.uid,
        senderName: name,
        text: message,
        date: date,
        time: time,
        color: color,
        timestamp: timestamp,
        approved: false
      });
      document.getElementById("message").value = "";
    }
  }
}

function setDisplayNameFromMessage() {
  const message = document.getElementById("message").value;
  if (message.startsWith("/nick ")) {
    const displayName = message.substr(6).trim();
    updateDisplayName(displayName);
  }
}

function updateDisplayName(displayName) {
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
    location.reload();
  }).catch((error) => {
    console.log(error.message);
  });
}

function updateColor(color) {
  const user = auth.currentUser;
  const uid = user.uid;
  const messagesRef = firebase.database().ref("chat");
  messagesRef.once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const messageId = childSnapshot.key;
      const messageData = childSnapshot.val();
      if (messageData.sender === uid) {
        firebase.database().ref("chat/" + messageId + "/color").set(color);
      }
    });
  });
  document.getElementById("message").value = "";
      location.reload();
}

function getUserColor(uid) {
  const defaultColor = "white"; 
  const messagesRef = firebase.database().ref("chat");
  let userColor = defaultColor;

  messagesRef.once("value", (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const messageData = childSnapshot.val();
      if (messageData.sender === uid && messageData.color) {
        userColor = messageData.color;
      }
    });
  });

  return userColor;
}

let verifiedusers = ["vHnehfBgx1UiBkJu40Qu2CBAxsP2", "cyaT5DGKLAa1UwVD3DEz37ddqgg2"];

function displayMessage(senderName, text, date, time, senderUid, color, approved) {

  if (!approved) {
    return;
  }

  const chat = document.getElementById("chat");
  const messageElement = document.createElement("div");

  const senderElement = document.createElement("span");
  senderElement.innerHTML = '<span style="color: DimGrey; font-size: smaller;">' + "</span>" + '<span style="color:' + color + ';">' + senderName + ": </span>";

  if (verifiedusers.includes(senderUid)) {
    senderElement.classList.add("red-sender");
  } else {
    senderElement.classList.add("grey-sender");
  }

  messageElement.appendChild(senderElement);
  messageElement.appendChild(document.createTextNode(text));

  chat.insertBefore(messageElement, chat.firstChild);
}
