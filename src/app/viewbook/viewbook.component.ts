import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from '../books/book';
import { BooksService } from '../service/books.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  username: string;
  @Input()
  book: Book;

  @Output()
  bookDeletedEvent = new EventEmitter();

  constructor(private service: BooksService, private router: Router
  ) { }

  ngOnInit() {
    this.getuser();
  }

  getuser()
  {
      this.username = sessionStorage.getItem('username')
      console.log("hello" + this.username)
  }
  deleteBook() {
    this.service.deleteBook(this.book.id,this.username).subscribe(
      (book) => {
        this.bookDeletedEvent.emit();
        console.log("id is emitted " + this.book.id)
        this.router.navigate(['books']);
      },
      error=>{
        console.log("some error")
      }
      
    );
  }

  editBook() {
    this.router.navigate(['books'], { queryParams: { action: 'edit', id: this.book.id } });
  }

}
