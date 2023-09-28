import { Component } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

    user:any;

    editUserForm: FormGroup<{
        id: FormControl<number>;
        nume: FormControl<string>;
        prenume: FormControl<string>;
        varsta: FormControl<string>;
    }>;

    constructor(
        private fb: NonNullableFormBuilder,
        private router:Router,
        private activatedRoute:ActivatedRoute,
        public appService: AppService) {
        
        this.user = history.state;
        this.editUserForm = this.fb.group({
            id: [this.user.id],
            nume: [this.user.nume, [Validators.required]],
            prenume: [this.user.prenume, [Validators.required]],
            varsta: [this.user.varsta, [Validators.required]]
        });

    }


    editeazaUtilizator() {
       // console.log(this.editUserForm.value)
        this.appService.editUser(this.editUserForm.value).subscribe(res => console.log(res))
    }

    resetareFormular(e: MouseEvent): void {
        e.preventDefault();
        this.editUserForm.reset();
    }
}
