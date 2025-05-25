

const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
});

// Formulaire connexion

function openFormulaire() {
        document.getElementById('authFormulaire').style.display = 'flex';
}
    
function closeFormulaire() {
        document.getElementById('authFormulaire').style.display = 'none';
}
    
function showForm(formId) {
        document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
        document.getElementById(formId).classList.add('active');
    
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`.tab[onclick*="${formId}"]`).classList.add('active');
}

// formulaire favoris

function openPanier() {
        document.getElementById('authPanier').style.display = 'flex';
}
    
function fermerPanier() {
        document.getElementById('authPanier').style.display = 'none';
}
    
function showPanier(formId) {
        document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
        document.getElementById(formId).classList.add('active');
    
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`.tab[onclick*="${formId}"]`).classList.add('active');
}

const selectAllCheckbox = document.getElementById('selectAll');
  const productCheckboxes = document.querySelectorAll('.product-checkbox');

  selectAllCheckbox.addEventListener('change', function () {
    productCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
  });
     
  
  // formulaire Favori

function openFavori() {
        document.getElementById('authFavori').style.display = 'flex';
}
    
function fermerFavori() {
        document.getElementById('authFavori').style.display = 'none';
}
    
function showFavori(formId) {
        document.querySelectorAll('form').forEach(f => f.classList.remove('active'));
        document.getElementById(formId).classList.add('active');
    
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector(`.tab[onclick*="${formId}"]`).classList.add('active');
}




// Ouvrir le formulaire de paiement
document.querySelector('.payer').addEventListener('click', function () {
        document.querySelector('.authPaiement').style.display = 'flex';
        document.querySelector('.formulaire-panier').style.display = 'none'; // Masquer le panier
    });
    
    // Fermer le formulaire de paiement
    function fermerPaiement() {
        document.querySelector('.authPaiement').style.display = 'none'; // Cacher le paiement
           // Réafficher le panier
    }