let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return(`${this.title}, ${this.author}, ${this.pages}, ${this.read}`)
  }
}


function addBookToLibrary(book) {
  myLibrary.push(book)
}

function resetLibrary() {
  let libraryContainer = document.getElementById("library-container")
  let godContainer = document.getElementById("god-container")
  if(libraryContainer != null) {
    let books = Array.from(libraryContainer.childNodes)
    libraryContainer.remove()
    libraryContainer = document.createElement("DIV")
    libraryContainer.setAttribute("id", "library-container")

    godContainer.appendChild(libraryContainer)

  }
};

function renderBooks() {
  resetLibrary()

  let library = document.getElementById("library-container")



  for (let book of myLibrary){
    let bookContainer = document.createElement("DIV")
    let deleteButton = document.createElement("BUTTON")
    deleteButton.textContent = "DELETE"
    deleteButton.classList.add("cancel")
    deleteButton.classList.add("card-cancel")

    let readButton = document.createElement("BUTTON")
    readButton.classList.add("read")
    readButton.textContent = "READ"
    addReadListener(readButton, bookContainer, library)
    bookContainer.appendChild(readButton)





    addDeleteListener(deleteButton, bookContainer, library)
    bookContainer.appendChild(deleteButton)

    let info = document.createElement("P")
    info.innerText = book.info()

    library.appendChild(bookContainer)
    bookContainer.classList.add("book-container")

    bookContainer.appendChild(info)
  }
};

function addDeleteListener(button, card, library) {
  button.addEventListener("click", function() {
    let books = Array.from(library.childNodes)
    myLibrary.splice(books.indexOf(card), 1)
    renderBooks()
  })
}

function addReadListener(button, card, library) {
  button.addEventListener("click", function() {
    let books = Array.from(library.childNodes)
    let cardToChange = myLibrary[books.indexOf(card)]
    cardToChange.read == true ? (cardToChange['read'] = false) : (cardToChange['read'] = true)

    renderBooks()
  })
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function createBook() {
  let formFields = Array.from(document.getElementsByClassName('field'))
  let radioFields = Array.from(document.getElementsByClassName('radio'))
  let values = {}

  // Collects all non-radio elements from the form
  formFields.forEach(elem => {
    values[`${elem.name}`] = elem.value
  })

  // Collects the value for "Have you read this?"
  radioFields.forEach(elem => {
    if(elem.checked) {
      values["read"] = elem.value
    }
  })

  let newBook = new Book(values["title"], values["author"], values["pages"], values["read"])
  addBookToLibrary(newBook)
  renderBooks()
}

renderBooks()
