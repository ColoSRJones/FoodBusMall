"strict mode"

// declare empty array
let selectionArray = []

let elImageContainer = document.getElementById('imageContainer')
let elStartOver = document.getElementById('startOver')


let BusMall = function (name, filePath, id){
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.selected = 0;
  this.shown = 0
}

let totalSelected;

if(localStorage.length > 0){
  let getData = localStorage.getItem('BusMallStorage');
  selectionArray = JSON.parse(getData);
  let getMoreData = localStorage.getItem('TotalSelectedStorage');
  totalSelected = parseInt(getMoreData)
} else{
  totalSelected = 0; //instantiating new reference to our images objects
  let steak = new BusMall('Steak', './food/a-steak-on-a-grill-right-after-being-flipped.jpg', 'steak');
  let baconEgg = new BusMall('Bacon Eggs', './food/bacon-and-eggs-breakfast.jpg', 'bacon eggs');
  let nachos = new BusMall('Nachos', './food/baked-dip-with-nachos.jpg', 'nacho dips');
  let tacos = new BusMall('Tacos', './food/bar-tacos.jpg', 'tacos');
  let berries = new BusMall('Berries', './food/berries-granola.jpg', 'berries');
  let cheesecake = new BusMall('Cheesecake', './food/berry-cheesecake.jpg', 'cheesecake');
  let blueberries = new BusMall('Blueberries', './food/blueberries-in-hand.jpg', 'blueberries')
  let breakfast = new BusMall('Breakfast', './food/breakfast-from-above.jpg', 'breakfast');
  let artichoke = new BusMall('Artichoke', './food/cheese-and-artichoke-pizza-with-slicer.jpg', 'artichoke');
  let chestnuts = new BusMall('Chestnuts', './food/chestnuts-texture.jpeg', 'chestnuts');
  let chocolateCake = new BusMall('Chocolate Cake', './food/chocolate-cake-with-toffee-sauced-drizzled-over.jpg', 'chocolate cake');
  let dinnerSalad = new BusMall('Dinner Salad', './food/dinner-salad.jpg', 'dinner salad');
  let freshPizza = new BusMall('Margarita Pizza', './food/first-slice-of-fresh-margarita-pizza.jpg', 'margarita pizza');
  let broiledSteak = new BusMall('Flame Steak', './food/flame-broiled-steak.jpg', 'flame steak');
  let appetizers = new BusMall('Appetizers', './food/fresh-appetizers-cocktails.jpg', 'appetizers');
  let bbqburgers = new BusMall('BBQ Burgers', './food/full-bbq-with-burgers-and-bbq-sauce.jpg', 'bbq burgers');
  let grillMeat = new BusMall('Grill Meat', './food/full-grill-full-of-meat-and-veggies.jpg', 'grill meat');
  let chickenKabobs = new BusMall('Chicken Kabobs', './food/grilled-chicken-kabobs.jpg', 'chicken kabobs');
  let avocado = new BusMall('Avocado', './food/half-of-an-avocado.jpg', 'avocado');
  let burgerFries = new BusMall('Burgers Fries', './food/hamburger-and-fries.jpg', 'burgers fries');
  let strawberries = new BusMall('Strawberries', './food/handful-of-strawberries.jpg', 'strawberries');
  let donut = new BusMall('Donut', './food/hot-fresh-donut.jpg', 'donut');
  let apricots = new BusMall('Apricots', './food/overhead-shot-of-fresh-apricots-being-halved-and-pitted.jpg', 'apricots');
  let ribEye = new BusMall('Rib Eye', './food/rib-eye-steak-on-bbq.jpg', 'ribeye steak');
  let turkeyLegs = new BusMall('Turkey Legs', './food/turkey-legs-on-bbq.jpg', 'turkey legs');
  let pancakes = new BusMall('Pancakes', './food/whole-grain-healthy-pancakes.jpg', 'pancakes');
  let flmaeSteak = new BusMall('Iron Wok', './food/steak-and-flames-on-the-grill.jpg', 'iron wok');
  let restaurant = new BusMall('Restaurant Breakfast', './food/restaurant-breakfast.jpg', 'restaurant breakfast');
  selectionArray.push(steak, baconEgg, nachos, tacos, berries, cheesecake, blueberries, bbqburgers, breakfast, broiledSteak, artichoke, chestnuts, chocolateCake, dinnerSalad, freshPizza, appetizers, grillMeat, chickenKabobs, avocado, burgerFries, strawberries, donut, apricots, ribEye, turkeyLegs, pancakes, flmaeSteak, restaurant) 
} //all pushed to fill the empty selectionArray

// Create a function to shuffle/randomize the images in the array
function shuffleImage(){
  let randomNumber = Math.floor(Math.random()* selectionArray.length);
  let imageIndex = selectionArray[randomNumber];
  return imageIndex; //verify use of imageIndex and imageObject usage
}

// Declarations/Placeholders for three images as per app parameters
let firstImage;
let secondImage;
let thirdImage;

//function called to ensure images are seen once page is initiated
displayImages()

// declare a function to display images in body of page
function displayImages(){
  elImageContainer.innerHTML = '';
  for(let i=0; i<3; i++){
    let imageObject = shuffleImage();
    if(i===0){
      firstImage = imageObject;
    }else if (i === 1){
      while(imageObject.id === firstImage.id){
        imageObject = shuffleImage();
      }
      secondImage = imageObject;
    }else {
      while(imageObject.id === firstImage.id || imageObject.id === secondImage.id){
        imageObject = shuffleImage();
      }
      thirdImage = imageObject
    } 
    let elImage = document.createElement('img');
    elImageContainer.appendChild(elImage);
    elImage.setAttribute('id', imageObject.id);
    elImage.src = imageObject.filePath;
    elImage.addEventListener('click', imageClicked);
    imageObject.shown += 1;
    if(totalSelected > 24){
      elImage.removeEventListener('click', imageClicked);
    } // Display chart function declared below to show chart at the end of eventListener
    let elCountDown = document.getElementById('selectTracker');
    elCountDown.innerHTML = 25 - totalSelected;
  }  
}

// displayImages()
//function called after function declaration as well to facilitate image listening functionalities

function startOver(){
  localStorage.clear();
  location.reload();
}


function imageClicked(event){
  console.log(localStorage);
  if (event.target.id === firstImage.id){
    firstImage.selected += 1;
  }else if(event.target.id === secondImage.id){
    secondImage.selected += 1;
  }else if(event.target.id === thirdImage.id){
    thirdImage.selected += 1;
  };
  totalSelected += 1;
  console.log(totalSelected);
  displayImages();
  localStorage.setItem('BusMallStorage', JSON.stringify(selectionArray));
  localStorage.setItem('TotalSelectedStorage', totalSelected);
  displayMyChart(); 
};

function displayMyChart(){
  if(totalSelected > 24){
    elImageContainer.innerHTML = '';
    displayChart();
  }
};