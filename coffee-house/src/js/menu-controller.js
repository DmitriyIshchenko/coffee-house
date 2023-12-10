import * as model from "./model";
import modalView from "./views/modalView";

const controlModal = () => {};

function init() {
  console.log(model.state);
  modalView.addHandlerToggleModal(controlModal);
}

init();
