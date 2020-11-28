using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;
using FinalWeb.Models;

namespace FinalWeb.Controllers
{
    public class OTPController : ApiController
    {
        private BusTeamEntities db = new BusTeamEntities();

        [HttpGet]
        public IHttpActionResult VerifyEmail(string email)
        {
            var isValidEmail = db.Registrations.Where(w => w.Email == email).FirstOrDefault();
            if (isValidEmail != null)
            {
                GetOtp(email);
                return Ok("Success");
            }
            else
                return Ok("InvalidUser");
        }

        private async Task<int> GetOtp(string email)
        {
            var user = db.Registrations.Where(w => w.Email == email).FirstOrDefault();

            var otpData = db.OTPs.Where(w => w.Registration_Id == user.Registration_Id).FirstOrDefault();
            if (otpData != null)
            {
                db.OTPs.Remove(otpData);
                db.SaveChanges();
            }

            Random generator = new Random();
            int r = generator.Next(100000, 1000000);
            OTP otp = new OTP();
            otp.Registration_Id = user.Registration_Id;
            otp.OTP1 = r;
            db.OTPs.Add(otp);
            db.SaveChanges();

            SmtpClient smtp = new SmtpClient();
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("BusReservationTeam2020@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Forgot Password";
            mailMessage.Body = "Dear Customer...Your OTP is " + r;
            await Task.Run(() => smtp.SendAsync(mailMessage, null));
            return r;
        }

        private async Task ResendOtp(string email)
        {
            var user = db.Registrations.Where(w => w.Email == email).FirstOrDefault();
            var otpData = db.OTPs.Where(w => w.Registration_Id == user.Registration_Id).FirstOrDefault();

            SmtpClient smtp = new SmtpClient();
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("harikakaja111@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Forgot Password";
            mailMessage.Body = "Dear User,Your OTP is " + otpData.OTP1;
            await Task.Run(() => smtp.SendAsync(mailMessage, null));
        }

        [HttpPost]
        public IHttpActionResult ChangePassword(ChangePasswordModel changePasswordModel)
        {
            var user = db.Registrations.Where(w => w.Email == changePasswordModel.EmailId).FirstOrDefault();
            if (user != null)
            {
                var isOtpValid = db.OTPs.Where(w => w.OTP1 == changePasswordModel.OTP && w.Registration_Id == user.Registration_Id).FirstOrDefault();
                if (isOtpValid != null)
                {
                    user.Password = changePasswordModel.Password;
                    db.Entry(user).State = EntityState.Modified;
                    db.SaveChanges();

                    var otpData = db.OTPs.Where(w => w.Registration_Id == user.Registration_Id && w.OTP1 == changePasswordModel.OTP).FirstOrDefault();
                    if (otpData != null)
                    {
                        db.OTPs.Remove(otpData);
                        db.SaveChanges();
                    }
                    return Ok("Success");
                }
                else
                {
                    return Ok("Invalid OTP.");
                }
            }
            else
                return Ok("Error occured in updating password! Please try again later.");

        }
    }
}
