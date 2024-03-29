// Responsive Nav

$(function() {
  menu = $('nav ul')

  $('#openup').on('click', function(e) {
    e.preventDefault()
    menu.slideToggle()
  })

  $(window).resize(function() {
    var w = $(this).width()
    if (w > 620 && menu.is(':hidden')) {
      menu.removeAttr('style')
    }
  })

  $('nav li').on('click', function(e) {
    var w = $(window).width()
    if (w < 620) {
      menu.slideToggle()
      console.log('toggled')
    }
  })
  $('.open-menu').height($(window).height())
})

// Smooth Scrolling

$('.cf a').on('click', function(event) {
  menu = $('nav ul')
  if (this.hash !== '') {
    event.preventDefault()
    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      300,
      function() {
        window.location.hash = hash
      }
    )
  }
})
