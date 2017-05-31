import { MyLoginAppPage } from './app.po';

describe('my-login-app App', () => {
  let page: MyLoginAppPage;

  beforeEach(() => {
    page = new MyLoginAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
