import menuItems from "../../menu.json";

export const state = {
  menuData: menuItems,
  currentCategory: "coffee",
  isFullMenuDisplayed: true,
  modalItem: {},
};

export function getMenuTabContent() {
  const items = state.menuData.filter(
    (item) => item.category === state.currentCategory
  );

  return state.isFullMenuDisplayed ? items : items.slice(0, 4);
}

export function updateCurrentMenuTab(category) {
  state.currentCategory = category;
}

export function updateMenuDisplay(isBigScreen) {
  state.isFullMenuDisplayed = isBigScreen;
}

export function showFullMenu() {
  state.isFullMenuDisplayed = true;
}
