/// <reference types="Cypress" />

import DatePicker from "../pageobjects/DatePicker"



context('Hotel booking', () => {
  it('Visited Goibibo website', () => 
  {
    cy.visit('https://www.goibibo.com/')

  })


  it('Select location', () => {  
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#downshift-1-input').clear()
    cy.get('#downshift-1-input').type('Surat District, Gujarat, India')
    cy.get('#downshift-1-item-1').click()
  })

  it('Select the date', () => {
    
    // cy.get('[data-testid="openCheckinCalendar"]').click()
    cy.get('[data-testid="openCheckinCalendar"]').click()


    
    cy.get('[data-testid="date_23_5_2023"]').click()
    cy.get('[data-testid="date_25_5_2023"]').click()

    cy.get('.SearchBlockUIstyles__CitySearchInput-sc-fity7j-13').click()
    cy.get('[data-testid="button-adult-dec"]').click()
    cy.get('[data-testid="button-adult-add"]').click()
    cy.get('.PaxWidgetstyles__ButtonWrapperDiv-sc-gv3w6r-10 > .dwebCommonstyles__ButtonBase-sc-112ty3f-13').click()
    cy.get('[data-testid="searchHotelBtn"]').click()
    // cy.get('.close').click()

  })

  it('Compare hotels', () => {

   
    cy.get(':nth-child(1) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').invoke('text').then((text1) => {
      const price1 = parseFloat(text1.replace('₹', ''));

      cy.get(':nth-child(2) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').invoke('text').then((text2) => {
        const price2 = parseFloat(text2.replace('₹', ''));  

        if (price1 > price2)
        {
          cy.get(':nth-child(2) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').click()
          cy.get(':nth-child(2) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').invoke('text')
        }
        else {
          cy.get(':nth-child(2) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').click()
          cy.get(':nth-child(2) > .HotelCardstyles__OuterWrapperDiv-sc-1s80tyk-1 > .HotelCardstyles__WrapperSectionMetaDiv-sc-1s80tyk-8 > .HotelCardstyles__HotelCardInfoWrapperDiv-sc-1s80tyk-14 > .HotelCardstyles__HotelPricingInfoWrapperDiv-sc-1s80tyk-29 > :nth-child(2) > :nth-child(1) > .HotelCardstyles__PricingCompleteSection-sc-1s80tyk-69 > .HotelCardstyles__CurrentPriceTextWrapper-sc-1s80tyk-39 > .HotelCardstyles__CurrentPrice-sc-1s80tyk-40').invoke('text')
        }
        })
    })
  })

  })
  



  
