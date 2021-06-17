import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentSchedulerComponent} from './student-scheduler.component';


const routes: Routes = [
    {
        path: '',
        component: StudentSchedulerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class StudentSchedulerRoutingModule {
}
