#pragma checksum "G:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\Home\UserLocation.cshtml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "1b93aff494fe0a33d40b5b50abd606dac443796fdf554b2be2cc8b94d54d335c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_UserLocation), @"mvc.1.0.view", @"/Views/Home/UserLocation.cshtml")]
namespace AspNetCore
{
    #line hidden
    using global::System;
    using global::System.Collections.Generic;
    using global::System.Linq;
    using global::System.Threading.Tasks;
    using global::Microsoft.AspNetCore.Mvc;
    using global::Microsoft.AspNetCore.Mvc.Rendering;
    using global::Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "G:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\_ViewImports.cshtml"
using Neshan_Practice.Presentation;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "G:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\_ViewImports.cshtml"
using Neshan_Practice.Presentation.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"1b93aff494fe0a33d40b5b50abd606dac443796fdf554b2be2cc8b94d54d335c", @"/Views/Home/UserLocation.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA256", @"d0cada0c3a2293f2946980334a062b8e39595b5a42f15948c72ad334dc3f807d", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Home_UserLocation : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "G:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\Home\UserLocation.cshtml"
  
    ViewData["Title"] = "UserLocation";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<p>Click the button to get your coordinates.</p>

<button onclick=""getLocation()"">Try It</button>

<p id=""demo""></p>

<script>
var x = document.getElementById(""demo"");

function getLocation() {
    debugger
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = ""Geolocation is not supported by this browser."";
  }
}

function showPosition(po) {
    debugger
  x.innerHTML = ""Latitude: "" + po.coords.latitude + 
  ""<br>Longitude: "" + po.coords.longitude;
}
</script>
");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
