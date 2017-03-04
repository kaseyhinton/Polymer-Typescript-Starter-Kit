/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

@component('my-app')
class MyApp extends polymer.Base {

    @property({
        type: String,
        reflectToAttribute: true,
        notify: true,
    })
    page: string;

    @observe('routeData.page')
    pageChanged(page: string) {
        this.page = page || 'view1';

        var resolvedPageUrl = this.resolveUrl('my-' + this.page + '.html');
        this.importHref(resolvedPageUrl, null, this.showPage404, true);

        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    showPage404() {
        this.set('routeData.page', 'view404');
    }

    attached() { }

    ready() { }

}
MyApp.register();