const container = document.querySelector( ".container" );
const cube = container.querySelector( ".cube" );

	const animation = anime( {
	targets: cube,
    scale: 3,
  duration: 2000,
	autoplay: false
} )

window.onscroll = function (e)
{
  const seekValue = window.pageYOffset * 1.2;
  animation.seek( seekValue );
  console.log(seekValue)
}
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene( {
  triggerElement: container,
  duration: 900
} )
  .setPin( cube )
  .addTo( controller );
