cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-ble-central.ble",
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
            "ble"
        ]
    },
    {
        "id": "net.coconauts.notification-listener.NotificationListener",
        "file": "plugins/net.coconauts.notification-listener/www/notification-listener.js",
        "pluginId": "net.coconauts.notification-listener",
        "clobbers": [
            "notificationListener"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-ble-central": "1.2.2",
    "cordova-plugin-whitelist": "1.3.3",
    "net.coconauts.notification-listener": "0.0.2"
};
// BOTTOM OF METADATA
});