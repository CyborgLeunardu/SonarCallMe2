var n = document.getElementById("nvoip_callme_modal");

function nvoip_callmeLoad() {
    changeModal();
    $(document).ready(function () {
        $('[data-bs-toggle="popover"]').popover({});
    });

    setTimeout(function () {
        $("#nvoip_callme_div-popover").popover("show");
    }, 1200);

    $("#nvoip_callme_view-schedule").hide();
    $("#nvoip_callme_view-msg").hide();
    $("#nvoip_callme_section-flux").hide();
    $("#call-success").hide();
    $("#nvoip_callme_modal-call-failed").hide();
    $("#nvoip_callme_modal-call-success").hide();
    $("#nvoip_callme_modal-callNow-success").hide();
    $("#nvoip_callme_modal-schedule-success").hide();
    $("#time").hide();
    $("#date").hide();
    document.getElementById("time").classList.add("invisible");
    document.getElementById("date").classList.add("invisible");
    var today = new Date().toISOString().split("T")[0];
    document.getElementsByName("date")[0].setAttribute("min", today);
    $(".nvoip_callme_btn-now").removeClass("nvoip_callme_btn-schedule");
    $(".nvoip_callme_input").removeClass("nvoip_callme_phone_scheduled");

    nvoip_callmeEnter();
}

function nvoip_callmeVerifyPhoneNumber() {
    var fieldNumber = document.getElementById("phone");
    var number = fieldNumber.value
        .replace(" ", "")
        .replace("(", "")
        .replace(")", "")
        .replace("-", "")
        .replace("+", "");

    if (number.length == 9) {
        // fn
        $("#phone").mask("(00) 0000-00000");
    }

    if (number.length == 10) {
        // mn
        $("#phone").mask("(00) 00000-0000");
    }

    if (number.length < 8) {
        fieldNumber.style.borderColor = "red";
        $("#phone").unmask();
    } else {
        fieldNumber.style.borderColor = "";
    }
    nvoip_callmePutCursorAtEndOfInput();
}

function nvoip_callmeEnter() {
    const inputCall = document.querySelector("#phone");
    const nome = document.querySelector("#nvoip_callme_input-name");
    const email = document.querySelector("#nvoip_callme_input-email");

    inputCall.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
            nvoip_callmeVerifyPhoneField();
        }
    });

    nome.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
            nvoip_callmeVerifyMsgField();
        }
    });

    email.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            e.preventDefault();
            nvoip_callmeVerifyMsgField();
        }
    });
}

function changeModal() {
    $("#modal").on("show", function () {
        $(this).find(".modal-body").css({
            //    width:'auto', //probably not needed
            //    height:'auto', //probably not needed
            //    'max-height':'100%'
        });
    });
}

function nvoip_callmeVerifyPhoneField() {
    if ($("#phone").hasClass("nvoip_callme_phone_now")) {
        console.log("ENTROU NO IF DO VERIFY CALL");

        nvoip_callmeVerifyCallNow();
    } else {
        console.log("ENTROU NESSE ELSE AQUI?");
        nvoip_callmeVerifyScheduledCall();
    }
}

function nvoip_callmePutCursorAtEndOfInput() {
    var v = document.getElementById("phone").value;

    $("#phone").focus().val("").val(v);
}

function nvoip_callmeAddEventListeners() {
    var div_modal = document.getElementById("nvoip_callme_modal");
    div_modal.addEventListener("shown.bs.modal", function () {
        $("#nvoip_callme_div-popover").popover("hide");
        $("#nvoip_callme_div-popover").hide();
    });
    div_modal.addEventListener("hidden.bs.modal", function () {
        $("#nvoip_callme_div-popover").show();
        $("#nvoip_callme_div-popover").popover("show");

        nvoip_callmeResetFlux();
        nvoip_callmeResetModal();
    });

    document
        .getElementById("nvoip_callme_input-message")
        .addEventListener("keyup", function () {
            if (
                this.value.trim().length <= 250 &&
                this.value.trim().length > 0
            ) {
                this.style.borderColor = "";
            } else {
                this.style.borderColor = "red";
            }
        });
    }


