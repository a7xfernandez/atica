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
                                <a href="modules/AccountCredentialModule.html" data-type="entity-link" >AccountCredentialModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountCredentialModule-ef6bace265732e6a16f7f6ba86e91a41"' : 'data-target="#xs-injectables-links-module-AccountCredentialModule-ef6bace265732e6a16f7f6ba86e91a41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountCredentialModule-ef6bace265732e6a16f7f6ba86e91a41"' :
                                        'id="xs-injectables-links-module-AccountCredentialModule-ef6bace265732e6a16f7f6ba86e91a41"' }>
                                        <li class="link">
                                            <a href="injectables/AccountCredentialService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountCredentialService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountInfoKeysModule.html" data-type="entity-link" >AccountInfoKeysModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountInfoKeysModule-7b14c3f5e779f2af4e2a0793738efaad"' : 'data-target="#xs-injectables-links-module-AccountInfoKeysModule-7b14c3f5e779f2af4e2a0793738efaad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountInfoKeysModule-7b14c3f5e779f2af4e2a0793738efaad"' :
                                        'id="xs-injectables-links-module-AccountInfoKeysModule-7b14c3f5e779f2af4e2a0793738efaad"' }>
                                        <li class="link">
                                            <a href="injectables/AccountProfileKeysService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountProfileKeysService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-2fe1661587374e50769e2924827870d4"' : 'data-target="#xs-injectables-links-module-AccountModule-2fe1661587374e50769e2924827870d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-2fe1661587374e50769e2924827870d4"' :
                                        'id="xs-injectables-links-module-AccountModule-2fe1661587374e50769e2924827870d4"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountTypeModule.html" data-type="entity-link" >AccountTypeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountTypeModule-accd87295ecc69edd07af7764a07f0eb"' : 'data-target="#xs-injectables-links-module-AccountTypeModule-accd87295ecc69edd07af7764a07f0eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountTypeModule-accd87295ecc69edd07af7764a07f0eb"' :
                                        'id="xs-injectables-links-module-AccountTypeModule-accd87295ecc69edd07af7764a07f0eb"' }>
                                        <li class="link">
                                            <a href="injectables/AccountTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AgentsModule.html" data-type="entity-link" >AgentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' : 'data-target="#xs-controllers-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' :
                                            'id="xs-controllers-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' }>
                                            <li class="link">
                                                <a href="controllers/AgentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' : 'data-target="#xs-injectables-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' :
                                        'id="xs-injectables-links-module-AgentsModule-216088085b4b69cf58d4f3e65b4e7687"' }>
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
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' : 'data-target="#xs-controllers-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' :
                                            'id="xs-controllers-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' }>
                                            <li class="link">
                                                <a href="controllers/ClientsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' : 'data-target="#xs-injectables-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' :
                                        'id="xs-injectables-links-module-ClientsModule-372c75a050efd1b967f23f3addf938fc"' }>
                                        <li class="link">
                                            <a href="injectables/ClientsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientsService</a>
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
                                <a href="modules/PackagesModule.html" data-type="entity-link" >PackagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' : 'data-target="#xs-controllers-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' :
                                            'id="xs-controllers-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' }>
                                            <li class="link">
                                                <a href="controllers/PackagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' : 'data-target="#xs-injectables-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' :
                                        'id="xs-injectables-links-module-PackagesModule-718e08d27e567096ee9bd6d5850adcda"' }>
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
                                            'data-target="#controllers-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' : 'data-target="#xs-controllers-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' :
                                            'id="xs-controllers-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' : 'data-target="#xs-injectables-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' :
                                        'id="xs-injectables-links-module-UsersModule-7a59e36e3a73b2f09718c1e41d1b83a5"' }>
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
                                    <a href="controllers/AgentsController.html" data-type="entity-link" >AgentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClientsController.html" data-type="entity-link" >ClientsController</a>
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
                                <a href="classes/AccountCredentialEntity.html" data-type="entity-link" >AccountCredentialEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountEntity.html" data-type="entity-link" >AccountEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountProfileKeysEntity.html" data-type="entity-link" >AccountProfileKeysEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTypeEntity.html" data-type="entity-link" >AccountTypeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AgentCreateReqDto.html" data-type="entity-link" >AgentCreateReqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AgentCreateResDto.html" data-type="entity-link" >AgentCreateResDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientCreateReqDto.html" data-type="entity-link" >ClientCreateReqDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientCreateResDto.html" data-type="entity-link" >ClientCreateResDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PackageEntity.html" data-type="entity-link" >PackageEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateDto.html" data-type="entity-link" >UserCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserIdDto.html" data-type="entity-link" >UserIdDto</a>
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
                                    <a href="injectables/AccountCredentialService.html" data-type="entity-link" >AccountCredentialService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountProfileKeysService.html" data-type="entity-link" >AccountProfileKeysService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountTypeService.html" data-type="entity-link" >AccountTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AgentsService.html" data-type="entity-link" >AgentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AgentsService-1.html" data-type="entity-link" >AgentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
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