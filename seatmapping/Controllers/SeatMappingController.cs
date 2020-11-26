using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using seatmapping.Models;

namespace seatmapping.Controllers
{
    public class SeatMappingController : ApiController
    {

        snugbusEntities db = new snugbusEntities();
        [HttpGet]
        public IHttpActionResult GetSeatavailabletickets(int Bus_id, int Available_number_of_seats)
        {
            db.sp_availabletickets(Bus_id, Available_number_of_seats);
            db.SaveChanges();

            int avtickets = (from b in db.Buses
                             where b.Bus_id == Bus_id
                             select b.Available_number_of_seats).FirstOrDefault();
            if (avtickets != null)
            {
                //  return Ok((avtickets));
                return Ok((avtickets - Available_number_of_seats));
            }
            else
            {
                return BadRequest("Invalid Booking");
            }
        }
       // [HttpGet]
        //public IHttpActionResult GetSeatavailabletickets(int Bus_id, int Available_number_of_seats)

    }
}
