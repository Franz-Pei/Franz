Create schema a5;

select * from a5.zpei0003;

--3.1
WITH temp_speed AS 
(
    SELECT
        ST_Distance(t1.wkb_geometry::geography, t2.wkb_geometry::geography) AS distance,
        EXTRACT(EPOCH FROM (t2.time - t1.time)) AS time_in_sec
    FROM a5.zpei0003 t1
    JOIN a5.zpei0003 t2 ON t1.ogc_fid + 1 = t2.ogc_fid
)
SELECT
    SUM(distance) / SUM(time_in_sec) AS avg_speed
FROM temp_speed;

--3.2

WITH temp_instantaneous AS 
(
    -- Calculate the distance and time difference between consecutive points
    SELECT
        t1.wkb_geometry,
        t1.time,
        ST_Distance(t1.wkb_geometry::geography, t2.wkb_geometry::geography) AS distance,
        EXTRACT(EPOCH FROM (t2.time - t1.time)) AS time_in_sec
    FROM a5.zpei0003 t1
    JOIN a5.zpei0003 t2 ON t1.ogc_fid + 1 = t2.ogc_fid
)
-- Calculate instantaneous speed (distance divided by time) for each point
SELECT
    distance / time_in_sec AS instantaneous_speed,
    wkb_geometry,
    time
FROM temp_instantaneous;

