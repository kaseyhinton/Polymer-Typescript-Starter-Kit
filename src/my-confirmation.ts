/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

@component('my-confirmation')
class MyConfirmation extends polymer.Base {


    @property({
        type: Boolean,
        value: false
    })
    active;

    user: User;

    @property({
        value: "$0"
    })
    downPayment;

    isAttached;

    createdLead = false;

    ready() {

    }

    attached() {
        this.isAttached = true;
        this.calculateDownPayment(true);
    }

    generateLead() {
        if (this.$.lead && !this.createdLead) {
            this.$.lead.data = this.user;
            this.$.lead.path = '/leads';
            this.$.lead.ref.push(this.user).then((response) => {
                this.createdLead = true;
            });
        }
    }

    @observe("active")
    activated(isActive) {
        this.calculateDownPayment(isActive);
    }

    calculateDownPayment(isActive): void {
        if (isActive && this.isAttached) {
            this.generateLead();
            if (this.user.firstTimeHomeBuyer === "yes") {
                this.set("downPayment", "$0");
                return;
            } else {
                if (this.user.housePrice) {
                    var currency = Number(this.user.housePrice.replace(/[^0-9\.]+/g, ""));
                    currency = currency * .035;
                    var stringCurrency = currency.toFixed(2).replace(/./g, function (c, i, a) {
                        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
                    });
                    stringCurrency = "$" + stringCurrency;
                    this.set("downPayment", stringCurrency);
                    return;
                } else {
                    this.set("downPayment", "Unable to calculate estimate");
                    return;
                }
            }
        }
    }

}
MyConfirmation.register();