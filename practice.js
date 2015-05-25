//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age
// with the value being your age. Then alert your name using dot notation.

var meOne = {
  name: "Daniel",
  age: 27
}

// alert(meOne.name);


//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
// Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: 'metallica',
  food: 'pizza',
  person: 'Shelby',
  book: 'User Method',
  movie: 'Interstellar',
  holiday: 'Christmas'
}


//After you've made your object, add another key named 'car' with the value being your favorite car and
// then another key named 'brand' with the value being your favorite brand.

favoriteThings['car'] = "honda civic";
favoriteThings['brand'] = 'Mac';


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your
// favoriteThings object to be '50 Shades of Gray'.

favoriteThings['food'] = 'Lettuce';
favoriteThings['book'] = '50 Shades of Gray';


/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */


var backpack = {};

var item = 'firstPocket';
backpack[item] = 'chapstick';
backpack.color = 'blue';


//After you do the above, alert your entire backPack object.

// alert(backpack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

// console.log(backpack);



//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor,
// hairColor. Fill those properties in with the appropriate values.

var meTwo = {
  name: 'Daniel',
  age: 27,
  gender: 'male',
  married: true,
  eyeColor: 'brown',
  hairColor: 'black'
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in meTwo) {
  // console.log(meTwo[key]);
}



//Create an Object called 'album' with 5 keys named different song titles that you make up,
// with the values being the length of each song.

var album = {
  Breath: 2.1,
  Smoke: 2.5,
  Drink: 1.1,
  Happy: 2.4,
  Value: 1.7 
}

//Now, loop through your album object alerting every song title individually.

for (var key in album) {
  // console.log(key);
}




//Create an object called states that has 5 US states as properties with the values being their population
// (doesn't have to be accurate).

var states = {
  Utah: 2.4,
  Texas: 14.3,
  California: 20.1,
  Washington: 4.3,
  Arizona: 2.6
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var key in states) {
  if (states[key] > 10) {
    // console.log(key);
  }
}




//NEXT PROBLEM


var userOne = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

// Once you get your truthy Object, Change the remaining values in the object to be specific to you
// (name: 'your name', username: 'your username'), rather than my information.

var danielPerson = {
  name: 'Daniel',
  email: 'yofala@gmail.com',
  pwHash: 'U+Ldwegx2BYQW',
  birthday: 'May 9',
  username: 'dfala',
  age: 27
}


for (var key in userOne) {
  if (!userOne[key]) delete userOne[key];
  userOne[key] = danielPerson[key];
}



//NEXT PROBLEM




var userTwo = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
// Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

userTwo.name = 'Tyler S. McGinnis';
userTwo.email = 'tyler.mcginnis@devmounta.in';


// Now call the sayName method that's on the user object which will alert the users email

// userTwo.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.


var methodCollection = {};


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function () {
  alert('hello');
}

methodCollection.logHello = function () {
  console.log('hello');
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a
// new object with all of the information that you passed in.

var makePerson = function (name, birthday, ssn) {
  return {
    name: name,
    birthday: birthday,
    ssn: ssn
  }
}



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object
// and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

var makeCard = function (num, code, person) {
  return {
    num: num,
    code: code,
    person: person
  }
}

  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person
// or a credit card object. Now, create a bindCard function that takes in a person object as its first
// parameter and a creditcard object as its second parameter. Have bindCard merge the two parameters
// together into a new object which contains all the properties from the person as well as the creditcard.
*/

var bindCard = function (person, creditCard) {
  return {
    person: person,
    card: creditCard
  }
}


