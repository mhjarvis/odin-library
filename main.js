
let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
console.log(myLibrary);


function Book(title, author, pages, read) {           // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {     // make functions protos so they are not created for every object
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}


function addBookToLibrary(title, author, pages, read) {
    if(read) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }
    const temp = new Book(title, author, pages, read);
    myLibrary.push(temp);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function removeBookFromLibrary() {

}


const addButton = document.querySelector('.add-book');                  // + button in header
const removeButton = document.querySelector('.remove-book');            // - button in header
const formContainer = document.querySelector('.form-container');        // main container
const submitButton = document.querySelector('#submit-button');
const removeBookButton = document.querySelector('#delete-book-button');

const title = document.querySelector('#the_title');
const author = document.querySelector('#the_author');
const pages = document.querySelector('#the_pages');
const read = document.querySelector('#checkbox_read');


/********* Display Library on Page *********/
const mainContainer = document.querySelector('.book-container');

function displayLibrary() {

    for(let i = 0; i < myLibrary.length; i++) {             // loop through myLibrary array

        // Add book container to main element
        const div = document.createElement('div');
        div.classList.add('book');
        div.id = `book-${i}`;
        mainContainer.appendChild(div);

        // Add const variables for creating individual divs
        const bookContainer = document.getElementById(`book-${i}`);
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const readDiv = document.createElement('div');
        const button = document.createElement('button');

        // Create title div and add to book container
        titleDiv.classList.add('title-div');
        titleDiv.classList.add('book-info')
        titleDiv.innerHTML = myLibrary[i].title;
        bookContainer.appendChild(titleDiv);

        // Create author div and add to book container
        authorDiv.classList.add('author-div');
        authorDiv.classList.add('book-info');
        authorDiv.innerHTML = myLibrary[i].author;
        bookContainer.appendChild(authorDiv);

        // Create pages div and add to book container
        pagesDiv.classList.add('pages-div');
        pagesDiv.classList.add('book-info')
        pagesDiv.innerHTML = myLibrary[i].pages;
        bookContainer.appendChild(pagesDiv);

        // Create read div and add to book container
        readDiv.classList.add('read-div');
        readDiv.classList.add('book-info')
        readDiv.innerHTML = myLibrary[i].read;
        bookContainer.appendChild(readDiv);

        // Create remove book button
        button.classList.add('remove-button');
        button.id = 'delete-book-button' + i;
        button.innerHTML = 'Remove';
        bookContainer.appendChild(button);
    }
}

displayLibrary();

/********* Event Listeners To Add/Remove Buttons *********/

addButton.addEventListener("click", function() {
    formContainer.style.visibility = 'visible';
});
removeButton.addEventListener("click", function() {
    formContainer.style.visibility = 'hidden';
});

submitButton.addEventListener("click", function() {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
})

removeBookButton.addEventListener("click", function() {
    console.log(this.id.value);
})



/*********

/* const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1080, 'read');
const mobyDick = new Book('Moby Dick', 'Herman Melvile', 794, 'not read')
myLibrary.push(theHobbit);
myLibrary.push(mobyDick);

console.log(myLibrary[0].title);
console.log(theHobbit.info());
console.log(mobyDick.info()); */

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