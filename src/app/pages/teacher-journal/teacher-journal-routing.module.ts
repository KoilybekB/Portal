import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TeacherJournalComponent} from './teacher-journal.component';


const routes: Routes = [
    {
        path: '',
        component: TeacherJournalComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TeacherJournalRoutingModule {

}
