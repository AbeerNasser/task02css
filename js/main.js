
function creatPlaceImg(id,placeName,placImg){
	var content = '<div><div class="row mt-md-5 mb-5">'+
		'<!-- first place --><div class="col-md-6 col-12 text-center mb-3 mb-md-0" id="'+id+'">'+
		'<div class="card"><div class="card-header"><img src="'+placImg+'"  class="rounded w-100">'+
		'</div><div class="card-body"><p class="font-weight-bold">'+placeName+'</p><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-danger">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-success">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><p>Put here the place info with...</p></div>'+ 
		'<div class="card-footer"><button type="button" class="btn btn-block" id="displayBtn-1">Display Place</button>'+
		'</div></div></div><!-- second place --><div class="col-md-6 col-12 text-center" id="'+id+'">'+
		'<div class="card"><div class="card-header"><img src="'+placImg+'"  class="rounded w-100">'+
		'</div><div class="card-body"><p class="font-weight-bold">'+placeName+'</p><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-danger">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-success">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><p>Put here the place info with...</p>'+
		'</div><div class="card-footer"><button type="button" class="btn btn-block" id="displayBtn-2">Display Place</button>'+
		'</div></div></div></div><div class="row mt-md-5 mb-5"><!-- third place -->'+
		'<div class="col-md-6 col-12 text-center mb-3 mb-md-0 " id="'+id+'"><div class="card">'+
		'<div class="card-header"><img src="'+placImg+'"  class="rounded w-100"></div><div class="card-body">'+
		'<p class="font-weight-bold">'+placeName+'</p><div><span class="badge badge-primary">00000$</span>'+
		'<span class="badge badge-danger">00000$</span><span class="badge badge-warning">00000$</span>'+
		'</div><div><span class="badge badge-primary">00000$</span><span class="badge badge-success">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><p>Put here the place info with...</p>'+
		'</div><div class="card-footer"><button type="button" class="btn btn-block" id="displayBtn-3">Display Place</button>'+
		'</div></div></div><!-- 4 place --><div class="col-md-6 col-12 text-center" id="'+id+'">'+
		'<div class="card"><div class="card-header"><img src="'+placImg+'"  class="rounded w-100">'+
		'</div><div class="card-body"><p class="font-weight-bold">'+placeName+'</p><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-danger">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-success">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><p>Put here the place info with...</p>'+
		'</div><div class="card-footer"><button type="button" class="btn btn-block" id="displayBtn-4">Display Place</button>'+
		'</div></div></div></div><div class="row mt-md-5 mb-5"><!-- 5 place --><div class="col-md-6 col-12 text-center mb-3 mb-md-0">'+
		'<div class="card"><div class="card-header"><img src="'+placImg+'"  class="rounded w-100">'+
		'</div><div class="card-body"><p class="font-weight-bold">'+placeName+'</p><div>'+
		'<span class="badge badge-primary">00000$</span><span class="badge badge-danger">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><div><span class="badge badge-primary">00000$</span>'+
		'<span class="badge badge-success">00000$</span><span class="badge badge-warning">00000$</span>'+
		'</div><p>Put here the place info with...</p></div><div class="card-footer">'+
		'<button type="button" class="btn btn-block" id="displayBtn-5">Display Place</button></div></div></div>'+
		'<!--6 place --><div class="col-md-6 col-12 text-center"><div class="card"><div class="card-header">'+
		'<img src="'+placImg+'"  class="rounded w-100"></div><div class="card-body"><p class="font-weight-bold">'+placeName+'</p>'+
		'<div><span class="badge badge-primary">00000$</span><span class="badge badge-danger">00000$</span>'+
		'<span class="badge badge-warning">00000$</span></div><div><span class="badge badge-primary">00000$</span>'+
		'<span class="badge badge-success">00000$</span><span class="badge badge-warning">00000$</span>'+
		'</div><p>Put here the place info with...</p></div><div class="card-footer">'+
		'<button type="button" class="btn btn-block" id="displayBtn-6">Display Place</button>'+
		'</div></div></div></div></div>';

	return content;
}
var onPlace = document.querySelectorAll("div[id^='cont-']").length;
	var newID = onPlace+1;
	var placeName = "Place Name"+newID ;
	
$("#radio1").change(function(){
	// alert("You entered p1!");
	$("#placesImg").remove();
	// $("#placesImg").append(creatPlaceImg(1,"placeName","placImg"));
    var placImg = "images/5.jpg";
	$("#search").after(creatPlaceImg(newID,placeName,placImg));
});
$("#radio2").change(function(){
    $("#placesImg").remove();
    var placImg = "images/8.jpg";
	$("#search").after(creatPlaceImg(newID,placeName,placImg));
});

// $('.chk').change(function(){
// 	if($('.chk:checked').length==0){
// 		$('.p_element').show(); //Show all,when nothing is checked
// 	}else{
// 		$('.p_element').hide();
// 		$('.chk:checked').each(function(){
// 			$('#'+$(this).attr('data-ptag')).show();
// 		});
// 	  }
	
// });

// $(".chk").click(function () {
// 	if ($(this).is(":checked")) {
// 		$(".disp2,intro").show();
// 		$(".disp1").hide();
// 	} else {
// 		$(".disp2,intro").hide();
// 		$(".disp1").show();
// 	}
// });

// $('#check1').change(function(){
//     $('div').hide(".disp1");
//     $('div').show(".intro,.disp2");
//   });
// $("#check1").change(function(){
// 	$("div").remove(".disp1");
// });
// $("#check2").change(function(){
// 	$("div").remove(".intro");
// });
// $("#check3").change(function(){
// 	$("div").remove(".intro,.disp1");});

// if ($("#check1").val() != '' || $("#check2").val() != '' || $("#check3").val() != '' || $("#check4").val() != '') {
// 	$("div").filter(".intro");
// } else if ( $("#check1").val() != '' && $("#check2").val() != '') {
// 	$("div").filter(".disp1");
// } else if ( $("#check1").val() != '' && $("#check3").val() != '') {
// 	$("div").filter(".disp2");
// } else if ( $("#check1").val() != '' && $("#check4").val() != '') {
// 	$("div").filter(".intro");
// } else if ( $("#check1").val() != '' && $("#check2").val() != '' && $("#check3").val() != '') {
// 	$("div").filter(".disp1");
// } else if ( $("#check1").val() != '' && $("#check2").val() != '' && $("#check4").val() != '') {
// 	$("div").filter(".disp2");
// } else if ( $("#check1").val() != '' && $("#check3").val() != '' && $("#check4").val() != '') {
// 	$("div").filter(".intro");
// } else {
//     $("div").filter(".intro ,.disp1 ,.disp2 ");
// }


 var dispBtn = document.querySelectorAll("button[id^='displayBtn-']") ;
 for(var i=0; i<=dispBtn.length ;i++){
	var currentBtn = dispBtn[i];
	currentBtn.addEventListener('click',function(e){
		e.preventDefault();
		window.location.href = 'onePlace.html';
	});
 }





// if($(":checkbox")[0].checked= true) {
// 	alert(1);
// }
 
//   var $radios = $('input[name="radio"]');
//   $radios.change(function() {
// 	var $checked = $radios.filter(function() {
// 	  return $(this).prop('checked');
// 	});
// 	// Output the value of the checked radio
// 	console.log($checked.val());
//   });
//   $radios.change(function() {
// 	var $checked = $radios.filter(':checked');
// 	console.log($checked.val());
//   });
// if ( $('.chk')[0].checked = true)  {
//   alert(1);}
/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	// $(".chk:checked").each(function() {
	// 	alert("You have selected " );	
	// });

