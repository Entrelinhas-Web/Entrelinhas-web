export default function filterInfo() {
  const emocoesDiv = document.querySelector(".emocoes-filter");
  const dataDiv = document.querySelector(".data-filter");

  const selectedEmocoes = [
    ...emocoesDiv.querySelectorAll('input[name="emocao"]:checked'),
  ].map((input) => input.value);

  const dateStart = dataDiv.querySelector("#date-start").value || null;
  const dateEnd = dataDiv.querySelector("#date-end").value || null;

  const info = {
    emocoes: selectedEmocoes,
    dateStart: dateStart,
    dateEnd: dateEnd,
  };

  const event = new CustomEvent("state-change", {
    detail: {
      filter: info,
    },
  });

  window.dispatchEvent(event);
}
