import TreeMenuModule from './treeMenu'
import TreeMenuController from './treeMenu.controller';
import TreeMenuComponent from './treeMenu.component';
import TreeMenuTemplate from './treeMenu.html';

describe('TreeMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TreeMenuModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TreeMenuController();
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
      expect(TreeMenuTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TreeMenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TreeMenuTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TreeMenuController);
      });
  });
});
