'use strict';

describe('Given user wants to view market ads', function() {
    beforeEach(module('beepbeep'));

    var $filter = null;

    beforeEach(inject(function(_$filter_){
        $filter= _$filter_;
    }));

    describe('When user opens search view', function() {
        it('Then titles longer than 15 characters will be cropped and "..." will be added to them as indication',
            function() {
                var stringFilter = $filter('createTitleSnippet');
                expect(stringFilter('This string is longer than 15 characters'))
                    .toEqual('This string is ...');
        });
        it('Then titles shorter or equal to 15 characters will be shown as they are',
            function() {
                var stringFilter = $filter('createTitleSnippet');
                expect(stringFilter('15 characters--'))
                    .toEqual('15 characters--');
        });
        it('Then descriptions longer than 50 characters will be cropped and "..." will be added to them as indication',
            function() {
                var stringFilter = $filter('createDescriptionSnippet');
                expect(stringFilter('This description is longer than 50 characters. 1234'))
                    .toEqual('This description is longer than 50 characters. 123...');
        });
        it('Then descriptions shorter or equal to 50 characters will be shown as they are',
            function() {
                var stringFilter = $filter('createDescriptionSnippet');
                expect(stringFilter('This description is equal to 50 characters. 123456'))
                    .toEqual('This description is equal to 50 characters. 123456');
        });
    });

    describe('When user opens details view', function() {
            it('Then line changes in ad descrition are converted to HTML format.',
                function() {
                    var stringFilter = $filter('formatDescription');
                    expect(stringFilter('This string has line changes \n in it.'))
                        .toEqual('This string has line changes <br> in it.');
            });
            it('Then strip all possible HTML from description.',
                function() {
                    var stringFilter = $filter('formatDescription');
                    expect(stringFilter('This string has <html></html><br><img> in <a> it.'))
                        .toEqual('This string has  in  it.');
            });
    });
});