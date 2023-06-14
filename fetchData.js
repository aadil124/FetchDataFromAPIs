const btn = document.getElementById("button1");
// const url = "https://api.breakingbadquotes.xyz/v1/quotes";
const url = "https://randomuser.me/api/?results=50&gender=female";

btn.addEventListener("click", async function getData() {
  const showDataDom = document.getElementById("showData");
  try {
    let res = await fetch(url);
    let jsonobj = await res.json();
    console.log(jsonobj);
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
