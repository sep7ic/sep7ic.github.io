const firebaseConfig = {
  apiKey: "AIzaSyDr7wYB3QzKeUemLu9xqpCedpLpftOYwcA",
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
  displayMessage(message.senderName, message.text, message.date, message.time, message.sender); // pass senderUid as the last argument
});

function handleKeyDown(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    sendMessage();
  }
}

let verifiedusers = ["cyaT5DGKLAa1UwVD3DEz37ddqgg2", "Hzy5uRYmgROxsGUoQ8pgTTZxNwO2"];

// Send a new message to the chat
function sendMessage() {
  setDisplayNameFromMessage();
  const message = document.getElementById("message").value;
  const user = auth.currentUser;
  if (user && message !== "") {
    const uid = user.uid;
    const messagesRef = firebase.database().ref("chat");

    // Check if the user is banned
    firebase.database().ref("banned").child(uid).once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("User is banned");
          return;
        }

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
          } else if (message.startsWith("/ban ")) {
            // handle /ban command
            const uidToBan = message.substr(5).trim();
            const user = auth.currentUser;

            if (verifiedusers.includes(auth.currentUser.uid)) {
              const banListRef = firebase.database().ref("banList");
              banListRef.push().set({
                uid: uidToBan
              }).then(() => {
                console.log(`User ${uidToBan} has been banned`);
                document.getElementById("message").value = "";
              }).catch((error) => {
                console.log(error.message);
              });
            } else {
              console.log("You are not authorized to use this command");
              document.getElementById("message").value = "";
            }
          } else if (verifiedusers.includes(auth.currentUser.uid) && message.startsWith("/lookup ")) {
            const senderName = message.substr(8).trim();
            chatRef.once("value", (snapshot) => { 
              let uid = null;
              snapshot.forEach((childSnapshot) => {
                const messageData = childSnapshot.val();
                if (messageData.senderName === senderName) {
                  uid = messageData.sender;
                }
              });
              if (uid !== null) {
                console.log(`UID for ${senderName} is ${uid}`);
              } else {
                console.log(`No user found with name ${senderName}`);
              }
              document.getElementById("message").value = "";
            });
          } else {
            const name = auth.currentUser.displayName || "Anonymous";
            const now = new Date();
            const date = now.toLocaleDateString("en-NZ", { timeZone: "Pacific/Auckland" });
            const time = now.toLocaleTimeString("en-NZ", { timeZone: "Pacific/Auckland" });
            chatRef.push().set({
              sender: uid,
              senderName: name,
              text: message,
              date: date,
              time: time
            });
            document.getElementById("message").value = "";
          }
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
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

function displayMessage(senderName, text, date, time, senderUid) {
  const chat = document.getElementById("chat");
  const messageElement = document.createElement("div");

  // Create a span element for the sender name
  const senderElement = document.createElement("span");
  senderElement.innerText = senderName + ": ";

  // Set the class of the sender element based on the senderUid
  if (senderUid && verifiedusers.includes(senderUid)) {
    senderElement.classList.add("red-sender"); // add a CSS class to change color to red
  } else {
    senderElement.classList.add("grey-sender"); // add a CSS class to change color to grey
  }

  // Add the sender and text to the message element
  messageElement.appendChild(senderElement);
  messageElement.appendChild(document.createTextNode(text));

  chat.insertBefore(messageElement, chat.firstChild);
}