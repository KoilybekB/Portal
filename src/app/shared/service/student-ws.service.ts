
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/dist/types';

@Injectable({
    providedIn: 'root'
})
export class StudentWsService {
    private readonly STUDENT_WS_CONTROLLER = '/api/private/v1/student/ws';

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

    getHotData(studentId): Observable<any> {
        return this.http.get(`${this.STUDENT_WS_CONTROLLER}/hot/studentId/${studentId}`, this.HTTP_OPTIONS());
    }

    getMyCources(studentId): Observable<any> {
        return this.http.get(`${this.STUDENT_WS_CONTROLLER}/myCources/studentId/${studentId}`, this.HTTP_OPTIONS());
    }
}
