import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Dimensions,
    SafeAreaView,
} from 'react-native'

const windowWidth = Dimensions.get('window').width;
function GamePage4x4({ navigation: { navigate }, route }) {
    const [active_player, setActive_player] = useState(route.params)

    const [counter,setCounter] = useState(0)

    const [markers, setMarkers] = useState([
      null, null, null,
      null, null, null,
      null, null, null
    ])

    const markPosition = (position) => {
      if(!markers[position]){
        let temp = [...markers]
        temp[position] = active_player
        setMarkers(temp)
        setCounter(counter + 1)
        if(active_player === 'X'){  //transfer chances to next player
          setActive_player('O')
        }else{
          setActive_player('X')
        }
      }
    }
  
    const resetMarkers = () => {
      setMarkers([
        null, null, null, null,
        null, null, null, null,
        null, null, null, null,
        null, null, null, null,
      ])
      setCounter(0)
    }
  
    const calculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [1,2,3],
        [4,5,6],
        [5,6,7],
        [8,9,10],
        [9,10,11],
        [12,13,14],
        [13,14,15],
        [0,4,8],
        [1,5,9],
        [2,6,10],
        [3,7,11],
        [4,8,12],
        [5,9,13],
        [6,10,14],
        [7,11,15],
        [0,5,10],
        [5,10,15],
        [1,6,11],
        [4,9,14],
        [3,6,9],
        [6,9,12],
        [7,10,13],
        [2,5,8]
      ];
      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
        }
      }
      return null;
    }
  
    useEffect(() => {
      const winner = calculateWinner(markers);
      if(winner === 'X'){
        alert("Player X Won!")
        resetMarkers()
      }else if(winner === 'O'){
        alert("Player O Won!")
        resetMarkers()
      } else if (counter == 16 ){
        alert("Tie")
        resetMarkers()
      }
    }, [markers])
    return (
      <SafeAreaView style={styles.body}>
        <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075' }]}>
          <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
        </View>
        <View style={styles.mainContainer}>
  
          {/* Top Left Cell */}
          <Pressable style={styles.cell_top_left} onPress={()=>markPosition(0)}>
            {markers[0] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[0] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Top Mid Cell 1 */}
          <Pressable style={styles.cell_top_mid1} onPress={()=>markPosition(1)}>
            {markers[1] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[1] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>

            {/* Top Mid Cell 2 */}
            <Pressable style={styles.cell_top_mid2} onPress={()=>markPosition(2)}>
            {markers[2] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[2] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Top Right Cell */}
          <Pressable style={styles.cell_top_right} onPress={()=>markPosition(3)}>
            {markers[3] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[3] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Mid Left Cell */}
          <Pressable style={styles.cell_mid_left} onPress={()=>markPosition(4)}>
            {markers[4] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[4] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Mid Mid Cell 1 */}
          <Pressable style={styles.cell_mid_mid1} onPress={()=>markPosition(5)}>
            {markers[5] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[5] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>

           {/* Mid Mid Cell 2 */}
           <Pressable style={styles.cell_mid_mid2} onPress={()=>markPosition(6)}>
            {markers[6] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[6] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Mid Right Cell */}
          <Pressable style={styles.cell_mid_right} onPress={()=>markPosition(7)}>
            {markers[7] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[7] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Bottom Left Cell */}
          <Pressable style={styles.cell_bottom_left} onPress={()=>markPosition(8)}>
            {markers[8] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[8] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Bottom Mid Cell 1 */}
          <Pressable style={styles.cell_bottom_mid1} onPress={()=>markPosition(9)}>
            {markers[9] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[9] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>

             {/* Bottom Mid Cell 2 */}
             <Pressable style={styles.cell_bottom_mid2} onPress={()=>markPosition(10)}>
            {markers[10] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[10] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Bottom Right Cell */}
          <Pressable style={styles.cell_bottom_right} onPress={()=>markPosition(11)}>
            {markers[11] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[11] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>

           {/* Bottom Left Cell + 4 */}
           <Pressable style={styles.cell_bottom_left} onPress={()=>markPosition(12)}>
            {markers[12] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[12] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Bottom Mid Cell 1 + 4 */}
          <Pressable style={styles.cell_bottom_mid1} onPress={()=>markPosition(13)}>
            {markers[13] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[13] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>

             {/* Bottom Mid Cell 2 + 4 */}
             <Pressable style={styles.cell_bottom_mid2} onPress={()=>markPosition(14)}>
            {markers[14] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[14] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>
  
          {/* Bottom Right Cell + 4 */}
          <Pressable style={styles.cell_bottom_right} onPress={()=>markPosition(15)}>
            {markers[15] === 'X' && <Image source={require('../../assets/img/cross.png')} style={styles.icon} />}
            {markers[15] === 'O' && <Image source={require('../../assets/img/zero.png')} style={styles.icon} />}
          </Pressable>


        </View>
        <Pressable style={styles.cancleBTN} onPress={resetMarkers}>
          <Image source={require('../../assets/img/replay.png')} style={styles.cancelIcon}/>
        </Pressable>
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#fff'
    },
    playerInfo: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      paddingVertical: 20,
      marginTop: 30
    },
    playerTxt: {
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 1.2,
      color: '#fff'
    },
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 60
    },
    cell_top_left: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
      borderBottomWidth: 6
    },
    cell_top_mid1: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 6
    },
    cell_top_mid2: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
        borderLeftWidth: 6
      },
    cell_top_right: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 6,
      borderLeftWidth: 6,
    },



    cell_mid_left: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
    },
    cell_mid_mid1: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cell_mid_mid2: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
      },
    cell_mid_right: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 6,
    },



    cell_bottom_left: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 6,
      borderTopWidth: 6,
    },
    cell_bottom_mid1: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 6,
    },
    cell_bottom_mid2: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 6,
        borderLeftWidth: 6,
      },
    cell_bottom_right: {
      width: windowWidth / 4.2,
      height: windowWidth / 4.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 6,
      borderTopWidth: 6,
    },

    cell_bottom_left: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderTopWidth: 6,
      },
      cell_bottom_mid1: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 6,
      },
      cell_bottom_mid2: {
          width: windowWidth / 4.2,
          height: windowWidth / 4.2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 6,
          borderLeftWidth: 6,
        },
      cell_bottom_right: {
        width: windowWidth / 4.2,
        height: windowWidth / 4.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
        borderTopWidth: 6,
      },



    icon: {
      height: 62,
      width: 62
    },
    cancleBTN: {
      position: 'absolute',
      bottom: 20,
      right: 20
    },
    cancelIcon: {
      height: 80,
      width: 80
    }
  })


export default GamePage4x4