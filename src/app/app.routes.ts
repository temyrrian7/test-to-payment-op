import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/book-list/book-list.component').then(m=>m.BookListComponent),
  },
]
