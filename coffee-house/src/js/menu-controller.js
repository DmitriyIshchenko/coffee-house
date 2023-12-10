import * as model from "./model";
import modalView from "./views/modalView";
import menuView from "./views/menuView";

const controlModal = () => {};

function init() {
  modalView.addHandlerToggleModal(controlModal);
  menuView.render(model.getMenuTabContent());
}

init();
