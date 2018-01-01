// JScript File

// JScript File

var ErrStr = "";
var ServiceUrl = "";
var RedirectUrl = "";
var ToMailIds = "";
var CCMailIds = "";
var BCCMailIds = "";
var Subject = "";

var CusQuery ,  CusName , CusMailId , CusCmpName , CusAdd , CusMobNo;

GetConfigValue()

function GetConfigValue()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            try{
                xmlDoc=xmlhttp.responseXML
                try{
                ServiceUrl = xmlDoc.getElementsByTagName("ServiceUrl")[0].childNodes[0].nodeValue
                }catch(e){}
                try{
                RedirectUrl = xmlDoc.getElementsByTagName("RedirectUrl")[0].childNodes[0].nodeValue
                }catch(e){}
                try{
                ToMailIds = xmlDoc.getElementsByTagName("ToMailIds")[0].childNodes[0].nodeValue
                }catch(e){}
                try{
                CCMailIds = xmlDoc.getElementsByTagName("CCMailIds")[0].childNodes[0].nodeValue
                }catch(e){}
                try{
                BCCMailIds = xmlDoc.getElementsByTagName("BCCMailIds")[0].childNodes[0].nodeValue
                }catch(e){}
                try{
                Subject = xmlDoc.getElementsByTagName("Subject")[0].childNodes[0].nodeValue
                }catch(e){}
            }catch(e){alert(e.description)}
        }
    }
    xmlhttp.open("GET", "RS/ServiceConfig.xml", true);
    xmlhttp.send();
}

function FunSendMail()
{

    //GetConfigValue()
    ErrStr = ""

    try{

        CusQuery = document.getElementById("txtCusQuery").value

        }catch(e){CusQuery = ""}

    try{

        CusName = document.getElementById("txtCusName").value

        }catch(e){CusName = ""}

    try{

        CusMailId = document.getElementById("txtCusMailId").value

        }catch(e){CusMailId = ""}       

    try{

        CusCmpName = document.getElementById("txtCusCmpName").value

        }catch(e){CusCmpName = ""}       

    try{

        CusAdd = document.getElementById("txtCusAdd").value

        }catch(e){CusAdd = ""}       

    try{

        CusMobNo = document.getElementById("txtCusMobNo").value

        }catch(e){CusMobNo = ""} 


    if (CusQuery == '' )

        ErrStr = ErrStr + 'Your Query Cannot Be Empty \n'

    if (CusName == '' )

        ErrStr = ErrStr + 'Your Name Cannot Be Empty \n'       



    if (CusMailId == '' )

        ErrStr = ErrStr + 'Your MailId Cannot Be Empty \n'       
        /*        
    if (CusQuery == '' )

        ErrStr = ErrStr + 'Your Query Cannot Be Empty \n'       

    if (CusAdd == '' )

        ErrStr = ErrStr + 'Your Query Cannot Be Empty \n'       

        */

    if (CusMobNo == '' )

        ErrStr = ErrStr + 'Your Mobile No Cannot Be Empty \n'       

   

    if(ErrStr =='')
    {

       validateEmail(CusMailId)

       ValidateMobNo(CusMobNo)

    }   

    if(ErrStr !='')
    {
        alert(ErrStr);
        return
    }
    PrepareMailContent()
}

