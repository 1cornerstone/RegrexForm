
import React from "react";
import {Button, Card, Form, Grid, Header, Image} from "semantic-ui-react";
import chipImage from "../assest/chip.png";
import tradoImage from "../assest/trado.png";
import mastercardImage from "../assest/master.png";
import leafImage from "../assest/leaf.png";
import nameRegrex  from '../util/CardNameEventRegrex'
import cardNumberRegrex  from '../util/CardNumberEventRegrex'
import cardValidityRegrex  from '../util/CardValidityEventRegrex'
import canvas from 'html2canvas'
import {err} from '../util/gridMargin'
import Download from '../util/download'


class mastercard extends React.Component{

    onNameChange =(e)=>{
       if ( nameRegrex(e.target.value.trim())) return document.getElementById('nameError').innerHTML = "";
        return document.getElementById('nameError').innerHTML= 'Name should contain Alphabet only';
    };

    onCardNumChange =(e)=>{
        if ( cardNumberRegrex(e.target.value.trim())) return document.getElementById('cardError').innerHTML = "";
        return document.getElementById('cardError').innerHTML= 'Card Number should contain Digit <br>and #### - #### - #### - #### format';
    };

    onValidityChange =(e)=>{

        if ( cardValidityRegrex(e.target.value.trim())) return document.getElementById('validityError').innerHTML = "";
        return document.getElementById('validityError').innerHTML= 'mm/yy (01/11) Format';
    };

    onFormSubmit=(e)=>{

        document.getElementById('code').innerHTML = document.getElementById('cardnumber').value;
        document.getElementById('year').innerHTML = document.getElementById('valid').value;
        document.getElementById('cardName').innerHTML =document.getElementById('name').value.toUpperCase();

        canvas(document.getElementById('mastercard'),{ width: 430,
            height: 470}).then(function(canvas) {
        Download(canvas,"Trado_MasterCard.png")
        });

        e.preventDefault();
    };


    render() {
        const cardTemplate = {
            padding: '5px',
            borderRadius: '14px',
            backgroundColor:'orange',
            width:'425px',
            height:'240px',
            opacity:.8
        };



        return(
            <Grid  centered  style={ {marginTop:'20px'}   }>

                <Grid.Row style={ {margin:'40px'} } >
                    <div style={cardTemplate} id='mastercard'>
                            <Grid.Row style={{margin:'10px'}} >
                                <Grid.Column>
                                    <Image src={tradoImage} floated='left' width={5} size='small' style={{  width: "120px", height: '30px', color:'white'}} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image floated='right' width={5} src={leafImage} size='small' style={{  width: "40px" , height: '40px', color:'white'}} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2} style={ {marginTop:'70px'} }>

                                <Grid columns='equal'>
                                    <Grid.Column width={4}>
                                        <Image src={chipImage} size='small' style={{  width: "70px", height: '50px',marginLeft:'5px'}} />
                                    </Grid.Column>
                                    <Grid.Column style={{marginTop:'30px',textAlign:'left', left:'-19px'}}>
                                        <Header as='h2' id='code'>####-####-####-####</Header>
                                        <Header as='h4' style={{marginTop:'-6px',float:'center',textAlign:'center'}} >exp: <label id='year'>##/##</label></Header>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid>
                                    <Grid.Column floated='left' width={10}>
                                        <h3 id='cardName'>
                                            JOE SMITH
                                        </h3>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={5}>
                                        <Image src={mastercardImage} floated='right' width={5} size='small' style={{  width: "100px",height: '70px'}} />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Row>
                    </div>
                </Grid.Row>

                <Grid.Row style={ {marginTop:'50px'} }>
                    <Card.Group centered>
                        <Grid.Row >
                            <Grid.Column >
                                <Form  widths='equal' onSubmit={this.onFormSubmit} id='Form'>
                                    <Form.Input
                                        label='NAME'
                                        placeholder='NAME'
                                        id='name'
                                        style={{width:'300px'}}
                                        onChange={this.onNameChange}
                                        required
                                        pattern="([a-zA-Z\s]+)"
                                        title='Name should contain Alphabet only'
                                        minLength={5}
                                    />
                                    <label id='nameError' style={err}></label>

                                    <Form.Input
                                        label='CARD NUMBER'
                                        id='cardnumber'
                                        placeholder='####-####-####-####'
                                        required
                                        onChange={this.onCardNumChange}
                                        maxLength={20}
                                        pattern='(\d{4})-(\d{4})-(\d{4})-(\d{4})'
                                        title='Card Number should contain Digit <br>and #### - #### - #### - #### format'
                                    />
                                    <label id='cardError' style={err}></label>

                                    <Form.Input
                                        label='Validity'
                                        placeholder='Month/year'
                                        required
                                        id='valid'
                                        onChange={this.onValidityChange}
                                        pattern='(\d{2})\/(\d{2})'
                                        title='mm/yy (01/11) Format'
                                    />
                                    <label id='validityError' style={err}></label>

                                    <Button basic color='orange' style={ {marginTop:'10px'} } className='download'>
                                        Download
                                    </Button>
                                </Form>


                            </Grid.Column>
                        </Grid.Row>
                    </Card.Group>
                </Grid.Row>
            </Grid>
        )
    }
}

export default mastercard;
