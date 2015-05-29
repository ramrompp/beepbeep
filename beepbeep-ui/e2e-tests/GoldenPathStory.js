'use strict';

describe('As a user', function() {

    describe('I want to post market ads', function() {
            it('So that other users can find out what I have to offer', function() {
                browser.get('http://localhost:8000/app');
                element(by.model('filterString')).sendKeys('slovakialainen');
                var initialCardCount = element.all(by.repeater('ad in marketads'))
                expect(initialCardCount.count()).toEqual(1);
            });
    });

    describe('I want to search market ads', function() {
        it('So that I can find ads within my interest', function() {
            browser.get('http://localhost:8000/app');
            element(by.model('filterString')).sendKeys('slovakialainen');
            var initialCardCount = element.all(by.repeater('ad in marketads'))
            expect(initialCardCount.count()).toEqual(1);
        });
    });

    describe('I want to delete market ads', function() {
                it('So I can remove faulty or sold market ads', function() {
                    browser.get('http://localhost:8000/app');
                    element(by.model('filterString')).sendKeys('slovakialainen');
                    var initialCardCount = element.all(by.repeater('ad in marketads'))
                    expect(initialCardCount.count()).toEqual(1);
                });
    });
});