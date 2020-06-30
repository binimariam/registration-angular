import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from '../books/book';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BooksService} from '../service/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  username:string;
  @Input()
  book: Book;


  @Output()
  bookAddedEvent = new EventEmitter();

  constructor(private service: BooksService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.getuser();
  }

  getuser()
  {
      this.username = sessionStorage.getItem('username')
      console.log("hello" + this.username)
  }
  saveBook() {
    
          if (this.book.id == null) {
          this.service.addBook(this.book,this.username).subscribe(
            (book) => {
              this.bookAddedEvent.emit();
              this.router.navigate(['books']);
            }
          );
      }
          else 
          {
            this.service.updateBook(this.book,this.username).subscribe(
              (book) => {
                console.log(this.username)
                this.bookAddedEvent.emit();
                this.router.navigate(['books']);
              }
            );

          }
  }
}
