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
    public class AdminLoginsController : ApiController
    {
        private dbbusreservationEntities db = new dbbusreservationEntities();

        // GET: api/AdminLogins
        public IQueryable<AdminLogin> GetAdminLogins()
        {
            return db.AdminLogins;
        }

        // GET: api/AdminLogins/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult GetAdminLogin(string id)
        {
            AdminLogin adminLogin = db.AdminLogins.Find(id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            return Ok(adminLogin);
        }

        // PUT: api/AdminLogins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdminLogin(string id, AdminLogin adminLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != adminLogin.Username)
            {
                return BadRequest();
            }

            db.Entry(adminLogin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminLoginExists(id))
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

        // POST: api/AdminLogins
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult PostAdminLogin(AdminLogin adminLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AdminLogins.Add(adminLogin);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (AdminLoginExists(adminLogin.Username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = adminLogin.Username }, adminLogin);
        }

        // DELETE: api/AdminLogins/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult DeleteAdminLogin(string id)
        {
            AdminLogin adminLogin = db.AdminLogins.Find(id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            db.AdminLogins.Remove(adminLogin);
            db.SaveChanges();

            return Ok(adminLogin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminLoginExists(string id)
        {
            return db.AdminLogins.Count(e => e.Username == id) > 0;
        }
    }
}