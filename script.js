const button = document.getElementById("button2");
const buttonAccept = document.getElementById("button1");
const container = document.getElementById("containerButton");

const moveButton = () => {
  const positions = [
    { top: 50, right: 0 },
    { top: 100, right: 213 },
    { top: 50, right: 213 },
    { top: 150, right: 0 },
    { top: 50, right: 106 },
    { top: 100, right: 106 },
    { top: 150, right: 213 },
    { top: 150, right: 106 },
    { top: 100, right: 0 },
    { top: 150, right: 213 },
    { top: 200, right: 106 },
    { top: 200, right: 0 },
  ];

  const position = positions[Math.floor(Math.random() * positions.length)];
  button.style.top = position.top + "px";
  button.style.right = position.right + "px";

  button.style.position = "relative";
};

const redirectToWpp = () => {
  window.location.href =
    "https://api.whatsapp.com/send?phone=5511967885616&text=aceitoooo";
};

const acceptInvite = () => {
  container.style.display = "none";
  button.style.display = "block";

  redirectToWpp();
};

button.addEventListener("click", moveButton);
buttonAccept.addEventListener("click", acceptInvite);
button.addEventListener("mouseover", moveButton);
