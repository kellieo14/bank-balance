//business logic//

function Balance(initDeposit, deposit, withdraw) {
  this.initDeposit = initDeposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Balance.prototype.addMoney = function() {
  return this.initDeposit + this.deposit;
}

Balance.prototype.removeMoney = function () {
  return this.initDeposit - this.withdraw;
}



//user interface logic//
$(document).ready(function() {
  $(".bankSetup").submit(function(event) {
    event.preventDefault();
    $(".calculate").show();

    var inputtedName = $("input.name").val();
    var inputtedInitialDeposit = parseInt($('input.initialDeposit').val());

    $(".deposit").submit(function(event) {
      event.preventDefault();
      var entryDeposit = parseInt($('input.deposit').val());
      $(".statement").append("<li>" + addMoney + "</li>");
    });
      $(".withdraw").submit(function(event) {
        event.preventDefault();
        var entryWithdraw = parseInt($('input.withdraw').val());
        $(".statement").append("<li>" + removeMoney + "</li>");
    });
  });
});
