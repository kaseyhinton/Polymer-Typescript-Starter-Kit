/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

@component('my-additional-info')
class MyAdditionalInfo extends polymer.Base {

    user: User;
    firstTimeHomeBuyer: string;
    ruralCommunity: string;
    creditScoreOver640: string;
    housePrice: string;
    name: string;
    email: string;
    date: string = new Date().toDateString();

    @property({
        type: Boolean,
        value: false
    })
    active;

    attached() {
    }

    @listen('submit.tap')
    submitHandler(e) {
        let valid = this.$.form.validate();
        if (valid) {
            this.user.firstTimeHomeBuyer = this.firstTimeHomeBuyer;
            this.user.ruralCommunity = this.ruralCommunity;
            this.user.creditScoreOver640 = this.creditScoreOver640;
            this.user.housePrice = this.housePrice;
            this.user.name = this.name;
            this.user.email = this.email;
            this.user.date = this.date;
            this.fire('navigate', { location: 'confirmation' });
        }
    }
}
MyAdditionalInfo.register();