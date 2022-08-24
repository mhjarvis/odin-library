/* Initialize myLibrary array or retrieve it from the browser if a version was previously stored */
let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

/* Constructor for all Book objects */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* Function to add new book to library; save to storage after adding */
function addBookToLibrary(title, author, pages, read) {

    if(read) {                  // convert true/false values to readable input for user
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    const book = new Book(title, author, pages, read);                  // create new book
    myLibrary.push(book);                                               // add to myLibrary arr
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));       // save to localStorage
}

/* Function to remove book from the library */
function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);                                         // remove selected item from arr
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));       // save new array to storage
    displayLibrary();                                                   // rebuild book container
}

/* HTML query selectors to be reused */
const addButton = document.querySelector('.add-book');                  // header div
const removeButton = document.querySelector('.remove-book');            // header div
const formContainer = document.querySelector('.form-container');        // form element
const submitButton = document.querySelector('#submit-button');          // form button
const removeBookButton = document.querySelector('.remove-button');      // book remove button
const title = document.querySelector('#the_title');                     // book title
const author = document.querySelector('#the_author');                   // book author
const pages = document.querySelector('#the_pages');                     // book page count
const read = document.querySelector('#checkbox_read');                  // book read status
const mainContainer = document.querySelector('.book-container');        // main body div holding all books


/* Display library and/or rebuild library */
function displayLibrary() {
    mainContainer.innerHTML = '';                                   // clear html container
    JSON.parse(localStorage.getItem("myLibrary"))                   // retrieve myLibrary arr
    for(let i = 0; i < myLibrary.length; i++) {                     // loop through myLibrary arr

        /* Add individual book container to main element*/
        const div = document.createElement('div');
        div.classList.add('book');
        div.id = `book-${i}`;
        mainContainer.appendChild(div);

        /* Primary element for adding books to */
        const bookContainer = document.getElementById(`book-${i}`);

        /* Create title div and add to book container */
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title-div');
        titleDiv.classList.add('book-info')
        titleDiv.innerHTML = myLibrary[i].title;
        bookContainer.appendChild(titleDiv);

        /* Create author div and add to book container */
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author-div');
        authorDiv.classList.add('book-info');
        authorDiv.innerHTML = myLibrary[i].author;
        bookContainer.appendChild(authorDiv);

        /* Create pages div and add to book container */
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add('pages-div');
        pagesDiv.classList.add('book-info')
        pagesDiv.innerHTML = myLibrary[i].pages;
        bookContainer.appendChild(pagesDiv);

        /* Create read div and add to book container */
        const readDiv = document.createElement('div');
        readDiv.classList.add('read-div');
        readDiv.classList.add('book-info')
        readDiv.innerHTML = myLibrary[i].read;
        bookContainer.appendChild(readDiv);

        /* Create remove book button */
        const button = document.createElement('button');
        button.classList.add('remove-button');
        button.id = 'delete-book-button' + i;
        button.innerHTML = 'Remove';
        button.value = i;

        /* Add event listener with button to remove book */
        button.addEventListener("click", function() {
            console.log(button.value);

            myLibrary = JSON.parse(localStorage.getItem("myLibrary"))

            removeBookFromLibrary(button.value);

            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

        })

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