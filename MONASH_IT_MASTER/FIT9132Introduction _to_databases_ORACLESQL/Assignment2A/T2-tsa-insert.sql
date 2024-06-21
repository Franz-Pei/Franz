/*****PLEASE ENTER YOUR DETAILS BELOW*****/
--T2-tsa-insert.sql

--Student ID:33429472
--Student Name:Ziqi Pei
--Unit Code:FIT9132
--Applied Class No:A12

/* Comments for your marker:




*/

---**This command shows the outputs of triggers**---
---**Run the command before running the insert statements.**---
---**Do not remove**---
SET SERVEROUTPUT ON
---**end**---

--------------------------------------
--INSERT INTO cabin
--------------------------------------
-- Insert 20 CABIN entries --
-- Assume primary key values for cabins below 100
-- Choose dates between 1st March 2023 and 30th April 2023
-- Inserting sample data into CABIN table


SELECT
    *
FROM
    cabin;

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    1,
    1,
    1,
    2,
    'I',
    150,
    'Cozy cabin with a beautiful garden view'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    1,
    2,
    2,
    4,
    'C',
    100,
    'Spacious cabin near the tranquil lake'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    2,
    1,
    4,
    8,
    'I',
    100,
    'Rustic cabin nestled in the serene woods'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    2,
    2,
    3,
    6,
    'C',
    200,
    'Luxurious cabin with a private pool and scenic surroundings'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    3,
    1,
    2,
    4,
    'I',
    150,
    'Modern cabin with breathtaking mountain views'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    3,
    2,
    1,
    1,
    'C',
    250,
    'Cozy cabin perfect for a solo retreat'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    4,
    1,
    2,
    4,
    'I',
    100,
    'Charming cabin surrounded by nature'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    4,
    2,
    3,
    3,
    'C',
    100,
    'Elegant cabin with modern amenities'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    5,
    1,
    4,
    4,
    'C',
    150,
    'Spacious cabin with a cozy fireplace'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    5,
    2,
    3,
    4,
    'I',
    250,
    'Stylish cabin with panoramic mountain views'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    6,
    1,
    2,
    4,
    'C',
    100,
    'Quaint cabin near the picturesque river'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    6,
    2,
    1,
    2,
    'I',
    200,
    'Private cabin with stunning sunset views'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    7,
    1,
    3,
    6,
    'C',
    150,
    'Charming cabin with a cozy fireplace'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    7,
    2,
    2,
    4,
    'I',
    250,
    'Rustic cabin with a balcony overlooking the forest'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    8,
    1,
    1,
    2,
    'C',
    100,
    'Romantic cabin with a private hot tub'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    8,
    2,
    3,
    6,
    'I',
    200,
    'Secluded cabin surrounded by wildlife'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    9,
    1,
    4,
    8,
    'C',
    150,
    'Spacious cabin with stunning lake views'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    9,
    2,
    2,
    4,
    'I',
    250,
    'Modern cabin with a fully equipped kitchen'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    10,
    1,
    1,
    1,
    'C',
    100,
    'Cozy cabin with a charming fireplace'
);

INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    10,
    2,
    3,
    6,
    'I',
    200,
    'Scenic cabin nestled in the mountains'
);

COMMIT;


--------------------------------------
--INSERT INTO booking
--------------------------------------
-- Insert 20 BOOKING entries --
-- Assume primary key values for bookings below 100
-- Choose dates between 1st March 2023 and 30th April 2023
DELETE FROM booking;

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    1,
    1,
    1,
    TO_DATE('01-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('03-Mar-2023', 'DD-Mon-YYYY'),
    2,
    2,
    500,
    1,
    1
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    2,
    1,
    2,
    TO_DATE('05-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('10-Mar-2023', 'DD-Mon-YYYY'),
    2,
    0,
    500,
    2,
    3
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    3,
    2,
    1,
    TO_DATE('15-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('20-Mar-2023', 'DD-Mon-YYYY'),
    4,
    2,
    600,
    3,
    5
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    4,
    2,
    2,
    TO_DATE('25-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('26-Mar-2023', 'DD-Mon-YYYY'),
    3,
    1,
    400,
    4,
    8
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    5,
    3,
    1,
    TO_DATE('05-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('10-Apr-2023', 'DD-Mon-YYYY'),
    2,
    0,
    750,
    5,
    10
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    6,
    3,
    2,
    TO_DATE('15-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('17-Apr-2023', 'DD-Mon-YYYY'),
    1,
    1,
    400,
    6,
    11
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    7,
    4,
    1,
    TO_DATE('01-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('05-Mar-2023', 'DD-Mon-YYYY'),
    2,
    0,
    400,
    7,
    13
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    8,
    4,
    2,
    TO_DATE('10-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('15-Mar-2023', 'DD-Mon-YYYY'),
    3,
    2,
    400,
    8,
    15
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    9,
    5,
    1,
    TO_DATE('20-Mar-2023', 'DD-Mon-YYYY'),
    TO_DATE('25-Mar-2023', 'DD-Mon-YYYY'),
    4,
    1,
    600,
    9,
    17
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    10,
    5,
    2,
    TO_DATE('05-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('07-Apr-2023', 'DD-Mon-YYYY'),
    2,
    0,
    500,
    10,
    18
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    11,
    1,
    1,
    TO_DATE('03-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('07-Apr-2023', 'DD-Mon-YYYY'),
    3,
    1,
    600,
    2,
    1
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    12,
    1,
    2,
    TO_DATE('05-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('06-Apr-2023', 'DD-Mon-YYYY'),
    2,
    0,
    250,
    2,
    1
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    13,
    4,
    1,
    TO_DATE('10-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('15-Apr-2023', 'DD-Mon-YYYY'),
    2,
    1,
    600,
    4,
    2
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    14,
    4,
    2,
    TO_DATE('12-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('12-Apr-2023', 'DD-Mon-YYYY'),
    2,
    2,
    0,
    4,
    2
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    15,
    5,
    1,
    TO_DATE('15-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('20-Apr-2023', 'DD-Mon-YYYY'),
    4,
    0,
    1000,
    5,
    3
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    16,
    5,
    2,
    TO_DATE('18-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('20-Apr-2023', 'DD-Mon-YYYY'),
    2,
    1,
    500,
    6,
    3
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    17,
    8,
    1,
    TO_DATE('22-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('23-Apr-2023', 'DD-Mon-YYYY'),
    3,
    2,
    100,
    7,
    4
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    18,
    8,
    2,
    TO_DATE('25-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('26-Apr-2023', 'DD-Mon-YYYY'),
    2,
    0,
    200,
    8,
    4
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    19,
    10,
    1,
    TO_DATE('27-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('30-Apr-2023', 'DD-Mon-YYYY'),
    2,
    1,
    400,
    9,
    5
);

INSERT INTO booking (
    booking_id,
    resort_id,
    cabin_no,
    booking_from,
    booking_to,
    booking_noadults,
    booking_nochildren,
    booking_total_points_cost,
    member_id,
    staff_id
) VALUES (
    20,
    10,
    2,
    TO_DATE('28-Apr-2023', 'DD-Mon-YYYY'),
    TO_DATE('30-Apr-2023', 'DD-Mon-YYYY'),
    1,
    0,
    300,
    10,
    5
);

COMMIT;





