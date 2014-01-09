var $navBody, $navClose, $navShadow;

$(function(){

  drawerInit();

  $navClose.click(function() {
    $navBody.animate({
      width: 'toggle'
    }, 200);
    $navShadow.fadeToggle(200); 
  });
});

function drawerInit() {
  $navBody = $('.gnav ul');
  $navBody.after('<div class="drawer-shade"></div>');

  $navIcon = $('.drawer-btn');
  $navClose = $('.drawer-btn, .drawer-shade').not(".gnav ul");
  $navShadow = $('.drawer-shade');
}
