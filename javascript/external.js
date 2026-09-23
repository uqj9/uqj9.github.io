var webmaps =
[
  ["Google Maps", "https://www.google.com/maps"],
  ["Google Maps allows users to find locations, view geographic information, and get directions between places. It includes geocoding, route calculation, map layers, satellite imagery, distance, and travel-time tools. It is easy to navigate and provides useful information about places and traffic along a route. One disadvantage is that the interface can bevome crowded with tools, labels, and panels."],

  ["Surface Water Quality Segment Viewer", "https://experience.arcgis.com/experience/2af56759478d48c69f0ce1457ca0c80e"],
  ["The surface Water Quality Segment Viewer displays surface water quality segments across Texas. Users can view watershed, stream, and resevoir segments and search for areas of interest. Its tools include address and coordinate search, layers, a legend, navigation, and zoom controls. The map is useful and easy to navigate, althouh the number of tool panels can make the interface feel crowded."]
];
 //user_name = window.prompt("Please enter your name", "Type your name here")
 //document.getElementById("welcome-header").innerHTML = "Hello, welcome " + user_name + "!";
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to promt users toinput a value before entering a page.
  user_name = window.prompt(a,b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";

  return message;
}

function webmap_table()
{
  document.write("<table width=100%>");

  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");

    if (row % 2 ==0)
    {
      document.write("<td>" + webmaps[row][0] + "</td>");
      document.write("<td>" + webmaps[row][1] + "</td>")
    }
    else
    {
      document.write("<td colspan='2'>" + webmaps[row][0] + "</td>");
    }
    document.write("</tr>");
    }
    document.write("</table>");
    return "";
  }
