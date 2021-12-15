var oauth = "";

var cfg = JSON.parse(localStorage.getItem("nvoip_callme_config"));
var numberSip = cfg.numbersip;
var userToken = cfg.userToken;
var transferNumber = cfg.transferNumber;
var caller = cfg.caller;
var state = "";
var estatus = "";
var answered = false;
globalThis.interval = "";
let uuid = "";
var date = "";
var time = "";
var data = "";
var horaFormatada = "";
var xhr = "";

nvoip_callmeGenerateToken();

function nvoip_callmeGenerateToken() {
        data =
        "username=" +
        numberSip +
        "&password=" +
        userToken +
        "&grant_type=password";

    xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("Status:", this.status);
            console.log("Headers:", this.getAllResponseHeaders());
            console.log("Body:", this.responseText);

            var json = this.response;
            var obj = JSON.parse(json);

            oauth = obj.access_token;
        }
    });

    xhr.open("POST", "https://api.nvoip.com.br/v2/oauth/token");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader(
        "Authorization",
        "Basic TnZvaXBBcGlWMjpUblp2YVhCQmNHbFdNakl3TWpFPQ=="
    );
    xhr.send(data);
}

const toTimestamp = (strDate) => {
    let dt = new Date(strDate);
    dt.setHours(dt.getHours() + 3);
    return dt;
};

function nvoip_callmeMakeCall() {
    date = document.getElementById("date").value;
    hour = document.getElementById("time").value;
    horaFormatada = hour + ":00";
    hour = horaFormatada;
    console.log(date + " " + horaFormatada);

    if (nvoip_callme_config.internationalCalls === true) {
        let number = document.getElementById("phone").value;
        let numberDDI = document.getElementsByClassName(
            "iti__selected-dial-code"
        )[0].innerHTML;
        console.log(numberDDI);
        number = (numberDDI + number)
            .replace("(", "")
            .replace(")", "")
            .replace("-", "")
            .replace(" ", "")
            .replace("+", "");

        if ($("#nvoip_callme_call-btn").hasClass("nvoip_callme_btn-schedule")) {
            var dateHour = toTimestamp(date + " " + horaFormatada);
            console.log("ENTROU IF", dateHour);
        } else if (
            $("#nvoip_callme_call-btn").hasClass("nvoip_callme_btn-now")
        ) {
            dateHour = "";
            console.log("ENTROU ELSE", dateHour);
        }

        data = JSON.stringify({
            caller: caller,
            called: number,
            transferNumber: transferNumber,
            dateHour: dateHour,

            // dateHour : "";
        });
        console.log(number);
        console.log("DATEHOUR", dateHour);

        xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var json = this.response;
                console.log("RESPONSE CARAI", this.response);

                var obj = JSON.parse(JSON.stringify(json));
                console.log("OBJJJJJJ", obj);
                uuid = obj.replace("uuid: ", "");
            }
        });
    } else {
        date = document.getElementById("date").value;
        hour = document.getElementById("time").value;
        horaFormatada = hour + ":00";
        hour = horaFormatada;
        console.log(date + " " + horaFormatada);

        let number = document.getElementById("phone").value;

        number = number
            .replace("(", "")
            .replace(")", "")
            .replace("-", "")
            .replace(" ", "")
            .replace("+", "");

        if ($("#nvoip_callme_call-btn").hasClass("nvoip_callme_btn-schedule")) {
            dateHour = toTimestamp(date + " " + horaFormatada);
            console.log("ENTROU IF", dateHour);
        } else if (
            $("#nvoip_callme_call-btn").hasClass("nvoip_callme_btn-now")
        ) {
            dateHour = "";
            console.log("ENTROU ELSE", dateHour);
        }

        data = JSON.stringify({
            caller: caller,
            called: number,
            transferNumber: transferNumber,
            dateHour: dateHour,

            // dateHour : "";
        });
        console.log(number);
        console.log("DATEHOUR", dateHour);

        xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log("Status:", this.status);
                console.log("Headers:", this.getAllResponseHeaders());
                console.log("Body:", this.responseText);
                var json = this.response;
                console.log("RESPONSE CARAI", this.response);

                var obj = JSON.parse(JSON.stringify(json));
                console.log("OBJJJJJJ", obj);
                uuid = obj.replace("uuid: ", "");
            }
        });
    }

    xhr.open("POST", "https://api.nvoip.com.br/v2-devs/torpedo/callme");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + oauth);

    xhr.send(data);
    console.log("data: ", data);
}

function nvoip_callmeCheckAuth() {
    data = "token=" + oauth;
    xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var json = this.response;
            var obj = JSON.parse(json);
            if (
                obj.error === "Bad credentials" ||
                obj.error === "invalid_token"
            ) {
                nvoip_callmeFluxTransitionError();
            }
        }
    });

    xhr.open("POST", "https://api.nvoip.com.br/v2/oauth/check_token");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader(
        "Authorization",
        "Basic TnZvaXBBcGlWMjpUblp2YVhCQmNHbFdNakl3TWpFPQ=="
    );
    xhr.send(data);

    return true;
}

function nvoip_callmeCheckToken() {
    if (document.getElementById("phone").value === "") {
        document.getElementById("phone").focus();
        return false;
    } else {
        data = "token=" + oauth;
        xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var json = this.response;
                var obj = JSON.parse(json);
                if (obj.error != undefined) {
                    if (
                        obj.error === "invalid_grant" ||
                        obj.error === "invalid_token"
                    ) {
                        nvoip_callmeFluxTransitionError();
                    } else {
                        nvoip_callmeGenerateToken();
                        nvoip_callmeMakeCall();
                    }
                } else {
                    nvoip_callmeMakeCall();
                }
            }
        });

        xhr.open("POST", "https://api.nvoip.com.br/v2/oauth/check_token");
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        xhr.setRequestHeader(
            "Authorization",
            "Basic TnZvaXBBcGlWMjpUblp2YVhCQmNHbFdNakl3TWpFPQ=="
        );
        xhr.send(data);

        return true;
    }
}

function nvoip_callmeSendEmail() {
    data = JSON.stringify({
        ownerEmail: cfg.ownerEmail,
        userEmail: document.getElementById("nvoip_callme_input-email").value,
        userName: document.getElementById("nvoip_callme_input-name").value,
        message: document.getElementById("nvoip_callme_input-message").value,
    });

    xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "https://api.nvoip.com.br/v2/sendCallPageEmail");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}
