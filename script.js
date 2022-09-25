$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  $('#mainListDiv').toggleClass('show_list');
  $('#mainListDiv').fadeIn();
});

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
