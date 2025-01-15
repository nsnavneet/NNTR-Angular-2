import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-discharge-notes',
  templateUrl: './discharge-notes.component.html',
  styleUrls: ['./discharge-notes.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DischargeNotesComponent implements OnInit {
  dischargeNotesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dischargeNotesForm = this.formBuilder.group({
      uhid: [''],
      dischargeType: ['', Validators.required],
      transferDate: [''],
      deathDate: [''],
      consultant: [''],
      department: [''],
      unit: [''],
      ward: [''],
      mlc: [''],
      placeOfDeath: [''],
      informantPrefix: ['SR'],
      informantName: [''],
      smokingKnown: ['not-known'],
      smoking: [''],
      chewTobaccoKnown: ['not-known'],
      chewTobacco: [''],
      chewArecanutKnown: ['not-known'],
      chewArecanut: [''],
      drinkAlcoholKnown: ['not-known'],
      drinkAlcohol: [''],
      broughtDead: ['no'],
      pregnancyAssociated: ['no'],
      delivery: ['no'],
      immediateCause: [''],
      immediateInterval: [''],
      antecedentCause: [''],
      antecedentInterval: [''],
      otherCondition: [''],
      otherInterval: [''],
      injuryOccurrence: [''],
      mannerOfDeath: [''],
      dischargeDate: ['']
    });

    this.dischargeNotesForm.get('dischargeType')?.valueChanges.subscribe(value => {
      this.updateValidators(value);
    });
  }

  updateValidators(dischargeType: string) {
    const deathControls = [
      'deathDate', 'consultant', 'department', 'unit', 'ward', 'mlc',
      'placeOfDeath', 'informantPrefix', 'informantName',
      'smokingKnown', 'smoking', 'chewTobaccoKnown', 'chewTobacco',
      'chewArecanutKnown', 'chewArecanut', 'drinkAlcoholKnown', 'drinkAlcohol',
      'broughtDead', 'pregnancyAssociated', 'delivery',
      'immediateCause', 'immediateInterval', 'antecedentCause', 'antecedentInterval',
      'otherCondition', 'otherInterval', 'injuryOccurrence', 'mannerOfDeath'
    ];
    const transferControls = ['transferDate'];
    const dischargeControls = ['dischargeDate'];

    if (dischargeType === 'death') {
      deathControls.forEach(control => this.dischargeNotesForm.get(control)?.setValidators(Validators.required));
      transferControls.concat(dischargeControls).forEach(control => this.dischargeNotesForm.get(control)?.clearValidators());
    } else if (dischargeType === 'transferred') {
      transferControls.forEach(control => this.dischargeNotesForm.get(control)?.setValidators(Validators.required));
      deathControls.concat(dischargeControls).forEach(control => this.dischargeNotesForm.get(control)?.clearValidators());
    } else if (dischargeType === 'discharge') {
      dischargeControls.forEach(control => this.dischargeNotesForm.get(control)?.setValidators(Validators.required));
      deathControls.concat(transferControls).forEach(control => this.dischargeNotesForm.get(control)?.clearValidators());
    } else {
      deathControls.concat(transferControls, dischargeControls).forEach(control => this.dischargeNotesForm.get(control)?.clearValidators());
    }

    this.dischargeNotesForm.updateValueAndValidity();
  }

  onDischargeTypeChange(): void {
    // This method can be used for any additional logic when discharge type changes
  }

  onSubmit(): void {
    if (this.dischargeNotesForm.valid) {
      console.log('Discharge Notes Form Data:', this.dischargeNotesForm.value);
      // Here you would typically send the form data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.dischargeNotesForm.controls).forEach(key => {
        const control = this.dischargeNotesForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  uploadDeathSummary() {
    // Implement logic to upload death summary
    console.log('Uploading death summary...');
  }

  viewDeathSummary() {
    // Implement logic to view death summary
    console.log('Viewing death summary...');
  }

  uploadDischargeSummary() {
    // Implement logic to upload discharge summary
    console.log('Uploading discharge summary...');
  }

  viewDischargeSummary() {
    // Implement logic to view discharge summary
    console.log('Viewing discharge summary...');
  }
}
