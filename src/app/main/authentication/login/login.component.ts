import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../../@fuse/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../../@fuse/services/config.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ]
            ,
            password: ['',
                Validators.required
            ]
        });
    }

    onSubmit() {
        console.log('submit du form');
        if (this.loginForm.valid) {
            console.log('call api');
        }
    }

}
