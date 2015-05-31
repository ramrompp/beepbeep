'use strict';
/**
* Test for golden path E2E case.
*
*/
describe('As a user', function() {

    var Mocks = require('./mocks/MepaStoreAPIMock.js');

    // If you want to test against live backend, put line below in comments.
    browser.addMockModule('httpBackendMock', Mocks.httpBackendMock);

    describe('I want to post market ads', function() {
            it('So other users can find out what I have to offer', function() {
                var title = 'E2E test title';
                var description = 'This is a E2E test description.';
                var price = '200.25';
                var email = 'teppo.annikki.testaaja@test.invalid';
                var phone = '1234567890';

                browser.get('http://localhost:8000/app');
                // Navigate to add view.
                element(by.id('addLink')).click();

                // Input market ad information.
                element(by.id('title')).sendKeys(title);
                element(by.id('description')).sendKeys(description);
                element(by.id('price')).sendKeys(price);
                element(by.id('email')).sendKeys(email);
                element(by.id('phone')).sendKeys(phone);
                element(by.id('submitButton')).click();

                var messageValue = element(by.id('successIndicator')).getText();
                expect(messageValue).toEqual('Success!');
                element(by.model('filterString')).sendKeys('E2E');
                var cardElements = element.all(by.repeater('ad in marketads'));
                expect(cardElements.count()).toEqual(1);
                element(by.id('titleLink')).click();

                expect(element(by.tagName('h2')).getText()).toEqual(title);
                expect(element(by.id('price')).getText()).toEqual(price);
                expect(element(by.id('description')).getText()).toEqual(description);
                expect(element(by.id('email')).getText()).toEqual(email);
                expect(element(by.id('phone')).getText()).toEqual(phone);
            });
    });

    describe('I want to search market ads', function() {
        it('So I can find ads within my interest', function() {
            browser.get('http://localhost:8000/app');
            element(by.model('filterString')).sendKeys('TEST1');
            var cardElements = element.all(by.repeater('ad in marketads'));
            expect(cardElements.count()).toEqual(1);
        });
    });

    describe('I want to delete market ads', function() {
        it('So I can remove faulty or sold market ads', function() {
            browser.get('http://localhost:8000/app');

            // Navigate to ad to be deleted.
            element(by.model('filterString')).sendKeys('TEST1');
            element(by.id('titleLink')).click();

            // Delete ad.
            element(by.id('deleteLink')).click();

            var modal = element(by.id('confirmModal'));

            browser.wait(EC.visibilityOf(modal), 5000);
            element(by.id('deleteConfirmation')).click();

            var initView = element(by.id('titleLink'));
            browser.wait(EC.visibilityOf(initView), 5000);

            var messageValue = element(by.id('successIndicator')).getText();
            expect(messageValue).toEqual('Success!');
            var cardElements = element.all(by.repeater('ad in marketads'));
            expect(cardElements.count()).toEqual(2);
        });
    });
});