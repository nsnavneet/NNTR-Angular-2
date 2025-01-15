import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {
  uploadDocumentsForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.uploadDocumentsForm = this.fb.group({
      formType: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.uploadDocumentsForm.valid) {
      console.log(this.uploadDocumentsForm.value);
      // Handle file upload here
    }
  }
}
