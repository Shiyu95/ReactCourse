// @ts-nocheck
import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filter';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });

});


test('should generate set Text Filter action object', () => {
    const action = setTextFilter("Something in");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:"Something in"
    });

});

test('should generate sort By Date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });

});


test('should generate sort By Amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });

});