import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...createContext(
    mode === "dark"
      ? {
          //color
          blue: {
            100: "#cce3fa",
            200: "#99c7f5",
            300: "#66abf0",
            400: "#338feb",
            500: "#0073e6",
            600: "#005cb8",
            700: "#00458a",
            800: "#002e5c",
            900: "#00172e",
          },
          orange: {
            100: "#ffebcc",
            200: "#ffd699",
            300: "#ffc266",
            400: "#ffad33",
            500: "#ff9900",
            600: "#cc7a00",
            700: "#995c00",
            800: "#663d00",
            900: "#331f00",
          },
          grey: {
            100: "#fdfdfd",
            200: "#fbfbfb",
            300: "#f9f9f9",
            400: "#f7f7f7",
            500: "#f5f5f5",
            600: "#c4c4c4",
            700: "#939393",
            800: "#626262",
            900: "#313131",
          },
          green: {
            100: "#e0f5e0",
            200: "#c2ebc2",
            300: "#a3e0a3",
            400: "#85d685",
            500: "#66cc66",
            600: "#52a352",
            700: "#3d7a3d",
            800: "#295229",
            900: "#142914",
          },
        }
      : {
          //color
          blue: {
            100: "#00172e",
            200: "#002e5c",
            300: "#00458a",
            400: "#005cb8",
            500: "#0073e6",
            600: "#338feb",
            700: "#66abf0",
            800: "#99c7f5",
            900: "#cce3fa",
          },
          orange: {
            100: "#331f00",
            200: "#663d00",
            300: "#995c00",
            400: "#cc7a00",
            500: "#ff9900",
            600: "#ffad33",
            700: "#ffc266",
            800: "#ffd699",
            900: "#ffebcc",
          },
          grey: {
            100: "#313131",
            200: "#626262",
            300: "#939393",
            400: "#c4c4c4",
            500: "#f5f5f5",
            600: "#f7f7f7",
            700: "#f9f9f9",
            800: "#fbfbfb",
            900: "#fdfdfd",
          },
          green: {
            100: "#142914",
            200: "#295229",
            300: "#3d7a3d",
            400: "#52a352",
            500: "#66cc66",
            600: "#85d685",
            700: "#a3e0a3",
            800: "#c2ebc2",
            900: "#e0f5e0",
          },
        }
  ),
});

//mui theme
export const themeSettings=(mode)=>{
    const colors=tokens(mode)
    return {
        palette:{
            mode:mode,
            ...colors(mode==="dark"
             ?{
                primary:{
                    main:colors.blueDark[500],
                },
                secondary:{
                    main:colors.greenDark[500],
                },
                neutral:{
                    dark:colors.greyDark[700],
                    main:colors.greyDark[500],
                    light:colors.greyDark[100]
                },
                background:{
                    default:colors.blueDark[500]
                }
             }:{
                    primary:{
                        main:colors.blue[500],
                    },
                    secondary:{
                        main:colors.green[500],
                    },
                    neutral:{
                        dark:colors.grey[700],
                        main:colors.grey[500],
                        light:colors.grey[100]
                    },
                    background:{
                        default:"#fcfcfc"
                    }
             })
        },
        typograpgy:{
            fontFamily:["AR One Sans","sans-serif"].join(","),
            fontSize:12,
            h1:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:40,
            },
            h2:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:32,
            },
            h3:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:24,
            },
            h4:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:18,
            },
            h5:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:14,
            },
            h6:{
                fontFamily:["AR One Sans","sans-serif"].join(","),
                fontSize:12,
            },
        }
    }
}

//context for color mode
export const ColorModeContext =createContext({
    toggleColorMode:()=>{}
})
export const useMode=()=>{
    const[mode,setMode]=useState("dark")
    const colorMode=useMemo(
        ()=>({
            toggleColorMode:()=>
            setMode((prev)=>(prev==="light"?"dark":"light"))
        }),
        []
    )

    const theme =  useMemo(()=>createTheme(themeSettings(mode)),[mode])

    return [theme,colorMode]
}