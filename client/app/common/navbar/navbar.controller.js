class NavbarController {
  constructor() {
    this.name = 'Brand';

    this.links = {
      poker: {
        pageUrl: '#',
        name: 'Poker',
        cssClass: 'poker'
      },
      casino: {
        pageUrl: '#',
        name: 'Casino',
        cssClass: 'casino'
      },
      sports: {
        pageUrl: '#',
        name: 'Sports',
        cssClass: 'sports'
      },
      live: {
        pageUrl: '#',
        name: 'Live',
        cssClass: 'live'
      }
    };
  }
}

export default NavbarController;
