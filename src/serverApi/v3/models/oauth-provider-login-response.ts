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
 * @interface OauthProviderLoginResponse
 */
export interface OauthProviderLoginResponse {
    /**
     * Id of the corresponding client.
     * @type {string}
     * @memberof OauthProviderLoginResponse
     */
    client_id: string;
    /**
     * The id/challenge of the consent login request.
     * @type {string}
     * @memberof OauthProviderLoginResponse
     */
    challenge: string;
    /**
     * 
     * @type {OauthClientResponse}
     * @memberof OauthProviderLoginResponse
     */
    client: OauthClientResponse;
    /**
     * 
     * @type {OidcContextResponse}
     * @memberof OauthProviderLoginResponse
     */
    oidc_context: OidcContextResponse;
    /**
     * The original oauth2.0 authorization url request by the client.
     * @type {string}
     * @memberof OauthProviderLoginResponse
     */
    request_url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OauthProviderLoginResponse
     */
    requested_access_token_audience: Array<string>;
    /**
     * The request scopes of the login request.
     * @type {Array<string>}
     * @memberof OauthProviderLoginResponse
     */
    requested_scope?: Array<string>;
    /**
     * The login session id. This parameter is used as sid for the oidc front-/backchannel logout.
     * @type {string}
     * @memberof OauthProviderLoginResponse
     */
    session_id: string;
    /**
     * Skip, if true, implies that the client has requested the same scopes from the same user previously.
     * @type {boolean}
     * @memberof OauthProviderLoginResponse
     */
    skip: boolean;
    /**
     * User id of the end-user that is authenticated.
     * @type {string}
     * @memberof OauthProviderLoginResponse
     */
    subject: string;
}


