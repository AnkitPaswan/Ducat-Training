export default class CountryItem {
  constructor(country) {
    this.country = country;
  }
  render = () => {
    //create parentDiv
    const parentDiv = document.createElement("div");
    parentDiv.className = "col-3 mt-5";
    //card div
    const card = document.createElement("div");
    card.className = "card";
    //append to parentDiv
    parentDiv.append(card);

    //img
    const image = document.createElement("img");
    image.className = "card-img-top";
    image.src = this.country.flags.svg;
    image.alt = this.country.flags.alt;
    image.style.height = "100px";

    //card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    //h5
    const h5 = document.createElement("h5");
    h5.className = "card-title text-center";
    h5.innerText = this.country.name.common;
    h5.style.fontSize = "10px";

    //append to card body
    cardBody.append(h5);

    //append to card div
    card.append(image);
    card.append(cardBody);
    return parentDiv;
  };
}
