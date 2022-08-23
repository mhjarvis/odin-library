
let myLibrary = [];


function Book(title, author, pages, read) {           // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {     // make functions protos so they are not created for every object
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

/* const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1080, 'read');
const mobyDick = new Book('Moby Dick', 'Herman Melvile', 794, 'not read')
myLibrary.push(theHobbit);
myLibrary.push(mobyDick);

console.log(myLibrary[0].title);
console.log(theHobbit.info());
console.log(mobyDick.info()); */

function addBookToLibrary() {

}

const addButton = document.querySelector('.add-book');                  // + button in header
const removeButton = document.querySelector('.remove-book');            // - button in header
const formContainer = document.querySelector('.form-container');        // main container
const submitButton = document.querySelector('#submit-button');

const title = document.querySelector('#the_title');
const author = document.querySelector('#the_author');
const pages = document.querySelector('#the_pages');
const read = document.querySelector('#checkbox_read').checked;

/********* Event Listeners To Add/Remove Buttons *********/

addButton.addEventListener("click", function() {
    formContainer.style.visibility = 'visible';
});
removeButton.addEventListener("click", function() {
    formContainer.style.visibility = 'hidden';
});

submitButton.addEventListener("click", function() {
    const temp = new Book(title, author, pages, read);

})


console.log(myLibrary);

/* Create Form Element */
/* const main_container = document.querySelector('.main-container');

const div = document.createElement('div');
div.classList.add('book');
div.id = 'box-0';

main_container.appendChild(div);
 */



/*

1. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

2. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
3. Add a button on each book’s display to remove the book from the library.

4. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

5. Add a button on each book’s display to change its read status.

6. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

7. NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course. 

*/