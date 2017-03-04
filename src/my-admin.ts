/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

@component('my-admin')
class MyAdmin extends polymer.Base {

    @property({
        type: Object
    })
    data;

}
MyAdmin.register();