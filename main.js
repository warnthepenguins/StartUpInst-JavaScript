/*////////////////////////////////////////////////////
                    FUNCTIONS
////////////////////////////////////////////////////*/

// Function Taking in Parameters

// function helloWorld(name) {
//     alert('Hello World, my name is ' + name + '!');
// };
//
// // Self invoking function Function ***NEEDS FIXING, FIND THE BUG******
// (function() {
//     var intro = "Hello, my name is ",
//         name = "",
//         outro = ", and I just created an Annyomous Function";
//
//     //Check to make sure a name exsits
//     if (name === "" || null || undefined) {
//         return
//     }
//     alert(intro + name + outro);
//     return;
// })();
//
//
// // Annoymous Function / Utility Function Example
// function todaysDate() {
//     var date = new Date();
//     alert('Today\'s date is: ' + date);
//     return;
// };


// Event Listener Example function
var mouseX = 0, mouseY = 0, scrollY = 0,
    growAmount = 1;
var obnoxiousTimeout = "unclicked";
// var target = document.getElementById('date-event-listen');
//
// target.addEventListener("click", function() {
//     todaysDate();
// });

document.addEventListener("mousemove", function(theEvent) {
  mouseX = theEvent.pageX - window.pageXOffset;
  mouseY = theEvent.pageY - window.pageYOffset;
  // console.log(mouseX, mouseY);
})

document.addEventListener("scroll", function(theEvent) {
  // mouseX = window.pageXOffset;
  scrollY = window.pageYOffset;
  // console.log(mouseX, mouseY);
})


function stopHittingYourself() {
  growAmount *= 1.125;
  if (obnoxiousTimeout === "unclicked") {
    document.getElementById("stop-hitting-yourself").innerHTML = "Stop hitting yourself.";
    document.getElementById("stop-hitting-yourself").style.position = "absolute";
    document.getElementById("stop-hitting-yourself").style.display = "none";
    document.getElementById("stop-hitting-yourself").addEventListener('click', stopStopHittingYourself);
    obnoxiousTimeout = setTimeout(stopHittingYourself, Math.random() * 3000 + 1000);
    console.log(obnoxiousTimeout);
  } else if (typeof obnoxiousTimeout === 'number') {
    console.log("It's a number, displaying");
    document.getElementById("stop-hitting-yourself").style.display = "block";
    document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    document.getElementById("stop-hitting-yourself").style.top = (mouseY + scrollY) + "px";
    document.getElementById("stop-hitting-yourself").style.left = (mouseX) + "px";
    setTimeout(function() {
      document.getElementById("stop-hitting-yourself").focus();
      // window.scrollTo(document.getElementById("stop-hitting-yourself").getBoundingClientRect().left, document.getElementById("stop-hitting-yourself").getBoundingClientRect().top);
    }, 100);

    document.getElementById("stop-hitting-yourself").style.transform = "scale(" + growAmount + ")";
    obnoxiousTimeout = setTimeout(stopHittingYourself, Math.random() * 4000);
    // console.log("Stop hitting yourself.");
  } else if (obnoxiousTimeout === "stopped") {
    obnoxiousTimeout = "unclicked";
  }
};

function stopStopHittingYourself(theEvent) {
  clearTimeout(obnoxiousTimeout);
  obnoxiousTimeout = "stopped";
  document.getElementById("stop-hitting-yourself").innerHTML = "okay. I'll do something else if you click me again.";
  document.getElementById("stop-hitting-yourself").style.transform = "scale(1)";
  theEvent.target.removeEventListener(theEvent.type, arguments.callee);
  return;
}

/*////////////////////////////////////////////////////
                      ARRAYS

                  CODEPEN EXAMPLE:
      http://codepen.io/mmcgrath2010/pen/rypXwX

////////////////////////////////////////////////////*/

// Different Types of Arrays

// Array with Strings
var startUpInstituteStaff = ["Rich", "David",
    "Stephanie", "Lauren", "A Lot of others"
];

