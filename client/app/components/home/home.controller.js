class HomeController {
  constructor() {
    this.name = 'home';

    this.headerlinks = {
      contact: {
        pageUrl: '#',
        name: 'Contact us',
        cssClass: 'contact'
      },
      bonus: {
        pageUrl: '#',
        name: 'Bonuses',
        cssClass: 'bonus'
      },
      help: {
        pageUrl: '#',
        name: 'Help',
        cssClass: 'help'
      },
      phone: {
        name: 'Toll Free: 00-800-1004-2004',
        cssClass: 'phone'
      }
    };
  }
}

export default HomeController;
