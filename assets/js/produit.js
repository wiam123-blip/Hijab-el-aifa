
function openFormulaire() {
    document.getElementById('authFormulaire').style.display = 'flex';//affiche le formulaire
}

function closeFormulaire() {
    document.getElementById('authFormulaire').style.display = 'none';//cache le formulaire
}

function showForm(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));//désactive tous les formulaire
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
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
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));  //désactive tous les formulaire
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
    document.getElementById('authFavori').style.display = 'flex';//affiche le formulaire
}

function fermerFavori() {
    document.getElementById('authFavori').style.display = 'none';//cache le formulaire
}

function showFavori(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));//désactive tous les formulaire
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
    if (tab) tab.classList.add('active');
}


//FORMULAIRE PAIEMENT

document.querySelector('.payer')?.addEventListener('click', function () {
    document.querySelector('.authPaiement').style.display = 'flex';
    document.querySelector('.formulaire-panier').style.display = 'none'; // Masquer le panier
});

function fermerPaiement() {
    document.querySelector('.authPaiement').style.display = 'none'; // Cacher le paiement
    document.querySelector('.formulaire-panier').style.display = 'flex'; // Réafficher le panier
}


//FORMULAIRE ARTICLE

function openArticle() {
    document.getElementById('authArticle').style.display = 'flex';//affiche le formulaire
}

function fermerArticle() {
    document.getElementById('authArticle').style.display = 'none';//cache le formulaire
}

function showArticle(formId) {
    document.querySelectorAll('form').forEach(f => f.classList.remove('active'));//désactive tous les formulaire
    const form = document.getElementById(formId);
    if (form) form.classList.add('active');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));//désactive tous les onglets
    const tab = document.querySelector(`.tab[onclick*="${formId}"]`);//cherche l'onglet tab
    if (tab) tab.classList.add('active');
}

// Récupérer l'ID du produit depuis l'url
const urlParams = new URLSearchParams(window.location.search);//récupère le produit et stocker dans id
const id = urlParams.get('id');

fetch('assets/json/produits.json')
  .then(response => response.json())
  .then(data => {
    const produit = data.produits.find(p => p.id == id);//cherche dans la liste des produits qui a le meme id

    if (produit) {
      document.getElementById('image-produit').src = produit.image;
      document.getElementById('titre-produit').textContent = produit.titre;
      document.getElementById('prix-produit').textContent = produit.prix;
      document.getElementById('description-produit').textContent = produit.description;
    } else {
      document.body.innerHTML = "<h2>Produit introuvable</h2>";
    }
  })
  .catch(error => {
    console.error('Erreur JSON :', error);
    
  });
  