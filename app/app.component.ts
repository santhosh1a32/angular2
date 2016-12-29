import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class ="navbar-brand">My Angular 2 App!</a>
                </div>
            </nav>
        </header>
        <div class="jumbotron">
            <h1>Welcome to vetahealth</h1>
        </div>
        
        <div *ngFor="let user of users">
            {{user.name}} ({{user.userName}})
        </div>

        <footer class="text-center">
         Copyright &copy; Santhosh 
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})

export class AppComponent {
    users = [
        {name: "Santhosh", userName: "santhosh1a32"},
        {name: "Kumar", userName: "Kumar1230"},
        {name: "Aineri", userName: "Aineri@123"}
    ];
};