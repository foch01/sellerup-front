import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss']
})

export class CreateEmailComponent implements OnInit {
  demo = true;
  key = 1;
  workflows = [];

  public Editor = ClassicEditor;
  public dataCkeEditor: any;

  // Ecoute si un ajout ou une modification de données a eu lieu
  public onChange( { editor }: ChangeEvent ) {
    this.dataCkeEditor = editor.getData();
    console.log(this.dataCkeEditor);
  }

  constructor(private _formBuilder: FormBuilder) {
    this.key = 1;
    this.workflows = [
      {
        key: 1,
        value: "Gestion des commandes"
      },
      { 
        key: 2,
        value: "Gestion du marketing"
      }
    ]
  }

  updateSelect(event) {
    this.key = event.target.value;
  }

  ngOnInit() {
  }
}

​

