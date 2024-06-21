drop table TypeDim;
drop table TeacherDIM;
drop table centerDim;
drop table timedim;
drop table AgeGroupDim;
drop table tempfact;
drop table incidentFACT;
--Creating Dimension Tables
--Incident_Type Dimension

CREATE TABLE TypeDim AS
Select 
    TypeID           AS TypeID,
    Type_description AS Typedescrption
FROM
    MonChild.incidentsType;
    
    select * from TYPEDIM;
    
--Daycare_Center Dimension
CREATE TABLE centerdim AS
SELECT
    CenterID           AS CenterID,
    Center_capacity as CenterCapacity,
    Center_postcode as CenterPostcode,
    Center_phonenumber as CenterPhoneNumber
FROM
    MonChild.Daycare_center;

    select * from centerdim;


-- Teacher Dimension
CREATE TABLE TEACHERDIM AS
SELECT 
    TeacherID    As   TeacherID,
    Teacher_role As   TeacherRole,
    Teacher_name As   TeacherName
FROM
    Monchild.Teacher;
    
    Select * from TEACHERDIM;

--Time Dimension
CREATE TABLE timedim (
    timeid number(2),
    monthname VARCHAR2(10)
);
INSERT INTO timedim(timeid, monthname) VALUES (1, 'January');
INSERT INTO timedim(timeid, monthname) VALUES (2, 'February');
INSERT INTO timedim(timeid, monthname) VALUES (3, 'March');
INSERT INTO timedim(timeid, monthname) VALUES (4, 'April');
INSERT INTO timedim(timeid, monthname) VALUES (5, 'May');
INSERT INTO timedim(timeid, monthname) VALUES (6, 'June');
INSERT INTO timedim(timeid, monthname) VALUES (7, 'July');
INSERT INTO timedim(timeid, monthname) VALUES (8, 'August');
INSERT INTO timedim(timeid, monthname) VALUES (9, 'September');
INSERT INTO timedim(timeid, monthname) VALUES (10, 'October');
INSERT INTO timedim(timeid, monthname) VALUES (11, 'November');
INSERT INTO timedim(timeid, monthname) VALUES (12, 'December');
    Select * from Timedim;
    
--AgeGroupDIM Table
create table AgeGroupDim(
    Agegroupid number(1),
    Agegroupname VARCHAR2(20),
    Agegroupdate varchar2(80)
    
);
INSERT INTO AgeGroupDim(Agegroupid, Agegroupname, Agegroupdate)
VALUES(1,'1-2 years','Age 1 to 2');
INSERT INTO AgeGroupDim(Agegroupid, Agegroupname, Agegroupdate)
VALUES(2,'3-5 years', 'Age 3 to 5');

 Select * from AgeGroupDim;

--Creating Fact Tables:
--tempfact Fact Table
CREATE TABLE tempfact AS
SELECT
    i.incidents_cost,
    i.incidentid,
    i.typeid,
    d.centerid,
    i.teacherid,
    c.child_age,
    TO_NUMBER(to_char(i.incident_date, 'MM')) as TimeID
FROM
    monchild.children_incidents i,
    monchild.children c,
    monchild.Daycare_center d,
    monchild.teacher t
WHERE
    i.childrenid = c.childrenid and
    d.centerid = c.Centerid and
    i.teacherid = t.teacherid;
    
   
--JOIN monchild.children c ON i.childrenid = c.childrenid
--JOIN monchild.teacher t on i.teacherid = t.teacherid
--JOIN Daycare_center d ON d.centerid = c.Centerid;
        
--Adding agegroupid to tempfact            
ALTER TABLE tempfact ADD (agegroupid number(1));

--Updating agegroupid based on age ranges
update tempfact
set agegroupid = 1
where child_age >=1 and  child_age <= 2;

update tempfact
SET agegroupid = 2
where child_age >= 3 and child_age <= 5;

select *  from tempfact;

--IncidentFACT Fact Table
CREATE TABLE IncidentFACT as
SELECT
    typeid? 
    agegroupid,
    timeid,
    centerid,
    teacherid,
    COUNT(incidentid) as num_of_incidents,
    SUM(incidents_cost) as total_cost
from
    tempfact t
group by 
    typeid,
    agegroupid,
    t.timeid,
    centerid,
    teacherid;

select * from IncidentFACT;
