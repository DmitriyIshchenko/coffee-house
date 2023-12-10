import View from "./View";

class ModalView extends View {
  _parentEl = document.querySelector(".modal");
  _menu = document.querySelector(".menu__items");

  addHandlerToggleModal(handler) {
    this._menu.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;

      // handler();
      this._parentEl.showModal();
    });

    this._parentEl.addEventListener("click", (e) => {
      if (e.target == this._parentEl) this._parentEl.close();
    });
  }
}

export default new ModalView();
