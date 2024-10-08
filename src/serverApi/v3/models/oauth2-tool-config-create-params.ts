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



/**
 * 
 * @export
 * @interface Oauth2ToolConfigCreateParams
 */
export interface Oauth2ToolConfigCreateParams {
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    baseUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    clientSecret: string;
    /**
     * 
     * @type {boolean}
     * @memberof Oauth2ToolConfigCreateParams
     */
    skipConsent: boolean;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    frontchannelLogoutUri?: string;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    scope?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Oauth2ToolConfigCreateParams
     */
    redirectUris: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Oauth2ToolConfigCreateParams
     */
    tokenEndpointAuthMethod: string;
}


