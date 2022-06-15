import React  from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  ImageBackground

} from 'react-native';
import {theme} from '../../config/themes/colors';
import Ionicons from '@expo/vector-icons/Ionicons';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const cardHeight = 250;
const cardWidth = screenWidth/4;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#ECF0F1'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  footerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  // card
  card_container:{
    padding: 5,
    alignItems: "center",
    borderRadius : 10,

  },
  card_template:{
    // flex: 1,
    // width:"30%",
    width: screenWidth/2.5,
    height:cardHeight,
    borderRadius : 10,
    backgroundColor:theme.colors.darkGrey
    
  },
  card_image: {
    width: screenWidth/2.5,
    height: cardHeight,
  },
  des_container:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    width: screenWidth/2.5,
    height: cardHeight-180,
    bottom:0,
 

    backgroundColor:theme.colors.white, 
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10,
    // paddingHorizontal: 15,
    // paddingVertical: 10,
  },
  text_des_container:{
    // padding: 5,
    // width:screenWidth/10,
    // flex: 1,
    // justifyContent: 'flex-start',
  },
  icon_des_container:{
    // width:40,
    // flex: 1,
  
    // justifyContent: 'flex-end'
  },
  card_title_container:{
    flex:1,
  paddingTop:"80%",
  padding:5,
 flexDirection: "column",
 justifyContent: 'flex-start',

  },
  
  card_des_text: {
     color: theme.colors.darkGrey,
     fontSize:12,
     fontWeight:"bold",
    fontFamily: "Cochin"

  },
  card_title:{
    color: theme.colors.white,
    fontSize:15,
    fontWeight:"bold",
    fontFamily: "Cochin"

  },

  // TrendingCard
  trending_card_container:{
    padding: 15,
    alignItems: "center",
    // width: screenWidth/2.5,
    height: cardHeight-40,
    paddingHorizontal:5
    // borderRadius : 10,
  },
  trending_card_template:{
    width: screenWidth/2.5,
    height: cardHeight,
    borderRadius : 10,
    
  },
  content_card_image: {
    width: screenWidth/2.5,
    height: cardHeight-50,
    borderRadius : 10
  },
  // trending_card_title
  des_card_container:{
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom:0,
    backgroundColor:"10px 10px 17px 12px rgba(0,0,0,0)",
    // 
  
  },
  text_des_container:{
    // padding: 5,
    // width:screenWidth/10,
    // flex: 1,
    // justifyContent: 'flex-start',
  },
  icon_des_container:{
    // width:40,
    // flex: 1,
  
    // justifyContent: 'flex-end'
  },
  

  trending_card_sub_title: {
    color: theme.colors.white,
    fontSize:15,
    fontWeight:"bold",
    fontFamily: "Cochin"

  },
  content_title_card:{
    color: theme.colors.white,
    fontSize:15,
    fontWeight:"bold",
    fontFamily: "Cochin"
  },
  // scrollview

  scroll_container: {
    width: '100%',
    // margin: 15,
    alignSelf: 'center',
    
  },
  contentContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:  theme.colors.darkGrey,
    paddingBottom: 50
  },

  // rightArrow
  rightArrowIcon:{
    color:theme.colors.white, 
  },
  arrowIconContainer: {
    // flex: 1,
    position:'absolute',
    justifyContent:"center",
    alignItems:"center"
  },
  roundshape:  {
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor: theme.colors.primaryColor,
    shadowOffset:{width:20,height:20},
    // shadowRadius:20,
    elevation:20,
    shadowColor:theme.colors.secondary,
    height: 20, //any of height,
    width: 20, //any of width 
  },
  // CardViewWithImage
  image_card_container:{
    padding: 5,
    alignItems: "center",
    height: cardHeight, //any of height,
    width: screenWidth/3.5,
    flexDirection:'column'
   
  },
  image:{
    // alignItems: "center",
    height: screenWidth/4, //any of height,
    width: screenWidth/4,
    borderWidth:2,
    borderColor:theme.colors.white,

overflow: 'hidden'
    // borderRadius:100,
  },
  image_card_text_container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  image_card_title:{
    color: theme.colors.black,
    fontSize:15,
    fontWeight:"bold",
    fontFamily: "Cochin",
    textAlign:'center',
  },
  image_card_sub_title:{
    color: theme.colors.darkGrey,
    fontSize:12,
    fontWeight:"bold",
    fontFamily: "Cochin",

    textAlign:'center',
  },
  image_card_des:{
    color: theme.colors.primaryColor,
    fontSize:9,
    fontWeight:"bold",
    fontFamily: "Cochin",
    alignSelf:'center',
     
  },
  // CardView
  card_view_container:{
    padding:15,
    alignItems:'center'
  },
  card_view_template:{
    width: screenWidth-50,
    height:  cardHeight-80,
    borderRadius:10

  },
  card_view_image:{
    width: screenWidth-50,
    height: cardHeight-80,
    borderRadius:10
  },
  card_view_title_container:{
  paddingTop:"34%",
  padding:10,
 flexDirection: "column",
 justifyContent: 'flex-start',

  },
  card_view_des_container:{
    // flex:1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    position: "relative",
    bottom:0,
    backgroundColor:"10px 10px 17px 12px rgba(0,0,0,0)",
  },
  card_View_scroll_container:{
    justifyContent:'center',
    paddingBottom:15,
    marginLeft:10,
    // margin
  },

  sectionTitle:{
    color: theme.colors.black,
    fontSize:25,
    fontWeight:"bold",
    fontFamily: "Cochin",
    textAlign:'center',
  },
  // Icon
  icon_container:{
    // flex:3,
    flexDirection: "column",
    justifyContent: 'center',
    position: "relative",
    alignItems:'center',
    // bottom:0,
  },
  my_health_icon_container:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    backgroundColor: theme.colors.white,
    shadowOffset:{width:40,height:40},
    elevation:20,
    shadowColor:theme.colors.secondary,
    height: 40, //any of height,
    width: 40, 
  },
  iconStyle:{
    // justifyContent:'center',
  },
  // headerItemContainer
  headerItemContainer:{
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height:80,
    marginBottom: 10,
    // alignSelf: 'center',
    justifyContent:'space-evenly',

  }

});

