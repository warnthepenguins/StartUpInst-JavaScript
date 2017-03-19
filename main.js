/*////////////////////////////////////////////////////
                    FUNCTIONS
////////////////////////////////////////////////////*/

// Function Taking in Parameters

function helloWorld(name){
	alert('Hello World, my name is ' + name + '!');
};

// Self invoking function Function
(function () {
    var intro = "Hello, my name is ",
    	name = "", // Fill in your name here
    	outro = ", and I just created an Annyomous Function";
    
    //Check to make sure a name exsits 
    if(name === "" || null || undefinded){
    	return
    }
 	alert(intro + name + outro);
 	return;
})();


// Annoymous Function / Utility Function Example
function todaysDate(){
	var date = new Date();
	alert('Today\'s date is: ' + date);
	return;
};


// Event Listener Example function
var target = document.getElementById('date-event-listen');

target.addEventListener("click", function(){
    todaysDate();
});

/*////////////////////////////////////////////////////
                      ARRAYS
////////////////////////////////////////////////////*/

var startUpInstituteStaff = ["Rich", "David", 
"Stephanie", "Lauren", "A Lot of others"];

var Steph = startUpInstituteStaff[2];

//Map Over the items in the Array
startUpInstituteStaff.forEach(function(item, array) {
  console.log(item);
});

//Add an item to the end of the Array
function addPerson(name){
startUpInstituteStaff.push("My name");
console.log(startUpInstituteStaff.length);
}

// Remove the last Item in the Array
function deleteLastPerson(){
	var newArray = startUpInstituteStaff.pop();
	startUpInstituteStaff = newArray
	console.log(startUpInstituteStaff);
};
// Remove the first Item in the Array
function deleteFirstPerson(){
	var newArray = startUpInstituteStaff.shift();
	startUpInstituteStaff = newArray
	console.log(startUpInstituteStaff);
};

//Find the position of the Item in the Array

function findPersonPostion(name){
	var position = startUpInstituteStaff.indexOf(name);
	console.log(name);
};


/*////////////////////////////////////////////////////
                      OBJECTS
////////////////////////////////////////////////////*/

//Declaring an Object

var Mike = {
	firstName: 'Mike',
	lastName: 'McGrath',
	age: 25,
	occupation: 'Sales Engineer',
	company: 'HapYak'
},

//Replicate the Above Format
	You{
	firstName: '',
	lastName: '',
	age: 00,
	occupation: '',
	company: ''

	};


function getFirstName(person){
	alert(person.firstName);
};

function getFullName(person){
	alert(person.firstName + ' ' + person.lastName);
};

function addNewProperty(person, property, value){
	person.proerty = value;
	console.log(person);
};

/*////////////////////////////////////////////////////
                   OBJECTS ADVANCED
////////////////////////////////////////////////////*/



//Function that collects data from a form with an optional callback
function getInformation(callback){
	var data = {
		firstName: document.getElementById('first_name').value,
		lastName: document.getElementById('last_name').value,
		track:  document.getElementById('track').value,
		dreamCareer: document.getElementById('career').value
	}
	console.log(data); //Loggin out our Data
	if(!callback){
		return
	}
	callback(data); // Calling the text function
};

// Using an Object inside a function
function introduction(data){
	var fullName = data.firstName + ' ' + data.lastName,
		track = data.track,
		dreamCareer = data.dreamCareer,
		message = 'Hi my name is ' + fullName + '.' + ' I\'m in the ' + track + ' track. My dream job would be working as a ' + dreamCareer + '.'
		target = document.getElementById('introduction');
		// writing the message to the dom
	target.innerHTML = 	message	;
	return 
}
