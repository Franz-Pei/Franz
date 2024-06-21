--TASK 1
--1.1 Write the SQL script to create the destination schema named “ptv”
create schema ptv;
--1.2 Write the SQL script to restore ALL tables in GTFS files.
--drop table ptv.agencies;
create table ptv.agencies(
	agency_id int primary key,
	agency_name varchar(255),
	agency_url varchar(255),
	agency_timezone varchar(255),
	agency_lang char(2)
);
--container path
-- Load data using COPY method
copy ptv.agencies from '/data/adata/gtfs/agency.txt' delimiter ',' csv header;
--drop table ptv.routes;
create table ptv.routes(
	route_id varchar(15) primary key,
	agency_id int not null,
	route_short_name varchar(30),
	route_long_name varchar(255) not null,
	route_type int not null,
	route_color varchar(6) not null,
	route_text_color varchar(6) not null
);
-- Load data using COPY method
copy ptv.routes from '/data/adata/gtfs/routes.txt' delimiter ',' csv header;
--drop table ptv.calendar_dates;
create table ptv.calendar_dates(
	service_id varchar(20) not null,
	date DATE not null,
	exception_type int not null,
	primary key (service_id,
date),
	foreign key (service_id) references ptv.calendar(service_id)
);
-- Load data using COPY method
copy ptv.calendar_dates from '/data/adata/gtfs/calendar_dates.txt' delimiter ',' csv header;
--drop table ptv.calendar;
create table ptv.calendar(
	service_id varchar(20) primary key,
	monday boolean not null,
	tuesday boolean not null,
	wednesday boolean not null,
	thursday boolean not null,
	friday boolean not null,
	saturday boolean not null,
	sunday boolean not null,
	start_date DATE not null,
	end_date DATE not null
);
-- Load data using COPY method
copy ptv.calendar from '/data/adata/gtfs/calendar.txt' delimiter ',' csv header;
--drop table ptv.shapes;
create table ptv.shapes(
	shape_id varchar(20) not null,
	shape_pt_lat decimal(16,
13) not null,
	shape_pt_lon decimal(16,
13) not null,
	shape_pt_sequence int not null,
	shape_dist_traveled decimal(10,
2) not null,
	primary key (shape_id,
shape_pt_sequence)
);
-- Load data using COPY method
copy ptv.shapes from '/data/adata/gtfs/shapes.txt' delimiter ',' csv header;
--drop table ptv.trips;
create table ptv.trips(
	route_id varchar(15) not null,
	service_id varchar(20) not null,
	trip_id varchar(30) not null primary key,
	shape_id varchar(20),
	trip_headsign varchar(255),
	direction_id int not null,
	foreign key (route_id) references ptv.routes(route_id),
	foreign key (service_id) references ptv.calendar(service_id)
);
-- Load data using COPY method
copy ptv.trips from '/data/adata/gtfs/trips.txt' delimiter ',' csv header;
--drop table ptv.stops;
--removed PK: there are duplicate keys of stop_id 10121
create table ptv.stops(
	stop_id int,
	stop_name varchar(255),
	stop_lat decimal(16,
13),
	stop_lon decimal(16,
13)
);
-- Load data using COPY method
copy ptv.stops from '/data/adata/gtfs/stops.txt' delimiter ',' csv header;
--drop table ptv.stop_times;
create table ptv.stop_times(
	trip_id varchar(30) not null,
	arrival_time char(8) not null,
	departure_time char(8) not null,
	stop_id int not null,
	stop_sequence int not null,
	stop_headsign varchar(255),
	pickup_type int not null,
	drop_off_type int not null,
	shape_dist_traveled varchar(10),
	primary key (trip_id,
stop_sequence)
);
-- Load data using COPY method
copy ptv.stop_times from '/data/adata/gtfs/stop_times.txt' delimiter ',' null as '' csv header quote '"';
--1.3 restore the Mesh Blocks files by using correct dataset file. Restore the file using ogr2ogr into table “mb2021”
--Docker Terminal:
--ogr2ogr PG:"dbname=gisdb user=postgres" "/data/adata/MB_2021_AUST_SHP_GDA2020/MB_2021_AUST_GDA2020.shp" -nln ptv.mb2021 -overwrite -nlt MULTIPOLYGON
select
	wkb_geometry
from
	ptv.mb2021;
