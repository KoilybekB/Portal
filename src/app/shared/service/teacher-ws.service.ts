import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})
export class TeacherWsService {
    private readonly TEACHER_WS_CONTROLLER = '/api/private/v1/teacher/ws';

    constructor(private http: HttpClient) {
    }

    // tslint:disable-next-line:only-arrow-functions
    private readonly HTTP_OPTIONS = function(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token')
            })
        };
    };

    getHotData(teacherId): Observable<any> {
        return this.http.get(`${this.TEACHER_WS_CONTROLLER}/hot/teacherID/${teacherId}`, this.HTTP_OPTIONS());
    }

    getMyCources(teacherId): Observable<any> {
        return this.http.get(`${this.TEACHER_WS_CONTROLLER}/myCources/teacherID/${teacherId}`, this.HTTP_OPTIONS());
    }
}
