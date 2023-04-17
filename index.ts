import {Serie} from './serie.js';
import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById('series')!;
const averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;
const card:HTMLElement = document.getElementById('card')!;
const image:HTMLElement = document.getElementById('image')!;
const name:HTMLElement = document.getElementById('name')!;
const description: HTMLElement = document.getElementById('description')!;
const url: HTMLElement = document.getElementById('url')!;

renderSeriesInTable(series);
averageSeasons.innerHTML = `Average seasons: ${getAverageSeasons(series)}`;
averageSeasons.style.color = "white";
averageSeasons.style.fontWeight = "bold";
averageSeasons.style.fontSize = "20px";
createButtons();

function createButtons(){
    series.forEach(serie=>{
        let button = document.getElementById(`${serie.id}`)!;

        button.addEventListener("click", () => {
            renderSerieInCard(serie);
            card.style.visibility = "visible";
          });
    });
}

function renderSerieInCard(serie: Serie): void {
    image.setAttribute('src', serie.image);
    image.style.color = "white";
    name.innerHTML = `${serie.name}`;
    name.style.color = "white";
    description.innerHTML = `${serie.description}`;
    description.style.color = "white";
    url.innerHTML = `<a target="_blank" href="${serie.url}">More info</a>`;
}

function renderSeriesInTable(seriesList: Serie[]): void {
    seriesList.forEach(serie => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style = "color: white;">${serie.id}</td>
                             <td style = "color: white;hover;"><a href="#" id = "${serie.id}">${serie.name}</a></td>
                             <td style = "color: white;">${serie.channel}</td>
                             <td style = "color: white;">${serie.seasons}</td>`;
                             seriesTable.appendChild(trElement);
    });
}

function getAverageSeasons(seriesList: Serie[]): number {
    let totalSeasons: number = 0;
    seriesList.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / seriesList.length;
  }