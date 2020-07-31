import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class DividerLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        dashed: PropTypes.bool,
        textColor: PropTypes.string,
        borderColor: PropTypes.string,
        orientation: PropTypes.oneOf(['left', 'center', 'right'])
    };

    static defaultProps = {
        dashed: false,
        orientation: 'left',
        textColor: 'gray',
        borderColor: 'gray'
    };

    render() {
        const props = this.props;
        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.line,
                        { borderColor: props.borderColor },
                        props.dashed && styles.dashed,
                        props.orientation === 'left' ? styles.shortWidth : { flex: 1 }
                    ]}
                />
                <Text style={[styles.text, { color: props.textColor }]}>{props.children}</Text>
                <View
                    style={[
                        styles.line,
                        { borderColor: props.borderColor },
                        props.dashed && styles.dashed,
                        props.orientation === 'right' ? styles.shortWidth : { flex: 1 }
                    ]}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 24,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 6,
        paddingHorizontal: 20,
    },
    line: {
        height: 24,
        borderBottomWidth: 1,
        transform: [{ translateY: -12 }],
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    shortWidth: {
        width: 20
    },
    dashed: {
        borderStyle: 'dashed'
    },
    text: {
        paddingHorizontal: 24,
        fontSize: 20,
        fontWeight: '300',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
});