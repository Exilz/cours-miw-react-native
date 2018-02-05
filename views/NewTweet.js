import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import NewTweetBar from '../components/NewTweetBar';
import styles from '../styles/views/NewTweet.style';
import colors from '../styles/colors.style';

export default class NewTweet extends Component {

    constructor (props) {
        super(props);
        this.state = { text: '', showCamera: false, pictures: [] };
        this._onChangeText = this._onChangeText.bind(this);
        this._toggleCamera = this._toggleCamera.bind(this);        
        this._takePicture = this._takePicture.bind(this);        
        this._onPictureTaken = this._onPictureTaken.bind(this);        
        this._sendTweet = this._sendTweet.bind(this);        
    }

    _onChangeText (text) {
        this.setState({ text });
    }

    _toggleCamera () {
        if (!this.state.showCamera) {
            Keyboard.dismiss();
        }
        this.setState({
            showCamera: !this.state.showCamera
        });
    }

    _takePicture () {
        if (!this._camera) {
            return;
        }
        this._camera.capture({})
        .then(this._onPictureTaken)
        .catch((err) => console.warn('Erreur appareil photo ' + err));
    }

    _onPictureTaken (picture) {
        // Cacher l'appareil photo
        this.setState({
            showCamera: false,
            pictures: [...this.state.pictures, picture.path]
        });
    }

    _removePicture (index) {
        const newArray = this.state.pictures;
        newArray.splice(index, 1);
        this.setState({
            pictures : newArray
        });
    }

    _sendTweet () {
        const data = new FormData();
        data.append('content', this.state.text);

        this.state.pictures.forEach((picture, index) => {
            data.append('photo', {
                uri: picture,
                type: 'image/jpeg',
                name: `image-${index}`
            });
        });

        fetch('http://domaine.tld/postComment/idCascade', {
            method: 'POST',
            body: data
        })
        .then((response) => {
            alert('Tweet envoyé avec succès.');
        })
        .catch((err) => {
            console.warn("Impossible d'envoyer le tweet : " + err);
        });
    }

    get pictures () {
        if (!this.state.pictures.length) {
            return false;
        }
        const pics = this.state.pictures.map((picture, index) => {
            return (
                <View
                  key={`picture-${index}`}
                  style={styles.pictureContainer}
                >
                    <Image
                      source={{ uri: picture }}
                      style={styles.picture}
                    />
                    <TouchableOpacity
                      onPress={() => this._removePicture(index)}
                      style={styles.removePictureButton}
                    >
                        <Icon
                          name={'md-close'}
                          style={styles.removePictureIcon}
                        />
                    </TouchableOpacity>
                </View>
            );
        });
        return (
            <View style={styles.picturesContainer}>
                { pics }
            </View>
        )
    }

    get camera () {
        if (!this.state.showCamera) {
            return false;
        }
        return (
            <View style={styles.cameraView}>
                <Camera
                  ref={(c) => this._camera = c}
                  style={styles.camera}
                  aspect={Camera.constants.Aspect.fill}
                  orientation={'landscapeRight'}
                >
                    <TouchableOpacity
                      style={styles.cameraButton}
                      onPress={this._takePicture}
                    >
                        <Icon name={'md-camera'} style={styles.cameraIcon} />
                    </TouchableOpacity>
                </Camera>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={this._onChangeText}
                  underlineColorAndroid={colors.support}
                />
                { this.pictures }
                <NewTweetBar
                  text={this.state.text}
                  toggleCamera={this._toggleCamera}
                  sendTweet={this._sendTweet}
                />
                { this.camera }
            </View>
        );
    }
}
