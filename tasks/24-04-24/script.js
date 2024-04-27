{
  /* <div class="card" style="width: 18rem">
<img src="https://placehold.co/600x400" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div> */
}

//create parentdiv
const parentDiv = document.createElement("div");
parentDiv.className = "mt-5";

//append to root
root.append(parentDiv);

//create card div
const card = document.createElement("div");
card.className = "card";
card.style = "width: 18rem";

//appent to parentdiv
parentDiv.append(card);

//image div
const image = document.createElement("img");
image.className = "card-img-top";
image.src = "https://placehold.co/600x400";
image.alt = "Card image cap";

//card body

const cardBody = document.createElement("div");
cardBody.className = "card-body";
//append to card div
card.append(image);
card.append(cardBody);

//h5
const h5 = document.createElement("h5");
h5.className = "card-title text-center";
h5.innerText = "15°C";

//p
const p = document.createElement("p");
p.className = "card-text text-center";
p.innerText = "this is weather info";

//append to card body
cardBody.append(h5);
cardBody.append(p);
