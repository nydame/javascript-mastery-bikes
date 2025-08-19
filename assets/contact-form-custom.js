document.addEventListener("DOMContentLoaded", monitorBusinessAccountCheckbox);
document.addEventListener("DOMContentLoaded", monitorSelectReasonMenu);

function monitorBusinessAccountCheckbox() {
  const businessAccountCheckbox = document.getElementById("businessAccount");
  const businessNameDiv = document.getElementById("companyInfo");

  // hide this field by default
  businessNameDiv.classList.add("hidden");

  businessAccountCheckbox.addEventListener("change", (ev) => {
    if (ev.target.checked) {
      businessNameDiv.classList.remove("hidden");
    } else {
      businessNameDiv.classList.add("hidden");
    }
  });
}

function monitorSelectReasonMenu() {
    const selectReasonMenu = document.getElementById("contactReason");
    const productNameField = document.getElementById("productNameField");
    const orderNumberField = document.getElementById("orderNumberField");

    // hide product name and order number fields by default because there are other options
    productNameField.classList.add("hidden");
    orderNumberField.classList.add("hidden");
    
    selectReasonMenu.addEventListener("change", (ev) => {
        productNameField.classList.add("hidden");
        orderNumberField.classList.add("hidden");

        if (ev.target.value === "product") {
            productNameField.classList.remove("hidden");
        }

        else if (ev.target.value === "order") {
            orderNumberField.classList.remove("hidden");
        }
    });
}