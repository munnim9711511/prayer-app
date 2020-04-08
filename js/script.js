$(() => {

   
    
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

