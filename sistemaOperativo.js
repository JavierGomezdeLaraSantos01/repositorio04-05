const os = require('os');
function devuelveSistema() {
    let a = os.platform();
    switch (a) {
        case 'win32':
            return 'Estás usando este programa desde Windows';
            break;
        case 'darwin':
            return 'Estás usando este progama desde un dispositivo MAC';
        break;
        default:
            return 'Estás usandome o desde Linux o desde algo raro';
            break;
    }
}
exports.devuelveSistema = devuelveSistema;