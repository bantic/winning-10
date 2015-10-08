import Ember from 'ember';
const { $, computed, run } = Ember;

export default Ember.Component.extend({
  distance: 600,

  url: '',

  degrees: computed('distance', 'scrollTop', function() {
    console.log('updating degrees!');
    const distance = this.get('distance'),
          scrollTop = this.get('scrollTop');
    return 360 * ((scrollTop % distance) / distance);
  }),

  didInsertElement() {
    const guid = Ember.guidFor(this);
    $(window).on(`scroll.spinning-image-${guid}`,
                 run.bind(this, 'updateScroll'));
  },

  updateScroll() {
    console.log('updateScroll!');
    this.set('scrollTop', $(window).scrollTop());
  }
});
