require("jquery");
require("jquery.event.drag");
var Slick = require("./slick.core.js");

module.exports = jQuery.extend(Slick, {
  Grid: require("./slick.grid.js"),
  Data: jQuery.extend(
    require("./slick.dataView.js"), {
      GroupItemMetadataProvider: require("./slick.groupitemmetadataprovider.js"),
      RemoteModelYahoo: require("./slick.remotemodel-yahoo.js"),
      RemoteModel: require("./slick.remotemodel.js")
    }
  ),
  Editors: require("./slick.editors.js"),
  Formatters: require("./slick.formatters.js"),

  // Plugins
  AutoTooltips: require("./plugins/slick.autotooltips.js"),
  CellCopyManager: require("./plugins/slick.cellcopymanager.js"),
  CellRangeDecorator: require("./plugins/slick.cellrangedecorator.js"),
  CellRangeSelector: require("./plugins/slick.cellrangeselector.js"),
  CellSelectionModel: require("./plugins/slick.cellselectionmodel.js"),
  CheckboxSelectColumn: require("./plugins/slick.checkboxselectcolumn.js"),
  RowMoveManager: require("./plugins/slick.rowmovemanager.js"),
  RowSelectionModel: require("./plugins/slick.rowselectionmodel.js"),
  "Plugins": {
    "HeaderButtons": require("./plugins/slick.headerbuttons.js"),
    "HeaderMenu": require("./plugins/slick.headermenu.js")
  },

  // Controls
  "Controls": {
    ColumnPicker: require("./controls/slick.columnpicker.js"),
    Pager: require("./controls/slick.pager.js")
  }
});
