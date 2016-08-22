
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckAbstractComponent } from '../';
import { AuthService } from '../lib/auth.service';

@Component ({
    moduleId: module.id,
    selector: 'auth-landing',
    templateUrl: '../static/html/landing.component.html'
})
export class LandingComponent extends AuthCheckAbstractComponent {
    constructor ( protected authService: AuthService, protected router: Router )
    {
        super ( authService, router );
    }
}
