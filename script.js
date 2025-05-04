document.getElementById("loginButton").addEventListener("click", function() {
  const loading = document.getElementById("loading");
  loading.style.display = "block";

  setTimeout(() => {
    window.location.href = "moonton.html";
  }, 2000);
});