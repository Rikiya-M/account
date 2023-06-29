$.scrollify({
    section : ".box",
    scrollbars:"false",
    easing: "swing", 
      scrollSpeed: 300, 
    
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
  
        $("#box1").append(pagination);
        $(".pagination a").on("click",$.scrollify.move);
      }
  
    });
  
  
  
  
  
  
    $(".openbtn1").click(function () {
      $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
    });
    
    $("#g-nav a").click(function () {
        $(".openbtn1").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });