import { AngularTempPage } from './app.po';

describe('angular-temp App', () => {
  let page: AngularTempPage;

  beforeEach(() => {
    page = new AngularTempPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
