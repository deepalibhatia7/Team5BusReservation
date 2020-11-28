create database BusTeam
use BusTeam

create TABLE Registration(
    Registration_Id INT  primary key identity(400,1) ,First_Name nvarchar(30) NOT NULL,User_Name nvarchar(50) NOT NULL unique
    ,Email nvarchar(30) NOT NULL Unique,Password nvarchar(50) NOT NULL,
    Age INT NOT NULL,Gender varchar(50) NOT NULL,Phone_Number nvarchar(20) NOT NULL,);
insert into Registration (First_Name,User_Name,Email,Password,Age,Gender,Phone_Number) values
    ('Ravikiran','ravi75','ravikiran2020@gmail.com','Ravi@1234',26,'Male',9988774455),
    ('Singamganesh','Singam2755','singamganesh546@gmail.com','Ganesh@34',22,'Male',7418529635)

	CREATE TABLE Bus (
    Bus_Id INT primary key identity (1001,1),Bus_Number INT unique,
    Bus_Name nvarchar(50) NOT NULL,Source_Station nvarchar(50) NOT NULL,
    Destination varchar(50) NOT NULL,Start_Date DATE NOT NULL,
    End_Date DATE NOT NULL,Journey_Time Time NOT NULL,
    Available_number_of_seats INT NOT NULL,);

    insert into Bus(Bus_Number,Bus_Name,Source_Station,Destination,Start_Date,End_Date,Journey_Time,Available_number_of_seats)
    values(101,'Kallada Travels','Delhi','Agra','2021-02-01','2021-02-01','03:05:10.00',47),(102,'SRM Travels','Chennai','Trivandrum','2021-02-05','2021-02-06','12:10:00',47),
          (103,'VKC Travels','Mumbai','Hyderabad','2021-03-01','2021-03-02','09:10:00',47),(104,'Orange Travels','Banglore','Mumbai','2021-05-05','2021-05-06','19:10:00',47),
          (105,'Brightes Travels','Trivandrum','Banglore','2021-08-07','2021-08-08','11:10:00',47)

		  CREATE TABLE Booking (
    Booking_Id INT primary key IDENTITY(1,1),Bus_Id int references Bus(Bus_Id),
    Number_of_tickets INT NOT NULL,Start_Date DATE NOT NULL,Email nvarchar(55) NOT NULL unique,
    Phone_Number nvarchar(20) NOT NULL,Registration_Id INT NOT NULL references Registration (Registration_Id),
    Type_of_Ticket varchar(50),Type_Id int
    references Type (Type_Id),);
    
    insert into Booking (Bus_Id,Number_of_tickets,Start_Date,Email,Phone_Number,Registration_Id,Type_of_Ticket,Type_Id) values
    (1001,03,'2020-11-09','Kavya2020@gmail.com',7897854786,400,'one-way',700),
    (1002,02,'2020-12-12','sridhar105@gmail.com',7874859647,401,'one-way',701)
  
    CREATE TABLE Type (Type_Id int primary key identity (700,1),
    Type_of_Ticket VARCHAR(50),Cost_per_Ticket INT NOT NULL,
    Total_Amount FLOAT NOT NULL,Bus_Id int Not null references Bus(Bus_Id));
 
    insert into Type(Type_of_Ticket,Cost_per_Ticket,Total_Amount,Bus_Id) values ('one-way',100,300,1001),('return',200,400,1002)

 CREATE TABLE Payment (
    Transaction_Id INT primary key identity(300,1),Total_Amount INT NOT NULL,Booking_Id INT NOT NULL references Booking (Booking_Id)
    ,Payment_Status varchar(50) NOT NULL);
    
    insert into Payment(Total_Amount,Booking_Id,Payment_Status) values (300,1,'Booked'),(400,2,'Pending')

    CREATE TABLE Cancel_Ticket (
    Booking_Id INT NOT NULL REFERENCES Booking (Booking_Id) ,
    Transaction_Id INT NOT NULL references Payment (Transaction_Id),
    Refunded_Amount FLOAT NOT NULL,
    Cancellation_Id INT NOT NULL primary key  identity (500,1),);
    insert into Cancel_Ticket (Booking_Id,Transaction_Id,Refunded_Amount) values (1,300,300),(2,301,500)

    CREATE TABLE AdminLogin (
    Username nvarchar(55) PRIMARY KEY ,Password nvarchar(55) NOT NULL,
    Email nvarchar(55) NOT NULL,);

    insert into AdminLogin (Username,Password,Email) values ('snug@123','Admin@12345','busreservationteam2020@gmail.com')
    create table OTP (Id int identity(1,1) primary key Not null, OTP int NULL, Registration_Id int NULL references Registration(Registration_Id) on delete cascade on update cascade)


select * from OTP	
	select * from AdminLogin
	select * from Registration
    select * from Bus
	select * from Booking
	select * from Type
	 select * from Payment
	 select * from Cancel_Ticket

	 create proc [sp_availabletickets]
@Bus_Id int,
@availablenooftickets int
as
begin
Update Bus set Available_number_of_seats=(Available_number_of_seats-@availablenooftickets)
from Bus a
inner join
Booking b
on a.Bus_Id=b.Bus_Id
where b.Bus_Id=@Bus_Id
end
GO
exec sp_availabletickets 1001 ,1

create proc sp_cancelTicket(@Registration_id int)
    as begin
    Select b.Booking_Id, b.Bus_Id, b.Start_Date, t.Cancellation_Id, p.Transaction_Id, p.Total_Amount, t.Refunded_Amount,r.Registration_Id
    from [Booking] b
    Inner Join [Cancel_Ticket] t
    on b.Booking_Id = t.Booking_Id
    Inner Join [Payment] p
    on p.Transaction_Id=t.Transaction_Id
    Inner Join [Registration] r
    on r.Registration_Id=b.Registration_Id
    Where r.Registration_Id=(@Registration_Id)
    order by  b.Booking_Id desc
    end
    go
    exec sp_cancelTicket 401
    
	ALTER TABLE Bus
ADD Total_Tickets int;
update Bus set Total_Tickets=47 where Available_number_of_seats=47