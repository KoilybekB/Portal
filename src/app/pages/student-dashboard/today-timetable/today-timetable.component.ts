import {Component, OnInit} from '@angular/core';
import {StudentWsService} from '../../../shared/service/student-ws.service';
import {FormControl} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-today-timetable',
    templateUrl: './today-timetable.component.html',
    styleUrls: ['./today-timetable.component.css']
})

export class TodayTimetableComponent implements OnInit {
    toList = [];
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());
    dd: any;
    todayNumber: number = Date.now();
    todayDate: Date = new Date();
    todayString: string = new Date().toDateString();
    todayISOString: string = new Date().toISOString();

    constructor(private studentWsService: StudentWsService, private datePipe: DatePipe) {
        this.dd = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    }

    ngOnInit(): void {
        this.getHotData();
    }

    getHotData() {
        this.studentWsService.getHotData(1).subscribe(res => {
            this.toList = res;
        });
    }
}