function nvoip_callmeCallScreen() {
    nvoip_callmeResetNumberInput();
    nvoip_callmeScheduleScreenOff();

    // AQUI

    $("#phone")
        .addClass("nvoip_callme_phone_now")
        .removeClass("nvoip_callme_phone_scheduled ");

    var btnCallScreen = document.getElementById("nvoip_callme_btn-call-screen");
    var btnMsgScreen = document.getElementById(
        "nvoip_callme_btn-message-screen"
    );
    var btnScheduleScreen = document.getElementById(
        "nvoip_callme_btn-schedule-screen"
    );
    var btn = document.getElementById("nvoip_callme_call-btn");

    $("#phone")
        .addClass("nvoip_callme_btn-now")
        .removeClass("nvoip_callme_btn-schedule");

    $(".nvoip_callme_btn-schedule")
        .addClass("nvoip_callme_btn-now")
        .removeClass("nvoip_callme_btn-schedule");

    // Mostrando novamente a div de mensagem de erro ao voltar para a tela de call
    document.getElementById("nvoip_callme_div-error-message").style.display =
        "";
    btn.innerHTML = "Me ligue agora";
    btn.value = "Me ligue agora";

    btnCallScreen.disabled = true;

    setTimeout(function () {
        btnMsgScreen.disabled = false;
        btnScheduleScreen.disabled = false;
    }, 100);

    $("#nvoip_callme_view-call").stop();
    $("#nvoip_callme_view-msg").fadeOut(100);
    $("#nvoip_callme_view-call").fadeOut(100);
    setTimeout(function () {
        $("#nvoip_callme_view-call").fadeIn(100);
    }, 100);
}

function getValue() {
    nvoip_callmeScheduleScreen();
}

function nvoip_callmeScheduleScreen() {
    document.getElementById("time").classList.remove("invisible");
    document.getElementById("date").classList.remove("invisible");

    var mainTextCall = document.getElementById("nvoip_callme_main-text-call");
    var btn = document.getElementById("nvoip_callme_call-btn");

    mainTextCall.innerHTML =
        "Quer usar os recursos da Nvoip? <br> Agende uma ligação conosco!";
    btn.innerHTML = "Me ligue depois";
    btn.value = "Me ligue depois";

    document.querySelector(".nvoip_callmeDT").classList.remove("invisible");
    document.querySelector(".nvoip_callmeTime").classList.remove("invisible");
}

function nvoip_callmeScheduleScreenOff() {
    var mainTextCall = document.getElementById("nvoip_callme_main-text-call");

    mainTextCall.innerHTML =
        "Quer usar os recursos da Nvoip? <br> Deixe seu telefone que ligaremos para você!";

    document.getElementById("time").classList.add("invisible");
    document.getElementById("date").classList.add("invisible");
}

function nvoip_callmeMessageScreen() {
    nvoip_callmeResetMessageInputs();
    nvoip_callmeResetNumberInput();

    var btnCallScreen = document.getElementById("nvoip_callme_btn-call-screen");
    var btnMsgScreen = document.getElementById(
        "nvoip_callme_btn-message-screen"
    );
    var btnScheduleScreen = document.getElementById(
        "nvoip_callme_btn-schedule-screen"
    );

    // Escondendo mensagem de erro ao trocar para a tela de mensagem
    document.getElementById("nvoip_callme_div-error-message").style.display =
        "none";

    btnMsgScreen.disabled = true;

    setTimeout(function () {
        btnCallScreen.disabled = false;
        btnScheduleScreen.disabled = false;
    }, 100);

    $("#nvoip_callme_view-call").fadeOut(100);
    setTimeout(function () {
        $("#nvoip_callme_view-msg").fadeIn(100);
    }, 100);
}

