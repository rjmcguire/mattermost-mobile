// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React, {
    Component,
    PropTypes
} from 'react';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {changeOpacity, makeStyleSheetFromTheme} from 'app/utils/theme';
import * as Utils from 'service/utils/file_utils.js';

import FileAttachmentIcon from './file_attachment_icon';

const getStyleSheet = makeStyleSheetFromTheme((theme) => {
    return StyleSheet.create({
        downloadIcon: {
            color: changeOpacity(theme.centerChannelColor, 0.7),
            marginRight: 5
        },
        fileDownloadContainer: {
            flexDirection: 'row',
            marginTop: 3
        },
        fileInfo: {
            marginLeft: 2,
            fontSize: 14,
            color: changeOpacity(theme.centerChannelColor, 0.5)
        },
        fileInfoContainer: {
            flex: 1,
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderLeftWidth: 1,
            borderLeftColor: changeOpacity(theme.centerChannelColor, 0.2)
        },
        fileName: {
            flexDirection: 'column',
            flexWrap: 'wrap',
            marginLeft: 2,
            fontSize: 14,
            color: theme.centerChannelColor
        },
        fileWrapper: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
            borderWidth: 1,
            borderColor: changeOpacity(theme.centerChannelColor, 0.2)
        }
    });
});

export default class FileAttachment extends Component {
    static propTypes = {
        file: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired
    };

    renderFileInfo() {
        const {file, theme} = this.props;
        const style = getStyleSheet(theme);

        return (
            <View style={style.fileInfoContainer}>
                <Text
                    numberOfLines={4}
                    style={style.fileName}
                >
                    {file.name.trim()}
                </Text>
                <View style={style.fileDownloadContainer}>
                    <Icon
                        name='download'
                        size={16}
                        style={style.downloadIcon}
                    />
                    <Text style={style.fileInfo}>
                        {`${file.extension.toUpperCase()} ${Utils.getFormattedFileSize(file)}`}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        const {file, theme} = this.props;
        const style = getStyleSheet(theme);

        return (
            <View style={style.fileWrapper}>
                <FileAttachmentIcon
                    file={file}
                    theme={theme}
                />
                {this.renderFileInfo()}
            </View>
        );
    }
}
