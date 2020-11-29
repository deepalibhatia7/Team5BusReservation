﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Weblogin.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class snugbusEntities1 : DbContext
    {
        public snugbusEntities1()
            : base("name=snugbusEntities1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AdminLogin> AdminLogins { get; set; }
        public virtual DbSet<Booking> Bookings { get; set; }
        public virtual DbSet<Bus> Buses { get; set; }
        public virtual DbSet<Cancel_Ticket> Cancel_Ticket { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Registration> Registrations { get; set; }
        public virtual DbSet<Type> Types { get; set; }
        public virtual DbSet<Usertable> Usertables { get; set; }
    
        public virtual int sp_availabletickets(Nullable<int> bus_id, Nullable<int> availablenooftickets)
        {
            var bus_idParameter = bus_id.HasValue ?
                new ObjectParameter("Bus_id", bus_id) :
                new ObjectParameter("Bus_id", typeof(int));
    
            var availablenoofticketsParameter = availablenooftickets.HasValue ?
                new ObjectParameter("availablenooftickets", availablenooftickets) :
                new ObjectParameter("availablenooftickets", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_availabletickets", bus_idParameter, availablenoofticketsParameter);
        }
    
        public virtual ObjectResult<sp_cancelTicket_Result> sp_cancelTicket(Nullable<int> registration_id)
        {
            var registration_idParameter = registration_id.HasValue ?
                new ObjectParameter("Registration_id", registration_id) :
                new ObjectParameter("Registration_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_cancelTicket_Result>("sp_cancelTicket", registration_idParameter);
        }
    }
}
