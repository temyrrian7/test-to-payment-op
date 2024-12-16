import { Component, Inject, OnInit } from '@angular/core'
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { BookService } from '../../../services /book.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatButton } from '@angular/material/button'
import { NgIf } from '@angular/common'
import { BookForm } from '../../../models/book.model'

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule, MatInput, MatButton, MatLabel, NgIf, MatError],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup

  constructor(private fb: NonNullableFormBuilder, private bookService: BookService, private dialogRef: MatDialogRef<BookFormComponent>, @Inject(MAT_DIALOG_DATA) public book: {
    id: number; title: string; author: string; year: number; description: string; coverImageUrl?: string;
  }) {
    this.bookForm = this.fb.group<BookForm>({
      title: this.fb.control('', Validators.required),
      author:  this.fb.control('', Validators.required),
      year: this.fb.control(0, Validators.required),
      description: this.fb.control('', Validators.required),
      coverImageUrl: this.fb.control('')
    })
  }

  ngOnInit() {
    console.log(this.book)
    if (this.book) {
      this.bookForm.patchValue(this.book)
    }
  }

  submitForm() {
    if (this.bookForm.valid) {
      if (this.book) {
        this.bookService.updateBook({ ...this.bookForm.value, ...{ id: this.book.id } })
      } else {
        this.bookService.addBook(this.bookForm.value)
      }

      this.dialogRef.close()
    }
  }
}
