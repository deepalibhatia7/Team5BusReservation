//------------------------------------------------------------------------------
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
    
    public partial class sp_cancelTicket_Result
    {
        public int Booking_id { get; set; }
        public Nullable<int> Bus_id { get; set; }
        public System.DateTime DateofJourney { get; set; }
        public int Cancellation_id { get; set; }
        public int Transaction_id { get; set; }
        public int Total_amount { get; set; }
        public double Refunded_amount { get; set; }
        public int Registration_id { get; set; }
    }
}
