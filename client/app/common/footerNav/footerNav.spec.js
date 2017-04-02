import FooterNavModule from './footerNav'
import FooterNavController from './footerNav.controller';
import FooterNavComponent from './footerNav.component';
import FooterNavTemplate from './footerNav.html';

describe('FooterNav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FooterNavModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FooterNavController();
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
      expect(FooterNavTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FooterNavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FooterNavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FooterNavController);
      });
  });
});
