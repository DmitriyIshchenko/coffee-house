import * as model from "./model";
import modalView from "./views/modalView";
import menuView from "./views/menuView";
import menuTabView from "./views/menuTabView";

const controlModal = () => {};

const controlTabs = (category) => {
  model.updateCurrentMenuTab(category);
  menuView.render(model.getMenuTabContent());
};

function init() {
  modalView.addHandlerToggleModal(controlModal);
  menuView.render(model.getMenuTabContent());
  menuTabView.addHandlerChangeTab(controlTabs);
}

init();
