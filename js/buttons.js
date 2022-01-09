function OpenWindow(als)
{
    var height = 100;
    var width = 800;
    var left = (screen.width/2) - (width/2);
    var top = (screen.height/4) * 3;
    window.open("pages/zadanie" + als + ".html");
}

function OpenCode(als)
{
    var left = (screen.width/2)-(900/2);
    var top = (screen.height/2)-(900/2);
    window.open("pages/zadanie" + als + "_kod.html", "", "height=900","width=900", "top = " + top + ", left = " + left);
}

function Zadanie5()
{
    window.open("zadanie5/index_alsughari.html");
}
