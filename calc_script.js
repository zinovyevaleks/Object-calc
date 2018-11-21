// Калькулятор

function calcPrice() {
    var selectObject = document.getElementById("typeObject").value;
    var selectBuilding = document.getElementById("typeBuilding").value;
    var selectRepair = document.getElementById("typeRepair").value;
    var selectArea = document.getElementById("area").value;
    var selectMaterials = document.getElementById("materials").value;
    var selectDesign = document.getElementById("typeDesign").value;

    var sum = (selectObject * selectBuilding * selectArea * selectRepair * selectMaterials) + (selectArea * selectDesign);
    var result = document.getElementById("result");

    result.innerHTML = sum + " RUB";

};
    calcPrice();

$(document).ready(function() {

    	//E-mail Ajax Send
    	$("form").submit(function() { //Change
    		var th = $(this);
    		$.ajax({
    			type: "POST",
    			url: "mail.php", //Change
    			data: th.serialize()
    		}).done(function() {
    			alert("Thank you!");
    			setTimeout(function() {
    				// Done Functions
    				th.trigger("reset");
    			}, 1000);
    		});
    		return false;
    	});

    });