function nvoip_callmeScheduleScreenUltimate() {
    $(".nvoip_callme_input")
        .removeClass("nvoip_callme_phone_now")
        .addClass("nvoip_callme_phone_scheduled");
    nvoip_callmeResetMessageInputs();
    nvoip_callmeResetNumberInput();

    var btnCallScreen = document.getElementById("nvoip_callme_btn-call-screen");
    var btnMsgScreen = document.getElementById(
        "nvoip_callme_btn-message-screen"
    );
    var btnScheduleScreen = document.getElementById(
        "nvoip_callme_btn-schedule-screen"
    );

    $(".nvoip_callme_btn-now")
        .addClass("nvoip_callme_btn-schedule")
        .removeClass("nvoip_callme_btn-now");

    // Escondendo mensagem de erro ao trocar para a tela de mensagem
    document.getElementById("nvoip_callme_div-error-message").style.display =
        "none";
  

    btnScheduleScreen.disabled = true;

    setTimeout(function () {
        btnCallScreen.disabled = false;
        btnMsgScreen.disabled = false;
    }, 100);

    $("#nvoip_callme_view-call").fadeOut(100);
    $("#nvoip_callme_view-msg").fadeOut(100);
    getValue();
    setTimeout(function () {
        $("#nvoip_callme_view-call").fadeIn(100);
    }, 100);
}

function nvoip_callmeLimitTextArea(value) {
    var quant = 250;
    var resto = 0;
    var total = value.length;
    if (total <= quant) {
        resto = resto + total;
        document.getElementById("nvoip_callme_count").innerHTML =
            resto + "/" + quant;
    } else {
        document.getElementById("nvoip_callme_input-message").value =
            value.substr(0, quant);
    }
}

function nvoip_callmeResetNumberInput() {
    document.getElementById("phone").value = "";
}

function nvoip_callmeResetMessageInputs() {
    document.getElementById("nvoip_callme_input-message").style.borderColor =
        "";
    document.getElementById("nvoip_callme_input-name").style.borderColor = "";
    document.getElementById("nvoip_callme_input-email").style.borderColor = "";
    document.getElementById("nvoip_callme_input-message").value = "";
    document.getElementById("nvoip_callme_input-email").value = "";
    document.getElementById("nvoip_callme_input-name").value = "";
    document.getElementById("nvoip_callme_count").innerHTML = "0/250";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}
//  VALIDAÇÕES E LIMPAR CAMPOS

function nvoip_callmeResetModal() {
    document.getElementById("nvoip_callme_btn-call-screen").disabled = true;
    document.getElementById("nvoip_callme_btn-message-screen").disabled = false;
    document.getElementById(
        "nvoip_callme_btn-schedule-screen"
    ).disabled = false;

    $("#nvoip_callme_view-msg").hide();
    $("#nvoip_callme_view-schedule").hide();
    $("#nvoip_callme_section-flux").hide();
    $("#nvoip_callme_modal-call-success").hide();
    $("#nvoip_callme_modal-schedule-success").hide();
    $("#nvoip_callme_modal-callNow-success").hide();
    $("#nvoip_callme_modal-message-success").hide();
    document.getElementById("time").classList.add("invisible");
    document.getElementById("date").classList.add("invisible");

    setTimeout(function () {
        $("#nvoip_callme_first-page").show();
        $("#nvoip_callme_view-call").show();
    }, 300);

    var answered = "";
    nvoip_callmeResetNumberInput();
    nvoip_callmeResetMessageInputs();
}

function nvoip_callmeResetFlux() {
    $("#nvoip_callme_modal-call-success").hide();
    $("#nvoip_callme_modal-schedule-success").hide();
    $("#nvoip_callme_modal-callNow-success").hide();
    $("#nvoip_callme_modal-call-failed").hide();
}

function nvoip_callmeTransition() {
    $("#nvoip_callme_modal-call-failed").hide();
    $("#nvoip_callme_modal-call-success").hide();
    $("#nvoip_callme_modal-schedule-success").hide();
    $("#nvoip_callme_modal-callNow-success").hide();

    var res = nvoip_callmeCheckToken();

    if (res) {
        nvoip_callmeCheckAuth();
    }
}

function nvoip_callmeFluxTransitionSuccess() {
    $("#nvoip_callme_section-flux").show();
    $("#nvoip_callme_modal-call-success").show();
    setTimeout(function () {
        $("#nvoip_callme_section-flux").fadeIn(500);
        $("#nvoip_callme_modal-call-success").fadeIn(500);
    }, 600);
}

function nvoip_callmeFluxTransitionFailed() {
    $("#nvoip_callme_modal-call-failed").show();
    setTimeout(function () {
        $("#nvoip_callme_modal-call-failed").fadeIn(300);
    }, 500);
}