// Arrary of Objects
var arrayOfObjects = [{
    name: "Mike McGrath",
    track: "Design",
    graduated: true,
    yearOfCompletion: 2015


}, {
    name: "Joe Developer",
    track: "Developer",
    graduated: false,
    yearOfCompletion: "N/A"


}, {
    name: "Bob Desinger",
    track: "Designer",
    graduated: true,
    yearOfCompletion: 2016
}];

// Array of arrays
var arrayOfArrays = [
    ["Mike", "McGrath"],
    ["Bob", "Designer"],
    ["Joe", "Developer"]
]

var Steph = startUpInstituteStaff[2];

//Map Over the items in the Array
function mapOverArray() {
    startUpInstituteStaff.forEach(function(item, array) {
        console.log(item);
    });
};

//Working with Arrays

//Add an item to the end of the Array
function addPerson(name) {
    startUpInstituteStaff.push(name);
    console.log(startUpInstituteStaff.length);
}

// Remove the last Item in the Array
function deleteLastPerson() {
    var newArray = startUpInstituteStaff.pop();
    startUpInstituteStaff = newArray
    console.log(startUpInstituteStaff);
};
// Remove the first Item in the Array
function deleteFirstPerson() {
    var newArray = startUpInstituteStaff.shift();
    startUpInstituteStaff = newArray;
    console.log(startUpInstituteStaff);
};

//Find the position of the Item in the Array

function findPersonPostion(name) {
    var position = startUpInstituteStaff.indexOf(name);
    console.log(position);
};
//Remove an item by index position
function removeItemByIndex(index) {
    var removedItem = startUpInstituteStaff.splice(index, 1);
    console.log(removedItem)
    console.log('The New Array is: ' + startUpInstituteStaff)
};

//Make a copy of an array

function copyArray() {
    var copiedArrary = startUpInstituteStaff.slice();
    console.log('The copied array is: ' + startUpInstituteStaff)
};


/*////////////////////////////////////////////////////
                      OBJECTS

                CODE PEN EXAMPLE:
    http://codepen.io/mmcgrath2010/pen/dvJxRO

////////////////////////////////////////////////////*/



//Declaring an Object
var Mike = {
        firstName: 'Mike',
        lastName: 'McGrath',
        age: 25,
        occupation: 'Sales Engineer',
        company: 'HapYak'
    },
    arrayOfPeople = []

function getFirstName(person) {
    alert(person.firstName);
};

function getFullName(person) {
    alert(person.firstName + ' ' + person.lastName);
};

function addNewProperty(person, property, value) {
    person.proerty = value;
    console.log(person);
};

//Creating a new Person Object Constuctor
function Person(firstName, lastName, age, occupation, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.company = company;
};

//Creating a new person Object Function and Pushing it to the array of People
function createNewPerson(firstName, lastName, age, occupation, company) {
    var newPerson= new Person(firstName, lastName, age, occupation, company);
    console.log(newPerson);
    arrayOfPeople.push(newPerson);
    console.log(arrayOfPeople);
};


/*////////////////////////////////////////////////////
                   OBJECTS ADVANCED
////////////////////////////////////////////////////*/

// HOW CAN WE USE THE INFORMATION FROM getInformtion() to call introdution()??????


//Function that collects data from a form with an optional callback
function getInformation(callback) {
    var data = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        track: document.getElementById('track').value,
        dreamCareer: document.getElementById('career').value
    }
    console.log(data); //Loggin out our Data
    if (!callback) {
        return
    }
    callback(data); // Calling the next function
};

// Using an Object inside a function
function introduction(data) {
    var fullName = data.firstName + ' ' + data.lastName,
        track = data.track,
        dreamCareer = data.dreamCareer,
        message = 'Hi my name is ' + fullName + '.' + ' I\'m in the ' + track + ' track. My dream job would be working as a ' + dreamCareer + '.'
    target = document.getElementById('introduction');
    // writing the message to the dom
    target.innerHTML = message;
    return
}
