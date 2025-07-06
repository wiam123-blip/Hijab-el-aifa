
function openFormulaire() {
    document.getElementById('authFormulaire').style.display = 'flex';
}

function closeFormulaire() {
    document.getElementById('authFormulaire').style.display = 'none';
}

function showForm(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);
    if (tab) tab.classList.add('active');
}


// ---------- FORMULAIRE PANIER ----------

function openPanier() {
    document.getElementById('authPanier').style.display = 'flex';
}

function fermerPanier() {
    document.getElementById('authPanier').style.display = 'none';
}

function showPanier(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));  // corrigé 'actives' en 'active'
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);
    if (tab) tab.classList.add('active');
}


// ---------- CHECKBOX "TOUT SÉLECTIONNER" ----------

document.addEventListener('DOMContentLoaded', () => {
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
        const productCheckboxes = document.querySelectorAll('.product-checkbox');
        selectAllCheckbox.addEventListener('change', function () {
            productCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
        });
    }
});


// ---------- FORMULAIRE FAVORI ----------

function openFavori() {
    document.getElementById('authFavori').style.display = 'flex';
}

function fermerFavori() {
    document.getElementById('authFavori').style.display = 'none';
}

function showFavori(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);
    if (tab) tab.classList.add('active');
}


// ---------- FORMULAIRE PAIEMENT ----------

document.querySelector('.payer')?.addEventListener('click', function () {
    document.querySelector('.authPaiement').style.display = 'flex';
    document.querySelector('.formulaire-panier').style.display = 'none'; // Masquer le panier
});

function fermerPaiement() {
    document.querySelector('.authPaiement').style.display = 'none'; // Cacher le paiement
    document.querySelector('.formulaire-panier').style.display = 'flex'; // Réafficher le panier
}


// ---------- FORMULAIRE ARTICLE ----------

function openArticle() {
    document.getElementById('authArticle').style.display = 'flex';
}

function fermerArticle() {
    document.getElementById('authArticle').style.display = 'none';
}

function showArticle(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);
    if (tab) tab.classList.add('active');
}


// ---------- CATALOGUE ----------

fetch('assets/json/produits.json')
    .then(response => response.json())
    .then(data => {
        const produits = data.produits;
        const container = document.getElementById('catalogue-container');

        produits.forEach(produit => {
            const div = document. createElement('div');
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


// ---------- CARROUSEL DE SLIDES ----------

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

    // Expose la fonction au scope global si utilisation de onclick inline
    window.changeSlide = changeSlide;
});
