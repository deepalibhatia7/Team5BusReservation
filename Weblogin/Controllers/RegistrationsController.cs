using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Weblogin.Models;
using Weblogin.Controllers;

namespace Weblogin.Controllers
{
    // [RoutePrefix("Api/login")]
    public class RegistrationsController : ApiController
    {
        //snugbusEntities DB = new snugbusEntities();
        //[Route("InsertCustomer")]
        //[HttpPost]
        //public IHttpActionResult InsertCustomer(Registration Reg)
        //{
        //    try
        //    {
        //        Registration EL = new Registration();
        //        if (EL.Registration_Id == 0)
        //        {
        //            EL.First_Name = Reg.First_Name;
        //            EL.User_name = Reg.User_name;
        //            EL.Email = Reg.Email;
        //            EL.Password = Reg.Password;
        //            EL.Confirm_Password = Reg.Confirm_Password;
        //            EL.Age = Reg.Age;
        //            EL.Gender = Reg.Gender;
        //            EL.Phone_Number = Reg.Phone_Number;
        //            DB.Registrations.Add(EL);
        //            DB.SaveChanges();
        //            //return new HttpResponseMessage
        //            //{
        //            //    Status = "Success",
        //            //    message = "Records saved successfully"
        //            //};
        //        }
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    //    return new HttpResponseMessage
        //    //    {
        //    //        stat = "Error", Message = "Invalid Data."
        //    //};    
        //    return StatusCode(HttpStatusCode.NoContent);
        //}
        //[Route("Login")]
        //[HttpPost]
        //public HttpResponseMessage UserLogin(Registration login)
        //{
        //    var log = DB.Registrations.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();
        //    if (log == null)
        //    {
        //       return Request.CreateResponse(HttpStatusCode.OK, "Invalid");
        //    }
        //    else
        //    {
        //        return Request.CreateResponse(HttpStatusCode.OK, log);
        //    }
        //}
        private snugbusEntities1 db = new snugbusEntities1();

        [HttpPost]
        // POST: api/Registrations
        //[ResponseType(typeof(Registration))]
        public IHttpActionResult PostRegistration(Registration registration)
        {
            /* if (!ModelState.IsValid)
             {
                 return BadRequest(ModelState);
             }*/
            Registration userTable = new Registration();
            userTable.First_Name = registration.First_Name;
            userTable.User_name = registration.User_name;
            userTable.Email = registration.Email;
            userTable.Password = registration.Password;

            userTable.Age = registration.Age;
            userTable.Gender = registration.Gender;
            userTable.Phone_Number = registration.Phone_Number;

            db.Registrations.Add(userTable);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = registration.Registration_Id }, registration);
        }
        //    [HttpGet]
        //    public IHttpActionResult Login(string Email, string Password)
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            return BadRequest(ModelState);
        //        }
        //        var isValidUser = false;
        //        var user = db.Registrations.Where(w => w.Email == Email && w.Password == Password).FirstOrDefault();
        //        if (user != null)
        //            isValidUser = true;

        //        var model = new
        //        {
        //            IsValidUser = isValidUser,
        //            UserId = user != null ? user.Registration_Id : 0,
        //            UserName = user != null ? user.First_Name : ""
        //        };
        //        return Ok(model);
        //    }
        //}
    }
}

                    
            
