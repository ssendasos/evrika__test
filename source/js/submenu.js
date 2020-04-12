var saleItem = document.getElementById("sale__item");
var submenu = document.getElementById('submenu');
        

    saleItem.addEventListener('mouseover', function(evt) {
        submenu.classList.add('vision');
        evt.preventDefault();
    });

    saleItem.addEventListener('mouseout', function(evt) {
        if (evt.relatedTarget == submenu) {
            submenu.classList.add('vision');
        } else {
            submenu.classList.remove('vision');
        }
        evt.preventDefault();
    });

    submenu.addEventListener('mousout', function(evt) {
        if (evt.relatedTarget != submenu) {
            submenu.classList.remove('vision');
        }
        evt.preventDefault();
    });