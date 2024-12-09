const productContainers = [...document.querySelectorAll('.Product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-button')];
const preBtn = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

const input = document.getElementById("autocomplete-input1");
const resultsContainer = document.getElementById("autocomplete-results1");

const sampleData = [
      { name: "Sweater", url: "Product_Page.html" },
      { name: "Hawaiian Shirt", url: "Product_Page.html" },
      { name: "Jacket", url: "Product_Page.html" },
      { name: "Mens T-shirt", url: "Product_Page.html" },
      { name: "Maxi Dress", url: "Product_Page.html" },
      { name: "Bemil Dress", url: "Product_Page.html" },
      { name: "Bodycon Dress", url: "Product_Page.html" },
      { name: "Sun Dress", url: "Product_Page.html" },
      { name: "Halter Mini Dress", url: "Product_Page.html" },
      { name: "Blazer", url: "Product_Page.html" },
      { name: "Off-Shoulder Dress", url: "Product_Page.html" },
      { name: "Polo Shirt", url: "Product_Page.html" },
      { name: "Cocktail Dress", url: "Product_Page.html" },
      { name: "Shirt Dress", url: "Product_Page.html" },
      { name: "Denim Shirt", url: "Product_Page.html" },
      { name: "Henley Shirt", url: "Product_Page.html" }
];


function filterResults(query) {
  return sampleData.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}


function displayResults(results) {
  resultsContainer.innerHTML = "";
  if (results.length === 0) {
    resultsContainer.style.display = "none";
    return;
  }

  results.forEach(result => {
    const div = document.createElement("div");
    div.classList.add("autocomplete-item");
    div.textContent = result.name;
    div.addEventListener("click", () => {
      window.location.href = result.url;  
    });
    resultsContainer.appendChild(div);
  });

  resultsContainer.style.display = "block";
}


input.addEventListener("input", () => {
  const query = input.value.trim();
  if (query) {
    const filteredResults = filterResults(query);
    displayResults(filteredResults);
  } else {
    resultsContainer.style.display = "none";
  }
});


document.addEventListener("click", (event) => {
  if (!input.contains(event.target) && !resultsContainer.contains(event.target)) {
    resultsContainer.style.display = "none";
  }
});


