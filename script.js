window.onload = setup;
const cardContainer = document.getElementById("root");


//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}



function makePageForEpisodes(episodeList) {
  render(episodeList);


}

function render(arr) {
  for (const episode of arr) {
    let card = makeCard(episode);
    cardContainer.appendChild(card);
  }
}

function makeCard(ep) {
  let template = `
      <h1 class='text-center h5 mt-4'>${ep.name} - S${zerroLead(ep.season)}E${zerroLead(ep.number)}</h1>
      <div class="card-body text-center">
        <img src='${ep.image.medium}'>
        <div class="card-title">${ep.summary}</div>
      </div>
  `;
  card = document.createElement('div');
  card.classList.add("card", "mx-2", "px-3", "shadow");
  card.innerHTML = template;
  return card;
}


function zerroLead(num) {

  num = num + '';
  if (num.length < 2) {
    return '0' + num;
  } else {
    return num;
  }

}