function nvoip_callmeFluxTransitionScheduleSuccess() {
    var res = nvoip_callmeCheckToken();

    if (res) {
        nvoip_callmeCheckAuth();
    }

    $("#nvoip_callme_first-page").fadeOut(500);
    setTimeout(function () {
        $("#nvoip_callme_modal-schedule-success").fadeIn(300);
    }, 500);
}

function nvoip_callmeFluxTransitionCallNowSuccess() {
    var res = nvoip_callmeCheckToken();

    if (res) {
        nvoip_callmeCheckAuth();
    }
    console.log("entrou no call");
    $("#nvoip_callme_first-page").fadeOut(500);
    setTimeout(function () {
        console.log($("#nvoip_callme_modal-call-success"));
        $("#nvoip_callme_section-flux").fadeIn(500);
        $("#nvoip_callme_modal-call-success").fadeIn(500);
    }, 500);
}

function nvoip_callmeFluxMessageSuccess() {
    $("#nvoip_callme_first-page").fadeOut(500);
    setTimeout(function () {
        $("#nvoip_callme_modal-message-success").fadeIn(300);
    }, 500);
}

function nvoip_callmeFluxTransitionError() {
    $("#nvoip_callme_first-page").fadeOut(500);

    setTimeout(function () {
        $("#nvoip_callme_section-flux").fadeOut(1000);

        setTimeout(function () {
            nvoip_callmeSetAuthErrorMessage();
            $("#nvoip_callme_first-page").fadeIn(1000);
        }, 1000);
    }, 3000);
}

function nvoip_callmeSetAuthErrorMessage() {
    document.getElementById("nvoip_callme_div-error-message").style.visibility =
        "visible";
    document.getElementById("nvoip_callme_div-error-message").style.display =
        "";
    $("#nvoip_callme_div-error-message").fadeIn(300);
    setTimeout(function () {
        $("#nvoip_callme_div-error-message").fadeOut(5000);
    }, 5000);
}

function nvoip_callmeVerifyMsgField() {
    var count = 0;
    var inputMessage = document.getElementById(
        "nvoip_callme_input-message"
    ).value;

    if (inputMessage.trim() == "" || inputMessage.trim().length > 250) {
        document.getElementById(
            "nvoip_callme_input-message"
        ).style.borderColor = "red";
    } else {
        document.getElementById(
            "nvoip_callme_input-message"
        ).style.borderColor = "";
        count += 1;
    }

    var inputName = document.getElementById("nvoip_callme_input-name").value;
    if (inputName.trim() == "") {
        document.getElementById("nvoip_callme_input-name").style.borderColor =
            "red";
    } else {
        document.getElementById("nvoip_callme_input-name").style.borderColor =
            "";

        count += 1;
    }

    var inputEmail = document.getElementById("nvoip_callme_input-email").value;
    if (
        inputEmail.trim() == "" ||
        !inputEmail.includes("@") ||
        inputEmail.trim() == "@"
    ) {
        document.getElementById("nvoip_callme_input-email").style.borderColor =
            "red";
    } else {
        document.getElementById("nvoip_callme_input-email").style.borderColor =
            "";

        count += 1;
    }

    if (count === 3) {
        nvoip_callmeSendEmail();
        nvoip_callmeFluxMessageSuccess();
    }
}

function nvoip_callmeVerifyCallNow() {
    var count = 0;
    var inputPhone = document.getElementById("phone");

    if (inputPhone.value.trim() == "" || inputPhone.value.trim().length < 6) {
        inputPhone.style.borderColor = "red";
    } else {
        inputPhone.style.borderColor = "";
        count += 1;
    }

    if (count === 1) {
        nvoip_callmeFluxTransitionCallNowSuccess();
    }
}


