$(window).on('scroll',function() {
    var hT = $('.loc').offset().top,
    hH = $('.loc').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
	
    if (wS > ((hT+hH-wH)-50)){
        // This detaches the scroll so doStuff() won't run more than once
        $(window).off('scroll');
        $('.counting').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');

				$({ countNum: $this.text() }).animate({
					countNum: countTo
				},

					{

						duration: 2000,
						easing: 'linear',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}

					});


			});
    }
});
document.addEventListener('keydown', event => {
	console.log(`User pressed: ${event.key}`);
	event.preventDefault();
	return false;
  });
  
  const inputField = document.getElementById('message');

  document.addEventListener('contextmenu', (e) => e.preventDefault());

  function ctrlShiftKey(e, keyCode) {
	return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }
  
  document.onkeydown = (e) => {
	// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
	if (
	  event.keyCode === 123 ||
	  ctrlShiftKey(e, 'I') ||
	  ctrlShiftKey(e, 'J') ||
	  ctrlShiftKey(e, 'C') ||
	  (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
	)
	  return false;
  };