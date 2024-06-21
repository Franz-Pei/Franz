/*
drop table article;
drop table cashier;
drop table cashier_detail;
drop table cashier_payment;
drop table inventory;
*/



-- Task 7
-- count for cashier_rows
SELECT
    COUNT(*) AS cashier_rows
FROM
    cashier;
    
-- count for cashier_detail rows
SELECT
    COUNT(*) AS cashier_detail_rows
FROM
    cashierdetail;

-- count for cashier_payment rows
SELECT
    COUNT(*) AS cashier_payment_rows
FROM
    cashierpayment;

-- count for inventory rows
SELECT
    COUNT(*) AS inventory_rows
FROM
    inventory;

-- count for article rows
SELECT
    COUNT(*) AS article_rows
FROM
    article;




-- Task 8
-- Check the type of paidtype percentage
SELECT
    paidtype,
    COUNT(paidtype) AS no_payments,
    COUNT(*) * 100.0 / SUM(COUNT(*))
                       OVER()          AS percentage_of_payment
FROM
    cashierpayment
GROUP BY
    paidtype;

-- Temp table consisting baseprice, salesprice, size, number of amount for each sizes
DROP TABLE temp;

CREATE TABLE temp
    AS
        SELECT
            sizes,
            COUNT(sizes)                        AS no_sizes,
            SUM(baseprice)                      AS baseprice,
            SUM(saleprice)                      AS saleprice,
            AVG(baseprice)                      AS average_base,
            MEDIAN(baseprice)                   AS median_base,
            STDDEV(baseprice)                   AS sd_base,
            ( MAX(baseprice) - MIN(baseprice) ) AS range
        FROM
            cashierdetail
        GROUP BY
            sizes;

SELECT
    *
FROM
    temp;

-- slope for quantity versus saleprice
/*
SELECT
    SUM((saleprice - x_bar) *(qty - y_bar)) / SUM((saleprice - x_bar) *(saleprice - x_bar
    )) AS slope
FROM
    (
        SELECT
            saleprice,
            AVG(saleprice)
            OVER() AS x_bar,
            qty,
            AVG(qty)
            OVER() AS y_bar
        FROM
            cashierdetail
    ) p;
*/

-- check the intercept and slope for saleprice versus quantity
SELECT
    slope                         AS saleprice_quantity_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((qty - x_bar) *(saleprice - y_bar)) / SUM((qty - x_bar) *(qty - x_bar
            )) AS slope,
            MAX(x_bar)                                                                  AS
            x_bar_max,
            MAX(y_bar)                                                                  AS
            y_bar_max
        FROM
            (
                SELECT
                    qty,
                    AVG(qty)
                    OVER() AS x_bar,
                    saleprice,
                    AVG(saleprice)
                    OVER() AS y_bar
                FROM
                    cashierdetail
            ) p
    );

-- check the intercept and slope for baseprice versus saleprice
SELECT
    slope                         AS baseprice_saleprice_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((baseprice - x_bar) *(saleprice - y_bar)) / SUM((baseprice - x_bar) *(
            baseprice - x_bar)) AS slope,
            MAX(x_bar)                                                                                AS
            x_bar_max,
            MAX(y_bar)                                                                                AS
            y_bar_max
        FROM
            (
                SELECT
                    baseprice,
                    AVG(baseprice)
                    OVER() AS x_bar,
                    saleprice,
                    AVG(saleprice)
                    OVER() AS y_bar
                FROM
                    cashierdetail
            ) p
    );

-- Current base versus current sale
SELECT
    slope                         AS currentbaseprice_currentsaleprice_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((currentbaseprice - x_bar) *(currentsaleprice - y_bar)) / SUM((currentbaseprice - x_bar
            ) *(currentbaseprice - x_bar)) AS slope,
            MAX(x_bar)                                                                                AS
            x_bar_max,
            MAX(y_bar)                                                                                AS
            y_bar_max
        FROM
            (
                SELECT
                    currentbaseprice,
                    currentsaleprice,
                    AVG(currentbaseprice)
                    OVER() AS x_bar,
                    AVG(currentsaleprice)
                    OVER() AS y_bar
                FROM
                    inventory
            ) q
    );