--1.4 Write the SQL script to restore the LGA2021 Allocation file
--drop table ptv.lga2021;
create table ptv.lga2021 (
	mb_code_2021 char(11) primary key,
	lga_code_2021 char(5) not null,
	lga_name_2021 varchar(50) not null,
	state_code_2021 char(1) not null,
	state_name_2021 varchar(50) not null,
	aus_code_2021 varchar(10) not null,
	aus_name_2021 varchar(50) not null,
	area_albers_sqkm decimal(10,
4),
	asgs_loci_uri_2021 varchar(255) not null
);
-- Load data using COPY method
copy ptv.lga2021 from '/data/adata/LGA_2021_AUST.csv' delimiter ',' csv header;
--Write the SQL script to restore the SAL 2021 Allocation file for 
--drop table ptv.suburb2021;
create table ptv.suburb2021 (
mb_code_2021 char(11) primary key,
sal_code_2021 char(5) not null,
sal_name_2021 varchar(50) not null,
state_code_2021 char(1) not null,
state_name_2021 varchar(50) not null,
aus_code_2021 varchar(10) not null,
aus_name_2021 varchar(50) not null,
area_albers_sqkm decimal(10,
4),
asgs_loci_uri_2021 varchar(255) not null
);
-- Load data using COPY method
copy ptv.suburb2021 from '/data/adata/SAL_2021_AUST.csv' delimiter ',' csv header;
--1.5 Verify your restoration by running this script:
with tbl as
(
select
	table_schema,
	TABLE_NAME
from
	information_schema.tables
where
	table_schema in ('ptv'))
select
	table_schema,
	TABLE_NAME,
	(xpath('/row/c/text()',
	query_to_xml(format('select count(*) as c from %I.%I',
	table_schema,
	TABLE_NAME),
	false,
	true,
	'')))[1]::text::int as rows_n
from
	tbl
order by
	table_name;
--TASK 2
--2.1 Create a table named “mb2021_mel” that contains ONLY the mesh blocks in Melbourne Metropolitan
--drop table ptv.mb2021_mel;

create table ptv.mb2021_mel as
select
	*
from
	ptv.mb2021
where
	gcc_name21 ilike '%Greater Melbourne%';

select
	*
from
	ptv.mb2021_mel;
--2.2 Create a table, named “melbourne” for Melbourne Metropolitan boundary. Hint: aggregate all mesh blocks polygon to create one large polygon for Melbourne Metropolitan boundary
--drop table ptv.melbourne;
create table ptv.melbourne as
select
	st_union(wkb_geometry) as geom
from
	ptv.mb2021_mel;

select
	*
from
	ptv.melbourne;
--2.3 Add a geometry column by using the latitude and longitude value that are available in the table. Make sure you use GDA2020 (SRID:7844) for this column
alter table ptv.stops
add column geom geometry(point,
7844);

update
	ptv.stops
set
	geom = ST_SetSRID(ST_MakePoint(stop_lon,
	stop_lat),
	7844);
--select geom from ptv.stops;
--2.4 Create a table called "stops_routes_mel" to encompass the following attributes:
--stop_id, stop_name, coordinates, route number (derived from routes_short_name), route name (derived from routes_long_name), and vehicle type
--This data set should encompass all stops within the Melbourne Metropolitan area
--drop table ptv.stops_routes_mel;

create table ptv.stops_routes_mel as
select
	distinct
s.stop_id,
	s.stop_name,
	s.geom,
	r.route_short_name as route_number,
	r.route_long_name as route_name,
	case
		r.route_type
	when 0 then 'Tram'
		when 2 then 'Train'
		when 3 then 'Bus'
		else 'Unknown'
	end as vehicle
from
	ptv.stops s
join ptv.stop_times st on
	s.stop_id = st.stop_id
join ptv.trips t on
	t.trip_id = st.trip_id
join ptv.routes r on
	r.route_id = t.route_id
join ptv.melbourne m on
	ST_Within(s.geom,
	m.geom);
--2.4.1 How many rows do you have in the stops_routes_mel table
select
	count(*)
from
	ptv.stops_routes_mel;
--2.4.2 How many unique stop_ids do you have in the stops_routes_mel table
select
	count(distinct(stop_id))
from
	ptv.stops_routes_mel;
--TASK 3
--3.1 identify the number of bus stops in each Suburb. Your result should have the suburb name and the total bus stops in it
--identify the mesh block location of a bus stop. Then, aggregate the number in Suburb level. 
--One suburb consists of multiple mesh blocks
select
	sal_name_2021,
	COUNT(distinct s.stop_id) as total_bus_stops
from
	ptv.stops s
join
    ptv.stop_times st on
	s.stop_id = st.stop_id
join
    ptv.trips t on
	t.trip_id = st.trip_id
join
    ptv.routes r on
	r.route_id = t.route_id
join ptv.melbourne m on
	ST_Within(s.geom,
	m.geom)
join
    ptv.mb2021 mb
on
	ST_Within(s.geom,
	mb.wkb_geometry)
join ptv.suburb2021 s2 on
	s2.mb_code_2021 = mb.mb_code21
where
	r.route_type = 3
	-- Filter for bus routes
group by
	sal_name_2021;
--Improved SQL script:
select
	sal_name_2021,
	count(distinct srm.stop_id) as total_bus_stops
from
	ptv.stops_routes_mel srm
join ptv.mb2021 m on
	st_within(srm.geom,
	m.wkb_geometry)
join ptv.suburb2021 s2 on
	s2.mb_code_2021 = m.mb_code21
where
	srm.vehicle = 'Bus'
group by
	sal_name_2021;
--3.1.1 Provide a list of the five suburbs with the lowest count of stops. In case multiple suburbs share the same minimum number of stops in your findings, arrange them in ascending order based on their suburb names.
select
	sal_name_2021,
	count(distinct srm.stop_id) as total_bus_stops
