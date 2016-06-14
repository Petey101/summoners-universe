this.tooltip = function(){		
	$(".tooltips").hover(function(e){											  
		this.t = this.title;
		this.title = "";								  
		$("body").append("<div class = 'item-tooltip'><br><div class='container'><div class='row'>"+ this.t +"</div></div></div>");
    },
	function(){
		this.title = this.t;		
		$(".item-tooltip").remove();
    });		
};
$(document).ready(function(){
	tooltip();
});