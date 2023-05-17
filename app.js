let companyContainer = document.getElementById("companyContainer");
let educationContainer = document.getElementById("educationContainer");

function addDetails() {
  let picture = document.querySelector(".picture").value;
  let careetObjective = document.querySelector(".careetObjective").value;
  let fullname = document.querySelector(".fullname").value;
  let email = document.querySelector(".email").value;
  let mobileNumber = document.querySelector(".mobileNumber").value;

  console.log("sdfsd");
}

function addExperience() {
  let companyName = document.querySelector(".companyName").value;
  let startDate = document.querySelector(".startDate").value;
  let endData = document.querySelector(".endData").value;

  let experienceTemplete = `<div class="single">
                                <h5 class="heading">${companyName}</h5>
                                <div class="dateContainer">
                                    <p>${startDate}</p>
                                    <p>${endData}</p>
                                </div>
                            </div>`;

  companyContainer.insertAdjacentHTML("beforeend", experienceTemplete);
}

function addEducation() {
  let degreeName = document.querySelector(".degreeName").value;
  let degreeStart = document.querySelector(".degreeStart").value;
  let degreeEnd = document.querySelector(".degreeEnd").value;

  let educationTemplete = `<div class="single">
                                <h5 class="heading">${degreeName}</h5>
                                <div class="dateContainer">
                                    <p>${degreeStart}</p>
                                    <p>${degreeEnd}</p>
                                </div>
                            </div>`;

  educationContainer.insertAdjacentHTML("beforeend", educationTemplete);
}

function addText(val, elm) {
  console.log(val, elm);
  let element = document.getElementById(elm);
  element.innerHTML = val;
}
