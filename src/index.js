
console.log('index.js加载')

const noble = require('noble-mac');

noble.on('stateChange', function(state) {
    console.log('state = ',state)
    // if (state === 'poweredOn') {
    //     noble.startScanning();
    // } else {
    //     noble.stopScanning();
    // }
    let btn = document.getElementById('scanBtn')
    btn.onclick = ()=>{
        if (state === 'poweredOn') {
            noble.startScanning();
        } else {
            noble.stopScanning();
        }
    }
});

let devices = [];
noble.on('discover', function(peripheral) {
    // console.log('peripheral discovered (' + peripheral.id +
    //     ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
    //     ' connectable ' + peripheral.connectable + ',' +
    //     ' RSSI ' + peripheral.rssi + ':');
    // console.log('\thello my local name is:');
    // console.log('\t\t' + peripheral.advertisement.localName);
    // console.log('\tcan I interest you in any of the following advertised services:');
    // console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
    //
    // var serviceData = peripheral.advertisement.serviceData;
    // if (serviceData && serviceData.length) {
    //     console.log('\there is my service data:');
    //     for (var i in serviceData) {
    //         console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
    //     }
    // }
    // if (peripheral.advertisement.manufacturerData) {
    //     console.log('\there is my manufacturer data:');
    //     console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
    // }
    // if (peripheral.advertisement.txPowerLevel !== undefined) {
    //     console.log('\tmy TX power level is:');
    //     console.log('\t\t' + peripheral.advertisement.txPowerLevel);
    // }


    // for (let i = 0; i < devices.length; i++) {
    //     if(devices[i].id == peripheral.id){
    //         return
    //     }
    // }
    // devices.put(peripheral)
    // for (let i = 0; i < devices.length-1; i++) {
    //     for (let j = 0; j < devices.length - i - 1; j++) {
    //         if (devices[j] > devices[j + 1]) {
    //             let temp = devices[j];
    //             devices[j] = devices[j + 1];
    //             devices[j + 1] = temp;
    //         }
    //     }
    // }
    console.log(peripheral);
});

