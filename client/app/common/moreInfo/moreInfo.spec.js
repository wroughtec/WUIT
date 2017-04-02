import MoreInfoModule from './moreInfo'
import MoreInfoController from './moreInfo.controller';
import MoreInfoComponent from './moreInfo.component';
import MoreInfoTemplate from './moreInfo.html';

describe('MoreInfo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoreInfoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoreInfoController();
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
      expect(MoreInfoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MoreInfoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MoreInfoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MoreInfoController);
      });
  });
});
