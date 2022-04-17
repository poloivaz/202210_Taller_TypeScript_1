import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTableBody: HTMLElement = document.getElementById('series')!;
let AverageSeassonsText: HTMLElement = document.getElementById('season-average')!;

cargarSeriesATabla(dataSeries);
AverageSeassonsText.innerHTML = `Seasons average: ${promedioSeassons(dataSeries)}`

function cargarSeriesATabla(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td><a href="${serie.image}" target="_blank">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTableBody.appendChild(trElement);
  });
}

function promedioSeassons(series: Serie[]): number {
  let average: number = 0;
  let num_series: number = 0;
  series.forEach(serie => {
    average += serie.seasons;
    num_series += 1;
  })
  return average/num_series;
}
