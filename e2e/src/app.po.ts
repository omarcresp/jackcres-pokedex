import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): any {
    return browser.get(browser.baseUrl);
  }

  getTitleText(): any {
    return element(by.css('app-root .content span')).getText();
  }
}
