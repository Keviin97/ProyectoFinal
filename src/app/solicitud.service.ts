import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Solicitud } from './solicitud';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private _http : Http){ }
 
  // Get list of products from remote server.
  readSolicitudes(): Observable<Solicitud[]>{

      return this._http
          .get("http://localhost/api/solicitud/readSolicitud.php")
          .pipe(map((res: Response) => res.json()));
  }

  createSolicitud(Solicitud): Observable<Solicitud>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
    
        return this._http.post(
            "http://localhost/api/solicitud/create.php",JSON.stringify(Solicitud)
        ).pipe(map((res: Response) => res.json()));
    }

    readOneSolicitud(id_Solicitud): Observable<Solicitud>{
        return this._http
            .get("http://localhost/api/solicitud/read_one.php?id="+id_Solicitud)
            .pipe(map((res: Response) => res.json()));
    }
    updateSolicitud(Solicitud): Observable<Solicitud>{
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/solicitud/update.php",JSON.stringify(Solicitud)
        ).pipe(map((res: Response) => res.json()));
    }
    deleteSolicitud(id_Solicitud){
 
        let headers = new Headers({ 'Content-Type': 'application/json' });
     
        return this._http.post(
            "http://localhost/api/solicitud/delete.php",
            { id_Solicitud: id_Solicitud }
        ).pipe(map((res: Response) => res.json()));
    }
}
