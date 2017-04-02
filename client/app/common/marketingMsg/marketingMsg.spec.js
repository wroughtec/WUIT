import MarketingMsgModule from './marketingMsg'
import MarketingMsgController from './marketingMsg.controller';
import MarketingMsgComponent from './marketingMsg.component';
import MarketingMsgTemplate from './marketingMsg.html';

describe('MarketingMsg', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MarketingMsgModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MarketingMsgController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MarketingMsgTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MarketingMsgComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MarketingMsgTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MarketingMsgController);
      });
  });
});
