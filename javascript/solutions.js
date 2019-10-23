
// alert('Hello Worlds!');












/*Notes:

 - The primitive data types include: boolean, number, string, null, and undefined
 - variable names cant start with numbers but can contain numbers
 - They can contain numbers letters, $, and _
 - parseInt("string",base)
 - Use string.slice(x,y) to indicate what you want to slice.
 - string.toUpperCase() will change all the chars in the strng to uppercase
 - Use the key term document; in the console to return the entire document
 - document.firstElementChild.firstElementChild; returns the head, this is because of the dom tree structure
 - We can set a javascript variable object to point an html object, than we can change its value using EX:
 - var test = document.firstElementChild.lastElementChild;
 - test.innerHTML = "Hello worlds";
 - The above code will change the whats inside the  <> <> of the html element that was selected.
 - test.style.color = "red" will change the font color to red.
 - Also be sure to put the value of the dom object in "".
 - In the dom, each html node object has both properties and methods.
 - Properties describe something about the object, and methods do something to the object.
 - We can get and set property values by using test.style.color = red;
 - test.method(); Is the syntax for calling a method.
 - Another document method to retrieve html dom objects is document.querySelector("#hello");
 - Here the id is Hello.
 - document.getElementsByTagName("h1");
 - It will return an array of all of the h1 objects.
 - querySelector works by return the html object of the selector, the selector in CSS is everything that comes before the {}
 - For example, .title #container-main h1 etcc.
 - When doing heirachical selectors there is a space between the selectors
 - When using querySelector it is a good to use heirachical selectors.
 - When combining selectors, things that occur in the same element ie <li class="title">, then we use document.querySelector(li.title)
 - As you can see there are no spaces.
 - With querySelector you get the first instance of the html element
 - To get all of the html dom objects, you would have to use document.querySelectorAll("");
 - Similar to getElementsByTagName() you will get an array of all the html objects
 - getElementsByTagName or ById, are very broad and make it difficult to target a specific html object without chaning the html
 - Therefore querySelector is the more powerful and commonly used dom method to achieve this.
 - We can use document.querySelector("").style.fontSize = 15px;
 - As you can see it is different than font-size which is the CSS naming convention
 - We can find all of the style object properties by looking up the documentation
 - Also the value needs to be in a string
 - If you need to change the style of an object after an event, then we dont directly change the css using javascript.
 - Instead, we make separate css classes that will hide or change the color, and then add that class to the element using javascript.
 - So we keep all of our styles in the css file, but we turn it on or off using javascript
 - document.querySelector("btn").classList.add("invisible"); or document.querySelector("btn").classList.remove("invisible");
 - document.querySelector("btn").classList.toggle("invisible"); is very useful, if invisible is removed, then add it, if it is added, then remove it.
 - document.querySelector("").innerHTML gives you all the HTML within the brackets of the selected element
 - While document.querySelector("").textContent gives you all the text within the brackets
 - This means that with innerHTML you can also add add HTML just be sure to put it in quotation marks
 - document.querySelector("a").getAttribute("href") will return the link for the anchor target.
 - If instead we wrote document.querySelector("a").setAttribute("href","youtube.com")



 */


//  var name = prompt("Enter name: ");
//  alert("Hello" + " " + name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase());

//  var dogAge = prompt("Enter the age of your dog: ");
//  alert("Your dogs age in human years is " + ((dogAge - 2) * 4 + 21));

//  var testFunction = (phrase) => {
//         alert(phrase);
//  }
