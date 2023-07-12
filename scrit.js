
// variables for industries
const wrapperForIndustries = document.querySelector(".wrapper-for-industries"),
  selectButton = wrapperForIndustries.querySelector(".select-btn-for-industries"),
  optionForIndustries = wrapperForIndustries.querySelector(".options-for-industries"),
  searchInput = wrapperForIndustries.querySelector(".search-for-industries input");

// varibles for company size
const wrapperForCompanySize = document.querySelector(".wrapper-for-company-size"),
  selectButtonForCompanySize = wrapperForCompanySize.querySelector(".select-btn-for-company-size"),
  optionForCompanySize = wrapperForCompanySize.querySelector(".options-for-company-size"),
  searchInputForCompanySize = wrapperForCompanySize.querySelector(".search-for-company-size input");

// varibles for company size
const wrapperForStars = document.querySelector(".wrapper-for-stars"),
  selectButtonForStars = wrapperForStars.querySelector(".select-btn-for-stars"),
  optionForStars = wrapperForStars.querySelector(".options-for-stars");

// varibles for sort
const wrapperForSort = document.querySelector(".wrapper-for-sort"),
  selectButtonForSort = wrapperForSort.querySelector(".select-btn-for-sort"),
  optionForSort = wrapperForSort.querySelector(".options-for-sort");

//array for stars
const starsArray = [
  "All stars",
  "5 stars only",
  "4 stars only",
  "3 stars only",
  "2 stars only",
  "1 star only"
];

// array for industries
const industriesArray = [
  "All industries",
  "Accounting",
  "Airlines Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel Fashion",
  "Architecture Planning",
  "Arts Crafts",
  "Automotive",
  "Aviation Aerospace",
  "Banking",
  "Biotechnology",
  "Broadcast Media",
  "Building Materials",
  "Business Supplies Equipment",
  "Capital Markets",
  "Chemicals",
  "Civic Social Organization",
  "Civil Engineering",
  "Commercial Real Estate",
  "Computer Games",
  "Computer Hardware",
  "Computer Network Security",
  "Computer Networking",
  "Computer Software",
  "Construction",
  "Consumer Electronics",
  "Consumer Goods",
  "Consumer Services",
  "Cosmetics",
  "Dairy",
  "Design",
  "E Learning",
  "Education Management",
  "Electrical Electronic Manufacturing",
  "Entertainment",
  "Environmental Services",
  "Executive Office",
  "Facilities Services",
  "Farming",
  "Financial Services",
  "Fine Art",
  "Fishery",
  "Food Beverages",
  "Food Production",
  "Fund Raising",
  "Furniture",
  "Gambling Casinos",
  "Glass Ceramics Concrete",
  "Government Administration",
  "Graphic Design",
  "Health Wellness Fitness",
  "Higher Education",
  "Hospital Health Care",
  "Hospitality",
  "Human Resources",
  "Import Export",
  "Individual Family Services",
  "Industrial Automation",
  "Information Services",
  "Information Technology Services",
  "Insurance",
  "International Affairs",
  "International Trade Development",
  "Investment Banking",
  "Investment Management",
  "Judiciary",
  "Law Enforcement",
  "Law Practice",
  "Legal Services",
  "Legislative Office",
  "Leisure Travel Tourism",
  "Libraries",
  "Logistics Supply Chain",
  "Luxury Goods Jewelry",
  "Machinery",
  "Management",
  "Maritime",
  "Market Research",
  "Marketing Advertising",
  "Mechanical Industrial Engineering",
  "Media Production",
  "Medical Devices",
  "Medical Practice",
  "Mental Health Care",
  "Military",
  "Mining Metals",
  "Motion Pictures Film",
  "Museums Institutions",
  "Music",
  "Nanotechnology",
  "Non Profit Organization Management",
  "Oil Energy",
  "Online Media",
  "Outsourcing Offshoring",
  "Package Freight Delivery",
  "Packaging Containers",
  "Paper Forest Products",
  "Performing Arts",
  "Pharmaceuticals",
  "Philanthropy",
  "Plastics",
  "Political Organization",
  "Primary Secondary Education",
  "Printing",
  "Program Development",
  "Professional Training Coaching",
  "Public Policy",
  "Public Relations Communications",
  "Public Safety",
  "Publishing",
  "Railroad Manufacture",
  "Ranching",
  "Real Estate",
  "Ranching",
  "Recreational Facilities Services",
  "Religious Institutions",
  "Renewables Environment",
  "Research",
  "Restaurants",
  "Retail",
  "Security Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing Recruiting",
  "Supermarkets",
  "Telecommunications",
  "Textiles",
  "Think Tanks",
  "Tobacco",
  "Translation Localization",
  "Transportation Trucking Railroad",
  "Utilities",
  "Veterinary",
  "Warehousing",
  "Wholesale",
  "Wine Spirits",
  "Wireless",
  "Writing Editing",
  "Prefer not to say",
];


//array for company size
const companySizeArray = [
  "All company Sizes",
  "1 employee",
  "2 to 5 employees",
  "6 to 10 employees",
  "11 to 25 employees",
  "26 to 50 employees",
  "51 to 200 employees",
  "201 to 1000 employees",
  "1001 to 10000 employees"
]

