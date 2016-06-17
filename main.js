var jQuery = require("jquery");
require("jquery-mousewheel")(jQuery);
require("jquery.event.drag")(jQuery);
require("jquery-ui");
var Slick = require("./slick.core.js")(jQuery);

module.exports = jQuery.extend(Slick, {
  Grid: require("./slick.grid.js")(jQuery, Slick),
  Data: jQuery.extend(
    require("./slick.dataView.js")(jQuery, Slick), {
      GroupItemMetadataProvider: require("./slick.groupitemmetadataprovider.js")(jQuery, Slick),
      RemoteModelYahoo: require("./slick.remotemodel-yahoo.js")(jQuery, Slick),
      RemoteModel: require("./slick.remotemodel.js")(jQuery, Slick)
    }
  ),
  Editors: require("./slick.editors.js")(jQuery),
  Formatters: require("./slick.formatters.js")(jQuery),

  // Plugins
  AutoTooltips: require("./plugins/slick.autotooltips.js")(jQuery),
  CellCopyManager: require("./plugins/slick.cellcopymanager.js")(jQuery, Slick),
  CellRangeDecorator: require("./plugins/slick.cellrangedecorator.js")(jQuery, Slick),
  CellRangeSelector: require("./plugins/slick.cellrangeselector.js")(jQuery, Slick),
  CellSelectionModel: require("./plugins/slick.cellselectionmodel.js")(jQuery, Slick),
  CheckboxSelectColumn: require("./plugins/slick.checkboxselectcolumn.js")(jQuery, Slick),
  RowMoveManager: require("./plugins/slick.rowmovemanager.js")(jQuery, Slick),
  RowSelectionModel: require("./plugins/slick.rowselectionmodel.js")(jQuery, Slick),
  "Plugins": {
    "HeaderButtons": require("./plugins/slick.headerbuttons.js")(jQuery, Slick),
    "HeaderMenu": require("./plugins/slick.headermenu.js")(jQuery, Slick)
  },

  // Controls
  "Controls": {
    ColumnPicker: require("./controls/slick.columnpicker.js")(jQuery),
    Pager: require("./controls/slick.pager.js")(jQuery)
  }
});
