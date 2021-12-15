function nvoip_callmeLoadDesignSettings() {
  const settings = JSON.parse(localStorage.getItem("nvoip_callme_designSettings"));

  // POPOVER --------------------------
  const popover = {
    toString: "popoverMessage",
    userEnteredColor: settings.callPulseButton.backgroundColorRoundButton,
    property: "--nvoip_callmecolorButton",
    userEnteredColorHover: settings.callPulseButton.backgroundColorPulseButton,
    propertyHover: "--nvoip_callmePulseColorButton",
    userEnteredAttribute: settings.required.popoverMessage,
    pathAttribute: document.querySelector(".nvoip_callme_popover-text"),
    attribute: "data-bs-content",
    required: "true",
  };

  // MODAL --------------------------
  const disabledButtonHeader = {
    userEnteredColor: settings.modal.colorDisabledButtonHeader,
    property: "--nvoip_callmeColorDisabledButton",
  };

  const enableButtonHeader = {
    userEnteredColor: settings.modal.colorEnabledButtonHeader,
    property: "--nvoip_callmeColorEnabledButton",
  };

  const leftButtonHeader = {
    toString: "textLeftButtonHeader",
    userEnteredText: settings.required.textLeftButtonHeader,
    path: document.querySelector(".nvoip_callme_call-left-btn-header"),
    required: "true",
  };

  const rightButtonHeader = {
    toString: "textRightButtonHeader",
    userEnteredText: settings.required.textRightButtonHeader,
    path: document.querySelector(".nvoip_callme_call-right-btn-header"),
    required: "true",
  };

  const closeButton = {
    userEnteredColor: settings.modal.colorCloseButton,
    property: "--nvoip_callmeColorCloseButton",
    userEnteredColorHover: settings.modal.colorHoverCloseButton,
    propertyHover: "--nvoip_callmeColorHoverCloseButton",
  };

  const inputFocus = {
    userEnteredColor: settings.modal.colorInputFocus,
    property: "--nvoip_callmeColorInputFocus",
  };

  const scrollBarTextArea = {
    toString: "colorScrollBarTextArea",
    userEnteredColor: settings.modal.colorScrollBarTextArea,
    property: "--nvoip_callmeColorScrollBarTA",
    userEnteredColorBg: settings.modal.colorBackgroungSrollBarTextArea,
    propertyBg: "--nvoip_callmeColorBgScrollBarTA",
  };

  const logo = {
    toString: "logoPath",
    userEnteredImg: settings.required.logoPath,
    path: document.querySelectorAll(".nvoip_callme_logo"),
    required: "true",
  };

  const hoverButtons = {
    userEnteredColorHover: settings.modal.colorHoverAllButtons,
    propertyHover: "--nvoip_callmeColorHoverAllButtons",
  };

  const footer = {
    toString: "footerText",
    userEnteredText: settings.required.footerText,
    path: document.querySelector(".nvoip_callme_footer"),
    required: "true",
  };

  const hrefFooter = {
    toString: "footerHref",
    userEnteredText: settings.modal.footerHref,
    path: document.querySelector(".nvoip_callme_footer-href"),
    pathAttribute: document.querySelector(".nvoip_callme_footer-href"),
    userEnteredAttribute: settings.modal.footerHrefLink,
    attribute: "href",

    userEnteredColor: settings.modal.colorHref,
    property: "--nvoip_callmeColorHrefFooter",
    userEnteredColorHover: settings.modal.colorHoverHref,
    propertyHover: "--nvoip_callmeColorHoverHrefFooter",
  };

  const returnButton = {
    userEnteredColor: settings.modal.colorButtonReturn,
    property: "--nvoip_callmeReturnButton",
    userEnteredColorHover: settings.modal.colorButtonReturnHover,
    propertyHover: "--nvoip_callmeReturnButtonHover",
  };

  const errorMessage = {
    userEnteredText: settings.modal.errorMessageOnCall,
    path: document.querySelector(".nvoip_callme_error-message"),
  }

  // CALL MODAL --------------------------

  const callModalButton = {
    toString: "textCallButton",
    userEnteredColor: settings.callView.colorCallButton,
    property: "--nvoip_callmeColorCallButton",
    userEnteredAttribute: settings.required.textCallButton,
    pathAttribute: document.querySelector(".nvoip_callme-call-btn"),
    attribute: "value",
    required: true,
  };

  const mainTextCall = {
    toString: "mainTextCallModal",
    userEnteredColor: settings.callView.colorMainTextCall,
    property: "--nvoip_callmeColorMainTextCall",
    userEnteredText: settings.required.mainTextCallModal,
    path: document.querySelector(".nvoip_callme_main-text-call"),
    required: "true",
  };

  const placeholderInputCall = {
    toString: "placeHolderNumber",
    userEnteredAttribute: settings.required.placeHolderNumber,
    pathAttribute: document.querySelector(".nvoip_callme_placeholder"),
    attribute: "placeholder",
    required: true,
  };


  // MESSAGE MODAL --------------------------

  const mainTextSms = {
    toString: "mainTextSmsModal",
    userEnteredColor: settings.messageView.colorMainTextSMS,
    property: "--nvoip_callmeColorMainTextSms",
    userEnteredText: settings.required.mainTextSmsModal,
    path: document.querySelector(".nvoip_callme_main-text-sms"),
    required: true,
  };

  const smsModalButton = {
    toString: "textCallButton",
    userEnteredColor: settings.messageView.colorSmsButton,
    property: "--nvoip_callmeColorSmsButton",
    userEnteredAttribute: settings.required.textCallButton,
    pathAttribute: document.querySelector(".nvoip_callme-call-btn"),
    attribute: "value",
    required: true,
  };

  const smsModalInputName = {
    toString: "placeholderInputName",
    userEnteredAttribute: settings.required.placeholderInputName,
    pathAttribute: document.querySelector(".nvoip_callme_input-name"),
    attribute: "placeholder",
    required: true,
  };

  const smsModalInputEmail = {
    toString: "placeholderInputEmail",
    userEnteredAttribute: settings.required.placeholderInputEmail,
    pathAttribute: document.querySelector(".nvoip_callme_input-email"),
    attribute: "placeholder",
    required: true,
  };

  const smsModalTextArea = {
    toString: "placeholderTextArea",
    userEnteredAttribute: settings.required.placeholderTextArea,
    pathAttribute: document.querySelector(".nvoip_callme_textarea"),
    attribute: "placeholder",
    required: true,
  };

  // SUCESS CALL --------------------------

  const titleSuccess = {
    toString: "textTitleCallSuccess",
    userEnteredColor: settings.callSuccessView.colorTitleCallSuccess,
    property: "--nvoip_callmeSuccessPageColorTitle",
    userEnteredText: settings.required.textTitleCallSuccess,
    path: document.querySelector(".nvoip_callme_success-title"),
    required: true
  };

  const mainTextSuccess = {
    toString: "mainTextCallSuccess",
    userEnteredColor: settings.callSuccessView.colorMainTextCallSuccess,
    property: "--nvoip_callmeSuccessPageColorMainText",
    userEnteredText: settings.required.mainTextCallSuccess,
    path: document.querySelector(".nvoip_callme_sucess-text"),
    required: true
  };

  const imageSuccess= {
    toString: "imageSuccess",
    userEnteredImg: settings.callSuccessView.imageSuccess,
    path: document.querySelectorAll("#nvoip_callme_img_success"),

  }

  // FAILED CALL --------------------------

  const titleFailedCall = {
    toString: "textTitleCallFailed",
    userEnteredColor: settings.callFailedView.colorTitleCallFailed,
    property: "--nvoip_callmeColorTitleFailed",
    userEnteredText: settings.required.textTitleCallFailed,
    path: document.querySelector(".nvoip_callme_title-failed"),
    required: true,
  };

  const mainTextFailedCall = {
    toString: "mainTextCallFailed",
    userEnteredColor: settings.callFailedView.colorMainTextCallFailed,
    property: "--nvoip_callmeColorMainTextFailed",
    userEnteredText: settings.required.mainTextCallFailed,
    path: document.querySelector(".nvoip_callme_main-text-failed"),
    required: true, 
  };

  const imageFailed= {
    toString: "imageFailed",
    userEnteredImg: settings.callSuccessView.imageFailed,
    path: document.querySelectorAll("#nvoip_callme_img_failed"),
  }

  // LOADING --------------------------

  const loading = {
    userEnteredColor: settings.viewFluxInCall.loadingColor,
    property: "--nvoip_callmeColorLoading",
    userEnteredColorText: settings.viewFluxInCall.loadingTextColor,
    propertyText: "--nvoip_callmeColorTextLoading",
  };

  // MESSAGE SUCCESS --------------------------

  const titleMessageSuccess = {
    toString: "textTitleSmsSuccess",
    userEnteredColor: settings.messageSuccessView.colorTitleSmsSuccess,
    property: "--nvoip_callmeColorTitleMessage",
    userEnteredText: settings.required.textTitleSmsSuccess,
    path: document.querySelector(".nvoip_callme_message-success-title"),
    required: true,
  };

  const mainTextMessageSuccess = {
    toString: "textMainTextSmsSuccess",
    userEnteredColor: settings.messageSuccessView.colorMainTextSmsSuccess,
    property: "--nvoip_callmeColorMainTextMessage",
    userEnteredText: settings.required.textMainTextSmsSuccess,
    path: document.querySelector(".nvoip_callme_message-success-text"),
    required: true,
  };

 const elements = [
    popover,
    disabledButtonHeader,
    enableButtonHeader,
    leftButtonHeader,
    rightButtonHeader,
    closeButton,
    inputFocus,
    scrollBarTextArea,
    logo,
    hoverButtons,
    footer,
    hrefFooter,
    returnButton,
    errorMessage,
    callModalButton,
    mainTextCall,
    placeholderInputCall,
    mainTextSms,
    smsModalButton,
    smsModalInputName,
    smsModalInputEmail,
    smsModalInputEmail,
    smsModalTextArea,
    titleSuccess,
    mainTextSuccess,
    imageSuccess,
    titleFailedCall,
    mainTextFailedCall,
    imageFailed,
    loading,
    titleMessageSuccess,
    mainTextMessageSuccess,
  ];

  makeChanges(elements);
}

