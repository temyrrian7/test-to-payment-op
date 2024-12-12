import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { BookService } from '../../../services /book.service'
import { MatDialogRef } from '@angular/material/dialog'
import { MatFormField } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<BookFormComponent>
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: [null, Validators.required],
      description: [''],
      coverImageUrl: [''],
    });
  }

  submitForm() {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value);
      this.dialogRef.close();
    }
  }
}
