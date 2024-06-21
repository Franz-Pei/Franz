--Data Cleaning For All Tables

--Table Inventory
--check duplicate records
--No duplicate errors
SELECT
    barcode,
    COUNT(*)
FROM
    inventory
GROUP BY
    barcode
HAVING
    COUNT(*) > 1;

--checking constraints/relationship issues such as invalid FK values
--33 errors
SELECT
    *
FROM
    inventory
WHERE
    articlecode NOT IN (
        SELECT
            articlecode
        FROM
            article
    );
--resolve this issue (simplest approach):
DELETE FROM inventory
WHERE
    articlecode NOT IN (
        SELECT
            articlecode
        FROM
            article
    );
--inconsistent values
--Base price simply means minimum value price
--1 error in Currentbaseprice Column
SELECT
    *
FROM
    inventory
WHERE
    currentbaseprice > currentsaleprice;

--Imputing based on neighboring values: 51350
SELECT
    currentbaseprice
FROM
    inventory
WHERE
    currentsaleprice = (
        SELECT
            currentsaleprice
        FROM
            inventory
        WHERE
            currentbaseprice > currentsaleprice
    )
GROUP BY
    currentbaseprice;

UPDATE inventory
SET
    currentbaseprice = 51350
WHERE
    currentsaleprice = (
        SELECT
            currentsaleprice
        FROM
            inventory
        WHERE
            currentbaseprice > currentsaleprice
    );

--incorrect values
--4 errors in Status Column
SELECT
    *
FROM
    inventory
WHERE
    currentbaseprice < 0;

SELECT
    *
FROM
    inventory
WHERE
    currentsaleprice < 0;

SELECT
    *
FROM
    inventory
WHERE
    consignment < 0;

SELECT
    *
FROM
    inventory
WHERE
    consignmentrp < 0;

SELECT
    *
FROM
    inventory
WHERE
    qty < 0;

SELECT
    *
FROM
    inventory
WHERE
    status < 0;

SELECT
    *
FROM
    inventory
WHERE
    articlecode IS NULL;

SELECT
    *
FROM
    inventory
WHERE
    barcode IS NULL;

SELECT
    *
FROM
    inventory
WHERE
    sizes IS NULL;

SELECT
    *
FROM
    inventory
WHERE
    qty IS NULL;

SELECT
    *
FROM
    inventory
WHERE
    status IS NULL;
    
--Calculate Median of Status: 0
SELECT
    MEDIAN(status)
FROM
    inventory
WHERE
    status IS NOT NULL;

--Imputing Null of Status with median 0
UPDATE inventory
SET
    status = 0
WHERE
    status IS NULL;
    
    
--Table Cashierdetail
--check duplicate records
--No duplicate errors
SELECT
    notrans,
    barcode,
    COUNT(*)
FROM
    cashierdetail
GROUP BY
    notrans,
    barcode
HAVING
    COUNT(*) > 1;

--checking constraints/relationship issues
SELECT
    *
FROM
    cashierdetail
WHERE
    notrans NOT IN (
        SELECT
            notrans
        FROM
            cashier
    );

SELECT
    *
FROM
    cashierdetail
WHERE
    barcode NOT IN (
        SELECT
            barcode
        FROM
            inventory
    );

SELECT
    *
FROM
    cashierdetail
WHERE
    articlecode NOT IN (
        SELECT
            articlecode
        FROM
            inventory
    );

--inconsistent values: 7 Errors in Baseprice Column
SELECT
    *
FROM
    cashierdetail
WHERE
    baseprice > saleprice;

SELECT
    *
FROM
    cashierdetail
WHERE
    saleprice = 135000;

--Omitting rows
DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E070061')
    AND upper(barcode) = upper('00ARRB0115');

DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E070086')
    AND upper(barcode) = upper('00ARRB0116');

DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E190261')
    AND upper(barcode) = upper('00ARRJ0063');

DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E250137')
    AND upper(barcode) = upper('00ARRJ0063');

DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E250332')
    AND upper(barcode) = upper('00ARRJ0064');

DELETE FROM cashierdetail
WHERE
        upper(notrans) = upper('01SCS19E260050')
    AND upper(barcode) = upper('00ARRJ0064');

--incorrect values: 2 Errors and the 2nd one is same as the one in "inconsistent values"
SELECT
    *
FROM
    cashierdetail
WHERE
    payment IS NULL;

--Errors due to the misaligned columns
--Correct the data
UPDATE cashierdetail
SET
    subtotal = 220500,
    payment = 176400
WHERE
    payment IS NULL
    AND upper(notrans) = upper('01SCS19E010027');

UPDATE cashierdetail
SET
    sizes = 'M',
    qty = 1,
    baseprice = 204750,
    saleprice = 315000,
    discounttype = 2,
    discountpersen = 0,
    discountrupiah = 63000,
    discexpenses = 1,
    consignment = 0,
    consignmentrp = 63000,
    subtotal = 252000,
    payment = 189000
WHERE
    payment IS NULL
    AND upper(notrans) = upper('01SCS19E300663');
    
--Table Cashier
--check duplicate records
--No duplicate errors
SELECT
    notrans,
    COUNT(*)
FROM
    cashier
GROUP BY
    notrans
HAVING
    COUNT(*) > 1;

--incorrect values: No errors
SELECT
    *
FROM
    cashier
WHERE
    notrans IS NULL;

SELECT
    *
FROM
    cashier
WHERE
    datetrans IS NULL;
    
--Table Cashierpayment
--checking duplicate records
--No duplicate errors
SELECT
    id,
    COUNT(*)
FROM
    cashierpayment
GROUP BY
    id
HAVING
    COUNT(*) > 1;
    
    
--checking constraints/relationship issues
SELECT
    *
FROM
    cashierpayment
WHERE
    notrans NOT IN (
        SELECT
            notrans
        FROM
            cashier
    );

--incorrect values
SELECT
    *
FROM
    cashierpayment
WHERE
    id IS NULL;

SELECT
    *
FROM
    cashierpayment
WHERE
    notrans IS NULL;

SELECT
    *
FROM
    cashierpayment
WHERE
    paidtype IS NULL;

SELECT
    *
FROM
    cashierpayment
WHERE
    progressivedisc IS NULL;

--Imputing Null of Progressivedisc with mean: 0
SELECT
    AVG(progressivedisc)
FROM
    cashierpayment
WHERE
    progressivedisc IS NOT NULL;

UPDATE cashierpayment
SET
    progressivedisc = 0
WHERE
    progressivedisc IS NULL;
    
--Table Article
--check duplicate records
SELECT
    articlecode,
    COUNT(*)
FROM
    article
GROUP BY
    articlecode
HAVING
    COUNT(*) > 1;
    
--Duplicate naming: T-SHIRT & TSHIRT
--3 rows for TSHIRT
SELECT
    categoryname,
    COUNT(*)
FROM
    article
GROUP BY
    categoryname
HAVING
    COUNT(*) > 1;
    
--incorrect values
SELECT
    *
FROM
    article
WHERE
    articlecode IS NULL;

SELECT
    *
FROM
    article
WHERE
    articlename IS NULL;

SELECT
    *
FROM
    article
WHERE
    vendorkey IS NULL;

SELECT
    *
FROM
    article
WHERE
    vendorname IS NULL;

SELECT
    *
FROM
    article
WHERE
    typename IS NULL;