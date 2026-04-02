const brainrots = [
    { name: "Dragon Cannelone", desc: "O lendário dragão de massa italiana. Um épico do Roube um Brainrot.", img: "images/dragon_cannelone.png" },
    { name: "Strawberry Elephant", desc: "Um elefante rosa e doce que traz aura positiva para seu inventário.", img: "images/strawberry_elephant.png" },
    { name: "Garama and Madundung", desc: "A mistura perfeita de sal e mel. Uma dupla viral e icônica.", img: "images/garama_madundung.png" },
    { name: "Headless Horseman", desc: "O clássico cavaleiro sem cabeça. Raridade absoluta e estilo sem igual.", img: "images/headless_horseman.png" },
    { name: "Skibidi Toilet", desc: "O fenômeno mundial. Potência máxima de brainrot em sua coleção.", img: "images/skibidi_toilet.png" },
    { name: "Meowl", desc: "Metade gato, metade coruja, totalmente raro. O mestre da observação.", img: "images/meowl.png" },
    { name: "Fragama and Chocrama", desc: "A fusão lendária de Morango e Chocolate em uma peça única.", img: "images/fragama_chocrama.png" },
    { name: "Cerberus", desc: "O guardião de três cabeças. Proteja seu império com este titã.", img: "images/cerberus.png" },
    { name: "La Ginger Sekolah", desc: "Edição especial e festiva do clássico 'Amanhã tem Aula'.", img: "images/la_ginger.png" },
    { name: "Esok Sekolah", desc: "O sentimento de pavor por amanhã ser dia de escola. Um meme clássico.", img: "images/esok_sekolah.png" }
];

const grid = document.getElementById('brainrot-grid');
const whatsappNumber = "5511923661469";

function createCards() {
    grid.innerHTML = ''; // Clear initial static card
    brainrots.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-tilt', '');
        card.setAttribute('data-tilt-max', '15');
        card.setAttribute('data-tilt-speed', '400');
        card.setAttribute('data-tilt-perspective', '1000');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-img-container">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="card-info">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <a href="https://wa.me/${whatsappNumber}?text=Olá,%20vi%20o%20Brainrot%20${encodeURIComponent(item.name)}%20no%20site%20Robert%20Store%20e%20quero%20negociar!" 
                       target="_blank" class="buy-btn">Saiba Mais</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-initialize VanillaTilt for dynamic elements
    if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createCards();
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
