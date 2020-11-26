//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace seatmapping.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Booking
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Booking()
        {
            this.Cancel_Ticket = new HashSet<Cancel_Ticket>();
            this.Payments = new HashSet<Payment>();
        }
    
        public int Booking_id { get; set; }
        public Nullable<int> Bus_id { get; set; }
        public int Number_of_tickets { get; set; }
        public System.DateTime DateOfJourney { get; set; }
        public string email { get; set; }
        public string PhoneNumber { get; set; }
        public int Registration_id { get; set; }
        public string Type_of_Ticket { get; set; }
        public Nullable<int> Type_id { get; set; }
    
        public virtual Bus Bus { get; set; }
        public virtual Registration Registration { get; set; }
        public virtual Type Type { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Cancel_Ticket> Cancel_Ticket { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
