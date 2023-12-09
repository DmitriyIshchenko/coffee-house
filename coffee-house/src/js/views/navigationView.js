import View from "./View";

class NavigationView extends View {
  _parentEl = document.querySelector(".header");
  _navBtn = this._parentEl.querySelector(".btn-nav");

  _addListenerToggleNavigation() {
    this._parentEl.addEventListener("click", (e) => {
      const link = e.target.closest(".nav__link");
      if (!link) return;

      this._parentEl.classList.remove("nav-open");
    });

    this._navBtn.addEventListener("click", () =>
      this._parentEl.classList.toggle("nav-open")
    );

    window.addEventListener("resize", () =>
      this._parentEl.classList.remove("nav-open")
    );
  }
}

export default new NavigationView();
