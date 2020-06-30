import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from '../service/books.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;
  booksReceived: Array<Book>;
  selectedBook: Book;
  action: string;
  username: string;
  constructor(private service: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getuser();
    this.refreshData();
  }

  getuser() {
    this.username = sessionStorage.getItem('username')
    console.log("hello" + this.username)
  }
  refreshData() {
    this.service.getBooks(this.username).subscribe(

      response => this.handleSuccessfulResponse(response)

    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const id = params['id'];

        if (id) {
          this.selectedBook = this.books.find(book => {
            return book.id === +id;
          });
        }
      }
    );
  }
  handleSuccessfulResponse(response) {
    this.books = new Array<Book>();
    this.booksReceived = response;
    for (const book of this.booksReceived) {

      const bookRetrievednew = new Book();
      bookRetrievednew.id = book.id;
      bookRetrievednew.name = book.name;
      bookRetrievednew.author = book.author;
      this.books.push(bookRetrievednew);
    }
  }

  addBook() {
    this.selectedBook = new Book();
    console.log("bookkk" + this.selectedBook);
    this.router.navigate(['books'], { queryParams: { action: 'add' } });
  }

  viewBook(id: number) {
    this.router.navigate(['books'], { queryParams: { id, action: 'view' } });
  }

}