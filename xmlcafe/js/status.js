function readSettings(file){
  var xmlObj;
  if(window.XMLHttpRequest){
    xmlObj = new XMLHttpRequest();
  } else if(window.ActiveXObject){
    xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    return;
  }
  xmlObj.onreadystatechange = function(){
    if(xmlObj.readyState == 4){
      const arraySettings = xmlObj.responseXML.getElementsByTagName('root');

      document.querySelector('title').innerHTML = arraySettings[0].getElementsByTagName("name")[0].innerHTML;
      document.querySelector('#logo img').src = 'img/' + arraySettings[0].getElementsByTagName("logo")[0].innerHTML;

    }
  }
  xmlObj.open ('GET', file, true);
  xmlObj.send ();
}
readSettings('xml/settings.xml');


      var messageOrder = document.getElementById('messageOrder');
      messageOrder.innerHTML = 'Order №'  + '1' + '<h2>' + 'Awaiting verification' + '</h2>';
      if(statusOrder == 'Awaiting verification') document.getElementById('statusImg').className = 'check';

