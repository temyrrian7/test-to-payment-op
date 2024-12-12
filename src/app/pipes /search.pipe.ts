import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(books: Book[] | null, query: string): Book[] {
    if (!books) {
      return [];
    }

    if (!query) {
      return books;
    }

    const lowerQuery = query.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
  }
}