function makeChanges(elements) {
  elements.forEach((item) => {
    validateColor(item);
    changeLogo(item);

    if (validateRequiredElement(item)) {
      validateText(item);
      validateAttribute(item);
    }
  });
}

function changeColor(property, userEnteredColor) {
  document.body.style.setProperty(property, userEnteredColor);
}

function changeText(path, userEnteredText) {
  path.innerHTML = userEnteredText;

}

function changeAttribute(item) {
  item.pathAttribute.setAttribute(item.attribute, item.userEnteredAttribute);
}

function changeLogo(item) {
  if (item.hasOwnProperty("userEnteredImg")) {
    if(item.userEnteredImg == null || item.userEnteredImg == ""){
      console.log("Preencha o elemento "+item.toString)
    }
    else{
      item.path.forEach((logo) => {
        logo.setAttribute("src", item.userEnteredImg);
      });
    }
  }
}

function validateRequiredElement(item) {
  if (item.hasOwnProperty("required")) {
    if(item.hasOwnProperty("userEnteredText")){
      if (item.userEnteredText == null || item.userEnteredText == "") {
        console.log("Preencha o elemento " + item.toString);
        return false;
      }
    }
  }
  return true;
}

function validateAttribute(item) {
  if (item.hasOwnProperty("attribute")) {
    if (
      item.userEnteredAttribute !== null &&
      item.userEnteredAttribute !== "" &&
      item.attribute !== null &&
      item.attribute !== ""
    )
      changeAttribute(item);
  }
}

function validateColor(item) {
  if (item.hasOwnProperty("userEnteredColor") || item.hasOwnProperty("userEnteredColorHover")) {
    if (item.userEnteredColor !== null && item.userEnteredColor !== "")
      if (item.hasOwnProperty("userEnteredColor")) {
        changeColor(item.property, item.userEnteredColor);
      }
    if (item.hasOwnProperty("userEnteredColorHover")) {
      changeColor(item.propertyHover, item.userEnteredColorHover);
    }
    if (item.hasOwnProperty("userEnteredColorBg")) {
      changeColor(item.propertyBg, item.userEnteredColorBg);
    }
    if (item.hasOwnProperty("userEnteredColorText")) {
      changeColor(item.propertyText, item.userEnteredColorText);
    }
  }
}

function validateText(item) {
  if (item.hasOwnProperty("userEnteredText") && item.hasOwnProperty("path")) {
    if (item.userEnteredText !== null && item.userEnteredText !== "")
      changeText(item.path, item.userEnteredText);
  }
}