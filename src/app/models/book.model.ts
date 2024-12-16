import { FormControl } from '@angular/forms'

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  coverImageUrl?: string;
}


export interface BookForm {
  title: FormControl<string>;
  author: FormControl<string>;
  year: FormControl<number>;
  description: FormControl<string>;
  coverImageUrl: FormControl<string>;
}
