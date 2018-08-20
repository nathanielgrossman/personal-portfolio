$(document).ready(function() {
$(".h2,.h3,.h4,.h5,.navbar-brand").addClass("headline text-dark");
$(".h1,.display-1,.display-3").addClass("headline text-light");
$(".body-text,.nav-link,.dropdown-item,.dropdown-toggle").addClass("text text-dark");
$(".h6").addClass("text");
$("form").children().addClass("text text-dark");
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
