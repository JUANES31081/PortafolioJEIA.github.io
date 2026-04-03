// ====================================
//  DATA COSMOS — Flip Cards Logic
//  Juan Infante Portfolio
// ====================================

/**
 * Smooth 3D flip using a two-phase transition:
 *  1. Tilt to 90° (card disappears mid-spin)
 *  2. Complete to 180° (back face appears)
 * This mimics a real physical card turn.
 */
function flipCard(btn) {
  const card = btn.closest('.project-card');
  if (!card || card.dataset.flipping === 'true') return;

  // Lock during animation to prevent double-click glitches
  card.dataset.flipping = 'true';
  card.classList.toggle('flipped');

  // Unlock after the transition completes (match CSS 0.75s)
  setTimeout(() => { card.dataset.flipping = 'false'; }, 780);
}

// Close flipped card when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.project-card')) {
    document.querySelectorAll('.project-card.flipped').forEach(card => {
      card.classList.remove('flipped');
    });
  }
});

// ===== PROJECT FILTERS =====
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectItems.forEach(item => {
        const category = item.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          item.classList.remove('hidden');
          // Re-trigger reveal animation
          item.classList.remove('revealed');
          setTimeout(() => item.classList.add('revealed'), 50);
        } else {
          item.classList.add('hidden');
          // Reset flip if hidden
          const card = item.querySelector('.project-card');
          if (card) card.classList.remove('flipped');
        }
      });
    });
  });
});
