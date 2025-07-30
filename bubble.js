let timer = 60;
let score = 0;
let rn;

function getnewhit() {
  rn = Number(Math.floor(Math.random() * 10));
  document.getElementById("hitval").textContent = rn;
}
getnewhit();

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 75; i++) {
    const rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

function runtimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.getElementById(
        "pbtm"
      ).innerHTML = `<div id="lastDiv"><h1>Game Over</h1><br>
            <h2>Score: ${score - 10}</h2></div>`;
      let button = document.createElement("button"); // Button create karna
      button.innerText = "Play Again"; // Button ka text set karna
      document.getElementById("pbtm").appendChild(button);
      button.addEventListener("click", function () {
        location.reload();
      });
    }
  }, 1000);
}
runtimer();

function increaseScore() {
  score += 10;
  document.getElementById("scoreval").textContent = score - 10;
}
increaseScore();

document.getElementById("pbtm").addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === rn) {
    increaseScore();
    makeBubble();
    getnewhit();
  }
});
