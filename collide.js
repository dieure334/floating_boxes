/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('collide', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('hitstart', this.collide.bind(this));
 },

 collide: function() {
   let box = document.getElementById('cylinder');
   let position = box.getAttribute('position');
   position.x = Math.random() * 5 * ((Math.random() < 0.5) ? -1 : 1);
   position.y = Math.random() * 9 + (-6);
   position.z = -(Math.random() * 8 + 3);
   box.setAttribute('position', position);
   this.el.setAttribute('visible', false);
   this.el.setAttribute('position', {x: 0, y: 0, z: -1})
 },

});