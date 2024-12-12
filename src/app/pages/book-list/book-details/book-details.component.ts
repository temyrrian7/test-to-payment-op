import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Book } from '../../../models/book.model'

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public book: Book,
    private dialogRef: MatDialogRef<BookDetailsComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
