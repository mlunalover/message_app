import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    message = {
        content: 'A message',
        author: 'Matt'
    };

}