import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Quiz, NewQuiz } from '../interfaces/quiz';
import { Score } from '../interfaces/score';
import { Details } from '../interfaces/details';
import { BehaviorSubject } from 'rxjs';

export { Quiz } from '../interfaces/quiz';
export { Details } from '../interfaces/details';

@Injectable({
    providedIn: 'root'
})
export class AddQuizService {



    constructor(private http: HttpClient) {

    }



}
