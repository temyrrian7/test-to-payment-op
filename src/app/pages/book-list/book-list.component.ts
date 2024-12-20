import { AsyncPipe, IMAGE_CONFIG, NgForOf, NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButton, MatIconButton } from '@angular/material/button'
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSmImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card'
import { MatDialog } from '@angular/material/dialog'
import { MatFormField } from '@angular/material/form-field'
import { MatIcon } from '@angular/material/icon'
import { MatInput } from '@angular/material/input'
import { MatToolbar } from '@angular/material/toolbar'

import { BookService } from '../../services /book.service'

import { BookDetailsComponent } from './book-details/book-details.component'
import { BookFormComponent } from './book-form/book-form.component'
import { SearchPipe } from '../../pipes /search.pipe'
import { MatTooltip } from '@angular/material/tooltip'
import { animate, style, transition, trigger } from '@angular/animations'
import { Book } from '../../models/book.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatToolbar, MatFormField, MatCard, MatCardTitle, MatIcon, MatCardSubtitle, AsyncPipe, NgForOf, MatButton, MatIconButton, MatInput, FormsModule, SearchPipe, MatCardSmImage, MatCardHeader, MatCardTitleGroup, MatCardActions, NgOptimizedImage, MatCardContent, MatTooltip],
  providers: [{
    provide: IMAGE_CONFIG, useValue: {
      placeholderResolution: 40,
    },
  }],
  animations: [trigger('listAnimation', [transition(':enter', [style({
    opacity: 0, transform: 'translateY(-20px)',
  }), animate('300ms ease-out', style({
    opacity: 1, transform: 'translateY(0)',
  }))]), transition(':leave', [animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))])])],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books$: Observable<Book[]> = this.bookService.books$
  searchQuery = ''

  constructor(private bookService: BookService, private dialog: MatDialog) {
  }

  addNewBook(): void {
    this.dialog.open(BookFormComponent, { width: '400px' })
  }

  editBook($event: MouseEvent, book: Book): void {
    $event.stopPropagation()
    this.dialog.open(BookFormComponent, { data: book, width: '400px' })
  }

  viewBookDetails(book: Book): void {
    this.dialog.open(BookDetailsComponent, { data: book, width: '400px' })
  }

  deleteBook($event: MouseEvent, id: number): void {
    $event.stopPropagation()
    this.bookService.deleteBook(id)
  }

  trackById(index: number, book: Book): number {
    return book.id
  }
}
