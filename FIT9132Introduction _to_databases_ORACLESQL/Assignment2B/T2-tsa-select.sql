--*****PLEASE ENTER YOUR DETAILS BELOW*****
--T2-tsa-select.sql

--Student ID:33429472
--Student Name:ZiqiPei
--Unit Code:FIT9132
--Applied Class No:A12

/* Comments for your marker:




*/

/*2(a)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer

SELECT
    t.town_id,
    town_name,
    pt.poi_type_id,
    poi_type_descr,
    COUNT(poi_id) AS poi_count
FROM
         tsa.town t
    JOIN tsa.point_of_interest p
    ON t.town_id = p.town_id
    JOIN tsa.poi_type          pt
    ON pt.poi_type_id = p.poi_type_id
GROUP BY
    t.town_id,
    town_name,
    pt.poi_type_id,
    poi_type_descr
HAVING
    COUNT(poi_id) > 1
ORDER BY
    t.town_id,
    poi_type_descr;

/*2(b)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT
    o.member_id,
    TRIM(o.member_gname
         || '  '
         || o.member_fname) AS member_name,
    o.resort_id,
    r.resort_name,
    COUNT(n.member_id) AS number_of_recommendations
FROM
         tsa.member o
    JOIN tsa.member n
    ON o.member_id = n.member_id_recby
    JOIN resort     r
    ON r.resort_id = o.resort_id
GROUP BY
    o.member_id,
    o.member_gname,
    o.member_fname,
    o.resort_id,
    r.resort_name
HAVING
    COUNT(n.member_id) = (
        SELECT
            MAX(COUNT(member_id))
        FROM
            tsa.member
        WHERE
            member_id_recby IS NOT NULL
        GROUP BY
            member_id_recby
    )
ORDER BY
    o.resort_id,
    o.member_id;


/*2(c)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT
    p.poi_id,
    poi_name,
    nvl(to_char(MAX(review_rating)),
        'NR') AS max_rating,
    nvl(to_char(MIN(review_rating)),
        'NR') AS min_rating,
    nvl(to_char(AVG(review_rating)),
        'NR') AS avg_rating
FROM
         tsa.point_of_interest p
    JOIN tsa.review r
    ON p.poi_id = r.poi_id
GROUP BY
    p.poi_id,
    poi_name
ORDER BY
    p.poi_id;
/*2(d)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer
SELECT
    poi_name,
    poi_type_descr,
    town_name,
    lpad('Lat:'
         || to_char(town_lat, '990.999999')
         || 'Long:'
         || to_char(town_long, '990.999999'),
         35)         AS town_location,
    COUNT(review_id) AS reviews_completed,
    CASE
        WHEN COUNT(review_id) = 0 THEN
            'No review completed'
        ELSE
            TRIM(to_char(COUNT(review_id) * 100 /(
                SELECT
                    COUNT(review_id)
                FROM
                    tsa.review
            ),
                         '990.99')
                 || '%')
    END              AS percent_of_reviews
FROM
         tsa.town t
    JOIN tsa.point_of_interest p
    ON t.town_id = p.town_id
    JOIN tsa.poi_type          pt
    ON p.poi_type_id = pt.poi_type_id
    LEFT OUTER JOIN tsa.review            r
    ON p.poi_id = r.poi_id
GROUP BY
    p.poi_id,
    poi_name,
    poi_type_descr,
    town_name,
    town_lat,
    town_long
ORDER BY
    town_name,
    COUNT(review_id) DESC,
    poi_name;

/*2(e)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer

SELECT
    n.resort_id,
    resort_name,
    n.member_no,
    TRIM(n.member_gname
         || ' '
         || n.member_fname)                             AS member_name,
    to_char(n.member_date_joined, 'dd-month-yyyy') AS date_joined,
    o.member_no
    || ' '
    || TRIM(o.member_gname
            || ' '
            || o.member_fname)                             AS recommended_by_details,
    lpad('$' || SUM(mc_total),
         13)                                       AS total_charges
FROM
         tsa.member o
    JOIN tsa.member        n
    ON o.member_id = n.member_id_recby
    JOIN tsa.resort        r
    ON n.resort_id = r.resort_id
    JOIN tsa.town          t
    ON t.town_id = r.town_id
    JOIN tsa.member_charge c
    ON n.member_id = c.member_id
WHERE
    NOT ( upper(t.town_name) = 'BYRON BAY'
          AND upper(t.town_state) = 'NSW' )
GROUP BY
    n.resort_id,
    resort_name,
    n.member_no,
    n.member_gname,
    n.member_fname,
    n.member_date_joined,
    o.member_no,
    o.member_gname,
    o.member_fname
HAVING
    round(SUM(mc_total)) < (
        SELECT
            AVG(SUM(mc_total))
        FROM
            tsa.member_charge c
        WHERE
            member_id IN (
                SELECT
                    member_id
                FROM
                    tsa.member m
                WHERE
                    resort_id = n.resort_id
            )
        GROUP BY
            member_id
    )
ORDER BY
    n.resort_id,
    n.member_no;


/*2(f)*/
-- PLEASE PLACE REQUIRED SQL STATEMENT FOR THIS PART HERE
-- ENSURE that your query is formatted and has a semicolon
-- (;) at the end of this answer

SELECT
    resort_id,
    resort_name,
    poi_name,
    pt.town_name          AS poi_town,
    pt.town_state         AS poi_state,
    nvl(to_char(p.poi_open_time, 'hh:mi AM'),
        'Not Applicable') AS poi_opening_time,
    to_char((
        SELECT
            geodistance(pt.town_lat, pt.town_long, rt.town_lat, rt.town_long)
        FROM
            dual
    ),
            '990.0')
    || 'KMS'              AS distance
FROM
         tsa.point_of_interest p
    JOIN tsa.town   pt
    ON p.town_id = pt.town_id
    JOIN tsa.town   rt
    ON (
        SELECT
            geodistance(pt.town_lat, pt.town_long, rt.town_lat, rt.town_long)
        FROM
            dual
    ) <= 100
    JOIN tsa.resort r
    ON rt.town_id = r.town_id
ORDER BY
    r.resort_name,
    distance ASC;