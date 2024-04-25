import CountryItem from "./countryItem.js";

export default class Countries {
  countries = [];

  getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all");

    this.countries = await response.json();
  };
  render = async () => {
    await this.getCountries();
    let root = document.getElementById("root");
    for (const country of this.countries) {
      let countryItem = new CountryItem(country);
      let parentDiv = countryItem.render();

      //append to root
      root.append(parentDiv);
    }
  };
}
