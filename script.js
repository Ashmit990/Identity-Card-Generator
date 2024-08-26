let submitt = document.querySelector(".submit");

const identityCardGenerator = () => {
    let name = document.querySelector(".name-input").value;
    let agee = document.querySelector(".age-input").value;
    let fatherName = document.querySelector(".father-input").value;
    let motherName = document.querySelector(".mother-input").value;
    let countryName = document.querySelector(".country-input").value;
    let addressName = document.querySelector(".address-input").value;
    let telNum = document.querySelector(".phone-input").value;
    let emailName = document.querySelector(".email-input").value;
    let occupationName = document.querySelector(".occupation-input").value;
    let mainBody = document.querySelector(".main");
    let inputContainer = document.querySelector(".input-container");
    let image = ""; // Update this if you need to add an image

    if (
        name === "" ||
        agee === "" ||
        fatherName === "" ||
        motherName === "" ||
        countryName === "" ||
        addressName === "" ||
        telNum === "" ||
        emailName === "" ||
        occupationName === ""
    ) {
        alert("Please fill out all the fields.");
        return;
    }

    let html = `
    <p class="success-message">Your Generated Identity Card:</p>
    <div class="identity-card">
        <div class="left-section">
            <div class="photo">${image}</div>
            <div class="left-content">
                <p class="name">${name}</p>
                <p class="age">Age: ${agee}</p>
                <p class="occupation">${occupationName}</p>
            </div>
        </div>
        <div class="right-section">
            <h1>Identity Card</h1>
            <div class="info">
                <p>Father's Name: ${fatherName}</p>
                <p>Mother's Name: ${motherName}</p>
                <p>Country: ${countryName}</p>
                <p>Address: ${addressName}</p>
                <p>Telephone: ${telNum}</p>
                <p>Email: ${emailName}</p>
            </div>
        </div>
    </div>
    `;

    mainBody.innerHTML = html;
    mainBody.classList.remove("hide");
    inputContainer.classList.add("hide");

 
    let existingButton = document.querySelector(".generate-another");
    if (!existingButton) {
        let generateAnotherBtn = document.createElement("button");
        generateAnotherBtn.classList.add("generate-another");
        generateAnotherBtn.textContent = "Generate Another";
        mainBody.appendChild(generateAnotherBtn);

        generateAnotherBtn.addEventListener("click", () => {
            inputContainer.classList.remove("hide");
            mainBody.classList.add("hide");
            document.querySelector(".name-input").value = "";
            document.querySelector(".age-input").value = "";
            document.querySelector(".father-input").value = "";
            document.querySelector(".mother-input").value = "";
            document.querySelector(".country-input").value = "";
            document.querySelector(".address-input").value = "";
            document.querySelector(".phone-input").value = "";
            document.querySelector(".email-input").value = "";
            document.querySelector(".occupation-input").value = "";
        });
    }
};

submitt.addEventListener("click", identityCardGenerator);
