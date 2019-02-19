import { Component, OnInit } from '@angular/core';
import { TranslateService }  from '@ngx-translate/core';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'sellerup-front';

    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
        this.i18nConfiguration();
    }

    private i18nConfiguration() {
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }

}
