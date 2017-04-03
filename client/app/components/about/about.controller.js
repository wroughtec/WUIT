class AboutController {
  constructor($http) {
    this.name = 'about';

    this.$http = $http;

    this.getTreeMenu()
      .then(result => this.menu = result.data.menu);
  }

  getTreeMenu() {
    return this.$http.get('./data/menu.json');
  }
}

AboutController.$inject = ['$http'];

export default AboutController;
