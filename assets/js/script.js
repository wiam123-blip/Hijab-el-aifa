

const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

   

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


      


