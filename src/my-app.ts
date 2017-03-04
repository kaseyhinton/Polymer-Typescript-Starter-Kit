/// <reference path='../bower_components/polymer-ts/polymer-ts.ts' />

class HTMLElementExt {
    querySelectorAll: any;
}

@behavior(LssProviderBehavior)
@component('my-app')
class MyApp extends polymer.Base {
    // stand-in properties for behavior mixins 
    provideInstance: (key: string, any) => void;

    user: User;

    @property({
        type: String,
        reflectToAttribute: true,
        notify: true,
    })
    page: string;

    @observe('routeData.page')
    pageChanged(page: string) {
        this.page = page || 'zipcode';

        var resolvedPageUrl = this.resolveUrl('my-' + this.page + '.html');
        this.importHref(resolvedPageUrl, null, this.showPage404, true);

        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    @listen('navigate')
    navigationHandler(event) {
        this.set("routeData.page", event.detail.location);
    }

    showPage404() {
        this.set('page', '404');
    }

    isEqual(a, b): boolean {
        return a === b;
    }

    attached() {
    }

    ready() {
        this.user = new User();
    }

}
MyApp.register();