'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api.backend.users documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountsCredentialsModule.html" data-type="entity-link" >AccountsCredentialsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' : 'data-target="#xs-controllers-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' :
                                            'id="xs-controllers-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsCredentialsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsCredentialsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' : 'data-target="#xs-injectables-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' :
                                        'id="xs-injectables-links-module-AccountsCredentialsModule-3475393d7364755b4751a6d2a675cfcc"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsCredentialsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsCredentialsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsModule.html" data-type="entity-link" >AccountsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' : 'data-target="#xs-controllers-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' :
                                            'id="xs-controllers-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' : 'data-target="#xs-injectables-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' :
                                        'id="xs-injectables-links-module-AccountsModule-e5c580bf66b7380949beef07a4f5981d"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsProfilesModule.html" data-type="entity-link" >AccountsProfilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' : 'data-target="#xs-controllers-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' :
                                            'id="xs-controllers-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsProfilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsProfilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' : 'data-target="#xs-injectables-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' :
                                        'id="xs-injectables-links-module-AccountsProfilesModule-b96d55e88ea839b029d0fe56ee7fb378"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsProfilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsProfilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountsTypesModule.html" data-type="entity-link" >AccountsTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' : 'data-target="#xs-controllers-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' :
                                            'id="xs-controllers-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' }>
                                            <li class="link">
                                                <a href="controllers/AccountsTypesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsTypesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' : 'data-target="#xs-injectables-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' :
                                        'id="xs-injectables-links-module-AccountsTypesModule-c26737dbdabad25e8bbdbc99f12f8289"' }>
                                        <li class="link">
                                            <a href="injectables/AccountsTypesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AgentsModule.html" data-type="entity-link" >AgentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' : 'data-target="#xs-controllers-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' :
                                            'id="xs-controllers-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' }>
                                            <li class="link">
                                                <a href="controllers/AgentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' : 'data-target="#xs-injectables-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' :
                                        'id="xs-injectables-links-module-AgentsModule-cf342d0041b4d82c48fee192e85bfd6c"' }>
                                        <li class="link">
                                            <a href="injectables/AgentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' : 'data-target="#xs-controllers-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' :
                                            'id="xs-controllers-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' : 'data-target="#xs-injectables-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' :
                                        'id="xs-injectables-links-module-AuthModule-d211b3c964c8f09aa496fe82193ea133"' }>
                                        <li class="link">
                                            <a href="injectables/ApiKeyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommonModule-d917e587262be75209ebddaba5ffb6ee"' : 'data-target="#xs-injectables-links-module-CommonModule-d917e587262be75209ebddaba5ffb6ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-d917e587262be75209ebddaba5ffb6ee"' :
                                        'id="xs-injectables-links-module-CommonModule-d917e587262be75209ebddaba5ffb6ee"' }>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomersModule.html" data-type="entity-link" >CustomersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' : 'data-target="#xs-controllers-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' :
                                            'id="xs-controllers-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' }>
                                            <li class="link">
                                                <a href="controllers/CustomersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' : 'data-target="#xs-injectables-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' :
                                        'id="xs-injectables-links-module-CustomersModule-0ffba99a86fcc6f7401bf49b09702cf8"' }>
                                        <li class="link">
                                            <a href="injectables/CustomersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PackagesModule.html" data-type="entity-link" >PackagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' : 'data-target="#xs-controllers-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' :
                                            'id="xs-controllers-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' }>
                                            <li class="link">
                                                <a href="controllers/PackagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' : 'data-target="#xs-injectables-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' :
                                        'id="xs-injectables-links-module-PackagesModule-9ab0d9bef4c7e4f0bd06bc93b37b64ab"' }>
                                        <li class="link">
                                            <a href="injectables/PackagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' : 'data-target="#xs-controllers-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' :
                                            'id="xs-controllers-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' : 'data-target="#xs-injectables-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' :
                                        'id="xs-injectables-links-module-UsersModule-924943e1ecd03542a06d115ffa8a1b30"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountsController.html" data-type="entity-link" >AccountsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AccountsCredentialsController.html" data-type="entity-link" >AccountsCredentialsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AccountsProfilesController.html" data-type="entity-link" >AccountsProfilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AccountsTypesController.html" data-type="entity-link" >AccountsTypesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AgentsController.html" data-type="entity-link" >AgentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CustomersController.html" data-type="entity-link" >CustomersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PackagesController.html" data-type="entity-link" >PackagesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccessToken.html" data-type="entity-link" >AccessToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountDto.html" data-type="entity-link" >AccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsCredential.html" data-type="entity-link" >AccountsCredential</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsCredentialDto.html" data-type="entity-link" >AccountsCredentialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsProfile.html" data-type="entity-link" >AccountsProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsProfileDto.html" data-type="entity-link" >AccountsProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsType.html" data-type="entity-link" >AccountsType</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsTypeDto.html" data-type="entity-link" >AccountsTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AcctionResponseDto.html" data-type="entity-link" >AcctionResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Agent.html" data-type="entity-link" >Agent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccessToken.html" data-type="entity-link" >CreateAccessToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountDto.html" data-type="entity-link" >CreateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountsCredentialDto.html" data-type="entity-link" >CreateAccountsCredentialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountsProfileDto.html" data-type="entity-link" >CreateAccountsProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountsTypeDto.html" data-type="entity-link" >CreateAccountsTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAgentDto.html" data-type="entity-link" >CreateAgentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCustomerDto.html" data-type="entity-link" >CreateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePackageDto.html" data-type="entity-link" >CreatePackageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Package.html" data-type="entity-link" >Package</a>
                            </li>
                            <li class="link">
                                <a href="classes/PackageDto.html" data-type="entity-link" >PackageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountDto.html" data-type="entity-link" >UpdateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountsCredentialDto.html" data-type="entity-link" >UpdateAccountsCredentialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountsProfileDto.html" data-type="entity-link" >UpdateAccountsProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountsTypeDto.html" data-type="entity-link" >UpdateAccountsTypeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAgentDto.html" data-type="entity-link" >UpdateAgentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCustomerDto.html" data-type="entity-link" >UpdateCustomerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePackageDto.html" data-type="entity-link" >UpdatePackageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountsCredentialsService.html" data-type="entity-link" >AccountsCredentialsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountsProfilesService.html" data-type="entity-link" >AccountsProfilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountsService.html" data-type="entity-link" >AccountsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountsTypesService.html" data-type="entity-link" >AccountsTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AgentsService.html" data-type="entity-link" >AgentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyAuthGuard.html" data-type="entity-link" >ApiKeyAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyStrategy.html" data-type="entity-link" >ApiKeyStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomersService.html" data-type="entity-link" >CustomersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PackagesService.html" data-type="entity-link" >PackagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});