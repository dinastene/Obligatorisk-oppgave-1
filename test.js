
  QUnit.module('isDateValid', function() {
    QUnit.test('should return true, for a valid date', function(assert) {
        const isValid = isDateValid('03.02.2020');
        assert.true(isValid, '03.02.2020 was wrongfully rejected');
    });
    
    QUnit.test('should return false, when date is not 10 char', function(assert) {
        assert.false(isDateValid('03022020'), '03022020 was wrongfully accepted');
        assert.false(isDateValid('03022020221'), '03022020221 was wrongfully accepted');
    });

    QUnit.test('should return false, when punctuation mark is in the wrong place', function(assert) {
        const isValid = isDateValid('0.2032.020');
        assert.false(isValid, '0.2032.020 was wrongfully accepted');
    });

    QUnit.test('should return false, when year is not 4 char', function(assert) {
        assert.false(isDateValid('3.02.20222'), '3.02.20222 was wrongfully accepted');
        assert.false(isDateValid('003.02.202'), '003.02.202 was wrongfully accepted');
    });

    QUnit.test('should return false, when month is not 2 char', function(assert) {
        assert.false(isDateValid('3.002.2020'), '3.002.2020 was wrongfully accepted');
        assert.false(isDateValid('003.2.2020'), '003.2.2020 was wrongfully accepted');
    });

    QUnit.test('should return false, when month is not 1-12', function(assert) {
        assert.false(isDateValid('03.00.2020'), '03.00.2020 was wrongfully accepted');
        assert.false(isDateValid('03.13.2020'), '03.13.2020 was wrongfully accepted');
    });

    QUnit.test('should return false, when day is more than 31', function(assert) {
        const isValid = isDateValid('35.02.2020');
        assert.false(isValid, '35.02.2020 was wrongfully accepted');
    });

    QUnit.test('should return false, when day is 31 in a month with less than 31 days', function(assert) {
        const isValid = isDateValid('31.04.2020');
        assert.false(isValid, '31.04.2020 was wrongfully accepted');
    });

    QUnit.test('should return false, when day is 30 in February', function(assert) {
        const isValid = isDateValid('30.02.2020');
        assert.false(isValid, '30.02.2020 was wrongfully accepted');
    });

    QUnit.test('should return false, when day is 29 and month is February when its not a leap year', function(assert) {
        const isValid = isDateValid('29.02.2021');
        assert.false(isValid, '29.02.2021 was wrongfully accepted');
    });

    QUnit.test('should return true, when day is 29 and month is February when it is a leap year', function(assert) {
        const isValid = isDateValid('29.02.2020');
        assert.true(isValid, '29.02.2020 was wrongfully rejected');
    });
  });