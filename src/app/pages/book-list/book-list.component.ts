import { AsyncPipe, NgForOf } from '@angular/common'
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButton, MatIconButton } from '@angular/material/button'
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card'
import { MatDialog } from '@angular/material/dialog'
import { MatFormField } from '@angular/material/form-field'
import { MatIcon } from '@angular/material/icon'
import { MatInput } from '@angular/material/input'
import { MatToolbar } from '@angular/material/toolbar'

import { BookService } from '../../services /book.service'

import { BookDetailsComponent } from './book-details/book-details.component'
import { BookFormComponent } from './book-form/book-form.component'
import { SearchPipe } from '../../pipes /search.pipe'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatToolbar,
    MatFormField,
    MatCard,
    MatCardTitle,
    MatIcon,
    MatCardSubtitle,
    AsyncPipe,
    NgForOf,
    MatButton,
    MatIconButton,
    MatInput,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books$ = this.bookService.books$;
  searchQuery = '';

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  addNewBook() {
    this.dialog.open(BookFormComponent, { width: '400px' });
  }

  viewBookDetails(book: any) {
    this.dialog.open(BookDetailsComponent, { data: book, width: '400px' })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
  }
}
