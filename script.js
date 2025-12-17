// Funksioni për Filtrat e Produkteve
function filterProducts(category) {
    // 1. Gjej të gjitha kartat e produkteve dhe butonat
    let products = document.querySelectorAll('.product-item');
    let buttons = document.querySelectorAll('.filter-btn');

    // 2. Ndrysho ngjyrën e butonit aktiv
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category === 'all' ? 'gjitha' : category)) {
            btn.classList.add('active');
        }
    });

    // 3. Shfaq ose fsheh produktet
    products.forEach(product => {
        // Merr kategorinë e produktit nga data-category
        let productCategory = product.getAttribute('data-category');

        if (category === 'all' || productCategory === category) {
            product.classList.remove('hide');
            product.classList.add('show'); // Animacion opsional
        } else {
            product.classList.add('hide');
            product.classList.remove('show');
        }
    });
}