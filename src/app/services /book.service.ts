import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model'

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Frieren: Beyond Journey\'s', author: ' Kanehido Yamado', year: 2020, description: 'The story follows elven mage Frieren, a former member of the party of adventurers who defeated the Demon King and restored harmony to the world after a ten-year quest. The heroic group includes human hero Himmel, dwarven warrior Eisen, and human priest Heiter. Before they part, they observe the Era Meteors together, a meteor shower that occurs once in fifty years. Frieren agrees to see them again and offers them a better view the next time the celestial event occurs. Frieren then departs and travels the world in pursuit of magical knowledge.', coverImageUrl:'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/frieren-from-a-trailer-for-frieren-beyond-journey-s-end.jpg' },
    { id: 2, title: 'Caliban\'s War', author: 'James S.A. Corey', year: 2012, description: 'Since the events of Leviathan Wakes, the Protomolecule has been assembling a vast structure on the surface of Venus. The various governments of the solar system constantly monitor the planet, but nobody understands the structure\'s purpose.', coverImageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Calibans_War.jpg/220px-Calibans_War.jpg' },
    { id: 3, title: 'In Stahlgewittern', author: 'Ernst Jünger', year: 1922, description: 'Storm of Steel begins with Jünger, as a private, entering the line with the 73rd Hanoverian Regiment in Champagne. His first taste of combat came at Les Éparges in April 1915 where he was first wounded by a piece of shrapnel piercing his thigh.\n' +
        '\n' +
        'After recuperating, he took an officer\'s course and achieved the rank of Leutnant. He rejoined his regiment on the Arras sector. In 1916, with the Battle of the Somme underway, Jünger\'s regiment moved to Combles in August for the defence of the village of Guillemont. Here Jünger was wounded again, and absent shortly before the final British assault which captured the village — his platoon was annihilated. In 1917 Jünger saw action during the Battle of Arras in April, the Third Battle of Ypres in July and October, and the German counter-attack during the Battle of Cambrai in November. Jünger led a company of assault troops during the final German spring offensive, 21 March 1918 when he was wounded again. On 23 August he suffered his most severe wound when he was shot through the chest.', coverImageUrl: 'https://nashformat.ua/files/products/800883.270x390.jpg?241216073901' },
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
