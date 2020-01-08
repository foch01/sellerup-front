import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss']
})

export class CreateEmailComponent implements OnInit {

  public Editor = ClassicEditor;
  public dataCkeEditor: any;

  // Ecoute si un ajout ou une modification de données e eu lieu
  public onChange( { editor }: ChangeEvent ) {
    this.dataCkeEditor = editor.getData();
    console.log(this.dataCkeEditor);
}

  constructor() { }

  ngOnInit() {
  }

  public handleSaveForm() {
    console.log(this.dataCkeEditor)

  }

}


