//   POPOVER ---------------------------

   function changeColorRoundButton() {
     const userEnteredColor = settings.backgroundColorRoundButton;
     document.body.style.setProperty("--nvoip_callmecolorButton", userEnteredColor);

    const userEnteredColorPulse = settings.backgroundColorPulseButton;
    document.body.style.setProperty(
      "--nvoip_callmePulseColorButton",
      userEnteredColorPulse
    );
  }

  function changeTextPopover() {
    const popoverText = document.querySelector(".nvoip_callme-popover-text");
    const userEnteredText = settings.popoverMessage;
    popoverText.setAttribute("data-bs-content", userEnteredText);
  }

    // MODAL ---------------------------

  function changeColorDisabledButtonHeader() {
    const userEnteredColor = settings.colorDisabledButtonHeader;
    document.body.style.setProperty(
      "--nvoip_callmeColorDisabledButton",
      userEnteredColor
    );
  }

  function changeColorEnabledButtonHeader() {
    const userEnteredColor = settings.colorEnabledButtonHeader;
    document.body.style.setProperty(
      "--nvoip_callmeColorEnabledButton",
      userEnteredColor
    );
  }

  function changeTextLeftButtonHeader() {
      const callButtonHeaderText = document.querySelector(
        ".nvoip_callme-call-btn-left-header"
      );
      const userEnteredText = settings.textLeftButtonHeader;
      callButtonHeaderText.innerHTML = userEnteredText;
    }

  function changeTextRightButtonHeader() {
    const callButtonHeaderText = document.querySelector(
      ".nvoip_callme-call-btn-right-header"
    );
    const userEnteredText = settings.textRightButtonHeader;
    callButtonHeaderText.innerHTML = userEnteredText;
  }

  function changeColorCloseButton() {
    const userEnteredColor = settings.colorCloseButton;
    document.body.style.setProperty(
      "--nvoip_callmeColorCloseButton",
      userEnteredColor
    );
  }

  function changeColorHoverCloseButton() {
    const userEnteredColor = settings.colorHoverCloseButton;
    document.body.style.setProperty(
      "--nvoip_callmeColorHoverCloseButton",
      userEnteredColor
    );
  }

  function changeColorInputFocus() {
    const userEnteredColor = settings.colorInputFocus;
    document.body.style.setProperty(
      "--nvoip_callmeColorInputFocus",
      userEnteredColor
    );
  }

  function changeScrollBarTextArea() {
    const userEnteredColorBg = settings.colorBackgroungSrollBarTextArea;
    document.body.style.setProperty(
      "--nvoip_callmeColorBgScrollBarTA",
      userEnteredColorBg
    );

    const userEnteredColor = settings.colorScrollBarTextArea;
    document.body.style.setProperty(
      "--nvoip_callmeColorScrollBarTA",
      userEnteredColor
    );
  }

  function changeLogo() {
    const logo = settings.logoPath;
    document.querySelector(".nvoip_callme-modal-logo").setAttribute("src", logo);
  }

  function changeColorHoverAllButtons() {
    const userEnteredColor = settings.colorHoverAllButtons;
    document.body.style.setProperty(
      "--nvoip_callmeColorHoverButton",
      userEnteredColor
    );
  }

  function changeColorHoverHrefFooter() {
    const userEnteredColor = settings.colorHoverHref;
    document.body.style.setProperty(
      "--nvoip_callmeColorHoverHrefFooter",
      userEnteredColor
    );
  }

  //   MODAL CALL  ---------------------------
  function changeColorModalCallButton() {
    const userEnteredColor = settings.colorCallButton;
    document.body.style.setProperty(
      "--nvoip_callmeColorCallButton",
      userEnteredColor
    );
  }

  function changeTextCallButton() {
    const callButtonText = document.querySelector(".nvoip_callme-call-btn");
    const userEnteredText = settings.textCallButton;
    callButtonText.setAttribute("value", userEnteredText);
  }

  function changeTextFooter() {
    const footerText = document.querySelector(".nvoip_callme-footer");
    const userEnteredText = settings.footerText;
    footerText.innerHTML = userEnteredText;
  }

  function changeFooterHref() {
    const footerHref = document.querySelector(".nvoip_callme-footer-href");
    const userEnteredText = settings.footerHref;
    footerHref.innerHTML = userEnteredText;

    const userEnteredTextHref = settings.footerHrefLink;
    footerHref.setAttribute("href", userEnteredTextHref);

    const userEnteredColor = settings.colorHref;
    document.body.style.setProperty(
      "--nvoip_callmeColorHrefFooter",
      userEnteredColor
    );
  }

  function changeMainTextCall() {
    const mainTextCall = document.querySelector(".nvoip_callme-main-text-call");
    const userEnteredText = settings.mainTextCallModal;
    mainTextCall.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorMainTextCall;
    document.body.style.setProperty(
      "--nvoip_callmeColorMainTextCall",
      userEnteredColor
    );
  }

  function changePlaceholderText() {
    const placeholderText = document.querySelector(".nvoip_callme-placeholder");
    const userEnteredText = settings.placeHolderText;
    placeholderText.innerHTML =  userEnteredText
    placeholderText.setAttribute("placeholder", userEnteredText);
  }

  function changeMainTextMessage() {
    const mainTextMessage = document.querySelector(".nvoip_callme-main-text-sms");
    const userEnteredText = settings.mainTextSmsModal;
    mainTextMessage.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorMainTextSMS;
    document.body.style.setProperty(
      "--nvoip_callmeColorMainTextSms",
      userEnteredColor
    );
  }
  function changeColorModalSmsButton() {
    const userEnteredColor = settings.colorSmsButton;
    document.body.style.setProperty(
      "--nvoip_callmeColorSmsButton",
      userEnteredColor
    );
  }

  function changePlaceholderInputName() {
    const placeholderInputName = document.querySelector(".nvoip_callme-input-name");
    const userEnteredText = settings.placeholderInputName;
    placeholderInputName.setAttribute("placeholder", userEnteredText);
  }

  function changePlaceholderInputEmail() {
    const placeholderInputEmail = document.querySelector(
      ".nvoip_callme-input-email"
    );
    const userEnteredText = settings.placeholderInputEmail;
    placeholderInputEmail.setAttribute("placeholder", userEnteredText);
  }

  function changePlaceholderTextArea() {
    const placeholderTextArea = document.querySelector(".nvoip_callme-textarea");
    const userEnteredText = settings.placeholderTextArea;
    placeholderTextArea.setAttribute("placeholder", userEnteredText);
  }

  // CALL SUCCESS ----------------------

  function changeTitleSuccessView() {
    const titleTextSuccess = document.querySelector(".nvoip_callme-success-title");
    const userEnteredText = settings.textTittleCallSuccess;
    titleTextSuccess.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorTittleCallSuccess;
    document.body.style.setProperty(
      "--successPageColorTitle",
      userEnteredColor
    );
  }

  function changeTextSuccessView() {
    const mainTextSuccess = document.querySelector(".nvoip_callme-sucess-text");
    const userEnteredText = settings.mainTextCallSuccess;
    mainTextSuccess.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorMainTextCallSuccess;
    document.body.style.setProperty(
      "--successPageColorMainText",
      userEnteredColor
    );
  }

  function changeReturnButton() {
    const userEnteredColor = settings.colorButtonBack;
    document.body.style.setProperty("--successReturnButton", userEnteredColor);

    const userEnteredColorHover = settings.colorButtonBackHover;
    document.body.style.setProperty(
      "--successReturnButtonHover",
      userEnteredColorHover
    );
  }

  function changeTittleFailedCall() {
    const textTittleCallFailed = document.querySelector(
      ".nvoip_callme-tittle-failed"
    );
    const userEnteredText = settings.textTittleCallFailed;
    textTittleCallFailed.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorTittleCallFailed;
    document.body.style.setProperty(
      "--nvoip_callmeColorTittleFailed",
      userEnteredColor
    );
  }

  function changeTextFailedCall() {
    const mainTextCallFailed = document.querySelector(
      ".nvoip_callme-main-text-failed"
    );
    const userEnteredText = settings.mainTextCallFailed;
    mainTextCallFailed.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorMainTextCallFailed;
    document.body.style.setProperty(
      "--nvoip_callmeColorMainTextFailed",
      userEnteredColor
    );
  }

  function changeLoading() {
    const userEnteredColor = settings.loadingColor;
    document.body.style.setProperty("--nvoip_callmeColorLoading", userEnteredColor);

    const userEnteredColorText = settings.loadingTextColor;
    document.body.style.setProperty(
      "--nvoip_callmeColorTextLoading",
      userEnteredColorText
    );
  }

  function changeTitleMessageView() {
    const titleTextFailed = document.querySelector(".nvoip_callme-message-success-title");
    const userEnteredText = settings.textTittleSmsSuccess;
    titleTextFailed.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorTittleSmsSuccess;
    document.body.style.setProperty(
      "--nvoip_callmeColorTittleMessage",
      userEnteredColor
    );
  }

  function changeTextMessageView() {
    const textMainTextSmsSuccess = document.querySelector(".nvoip_callme-message-success-text");
    const userEnteredText = settings. textMainTextSmsSuccess; 
    textMainTextSmsSuccess.innerHTML = userEnteredText;

    const userEnteredColor = settings.colorMainTextSmsSuccess;
    document.body.style.setProperty(
      "--nvoip_callmeColorMainTextMessage",
      userEnteredColor
    );
  }

  // CALL FAILED ----------------------

  // MESSAGE SUCCESS ----------------------

  // FLUX IN CALL ----------------------

  //   CALL FUNCTIONS ----------------------

  function callFunctions() {
    //   POPOVER
    changeColorRoundButton();
    changeTextPopover();

    // MODAL
    changeColorDisabledButtonHeader();
    changeColorEnabledButtonHeader();
    changeTextLeftButtonHeader();
    changeTextRightButtonHeader();
    changeColorCloseButton();
    changeColorHoverCloseButton();
    changeLogo();
    changeTextFooter();
    changeFooterHref();
    changeColorHoverHrefFooter();
    changeColorHoverAllButtons();
    changeColorInputFocus();
    changeScrollBarTextArea();

    // MODAL CALL
    changeMainTextCall();
    changeColorModalCallButton();
    changeTextCallButton();
    changePlaceholderText();

    //MODAL SMS
    changeMainTextMessage();
    changeColorModalSmsButton();

    changePlaceholderInputName();
    changePlaceholderInputEmail();
    changePlaceholderTextArea();

    // CALL SUCCESS

    changeTextSuccessView();
    changeTitleSuccessView();
    changeReturnButton();

    // CALL FAILED

    changeTittleFailedCall();
    changeTextFailedCall();

    // MESSAGE SUCCESS
    changeTitleMessageView()
    changeTextMessageView() 

    // FLUX IN CALL
    changeLoading();
  }

