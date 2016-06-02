this.tooltip = function(){		
	$(".tooltip").hover(function(e){											  
		this.t = this.title;
		this.title = "";								  
		$("body").append("<p id='tooltip'>"+ this.t +"</p>");
    },
	function(){
		this.title = this.t;		
		$("#tooltip").remove();
    });		
};
$(document).ready(function(){
	tooltip();
});