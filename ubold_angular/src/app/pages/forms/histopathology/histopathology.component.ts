import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-histopathology',
  templateUrl: './histopathology.component.html',
  styleUrls: ['./histopathology.component.scss']
})
export class HistopathologyComponent implements OnInit {
  histopathologyForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.histopathologyForm = this.formBuilder.group({
      marker0: [''],
      result0: [''],
      marker1: [''],
      result1: [''],
      marker2: [''],
      result2: [''],
      marker3: [''],
      result3: [''],
      marker4: [''],
      result4: [''],
      report: [''],
      cancerType: [''],
      cancerDate: [''],
      cancerTime: [''],
      cancerComment: [''],
      biopsyReportType: [''],
      biopsyDate: [''],
      biopsyTime: ['']
    });
  }

  onSubmit(): void {
    if (this.histopathologyForm.valid) {
      console.log('Histopathology Form Data:', this.histopathologyForm.value);
      // Here you would typically send the form data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.histopathologyForm.controls).forEach(key => {
        const control = this.histopathologyForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  saveCancerType(): void {
    if (this.histopathologyForm.valid) {
      const cancerTypeData = {
        type: this.histopathologyForm.get('cancerType')?.value,
        date: this.histopathologyForm.get('cancerDate')?.value,
        time: this.histopathologyForm.get('cancerTime')?.value,
        comment: this.histopathologyForm.get('cancerComment')?.value
      };
      console.log('Cancer Type Data:', cancerTypeData);
      // Here you would typically send the cancer type data to a backend service
    } else {
      // Mark relevant fields as touched to trigger validation messages
      ['cancerType', 'cancerDate', 'cancerTime', 'cancerComment'].forEach(key => {
        const control = this.histopathologyForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile(): void {
    if (this.selectedFile) {
      // Here you would typically send the file to a backend service
      console.log('Uploading file:', this.selectedFile.name);
      // Reset the file input after upload
      this.selectedFile = null;
    } else {
      console.log('No file selected');
    }
  }

  saveBiopsyReport(): void {
    if (this.histopathologyForm.valid) {
      const biopsyReportData = {
        type: this.histopathologyForm.get('biopsyReportType')?.value,
        date: this.histopathologyForm.get('biopsyDate')?.value,
        time: this.histopathologyForm.get('biopsyTime')?.value,
        fileName: this.selectedFile ? this.selectedFile.name : null
      };
      console.log('Biopsy Report Data:', biopsyReportData);
      // Here you would typically send the biopsy report data to a backend service
    } else {
      // Mark relevant fields as touched to trigger validation messages
      ['biopsyReportType', 'biopsyDate', 'biopsyTime'].forEach(key => {
        const control = this.histopathologyForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}