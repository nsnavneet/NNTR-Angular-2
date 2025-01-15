import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { HistopathologyComponent } from './histopathology/histopathology.component';
import { DischargeNotesComponent } from './discharge-notes/discharge-notes.component';
import { FundusComponent } from './fundus/fundus.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { FollowupComponent } from './followup/followup.component';
import { OtListCensusComponent } from './ot-list-census/ot-list-census.component';

@NgModule({
  declarations: [
    TreatmentPlanComponent,
    HistopathologyComponent,
    DischargeNotesComponent,
    FundusComponent,
    UploadDocumentsComponent,
    FollowupComponent,
    OtListCensusComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    AngularFormsModule,
    PageTitleModule,
    NgbModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormsModule { }
