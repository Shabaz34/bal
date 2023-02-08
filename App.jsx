import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState, useEffect, } from "react";
import {Animated ,StyleSheet, Text, View,Button,Alert, Modal, Pressable,TextInput,ScrollView,TouchableOpacity,Image  } from 'react-native';
import { Button as CC } from '@rneui/base';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import 'react-native-gesture-handler';
import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';

export const SendData = createContext();

let catMove;
let cate;
let CategoryFilter=[];
let catindex;
let CategoryAdd=[];
const Stack = createNativeStackNavigator();
export default function App(props) {
  const [CatNume,setCatNume]=useState(0);

  // const [image, setImage] = useState([]);

  // const pickImage = async (ind) => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);
  //   console.log(ind);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };


  const [anim,setanim]=useState(new Animated.Value(0));



  const [Category,SetCategory]=useState([
    {name:'Peronal',note:['bla bla bla bla','bli bli bli bli']},
    {name:'Work',note:['blio blio blio blio','blio blio blio blio','bal bal bal bal','blila blila blila blila']},
  ]);
function HomeScreen({ navigation }) {
  const [categ, setcateg] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);


  const [NoteName, setNoteName] = useState(null);


  //const Category = useContext(SendData);
  const [catte, setCatte] = useState(null);

  const handleChangeName = (event) => {
    setNoteName(event);
  };

  const AddNote=()=>{
    // console.log(NoteName);
    if(NoteName!=null){
    let arr=Category;
    // console.log(arr);
let NewCat={name:NoteName,note:[]}
    arr.push(NewCat);
    SetCategory(arr)
    setNoteName(NoteName)
    setCatNume(0);
    }
  }




  function deleteCat (st){  
    CategoryFilter=Category;
    CategoryFilter=CategoryFilter.filter(CategoryFilter => CategoryFilter.name != st);
    setCatNume(0);
    SetCategory(CategoryFilter);

}


function asd(ss,inde){
  console.log(ss,'68');
  catindex=inde;
  catMove=ss;
  navigation.navigate('Details')
}

useEffect(()=>{
  
  cate = Category.map((st,index)=>{
    console.log(index);
    return(
      <View key={index} style={{paddingTop:20,alignSelf:'flex-end', flexDirection: 'row'}}>
      <View style={{justifyContent:'flex-end'}}><Ionicons name="trash-outline" style={{fontSize:23}} onPress={() =>{deleteCat(st.name)}}></Ionicons></View>
      <View style={{paddingRight:5,paddingLeft:10}}><Text style={{fontSize:25}} onPress={() => {asd(st.note)}} >{st.note.length}</Text></View>
      <View style={{width:'30%'}}><Text style={{fontSize:25}} onPress={() => asd(st.note,index)} >{st.name}</Text></View>
    
    </View>

      );

  });    
  if(CatNume==0){
    setCatNume(Category.length);
  }
})




  return (

    
    <View> 
      <View style={{alignSelf:'center'}}>
      <View style={{paddingRight:5,paddingLeft:10}}><Text style={{fontSize:35}}>My Note App!</Text></View>

      {cate}

      </View>
<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Note : </Text> 
                <TextInput
                style={{margin:14}}
                placeholder="Write Note"
                type="text"
                onChangeText={(value) => handleChangeName(value)}
              ></TextInput>
              <Button style={[styles.buttonR]} title="Add Note" onPress={AddNote}><Text style={styles.textStyle}>Add Note</Text></Button>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        title="Add Note"
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text title="Add Note" style={styles.textStyle}>Add Note</Text>
      </Pressable>
    </View></View>
    
  );

}





function DetailsScreen() {
  const [isActive, setIsActive] = useState(false);
  const [catIn, setcatIn] = useState(Category);
  const [noteIn, setnoteIn] = useState(null);


  
  function animate(){
Animated.timing(
  anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
    anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
      anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
        anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
    anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
      anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
        anim,{toValue:1,duration:200,useNativeDriver: false}).start(()=>Animated.timing(
          anim,{toValue:1,duration:200,useNativeDriver: false}))))))))
  }

  const handlerLongClick=()=>{
    console.log('sas');
    console.log(3);
    setIsActive(current => !current);
    setInterval(()=>animate(),100)
  }

  const handleAddNote = (event) => {
    setnoteIn(event);
  };


  const addInNote = () => {
    console.log(noteIn,' adasdadd');
    var CategoryAddInd=Category[catindex].note;

    CategoryAdd=Category;    


    CategoryAddInd.push(noteIn);

    CategoryAdd[catindex].note=CategoryAddInd;


    SetCategory(CategoryAdd);
    setcatIn(CategoryAdd);
    setCatNume(0);

  };
  


  const deleteNote=(st)=>{
    console.log(catIn[catindex],'163');
    var CategoryFilterInd=Category[catindex].note;
    console.log(CategoryFilterInd,'165');

    CategoryFilter=Category;    

    console.log(CategoryFilter,'170');

    CategoryFilterInd=CategoryFilterInd.filter(CategoryFilterInd => CategoryFilterInd != st);

    CategoryFilter[catindex].note=CategoryFilterInd;

    console.log(CategoryFilter,'176');

    SetCategory(CategoryFilter);


    console.log(3);
    setIsActive(current => !current);
    setCatNume(0);

  }

  const spin = anim.interpolate(
 {   inputRange:[0,1],
    outputRange:['-1.3deg','1.3deg']}
  );

  const spin2 = anim.interpolate(
    {   inputRange:[0,0],
       outputRange:['0deg','0deg']}
     );

let cateM;
  cateM = catIn[catindex].note.map((st,index)=>{

    return(
      <Animated.View key={index} style={{transform:[{rotate:isActive ?spin:spin2}]}}>
      <TouchableOpacity
      onLongPress={() =>{handlerLongClick()}}     
      //Here is the trick
      activeOpacity={0.6}>
      <View
      style={[styles.card, styles.shadowProp]}>      
     <Text style={{fontSize:25}} >{st}</Text> 
     <Ionicons name="close-circle-outline" style={{fontSize:23,display: isActive ? 'flex' : 'none',position: 'absolute',
left:     0,
top:      0,}}onPress={() =>{deleteNote(st)}}></Ionicons>
{/* <CC title="Pick an image" onPress={()=>pickImage(index)} style={{width:50}}></CC>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
     </View>

  </TouchableOpacity>
  </Animated.View>

      );

  });    

  return (
    <ScrollView style={{margin:10}} >
    {cateM}
    <Ionicons name="add-circle-outline" style={{fontSize:43,alignSelf:'center'}}onPress={() =>{addInNote()}} ></Ionicons>
    <View>
                <TextInput
                style={{borderColor:'#E0E7EA', fontSize:23,alignSelf:'center',margin:5,backgroundColor:'#E0E7EA'}}
                placeholder="Write Note"
                type="text"
                onChangeText={(value) => handleAddNote(value)}
              ></TextInput>
      </View>
    </ScrollView >
  );
}


 
  return (

        <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} /> 
       </Stack.Navigator>
     </NavigationContainer>


  );
  

}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:14
  },
  buttonR: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    height:35
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
    alignSelf:'center',
    shadowColor: 'black',
    elevation: 8,
    shadowOffset: { width: 7, height: 3 },
    shadowOpacity: 12,
    shadowRadius: 14, 
  },


});
