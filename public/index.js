let totalClients = document.getElementById("counter");
let incrementBtn = document.getElementById("increment-btn");
let save = document.getElementById("save-btn");
let count = 0;
let saveEl = document.getElementById("previous-entries");

incrementBtn.addEventListener("click", () => {
  count += 1;
  totalClients.textContent = count;
});

save.addEventListener("click", () => {
  let previousEntries = " " + count + " - ";
  saveEl.textContent += previousEntries;
  totalClients.textContent = 0;
  count = 0;
});
