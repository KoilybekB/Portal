import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherJournalComponent} from './teacher-journal.component';
import {TeacherJournalRoutingModule} from './teacher-journal-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        TeacherJournalComponent
    ],
    imports: [
        CommonModule,
        TeacherJournalRoutingModule,
        MatToolbarModule,
        SharedModule
    ]
})
export class TeacherJournalModule {
}
