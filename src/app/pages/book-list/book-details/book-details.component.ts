import { NgIf, NgOptimizedImage } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { MatButton, MatIconButton } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import type { Book } from '../../../models/book.model'
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
import { MatIcon } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf, MatButton, NgOptimizedImage, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatIcon, MatIconButton, MatTooltip],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public book: Book, private dialogRef: MatDialogRef<BookDetailsComponent>) {
  }

  close() {
    this.dialogRef.close()
  }
}
