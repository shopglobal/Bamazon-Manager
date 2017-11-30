/////////////////////////////
// ADD NEW ITEM INPUT FORM //
/////////////////////////////
  function addForm(){
    var form = $("<form>");
      // NAME
        var label0 = $("<label for='name'>Name</label>");
        var input0 = $("<input type='text' class='form-control' placeholder='Product Name' id='name'>");
        form.append(label0);
        form.append(input0);
      // DEPARTMENT
        var label1 = $("<label for='dept'>Department</label>");
        var input1 = $("<input type='text' class='form-control' placeholder='Department Name' id='dept'>");
        form.append(label1);
        form.append(input1);
      // PRICE
        var label2 = $("<label for='price'>Price</label>");
        var input2 = $("<input type='text' class='form-control' placeholder='Item Price' id='price'>");
        form.append(label2);
        form.append(input2);
      // STOCK
        var label3 = $("<label for='stock'>Stock</label>");
        var input3 = $("<input type='number' class='form-control' placeholder='Items in stock' id='stock'>");
        form.append(label3);
        form.append(input3);
      // SUBMIT BUTTON
        var addBtn = $("<br><button class='btn btn-sm btn-success' type='submit' alt='Add Item' id='newItemSubmit'>Submit</button>" + 
                        "&nbsp; <button class='btn btn-sm btn-danger' type='submit' alt='Cancel Item' id='cancelNewItemSubmit'>Cancel</button>");
        form.append(addBtn);
    $("#addNew").html(form);
  }

///////////////////////////
// CANCEL NEW ITEM INPUT //
///////////////////////////
function cancelAddForm(){
  var addBtn = $("<button class='btn btn-xs btn-success'><span class='glyphicon glyphicon-plus'></span></button>" + 
                  "<strong>&nbsp; New item</strong>")
  $("#addNew").html(addBtn);
}

