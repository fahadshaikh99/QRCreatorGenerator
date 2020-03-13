import React from 'react';
import { View, Text, Image} from 'react-native';

class StyleCode extends React.Component {
    render() {
        return(
            <View>
                <Image
                style={{ height: 300, width: 200, marginLeft: 40}}
                source={{ uri: this.props.ImageUri }}
                />
            </View>
        );
    }
}

export default StyleCode;