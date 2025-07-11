function scrollTimeline(direction) {
  const wrapper = document.querySelector('.timeline-wrapper');
  const block = document.querySelector('.year-block');
  const scrollAmount = block.offsetWidth + 20; // ancho del bloque + espacio

  wrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
