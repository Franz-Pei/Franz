--Task 5: Create a DDL script that generates the required table structures based on the defined data dictionary

/*
drop table article;
drop table inventory;
drop table cashier;
drop table cashierdetails;
drop table cashierpayment;
*/

--create table article
CREATE TABLE article (
    articlecode  VARCHAR(26) PRIMARY KEY,
    articlename  VARCHAR(128) NOT NULL,
    vendorkey    VARCHAR(26) NOT NULL,
    vendorname   VARCHAR(26) NOT NULL,
    categoryinit NUMBER(38, 0),
    categoryname VARCHAR(26),
    typeinit     NUMBER(38, 0),
    typename     VARCHAR(26) NOT NULL,
    startdate    DATE,
    expiredate   DATE,
    colourinit   NUMBER(38, 0),
    colourname   VARCHAR(26),
    sex          CHAR(1),
    picture      VARCHAR(26),
    baseprice    FLOAT,
    saleprice    FLOAT,
    notes        VARCHAR(128)
);

--create table inventory;
CREATE TABLE inventory (
    barcode          VARCHAR(26) PRIMARY KEY,
    articlecode      VARCHAR(26) NOT NULL,
    sizes            VARCHAR(26) NOT NULL,
    currentbaseprice NUMBER(38, 0),
    currentsaleprice NUMBER(38, 0),
    consignment      NUMBER(38, 0),
    consignmentrp    NUMBER(38, 0),
    qty              INT NOT NULL,
    status           INT NOT NULL,
    FOREIGN KEY ( articlecode )
        REFERENCES article ( articlecode )
);

--create table cashier;
CREATE TABLE cashier (
    notrans        VARCHAR(26) PRIMARY KEY,
    datetrans      TIMESTAMP NOT NULL,
    typetrans      VARCHAR(26),
    notes          VARCHAR(26),
    userid         VARCHAR(26),
    referencetrans VARCHAR(26)
);

--create table cashierdetails;
CREATE TABLE cashierdetail (
    notrans        VARCHAR(26) PRIMARY KEY,
    articlecode    VARCHAR(26) NOT NULL,
    barcode        VARCHAR(26) PRIMARY KEY,
    sizes          VARCHAR(26) NOT NULL,
    qty            INT NOT NULL,
    baseprice      FLOAT,
    saleprice      FLOAT,
    discounttype   INT,
    discountpersen NUMBER(5, 2),
    discountrupiah FLOAT,
    discexpenses   NUMBER(1),
    consignment    NUMBER(38, 0),
    consignmentrp  NUMBER(38, 0),
    subtotal       NUMBER(38, 0),
    payment        NUMBER(38, 0),
    FOREIGN KEY ( notrans )
        REFERENCES cashier ( notrans ),
    FOREIGN KEY ( barcode )
        REFERENCES inventory ( barcode ),
    FOREIGN KEY ( articlecode )
        REFERENCES inventory ( articlecode )
);

--create table cashierpayment;
CREATE TABLE cashierpayment (
    id              NUMBER(38, 0) PRIMARY KEY,
    notrans         VARCHAR(26) NOT NULL,
    paidtype        VARCHAR(26) NOT NULL,
    cardinit        VARCHAR(26),
    cardname        VARCHAR(26),
    cardnumber      NUMBER(38, 0),
    totalpaid       NUMBER(38, 0),
    machinename     VARCHAR(26),
    companycharge   NUMBER(38, 0),
    customercharge  NUMBER(38, 0),
    reffno          VARCHAR(26),
    progressivedisc NUMBER(38, 0) NOT NULL,
    FOREIGN KEY ( notrans )
        REFERENCES cashier ( notrans )
);