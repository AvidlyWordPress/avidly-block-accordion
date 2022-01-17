/**
 * Base for accordion.
 * @see https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html
 */
 class Accordion {
	constructor(domNode) {
	  this.buttonEl = domNode;
	
	  const controlsId = this.buttonEl.getAttribute('aria-controls');
	  this.contentEl = document.getElementById(controlsId);
	
	  this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';
	
	  // add event listeners
	  this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
	}
	
	onButtonClick() {
	  this.toggle(!this.open);
	  console.log('click!');
	}
	
	toggle(open) {
	  // don't do anything if the open state doesn't change
	  if (open === this.open) {
	  return;
	  }
	
	  // update the internal state
	  this.open = open;
	
	  // handle DOM updates
	  this.buttonEl.setAttribute('aria-expanded', `${open}`);
	  if (open) {
	  this.contentEl.removeAttribute('hidden');
	  } else {
	  this.contentEl.setAttribute('hidden', '');
	  }
	}
	
	// Add public open and close methods for convenience
	open() {
	  this.toggle(true);
	}
	
	close() {
	  this.toggle(false);
	}
}
	
// Init accordions.
const accordions = document.querySelectorAll('.wp-block-avidly-accordion__trigger');

accordions.forEach((accordionEl) => {
	new Accordion(accordionEl);
});


console.log('accordion found!');