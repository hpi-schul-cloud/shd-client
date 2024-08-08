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
 * @interface VideoConferenceOptionsResponse
 */
export interface VideoConferenceOptionsResponse {
    /**
     * Every attendee joins muted
     * @type {boolean}
     * @memberof VideoConferenceOptionsResponse
     */
    everyAttendeeJoinsMuted: boolean;
    /**
     * Every attendee joins as a moderator
     * @type {boolean}
     * @memberof VideoConferenceOptionsResponse
     */
    everybodyJoinsAsModerator: boolean;
    /**
     * Moderator must approve join requests
     * @type {boolean}
     * @memberof VideoConferenceOptionsResponse
     */
    moderatorMustApproveJoinRequests: boolean;
}