-- sum, average, median, standard deviation, range of base price and sale price inside cashier detail
SELECT
    SUM(baseprice)                  AS basepricesum,
    SUM(saleprice)                  AS salepricesum,
    AVG(baseprice)                  AS avgbaseprice,
    AVG(saleprice)                  AS avgsaleprice,
    MEDIAN(baseprice)               AS medianbaseprice,
    MEDIAN(saleprice)               AS mediansaleprice,
    STDDEV(baseprice)               AS sdbaseprice,
    STDDEV(saleprice)               AS sdsaleprice,
    MAX(baseprice) - MIN(baseprice) AS rangebase,
    MAX(saleprice) - MIN(saleprice) AS rangesale
FROM
    cashierdetail;

-- sum, average, median, standard deviation, range of current 
-- base price and current sale price inside inventory
SELECT
    SUM(currentbaseprice)                         AS basepricesum,
    SUM(currentsaleprice)                         AS salepricesum,
    AVG(currentbaseprice)                         AS avgbaseprice,
    AVG(currentsaleprice)                         AS avgsaleprice,
    MEDIAN(currentbaseprice)                      AS medianbaseprice,
    MEDIAN(currentsaleprice)                      AS mediansaleprice,
    STDDEV(currentbaseprice)                      AS sdbaseprice,
    STDDEV(currentsaleprice)                      AS sdsaleprice,
    MAX(currentbaseprice) - MIN(currentbaseprice) AS rangebase,
    MAX(currentsaleprice) - MIN(currentsaleprice) AS rangesale
FROM
    inventory;

-- check the slope and intercept for subtotal versus other charges
SELECT
    slope                         subtotal_othercharges_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((subtotal - x_bar) *(other_fees - y_bar)) / SUM((subtotal - x_bar) *(
            subtotal - x_bar)) AS slope,
            MAX(x_bar)                                                                                AS
            x_bar_max,
            MAX(y_bar)                                                                                AS
            y_bar_max
        FROM
            (
                SELECT
                    subtotal,
                    AVG(subtotal)
                    OVER()                 AS x_bar,
                    ( payment - subtotal ) AS other_fees,
                    AVG((payment - subtotal))
                    OVER()                 AS y_bar
                FROM
                    cashierdetail
            ) p
    );

-- check the intercept and slope for saleprice versus consignment retail price
SELECT
    slope                         saleprice_consignmentrp_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((saleprice - x_bar) *(consignmentrp - y_bar)) / SUM((saleprice - x_bar
            ) *(saleprice - x_bar)) AS slope,
            MAX(x_bar)                                                                                AS
            x_bar_max,
            MAX(y_bar)                                                                                AS
            y_bar_max
        FROM
            (
                SELECT
                    saleprice,
                    AVG(saleprice)
                    OVER() AS x_bar,
                    consignmentrp,
                    AVG(consignmentrp)
                    OVER() AS y_bar
                FROM
                    cashierdetail
            ) p
    );
    
-- currentprice versus consignmentRP in inventory table
SELECT
    slope                         AS consignmentrp_currentprice_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((currentsaleprice - x_bar) *(consignmentrp - y_bar)) / SUM((currentsaleprice - x_bar
            ) *(currentsaleprice - x_bar)) AS slope,
            MAX(x_bar)                                                                                AS
            x_bar_max,
            MAX(y_bar)                                                                                AS
            y_bar_max
        FROM
            (
                SELECT
                    currentsaleprice,
                    consignmentrp,
                    AVG(currentsaleprice)
                    OVER() AS x_bar,
                    AVG(consignmentrp)
                    OVER() AS y_bar
                FROM
                    inventory
            ) sa
    );

-- average, median, standard deviation and range for sale price and consignment price
SELECT
    AVG(saleprice)                          AS avgsaleprice,
    AVG(consignmentrp)                      AS consignment_average,
    MEDIAN(saleprice)                       AS mediansaleprice,
    MEDIAN(consignmentrp)                   AS consignment_median,
    STDDEV(saleprice)                       AS sdsaleprice,
    STDDEV(consignmentrp)                   AS consignment_sd,
    MAX(saleprice) - MIN(saleprice)         AS rangesale,
    MAX(consignmentrp) - MIN(consignmentrp) AS range_consignment
FROM
    cashierdetail;

-- average, median, standard deviation and range for current sale price and current consignment price
SELECT
    AVG(currentsaleprice)                         AS avgsaleprice_c,
    AVG(consignmentrp)                            AS consignment_average_c,
    MEDIAN(currentsaleprice)                      AS mediansaleprice_c,
    MEDIAN(consignmentrp)                         AS consignment_median_c,
    STDDEV(currentsaleprice)                      AS sdsaleprice_c,
    STDDEV(consignmentrp)                         AS consignment_sd_c,
    MAX(currentsaleprice) - MIN(currentsaleprice) AS rangesale_c,
    MAX(consignmentrp) - MIN(consignmentrp)       AS range_consignment_c
