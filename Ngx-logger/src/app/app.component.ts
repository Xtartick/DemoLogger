import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FactoryService } from './services/factory.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //用來放當前頁面
  title = 'AppComponent';

  constructor(private factory: FactoryService) { }

  //來回應DOM以及套件應用
  log(level) {
    switch (level) {
      case 0:
        this.factory.DEBUG(this.title, '這邊是 DEBUG');
        break;
      case 1:
        this.factory.INFO(this.title, '這邊是 INFO');
        break;
      case 2:
        this.factory.LOG(this.title, '這邊是 LOG');
        break;
      case 3:
        this.factory.WARN(this.title, '這邊是 WARN');
        break;
      case 4:
        this.factory.ERROR(this.title, '這邊是 ERROR');
        break;
    }
  }
}
