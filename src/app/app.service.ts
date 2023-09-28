import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AppService {
    constructor(public http: HttpClient) {}

    getUsers() {
        // ne legam de back end
        return this.http.get("http://localhost:8080/utilizatori/toti");
    }

    getUserById(id: string | number) {}

    addUser(dto: any) {
        return this.http.post("http://localhost:8080/utilizatori/nou", dto);
    }

    editUser(dto: any) {
        return this.http.put('http://localhost:8080/utilizatori/actualizeazaUtilizator',dto);
    }

    deleteUser(id: number) {
        return this.http.delete(`http://localhost:8080/utilizatori/${id}`);
    }

    findUserByName(nume: string){
        // o concatenare
          return this.http.get("http://localhost:8080/utilizatori/filtrare/" +nume);

    }
}