export function HomeHeaderItems() {
  return (<ScrollView horizontal contentContainerStyle={styles.headerItemContainer}>

<Icon color={theme.colors.primaryColor} size={20} name='heart' desText='Health'/>
 <Icon color={theme.colors.primaryColor} size={20} name='document' desText='Content'/>
 <Icon color={theme.colors.primaryColor} size={20} name='people' desText={'Communities'}/>
 <Icon color={theme.colors.primaryColor} size={20} name='contract' desText={'Tracker'}/>
 <Icon color={theme.colors.primaryColor} size={20} name='umbrella' desText={'Services'}/>
  </ScrollView>)
}

function RightArrow ({color,stylesRightArrow,stylesRightArrowContainer, name}){
  return (
    <TouchableOpacity style={stylesRightArrowContainer}>
    <View style={stylesRightArrow}>
<Ionicons name={name} size={10} color={color}/>
    </View>
    </TouchableOpacity>  
    
  )
}

function Icon ({color, name,size,desText}){
  return (
    <View style={styles.icon_container}>
<TouchableOpacity style={styles.my_health_icon_container}>
    {/* <View style={styles.iconStyle}> */}
<Ionicons name={name} size={size} color={color}/>
    {/* </View> */}
    </TouchableOpacity>  
    <Text style={{textAlign:'center', fontWeight:"bold", color:theme.colors.darkGrey, fontSize:12}}>My</Text>
  <Text style={{textAlign:'center', fontWeight:"normal", color:theme.colors.darkGrey, fontSize:10}}>{desText}</Text>
    </View>
    
    
  )
}

function CardItem(){
  return(
<TouchableOpacity style={styles.card_container}>
    <View style={styles.card_template}>  
    <ImageBackground style={styles.card_image} source={require('../../../assets/heart.jpeg')}  borderRadius={10}>
{/* {{uri: 'https://i.picsum.photos/id/881/700/700.jpg?hmac=-JqTJ4_Ped2jYmjiaDgYZOAGzvC0CybCKbROT3GJgZc'}}  > */}
    <View style={styles.card_title_container}>
    <Text style={styles.card_title}>My Health Content</Text>
     <View
  style={{
    backgroundColor:  theme.colors.primaryColor,
  height: 2,
  width:40
  }}
/>
    </View>
   
<View style={styles.des_container}>
    <Text style={styles.card_des_text}>Learn Investing</Text>
    <RightArrow stylesRightArrow={styles.arrowIconContainer} stylesRightArrowContainer={styles.roundshape} color={theme.colors.white} />
    </View>
 </ImageBackground>

    </View>
</TouchableOpacity> 

     
  );
}

