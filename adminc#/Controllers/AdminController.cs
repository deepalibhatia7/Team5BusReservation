using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BusReservation.Models;

namespace BusReservation.Controllers
{
    public class AdminController : ApiController
    {
        dbbusreservationEntities db = new dbbusreservationEntities();
        // GET: api/AdminLogin
        public IQueryable<AdminLogin> GetAdmin()
        {
            return db.AdminLogins;
        }
        // GET: api/AdminLogin/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult GetAdmin(string Username)
        {
            AdminLogin admin = db.AdminLogins.Find(Username);
            if (admin== null)
            {
                return NotFound();
            }

            return Ok(admin);
        }
        // PUT: api/AdminLogin/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putadmin(string Username, AdminLogin admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (Username != admin.Username)
            {
                return BadRequest();
            }

            db.Entry(admin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!adminExists(Username))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AdminLogin
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult Postadmin(AdminLogin admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AdminLogins.Add(admin);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (adminExists(admin.Username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { Username = admin.Username }, admin);
        }

        // DELETE: api/AdminLogins/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult Deleteadmin(string Username)
        {
            AdminLogin admin = db.AdminLogins.Find(Username);
            if (admin == null)
            {
                return NotFound();
            }

            db.AdminLogins.Remove(admin);
            db.SaveChanges();

            return Ok(admin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool adminExists(string Username)
        {
            return db.AdminLogins.Count(e => e.Username == Username) > 0;
        }
    }
}
