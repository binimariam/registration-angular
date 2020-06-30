import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Book } from '../books/book';
import { API_URL } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  

  getBooks(username: String) {
    return this.httpClient.get<Book[]>(`${API_URL}/books/${username}/getbooks`);
  }
 
  addBook(newBook: Book,username: String) {
    return this.httpClient.post<Book>(`${API_URL}/books/${username}/add`, newBook);
  }

  deleteBook(id,username: String) {
    return this.httpClient.delete<Book>(`${API_URL}/books/${username}/` + id);
  }

  updateBook(updatedBook: Book,username:String) {
    return this.httpClient.put<Book>(`${API_URL}/books/${username}/update`, updatedBook);
  }
}