function nvoip_callmeVerifyScheduledCall() {
    var horaAtual = new Date();
    var dateField = document.getElementById("date");
    console.log("DATAAAAAAAAAAAAAAAAAAAAAAAA", dateField);
    var timeField = document.getElementById("time");
    var timeFieldSplit = timeField.value.split(":");

    var count = 0;
    var inputPhone = document.getElementById("phone");

    if (inputPhone.value.trim() == "" || inputPhone.value.trim().length < 6) {
        inputPhone.style.borderColor = "red";
    } else {
        inputPhone.style.borderColor = "";
        count += 1;
    }

    var inputDate = document.getElementById("date");
    if (
        inputDate.value == "" ||
        Date.parse(inputDate.value) <= Date.now() - 86400000
    ) {
        inputDate.style.borderColor = "red";
    } else {
        inputDate.style.borderColor = "";

        count += 1;
    }

    if (new Date(dateField.value).getDate() + 1 === horaAtual.getDate()) {
        console.log("ENTROU NO PRIMEIRO IF");
        if (timeFieldSplit[0] !== "00") {
            console.log("ENTROU NO SEGUNDO IF");
            console.log(Number(timeFieldSplit[0]));
            console.log(horaAtual.getHours());
            if (
                Number(timeFieldSplit[0]) > horaAtual.getHours() ||
                (Number(timeFieldSplit[0]) === horaAtual.getHours() &&
                    Number(timeFieldSplit[1]) > horaAtual.getMinutes())
            ) {
                timeField.style.borderColor = "";
                count += 1;
            } else {
                console.log("Entrou no elsezão?");
                timeField.style.border = "1px solid #FF0000 ";
                console.log(timeField);
                console.log(Number(timeFieldSplit[1]));
                console.log(horaAtual.getMinutes());
            }
        }
    } else if (
        new Date(dateField.value).getDate() + 1 > horaAtual.getDate() ||
        new Date(dateField.value).getDate() + 1 < horaAtual.getDate()
    ) {
        timeField.style.borderColor = "";
        count += 1;
    } else {
        console.log("ELSE231");
        timeField.style.border = "1px solid #FF0000 ";
    }

    if (count === 3) {
        nvoip_callmeFluxTransitionScheduleSuccess();
    }
}

function nvoip_callmeValidateNameField() {
    var fieldName = document.getElementById("nvoip_callme_input-name");
    if (fieldName.value.trim().length > 0) {
        fieldName.style.borderColor = "";
    } else {
        fieldName.style.borderColor = "red";
    }
}

function nvoip_callmeValidateEmailField() {
    var fieldEmail = document.getElementById("nvoip_callme_input-email");
    if (fieldEmail.value.trim().includes("@")) {
        fieldEmail.style.borderColor = "";
    } else {
        fieldEmail.style.borderColor = "red";
    }
}

// DATA //

function nvoip_callmeVerifyDate() {
    var today = new Date().toISOString().split("T")[0];
    document.getElementsById("date")[0].setAttribute("min", today);
}


function nvoip_callmeValidateDateField() {
    var dateField = document.getElementById("date");
    if (
        dateField.value.trim().length > 6 &&
        Date.parse(dateField.value) >= Date.now() - 86400000
    ) {
        console.log("AQUI TÁ O DATEFIELD", dateField.value);
        dateField.style.borderColor = "";
    } else {
        dateField.style.borderColor = "red";
        console.log(dateField.value);
        console.log(Date.now());
    }
}

function nvoip_callmeValidateTimeField() {
    var horaAtual = new Date();
    var dateField = document.getElementById("date");
    console.log("DATAAAAAAAAAAAAAAAAAAAAAAAA", dateField);
    var timeField = document.getElementById("time");
    var timeFieldSplit = timeField.value.split(":");
    console.log("DATEFIELD", new Date(dateField.value).getDate() + 1);
    console.log("HORAFIELD", horaAtual.getDate());
    if (new Date(dateField.value).getDate() + 1 === horaAtual.getDay()) {
        console.log("ENTROU NO PRIMEIRO IF");
        if (timeFieldSplit[0] !== "00") {
            console.log("ENTROU NO SEGUNDO IF");
            console.log(Number(timeFieldSplit[0]));
            console.log(horaAtual.getHours());

            if (
                Number(timeFieldSplit[0]) > horaAtual.getHours() ||
                (Number(timeFieldSplit[0]) === horaAtual.getHours() &&
                    Number(timeFieldSplit[1]) > horaAtual.getMinutes())
            ) {
                timeField.style.borderColor = "";
            }
           
        }
    } else if (new Date(dateField.value).getDate() + 1 > horaAtual.getDate()) {
        timeField.style.borderColor = "";
        count += 1;

        console.log(timeField.value);
    }
}
