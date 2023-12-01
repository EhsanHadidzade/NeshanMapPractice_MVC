using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Neshan_Practice.Presentation.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Neshan_Practice.Presentation.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        #region Search

        public IActionResult Search()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Save(string latitude,string longitude,string addressValue)
        {
            return View("index");
        }
        #endregion

        #region AddressToLocation
        public IActionResult GeoCoding()
        {
            return View();
        }
        #endregion

        #region LocationToAddress 
        public IActionResult ReverseGeoCoding()
        {
            return View();
        }
        #endregion

        #region Traveling SaleMan
        public IActionResult TravelingSaleMan()
        {
            return View();
        }
        #endregion

        #region ToFind Best Direction Between 2 Points
        public IActionResult BestDirection()
        {
            return View();
        }

        #endregion

        #region To Find User Coordination
        public IActionResult UserLocation()
        {
            return View();
        }
        #endregion

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
