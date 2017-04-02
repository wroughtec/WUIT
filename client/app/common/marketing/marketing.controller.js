class MarketingController {
  constructor() {
    this.name = 'marketing';

    this.playingGuide = {
      title: 'Start playing in 3 steps',
      steps: {
        one: 'Complete the join form',
        two: 'Fund your account',
        three: 'Start playing!'
      }
    };

    this.bonus = {
      title: 'Bonuses & Benefits',
      steps: {
        one: '10% instant bonus',
        two: 'Free and fast payouts',
        three: '4 great products - 1 account'
      }
    };
  }
}

export default MarketingController;