function PrepareMailContent()
{
    var HtmlContent = '<dvi><table style="border:1px solid #ccc;padding:10px"><tr><td>'

    HtmlContent = HtmlContent + '<table>'

    HtmlContent = HtmlContent + '<tr><td>Describe Your Buying Requirements in Detail</td></tr>'

    HtmlContent = HtmlContent + '<tr><td><textarea style="width: 380px; height: 120px;" readonly="readonly" text="'+CusQuery+'" name="Description" rows="7" cols="5">'+CusQuery+'</textarea></td></tr>'

    HtmlContent = HtmlContent + '<tr><td align="center">Your Contact Information</td></tr>'

    HtmlContent = HtmlContent + '</table>'

    HtmlContent = HtmlContent + '<table>'

    HtmlContent = HtmlContent + '<tr><td>Your Name</td><td><input id="Text1" readonly="readonly" value="'+CusName+'" type="text" style="width: 274px;" /></td></tr>'

    HtmlContent = HtmlContent + '<tr><td>Your Mail</td><td><input id="Text2" readonly="readonly" value="'+CusMailId+'" type="text" style="width: 274px;" /></td></tr>'

    HtmlContent = HtmlContent + '<tr><td>Company Name</td><td><input id="Text3" readonly="readonly" value="'+CusCmpName+'" type="text" style="width: 274px;" /></td></tr>'

    HtmlContent = HtmlContent + '<tr><td>Address</td><td><textarea style="width: 274px; height: 70px;" readonly="readonly" text="'+CusAdd+'" name="Description" rows="7" cols="5">'+CusAdd+'</textarea></td></tr>'

    HtmlContent = HtmlContent + '<tr><td>Mobile Number</td><td><input id="Text4" readonly="readonly" value="'+CusMobNo+'" type="text" style="width: 274px;" /></td></tr>'

    HtmlContent = HtmlContent + '</table>'
    
    HtmlContent = HtmlContent +'<table><tr><td><br><img src=\"cid:Pic1\" width="350px"  ></td></tr></table>'
    
    HtmlContent = HtmlContent + '</td></tr></table>'

    HtmlContent = HtmlContent + '</div>'
    SendMail(HtmlContent)
    //SendNewMail(HtmlContent)

}
function SendNewMail(HtmlContent)
{
    document.getElementById("DivProc").style.display = "block"
    var NewSubject = Subject + CusName + ' - ' + document.getElementById("Spn_title").innerText
    var Query= ''
    if(document.getElementById("Is_SendCopy").checked == true)
        Query = "Content="+HtmlContent+"&Name="+CusName+"&CusMailId="+CusMailId+"&ToMialIds="+ToMailIds+"&CCMialIds="+CCMailIds+"&BCCMialIds="+BCCMailIds+"&Subject="+NewSubject+""
    else    
        Query = "Content="+HtmlContent+"&Name="+CusName+"&CusMailId=&ToMialIds="+ToMailIds+"&CCMialIds="+CCMailIds+"&BCCMialIds="+BCCMailIds+"&Subject="+NewSubject+""
        $(document).ready(function () {
            // SayHello returns a string we want to display.  Examples A, B and C show how you get the data in native
            // format (xml wrapped) as well as in JSON format.  Also how to send the parameters in form-encoded format,
            // JSON format and also JSON objects.  To get JSON back you need to send the params in JSON format.
            // Example A - call a function that returns a string.
            // Params are sent as form-encoded, data that comes back is text
            $.ajax({
                type: "POST",
                url: ServiceUrl,
                data: Query, // the data in form-encoded format, ie as it would appear on a querystring
                contentType: "application/x-www-form-urlencoded; charset=UTF-8", // if you are using form encoding, this is default so you don't need to supply it
                dataType: "text", // the data type we want back, so text.  The data will come wrapped in xml
                success: function (data) {
                Result(data)
                    $("#searchresultsA").html(data); // show the string that was returned, this will be the data inside the xml wrapper

                }
            });
        });
        if (window.DOMParser)
        {
            alert('Your query submitted successfully, we will get back you soon.')
            window.location.replace(RedirectUrl)
        }
}
function Result(data)
{
document.getElementById("DivProc").style.display = "none"
    if (window.DOMParser)
    {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(data,"text/xml");
    }
    else // Internet Explorer
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async=false;
        xmlDoc.loadXML(data); 
    }
    if(xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue == "Mail Sended")
    {
        window.location.replace(RedirectUrl)
    }
    else
        alert('Unable to send your query, please try after some time.')
}

function SendMail(HtmlContent)
{
    var xmlhttp;
    if (HtmlContent=="")
    {
        //document.getElementById("txtHint").innerHTML="";
        return;
    }
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            
            document.getElementById("DivProc").style.display = "none"
            xmlDoc=xmlhttp.responseXML
            if(xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue == "Mail Sended")
            {
                window.location.replace(RedirectUrl)
            }
            else
                alert('Unable to send your query, please try after some time.')
                //window.location.assign(window.location.hostname)
        }
    }
    var NewSubject = Subject + CusName + ' - ' + document.getElementById("Spn_title").innerText
    document.getElementById("DivProc").style.display = "block"
    /*
    if(document.getElementById("Is_SendCopy").checked == true)
        xmlhttp.open("GET","RS/RS_SendMail.ashx?Query="+HtmlContent+"&Name="+CusName+"&CusMailId="+CusMailId+"",true);
    else
        xmlhttp.open("GET","RS/RS_SendMail.ashx?Query="+HtmlContent+"&Name="+CusName+"&CusMailId=",true);            
    */
    try{
        
        xmlhttp.open("POST", ServiceUrl, true);
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        if(document.getElementById("Is_SendCopy").checked == true)
        {
            xmlhttp.send("Content="+HtmlContent+"&Name="+CusName+"&CusMailId="+CusMailId+"&ToMialIds="+ToMailIds+"&CCMialIds="+CCMailIds+"&BCCMialIds="+BCCMailIds+"&Subject="+NewSubject+"");
        }
        else
        {
            xmlhttp.send("Content="+HtmlContent+"&Name="+CusName+"&CusMailId=&ToMialIds="+ToMailIds+"&CCMialIds="+CCMailIds+"&BCCMialIds="+BCCMailIds+"&Subject="+NewSubject+"");                
        }
        
        /*
        alert('a')
        document.getElementById("DivProc").style.display = "none"
        alert('b')
        xmlDoc=xmlhttp.responseXML
        if(xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue == "Mail Sended")
        {
            window.location.replace(RedirectUrl)
        }
        else
            alert('Unable to send your query, please try after some time.')
        */    
    }catch(e){alert(e.description)}        
}

