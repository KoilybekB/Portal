import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentDashboardComponent} from './student-dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: StudentDashboardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class StudentDashboardRoutingModule {
}
