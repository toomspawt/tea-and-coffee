const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    //document.getElementById("content").innerHTML += query;
    makeRequest(query);
})

makeRequest = (query) => {
    const request = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    console.log(request);
    fetch(request)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("books").innerHTML = "";
            for (var i = 0; i < response.items.length; i++) {
                var newDiv = displayBook(response.items[i]);
                
                document.getElementById("books").appendChild(newDiv);
            }
        })
}

displayBook = (item) => {
    divBook = document.createElement("div");
    divBook.classList.add("book");
    divBook.innerHTML = `
        <a href="${item.volumeInfo.canonicalVolumeLink}">${item.volumeInfo.title}</a>
        <br>
        <img src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="${item.volumeInfo.title}">
        <div class="book-info">
            <strong>Author: </strong> ${item.volumeInfo.authors ? item.volumeInfo.authors[0] : "N/A"}
        </div>
        <div class="book-info">
            <strong>Publisher: </strong> ${item.volumeInfo.publisher ? item.volumeInfo.publisher : "N/A"}
        </div>
        <div class="book-info">
            <strong>Published: </strong> ${item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "N/A"}
        </div>
    `
    return divBook;
}
