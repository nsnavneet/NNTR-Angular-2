import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { HistopathologyComponent } from './histopathology/histopathology.component';
import { DischargeNotesComponent } from './discharge-notes/discharge-notes.component';
import { FundusComponent } from './fundus/fundus.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { FollowupComponent } from './followup/followup.component';
import { OtListCensusComponent } from './ot-list-census/ot-list-census.component';



const routes: Routes = [
  { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
  { path: 'advanced', loadChildren: () => import('./advanced/advanced.module').then(m => m.AdvancedModule) },
  { path: 'validation', loadChildren: () => import('./validation/validation.module').then(m => m.ValidationModule) },
  { path: 'wizard', loadChildren: () => import('./wizard/wizard.module').then(m => m.WizardModule) },
  { path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  { path: 'editors', loadChildren: () => import('./editors/editors.module').then(m => m.EditorsModule) },
  { path: 'treatment-plan', component: TreatmentPlanComponent },
  { path: 'histopathology', component: HistopathologyComponent },
  { path: 'discharge-notes', component: DischargeNotesComponent },
  { path: 'fundus', component: FundusComponent },
  { path: 'upload-documents', component: UploadDocumentsComponent },
  { path: 'followup', component: FollowupComponent },
  { path: 'ot-list-census', component: OtListCensusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
