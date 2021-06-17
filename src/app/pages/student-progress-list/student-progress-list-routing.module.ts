import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StudentProgressListComponent} from './student-progress-list.component';


const routes: Routes = [
    {
        path: '',
        component: StudentProgressListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class StudentProgressListRoutingModule {
}
