const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});