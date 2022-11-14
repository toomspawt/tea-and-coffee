package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/test/", testHandler)

	// Gophercises
	http.Handle("/bookfinder/", http.StripPrefix("/bookfinder/", http.FileServer(http.Dir("../frontend/bookfinder"))))
	port := "2203"
	fmt.Println("Server listening on port", port)
	log.Panic(http.ListenAndServe(":" + port, nil))
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "It works!")
}