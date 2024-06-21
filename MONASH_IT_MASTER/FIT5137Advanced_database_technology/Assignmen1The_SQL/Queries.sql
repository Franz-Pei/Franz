--Queries:

--A show the total number of incidents and total incidents costs by age group
select 
    a.agegroupid,
    a.agegroupname,
    sum(i.num_of_incidents) as total_incidents,
    sum(i.total_cost) as total_costs    
from IncidentFACT i 
JOIN AgegroupDim a ON i.agegroupid = a.agegroupid
GROUP BY a.agegroupid, a.agegroupname;

--B show the total number of incidents and total incident costs for the teachers where roles are Early childhood teacher.
select
    t.teacherrole,
    SUM(i.num_of_incidents) AS total_incidents,
    SUM(i.total_cost) AS total_cost
From 
    incidentFACT i 
Join TEACHERDIM t on i.teacherid = t.teacherid
where t.teacherrole = 'Early childhood teacher'
group by t.teacherrole;

--C Show the total number of incident studies and total incident cost by incident type
select 
    sum(i.num_of_incidents) as total_incidents,
    sum(i.total_cost) as total_cost
From incidentFACT i
    join TimeDIM t on i.timeid = t.timeid
Where t.monthname = 'May';


--D Total incidents and total incident costs by daycare center
select 
    centerid,
    SUM(num_of_incidents) AS total_incidents,
    sum(total_cost) as total_cost
From incidentFACT 
group by centerid;
    
--E Information about the teacher with the lowest number of incidents
SELECT
    l.teacherid,
    t.teachername,
    t.teacherrole,
    total_incidents,
    total_cost
From(    
    SELECT
    sum(i.num_of_incidents) AS total_incidents,
    sum(i.total_cost) AS total_cost,
    teacherid
    FROM IncidentFACT i
    Group by teacherid
    order by total_incidents asc
    FETCH FIRST 1 ROWS ONLY
)L
JOIN TEACHERDIM T on l.teacherid = t.teacherid; 

select
        sum(i.num_of_incidents)as total_incidents,
        sum(i.total_cost) as total_costs,
        t.teacherid,
        t.teachername,
        t.teacherrole
from
    IncidentFact i 
    join TEACHERDIM t on i.teacherid = t.teacherid
group by
    t.teacherid,
    t.teachername, 
    t.teacherrole
order by 
    total_incidents asc
fetch first
    1 rows only