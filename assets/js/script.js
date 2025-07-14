
function openFormulaire() {
    document.getElementById('authFormulaire').style.display = 'flex'; //affiche le formulaire
}

function closeFormulaire() {
    document.getElementById('authFormulaire').style.display = 'none'; //cache le formulaire
}

function showForm(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active')); //désactive tous les formulaires
    const form = document.getElementById(formId); 
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`); //cherche l'onglet tab
    if (tab) tab.classList.add('active');
}


//FORMULAIRE PANIER

function openPanier() {
    document.getElementById('authPanier').style.display = 'flex';//affiche le formulaire
}

function fermerPanier() {
    document.getElementById('authPanier').style.display = 'none';//cache le formulaire
}

function showPanier(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active')); //désactive tous les formulaires
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
    if (tab) tab.classList.add('active');
}


//CHECKBOX

document.addEventListener('DOMContentLoaded', () => {
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
        const productCheckboxes = document.querySelectorAll('.product-checkbox');
        selectAllCheckbox.addEventListener('change', function () {
            productCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
        });
    }
});


//FORMULAIRE FAVORI

function openFavori() {
    document.getElementById('authFavori').style.display = 'flex'; //affiche le formulaire
}

function fermerFavori() {
    document.getElementById('authFavori').style.display = 'none';//cache le formulaire
}

function showFavori(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));//désactive tous les formulaires
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
    if (tab) tab.classList.add('active');
}


//FORMULAIRE PAIEMENT

document.querySelector('.payer')?.addEventListener('click', function () {
    document.querySelector('.authPaiement').style.display = 'flex';
    document.querySelector('.formulaire-panier').style.display = 'none'; 
});

function fermerPaiement() {
    document.querySelector('.authPaiement').style.display = 'none';//cache le formulaire
    document.querySelector('.formulaire-panier').style.display = 'flex'; 
}


//FORMULAIRE ARTICLE

function openArticle() {
    document.getElementById('authArticle').style.display = 'flex';//affiche le formulaire
}

function fermerArticle() {
    document.getElementById('authArticle').style.display = 'none';//cache le formulaire
}

function showArticle(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));//désactive tous les formulaires
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
    if (tab) tab.classList.add('active');
}


//CATALOGUE 
fetch('assets/json/produits.json')
    .then(response => response.json())
    .then(data => {
        const produits = data.produits;//récupère la liste des produits
        const container = document.getElementById('catalogue-container');//sélectionne la div HTML pour ajouter les produits

        produits.forEach(produit => {
            const div = document. createElement('div'); //On crée une nouvelle div pour chaque produit
            div.className = 'produit';

            div.innerHTML = `
              <a href="produit.html?id=${produit.id}">
                 <img src="${produit.image}" alt="${produit.titre}">
              </a>
              <h3>${produit.titre}</h3>
              <p><strong>${produit.prix}</strong></p>`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error("Erreur lors du chargement du catalogue :", error);
    });


//CARROUSEL

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        else if (currentIndex >= slides.length) currentIndex = 0;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    window.changeSlide = changeSlide;
});
