const HeaderStyles={
    HeaderHome:{
        headerStyle : { 
        backgroundColor : '#17B77D' , 
      },
      headerTintColor : '#fff' ,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    },
    HeaderBook:{
        headerStyle : { 
        backgroundColor : '#17B77D' , 
      },
      headerTintColor : '#fff' ,
      },    
}
export default HeaderStyles;