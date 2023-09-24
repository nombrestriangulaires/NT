document.getElementById('showMoreButton').addEventListener('click', function() {
  var hiddenElement = document.getElementById('hiddenElement');
  var box1 = document.querySelector('.box-1');
  var showMoreButton = document.getElementById('showMoreButton');

  if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
    hiddenElement.style.display = 'block';
    box1.style.height = 'auto';
    showMoreButton.textContent = 'Afficher -';
    hiddenElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    hiddenElement.style.display = 'none';
    box1.style.height = 'auto';
    showMoreButton.textContent = 'Afficher +';
  }
});


function calculateTriangularNumber() {
    let input = document.getElementById("input").value;
    let number = parseInt(input);
    let triangularNumber = 0;
    for (let i = 1; i <= number; i++) {
        triangularNumber += i;
    }
    document.getElementById("triangularResult").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
    document.getElementById("result").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
}

function toggleMenu() {
    var menu = document.getElementById("result");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function showAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';
}

