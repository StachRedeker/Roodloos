$(() => {
	setTimeout(adjustClasses, 10)
	$(".container").on('click', "#cijferslaatstbehaalderesultaten-uitgebreideweergave", () => {
		setTimeout(adjustClasses, 10)
	});

	$(".container").on('click', '[ng-click="ctrl.onLaatsteCijfersClick()"]', () => {
		setTimeout(adjustClasses, 10)
	});
})

async function adjustClasses() {
	if ($(".loading-overlay").css("display") != "none" || ($("#cijferoverzichtgrid").hasClass("cijfers-k-grid") && $(".grade").length == 0)) {
		setTimeout(adjustClasses, 10)
	}
	$(".insufficient").removeClass("insufficient");
	$(".onvoldoende").removeClass("onvoldoende");
}
