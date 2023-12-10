import * as model from "./model";
import modalView from "./views/modalView";
import menuView from "./views/menuView";
import menuTabView from "./views/menuTabView";
import refreshMenuView from "./views/refreshMenuView";

const controlModal = () => {};

// REFACTOR: repeating code all over the place

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
