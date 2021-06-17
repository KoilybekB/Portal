import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentProgressListComponent} from './student-progress-list.component';
import {StudentProgressListRoutingModule} from './student-progress-list-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {StudentDashboardModule} from '../student-dashboard/student-dashboard.module';
import { MondayDiaryComponent } from './monday-diary/monday-diary.component';


@NgModule({
    declarations: [
        StudentProgressListComponent,
        MondayDiaryComponent
    ],
    imports: [
        CommonModule,
        StudentProgressListRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        StudentDashboardModule
    ]
})
export class StudentProgressListModule {
}
