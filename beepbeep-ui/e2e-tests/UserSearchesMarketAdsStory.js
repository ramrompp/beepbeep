'use strict';

describe('As a user', function() {

    describe('I want to search market ads', function() {
        it('So that I can find ads within my interest', function() {
            browser.get('http://localhost:8000');
            element(by.model('filterString')).sendKeys('slovakialainen');
            var initialCardCount = element.all(by.repeater('ad in marketads'))
            expect(initialCardCount.count()).toEqual(1);
        });
    });

});