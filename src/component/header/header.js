
import { AppBar, Typography, makeStyles} from "@material-ui/core";
import React from "react"; 


const useStyles = makeStyles ((theme) => ({
    header: {

    
        backgroundColor:"#010161",
    },
        logo: {
            fontFamily: "monospace",
            fontWeight: 300,
            color: "#FFFEFE",
            textAlign: 'center',
        },
}));

export default function Header() {
    const {header, logo} = useStyles();

    const displayDesktop = () => {
    return <h1>{IBMlogo}</h1>;
    };

    const IBMlogo = (
       
        <Typography variant="h6" component="h1" className={logo}>
            
            IBM CHECKLIST - GROUP 10
        </Typography>
    );

    return (
        <header>
            <AppBar className = "header">{displayDesktop()}</AppBar>
        </header>
    );
}