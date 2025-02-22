var url = "/";
var win;

function openAboutBlank() {
  if (win) {
    win.focus();
  } else {
    win = window.open("", "_blank");
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = url;
    win.document.body.appsendChild(iframe);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var switchInput = document.querySelector("#about-blank-btn");

  if (switchInput) {
    switchInput.addEventListener("change", function () {
      if (this.checked) {
        openAboutBlank();
      }
    });
  }
});

function showGame(gameUrl) {
  // Hide the game list container
  document.getElementById("game-container").style.display = "none";

  // Dynamically create and load the iframe
  const gameFrameContainer = document.getElementById("game-frame-container");
  const existingFrame = document.getElementById("game-frame");
  if (!existingFrame) {
    const iframe = document.createElement("iframe");
    iframe.id = "game-frame";
    iframe.src = gameUrl;
    iframe.width = "800";
    iframe.height = "600";
    iframe.style.border = "none";
    gameFrameContainer.appsendChild(iframe);
  } else {
    existingFrame.src = gameUrl;
  }

  // Show the game display section
  document.getElementById("game-display").style.display = "block";
}

function exitGame2() {
  // Redirect to the games.html page
  window.location.href = "/games.html";
}

function toggleFullScreen2() {
  const gameFrame = document.getElementById("game-frame");

  if (gameFrame) {
    if (!document.fullscreenElement) {
      gameFrame.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
function showapps(appsUrl) {
  // Hide the apps list container
  document.getElementById("apps-container").style.display = "none";

  // Dynamically create and load the iframe
  const appsFrameContainer = document.getElementById("apps-frame-container");
  const existingFrame = document.getElementById("apps-frame");
  if (!existingFrame) {
    const iframe = document.createElement("iframe");
    iframe.id = "apps-frame";
    iframe.src = appsUrl;
    iframe.width = "800";
    iframe.height = "600";
    iframe.style.border = "none";
    appsFrameContainer.appsendChild(iframe);
  } else {
    existingFrame.src = appsUrl;
  }

  // Show the apps display section
  document.getElementById("apps-display").style.display = "block";
}

function exitapps() {
  // Redirect to the apps.html page
  window.location.href = "/apps.html";
}

function toggleFullScreen() {
  const appsFrame = document.getElementById("apps-frame");

  if (appsFrame) {
    if (!document.fullscreenElement) {
      appsFrame.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