function validateEmail(email)
{
    //var x=document.forms["myForm"]["email"].value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
    {
        //alert("Not a valid e-mail address");
        ErrStr = ErrStr + "Not a valid e-mail address \n"
        return false;
    }
}

function ValidateMobNo(inputtxt) 
{ 
    var x = inputtxt
    if(isNaN(x)|| x.indexOf(" ")!=-1){
        //alert("Enter numeric value");return false; 
        ErrStr = ErrStr + "Not a valid Phone No \n"
        return
    }
    if (x.length != 8 && x.length != 10 ){
        //alert("enter 10 or 8 characters"); return false;
        ErrStr = ErrStr + "Not a valid Phone No \n"
    }
//        if (x.charAt(0)!="9" || x.charAt(0)!="2"){
//                alert("it should start with 9 or 2 ");
//                return false
//           }
} 
function FunAddItem2Enqiry(Obj)
{
    if(document.getElementById("Spn_title").innerText == '')
        document.getElementById("Spn_title").innerText = 'Enquiry About - ' + Obj 
    else
        document.getElementById("Spn_title").innerText = document.getElementById("Spn_title").innerText + ' , ' + Obj
}
function FunCrossDomainTest(HtmlContent)
{
    var xmlhttp;
    if (HtmlContent=="")
    {
        //document.getElementById("txtHint").innerHTML="";
        return;
    }
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            
            document.getElementById("DivProc").style.display = "none"
            xmlDoc=xmlhttp.responseXML
                        alert(xmlhttp.responseText)
            alert(xmlhttp.responseXML)

            if(xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue == "Mail Sended")
            {
                window.location.replace(RedirectUrl)
            }
            else
                alert('Unable to send your query, please try after some time.')
                //window.location.assign(window.location.hostname)
        }
    }
    document.getElementById("DivProc").style.display = "block"
    /*
    if(document.getElementById("Is_SendCopy").checked == true)
        xmlhttp.open("GET","RS/RS_SendMail.ashx?Query="+HtmlContent+"&Name="+CusName+"&CusMailId="+CusMailId+"",true);
    else
        xmlhttp.open("GET","RS/RS_SendMail.ashx?Query="+HtmlContent+"&Name="+CusName+"&CusMailId=",true);            
    */
    try{
        
        xmlhttp.open("POST", "http://amson.co.in/AmsonEnquiryMailService/MailService.asmx/HelloWorldInput", true);
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xmlhttp.send("ip=jjj");
//        alert('a')
        //alert(xmlhttp.responseText)
        //alert(xmlhttp.responseXML)
        /*
        return
        if(document.getElementById("Is_SendCopy").checked == true)
        {
            xmlhttp.send("ip=jjj");
        }
        else
        {
            xmlhttp.send("Content="+HtmlContent+"&Name="+CusName+"&CusMailId=&ToMialIds="+ToMailIds+"&CCMialIds="+CCMailIds+"&BCCMialIds="+BCCMailIds+"&Subject="+Subject+"");                
        }
        
        
        alert('a')
        document.getElementById("DivProc").style.display = "none"
        alert('b')
        xmlDoc=xmlhttp.responseXML
        if(xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue == "Mail Sended")
        {
            window.location.replace(RedirectUrl)
        }
        else
            alert('Unable to send your query, please try after some time.')
        */    
    }catch(e){alert(e.description)}        
}