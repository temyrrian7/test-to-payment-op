import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model'

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2000, description: 'Desc 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2001, description: 'Desc 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2002, description: 'Desc 3' },
  ];

  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  books$ = this.booksSubject.asObservable();

  addBook(book: Book) {
    this.books.push({ ...book, id: Date.now() });
    this.booksSubject.next(this.books);
  }

  updateBook(updatedBook: Book) {
    this.books = this.books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    this.booksSubject.next(this.books);
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    this.booksSubject.next(this.books);
  }
}
