( function ( $ ) {
	"use strict";

	var element = document.querySelector( '.element' ),
		popUpEl = document.getElementById( 'my-popup' );
	element.addEventListener( 'click', function () {
		popUpEl.classList.toggle( 'show' );
	} )
})( jQuery );