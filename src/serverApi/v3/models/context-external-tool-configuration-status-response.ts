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
 * @interface ContextExternalToolConfigurationStatusResponse
 */
export interface ContextExternalToolConfigurationStatusResponse {
    /**
     * Is the tool outdated on school scope, because of non matching versions or required parameter changes on ExternalTool?
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isOutdatedOnScopeSchool: boolean;
    /**
     * Is the tool outdated on context scope, because of non matching versions or required parameter changes on SchoolExternalTool?
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isOutdatedOnScopeContext: boolean;
    /**
     * True, if a mandatory parameter on the context external tool is missing a value
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isIncompleteOnScopeContext: boolean;
    /**
     * True, if a optional parameter on the context external tool is missing a value. This is happening, when course is copied.
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isIncompleteOperationalOnScopeContext: boolean;
    /**
     * Is the tool deactivated, because of superhero or school administrator
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isDeactivated: boolean;
    /**
     * True if the tool is not licensed for user
     * @type {boolean}
     * @memberof ContextExternalToolConfigurationStatusResponse
     */
    isNotLicensed: boolean;
}

