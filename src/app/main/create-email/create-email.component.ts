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
    this.demo = false; 
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
    console.log(event.target.value);
  }

  ngOnInit() {
  }
  
  public formGroup: FormGroup = this._formBuilder.group({

    title: new FormControl(null, {
        validators: [
            Validators.required,
        ],
        updateOn: 'change',
    }),

    subject: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),

    deroul1: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),

    deroul2: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),
    
    deroul3: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),

    deroul4: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),

    deroul5: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),
    
    deroul6: new FormControl(null, {
      validators: [
          Validators.required,
      ],
      updateOn: 'change',
    }),
    
  });

  public async handleOnSubmit() {
    const payload = {
              title: this.formGroup.value.title,
              subject: this.formGroup.value.subject,
              content: this.dataCkeEditor,
              deroul1: this.formGroup.value.deroul1,
              deroul2: this.formGroup.value.deroul2,
              deroul3: this.formGroup.value.deroul3,
              deroul4: this.formGroup.value.deroul4,
              deroul5: this.formGroup.value.deroul5,
              deroul6: this.formGroup.value.deroul6,
          };
    console.log(payload);
  }
}

​

