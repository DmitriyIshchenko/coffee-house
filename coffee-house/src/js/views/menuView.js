import View from "./View";
import cardView from "./cardView";

class MenuView extends View {
  _parentEl = document.querySelector(".menu__items");

  addHandlerChangeScreenSize(handler) {
    const queries = [
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(min-width: 768px)"),
    ];

    queries.forEach((query) =>
      query.addEventListener("change", (e) => {
        if (e.matches) {
          handler(this._isBigScreen());
        }
      })
    );

    window.addEventListener("load", () => {
      handler(this._isBigScreen());
    });
  }

  _generateMarkup() {
    return this._data.map((item) => cardView.render(item, false)).join("");
  }
}

export default new MenuView();
