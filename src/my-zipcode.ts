/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

@component('my-zipcode')
class MyZipcode extends polymer.Base {

    user: User;
    zipcode: string;

    @property({
        type: Boolean,
        value: false
    })
    active;

    ready() {
    }

    attached() {
    }

    @listen('submit.tap')
    submitHandler(e) {
        let valid = this.$.form.validate();
        if (valid) {
            this.user.zipcode = this.zipcode;
            this.fire('navigate', { location: 'additional-info' });
        }
    }
}
MyZipcode.register();