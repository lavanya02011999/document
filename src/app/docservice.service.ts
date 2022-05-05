import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documents } from 'src/documents';

@Injectable({
  providedIn: 'root'
})
export class DocserviceService {

  constructor(private http:HttpClient) { }
  
private url =  "http://localhost:8080"

  public getval():Observable<Documents[]>{
    return  this.http.get<Documents[]>(`${this.url}/getdoc`)
}

public delval(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/deldoc/${id}`)
  // /delbook/{bookid}
}

public addval(Doc:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/adddoc`,Doc)
}

public updateval(id:number,doc:Documents):Observable<Object>{
  return this.http.put(`${this.url}/updatedoc/${id}`,doc)
}

public getvalbyid(id:number):Observable<Documents>{
  return this.http.get<Documents>(`${this.url}/getdocbyid/${id}`)
}


  
}
