document.addEventListener("DOMContentLoaded", function() {
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const nextButtons = document.querySelectorAll(".next-button");
    const previousButtons = document.querySelectorAll(".previous-button");
    const submitButton = document.querySelector(".submit-button");
    const themes = document.querySelectorAll(".theme");
    let selectedTheme = null;

    steps[currentStep].classList.add("active");

    themes.forEach(theme => {
        const applyButton = theme.querySelector(".apply-button");
        applyButton.addEventListener("click", () => {
            themes.forEach(t => {
                t.classList.remove("selected");
                t.querySelector('.selected-icon').style.display = 'none';
            });
            theme.classList.add("selected");
            theme.querySelector('.selected-icon').style.display = 'block';
            selectedTheme = theme.dataset.theme;
        });
    });
    

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                steps[currentStep].classList.remove("active");
                currentStep++;
                steps[currentStep].classList.add("active");
            }
        });
    });

    previousButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                steps[currentStep].classList.remove("active");
                currentStep--;
                steps[currentStep].classList.add("active");
            }
        });
    });

    submitButton.addEventListener("click", () => {
        const formData = {
            theme: selectedTheme,
            productType: document.getElementById("product-type").value,
            category: document.getElementById("category").value,
            subcategory: document.getElementById("subcategory").value,
            productName: document.getElementById("product-name").value,
            productDescription: document.getElementById("product-description").value,
            productImage: document.getElementById("product-image").value,
            skuCode: document.getElementById("sku-code").value,
            netPrice: document.getElementById("net-price").value,
            listPrice: document.getElementById("list-price").value,
            discountPercentage: document.getElementById("discount-percentage").value,
            gstRate: document.getElementById("gst-rate").value,
            shippingCharges: document.getElementById("shipping-charges").value,
            stockLevel: document.getElementById("stock-level").value
        };

        document.getElementById("submitted-data").innerText = JSON.stringify(formData, null, 2);

        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
    });
});

