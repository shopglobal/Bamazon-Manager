function changeBG() {
  if ($("#mainwrapper").attr("data-currentBG") === 'containers') {
    // DO NOTHING
  } else if ($("#mainwrapper").attr("data-currentBG") === 'plain') {
    $("#mainwrapper").removeClass('plainBG');
    $("#mainwrapper").addClass('containerBG');
    $("#mainwrapper").attr("data-currentBG", "containers");
  }
}
changeBG();