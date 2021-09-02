import React, { useContext } from 'react';
import { Input, Button } from "react-native-elements";
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { 
        state: { name, recording, locations },
        changeName,
        startRecording, 
        stopRecording 
    } = useContext(LocationContext);

    const [ saveTrack ] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder='Enter Name'
                />

                { recording ? (
                    <Button title='Stop' onPress={stopRecording}/>
                ) : (
                    <Button title='Start Recording' onPress={startRecording}/>
                ) }

                {
                    !recording && locations.length ? (
                        <> 
                            <Spacer /> 
                            <Button 
                                title='Save Recording' 
                                onPress={saveTrack}
                            />
                        </>
                    ) : null
                }
            </Spacer>
        </>
    );
}

export default TrackForm