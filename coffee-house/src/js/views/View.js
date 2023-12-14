class View {
  _data;

  render(data, render = true) {
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  _isBigScreen() {
    return window.innerWidth > 768;
  }
}

export default View;
