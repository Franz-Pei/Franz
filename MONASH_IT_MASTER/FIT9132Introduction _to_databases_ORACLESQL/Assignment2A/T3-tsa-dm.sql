--*****PLEASE ENTER YOUR DETAILS BELOW*****
--T3-tsa-dm.sql

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
--3(a)

DROP SEQUENCE booking_seq;

CREATE SEQUENCE booking_seq START WITH 100 INCREMENT BY 10;

--3(b)
INSERT INTO cabin (
    resort_id,
    cabin_no,
    cabin_nobedrooms,
    cabin_sleeping_capacity,
    cabin_bathroom_type,
    cabin_points_cost_day,
    cabin_description
) VALUES (
    (
        SELECT
            resort_id
        FROM
            resort
        WHERE
                resort_name = 'Awesome Resort'
            AND town_id = (
                SELECT
                    town_id
                FROM
                    town
                WHERE
                        town_lat = - 17.9644
                    AND town_long = 122.2304
            )
    ),
    4,
    4,
    10,
    'C',
    220,
    'New cabin in Awesome Resort, Broome'
);

SELECT
    *
FROM
    cabin;


--3(c)
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
    booking_seq.NEXTVAL,
    (
        SELECT
            resort_id
        FROM
            resort
        WHERE
                resort_name = 'Awesome Resort'
            AND town_id = (
                SELECT
                    town_id
                FROM
                    town
                WHERE
                        town_lat = - 17.9644
                    AND town_long = 122.2304
            )
    ),
    4,
    TO_DATE('26-May-2023', 'DD-Mon-YYYY'),
    TO_DATE('28-May-2023', 'DD-Mon-YYYY'),
    4,
    4,
    760,
    (
        SELECT
            member_id
        FROM
            member
        WHERE
                resort_id = 9
            AND member_no = 2
    ),
    (
        SELECT
            staff_id
        FROM
            staff
        WHERE
            staff_phone = '0493427245'
    )
);
--3(d?
UPDATE booking
SET
    booking_to = TO_DATE('29-may-2023', 'DD-MON-YYYY'),
    booking_total_points_cost = ( ( TO_DATE('29-may-2023', 'DD-MON-YYYY') - TO_DATE('26-may-2023'
    , 'DD-MON-YYYY') ) * 220 )
WHERE
        resort_id = (
            SELECT
                resort_id
            FROM
                resort
            WHERE
                    initcap(resort_name) = 'Awesome Resort'
                AND town_id = (
                    SELECT
                        town_id
                    FROM
                        town
                    WHERE
                            town_lat = - 17.9644
                        AND town_long = 122.2304
                )
        )
    AND cabin_no = 4
    AND booking_from = TO_DATE('26-May-2023', 'dd-mon-yyyy');

COMMIT;

--3(e)
DELETE FROM booking
WHERE
        resort_id = (
            SELECT
                resort_id
            FROM
                resort
            WHERE
                    initcap(resort_name) = 'Awesome Resort'
                AND town_id = (
                    SELECT
                        town_id
                    FROM
                        town
                    WHERE
                            town_lat = - 17.9644
                        AND town_long = 122.2304
                )
        )
    AND cabin_no = 4;

DELETE FROM cabin
WHERE
        resort_id = (
            SELECT
                resort_id
            FROM
                resort
            WHERE
                    initcap(resort_name) = 'Awesome Resort'
                AND town_id = (
                    SELECT
                        town_id
                    FROM
                        town
                    WHERE
                            town_lat = - 17.9644
                        AND town_long = 122.2304
                )
        )
    AND cabin_no = 4;

COMMIT;