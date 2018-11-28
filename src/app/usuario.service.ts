import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http : Http) { }

  login(user,pass): Observable<Usuario>{
    return this._http
        .get("http://localhost/api/usuario/read_one.php?user="+user+"&pass="+pass)
        .pipe(map((res: Response) => res.json()));
  }
}
