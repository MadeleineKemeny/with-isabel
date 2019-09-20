import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getWines: function (filter) {
    return axios.get("/api/wines", {
      params: filter
    });
  },

  getWineRegions: function (filter) {
    return axios.get("/api/wines/regions", {
      params: filter
    });
  },

  getWineVarietals: function (filter) {
    return axios.get("/api/wines/varietals", {
      params: filter
    });
  }
};
