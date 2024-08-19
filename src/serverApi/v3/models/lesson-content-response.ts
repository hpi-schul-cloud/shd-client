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
 * @interface LessonContentResponse
 */
export interface LessonContentResponse {
    /**
     * 
     * @type {object}
     * @memberof LessonContentResponse
     */
    content: object;
    /**
     * The id of the Material entity
     * @type {string}
     * @memberof LessonContentResponse
     * @deprecated
     */
    _id: string;
    /**
     * The id of the Material entity
     * @type {string}
     * @memberof LessonContentResponse
     */
    id: string;
    /**
     * Title of the Material entity
     * @type {string}
     * @memberof LessonContentResponse
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof LessonContentResponse
     */
    component: LessonContentResponseComponent;
    /**
     * 
     * @type {boolean}
     * @memberof LessonContentResponse
     */
    hidden: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum LessonContentResponseComponent {
    ETHERPAD = 'Etherpad',
    GEO_GEBRA = 'geoGebra',
    INTERNAL = 'internal',
    RESOURCES = 'resources',
    TEXT = 'text',
    NE_XBOARD = 'neXboard'
}



