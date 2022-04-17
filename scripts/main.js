import { dataSeries } from './data.js';
var coursesTbody = document.getElementById('series');
var AverageSeassonsText = document.getElementById('season-average');
cargarSeriesATabla(dataSeries);
AverageSeassonsText.innerHTML = "Seasons average: ".concat(promedioSeassons(dataSeries));
function cargarSeriesATabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                           <td><a href=\"").concat(serie.image, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function promedioSeassons(series) {
    var average = 0;
    var num_series = 0;
    series.forEach(function (serie) {
        average += serie.seasons;
        num_series += 1;
    });
    return average / num_series;
}
