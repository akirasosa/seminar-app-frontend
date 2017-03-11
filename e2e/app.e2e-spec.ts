import { SeminarAppFrontendPage } from './app.po';

describe('seminar-app-frontend App', () => {
  let page: SeminarAppFrontendPage;

  beforeEach(() => {
    page = new SeminarAppFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
