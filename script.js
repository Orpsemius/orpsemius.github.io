function parseMenu(){
    fetch("menu.xml").then(response =>{
        return response.text();
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
        const meals = xmlDocument.querySelectorAll("meal");
        const coffeeAndChocolate = xmlDocument.querySelectorAll("variation");
        const descriptionCoffeeAndChocolate = xmlDocument.querySelector("descriptionCoffeeAndChocolate").textContent;
        const others = xmlDocument.querySelectorAll("otherBeverage");

        for (const meal of meals){
            var mealName = meal.querySelector("name").textContent;
            var mealPrice = meal.querySelector("price").textContent;
            var mealDescription = meal.querySelector("description").textContent;
            var mealImage = meal.querySelector("image").textContent;

            document.getElementById("mealsMenu").innerHTML += `<div class="card" style="width: 18rem;">
            <img src="./images/${mealImage}" class="card-img-top" alt="image of ${mealName}">
            <div class="card-body">
              <h5 class="card-title">${mealName}</h5>
              <h6 class="card-title">${mealPrice}</h6>
              <p class="card-text">${mealDescription}</p>
            </div>
          </div>`
            
        }

        for (const coffee of coffeeAndChocolate){
            var coffeeSize = coffee.querySelector("size").textContent;
            var coffeePrice = coffee.querySelector("price").textContent
            var coffeeImage = coffee.querySelector("image").textContent;

            document.getElementById("coffeeMenu").innerHTML += `<div class="card" style="width: 18rem;">
            <img src="images/${coffeeImage}" class="card-img-top" alt="image of coffe and hot chocolate ">
            <div class="card-body">
              <h5 class="card-title">${coffeeSize}</h5>
              <h6 class="card-title">${coffeePrice}</h6>
              <p class="card-text"> ${descriptionCoffeeAndChocolate}<p>
              
            </div>
          </div>`
        }

        for (const other of others){
            var otherName = other.querySelector("name").textContent;
            var otherPrice = other.querySelector("price").textContent;
            var otherImage = other.querySelector("image").textContent;

            document.getElementById("otherMenu").innerHTML += `<div class="card" style="width: 18rem;">
            <img src="images/${otherImage}" class="card-img-top" alt="image of ${otherName}">
            <div class="card-body">
              <h5 class="card-title">${otherName}</h5>
              <h6 class="card-text">${otherPrice}</h6>
            </div>
          </div>`
        }

    })
}

function parseContact(){
  fetch("branches.xml").then(response =>{
    return response.text();
  }).then(xmlString => {
    const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");

    const branches = xmlDocument.querySelectorAll("branch");

    for (const branch of branches){
      const address = branch.querySelector("address").textContent;
      const contact = branch.querySelector("contact").textContent
      const monFri = branch.querySelector("openingHoursMonFri").textContent;
      const satSun = branch.querySelector("openingHoursSatSun").textContent;
      const link = branch.querySelector("link").textContent;

      document.getElementById("contactCards").innerHTML += `<div class="card" style="width: 33rem;">
            <div class="card-body">
              <a href="${link}"><h3 class="card-title">${address}</h3></a>
              <h5 class="card-text">${monFri}</h5>
              <h5 class="card-text">${satSun}</h5>
              <h6 class="card-text">Contact number: ${contact}</h6>

            </div>
          </div>`
        }

    })   

  }

function buttonAlert(){
  alert("Thank you for contacting Bryan's Cafe.");
}

function footerYear(){
  const date = new Date();
  var year = date.getFullYear();
  document.getElementById("footer-row").innerHTML = `<p>@${year} Bryan’s Café, <a id="linkPrivacy" href="https://www.freeprivacypolicy.com/live/a9bbe998-a465-47dc-ae3f-0625bbf71254" target="_blank">Privacy Policy</a></p>`;

}
