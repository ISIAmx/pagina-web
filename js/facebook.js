function adaptar() {
    var page = document.createElement("div");
    page.setAttribute("class", "fb-page");
    var width = document.createAttribute("data-width");
    width.value = (window.innerWidth <= 500) ? window.innerWidth - 50 : 500;
    var height = document.createAttribute("data-height");
    height.value = (window.innerHeight <= 600) ? window.innerHeight - 50 : 600;
    var tabs = document.createAttribute("data-tabs");
    tabs.value = "timeline,events";
    var small = document.createAttribute("data-small-header");
    small.value = "false";
    var adapt = document.createAttribute("data-adapt-container-width");
    adapt.value = "false";
    var hide = document.createAttribute("data-hide-cover");
    hide.value = "false";
    var show = document.createAttribute("data-show-facepile");
    show.value = "true";
    var url = "https://www.facebook.com/isia.automatismos";
    var href = document.createAttribute("data-href");
    href.value = url;
    var block = document.createElement("blockquote");
    block.setAttribute("cite",url);
    block.setAttribute("class","fb-xfbml-parse-ignore");
    var a = document.createElement("a");
    a.setAttribute("href",url);
    a.appendChild(document.createTextNode("Ingeniería y Servicios Integrales para Automatización"));
    block.appendChild(a);
    page.setAttributeNode(href);
    page.setAttributeNode(tabs);
    page.setAttributeNode(width);
    page.setAttributeNode(height);
    page.setAttributeNode(small);
    page.setAttributeNode(adapt);
    page.setAttributeNode(hide);
    page.setAttributeNode(show);
    page.appendChild(block);
    document.getElementsByClassName("fb-page-container")[0].appendChild(page);
    
    
    var post = document.createElement("div");
    post.setAttribute("class", "fb-post");
    var urlc = "https://www.facebook.com/isia.automatismos/posts/842711512782147";
    var hrefc = document.createAttribute("data-href");
    hrefc.value = urlc;
    var showc = document.createAttribute("data-show-text");
    showc.value = "true";
    var blockpo = document.createElement("blockquote");
    blockpo.setAttribute("cite", "https://developers.facebook.com/isia.automatismos/posts/842711512782147");
    blockpo.setAttribute("class", "fb-xfbml-parse-ignore");
    var p = document.createElement("p");
    
    p.appendChild(document.createTextNode("Nueva generación de controles"));
    blockpo.appendChild(p);
    
    blockpo.appendChild(document.createTextNode("Publicado por "));
    var pag = document.createElement("a");
    pag.setAttribute("href","https://www.facebook.com/isia.automatismos/");
    
    pag.appendChild(document.createTextNode("Ingeniería y Servicios Integrales para Automatización"));
    blockpo.appendChild(pag);
    
    blockpo.appendChild(document.createTextNode("en&nbsp;"));
    var pag2 = document.createElement("a");
    pag2.setAttribute("href", "https://developers.facebook.com/isia.automatismos/posts/842711512782147");
    
    pag2.appendChild(document.createTextNode("Viernes, 14 de junio de 2019"));
    blockpo.appendChild(pag2);
    post.setAttributeNode(hrefc);
    post.setAttributeNode(showc);
    var widthc = document.createAttribute("data-width");
    widthc.value = width.value;
    post.setAttributeNode(widthc);
    post.appendChild(blockpo);
    document.getElementsByClassName("fb-post-container")[0].appendChild(post);
}
adaptar();
