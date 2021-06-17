import {Component, OnInit} from '@angular/core';
import {TeacherSchedulerService} from '../../shared/service/teacher-scheduler.service';

@Component({
    selector: 'app-teacher-scheduler',
    templateUrl: './teacher-scheduler.component.html',
    styleUrls: ['./teacher-scheduler.component.scss']
})
export class TeacherSchedulerComponent implements OnInit {
    public displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
    public dataSource =  [
        {
            time: '08:55',
            l1: { name: 'Algebra1',  classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra2',  classRoom: '25 room', group: '112 A' },
            l3: { name: 'Algebra3',  classRoom: '25 room', group: '111 A' },
            l4: { name: 'Algebra4',  classRoom: '25 room', group: '113 A' },
            l5: { name: 'Algebra5',  classRoom: '25 room', group: '114 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra6',  classRoom: '25 room', group: '115 A' },
            l2: { name: 'Algebra7',  classRoom: '25 room', group: '116 A' },
            l3: { name: 'Algebra8',  classRoom: '25 room', group: '117 A' },
            l4: { name: 'Algebra9',  classRoom: '25 room', group: '118 A' },
            l5: { name: 'Algebra0',  classRoom: '25 room', group: '119 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra12',  classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra13',  classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra14',  classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra21',  classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra22',  classRoom: '25 room', group: '11 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra',  classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra',  classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra',  classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra',  classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra',  classRoom: '25 room', group: '11 A' }
        }


    ];

    constructor(private service: TeacherSchedulerService) {
    }

    ngOnInit(): void {
    }

}
