document.documentElement.classList.add('js');

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];


// Header scroll state
const header = $('.header');

const onScroll = () =>
  header && header.classList.toggle('scrolled', scrollY > 24);

onScroll();

addEventListener('scroll', onScroll, {
  passive: true
});


// Mobile navigation
const menuBtn = $('.menu-btn');

if (menuBtn && header) {

  menuBtn.setAttribute('aria-expanded', 'false');

  menuBtn.addEventListener('click', () => {

    const isOpen = header.classList.toggle('open');

    menuBtn.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuBtn.setAttribute(
      'aria-label',
      isOpen ? 'Close menu' : 'Open menu'
    );

  });

}


$$('.navlinks a').forEach(link => {

  link.addEventListener('click', () => {

    header?.classList.remove('open');

    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Open menu');
    }

  });

});


// Reveal animations
const obs = new IntersectionObserver(
  entries =>
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }

    }),
  {
    threshold: .12
  }
);

$$('.reveal').forEach(el => obs.observe(el));


// Gallery filters
$$('.filter').forEach(btn => {

  btn.setAttribute(
    'aria-pressed',
    btn.classList.contains('active') ? 'true' : 'false'
  );

  btn.addEventListener('click', () => {

    $$('.filter').forEach(button => {

      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');

    });

    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.dataset.filter;

    $$('.gallery figure').forEach(fig => {

      fig.style.display =
        filter === 'all' || fig.dataset.cat === filter
          ? 'block'
          : 'none';

    });

  });

});
const builder = document.querySelector('[data-builder]');

if (builder) {

  const state = {
    guests: 120,
    season: 1,
    space: 0,
    bar: 1,
    floral: 1
  };


  const fmt = number =>
    '$' + Math.round(number).toLocaleString();


  function calc() {

    state.guests = +$('#guests').value;
    state.season = +$('#season').value;
    state.space = +$('#space').value;
    state.bar = +$('#bar').value;
    state.floral = +$('#floral').value;


    const venue =
      22000 +
      state.space +
      state.season;

    const catering =
      state.guests * 145;

    const bar =
      state.guests *
      (state.bar ? 68 : 42);

    const floral =
      6000 +
      state.floral;

    const planning =
      4800;

    const total =
      venue +
      catering +
      bar +
      floral +
      planning;


    $('#estimate').textContent =
      fmt(total);

    $('#venueCost').textContent =
      fmt(venue);

    $('#cateringCost').textContent =
      fmt(catering);

    $('#barCost').textContent =
      fmt(bar);

    $('#floralCost').textContent =
      fmt(floral);

    $('#planningCost').textContent =
      fmt(planning);

  }


  [
    'guests',
    'season',
    'space',
    'bar',
    'floral'
  ].forEach(id => {

    $('#' + id)?.addEventListener(
      'change',
      calc
    );

  });


  calc();


  $$('.mood').forEach(mood => {

    mood.addEventListener('click', () => {

      $$('.mood').forEach(item =>
        item.classList.remove('active')
      );

      mood.classList.add('active');

      $('#moodName').textContent =
        mood.dataset.mood;

    });

  });

}


// Demo inquiry form
const form = $('#inquiryForm');

if (form) {

  form.addEventListener('submit', event => {

    event.preventDefault();

    $('#formStatus').textContent =
      'Thank you — your concept inquiry has been captured for this portfolio demo.';

    form.reset();

  });

}
