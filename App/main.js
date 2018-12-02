import React, { Component } from "react";
import { View } from "react-native";
import {Constants} from "expo";
import Header from "../Components/header";
import SearchBar from "../Components/searchBar";
import NewsList from "../Components/newsList";
export default class searchBar extends Component {
    render() {
        return(
            <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
                <Header/>
                <SearchBar/>
                <NewsList/>                
            </View>
        )
    }
}
