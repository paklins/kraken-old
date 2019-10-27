import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'au-upload',
  templateUrl: './au-upload.component.html',
  styleUrls: ['./au-upload.component.scss']
})
export class AuUploadComponent implements OnInit {

  public stepSelectedFiles: FormGroup;
  public stepUploadFiles: FormGroup;
  public stepFinal: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepSelectedFiles = this._formBuilder.group(
      {
        
      }
    );

    this.stepUploadFiles = this._formBuilder.group({});
    this.stepFinal = this._formBuilder.group({});
  }

}
