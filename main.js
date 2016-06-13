var jQuery = require("jquery");
require("jquery.event.drag")(jQuery);
require("jquery-ui");
var Slick = require("./slick.core.js")(jQuery);

module.exports = jQuery.extend(Slick, {
  Grid: require("./slick.grid.js")(jQuery, Slick),
  Data: jQuery.extend(
    require("./slick.dataView.js")(jQuery), {
      GroupItemMetadataProvider: require("./slick.groupitemmetadataprovider.js")(jQuery),
      RemoteModelYahoo: require("./slick.remotemodel-yahoo.js")(jQuery),
      RemoteModel: require("./slick.remotemodel.js")(jQuery)
    }
  ),
  Editors: require("./slick.editors.js")(jQuery),
  Formatters: require("./slick.formatters.js")(jQuery),

  // Plugins
  AutoTooltips: require("./plugins/slick.autotooltips.js")(jQuery),
  CellCopyManager: require("./plugins/slick.cellcopymanager.js")(jQuery),
  CellRangeDecorator: require("./plugins/slick.cellrangedecorator.js")(jQuery),
  CellRangeSelector: require("./plugins/slick.cellrangeselector.js")(jQuery),
  CellSelectionModel: require("./plugins/slick.cellselectionmodel.js")(jQuery),
  CheckboxSelectColumn: require("./plugins/slick.checkboxselectcolumn.js")(jQuery),
  RowMoveManager: require("./plugins/slick.rowmovemanager.js")(jQuery),
  RowSelectionModel: require("./plugins/slick.rowselectionmodel.js")(jQuery),
  "Plugins": {
    "HeaderButtons": require("./plugins/slick.headerbuttons.js")(jQuery),
    "HeaderMenu": require("./plugins/slick.headermenu.js")(jQuery)
  },

  // Controls
  "Controls": {
    ColumnPicker: require("./controls/slick.columnpicker.js")(jQuery),
    Pager: require("./controls/slick.pager.js")(jQuery)
  }
});
