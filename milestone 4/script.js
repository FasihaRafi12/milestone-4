var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
var generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
    // Get values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Create the resume content
    resumeDisplay.innerHTML = "\n        <h2> editable Resume</h2>\n        <p><strong>Name:</strong><span contentediable=\"true\"> ".concat(name, "</span></p>\n        <p><strong>Email:</strong><span contentediable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span contentediable=\"true\"> ").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p  contentediable=\"true\" >").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contentediable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contentediable=\"true\">").concat(skills, "</p>\n    ");
    // Display the resume section
    resumeDisplay.classList.remove("hidden");
});
