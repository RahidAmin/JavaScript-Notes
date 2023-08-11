

// load and unload

window.addEventListener("load",function()
{
    console.log("Load");
});

window.addEventListener("unload",function()
{
    console.log("Unload");
});

window.addEventListener("scroll",function()
{
    console.log("Scroll");
});

window.addEventListener("resize",function()
{
  const width=this.window.outerWidth;
  const hight=this.window.outerHeight;
  console.log(`width:${width},hight:${hight}`);
});
document.querySelector("details").addEventListener("toggle",function(e)
{
    console.log(e.target.open);
})