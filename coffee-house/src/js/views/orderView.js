import View from "./View";

class OrderView extends View {
  _parentEl = document.querySelector(".order");

  constructor() {
    super();
    this._parentEl.addEventListener("change", () => this._updatePrice());
  }

  _updatePrice() {
    const priceEl = this._parentEl.querySelector(".order__price");
    const checkedOptions = this._parentEl.querySelectorAll("input:checked");
    const totalAddPrice = [...checkedOptions].reduce(
      (sum, node) => sum + Number(node.value),
      0
    );

    priceEl.textContent = `$${(+this._data.price + totalAddPrice).toFixed(2)}`;
  }

  _generateMarkup() {
    const { id, name, description, sizes, additives, price } = this._data;

    return `
    <div class="order__img-box">
      <img src="./imgs/${id}.webp" alt="${name}">
    </div>

    <div class="order__info">
      <div>
        <h3 class="order__title heading-3">${name}</h3>
        <p class="order__description">${description}</p>
      </div>

      <fieldset class="order__field">
        <legend>Size</legend>

        ${this._generateSizesMarkup(sizes)}
      </fieldset>

      <fieldset class="order__field">
        <legend>Additives</legend>

        ${this._generateAdditivesMarkup(additives)}
      </fieldset>

      <p class="order__total heading-3">
        <span>Total:</span>
        <span class="order__price">$${price}</span>
      </p>

      <p class="order__warning text-caption">
        <svg>
          <use href="src./imgs/sprite.svg#info-empty"></use>
        </svg>
        <span>The cost is not final. Download our mobile app to see the final price and place your order. Earn
          loyalty points and enjoy your favorite coffee with up to 20% discount.</span>
      </p>
    </div>
    `;
  }

  _generateSizesMarkup(sizes) {
    return Object.keys(sizes)
      .map((key, index) => {
        return `        
        <label for="size-${key}" class="btn-tab">
          <input type="radio" id="size-${key}" name="size" value=${
          sizes[key]["add-price"]
        } hidden ${index === 0 && "checked"} />
          <span class="btn-tab__icon">${key.toUpperCase()}</span>
          <span>${sizes[key].size}</span>
        </label>
      `;
      })
      .join("");
  }

  _generateAdditivesMarkup(additives) {
    return additives
      .map((item, index) => {
        return ` 
      <label for="additive-${index + 1}" class="btn-tab">
        <input type="checkbox" id="additive-${
          index + 1
        }" name="additive" value=${item["add-price"]} hidden />
        <span class="btn-tab__icon">${index + 1}</span>
        <span>${item.name}</span>
      </label>
      `;
      })
      .join("");
  }
}

export default new OrderView();
