


function Book(title, author) {
	this.title = title;
	this.author = author;
	return this
}
const myLibrary = [
	new Book("The count of Monte Cristo", "Alexandre Dumas"),
	new Book("Dracula", "Bram Stoker"),
	new Book("The Great Gatsby", "F Scott Fitzgerald"),
	new Book("The Great Gatsby", "F Scott Fitzgerald"),
];

function addBookToLibrary(title, author) {
	myLibrary.push(new Book(title, author))
	showBooks();
}

function showBooks() {

	let lib = document.getElementById('library');
	lib.innerHTML = "";
	myLibrary.forEach((book, i) => {
		let card = document.createElement('div');
		card.id = `book_${i}`
		card.className = "card";

		let h1 = document.createElement('h1');
		h1.appendChild(document.createTextNode(book.title));
		card.appendChild(h1);
		let p = document.createElement('p');
		p.appendChild(document.createTextNode(book.author));
		card.appendChild(p);
		lib.appendChild(card);
		let remove = document.createElement('button')
		remove.appendChild(document.createTextNode("Remove"))
		remove.onclick = () => {
			removeBookAt(i)
		}
		card.appendChild(remove);
		let markRead = document.createElement('button')
		markRead.appendChild(document.createTextNode("Read"))
		markRead.onclick = () => {
			markReadBookAt(i)
		}
		card.appendChild(markRead);
	});
}

function removeBookAt(i) {
	myLibrary.splice(i, 1)
	showBooks()
}

function markReadBookAt(i) {
	let book = document.getElementById(`book_${i}`)
	console.log(book)
	if (book !== null) {
		toggleRead(book)
	}
}

function toggleRead(book) {
	console.log(book.classList);
	if (book.classList.contains("read")) {
		book.classList.remove("read")
	} else {
		book.classList.add("read")
	}
}


function openFormModal() {
	let formcontainer = document.createElement("div");
	formcontainer.className = "new-book";
	let header = document.createElement("h1")
	formcontainer.appendChild(header);
	header.appendChild(document.createTextNode("Add New Book"))
	let form = document.createElement("form");
	let button = document.createElement("button");
	button.setAttribute("type", "submit");
	button.appendChild(document.createTextNode('Submit'))
	formcontainer.appendChild(form);
	let authorlabel = document.createElement("label");
	authorlabel.appendChild(document.createTextNode("Author"))
	form.appendChild(authorlabel)
	let author = document.createElement("input");
	author.setAttribute('type', 'text');
	author.setAttribute('placeholder', 'author');
	form.appendChild(author)
	let titlelabel = document.createElement("label");
	titlelabel.appendChild(document.createTextNode("Title"))
	form.appendChild(titlelabel)
	let title = document.createElement("input");
	title.setAttribute('type', 'text');
	title.setAttribute('placeholder', 'title');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		addBookToLibrary(title.value, author.value);
		document.body.removeChild(formcontainer)
	})
	form.appendChild(title)
	form.appendChild(button);;
	document.body.appendChild(formcontainer);
}


