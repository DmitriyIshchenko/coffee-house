import * as model from "./model";
import modalView from "./views/modalView";
import menuView from "./views/menuView";
import menuTabView from "./views/menuTabView";
import refreshMenuView from "./views/refreshMenuView";

const controlModal = () => {};

const controlTabs = (category) => {
  model.updateCurrentMenuTab(category);
  menuView.render(model.getMenuTabContent());
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
