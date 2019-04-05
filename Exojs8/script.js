function Number(){
  var age = document.getElementById('age').value;
  if (age <=0 || isNaN(age)) {
    alert('veuillez renseigner un âge correcte');
  } else {
    if (age >= 18) {
      alert('vous êtes majeur');
    } else {
      alert('vous êtes mineur');
    }
  }
}
