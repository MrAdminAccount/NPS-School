function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function vote(color) {
  window.location.href = `Explorebats.html?choice=${color}`;
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const firebaseConfig = {
  apiKey: "AIzaSyBqJxfrOgpOppaL66gm4n4DdtS6zk8fW40",
  authDomain: "psbe-annual-day-2023.firebaseapp.com",
  projectId: "psbe-annual-day-2023",
  storageBucket: "psbe-annual-day-2023.appspot.com",
  messagingSenderId: "61347593203",
  appId: "1:61347593203:web:ff1f562bdcf5e408107086",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var blueButton = document.querySelector(".button-Blue");

db.collection("poll").doc("voteCount").update({
  visits: firebase.firestore.FieldValue.increment(1)
});


blueButton.addEventListener("click", ()=> {
  db.collection("poll").doc("voteCount").update({
    blueCount: firebase.firestore.FieldValue.increment(1)
  });
});


//Retriving a val from the document voteCount
//Use to show stats
var voteCountReference = db.collection("poll").doc("voteCount");

voteCountReference.get().then(function(doc) {
    var blueCountValue = doc.data().blueCount;
    console.log("Blue Count:", blueCountValue);
  
}).catch(function(error) {
  console.log("Error getting document:", error);
});

