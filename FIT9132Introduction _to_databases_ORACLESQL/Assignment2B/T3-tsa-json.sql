--*****PLEASE ENTER YOUR DETAILS BELOW*****
--T3-tsa-json.sql

--Student ID:33429472
--Student Name:Ziqi Pei
--Unit Code:FIT9132
--Applied Class No:A12

/* Comments for your marker:




*/

/*3(a)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT TO GENERATE 
-- THE COLLECTION OF JSON DOCUMENTS HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT
    JSON_OBJECT(
        '_id' VALUE t.town_id,
        'name' VALUE town_name || ', ' || town_state,
        'location' VALUE JSON_OBJECT(
            'latitude' VALUE town_lat,
            'longitude' VALUE town_long
        ),
        'avg_temperature' VALUE JSON_OBJECT(
            'summer' VALUE town_avg_summer_temp,
            'winter' VALUE town_avg_winter_temp
        ),
        'no_of_resorts' VALUE COUNT(resort_id),
        'resorts' VALUE JSON_ARRAYAGG(
            JSON_OBJECT(
                'id' VALUE r.resort_id,
                'name' VALUE r.resort_name,
                'address' VALUE r.resort_street_address,
                'phone' VALUE r.resort_phone,
                'year_built' VALUE TO_CHAR(r.resort_yr_built_purch, 'YYYY'),
                'company_name' VALUE c.company_name
            )
        )
    ) AS json_doc
FROM
    tsa.town t
    LEFT OUTER JOIN tsa.resort r ON t.town_id = r.town_id
    JOIN tsa.company c ON r.company_abn = c.company_abn
GROUP BY
    t.town_id,
    town_name,
    town_state,
    town_lat,
    town_long,
    town_avg_summer_temp,
    town_avg_winter_temp;
