/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, pageNumber) {
    let startIndex = (pageNumber * 9) - 9;
    let endIndex = (pageNumber * 9);
    const studentList = document.querySelector('ul.student-list');
    studentList.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
        studentItem = `<li class="student-item cf">
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list) {
  let numOfButtons = Math.ceil(list.length / 9 );
  const linkList = document.querySelector('ul.link-list');
  linkList.innerHTML = '';
  for (let i = 1; i < numOfButtons; i+=1) {
    buttonNum =
    `<li>
    <button type = 'button' >${i}</button
    </li>`
    linkList.insertAdjacentHTML('beforeend', buttonNum);
}
    const firstButton = document.querySelector('button');
    firstButton.className = 'active';

    linkList.addEventListener("click", (e) => {
          if (e.target.tagName === 'BUTTON') {
            const clickedButton = document.querySelector('firstButton.active');
            clickedButton.className = 'active';
            showPage(list, clickedButton.textContent);
}
});
}
console.log(addPagination(data))


















// Call function
