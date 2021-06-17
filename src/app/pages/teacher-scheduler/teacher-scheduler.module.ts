import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherSchedulerComponent} from './teacher-scheduler.component';
import {TeacherSchedulerRoutingModule} from './teacher-scheduler-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {TLessonItemComponent} from './t-lesson-item/t-lesson-item.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        TeacherSchedulerComponent,
        TLessonItemComponent
    ],
    imports: [
        CommonModule,
        TeacherSchedulerRoutingModule,
        MatToolbarModule,
        SharedModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule
    ],
    exports: [
        TLessonItemComponent
    ]
})
export class TeacherSchedulerModule {
}
