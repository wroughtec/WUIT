import ProductItemModule from './productItem'
import ProductItemController from './productItem.controller';
import ProductItemComponent from './productItem.component';
import ProductItemTemplate from './productItem.html';

describe('ProductItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductItemController();
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
      expect(ProductItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductItemController);
      });
  });
});
