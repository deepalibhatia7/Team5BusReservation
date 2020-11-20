using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusEnquiry.Models;

namespace BusEnquiry.Controllers
{
    public class EnquiryController : ApiController
    {
        public BusprojectEntities db = new BusprojectEntities();
        public EnquiryController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        public IEnumerable<Bus> GetSourceStation()
        {
            return db.Buses.ToList();       
        }
    }
}