// array for Sort
const sortArray = [
  "Newest",
  "oldest"
]
// function for adding array as li industries 
function addIndustries() {
  industriesArray.forEach((industry) => {
    console.log(industry);
    let li = `<li onClick="updateName(this)">${industry}</li>`;
    console.log(li);
    optionForIndustries.insertAdjacentHTML("beforeend", li);
  });
}
// function for adding array as li company-size
function addCompanySize() {
  companySizeArray.forEach((companySize) => {
    console.log(companySize);
    let li = `<li onClick="updateCompanySize(this)">${companySize}</li>`;
    console.log(li);
    optionForCompanySize.insertAdjacentHTML("beforeend", li);
  });
}
// function for adding array as li Stars
function addStars() {
  starsArray.forEach((stars) => {
    let li = `<li onClick="updateStars(this)">${stars}</li>`;
    console.log(li);
    optionForStars.insertAdjacentHTML("beforeend", li);
  });
}
function addSort() {
  sortArray.forEach((sort) => {
    let li = `<li onClick="updateSort(this)">${sort}</li>`;
    console.log(li);
    optionForSort.insertAdjacentHTML("beforeend", li);
  });
}

//adding Stars
addStars();
//adding industries
addIndustries();
//adding Companies
addCompanySize();
//adding Sort
addSort()

function updateName(selectedLi) {
  searchInput.value = "";
  wrapperForIndustries.classList.remove("active");
  selectButton.firstElementChild.innerText = selectedLi.innerText;
}

function updateCompanySize(selectedLi) {
  searchInputForCompanySize.value = "";
  wrapperForCompanySize.classList.remove("active");
  selectButtonForCompanySize.firstElementChild.innerText = selectedLi.innerText;
}

function updateStars(selectedLi) {
  wrapperForStars.classList.remove("active");
  selectButtonForStars.firstElementChild.innerText = selectedLi.innerText;
}

function updateSort(selectedLi) {
  wrapperForSort.classList.remove("active");
  selectButtonForSort.firstElementChild.innerText = selectedLi.innerText;
}




//search for Industries
searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchValForIndustry = searchInput.value.toLowerCase();
  arr = industriesArray.filter(data => {
    return data.toLowerCase().startsWith(searchValForIndustry);
  }).map(data => `<li onClick="updateName(this)">${data}</li>`).join("");
  optionForIndustries.innerHTML = arr ? arr : `<p>Oops, Industry Not Found</p>`;
  console.log(arr);
});

//search for company Size
searchInputForCompanySize.addEventListener("keyup", () => {
  let arrForCompanySize = [];
  let searchValForCompanySize = searchInputForCompanySize.value.toLowerCase();
  arrForCompanySize = companySizeArray.filter(data => {
    return data.toLowerCase().startsWith(searchValForCompanySize);
  }).map(data => `<li onClick="updateCompanySize(this)">${data}</li>`).join("");
  optionForCompanySize.innerHTML = arrForCompanySize ? arrForCompanySize : `<p>Oops, company Not Found</p>`;
  console.log(arrForCompanySize);
});

// display none and display block on toggle for industries
selectButton.addEventListener("click", () => {
  wrapperForIndustries.classList.toggle("active");
  wrapperForCompanySize.classList.remove("active");
  wrapperForStars.classList.remove("active");
  wrapperForSort.classList.remove("active");
});
// display none and display block on toggle for company size
selectButtonForCompanySize.addEventListener("click", () => {
  wrapperForCompanySize.classList.toggle("active");
  wrapperForIndustries.classList.remove("active");
  wrapperForStars.classList.remove("active");
  wrapperForSort.classList.remove("active");
});
// display none and display block on toggle for Stars
selectButtonForStars.addEventListener("click", () => {
  wrapperForStars.classList.toggle("active");
  wrapperForCompanySize.classList.remove("active");
  wrapperForIndustries.classList.remove("active");
  wrapperForSort.classList.remove("active");
});
// display none and display block on toggle for Sort
selectButtonForSort.addEventListener("click", () => {
  wrapperForSort.classList.toggle("active");
  wrapperForStars.classList.remove("active");
  wrapperForCompanySize.classList.remove("active");
  wrapperForIndustries.classList.remove("active");
});

document.addEventListener('click', function (event) {
  var targetElement = event.target; // clicked element

  // Check if the clicked element is inside the div
  if (!wrapperForIndustries.contains(targetElement)) {
    // Clicked outside the div, so close it
    wrapperForIndustries.classList.remove("active");
  }
  if (!wrapperForCompanySize.contains(targetElement)) {
    // Clicked outside the div, so close it
    wrapperForCompanySize.classList.remove("active");
  }
  if (!wrapperForStars.contains(targetElement)) {
    // Clicked outside the div, so close it
    wrapperForStars.classList.remove("active");
  }
  if (!wrapperForSort.contains(targetElement)) {
    // Clicked outside the div, so close it
    wrapperForSort.classList.remove("active");
  }

});

let toLower = convertToLowDash("Hello Ootakke Time Aytu");
console.log(toLower)
function convertToLowDash(convertionToMatch) {
  let param = convertionToMatch.toLowerCase().replace(/ /g, "-");
  return param;
}