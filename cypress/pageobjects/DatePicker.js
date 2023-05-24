class DatePicker
{

   
getDate()
{
    return cy.get('div.dwebCommonstyles__BaseColumnWrap-sc-112ty3f-2.HomePagestyles__HomeBodyWrapperSection-sc-s8m7jv-0.fVGWFo.HXpRb div.HomePagestyles__HomeBodyWrapperContentDiv-sc-s8m7jv-1.kmNUVQ section.HomePagestyles__SearchBlockOuterWrapper-sc-s8m7jv-5.gxpKrW:nth-child(4) div.SearchBlockUIstyles__AutoSuggestOuterWrap-sc-fity7j-0.ecbwUo div.SearchBlockUIstyles__AutoSuggestInnerWrap-sc-fity7j-1.emHEpq div.SearchBlockUIstyles__CitySearchWrap-sc-fity7j-8.iFQeqy:nth-child(3) div.dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0.SearchBlockUIstyles__SearchCheckingDateWrap-sc-fity7j-17.eHRHNU.fDWWDG div.SearchBlockUIstyles__CheckInCheckOutWrap-sc-fity7j-19.hneYUw:nth-child(1) div.CalendarBlock__CalendarBlockOuterWrapper-sc-o8bx9f-0.ktfeGI:nth-child(2) section.dcalendar-newstyles__CalenderOuterWrapper-sc-1i003by-1.eERgSh div.dcalendar-newstyles__FlexItem-sc-1i003by-0.dcalendar-newstyles__MonthOuterWrapper-sc-1i003by-3.ljWsys.bAVDze div.dcalendar-newstyles__CalenderMonthContainer-sc-1i003by-2.kCupBq:nth-child(2) div.dcalendar-newstyles__CalendarMainWrapperDiv-sc-1i003by-13.idVbVB div.dcalendar-newstyles__DayAndDateRightWrapper-sc-1i003by-15.eLOwsV > ul.dcalendar-newstyles__DateWrapDiv-sc-1i003by-18.eFyCNL')
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')

}
getGender()
{
  return  cy.get('select')
}

getEntrepreneaur()
{
   return cy.get('#inlineRadio3')
}
getShopTab()
{
    return  cy.get(':nth-child(2) > .nav-link')
}

}

export default DatePicker;
