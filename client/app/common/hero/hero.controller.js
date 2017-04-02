class HeroController {
  constructor() {
    this.name = 'hero';

    this.heroImage = {
      sm: {
        imgSrc: './img/hero/hero1-sm.jpg',
        size: 'sm'
      },
      md: {
        imgSrc: './img/hero/hero1-md.jpg',
        size: 'md'
      },
      lg: {
        imgSrc: './img/hero/hero1-lg.jpg',
        size: 'lg'
      },
      xl: {
        imgSrc: './img/hero/hero1-xl.jpg',
        size: 'xl'
      },
      alt: 'hero',
      title: 'hero',
      pageUrl: '#'
    };
  }
}

export default HeroController;