///////////////////////////////
// SEND NEW ITEM TO DATABASE //
///////////////////////////////
  function sendNewItem(){
    var addName = $("#name").val().trim();
    var addDept = $("#dept").val().trim();
    var addPrice = $("#price").val().trim();
    var addStock = $("#stock").val().trim();
    // VALIDATE PRICE FORMAT
      if(addPrice.indexOf("$") !== -1){ alert("Please enter a price without the $ sign (e.g. 41.23)"); return; }
      if(addPrice.indexOf(".") === -1){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      addPrice = addPrice.split(".");
      if(addPrice[1].charAt(2)){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      if(addPrice[1] < 10 && addPrice[1] > 0 && !addPrice[1].charAt(1)){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      addPrice = addPrice.join(".");
    // PUSH UPDATES TO THE DATABASE
      var currentURL = window.location.origin;
      $.post(currentURL+"/api/add_product/"+ addName+"/"+addDept+"/"+addPrice+"/"+addStock, function(res){
        if (res) { console.log(res); }
      });
  }

var td0='', td1='', td2='', td3='', td4='';
///////////////////////////
// INITIATE EDITING MODE //
///////////////////////////
  function editIt(){
    // GET ITEM ID
      var editID = $(this).parents('button').attr("data-index");
    // GET ROW DATA
      var editROW = $("table").children().eq(1).children("tr").eq(editID-1).children("td");
    // CHANGE BUTTONS TO CONFIRM/CANCEL OPTIONS
      editROW.eq(4).html("<button class='btn btn-xs btn-success' data-index='" + editID + "' alt='Confirm'><span class='glyphicon glyphicon-ok'></span></button> " + 
                        " <button class='btn btn-xs btn-danger' data-index='" + editID + "' alt='Cancel'><span class='glyphicon glyphicon-remove'></span></button>");
    // STORE THE INITIAL VALUES OF THAT ROW'S <td>'s IN CASE THE USER CANCELS
      td0 = editROW.eq(0).text();
      td1 = editROW.eq(1).text();
      td2 = editROW.eq(2).text();
      td3 = editROW.eq(3).text();
    // REPLACE <td> TEXT WITH INPUT CELLS
      editROW.eq(0).html("<input type='text' class='form-control' value='" + editROW.eq(0).text() + "' id='td0'>");
      editROW.eq(1).html("<input type='text' class='form-control' value='" + editROW.eq(1).text() + "' id='td1'>");
      editROW.eq(2).html("<input type='text' class='form-control' value='" + editROW.eq(2).text() + "' id='td2'>");
      editROW.eq(3).html("<input type='text' class='form-control' value='" + editROW.eq(3).text() + "' id='td3'>");
  }

/////////////////////////
// CANCEL EDITING MODE //
/////////////////////////
  function cancelIt(){
    // GET ITEM ID
      var cancelID = $(this).parents('button').attr("data-index");
    // GET ROW DATA
    var cancelROW = $("table").children().eq(1).children("tr").eq(cancelID-1).children("td");
    // CHANGE BUTTONS BACK
      cancelROW.eq(4).html("<button class='btn btn-xs btn-primary' data-index='" + cancelID + "' alt='Edit'><span class='glyphicon glyphicon-pencil'></span></button> " + 
                            " <button class='btn btn-xs btn-danger' data-index='" + cancelID + "' alt='Delete'><span class='glyphicon glyphicon-trash'></span></button>");
    // RESET THE ROW BACK TO ORIGINAL VALUES
      cancelROW.eq(0).html(td0);
      cancelROW.eq(1).html(td1);
      cancelROW.eq(2).html(td2);
      cancelROW.eq(3).html(td3);
  }
  
///////////////////////////
// SAVE CHANGES TO ITEMS //
///////////////////////////
  function saveIt(){
    // GET ITEM ID
      var saveID = $(this).parents('button').attr("data-index");
    // GET ROW DATA
      var saveROW = $("table").children().eq(1).children("tr").eq(saveID-1).children("td"); 
    // GRAB THE VALUES OF INPUT FIELDS
      td0 = $("#td0").val().trim();
      td1 = $("#td1").val().trim();
      td2 = $("#td2").val().trim();
      td3 = $("#td3").val().trim();
    // VALIDATE PRICE FORMAT AFTER EDIT
      if(td2.indexOf("$") === -1){ td2 = "$" + td2; }
      if(td2.indexOf(".") === -1){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      td2 = td2.split(".");
      if(td2[1].charAt(2)){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      if(td2[1] < 10 && td2[1] > 0 && !td2[1].charAt(1)){ alert("Please enter a valid price (e.g. 41.23)"); return; }
      td2 = td2.join(".");
    // UPDATE THAT ROW OF THE TABLE
      saveROW.eq(0).html(td0);
      saveROW.eq(1).html(td1);
      saveROW.eq(2).html(td2);
      saveROW.eq(3).html(td3);
    // REMOVE THE $ BEFORE SENDING IT TO THE DB
      td2 = td2.split("$");
      td2 = td2[1];
    // PUSH UPDATES TO THE DATABASE
      var currentURL = window.location.origin;
      $.post(currentURL+"/api/edit_product/"+ saveID+"/"+td0+"/"+td1+"/"+td2+"/"+td3, function(res){
        if (res) { console.log(res); }
      });
    // CHANGE BACK TO EDIT/DELETE BUTTONS
      saveROW.eq(4).html("<button class='btn btn-xs btn-primary' data-index='"+saveID+"' alt='Edit'><span class='glyphicon glyphicon-pencil'></span></button> " + 
                          " <button class='btn btn-xs btn-danger' data-index='"+saveID+"' alt='Delete'><span class='glyphicon glyphicon-trash'></span></button>");
  }

///////////////////////////////
// REMOVE ITEM FROM DATABASE //
///////////////////////////////
  function removeIt(){
    // GET ITEM ID
      var removeID = $(this).parents('button').attr("data-index");
    // GET ROW DATA
      var removeROW = $("table").children().eq(1).children("tr").eq(removeID-1).children("td");
    // PUSH UPDATE TO THE DATABASE
      var currentURL = window.location.origin;
      $.post(currentURL + "/api/remove_product/" + removeID, function(res){
        if (res) { console.log(res); }
      });
    // REMOVE THE ROW FROM THE TABLE
      $(this).closest('tr').remove();
  }

/////////////////////////////////////
// REMOVE CONTAINER IMG BACKGROUND //
/////////////////////////////////////
function changeBG(){ 
  if ($("#mainwrapper").attr("data-currentBG") === 'plain') {
    // DO NOTHING
  } else if ($("#mainwrapper").attr("data-currentBG") === 'containers') {
    $("#mainwrapper").removeClass('containerBG');
    $("#mainwrapper").addClass('plainBG');
    $("#mainwrapper").attr("data-currentBG", "plain");
  }
}
changeBG();

// CLICK LISTENERS FOR EDIT BUTTONS
  $(document).on("click", ".glyphicon-ok", saveIt);
  $(document).on("click", ".glyphicon-pencil", editIt);
  $(document).on("click", ".glyphicon-trash", removeIt);
  $(document).on("click", ".glyphicon-remove", cancelIt);
  $(document).on("click", ".glyphicon-plus", addForm);
  $(document).on("click", "#newItemSubmit", sendNewItem);
  $(document).on("click", "#cancelNewItemSubmit", cancelAddForm);