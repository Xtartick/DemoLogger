import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  
  constructor(private logger: NGXLogger) { }

  //以下五個 都是用於放入message參數以及additional參數｛回傳給server｝
  public DEBUG(component: string, message: string) {
    this.logger.debug(message, component + "," + this.getTime());
  }

  public INFO(component: string, message: string) {
    this.logger.info(message, component + "," + this.getTime());
  }

  public LOG(component: string, message: string) {
    this.logger.log(message, component + "," + this.getTime());
  }

  public WARN(component: string, message: string) {
    this.logger.warn(message, component + "," + this.getTime());
  }

  public ERROR(component: string, message: string) {
    this.logger.error(message, component + "," + this.getTime());
  }

  private getTime() {
    return new DatePipe('en-US').transform(new Date().getTime(), 'yyyy-MM-dd hh:mm:ss');
  }

}
