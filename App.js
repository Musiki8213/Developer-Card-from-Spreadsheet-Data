const developer = {
    username: "polyglotPro",
    yearsExperience: 7,
    isActive: true,
    pictureUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Riley",
    email: "pro@example.com",
    phone: "456-789-0124",
    skills: "Go; Rust; Python; JS",
    bio: "A versatile programmer with 7 years of experience, polyglotPro is fluent in multiple languages, including Go, Rust, and Python, tackling a wide range of programming challenges."
};

// Card Div
const cardDiv = document.createElement("div");
document.body.appendChild(cardDiv);
cardDiv.id = "cardDiv";

// Picture
const picture = document.createElement("img");
picture.src = developer.pictureUrl;
cardDiv.appendChild(picture);
picture.id = "imgID";

// User Name
const uName = document.createElement("h2");
uName.textContent = developer.username;
cardDiv.appendChild(uName);
uName.id = "userNameID";

// Experience
const experience = document.createElement("p");
experience.textContent = `Experience: ${developer.yearsExperience} Years`;
cardDiv.appendChild(experience);
experience.id = "experienceID";

// Active Status
const active = document.createElement("p");
active.textContent = `Status: ${developer.isActive ? "Active" : "Inactive"}`;
cardDiv.appendChild(active);
active.id = "activeID";

// Email
const mail = document.createElement("a");
mail.href = `mailto:${developer.email}`;
mail.textContent = `Email: ${developer.email}`;
cardDiv.appendChild(mail);
mail.id = "mailID";

// Phone
const phoneNumber = document.createElement("p");
phoneNumber.textContent = `Phone: ${developer.phone}`;
cardDiv.appendChild(phoneNumber);
phoneNumber.id = "phoneID";

// Skills
const skillss = document.createElement("p");
skillss.textContent = `Skills: ${developer.skills}`;
cardDiv.appendChild(skillss);
skillss.id = "skillID";

// Bio
const bioo = document.createElement("p");
bioo.textContent = `Bio: ${developer.bio}`;
cardDiv.appendChild(bioo);
bioo.id = "bioID";
