import View from "./View";
import cardView from "./cardView";

class MenuView extends View {
  _parentEl = document.querySelector(".menu__items");

  _generateMarkup() {
    return this._data.map((item) => cardView.render(item, false)).join("");
  }
}

export default new MenuView();
