function openMail() {
  const envelope = document.querySelector(".envelope");
  const letter = document.querySelector(".letter");
  const secretLetter = document.querySelector(".secret-letter");

  envelope.classList.add("open");
  setTimeout(() => {
      letter.style.bottom = "0";  // Smoothly slides out
  }, 500);

  setTimeout(() => {
      secretLetter.style.display = "block";
      setTimeout(() => {
          secretLetter.classList.add("show-letter");
      }, 200);
  }, 1500);
}
