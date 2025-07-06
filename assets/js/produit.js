
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
// Récupérer l'ID du produit depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('assets/json/produits.json')
  .then(response => response.json())
  .then(data => {
    const produit = data.produits.find(p => p.id == id);

    if (produit) {
      document.getElementById('image-produit').src = produit.image;
      document.getElementById('image-produit').alt = produit.titre;
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