create database Busproject1
use Busproject1

CREATE TABLE Registration (
	Registration_id INT  primary key,User_name nvarchar(50) NOT NULL,Password nvarchar(50) NOT NULL,
	Name nvarchar(50) NOT NULL,Age INT NOT NULL,
	Gender varchar(50) NOT NULL,Phone_number INT NOT NULL,);
select * from Registration

alter table Registration alter column Phone_number nvarchar(20)

	insert into Registration (Registration_id,User_name,Password,Name,Age,Gender,Phone_number) values
	(200,'ravi75','Ravi@1234','Ravikiran',26,'Male',9988774455)
	insert into Registration (Registration_id,User_name,Password,Name,Age,Gender,Phone_number) values
	(201,'kavya50','Kavya@123','Kavya',20,'Female',8794579652),(202,'swapna50','Swapna@789','Swapna sree',24,'Female',9674851234),
	(203,'Ajay007','Ajay@150','Ajay Kumar',18,'Male',7485961475),(204,'Vijay200','Vijay@28','Vijay Tarun',27,'Male',9874587961)

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

   CREATE TABLE Booking (
	Booking_id INT primary key,Bus_id int references Bus(Bus_id),
	Number_of_tickets INT NOT NULL,DateOfJourney DATETIME NOT NULL,email nvarchar(55) NOT NULL,
	PhoneNumber INT NOT NULL,Registration_id INT NOT NULL references Registration (Registration_id),
	Type_of_Ticket varchar(50)NOT NULL references Type (Type_of_Ticket),);

	select * from Booking

	CREATE TABLE Type (
	Type_of_Ticket VARCHAR(50) primary key,Cost_per_Ticket INT NOT NULL,
	Total_Amount FLOAT NOT NULL,);

	select * from Type

	CREATE TABLE Payment (
	Transaction_id INT primary key identity(100,1),Total_amount INT NOT NULL,Booking_id INT NOT NULL references Booking (Booking_id)
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

	insert into AdminLogin (Username,Password,Email_id) values ('snug@123','Admin@12345','Busteam2020@gmail.com')
	select * from AdminLogin