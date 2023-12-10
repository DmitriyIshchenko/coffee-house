import View from "./View";

class MenuTabView extends View {
  _parentEl = document.querySelector(".menu__tabs");

  addHandlerChangeTab(handler) {
    this._parentEl.addEventListener("change", (e) => {
      handler(e.target.value, this._isBigScreen());
    });
  }
}

export default new MenuTabView();
