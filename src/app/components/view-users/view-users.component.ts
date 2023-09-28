import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User[] = []

  constructor(public appService: AppService) {}

  ngOnInit(): void {
   /* this.appService.getUsers().subscribe(
    //  (response: any) => console.log(response)
    (response: any) => this.users = [...response]
    )
    */
   this.aducereUtilizatori();
  }

  stergeUtilizator(user: any) {
    console.log(user)

    this.appService.deleteUser(user.id).subscribe(
      // pt. a reafisa lista 
      /*   (res: any) =>{
           this.appService.getUsers().subscribe(
              (response: any) => {
               this.users = [...response]
             }
             )
         }
         */
      (res: any) => {
       // this.aducereUtilizatori();
       this.users = this.users.filter(el => el.id != user.id)
      }

    )

  }

  aducereUtilizatori(){
    this.appService.getUsers().subscribe(
      (res: any) => this.users = [...res]
      )
  }




}
