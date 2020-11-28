using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FinalWeb.Models;

namespace FinalWeb.Controllers
{
    public class TicketDetailsController : ApiController
    {
        BusTeamEntities db = new BusTeamEntities();
        [HttpGet]
        public IHttpActionResult ViewBookingDetails(int Registration_Id)
        {
            var ticketdetails = db.sp_cancelTicket(Registration_Id).ToList();
            if (ticketdetails != null)
            {
                return Ok(ticketdetails);
            }
            else
            {
                return BadRequest("No Data Found");
            }
        }
    }
}
