import View from "./View";

class CardView extends View {
  _generateMarkup() {
    return `
      <article class="card" id=${this._data.id}>
        <div class="card__img-box">
          <img src="./imgs/${this._data.id}.webp" alt="${this._data.name}">
        </div>
        <div class="card__info">
          <h3 class="heading-3 card__title">${this._data.name}</h3>
          <p class="card__description">${this._data.description}</p>
          <p class="card__price heading-3">$${this._data.price}</p>
        </div>
      </article>
    `;
  }
}

export default new CardView();
