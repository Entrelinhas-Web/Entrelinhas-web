import { quantidades } from "./funcoesDashboad.js";

const ctx = document.getElementById('graficoDashboard');
const arrayChaves = Object.keys(quantidades);
const arrayQuantidades = Object.values(quantidades);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayChaves,
        datasets: [{
        label: 'Desabafos Registrados',
        data: arrayQuantidades,
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
});