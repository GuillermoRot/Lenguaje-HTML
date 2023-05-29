
class CardComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {

        const miTemplate = document.createElement("div");

        miTemplate.innerHTML = `
            <div class="card">
                <h2 class="card__name"></h2>
                <h3 class="card__country"></h3>
            </div>`;

        miTemplate.querySelector(".card__name").textContent = this.getAttribute("name");
        miTemplate.querySelector(".card__country").textContent = this.getAttribute("country");
        this.appendChild(miTemplate);
    }
}

customElements.define("card-component", CardComponent);
