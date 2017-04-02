class FooterNavController {
  constructor() {
    this.name = 'footerNav';

    this.footerNav = {
      title: 'Sports Betting',
      links: [
        'Football betting',
        'Sports live betting',
        'Cricket betting',
        'MLB baseball betting',
        'NFL football betting'
      ]
    };

    this.getNumber = function(num) {
      return new Array(num);
    }

    this.footerlinks = {
      about: {
        pageUrl: '#',
        name: 'About',
        cssClass: 'about'
      },
      responsible: {
        pageUrl: '#',
        name: 'Responsible Gaming',
        cssClass: 'responsible'
      },
      privacy: {
        pageUrl: '#',
        name: 'Privacy Policy',
        cssClass: 'privacy'
      }
    };

    this.externalLinks = {
      affiliate: {
        pageUrl: '#',
        name: 'Affiliate Program',
        cssClass: 'affiliate'
      },
      international: {
        pageUrl: '#',
        name: 'International Sites',
        cssClass: 'international'
      }
    };
  }
}

export default FooterNavController;
