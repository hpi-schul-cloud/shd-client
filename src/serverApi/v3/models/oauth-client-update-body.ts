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
 * @interface OauthClientUpdateBody
 */
export interface OauthClientUpdateBody {
    /**
     * The Oauth2 client name.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    client_name: string;
    /**
     * The Oauth2 client secret.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    client_secret?: string;
    /**
     * The allowed redirect urls of the Oauth2 client.
     * @type {Array<string>}
     * @memberof OauthClientUpdateBody
     */
    redirect_uris?: Array<string>;
    /**
     * Requested Client Authentication method for the Token Endpoint. The options are client_secret_post, client_secret_basic, private_key_jwt, and none.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    token_endpoint_auth_method: string;
    /**
     * SubjectType requested for responses to this Client. The subject_types_supported Discovery parameter contains a list of the supported subject_type values for this server. Valid types include pairwise and public.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    subject_type: string;
    /**
     * Scope is a string containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    scope?: string;
    /**
     * Thr frontchannel logout uri.
     * @type {string}
     * @memberof OauthClientUpdateBody
     */
    frontchannel_logout_uri?: string;
    /**
     * The grant types of the Oauth2 client.
     * @type {Array<string>}
     * @memberof OauthClientUpdateBody
     */
    grant_types?: Array<string>;
    /**
     * The response types of the Oauth2 client.
     * @type {Array<string>}
     * @memberof OauthClientUpdateBody
     */
    response_types?: Array<string>;
}


