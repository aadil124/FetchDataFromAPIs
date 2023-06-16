const btnFemale = document.getElementById("btnFemale");
const btnMale = document.getElementById("btnMale");
const urlfemale = "https://randomuser.me/api/?results=50&gender=female";
const urlmale = "https://randomuser.me/api/?results=50&gender=male";
const card = document.querySelector(".cardItem");

btnMale.addEventListener("click", async function getData() {
  try {
    let res = await fetch(urlmale);
    let jsonobj = await res.json();
    let data = jsonobj.results;
    let output = "";
    data.map((item) => {
      let picture = item.picture.large;
      let name = item.name.first;

      output += `
        <div class="col text-info">
            <div class="card h-80">
                <img src="${picture}" class="card-img-top" alt="...">
                <div class="card-header">
                   <h5 class="card-title">Name: ${name}</h5>
                    <p class="card-text">Age: ${item.dob.age}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">Email: ${item.email}</p>
                    <p class="card-text">Country: ${item.location.country}</p>
                    <p class="card-text">Mob: ${item.cell}</p>
                </div>
            </div>
        </div>
      `;
      card.innerHTML = output;
    });
  } catch (error) {
    console.log(error);
  }
});

btnFemale.addEventListener("click", async function getData() {
  try {
    let res = await fetch(urlfemale);
    let jsonobj = await res.json();
    let data = jsonobj.results;
    let output = "";
    data.map((item) => {
      let picture = item.picture.large;
      let name = item.name.first;

      output += `
        <div class="col text-info">
            <div class="card h-80">
                <img src="${picture}" class="card-img-top" alt="...">
                <div class="card-header">
                   <h5 class="card-title">Name: ${name}</h5>
                    <p class="card-text">Age: ${item.dob.age}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">Email: ${item.email}</p>
                    <p class="card-text">Country: ${item.location.country}</p>
                    <p class="card-text">Mob: ${item.cell}</p>
                </div>
            </div>
        </div>
      `;
      card.innerHTML = output;
    });
  } catch (error) {
    console.log(error);
  }
});
