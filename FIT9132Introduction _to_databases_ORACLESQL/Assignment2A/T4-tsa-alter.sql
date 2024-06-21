--*****PLEASE ENTER YOUR DETAILS BELOW*****
--T4-tsa-alter.sql

--Student ID:33429472
--Student Name:Ziqi Pei
--Unit Code:FIT9132
--Applied Class No:A12

/* Comments for your marker:




*/
--4(a)
ALTER TABLE cabin ADD total_bookings NUMBER(4) DEFAULT 0;

UPDATE cabin
SET
    total_bookings = (
        SELECT
            COUNT(*)
        FROM
            booking
        WHERE
                cabin.resort_id = booking.resort_id
            AND cabin.cabin_no = booking.cabin_no
    );
-- Show data changes
SELECT
    *
FROM
    cabin;

-- Show table structure changes
DESC cabin;

--4(b)
DROP TABLE role CASCADE CONSTRAINTS PURGE;

CREATE TABLE role (
    role_id   CHAR(1) NOT NULL,
    role_name VARCHAR2(30) NOT NULL,
    role_desc VARCHAR2(100) NOT NULL
);

COMMENT ON COLUMN role.role_id IS
    'Identifier for staff roles';

COMMENT ON COLUMN role.role_name IS
    'Name for staff roles';

COMMENT ON COLUMN role.role_desc IS
    'Job description for staff roles';

INSERT INTO role VALUES (
    'A',
    'Admin',
    'Take bookings and reply to customer inquiries'
);

INSERT INTO role VALUES (
    'C',
    'Cleaning',
    'Clean cabins and maintain resort''s public area'
);

INSERT INTO role VALUES (
    'M',
    'Marketing',
    'Prepare and present marketing ideas and deliverables'
);

ALTER TABLE staff ADD role_id CHAR(1);

UPDATE staff
SET
    role_id = 'A';
-- Show the changes in the role table
DESC role;

SELECT
    *
FROM
    role;

-- Show the changes in the staff table
DESC staff;

SELECT
    staff_id,
    role_id
FROM
    staff;

--4(c)
-- Drop existing tables
DROP TABLE cleaning CASCADE CONSTRAINTS;

DROP TABLE staff_cleaning CASCADE CONSTRAINTS;

-- Create the cleaning table
CREATE TABLE cleaning (
    cleaning_no   NUMBER(8) NOT NULL,
    resort_id     NUMBER(4) NOT NULL,
    cabin_no      NUMBER(3) NOT NULL,
    cleaning_date DATE NOT NULL,
    CONSTRAINT cleaning_pk PRIMARY KEY ( cleaning_no ),
    CONSTRAINT cleaning_cabin_fk FOREIGN KEY ( resort_id,
                                               cabin_no )
        REFERENCES cabin ( resort_id,
                           cabin_no )
);

-- Add comments for cleaning table columns
COMMENT ON COLUMN cleaning.cleaning_no IS
    'Surrogate key added to replace CLEANING composite PK';

COMMENT ON COLUMN cleaning.resort_id IS
    'Resort identifier for this cleaning';

COMMENT ON COLUMN cleaning.cabin_no IS
    'Cabin number within the resort for this cleaning';

COMMENT ON COLUMN cleaning.cleaning_date IS
    'Cleaning Date';

-- Create the staff_cleaning table
CREATE TABLE staff_cleaning (
    staff_id       NUMBER(5) NOT NULL,
    cleaning_no    NUMBER(8) NOT NULL,
    cleaning_start DATE,
    cleaning_end   DATE,
    CONSTRAINT sc_staff_fk FOREIGN KEY ( staff_id )
        REFERENCES staff ( staff_id ),
    CONSTRAINT sc_cleaning_fk FOREIGN KEY ( cleaning_no )
        REFERENCES cleaning ( cleaning_no )
);

-- Add comments for staff_cleaning table columns
COMMENT ON COLUMN staff_cleaning.staff_id IS
    'Staff identifier for this assignment';

COMMENT ON COLUMN staff_cleaning.cleaning_no IS
    'Cleaning identifier for this assignment';

COMMENT ON COLUMN staff_cleaning.cleaning_start IS
    'Cleaning start time';

COMMENT ON COLUMN staff_cleaning.cleaning_end IS
    'Cleaning end time';

-- Describe the cleaning table
desc cleaning;

-- Describe the staff_cleaning table
desc staff_cleaning;
