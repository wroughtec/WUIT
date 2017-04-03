import angular from 'angular';
import Navbar from './navbar/navbar';
import Mininav from './mininav/mininav';
import Hero from './hero/hero';
import Marketing from './marketing/marketing';
import MarketingMsg from './marketingMsg/marketingMsg';
import Products from './products/products';
import ProductItem from './productItem/productItem';
import MoreInfo from './moreInfo/moreInfo';
import FooterNav from './footerNav/footerNav';
import TreeMenu from './treeMenu/treeMenu';

let commonModule = angular.module('app.common', [
  Navbar,
  Mininav,
  Hero,
  Marketing,
  MarketingMsg,
  Products,
  ProductItem,
  MoreInfo,
  FooterNav,
  TreeMenu
])

.name;

export default commonModule;
