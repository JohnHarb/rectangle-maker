var count = 0;
$("#hidden").hide();

function addRectangle(e)
{
  e.preventDefault();
  var top = $("#top").val();
  console.log((top));
  var left = $("#left").val();
  console.log((left));
  var red = $("#red").val();
  console.log((red));
  var green = $("#green").val();
  console.log((green));
  var blue = $("#blue").val();
  console.log((blue));
  var height = $("#height").val();
  console.log((height));
  var width = $("#width").val();
  console.log((width));
  count++;
  console.log((count));

  $("#myarea").append('<div class="rectangle" id= "r'+(count)+'" style="background-color: rgb('+(red)+','+(green)+','+(blue)+');margin-top:'+(top)+'px;margin-left:'+(left)+'px;width:'+(width)+'px;height:'+(height)+'px;">click me!</div>');

  $("#r"+(count)).click(removeRectangle);

  $("#hidden").hide();

  console.log("submited");
}

function removeRectangle(e)
{
  t = e.target.id;
  console.log("click "+ t);
  $("#"+t).remove();
}

function checkError(e)
{
  $("#hidden").show();
}

$("#form1").submit(function(){$("#hidden").hide()});
$("#form1").submit(addRectangle);
