import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as Raven from 'raven-js';

if (environment.production) {
  Raven
  // TODO: Get ID in @sentry.io 
  .config('')
  .install();
}

@Injectable()
export class LoggerService {
  setUserContext(user: any)  {
    if (environment.production) {
        Raven.setUserContext({
          email: 'fred.gamez@gmail.com',
          id: 0,
          username: 'john.gamez',
        });
    }
  }
  /**
   * Allow set user on context Raven
   * @returns void
   */
  clearUserContext(): void {
    if (environment.production) {
      Raven.setUserContext(null);
    }
  }
  /**
   * This method emit event error in raven
   * @param  {any} e
   * @returns void
   */
  captureException(e: any): void {
    if (environment.production) {
      Raven.captureException(e);
    } else {
      console.log(e);
    }
  }
  /**
   * Register a message in log
   * @param  {any} m
   * @returns any
   */
  debug(m: any): any {
    console.log(m);
  }
}
