﻿
app.service('service', function () {
    this.getData = function () {
        return data;
    };

    this.insertData = function (data1, data2) {
        data.push({
            data1: data1,
            data2: data2,
        });
    };

});

var data = [{'data1': 1, 'data2': 2}];







