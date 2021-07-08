const body = document.querySelector("body");

const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="close-button" viewBox="0 0 371.23 371.23" width="32" height="32"><path d="M371.23 21.213L350.018 0 185.615 164.402 21.213 0 0 21.213l164.402 164.402L0 350.018l21.213 21.212 164.402-164.402L350.018 371.23l21.212-21.212-164.402-164.403z"/></svg>`;

const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="info-icon" viewBox="0 0 488.9 488.9" width="32" height="32" fill="#333"><path d="M239.15 0c31.9 0 57.7 25.8 57.7 57.7s-25.8 57.7-57.7 57.7-57.7-25.8-57.7-57.7S207.25 0 239.15 0zm52.5 151.6h-97.7c-19 0-34.3 15.4-34.3 34.3 0 19 15.4 34.3 34.3 34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6h-.1z"/></svg>`;

const floatContent = `${infoIcon}<h2>Project Info</h2>`;

const float = document.createElement("div");
float.classList.add("reset", "float");
float.setAttribute("title", "See info about this project.");
float.innerHTML = floatContent;
body.append(float);

// Modal Content

const modalContent = `

<section class="modal-content">
<div class="title-bar"><h1>Tabbed Window List</h1>${closeIcon}</div>

<div class="modal-content-wrapper">

<h2>Description</h2>

<p>A responsive tabbed list.</p>

<ul>
	<li><a title="On my website" href="https://tabbed-window-list.iamdanial.com/">On my website</a></li>
	<li><a title="On GitHub" href="https://github.com/DanialZahid/Tabbed-Window-List/">On GitHub</a></li>
	<li><a title="On CodePen" href="https://codepen.io/danialzahid/pen/LYWvYJw/">On CodePen</a></li>
</ul>

<h2>External Assets</h2>

<ul>
	<li><a title="Keyamoon" href="http://keyamoon.com/">Keyamoon</a> — SVG icons</li>
	<li><a title="Unsplash" href="https://unsplash.com/">Unsplash</a> — Background image</li>
</ul>

<h2>License</h2>

<p><a title="MIT" href="https://github.com/DanialZahid/Tabbed-Window-List/blob/main/LICENSE/">MIT</a></p>

</div>
</section>
`;

// End

const modal = document.createElement("div");
modal.classList.add("reset", "modal");
modal.innerHTML = modalContent;
float.addEventListener("click", displayModal);

function displayModal() {
	body.append(modal);
	body.setAttribute("class", "overflow-hidden");
	const modalCloseButton = document.querySelector(".close-button");
	modalCloseButton.addEventListener("click", removeModal);
}

function removeModal() {
	modal.remove();
	body.removeAttribute("class");
}