function TrendingCard(){
  return(

    <TouchableOpacity style={styles.trending_card_container}>
    <View style={styles.trending_card_template}>  
    <ImageBackground style={styles.content_card_image} source={require('../../../assets/heart.jpeg')}  borderRadius={10}>
{/* {{uri: 'https://i.picsum.photos/id/881/700/700.jpg?hmac=-JqTJ4_Ped2jYmjiaDgYZOAGzvC0CybCKbROT3GJgZc'}}  > */}
    <View style={styles.card_title_container}>
    <Text style={styles.card_title}>My Health Content</Text>
     <View
  style={{
    backgroundColor:  theme.colors.primaryColor,
  height: 2,
  width:40
  }}
/>

<View style={styles.des_card_container}>
    <Text style={styles.trending_card_sub_title}>Description</Text>
    <View style={{width:10}}/>
    <RightArrow stylesRightArrow={styles.arrowIconContainer} stylesRightArrowContainer={styles.roundshape} color={theme.colors.white} />
</View> 

</View>
 </ImageBackground>
    </View>
</TouchableOpacity> 
  );
}

function CardViewWithImage(){
  return (
    <TouchableOpacity style={styles.image_card_container}>
    <View style={styles.image_container}>
    <Image style={styles.image} source={require('../../../assets/heart.jpeg')}  borderRadius={screenWidth/5}/>
    </View>
    <View style={styles.image_card_text_container}>
    <Text style={styles.image_card_title}>Location</Text>
    <Text style={styles.image_card_sub_title}>Learn Investingdfjds</Text>
    <Text style={styles.image_card_des}>Click here</Text>
    </View>
</TouchableOpacity> 
  )
}


function CardView(){
  return(<TouchableOpacity style={styles.card_view_container} >
    <View style={styles.card_view_template}>  
    <ImageBackground style={styles.card_view_image} source={require('../../../assets/heart.jpeg')}  borderRadius={10}>
    <View style={styles.card_view_title_container}>
   
    <Text style={styles.card_title}>My Health Content</Text>
    {/* <View style={{height:5}}/> */}
     <View
  style={{
    backgroundColor:  theme.colors.primaryColor,
  height: 2,
  width:40
  }}
/>
<View style={styles.card_view_des_container}>
    <Text style={styles.trending_card_sub_title}>Description</Text>
    <View style={{width:10}}/>
    <RightArrow stylesRightArrow={styles.arrowIconContainer} stylesRightArrowContainer={styles.roundshape} color={theme.colors.white} />
</View>
    </View>


    </ImageBackground>
    </View>
  </TouchableOpacity>)
}
const TOP_PICK_DATA=[
  {
    title: 'Top Picks For you',
    data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  },
  {
    title: 'Trending',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
  {
    title: 'Trending',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
  {
    title: 'Trending',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],},
    {
      title: 'Trending',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Trending',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  }, 
]
  const DATA = [
    {
      title: 'Top Picks For you',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Trending',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Trending',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Trending',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    }, 
  ]
function HomeScreen ()  {

  return (
    <SafeAreaView style={styles.appContainer}>
      <HomeHeaderItems/>
      {/* <HomeHeaderItems/> */}
<ScrollView automaticallyAdjustContentInsets={true} contentContainerStyle={styles.contentContainer} nestedScrollEnabled="true">

<ScrollView scrollIndicatorInsets = {{top: 0, left: 0, bottom: 10, right: 0}} horizontal   showsHorizontalScrollIndicator={true} contentContainerStyle={styles.card_View_scroll_container} >
        <CardView/>
        <CardView/>
        <CardView/>
      </ScrollView>

      <FlatList
      scrollEnabled={false}
  data={DATA}
  renderItem={({ DATA }) => (
    <CardItem/>
 
  )}
  numColumns={2}
  keyExtractor={(DATA, index) => index.toString()}
/>
{/* CardViewWithImage */}

<View style={{alignSelf:'flex-start',marginLeft:30}}><Text style={styles.sectionTitle}>Top Picks For You</Text></View>
<FlatList
      scrollEnabled={false}
  data={TOP_PICK_DATA}
  renderItem={({ TOP_PICK_DATA }) => (
    <CardViewWithImage/>
  
  )}
  numColumns={3}
  keyExtractor={(TOP_PICK_DATA, index) => index.toString()}
/>
{/* TrendingCard */}
<View style={{alignSelf:'flex-start',marginLeft:30}}><Text style={styles.sectionTitle}>Trending</Text></View>
<FlatList
  scrollEnabled={false}
  data={DATA}
  renderItem={({ TOP_PICK_DATA }) => (
    <TrendingCard/>
  )}
  numColumns={2}
  keyExtractor={(TOP_PICK_DATA, index) => index.toString()}
/>

</ScrollView> 
    </SafeAreaView>
    

   
  );
};



export default HomeScreen;



