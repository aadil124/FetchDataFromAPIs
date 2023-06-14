const btn = document.getElementById("button1");
// const url = "https://api.breakingbadquotes.xyz/v1/quotes";
const url = "https://randomuser.me/api/?results=50&gender=female";
const card = document.querySelector(".cardItem");

btn.addEventListener("click", async function getData() {
  const showDataDom = document.getElementById("showData");
  try {
    let res = await fetch(url);
    let jsonobj = await res.json();
    // console.log(jsonobj.results);
    let data = jsonobj.results;
    let output = "";
    data.map((item) => {
      console.log(item);
      let picture = item.picture.large;
      let name = item.name.first;

      output += `
        <div class="col">
            <div class="card h-100">
                <img src="${picture}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${item.dob.age}</p>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${item.email}</li>
                    <li class="list-group-item">Country: ${item.location.country}</li>
                    <li class="list-group-item">Mob: ${item.cell}</li>
                    </ul>
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

// function getData() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     });
// }
