package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/test/", testHandler)

	//Serve React files
	fs := http.FileServer(http.Dir("../frontend/build"))
	http.Handle("/", fs)

	port := "3000"
	fmt.Println("Server listening on port", port)
	log.Panic(http.ListenAndServe(":" + port, nil))
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "It works!")
}