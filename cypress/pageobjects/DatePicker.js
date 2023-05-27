class DatePicker
{

   
getCalendar()
{
    return cy.get('[data-testid="openCheckinCalendar"] > .dwebCommonstyles__SmallSectionHeader-sc-112ty3f-10')
}

getOpenCalendarForward()
{
    return cy.get('[data-testid="calendarRightArrowBtn"]')

}
getMonthsName()
{
  return  cy.get('[data-testid="currentCalendarMonthName"]')
}

getYearDetail()
{
   return cy.get('#inlineRadio3')
}
getCalendarDays()
{
    return  cy.get('date_is_selectable_true')
}

}

export default DatePicker;
