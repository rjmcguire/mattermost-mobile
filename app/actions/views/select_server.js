// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {GeneralTypes} from 'service/constants';

export function handleServerUrlChanged(serverUrl) {
    return async (dispatch, getState) => {
        dispatch({
            type: GeneralTypes.SERVER_URL_CHANGED,
            serverUrl
        }, getState);
    };
}

export default {
    handleServerUrlChanged
};