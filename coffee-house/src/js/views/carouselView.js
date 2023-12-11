import View from "./View";

class CarouselView extends View {
  _parentEl = document.querySelector(".carousel");
  _window = this._parentEl.querySelector(".carousel__window");
  _inner = this._parentEl.querySelector(".carousel__inner");

  _currentSlide = 0;
  _touchstart = 0;
  _touchend = 0;
  _timer;
  _isPaused = false;

  constructor() {
    super();

    // BUTTONS
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-icon");
      if (!btn) return;

      const { direction } = btn.dataset;

      direction === "prev" ? this._moveLeft() : this._moveRight();
    });

    // TOUCH SWIPING
    this._parentEl.addEventListener("touchstart", (e) => {
      this._touchstart = e.changedTouches[0].screenX;

      // pause animation
      this._isPaused = true;
      this._toggleAnimation();

      // prevent context menu opening
      e.preventDefault();
    });

    this._parentEl.addEventListener("touchend", (e) => {
      this._touchend = e.changedTouches[0].screenX;

      // resume animation
      this._isPaused = false;
      this._toggleAnimation();

      this._checkSwipe();
    });

    // PAUSE ANIMATION (desktop)
    this._window.addEventListener("mouseover", (e) => {
      // single touch emits mouseover event
      if (e.sourceCapabilities.firesTouchEvents) return;
      this._isPaused = true;
      this._toggleAnimation();
    });

    this._window.addEventListener("mouseleave", (e) => {
      this._isPaused = false;
      this._toggleAnimation();
    });

    // AUTO-SCROLL
    document
      .querySelector(".carousel__bars")
      .addEventListener("animationend", (e) => {
        this._moveRight();
      });
  }

  _toggleAnimation() {
    const currentBar = document.querySelector(".carousel__bar--active span");
    currentBar.style.animationPlayState = this._isPaused ? "paused" : "running";
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
