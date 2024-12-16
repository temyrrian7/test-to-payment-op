import { NgIf, NgOptimizedImage } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { MatButton } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import { Book } from '../../../models/book.model'

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    NgIf,
    MatButton,
    NgOptimizedImage,
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public book: {
      id: number;
      title: string;
      author: string;
      year: number;
      description: string;
      coverImageUrl?: string;
    }
    ,
    private dialogRef: MatDialogRef<BookDetailsComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
