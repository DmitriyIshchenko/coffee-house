import menuItems from "../../menu.json";

export const state = {
  menuData: menuItems,
  currentCategory: "coffee",
  modalItem: {},
};

export function getMenuTabContent() {
  return state.menuData.filter(
    (item) => item.category === state.currentCategory
  );
}

export function updateCurrentMenuTab(category) {
  state.currentCategory = category;
}
