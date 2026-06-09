document.addEventListener("DOMContentLoaded", () => {
    
    // Кнопка Back to Top
    const scrollToTopBtn = document.getElementById("scrollTopBtn");

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
