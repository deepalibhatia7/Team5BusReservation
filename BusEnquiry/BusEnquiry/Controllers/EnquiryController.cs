using System.Linq;
using System.Web.Http;
using BusEnquiry.Models;
using System.Collections;
using System.Collections.Generic;
using System;

namespace BusEnquiry.Controllers
{
    public class EnquiryController : ApiController
    {
        public BusprojectEntities db = new BusprojectEntities();

        [Route("enquiry/GetSourceStationList")]       
        [HttpGet]
        public IEnumerable GetSSList()
        {
            var r = (from ss in db.Buses select ss.Source_station).ToList();

            return r;
        }
        [Route("enquiry/BusList")]
        [HttpGet]
        public IEnumerable GetBusList()
        {
            var s = (from ss in db.Buses select ss.Bus_name).ToList();

            return s;
        }
        
        [HttpGet]
        public IHttpActionResult SearchBusData(string Source_station,string Destination,DateTime startdate)
        {
            var b = (from ss in db.Buses
                     select new
                     {
                         Bus_id = ss.Bus_id,
                         Source_station = ss.Source_station,
                         Destination = ss.Destination,
                         startdate = ss.startdate,
                         enddate = ss.enddate,
                     }
                        ).ToList();
            return Ok(b);
            //Booking booking = db.Bookings.Find(id);
            //if (booking == null)
            //{
            //    return NotFound();
            //}

            //return Ok(booking);
        }
    }
}
