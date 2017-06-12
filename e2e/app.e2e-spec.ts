import { OrpheusPage } from './app.po';

describe('orpheus App', () => {
  let page: OrpheusPage;

  beforeEach(() => {
    page = new OrpheusPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
