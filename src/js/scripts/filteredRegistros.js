import { state } from "../models/state";
import { showRegistros } from "./showRegistros";

export default function filteredRegistros() {
  const registros = JSON.parse(localStorage.getItem("desabafos") || "[]");

  let filtered = registros;

  state.filter.emocoes &&
    state.filter.emocoes.length > 0 &&
    (filtered = filtered.filter((r) =>
      state.filter.emocoes.includes(r.emocao),
    ));

  (state.filter.dateStart || state.filter.dateEnd) &&
    (filtered = filtered.filter((r) => {
      const [day, month, year] = r.data.split("/").map(Number);
      const date = new Date(year, month - 1, day);

      const start = state.filter.dateStart
        ? (() => {
            const [year, month, day] = state.filter.dateStart
              .split("-")
              .map(Number);
            return new Date(year, month - 1, day);
          })()
        : null;
      const end = state.filter.dateEnd
        ? (() => {
            const [year, month, day] = state.filter.dateEnd
              .split("-")
              .map(Number);
            return new Date(year, month - 1, day);
          })()
        : null;

      return (!start || date >= start) && (!end || date <= end);
    }));

  state.searchText &&
    state.searchText.trim() !== "" &&
    (filtered = filtered.filter((r) => {
      return (
        r.titulo
          .toLowerCase()
          .includes(state.searchText.toLowerCase().trim()) ||
        r.descricao
          .toLowerCase()
          .includes(state.searchText.toLowerCase().trim())
      );
    }));

  showRegistros(filtered, "Nenhum desabafo encontrado.");
}
