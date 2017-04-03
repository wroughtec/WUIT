class NavbarController {
  constructor() {
    this.name = 'Brand';

    this.links = {
      poker: {
        pageUrl: 'about',
        name: 'Poker',
        cssClass: 'poker'
      },
      casino: {
        pageUrl: 'about',
        name: 'Casino',
        cssClass: 'casino'
      },
      sports: {
        pageUrl: 'about',
        name: 'Sports',
        cssClass: 'sports'
      },
      live: {
        pageUrl: 'about',
        name: 'Live',
        cssClass: 'live'
      }
    };
  }
}

export default NavbarController;
