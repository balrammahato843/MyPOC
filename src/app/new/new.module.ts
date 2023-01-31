import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { NoteBookComponent } from './note-book/note-book.component';

@NgModule({
  declarations: [BookComponent, NoteBookComponent],
  imports: [CommonModule],
  exports: [BookComponent, NoteBookComponent],
})
export class NewModule {}
