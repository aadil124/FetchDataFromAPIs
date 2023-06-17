const btnFemale = document.getElementById("btnFemale");
const btnMale = document.getElementById("btnMale");
const urlfemale = "https://randomuser.me/api/?results=50&gender=female";
const urlmale = "https://randomuser.me/api/?results=50&gender=male";
const card = document.querySelector(".cardItem");

btnMale.addEventListener("click", () => {
  getData(urlmale);
});
btnFemale.addEventListener("click", () => {
  getData(urlfemale);
});

async function getData(url) {
  try {
    let res = await fetch(url);
    let jsonobj = await res.json();
    let data = jsonobj.results;
    let output = "";
    data.map((item) => {
      let picture = item.picture.large;
      let name = item.name.first;
      let age = item.dob.age;
      let email = item.email;
      let country = item.location.country;
      let mobileNumber = item.cell;

      output += `
        <div class="col">
        <div class="card text-white bg-dark h-100">
        <div class="card-header">
        <img src="${picture}" class="card-img-top" alt="...">
        <h5 class="card-title mt-2">${name}</h5>
        </div>
        <div class="card-body">
        <p class="card-text">Age: ${age}</p>
        <p class="card-text">Email: ${email}</p>
        <p class="card-text">Country: ${country}</p>
        <p class="card-text">Mob: ${mobileNumber}</p>
        </div>
        </div>
        </div>
      `;
      card.innerHTML = output;
    });
  } catch (error) {
    console.log(error);
  }
}