FROM
    inventory;

-- colorinit on baseprice intercept and slope figure
SELECT
    slope                         AS colorinit_baseprice_slope,
    y_bar_max - x_bar_max * slope AS intercept
FROM
    (
        SELECT
            SUM((x - x_bar) *(y - y_bar)) / SUM((x - x_bar) *(x - x_bar)) AS slope,
            MAX(x_bar)                                                    AS x_bar_max
            ,
            MAX(y_bar)                                                    AS y_bar_max
        FROM
            (
                SELECT
                    baseprice  AS x,
                    colourinit AS y,
                    AVG(baseprice)
                    OVER()     AS x_bar,
                    AVG(colourinit)
                    OVER()     AS y_bar
                FROM
                    article
            ) sa
    );

-- table showing color init, amount of that, average of base price, average of 
-- sale price, median for both, standard deviation for both and range for both
SELECT
    colourinit,
    COUNT(baseprice)                AS number_base,
    AVG(baseprice)                  AS average_base,
    AVG(saleprice)                  AS average_sale,
    MEDIAN(baseprice)               AS median_base,
    MEDIAN(saleprice)               AS median_sale,
    STDDEV(baseprice)               AS sd_base,
    STDDEV(saleprice)               AS sd_sale,
    MAX(baseprice) - MIN(baseprice) AS range_base,
    MAX(saleprice) - MIN(saleprice) AS range_sale
FROM
    article
GROUP BY
    colourinit;

-- category on various factors
SELECT
    categoryname,
    COUNT(baseprice)                AS number_base,
    AVG(baseprice)                  AS average_base,
    AVG(saleprice)                  AS average_sale,
    MEDIAN(baseprice)               AS median_base,
    MEDIAN(saleprice)               AS median_sale,
    STDDEV(baseprice)               AS sd_base,
    STDDEV(saleprice)               AS sd_sale,
    MAX(baseprice) - MIN(baseprice) AS range_base,
    MAX(saleprice) - MIN(saleprice) AS range_sale
FROM
    article
GROUP BY
    categoryname;

-- type on various factors
SELECT
    typename,
    COUNT(baseprice)                AS number_base,
    AVG(baseprice)                  AS average_base,
    AVG(saleprice)                  AS average_sale,
    MEDIAN(baseprice)               AS median_base,
    MEDIAN(saleprice)               AS median_sale,
    STDDEV(baseprice)               AS sd_base,
    STDDEV(saleprice)               AS sd_sale,
    MAX(baseprice) - MIN(baseprice) AS range_base,
    MAX(saleprice) - MIN(saleprice) AS range_sale
FROM
    article
GROUP BY
    typename;

-- gender offered on various factors
SELECT
    sex,
    COUNT(baseprice)                AS number_base,
    AVG(baseprice)                  AS average_base,
    AVG(saleprice)                  AS average_sale,
    MEDIAN(baseprice)               AS median_base,
    MEDIAN(saleprice)               AS median_sale,
    STDDEV(baseprice)               AS sd_base,
    STDDEV(saleprice)               AS sd_sale,
    MAX(baseprice) - MIN(baseprice) AS range_base,
    MAX(saleprice) - MIN(saleprice) AS range_sale
FROM
    article
GROUP BY
    sex;

-- temp 2 table, which is a table used to identify the date transaction,
-- transaction count, total payment, average payment,
-- standard deviation of payment from table cashier and cashier payment
DROP TABLE temp2;

CREATE TABLE temp2
    AS
        SELECT
            datetrans,
            transaction_count,
            total_payment,
            average_payment,
            payment_stddev
        FROM
            (
                SELECT
                    datetrans,
                    COUNT(notrans)    AS transaction_count,
                    SUM(totalpaid)    AS total_payment,
                    AVG(totalpaid)    AS average_payment,
                    STDDEV(totalpaid) AS payment_stddev
                FROM
                    (
                        SELECT
                            c.notrans,
                            cp.totalpaid,
                            to_char(TO_TIMESTAMP(c.datetrans, 'YYYY-MM-DD HH24:MI:SS.FF'
                            ),
                                    'YYYY-MM-DD') AS datetrans
                        FROM
                                 cashier c
                            JOIN cashierpayment cp ON c.notrans = cp.notrans
                    )
                GROUP BY
                    datetrans
            );

SELECT
    *
FROM
    temp2;