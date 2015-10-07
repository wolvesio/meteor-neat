Package.describe({
  name: "wolves:neat",
  summary: "Meteor 1.2.0+ - A lightweight, semantic grid framework built on top of Bourbon.",
  version: "3.1.0",
  git: "https://github.com/wolvesio/meteor-neat"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');
  api.use('fourseven:scss@3.4.0-beta1');
  var assets = [
    // Helpers
    "_neat-helpers.scss",
    //Functions
    "neat/functions/_new-breakpoint.scss",
    "neat/functions/_private.scss",
    // Grid
    "neat/grid/_box-sizing.scss",
    "neat/grid/_direction-context.scss",
    "neat/grid/_display-context.scss",
    "neat/grid/_private.scss",
    "neat/grid/_omega.scss",
    "neat/grid/_outer-container.scss",
    "neat/grid/_span-columns.scss",
    "neat/grid/_row.scss",
    "neat/grid/_shift.scss",
    "neat/grid/_pad.scss",
    "neat/grid/_fill-parent.scss",
    "neat/grid/_media.scss",
    "neat/grid/_to-deprecate.scss",
    "neat/grid/_visual-grid.scss",
    //Settings
    "neat/settings/_grid.scss",
    "neat/settings/_disable-warnings.scss",
    "neat/settings/_visual-grid.scss",
    "_neat.scss"
  ];
  api.addFiles(assets, 'client', { isImport: true });
});
