import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ViewUsersComponent } from "./components/view-users/view-users.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { FindUserComponent } from "./components/find-user/find-user.component";

const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: DashboardComponent
    },
    {
        path: 'view-users', component: ViewUsersComponent
    },
    {
        path: 'view-users/edit-user/:id', component: EditUserComponent    //:id pt. rute dinamice
    },
    {
        path: 'add-user', component: AddUserComponent
    },
    {
        path:'find-user', component: FindUserComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}