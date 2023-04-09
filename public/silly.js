const firebaseConfig = {
    apiKey: "AIzaSyC9uD6JIsATmcdfN_ooKtSKrnJV5JnzpYo",
    authDomain: "online-e5367.firebaseapp.com",
    databaseURL: "https://online-e5367-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "online-e5367",
    storageBucket: "online-e5367.appspot.com",
    messagingSenderId: "560994620648",
    appId: "1:560994620648:web:c6f0067840c15d728c655d",
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = firebase.database();

  // Increment the counter on page load
  database.ref('/users').transaction((currentValue) => {
    return (currentValue || 0) + 1;
  });

  // Decrement the counter when the page is closed
  window.onbeforeunload = function() {
    database.ref('/users').transaction((currentValue) => {
      return (currentValue || 1) - 1;
    });
  }

  // Update the counter in real-time
  database.ref('/users').on('value', (snapshot) => {
    const counterElement = document.getElementById('usercount');
    counterElement.innerText = snapshot.val();
  });