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
    
    public partial class Payment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Payment()
        {
            this.Cancel_Ticket1 = new HashSet<Cancel_Ticket>();
        }
    
        public int Transaction_id { get; set; }
        public int Total_amount { get; set; }
        public int Booking_id { get; set; }
        public string Payment_status { get; set; }
        public string Cancel_Ticket { get; set; }
        public int PaymentMethod { get; set; }
    
        public virtual Booking Booking { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Cancel_Ticket> Cancel_Ticket1 { get; set; }
    }
}
