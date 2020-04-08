$(() => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            var d = new Date();
            var m = d.getMonth() + 1;
            $.ajax({
                method: "GET",
                url: `http://api.aladhan.com/v1/calendar?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=2&month=${m}&year=${d.getFullYear()}`
            }).then((data) => {
                console.log(data)
            })

        })

    }
    $("#idablu").on("click", () => {
        $("#main").addClass("d-none");
        $("#prayer").addClass("d-none");
        $("#wudu").removeClass("d-none");
        return false;
    });
    $("#home").on("click", () => {
        $("#main").removeClass("d-none");
        $("#prayer").addClass("d-none");
        $("#wudu").addClass("d-none");
        return false;
    });
    $("#pray").on("click", () => {
        $("#main").addClass("d-none");
        $("#prayer").removeClass("d-none");
        $("#wudu").addClass("d-none");
        return false;
    });

})

