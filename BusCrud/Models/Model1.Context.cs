﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusCrud.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class dbbusreservationEntities : DbContext
    {
        public dbbusreservationEntities()
            : base("name=dbbusreservationEntities")
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
    }
}
