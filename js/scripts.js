window.addEventListener( "resize", ResizeWindow );
function ResizeWindow ( )
{
  var dataSpyList = [].slice.call (document.querySelectorAll(
    '[data-spy="scroll"]'
  ));
  dataSpyList.forEach ( function( dataSpyElement)
  {
    bootstrap.ScrollSpy.getInstance ( dataSpyElement).refresh ();
  });
}


const hamburgerIcon = document.querySelector("#hamburgerIcon");
hamburgerIcon.addEventListener("click", function () {
  if (hamburgerIcon.classList.contains("open")) {
    hamburgerIcon.classList.remove("open");
  } else {
    hamburgerIcon.classList.add("open");
  }
});
