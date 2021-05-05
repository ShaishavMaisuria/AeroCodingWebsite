// this is request to json data in order to display on the ui 
// mainly used for AJAX requirement -> 1
$(document).ready(function() {
	$("#tabs").accordion({collapsible:true,
		heightStyle:"content"});

	$.ajax({
		type: "get",
		url: "codeJam.json",
		beforeSend: function() {
			$("#rules").html("Loading... codeJam Rules");
		},
		timeout: 10000,
		error: function(json, status, error) {
			alert("Error: " + json.status + " - " + error);
		},
		dataType: "json",
		success: function(data) {
			$("#rules").html("");
			$.each(data,function(){
				
				$.each(this,function(key,value){
					var x="";
					for(i=0;i< value.content.length;i++){
						x+="<li>"+value.content[i]	+"</li>";
					}
					$("#rules").append("<h3> "+value.Header+"</h3>" + 
						"<ol>"+x+"</ol>"
						+"<hr>");
				});
			});
		}
	});

// this is request to json data in order to display on the ui 
// mainly used for AJAX requirement -> 1
$.ajax({
	type: "get",
	url: "codeJamGuidelines.json",
	beforeSend: function() {
		$("#guidelines").html("Loading... codeJam Guidelines");
	},
	timeout: 10000,
	error: function(json, status, error) {
		alert("Error: " + json.status + " - " + error);
	},
	dataType: "json",
	success: function(data) {
		$("#guidelines").html("");
		$.each(data,function(){
			
			
			$.each(this,function(key,value){
				var x="";
				for(i=0;i< value.content.length;i++){
					x+="<li>"+value.content[i]	+"</li>";
				}
				$("#guidelines").append("<h3> "+value.Header+"</h3>" + 
					"<ol>"+x+"</ol>"
					+"<hr>");
			});
		});
	}
});
});
