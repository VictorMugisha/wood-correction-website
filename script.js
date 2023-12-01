
// Garelly Description Display On Hover

let garellyImage = document.querySelectorAll(".garelly-section .garelly-container .image");

garellyImage.forEach(garelly => {
    let garellyDesc = garelly.querySelector(".garelly-section .garelly-container .image .product-description");
    garellyDesc.classList.remove('product-description');

    garelly.addEventListener('click', () => {
        garellyDesc.classList.toggle('product-description');
    });
});

// Removing and Adding Active class from garelly navigation items once other one is clicked

const removeActiveGarelly = () => {
    garellyCategories.forEach(garelly => {
        garelly.classList.remove('active');
    });
}

let garellyCategories = document.querySelectorAll(".garelly-categories ul li");
garellyCategories.forEach(garellyCategory => {
    garellyCategory.addEventListener('click', () => {
        removeActiveGarelly();
        garellyCategory.classList.toggle('active');
    });
});


// Removing and Adding Active class from index products navigation items once other one is clicked
let productsFilters = document.querySelectorAll(".our-products .products-nav ul li");
const removeActiveProduct = () => {
    productsFilters.forEach(productsFilter => {
        productsFilter.classList.remove("active");
    });
}

productsFilters.forEach(productsFilter => {
    productsFilter.addEventListener("click", () => {
        removeActiveProduct();
        productsFilter.classList.add("active");
    })
});


// Mobile Navigation Menu 
function openMobileNav() {
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
}
function closeMobileNav() {
    let mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = "none";
    document.body.style.overflowY = "visible";
}