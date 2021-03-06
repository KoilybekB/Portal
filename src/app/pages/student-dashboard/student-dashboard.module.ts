import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {StudentDashboardComponent} from './student-dashboard.component';
import {StudentDashboardRoutingModule} from './student-dashboard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TodayTimetableComponent} from './today-timetable/today-timetable.component';
import {MyLessonsListComponent} from './my-lessons-list/my-lessons-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        StudentDashboardComponent,
        TodayTimetableComponent,
        MyLessonsListComponent
    ],
    imports: [
        CommonModule,
        StudentDashboardRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule
    ],
    exports: [
        TodayTimetableComponent,
        MyLessonsListComponent
    ],
    providers: [
        DatePipe
    ]
})
export class StudentDashboardModule {
}
