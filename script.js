function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("petitionForm");
  const signedList = document.getElementById("signedList");
  const modal = document.getElementById("modal");
  const modalClose = document.querySelector(".close");
  const clearSignaturesButton = document.getElementById("clearSignatures");

  // Retrieve signatures from local storage and display them
  const signatures = JSON.parse(localStorage.getItem("signatures")) || [];
  signatures.forEach(signature => {
    const listItem = document.createElement("li");
    listItem.textContent = signature;
    signedList.appendChild(listItem);
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const hometown = document.getElementById("hometown").value;

    const signature = `${name} from ${hometown} signed this petition ❤️`;
    const listItem = document.createElement("li");
    listItem.textContent = signature;
    signedList.appendChild(listItem);

    signatures.push(signature);
    localStorage.setItem("signatures", JSON.stringify(signatures));

    form.reset();

    modal.style.display = "block";
    setTimeout(function() {
      modal.style.display = "none";
    }, 3000);
  });

  modalClose.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  clearSignaturesButton.addEventListener("click", function() {
    localStorage.removeItem("signatures");
    signedList.innerHTML = "";
  });
});
/*
ScrollReveal({
  reset: true,
  distance:'60px',
  duration: 2500,
  delay:400
});
ScrollReveal().reveal('.title1',{delay:500, origin:'left'});
ScrollReveal().reveal('.didyouknow .boximg',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.how-we-use-donation .children-gallery-row ',{delay: 600, origin:''});
ScrollReveal().reveal('.how-we-use-donation .how-we-use-donation-col ',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.educate .pledge ',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.educate .card ',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.form-container',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.text-container',{delay: 600, origin:'left'});
*/