const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
const generateBtn = document.getElementById("generate-btn") as HTMLButtonElement;

generateBtn.addEventListener("click", () => {
    // Get values from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Create the resume content
    resumeDisplay.innerHTML = `
        <h2> editable Resume</h2>
        <p><strong>Name:</strong><span contentediable="true"> ${name}</span></p>
        <p><strong>Email:</strong><span contentediable="true">${email}</span></p>
        <p><strong>Phone:</strong><span contentediable="true"> ${phone}</span></p>
        <h3>Education</h3>
        <p  contentediable="true" >${education}</p>
        <h3>Experience</h3>
        <p contentediable="true">${experience}</p>
        <h3>Skills</h3>
        <p contentediable="true">${skills}</p>
    `;

    // Display the resume section
    resumeDisplay.classList.remove("hidden");
});