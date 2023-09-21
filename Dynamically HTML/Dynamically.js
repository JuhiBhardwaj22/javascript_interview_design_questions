console.log("Dynamically Fetch data and append");

const parentDiv = document.getElementById("product-grid");
const sortDropdown = document.getElementById("dropdown-order");

fetchData("https://fakestoreapi.com/products?sort=asc");

function fetchData(url) {
  console.log("test", url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderHTML(data);
    })
    .catch((error) => console.log("Error fetching data:", error));
}

function renderHTML(data) {
  data.forEach((element) => {
    const gridList = document.createElement("div");
    gridList.className = "grid_items";

    const img = document.createElement("img");
    img.src = element.image;
    img.className = "img_list";

    const title = document.createElement("h2");
    title.textContent = element.title;

    const price = document.createElement("p");
    price.textContent = element.price;

    gridList.append(img);
    gridList.append(title);
    gridList.append(price);

    parentDiv.appendChild(gridList);

    //------------------We can also do like this-----------------
    // const productCard = document.createElement("div");
    // productCard.classList.add("product-card");
    // productCard.innerHTML = `
    //             <img src="${element.image}" alt="${element.title}">
    //             <h3>${element.title}</h3>
    //             <p>Price: $${element.price}</p>
    //         `;
    // parentDiv.appendChild(productCard);
  });
}

//And we can also attach the function like this
// sortDropdown.addEventListener("change", async () => {
//   const sortBy = await sortDropdown.value;
//   const apiUrl = (await "https://fakestoreapi.com/products?sort=") + sortBy;
//   fetchData(apiUrl);
// });

function handleSorting() {
  const sortBy = sortDropdown.value;
  const apiUrl = "https://fakestoreapi.com/products?sort=" + sortBy;
  fetchData(apiUrl);
}
