import { state } from "../models/state";
import filteredRegistros from "./filteredRegistros";

window.addEventListener("state-change", (e) => {
  Object.assign(state, {
    ...state,
    ...e.detail,
  });

  filteredRegistros();
});
