const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const name = formData.get("name");
  // Do something with the data
});
