import View from "./View";

class RefreshMenuView extends View {
  _parentEl = document.querySelector(".menu__load");

  addHandlerRefreshMenu(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-icon");
      if (!btn) return;

      handler();
    });
  }

  _generateMarkup() {
    const { isFullMenuDisplayed, currentCategory } = this._data;

    // REFACTOR: remove hardcoded solution
    if (isFullMenuDisplayed || currentCategory === "tea") return "";

    return `
      <button class="btn-icon">
        <svg>
          <use href="./imgs/sprite.svg#refresh"></use>
        </svg>
      </button>
    `;
  }
}

export default new RefreshMenuView();
