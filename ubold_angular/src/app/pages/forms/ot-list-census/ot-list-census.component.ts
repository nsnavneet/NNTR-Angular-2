import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ot-list-census',
  templateUrl: './ot-list-census.component.html',
  styleUrls: ['./ot-list-census.component.scss']
})
export class OtListCensusComponent implements OnInit {
  otListCensusForm!: FormGroup;
  filterForm!: FormGroup;
  submitted: boolean = false;
  otListCensusData: any[] = [];
  sortedOtListCensusData: any[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.otListCensusForm = this.fb.group({
      formType: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      file: ['', Validators.required]
    });

    this.filterForm = this.fb.group({
      filterDate: ['', Validators.required],
      filterType: ['', Validators.required]
    });

    // Fetch data from your service or API
    this.otListCensusData = [
      { type: 'Unit 1 OT List', date: new Date('2023-05-15'), uploadedBy: 'John Doe', imageUrl: 'path/to/image1.jpg' },
      { type: 'Unit 2 Census', date: new Date('2023-05-14'), uploadedBy: 'Jane Smith', imageUrl: 'path/to/image2.jpg' },
      { type: 'Unit 1 Census', date: new Date('2023-05-16'), uploadedBy: 'Alice Johnson', imageUrl: 'path/to/image3.jpg' },
      // ... more data
    ];

    this.sortedOtListCensusData = [...this.otListCensusData];
    this.sortByDate(); // Initial sort
  }

  openFilter(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  applyFilter(): void {
    if (this.filterForm.valid) {
      console.log('Filter applied:', this.filterForm.value);
      // Implement filter logic here
      this.modalService.dismissAll();
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.otListCensusForm.valid) {
      console.log(this.otListCensusForm.value);
      // Handle form submission and file upload here
    }
  }

  sortByDate(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortedOtListCensusData.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
  }
}
