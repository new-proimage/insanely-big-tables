$(document).ready(function(){
  $("#grid").kendoGrid({
    columns:[
    {
      field: "key",
      title: "Key"
    },
    {
      field: "val",
      title: "Value"
    }],
    dataSource: {
      data: [
      {
        key: Math.random(),
        val: Math.random()*100
      },
      {
        key: Math.random(),
        val: Math.random()*100
      }]
    },
    selectable: 'row'
  });

  $('#ins').on('click', function () {
    var grid =  $('#grid').data('kendoGrid');
    grid.dataSource.insert({key: Math.random(), val: Math.random()*100});
    $('#total').val(grid.dataSource.total());
  });

  $('#add').on('click', function () {
    var grid =  $('#grid').data('kendoGrid');
    grid.dataSource.add({key: Math.random(), val: Math.random()*100});
    $('#total').val(grid.dataSource.total());
  });

  $('#edit').on('click', function () {
    var grid = $('#grid').data('kendoGrid'),
        seluid = $(grid.select()).data('uid'),
        item = grid.dataSource.getByUid(seluid);
    item.set('val', 'Edited');
  });

  $('#del').on('click', function () {
    var grid = $('#grid').data('kendoGrid');
    grid.removeRow(grid.select()); // This method also removes the record from the dataSource
    $('#total').val(grid.dataSource.total());
  });

  $('#start').on('click', function () {
    var TIMER = $('#timer').val(),
        amount = $('#amount').val(),
        launch = new Date().getTime(),
        i = 0;
    (function adding() {
      var grid =  $('#grid').data('kendoGrid');
      grid.dataSource.insert({key: Math.random(), val: Math.random()*100});
      $('#total').val(grid.dataSource.total());
      i += 1;
      if (i < amount) setTimeout(adding, TIMER);
      else $('#elapsed').val((new Date().getTime() - launch)/1000);
    })();
  });

});