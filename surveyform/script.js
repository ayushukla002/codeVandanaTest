const surveyForm = document.getElementById("surveyForm");
const popup = document.getElementById("popup");

function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert("Please fill in all the fields.");
        return;
    }

    const resultFirstName = document.getElementById("resultFirstName");
    const resultLastName = document.getElementById("resultLastName");
    const resultDob = document.getElementById("resultDob");
    const resultCountry = document.getElementById("resultCountry");
    const resultGender = document.getElementById("resultGender");
    const resultProfession = document.getElementById("resultProfession");
    const resultEmail = document.getElementById("resultEmail");
    const resultMobile = document.getElementById("resultMobile");

    resultFirstName.textContent = firstName;
    resultLastName.textContent = lastName;
    resultDob.textContent = dob;
    resultCountry.textContent = country;
    resultGender.textContent = gender.value;
    resultProfession.textContent = profession;
    resultEmail.textContent = email;
    resultMobile.textContent = mobile;

    popup.style.display = "block";
}

function resetForm() {
    surveyForm.reset();
}

function closePopup() {
    popup.style.display = "none";
}
