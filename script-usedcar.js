$(document).ready(function(){

  

  // ----- START DYNAMIQUE FILTER ITEMS -----
  $('#from-range-price').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#from-price').text(from);
    updateList();
  });
  $('#to-range-price').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#to-price').text(from);
  });
  $('#from-range-year').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#from-year').text(from);
  });
  $('#to-range-year').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#to-year').text(from);
  });
  $('#from-range-km').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#from-km').text(from);
  });
  $('#to-range-km').on('change', function(){
    let from = $(this).val();
    //alert(from);
    $('#to-km').text(from);
  });
  // ----- END DYNAMIQUE FILTER ITEMS -----

  function updateList(){
    
    let garageUpdate = []
    
    for (let i = 0; i < garage.length; i++) {
      if (garage[i].price > $('#from-range-price').val()) {
        garageUpdate.push(garage[i])
        console.log(garageUpdate)
      }
    }
    
    // ----- REMISE A ZERO AFFICHAGE -----
    $('.update-card-usedcar').html('<div></div>')
    
    // ----- AFFICHAGE DYNAMIQUE DES VOITURES -----
    garageUpdate.forEach(function(element,index) {
      // ----- CREATION ELEMENT HTML -----
      $('.update-card-usedcar').append(`<div class="card-usedcar" id="card${index}-usedcar"><div class="card-usedcar-content-img"><img/></div><div class="card-usedcar-content-text"><h6 id="marque"></h6><p><span id="model"></span><br><span id="year"></span><br><span id="type"></span><br><span id="km"></span><span>km</span></p><p id="price"><span></p></div></div></div>`)
      
      $(`#card${index}-usedcar #marque`).text(element.marque);
      $(`#card${index}-usedcar #model`).text(element.model);
      $(`#card${index}-usedcar #year`).text(element.year);
      $(`#card${index}-usedcar #type`).text(element.type);
      $(`#card${index}-usedcar #km`).text(element.km);
      $(`#card${index}-usedcar #price`).text(element.price);
      $(`#card${index}-usedcar img`).attr('src', `img/${element.img}`);
    })

  };





  class Cars {
    constructor(marque, model, year, type, km, price, img) {
      this.marque = marque
      this.model = model
      this.year = year
      this.type = type
      this.km = km
      this.price = price
      this.img = img
    }
  };

  
  let voiture1 = new Cars("Mazda", "RX7", 2002, "Essence", 50000, 45990, "Mazda-RX7.png");
  console.log(voiture1.price);
  let voiture2 = new Cars("Tesla", "Model 3", 2022, "Electrique", 17000, 33990, "Tesla-Model-3.png");
  console.log(voiture1.price);
  let voiture3 = new Cars("Volksvagen", "Touran", 2002, "Diesel", 28000, 49990, "Volksvagen-Touran.png");
  console.log(voiture1.price);
  let voiture4 = new Cars("Dodge", "Challenger", 2009, "Essence", 77000, 33990, "Dodge-Challenger.png");
  console.log(voiture1.price);
  let voiture5 = new Cars("Audi", "A3 Sportback", 2020, "Essence", 70000, 28990, "Audi-A3-Sportback.png");
  console.log(voiture1.price);

  let garage = [voiture1, voiture2, voiture3, voiture4, voiture5]

  const cars = [{marque: 'Mazda', model:'RX7', year:2001, type:"Essence", km:50000, price:45990, img:'Mazda-RX7.png'},
  {marque: 'Tesla', model:'Model 3', year:2022, type:"Electrique", km:17000, price:33990, img:'Tesla-Model-3.png'},
  {marque: 'Volksvagen', model:'Touran', year:2020, type:"Essence", km:28000, price:30990, img:'Volksvagen-Touran.png'},
  {marque: 'Dodge', model:'Challenger', year:2009, type:"Essence", km:77000, price:45990, img:'Dodge-Challenger.png'},
  {marque: 'Audi', model:'A3 Sportback', year:2016, type:"Essence", km:110000, price:25990, img:'Audi-A3-Sportback.png'},]






});