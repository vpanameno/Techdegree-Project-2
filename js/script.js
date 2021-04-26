/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering

/* In this project I learned about the DOM and how to use it to make web pages
dynamic and user-friendly. I selected, created and manipulated elements along
with for loops and conditional statements to display 9 students on the pages and
for the buttons to be functional
*/



/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, pageNumber) {
    let startIndex = (pageNumber * 9) - 9; //creating variables for the loop to have 9 students on page
    let endIndex = (pageNumber * 9);
    const studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) { //loop will iterate over array and objects containing student info
      if (i >= startIndex && i < endIndex) {
        let studentItem = `<li class="student-item cf">
          <div class="student-details">
          <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
          <h3>${list[i].name.first}
          ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
          </div>
            <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
            </div>
            </li>`;
            studentList.insertAdjacentHTML('beforeend', studentItem);
       }
      }
    };


/*
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
  let numOfButtons = Math.ceil(list.length / 9); //Displays nine students per page per button
  const linkList = document.querySelector('.link-list');

  linkList.innerHTML = '';

  for (let i = 1; i <= numOfButtons; i+=1) { //loop will iterate over number of buttons
    let buttonNum =
    `<li>
    <button type ="button" >${i}</button
    </li>`
    linkList.insertAdjacentHTML('beforeend', buttonNum);
}
    const firstButton = document.querySelector('button');
    firstButton.className = 'active';

    linkList.addEventListener('click', (event) => {
          if (event.target.tagName === 'BUTTON') {
            prevButton = document.querySelector('.active');
            prevButton.className = '';
            let clickedTarget = event.target
            clickedTarget.className = 'active';



          page = clickedTarget.textContent //Set the button being clicked on to the page number
          showPage(list, page);

}
});
}
//Create a search bar
const header = document.querySelector('.header'); //select elements you will use
let searchButtonHTML = `<label for="search" class="student-search">
  <span>${'Search by name'} </span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label`;
header.insertAdjacentHTML ('beforeend', searchButtonHTML);

//make search bar functional

const searchInput = document.querySelector('#search'); //selecting the input element
const submitButton = document.querySelector('button');
let matches = []; //creating a list to store matches

function filterNames(list) {

  let matches = []; //creating a list to store matches


  for (let i = 0; i < list.length; i +=1) { //looping over length of list
  studentName =`${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;

    if (searchInput.value =! 0 && searchInput.value.includes(studentName)) {
        matches.push(list[i]);
}
}
showPage(matches, 1);
addPagination(matches);
}

submitButton.addEventListener('click', (e) => {
              e.preventDefault();
              filterNames(data);

    });



// Call function

showPage(data, 1);

addPagination(data);
