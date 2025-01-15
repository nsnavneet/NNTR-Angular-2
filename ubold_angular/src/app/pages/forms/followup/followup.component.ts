import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent implements OnInit {
  instantFollowupForm!: FormGroup;
  radiologicalFollowupForm!: FormGroup;
  clinicalFollowupForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.instantFollowupForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this.radiologicalFollowupForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      cancerTreatment: ['', Validators.required]
    });

    this.clinicalFollowupForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['', Validators.required],
      dimensions: ['', Validators.required],
      comment: ['']
    });
  }

  onInstantFollowupSubmit(): void {
    if (this.instantFollowupForm.valid) {
      console.log(this.instantFollowupForm.value);
      // Handle instant followup submission
    }
  }

  onRadiologicalFollowupSubmit(): void {
    if (this.radiologicalFollowupForm.valid) {
      console.log(this.radiologicalFollowupForm.value);
      // Handle radiological followup submission
    }
  }

  onClinicalFollowupSubmit(): void {
    if (this.clinicalFollowupForm.valid) {
      console.log(this.clinicalFollowupForm.value);
      // Handle clinical followup submission
    }
  }
}
