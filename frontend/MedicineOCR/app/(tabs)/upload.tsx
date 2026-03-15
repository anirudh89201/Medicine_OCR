import React, { useState } from "react";
import {View,Text, TouchableOpacity,Image} from "react-native"
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "@/scripts/uploadImage";
export default function upload(){
    const [image,setImage] = useState<string|null>(null);
    const pickImageFromCamera = async()=>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status!== "granted"){
            alert("Camera permission required")
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing:false,
            quality:0.7,
            base64:false
        })
        if(!result.canceled){
            console.log("Photo url",result.assets[0].uri)
            setImage(result.assets[0].uri)
            try{

                uploadImage(result.assets[0].uri)
            }catch(error){
                if(error instanceof Error){
                    console.error(error.message)
                }else{
                    console.error(error)
                }
            }
        }
    }
    
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#4CAF50",paddingVertical:16,paddingHorizontal:32,borderRadius:12}}
        onPress={pickImageFromCamera}
        >
            <Text style={{fontSize:10,color:'white'}}>Click to Upload</Text>
        </TouchableOpacity>
        {image && (
            <Image
            source={{uri:image}}
            style={{width:200,height:200,marginTop:20}}
            />
        )}
        </View>

    )
}