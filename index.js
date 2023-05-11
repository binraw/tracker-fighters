const descriptionFighter = document.querySelector(".cards");
const shadowWhite = document.querySelectorAll(".filtre-white");
let fighterid;

async function buttonCallFighters(fighterid, buttonElement) {
	const fighterCard = buttonElement.closest(".card-fighter");
	const descriptionDiv = fighterCard.querySelector(".description");
	const filtreBlanc = fighterCard.querySelector(".filtre-white");

	if (descriptionDiv) {
		descriptionDiv.remove();
		filtreBlanc.style.display = "none";
	} else {
		await fetch(
			`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterid}?key=`
		).then((response) =>
			response.json().then((works) => {
				const creatDiv = document.createElement("div");
				const name = document.createElement("h3");
				const win = document.createElement("h4");
				const lose = document.createElement("h4");
				const draw = document.createElement("h4");
				const winWithKo = document.createElement("h4");
				const winWithSubmissions = document.createElement("h4");
				const nickName = document.createElement("h4");
				name.textContent = works.FirstName + " " + works.LastName;
				win.textContent = "Wins : " + works.Wins;
				lose.textContent = "Losses : " + works.Losses;
				draw.textContent = "Draws : " + works.Draws;
				winWithKo.textContent = "Victoire par KO : " + works.TechnicalKnockouts;
				winWithSubmissions.textContent =
					"Victoire par Soumission : " + works.Submissions;
				nickName.textContent = "Surnom : " + works.Nickname;

				creatDiv.appendChild(name);
				creatDiv.appendChild(nickName);
				creatDiv.appendChild(win);
				creatDiv.appendChild(lose);
				creatDiv.appendChild(draw);
				creatDiv.appendChild(winWithKo);
				creatDiv.appendChild(winWithSubmissions);
				creatDiv.classList.add("description");

				// Ajoute les éléments dans l'élément parent du bouton cliqué
				fighterCard.appendChild(creatDiv);
				filtreBlanc.style.display = "block";
			})
		);
	}
}

const btngenerateFrancis = document.getElementById("generate-NG");
const btngenerateConnor = document.getElementById("generate-MG");
const btngenerateAdesanya = document.getElementById("generate-AD");
const btngenerateJones = document.getElementById("generate-JJ");
const btngenerateGane = document.getElementById("generate-CG");
const btngenerateSterling = document.getElementById("generate-AS");
const btngenerateEdwards = document.getElementById("generate-LE");
const btngenerateVolka = document.getElementById("generate-AV");
const btngenerateKamaruUsman = document.getElementById("generate-KU");
const btngenerateCharlesOliveira = document.getElementById("generate-CO");
const btngenerateBrandonMoreno = document.getElementById("generate-BM");
const btngenerateAlexPereira = document.getElementById("generate-AP");
const btngenerateIslamMakhachev = document.getElementById("generate-IS");
const btngenerateJiri = document.getElementById("generate-JP");
const btngenerateMaxHolloway = document.getElementById("generate-MH");
const btngenerateDustinPoirier = document.getElementById("generate-DP");

btngenerateFrancis.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000098, event.target);
});

btngenerateConnor.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000867, event.target);
});

btngenerateAdesanya.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000074, event.target);
});

btngenerateJones.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000146, event.target);
});
btngenerateGane.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000534, event.target);
});
btngenerateSterling.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000086, event.target);
});
btngenerateEdwards.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000086, event.target);
});
btngenerateVolka.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000347, event.target);
});
btngenerateKamaruUsman.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000145, event.target);
});
btngenerateCharlesOliveira.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000045, event.target);
});
btngenerateBrandonMoreno.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000613, event.target);
});
btngenerateAlexPereira.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140001220, event.target);
});
btngenerateIslamMakhachev.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000285, event.target);
});
btngenerateJiri.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000918, event.target);
});
btngenerateMaxHolloway.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000267, event.target);
});
btngenerateDustinPoirier.addEventListener("click", (event) => {
	// Passe le bouton cliqué comme argument pour l'utiliser plus tard
	buttonCallFighters(140000266, event.target);
});
