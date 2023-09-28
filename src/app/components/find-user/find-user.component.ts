import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {User} from 'src/app/interfaces/User.interface'

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {

nume: string ="";
utilizatorGasit: User = {};

constructor(public appService: AppService){}

cautaUtilizator(){
  console.log('cauta');
  this.appService.findUserByName(this.nume).subscribe(
    //(res: any) => console.log(res)
    (res: any) => this.utilizatorGasit = {...res[0]}
  )
}


}