from
	ptv.stops_routes_mel srm
join ptv.mb2021 m on
	st_within(srm.geom,
	m.wkb_geometry)
join ptv.suburb2021 s2 on
	s2.mb_code_2021 = m.mb_code21
where
	srm.vehicle = 'Bus'
group by
	sal_name_2021
order by
	total_bus_stops asc,
	sal_name_2021 asc
limit 5;
--3.1.2 Average number of distinct stops in suburb
--[consider only bus stop]
--avg: including suburbs which have 0 bus stops; about 32.64
with bus_stop_count as (
select
	count(distinct srm.stop_id) as bus_stop_ct
from
	ptv.stops_routes_mel srm
where
	srm.vehicle = 'Bus'),
sub_count as (
select
	count(distinct sal_name_2021) as sub_ct
from
	ptv.mb2021_mel m
join ptv.suburb2021 s2 on
	s2.mb_code_2021 = m.mb_code21)
select
	bus_stop_count.bus_stop_ct::float / sub_count.sub_ct::float as average
from
	bus_stop_count,
	sub_count
--3.2 Display the LGA name, total number of Residential Mesh Blocks, total  number of residential blankspot, percentage of blankspot in Melbourne Metropolitan. Sort results in ascending order by total number of Residential Mesh Blocks
--create indexes on ptv.mb2021_mel.wkb_geometry and ptv.stops_routes_mel.geom: Indexing can significantly speed up the join operation
create index mb2021_mel_wkb_geometry_geom_idx on
ptv.mb2021_mel
	using gist (wkb_geometry);

create index stops_routes_mel_geom_idx on
ptv.stops_routes_mel
	using gist (geom);
--The category is defined in “mb_cat21” column, mb2021_mel table
--Let B as the number of residential blankspot, R as the total number of Residential Mesh Blocks, where B ⊆ R
--X=(∑B)/(∑R)*100%
with R as (
select
	l.lga_name_2021,
	count(distinct mm.mb_code21) as ct
from
	ptv.mb2021_mel mm
join ptv.lga2021 l on
	l.mb_code_2021 = mm.mb_code21
where
	mm.mb_cat21 = 'Residential'
group by
	l.lga_name_2021),
NB as (
select
	l.lga_name_2021,
	count(distinct mm.mb_code21) as ct
from
	ptv.mb2021_mel mm
join ptv.stops_routes_mel srm on
	st_within(srm.geom,
	mm.wkb_geometry)
join ptv.lga2021 l on
	l.mb_code_2021 = mm.mb_code21
where
	srm.vehicle = 'Bus'
	and mm.mb_cat21 = 'Residential'
group by
	l.lga_name_2021)
select
	R.lga_name_2021,
	R.ct as total_number_of_Residential_Mesh_Blocks,
	R.ct - NB.ct as total_number_of_residential_blankspot,
	((R.ct - NB.ct)/ R.ct::float)* 100 as percentage_of_blankspot
from
	R
join NB on
	R.lga_name_2021 = NB.lga_name_2021
order by
	total_number_of_Residential_Mesh_Blocks asc;
--3.2.1 3.2.1: Complete the following statistical data based on the result.
--Note: The query and screenshot are not required for this section. You can write down your results directly
--Task 4 Write an SQL query to create a table named 'lga_blankspot' containing the blankspot percentages categorised by the LGA from the previous task 3.2 and sufficient spatial data
--drop table ptv.lga_blankspot;
create table ptv.lga_blankspot as (
with filtered as (
select * from ptv.mb2021_mel mm where mm.mb_cat21 = 'Residential'
),
R as (
select
	l.lga_name_2021,
	count(distinct f.mb_code21) as ct
from
	filtered f
join ptv.lga2021 l on
	l.mb_code_2021 = f.mb_code21
group by
	l.lga_name_2021),
NB as (
select
	l.lga_name_2021,
	count(distinct f.mb_code21) as ct
from
	filtered f
join ptv.stops_routes_mel srm on
	st_within(srm.geom,
	f.wkb_geometry)
join ptv.lga2021 l on
	l.mb_code_2021 = f.mb_code21
where
	srm.vehicle = 'Bus'
group by
	l.lga_name_2021),
layer as (
select
	l.lga_name_2021,
	st_union(f.wkb_geometry) as geom
from
	filtered f
join ptv.lga2021 l on
	l.mb_code_2021 = f.mb_code21
group by
	l.lga_name_2021
)
select
	R.lga_name_2021,
	R.ct as total_number_of_Residential_Mesh_Blocks,
	R.ct - NB.ct as total_number_of_residential_blankspot,
	((R.ct - NB.ct)/ R.ct::float)* 100 as percentage_of_blankspot,
	layer.geom
from
	R
join NB on
	R.lga_name_2021 = NB.lga_name_2021
join layer on layer.lga_name_2021 = R.lga_name_2021
order by
	total_number_of_Residential_Mesh_Blocks asc
);

select * from ptv.lga_blankspot;