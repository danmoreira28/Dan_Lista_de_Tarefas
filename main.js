$(document).ready(function() {
});

$('form').on("submit", function(e){
    e.preventDefault();
    const inputAtividade = $("#atividade").val(); 
    const lista = $("<ul></ul>");

    if ($(".lista-atividades").length === 0) {
        $(".conteiner").append(lista);
    } else {
        lista = $(".lista-atividades");
    }

    const novoItem = $("<li></li>").text(inputAtividade);
    lista.append(novoItem);
    $("#atividade").val("");
});

$(".conteiner").on("click", "li", function() {
    $(this).toggleClass("risco");
});



