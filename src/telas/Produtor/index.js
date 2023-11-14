import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';



export default function Produtor() {
    const route = useRoute();
    console.log(route.params);
    
    return <Text>Produtor</Text>
}