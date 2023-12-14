import * as model from "./model";
import modalView from "./views/modalView";
import menuView from "./views/menuView";
import menuTabView from "./views/menuTabView";
import refreshMenuView from "./views/refreshMenuView";
import orderView from "./views/orderView";

// REFACTOR: repeating code all over the place

const controlModal = (itemId) => {
  model.updateModalItem(itemId);
  orderView.render(model.state.modalItem);
};

const controlTabs = (category, isBigScreen) => {
  model.updateCurrentMenuTab(category);
  model.updateMenuDisplay(isBigScreen);
  menuView.render(model.getMenuTabContent());
  refreshMenuView.render(model.state);
};

const controlScreenSize = (isBigScreen) => {
  model.updateMenuDisplay(isBigScreen);
  menuView.render(model.getMenuTabContent());
  refreshMenuView.render(model.state);
};

const controlRefreshMenu = () => {
  model.showFullMenu();
  menuView.render(model.getMenuTabContent());
  refreshMenuView.render(model.state);
};

function init() {
  menuView.render(model.getMenuTabContent());
  refreshMenuView.render(model.state);

  modalView.addHandlerToggleModal(controlModal);
  menuTabView.addHandlerChangeTab(controlTabs);
  menuView.addHandlerChangeScreenSize(controlScreenSize);
  refreshMenuView.addHandlerRefreshMenu(controlRefreshMenu);
}

init();
