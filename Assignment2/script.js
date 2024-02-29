const API_KEY = "c657fbaf99804ae2bdd22d8b85ceddd2";
const url = "https://newsapi.org/v2/everything?q=";
const favourite = "gym"
window.addEventListener("load", () => fetchNews("India"));

let curSelectedNav = null;
const navItem = document.getElementById("home");
curSelectedNav = navItem;
curSelectedNav.classList.add("active");

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query=="favourite"?favourite:query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}
// Inside script.js

function onLoginClick() {
    console.log("container")
}

function onRegisterClick() {
    console.log("container")
}

function onLogin() {
    // Implement your login logic here
}

function onRegister() {
    // Implement your registration logic here
}


function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

function onNavItemClick(id) {
    console.log("container")
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

function onLoginClick() {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";
}

function onRegisterClick() {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");
const login = document.getElementById("login");
const register = document.getElementById("register");

login.addEventListener("click", () => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = ""; // Clear existing content
    const loginForm = document.createElement('div');
    loginForm.classList.add('form');
    loginForm.innerHTML = `
    <h2>Login</h2>
    <!-- Add your login form here -->
    <input type="text" placeholder="Username" id="username">
    <input type="password" placeholder="Password" id="password">
    <button onclick="onLogin()">Login</button>
    <p>Don't have an account? <a href="#" onclick="onRegisterClick()">Register now</a>.</p>`;
    cardsContainer.appendChild(loginForm);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

register.addEventListener("click", () => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = ""; // Clear existing content
    const registerForm = document.createElement('div');
    registerForm.classList.add('form');
    registerForm.innerHTML = `
    <h2>Register</h2>
    <!-- Add your registration form here -->
    <input type="text" placeholder="Username">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <input type="password" placeholder="Confirm Password">
    <input type="text" placeholder="Full Name">
    <input type="tel" placeholder="Phone Number">
    <input type="date" placeholder="Date of Birth">
    <textarea placeholder="Address"></textarea>
    <label for="gender">Gender:</label>
    <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>
    <button onclick="onRegister()">Register</button>
    <p>Already have an account? <a href="#" onclick="onLoginClick()">Login</a>.</p>
`;
    cardsContainer.appendChild(registerForm);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

// Inside script.js

function onContactUsClick() {
    const navItem = document.getElementById('contact-us');
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = ""; // Clear existing content
    const contactUsForm = document.createElement('div');
    contactUsForm.classList.add('form');
    contactUsForm.innerHTML = `
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <textarea placeholder="Your Message"></textarea>
        <button onclick="onSubmitContactForm()">Submit</button>`;
    cardsContainer.appendChild(contactUsForm);
}

