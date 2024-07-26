import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteListService } from '../firebase-services/note-list.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note-dialog.component.html',
  styleUrl: './add-note-dialog.component.scss'
})
export class AddNoteDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  title = "";
  description = "";
  content = "";

  constructor(public noteService: NoteListService) { }  // evtl. och auf private umstellen

  closeDialog() {
    this.title = "";
    this.description = "";
    this.addDialogClosed.emit(false);
  }

  addNote() {
    let note: Note = {
      type: "note",
      title: this.title,
      content: this.content,
      marked: false,
    };
    this.noteService.addNote(note);
    this.closeDialog();
  }
}
