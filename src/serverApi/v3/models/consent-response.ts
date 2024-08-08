/* tslint:disable */
/* eslint-disable */
/**
 * Schulcloud-Verbund-Software Server API
 * This is v3 of Schulcloud-Verbund-Software Server. Checkout /docs for v1.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OauthClientResponse } from './oauth-client-response';
import { OidcContextResponse } from './oidc-context-response';

/**
 * 
 * @export
 * @interface ConsentResponse
 */
export interface ConsentResponse {
    /**
     * ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session
     * @type {string}
     * @memberof ConsentResponse
     */
    acr: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConsentResponse
     */
    amr?: Array<string>;
    /**
     * Is the id/authorization challenge of the consent authorization request. It is used to identify the session.
     * @type {string}
     * @memberof ConsentResponse
     */
    challenge: string;
    /**
     * 
     * @type {OauthClientResponse}
     * @memberof ConsentResponse
     */
    client: OauthClientResponse;
    /**
     * 
     * @type {object}
     * @memberof ConsentResponse
     */
    context: object;
    /**
     * LoginChallenge is the login challenge this consent challenge belongs to.
     * @type {string}
     * @memberof ConsentResponse
     */
    login_challenge: string;
    /**
     * LoginSessionID is the login session ID.
     * @type {string}
     * @memberof ConsentResponse
     */
    login_session_id: string;
    /**
     * 
     * @type {OidcContextResponse}
     * @memberof ConsentResponse
     */
    oidc_context: OidcContextResponse;
    /**
     * RequestUrl is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client.
     * @type {string}
     * @memberof ConsentResponse
     */
    request_url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConsentResponse
     */
    requested_access_token_audience?: Array<string>;
    /**
     * The request scopes of the login request.
     * @type {Array<string>}
     * @memberof ConsentResponse
     */
    requested_scope?: Array<string>;
    /**
     * Skip, if true, implies that the client has requested the same scopes from the same user previously.
     * @type {boolean}
     * @memberof ConsentResponse
     */
    skip: boolean;
    /**
     * Subject is the user id of the end-user that is authenticated.
     * @type {string}
     * @memberof ConsentResponse
     */
    subject: string;
}

