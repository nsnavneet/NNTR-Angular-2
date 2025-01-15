import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.scss']
})
export class TreatmentPlanComponent implements OnInit {
  treatmentPlanForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.treatmentPlanForm = this.formBuilder.group({
      date: ['', Validators.required],
      remarks: [''],
      selectTreatment: ['', Validators.required],
      radiations: [''],
      chemotherapies: [''],
      surgeries: [''],
      // Radiation Therapy controls
      radiationDate: [''],
      radiationDose: [''],
      radiationDuration: [''],
      radiationModality: [''],
      radiationSelect: [''],
      // Chemotherapy controls
      cyclesPlanned: [null],
      cyclesGiven: [null],
      chemoDate: [''],
      chemoRegime: [''],
      chemoStatus: [''],
      // Surgery controls
      surgeryDate: [''],
      surgeryTime: [''],
      surgeryGross: [''],
      surgeryName: [''],
      operativeFindings: [''],
      extentOfExcision: ['']
    });
  }

  onSubmit(): void {
    if (this.treatmentPlanForm.valid) {
      console.log('Treatment Plan Form Data:', this.treatmentPlanForm.value);
      // Here you would typically send the form data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.treatmentPlanForm.controls).forEach(key => {
        const control = this.treatmentPlanForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  saveRadiationTherapy(): void {
    if (this.treatmentPlanForm.valid) {
      const radiationTherapyData = {
        date: this.treatmentPlanForm.get('radiationDate')?.value,
        dose: this.treatmentPlanForm.get('radiationDose')?.value,
        duration: this.treatmentPlanForm.get('radiationDuration')?.value,
        modality: this.treatmentPlanForm.get('radiationModality')?.value,
        select: this.treatmentPlanForm.get('radiationSelect')?.value
      };
      console.log('Radiation Therapy Data:', radiationTherapyData);
      // Here you would typically send the radiation therapy data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.treatmentPlanForm.controls).forEach(key => {
        const control = this.treatmentPlanForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  incrementCycles(type: 'planned' | 'given'): void {
    const control = this.treatmentPlanForm.get(type === 'planned' ? 'cyclesPlanned' : 'cyclesGiven');
    if (control) {
      const currentValue = control.value;
      control.setValue(currentValue === null ? 1 : currentValue + 1);
    }
  }

  decrementCycles(type: 'planned' | 'given'): void {
    const control = this.treatmentPlanForm.get(type === 'planned' ? 'cyclesPlanned' : 'cyclesGiven');
    if (control) {
      const currentValue = control.value;
      if (currentValue !== null && currentValue > 0) {
        control.setValue(currentValue - 1);
      }
    }
  }

  saveChemotherapy(): void {
    if (this.treatmentPlanForm.valid) {
      const chemotherapyData = {
        cyclesPlanned: this.treatmentPlanForm.get('cyclesPlanned')?.value,
        cyclesGiven: this.treatmentPlanForm.get('cyclesGiven')?.value,
        date: this.treatmentPlanForm.get('chemoDate')?.value,
        regime: this.treatmentPlanForm.get('chemoRegime')?.value,
        status: this.treatmentPlanForm.get('chemoStatus')?.value
      };
      console.log('Chemotherapy Data:', chemotherapyData);
      // Here you would typically send the chemotherapy data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.treatmentPlanForm.controls).forEach(key => {
        const control = this.treatmentPlanForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  saveSurgery(): void {
    if (this.treatmentPlanForm.valid) {
      const surgeryData = {
        date: this.treatmentPlanForm.get('surgeryDate')?.value,
        time: this.treatmentPlanForm.get('surgeryTime')?.value,
        gross: this.treatmentPlanForm.get('surgeryGross')?.value,
        name: this.treatmentPlanForm.get('surgeryName')?.value,
        operativeFindings: this.treatmentPlanForm.get('operativeFindings')?.value,
        extentOfExcision: this.treatmentPlanForm.get('extentOfExcision')?.value
      };
      console.log('Surgery Data:', surgeryData);
      // Here you would typically send the surgery data to a backend service
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.treatmentPlanForm.controls).forEach(key => {
        const control = this.treatmentPlanForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  getCyclesValue(type: 'planned' | 'given'): string {
    const value = this.treatmentPlanForm.get(type === 'planned' ? 'cyclesPlanned' : 'cyclesGiven')?.value;
    return value === null ? '' : value.toString();
  }
}