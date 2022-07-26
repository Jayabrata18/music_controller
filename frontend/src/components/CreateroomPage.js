import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelpertext from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import formControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default class CreateroomPage extends Component {
    defaultVotes = 2;
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <Grid container spacing={1} >
            <Grid item xs={12} align="center">
                <Typography  component="h4" variant="h4" >
                    Create a room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl  component="fieldset">
                    <FormHelpertext>
                        <div align="center">Guest Control of playback State</div>
                    </FormHelpertext>
                </FormControl>
                
            </Grid>
        </Grid>
        );
    }
}