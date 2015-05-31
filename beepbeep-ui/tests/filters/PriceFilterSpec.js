'use strict';

describe('Given user wants to view prices', function() {
    beforeEach(module('beepbeep'));

    var $filter = null;

    beforeEach(inject(function(_$filter_){
        $filter= _$filter_;
    }));

    describe('When user opens search or details view', function() {
        it('Then prices given as cents from the backend will be shown as euros', function() {
              var price = $filter('convertPriceFromCents');
              expect(price(10050)).toEqual(100.50);
        });
    });
});