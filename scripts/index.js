import { series } from './data.js';
var seriesTable = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
var card = document.getElementById('card');
var image = document.getElementById('image');
var name = document.getElementById('name');
var description = document.getElementById('description');
var url = document.getElementById('url');
renderSeriesInTable(series);
averageSeasons.innerHTML = "Average seasons: ".concat(getAverageSeasons(series));
averageSeasons.style.color = "white";
averageSeasons.style.fontWeight = "bold";
averageSeasons.style.fontSize = "20px";
createButtons();
function createButtons() {
    series.forEach(function (serie) {
        var button = document.getElementById("".concat(serie.id));
        button.addEventListener("click", function () {
            renderSerieInCard(serie);
            card.style.visibility = "visible";
        });
    });
}
function renderSerieInCard(serie) {
    image.setAttribute('src', serie.image);
    image.style.color = "white";
    name.innerHTML = "".concat(serie.name);
    name.style.color = "white";
    description.innerHTML = "".concat(serie.description);
    description.style.color = "white";
    url.innerHTML = "<a target=\"_blank\" href=\"".concat(serie.url, "\">More info</a>");
}
function renderSeriesInTable(seriesList) {
    seriesList.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style = \"color: white;\">".concat(serie.id, "</td>\n                             <td style = \"color: white;hover;\"><a href=\"#\" id = \"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                             <td style = \"color: white;\">").concat(serie.channel, "</td>\n                             <td style = \"color: white;\">").concat(serie.seasons, "</td>");
        seriesTable.appendChild(trElement);
    });
}
function getAverageSeasons(seriesList) {
    var totalSeasons = 0;
    seriesList.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / seriesList.length;
}
