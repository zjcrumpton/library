let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return(`${title}, ${author}, ${pages}, ${read}`)
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
    console.log(books)
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

    let info = document.createElement("P")
    info.innerText = book.info()

    library.appendChild(bookContainer)
    bookContainer.classList.add("book-container")

    bookContainer.appendChild(info)
  }
};

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
