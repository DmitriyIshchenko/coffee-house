import View from "./View";

class CarouselView extends View {
  _parentEl = document.querySelector(".carousel");
  _inner = this._parentEl.querySelector(".carousel__inner");

  _currentSlide = 0;
  _touchstart = 0;
  _touchend = 0;

  constructor() {
    super();

    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-icon");
      if (!btn) return;

      const { direction } = btn.dataset;

      direction === "prev" ? this._moveLeft() : this._moveRight();
    });

    // TOUCH
    this._parentEl.addEventListener("touchstart", (e) => {
      this._touchstart = e.changedTouches[0].screenX;
    });

    this._parentEl.addEventListener("touchend", (e) => {
      this._touchend = e.changedTouches[0].screenX;

      this._checkSwipe();
    });

    setInterval(() => {
      if (!this._isPaused) {
        this._moveRight();
      }
    }, 5000);
  }

  _checkSwipe() {
    if (this._touchend < this._touchstart) this._moveRight();
    if (this._touchend > this._touchstart) this._moveLeft();
  }

  _moveLeft() {
    if (this._currentSlide === 0) {
      this._currentSlide = 2;
    } else {
      this._currentSlide--;
    }
    this._inner.style.transform = `translateX(${-100 * this._currentSlide}%)`;
    this._updateBars();
  }

  _moveRight() {
    if (this._currentSlide === 2) {
      this._currentSlide = 0;
    } else {
      this._currentSlide++;
    }
    this._inner.style.transform = `translateX(${-100 * this._currentSlide}%)`;
    this._updateBars();
  }

  _updateBars() {
    const bars = [...document.querySelectorAll(".carousel__bar")];

    bars.forEach((bar) => bar.classList.remove("carousel__bar--active"));
    bars[this._currentSlide].classList.add("carousel__bar--active");
  }
}

export default new CarouselView();
