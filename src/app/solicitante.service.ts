import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Solicitante } from './solicitante';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteService {

  // We need Http to talk to a remote server.
  constructor(private _http : Http){ }
 
  // Get list of products from remote server.
  readSolicitantes(): Observable<Solicitante[]>{

      return this._http
          .get("http://localhost/api/solicitante/read.php")
          .pipe(map((res: Response) => res.json()));
  }

  createSolicitante(solicitante): Observable<Solicitante>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
    
        return this._http.post(
            "http://localhost/api/solicitante/create.php",JSON.stringify(solicitante)
        ).pipe(map((res: Response) => res.json()));
    }

    readOneSolicitante(id_Solicitante): Observable<Solicitante>{
        return this._http
            .get("http://localhost/api/solicitante/read_one.php?id="+id_Solicitante)
            .pipe(map((res: Response) => res.json()));
    }
    updateSolicitante(solicitante): Observable<Solicitante>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/solicitante/update.php",JSON.stringify(solicitante)
        ).pipe(map((res: Response) => res.json()));
    }
    deleteSolicitante(id_Solicitante){
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/solicitante/delete.php",
            { id_Solicitante: id_Solicitante }
        ).pipe(map((res: Response) => res.json()));
    }
}
