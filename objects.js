function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return(`${title}, ${author}, ${pages}, ${read}`)
  }
}

var pendragon = new Book('The Merchant of Death', 'D.J. MacHale', 500, true)

console.log(pendragon.info())
