/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';

import {
    View
} from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Progressive,
    // Shine,
    // ShineOverlay,
} from 'rn-placeholder'
/**
 */
function PlaceholderLoader( props )
{
    return (
        <View style={props.style}>
            <Placeholder
                Animation={Progressive}
            >
                <PlaceholderLine width={80}/>
                <PlaceholderLine/>
                <PlaceholderLine width={30}/>
            </Placeholder>
            <Placeholder
                Animation={Progressive}
            >
                <PlaceholderLine width={80}/>
                <PlaceholderLine/>
                <PlaceholderLine width={30}/>
            </Placeholder>
        </View>
    )
}   // PlaceholderLoader


/**
 */
export {PlaceholderLoader} ;


