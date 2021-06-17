import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherDashboardComponent} from './teacher-dashboard.component';
import {TeacherDashboardRoutingModule} from './teacher-dashboard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TTodayTimetableComponent} from './t-today-timetable/t-today-timetable.component';
import {TMyGroupListComponent} from './t-my-group-list/t-my-group-list.component';


@NgModule({
    declarations: [
        TeacherDashboardComponent,
        TTodayTimetableComponent,
        TMyGroupListComponent
    ],
    imports: [
        CommonModule, TeacherDashboardRoutingModule, MatToolbarModule, SharedModule, MatTabsModule
    ],
    exports: [
        TTodayTimetableComponent,
        TMyGroupListComponent
    ]
})
export class TeacherDashboardModule {
}
