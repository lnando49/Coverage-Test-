import { $, $$ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SortPage extends Page {
// bug found for price
    get firstProductPriceLtH () {
        return $('article.pcard:first-of-type .pcard-price')
    }

    get lastProductPriceLtH () {
        return $('article.pcard:last-of-type .pcard-price')
    }

    get firstProductNameAtZ () {
        return $('article.pcard:first-of-type .pcard-name');
    }
    get lastProductNameAtZ() {
        return $('article.pcard:last-of-type .pcard-name');
    }

    get sortBtnDropdown () {
        return $('#sort-dropdown');
    }

     get sortBtn () {
        return $('#sort-btn');
    }

    get featureOpt () {
        return $('div[data-sort="default"]');
    }

    get priceLtH () {
        return $('div[data-sort="price-asc"]');
    }

    get priceHtL () {
        return $('div[data-sort="price-desc"]');
    }

    get nameAtZ () {
        return $('div[data-sort="name-asc"]');
    }

    get nameZtA () {
        return $('div[data-sort="name-desc"]');
    }

    get onSale () {
        return $('div[data-sort="on-sale"]');
    }

    get newArrivals () {
        return $('div[data-sort="new"]');S
    }


    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new SortPage();
