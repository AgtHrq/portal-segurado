import { Injectable } from '@angular/core';
import { ValidationErrors, AsyncValidator, AbstractControl } from '@angular/forms';

import { UserService } from './../services/user.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator{

    constructor(private userService: UserService){

    }

    validate(
        ctrl: AbstractControl
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | null{
         

        return this.userService.verificaEmail(ctrl.value).pipe(
            map(emailCadastrado => (emailCadastrado ? { uniqueEmail: true } : null)),
            catchError(() => [null])
        );
    }
}
