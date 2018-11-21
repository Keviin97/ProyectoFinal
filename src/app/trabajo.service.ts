import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trabajo } from './trabajo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(private _http : Http){ }
 
  // Get list of products from remote server.
  readTrabajos(): Observable<Trabajo[]>{

      return this._http
          .get("http://localhost/api/trabajo/read.php")
          .pipe(map((res: Response) => res.json()));
  }

  createTrabajo(trabajo): Observable<Trabajo>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
    
        return this._http.post(
            "http://localhost/api/trabajo/create.php",JSON.stringify(trabajo)
        ).pipe(map((res: Response) => res.json()));
    }

    readOneTrabajo(id_Trabajo): Observable<Trabajo>{
        return this._http
            .get("http://localhost/api/trabajo/read_one.php?id="+id_Trabajo)
            .pipe(map((res: Response) => res.json()));
    }
    updateTrabajo(Trabajo): Observable<Trabajo>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/trabajo/update.php",JSON.stringify(Trabajo)
        ).pipe(map((res: Response) => res.json()));
    }
    deleteTrabajo(id_Trabajo){
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/trabajo/delete.php",
            { id_Trabajo: id_Trabajo }
        ).pipe(map((res: Response) => res.json()));
    }
}
