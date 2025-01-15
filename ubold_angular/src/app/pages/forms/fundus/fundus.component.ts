import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fundus',
  templateUrl: './fundus.component.html',
  styleUrls: ['./fundus.component.scss']
})
export class FundusComponent implements OnInit {
  fundusForm!: FormGroup;
  finalFundusForm!: FormGroup;
  leftEyeImage: File | null = null;
  rightEyeImage: File | null = null;
  finalLeftEyeImage: File | null = null;
  finalRightEyeImage: File | null = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fundusForm = this.formBuilder.group({
      patientUHID: ['', Validators.required],
      date: ['', Validators.required],
      preOpLeft: [''],
      preOpRight: ['']
    });

    this.finalFundusForm = this.formBuilder.group({
      finalPatientUHID: ['', Validators.required],
      finalDate: ['', Validators.required],
      finalPreOpLeft: [''],
      finalPreOpRight: [''],
    });
  }

  onFileSelected(event: any, eye: 'left' | 'right'): void {
    const file = event.target.files[0];
    if (eye === 'left') {
      this.leftEyeImage = file;
    } else {
      this.rightEyeImage = file;
    }
  }

  uploadImages(): void {
    if (this.leftEyeImage) {
      console.log('Uploading left eye image:', this.leftEyeImage.name);
      // Here you would typically send the file to a backend service
    }
    if (this.rightEyeImage) {
      console.log('Uploading right eye image:', this.rightEyeImage.name);
      // Here you would typically send the file to a backend service
    }
    // Reset the file inputs after upload
    this.leftEyeImage = null;
    this.rightEyeImage = null;
  }

  onFinalFileSelected(event: any, eye: 'left' | 'right'): void {
    const file = event.target.files[0];
    if (eye === 'left') {
      this.finalLeftEyeImage = file;
    } else {
      this.finalRightEyeImage = file;
    }
  }

  uploadFinalImages(): void {
    if (this.finalLeftEyeImage) {
      console.log('Uploading final left eye image:', this.finalLeftEyeImage.name);
      // Here you would typically send the file to a backend service
    }
    if (this.finalRightEyeImage) {
      console.log('Uploading final right eye image:', this.finalRightEyeImage.name);
      // Here you would typically send the file to a backend service
    }
    // Reset the file inputs after upload
    this.finalLeftEyeImage = null;
    this.finalRightEyeImage = null;
  }

  searchPatient(formType: 'initial' | 'final'): void {
    const uhid = formType === 'initial' 
      ? this.fundusForm.get('patientUHID')?.value 
      : this.finalFundusForm.get('finalPatientUHID')?.value;

    if (uhid) {
      console.log(`Searching for patient with UHID: ${uhid} in ${formType} fundus examination`);
      // Here you would typically call a service to search for the patient
      // and populate the form with the retrieved data
    } else {
      console.log('Please enter a UHID to search');
    }
  }
}