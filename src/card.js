class Card {
  constructor(init) {
    this.init = init;
  }

  createCard(data) {
    let card = `
      <div class="card mb-3">
        <img src="${data.urlToImage}" class="card-img-top" alt="${data.title}">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.source.name}-${data.publishedAt}</h6>
          <p class="card-text">${data.description ? data.description : ''}</p>
          <a href="${data.url}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    `;

    return card;
  }

  render(element) {
    let cards = "";
    let data = this.init.data;
    for (let i = 0; i < data.length; i++) {
      cards += '<div class="col-12 col-sm-6 col-md-4">';
      cards += this.createCard(data[i]);
      cards += '</div>';
    }
    element.innerHTML = `
      <div class="card-deck">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          ${cards}
        </div>
      </div>
    `;
  }
}

export { Card };