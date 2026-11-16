import { expect } from '@wdio/globals'
import SortPage from '../pageobjects/sort.page.js'
import sortPage from '../pageobjects/sort.page.js';



describe('sort button test: does it open and close', () => {

    it('should sort products price: low to high. only checking the first product and last product price.', async () => {
    await SortPage.open()

    await SortPage.sortBtn.click()
    await SortPage.priceLtH.click()

    await expect(SortPage.firstProductPriceLtH).toHaveText('$0.00')
    await expect(SortPage.lastProductPriceLtH).toHaveText('$229.99')
    
});

    it('should sort products alphabetically from A to Z. opnly checking the first product and last product.', async () => {
    await SortPage.open()

    await SortPage.sortBtn.click()
    await SortPage.nameAtZ.click()

    await expect(SortPage.firstProductNameAtZ).toHaveText('adidas Batting Helmet Hardware Kit')
    await expect(SortPage.lastProductNameAtZ).toHaveText(expect.stringContaining("Under Armour Women's Micro G Skulpt"))



});



//testing that the button opens the scrolldown option and closes
      it('Does my sort button open and close', async () => {
        await SortPage.open()

        await expect(SortPage.sortBtnDropdown).not.toBeDisplayed();

        await SortPage.sortBtn.click();
        await expect(SortPage.sortBtnDropdown).toBeDisplayed()

        await SortPage.sortBtn.click()
        await expect(SortPage.sortBtnDropdown).not.toBeDisplayed();
    }); 


    // clicking on sort button to see if text is updated when selecting option
    it('should update sort button price low to high', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.priceLtH.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('Price: Low to High'));
    }); 
      it('should update sort button price High to Low', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.priceHtL.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('Price: High to Low'));
    }); 
    it('should update sort button Name: a > Z', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.nameAtZ.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('Name: A → Z'));
    }); 
     it('should update sort button Name: Z > A', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.nameZtA.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('Name: Z → A'));
    }); 
    it('should update sort button: on sale', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.onSale.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('On sale'));
    }); 

     it('should update sort button: New arrivals', async () => {
        await SortPage.open()

        await SortPage.sortBtn.click()
        await SortPage.newArrivals.click()
        await expect(SortPage.sortBtn).toHaveText(expect.stringContaining('New arrivals'));
    });


    
   
        
    });


