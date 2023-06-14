const btn = document.getElementById("button1");
const url = "https://randomuser.me/api/?results=50&gender=female";
const card = document.querySelector(".cardItem");

btn.addEventListener("click", async function getData() {
  const showDataDom = document.getElementById("showData");
  try {
    let res = await fetch(url);
    let jsonobj = await res.json();
    let data = jsonobj.results;
    let output = "";
    data.map((item) => {
      let picture = item.picture.large;
      let name = item.name.first;

      output += `
        <div class="col border-dark">
            <div class="card h-80">
                <img src="${picture}" class="card-img-top" alt="...">
                <div class="card-body text-success">
                    <h5 class="card-title">Name: ${name}</h5>
                    <p class="card-text">Age: ${item.dob.age}</p>
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
