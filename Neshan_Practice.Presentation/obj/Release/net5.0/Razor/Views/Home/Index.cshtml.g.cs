#pragma checksum "C:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "881c4e7d234da97b503aa794b9d134b503c19231"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\_ViewImports.cshtml"
using Neshan_Practice.Presentation;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\_ViewImports.cshtml"
using Neshan_Practice.Presentation.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"881c4e7d234da97b503aa794b9d134b503c19231", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"250e3958b61c111cfeef01c79025051b4e2376ae", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Work\Projects\Neshan_Practice\Neshan_Practice.Presentation\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""text-center"">
    <h1 class=""display-4"">Welcome</h1>
    <p>Learn about <a href=""https://docs.microsoft.com/aspnet/core"">building Web apps with ASP.NET Core</a>.</p>
</div>

<a class=""btn btn-outline-info btn-lg"" href=""/home/Search"" onclick=""Vib()""> (بدون استفاده)سرچ روی نقشه</a>
<br />
<br />
<a class=""btn btn-outline-info btn-lg"" href=""/home/GeoCoding"" onclick=""Vib()""> تبدیل آدرس به لوکیشن</a>
<br />
<br />
<a class=""btn btn-outline-info btn-lg"" href=""/home/ReverseGeoCoding"" onclick=""Vib()""> تبدیل لوکیشن به آدرس</a>
<br />
<br />
<a class=""btn btn-outline-info btn-lg"" href=""/home/TravelingSaleMan"" onclick=""Vib()""> فروشنده دوره گرد</a>
<br />
<br />
<a class=""btn btn-outline-info btn-lg"" href=""/home/BestDirection""> بهترین مسیر بین 2 نقطه و محاسبه زمان و مسافت</a>



<script>
    function Vib(){
        debugger
        window.navigator.vibrate(200);

    }</script>
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
