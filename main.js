function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}
function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email") 
    const Subject = $("#inp_subject")
    const Message = $("#inp_message")

    if(!$(email).val()) {
        alert("email is required")
    } else if (!$(Subject).val()){
        alert("subject is required")
    }else if (!$(Message).val()){
        alert("message is required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(Subject).val("")
        $(Message).val("")
    }
}
