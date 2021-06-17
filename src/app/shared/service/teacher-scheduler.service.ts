import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherSchedulerService {
    private readonly ROLES_CONTROL = '/api/private/v1/scheduler/teacher';

    constructor(private http: HttpClient) {
    }

    getAllData(day, month, teacherId, year): Observable<any> {
        return this.http.get(`${this.ROLES_CONTROL}/all/teacherId/${teacherId}?day=${day}&month=${month}&year=${year}`);
    }


}
