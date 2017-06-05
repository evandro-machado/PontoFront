import { RegistroAppPage } from './app.po';

describe('registro-app App', () => {
  let page: RegistroAppPage;

  beforeEach(() => {
    page = new RegistroAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
