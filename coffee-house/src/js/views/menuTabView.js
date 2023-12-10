import View from "./View";

class MenuTabView extends View {
  _parentEl = document.querySelector(".menu__tabs");
  _tabs = this._parentEl.querySelectorAll(".btn-tab");

  addHandlerChangeTab(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const clickedTab = e.target.closest(".btn-tab");

      if (!clickedTab || clickedTab.classList.contains("btn-tab--active"))
        return;

      this._tabs.forEach((tab) => tab.classList.remove("btn-tab--active"));
      clickedTab.classList.add("btn-tab--active");

      const { category } = clickedTab.dataset;
      handler(category, this._isBigScreen());
    });
  }
}

export default new MenuTabView();
