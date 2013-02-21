FruitMachine.module('pineapple', {

	onInitialize: function() {
		var self = this;
		this.els = {};

		// Bind the view context to this function.
		this.onFormSubmitBound = function() { self.onFormSubmit.apply(self, arguments); };
	},

	onSetup: function() {
		var el = this.el();
		this.els.form = el.querySelector('.module-pineapple_form');
		this.els.input = el.querySelector('.module-pineapple_input');
		this.els.form.addEventListener('submit', this.onFormSubmitBound);
	},

	onTeardown: function() {
		this.els.form.removeEventListener('submit', this.onFormSubmitBound);
		this.els = null;
	},

	onFormSubmit: function(event, target) {
		event.preventDefault();
		this.trigger('formsubmit', this.els.input.value);
		this.els.input.value = '';
	}
});