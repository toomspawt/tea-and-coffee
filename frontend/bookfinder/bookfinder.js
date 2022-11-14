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
    divBook.href = item.selfLink;
    console.log(item.selfLink);
    divBook.innerHTML = item.volumeInfo.title + "<br>";
    return divBook;
}
