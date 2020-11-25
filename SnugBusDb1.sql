create database snugbus
use snugbus

create TABLE Registration(
	Registration_id INT  primary key identity(400,1),First_Name nvarchar(30) NOT NULL,User_name nvarchar(50) NOT NULL
	,Email nvarchar(30) NOT NULL,Password nvarchar(50) NOT NULL,ConfirmPassword nvarchar(50) NOT NULL,
    Age INT NOT NULL,Gender varchar(50) NOT NULL,Phone_number nvarchar(20) NOT NULL,);
select * from Registration

insert into Registration (First_Name,User_name,Email,Password,Confirmpassword,Age,Gender,Phone_number) values
	('Ravikiran','ravi75','ravikiran2020@gmail.com','Ravi@1234','Ravi@1234',26,'Male',9988774455)
	
insert into Registration (First_Name,User_name,Email,Password,Confirmpassword,Age,Gender,Phone_number) values
	('Kavya','Kavya20','kavyasree1020@gmail.com','Kavya@1234','Kavya@1234',23,'Female',7897897458),
	('Sridhar','Sridhar09','sridhar020@gmail.com','Sridhar@442','Sridhar@442',21,'Male',7845748596)

	create table Usertable
	(Email nvarchar(20) primary key,password nvarchar(10))

	CREATE TABLE Bus (
	Bus_id INT primary key identity (1001,1),Bus_number INT ,
	Bus_name nvarchar(50) NOT NULL,Source_station nvarchar(50) NOT NULL,
	Destination varchar(50) NOT NULL,startdate DATETIME NOT NULL,
	enddate DATETIME NOT NULL,Duration INT NOT NULL,
	Available_number_of_seats INT NOT NULL,);

	select * from Bus
	insert into Bus(Bus_number,Bus_name,Source_station,Destination,startdate,enddate,Duration,Available_number_of_seats)
	values(101,'Kallada Travels','Delhi','Agra','2020-02-01','2020-02-01',3,50),(102,'SRM Travels','Chennai','Trivandrum','2020-02-05','2020-02-06',14,50),
	      (103,'VKC Travels','Mumbai','Hyderabad','2020-03-01','2020-03-02',14,25),(104,'Orange Travels','Banglore','Mumbai','2020-05-05','2020-05-06',17,50),
		  (105,'Brightes Travels','Trivandrum','Banglore','2020-08-07','2020-08-08',14,45)
    update Bus set Total_seats=50 where Bus_id=1001;
	update Bus set Total_seats=50 where Bus_id=1002;
	update Bus set Total_seats=25 where Bus_id=1003;
	update Bus set Total_seats=50 where Bus_id=1004;
	update Bus set Total_seats=45 where Bus_id=1005;


   CREATE TABLE Booking (
	Booking_id INT primary key,Bus_id int references Bus(Bus_id),
	Number_of_tickets INT NOT NULL,DateOfJourney DATETIME NOT NULL,email nvarchar(55) NOT NULL,
	PhoneNumber nvarchar(20) NOT NULL,Registration_id INT NOT NULL references Registration (Registration_id),
	Type_of_Ticket varchar(50),Type_id int
    references Type (Type_id),);
	

	insert into Booking (Booking_id,Bus_id,Number_of_tickets,DateOfJourney,email,PhoneNumber,Registration_id,Type_of_Ticket,Type_id) values
	(401,1001,03,'2020-11-09','Kavya2020@gmail.com',7897854786,400,'one-way',1)
	insert into Booking (Booking_id,Bus_id,Number_of_tickets,DateOfJourney,email,PhoneNumber,Registration_id,Type_of_Ticket,Type_id) values
	(101,1001,02,'2020-12-12','sridhar105@gmail.com',7874859647,401,'one-way',2)
	select * from Booking

	CREATE TABLE Type (Type_id int primary key,
	Type_of_Ticket VARCHAR(50),Cost_per_Ticket INT NOT NULL,
	Total_Amount FLOAT NOT NULL,);

	alter TABLE Type add Bus_id int references Bus (Bus_id);
	alter table Bus add Total_seats int
	

	insert into Type(Type_id,Type_of_Ticket,Cost_per_Ticket,Total_Amount) values (1,'one-way',100,300),(2,'return',200,400)
	update Type set Bus_id=1002 where Type_id=1;
	update Type set Bus_id=1003 where Type_id=2;

	select * from Type

	CREATE TABLE Payment (
	Transaction_id INT primary key identity(300,1),Total_amount INT NOT NULL,Booking_id INT NOT NULL references Booking (Booking_id)
	,Payment_status varchar(50) NOT NULL,
	Cancel_Ticket nvarchar(55) NOT NULL,PaymentMethod INT NOT NULL);

	select * from Payment

	CREATE TABLE Cancel_Ticket (
	Booking_id INT NOT NULL REFERENCES Booking (Booking_id) ,
	Transaction_id INT NOT NULL references Payment (Transaction_id),
	Refunded_amount FLOAT NOT NULL,
	Cancellation_id INT NOT NULL primary key  identity (500,1),);
	select * from Cancel_Ticket


	CREATE TABLE AdminLogin (
	Username nvarchar(55) PRIMARY KEY ,Password nvarchar(55) NOT NULL,
	Email_id nvarchar(55) NOT NULL,);

	insert into AdminLogin (Username,Password,Email_id) values ('snug@123','Admin@12345','busreservationteam2020@gmail.com')
	select * from AdminLogin
	select * from Registration
	select * from Usertable
	select * from Booking
	select * from Bus
	select * from Type
	select * from Cancel_Ticket
	select * from Payment


create proc [sp_availabletickets]
@Bus_id int,
@availablenooftickets int
as
begin
Update Bus set Available_number_of_seats=(Available_number_of_seats-@availablenooftickets)
from Bus a
inner join
Booking b
on a.Bus_id=b.Bus_id
where b.Bus_id=@Bus_id
end
GO
exec sp_availabletickets 1001 ,2




