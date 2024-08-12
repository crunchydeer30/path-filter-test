import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  //
  describe('App1', () => {
    it('should return "App1"', () => {
      expect(appController.getHello()).toEqual({
        message: 'App1',
      });
    });
  });
});
