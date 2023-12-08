const menuParent = document.querySelector(".menu__items");
const dialog = document.querySelector(".dialog");
const content = dialog.querySelector(".dialog__content");

menuParent.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  content.append(generateModalContent());

  dialog.showModal();
});

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

function generateModalContent() {
  content.innerHTML = "";
  return "hello";
}
