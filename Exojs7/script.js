function Number(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //multiplie de la pointure indiqué par 2
  // var newshoeSize = shoeSize * 2;
  // //ajout de 5 au résultat
  // var newAdd = newshoeSize + 5;
  // //multiplie le total par 50
  // var allMultiply = newAdd * 50;
  // //soustrait l'année de naissance par raaport au résultat précédent
  // var substractofyear = allMultiply - yearOfBirth;
  // //ajout au total 1769
  // var result = substractofyear + 1769;
  var result;
  result = shoeSize * 2;
  result = result + 5;
  result = result * 50;
  result = result - yearOfBirth;
  result = result + 1769;
  if (isNaN(shoeSize) || isNaN(yearOfBirth)) {
    alert('Veuillez saisir uniquement un nombre');
  } else {
    alert(result);
  }
}
