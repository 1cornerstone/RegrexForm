import React from "react";
import {Grid,Card,Button,Header,Form,Select,Image,Label} from "semantic-ui-react"
import tradoImage from '../assest/trado.png'
import image from '../assest/a.jpeg'
import Download from '../util/download'
import canvas from "html2canvas";


class Tradocard extends React.Component{

    constructor(props){
            super(props);
            this.state ={
                role :''
            }
        }

    onRoleSelected =(e)=>{
            this.setState({
                role:e.target.textContent
            })
    };

    onImageSelected =(e)=>{
        let fr = new FileReader();
        let file =  document.getElementById('image');
        let newImage=  document.getElementById('newImage');

        fr.onload = ()=>{
            newImage.src =fr.result
        };

        fr.readAsDataURL(file.files[0])


        //console.log(file)
    };

    onDownloadClick =(e)=>{

        if (this.state.role === '') return alert("Select Role");
        document.getElementById('headName').innerHTML = document.getElementById('name').value;
        document.getElementById('roleLabel').innerHTML = this.state.role;

        let node= document.getElementById('tradoID');
        canvas(node,{ width: 270,
            height: 550}).then(function(canvas) {
        Download(canvas,"TradoCard.png")
        });
        e.preventDefault();
    };

    render() {

        const cardstyle ={
            margin:'10px',
            width:"270px",
            height:'380px',
           padding:"10px",
            border:'2PX',
            borderStyle:"solid",
            borderColor:'orange',
            // backgroundImage:`url(${tradoImage})`,
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            opacity:'0.8'

        };
        const backg= {
            margin:'5px',
        };
        const imageStyle = {
            width: "150px",
            height: '150px',
            marginTop:'0px'
        };

        const role =[
            { key: 'Content Writer', value: 'Content Writer', text: 'Content Writer' },
            { key: 'Developer', value: 'Developer', text: 'Developer' },
            { key: 'Marketing', value: 'Marketing Dept', text: 'Marketing Dept' },
            { key: 'Staff', value: 'Staff', text: 'Staff' },
            { key: 'UI Designer', value: 'UI Designer', text: 'UI Designer' }];

        return(
            <Grid  centered  style={ {marginTop:'20px'}   }>

                <Grid.Row style={ {marginTop:'20px'} }>

                          <Grid.Row centered>
                              <Grid.Column style={ {marginLeft:'-30px'} }>
                                  <Header as="h2"> CREATE TRADO ID CARD</Header>
                              </Grid.Column>
                          </Grid.Row>

                </Grid.Row>

                <Grid.Row style={ {marginTop:'20px'} }>
                      <Card.Group centered>
                          <Grid.Row >
                              <Grid.Column style={ {marginLeft:'-40px'} }>
                                  <div style={cardstyle} id='tradoID'>
                                     <div style={backg}>
                                         <Grid columns='equal'>
                                             <Grid.Row centered>
                                                 <Image src={tradoImage} size='small' style={{  width: "90px"}}  />

                                             </Grid.Row>
                                             <Grid.Row centered >
                                                 <Image src={image} size='medium' circular style={imageStyle}id='newImage'/>
                                             </Grid.Row>
                                             <Grid.Row style={ {marginTop:'-10px'} } >
                                                 <Grid.Column>
                                                      <Header as='h3' id='headName'>Name ?</Header>
                                                 </Grid.Column>
                                             </Grid.Row>
                                             <Grid.Row style={ {marginTop:'-10px'} } >
                                                 <Grid.Column>
                                                   <Label id='roleLabel'>Role ?</Label>
                                                 </Grid.Column>
                                             </Grid.Row>
                                             <Grid.Row  style={ {marginTop:'-20px'} } >
                                                 <Grid.Column floated='left' width={6}>
                                                     <label>Iss. Date:</label> <label>{parseInt( (new Date().getMonth()+1)) +'/'+ String(new Date().getFullYear()).substring(2,4) }</label>
                                                 </Grid.Column>
                                                 <Grid.Column width={6}>
                                                     <label>Exp. Date:</label> <label>{(Math.floor((Math.random() * 11) + 1)) +'/'+ String(parseInt( (new Date().getFullYear() +6))).substring(2,4) }</label>
                                                 </Grid.Column>
                                             </Grid.Row>
                                         </Grid>
                                     </div>
                                  </div>
                              </Grid.Column>
                          </Grid.Row>
                      </Card.Group>
                </Grid.Row>

                <Grid.Row style={ {marginTop:'50px'} }>
                      <Card.Group centered>
                          <Grid.Row >
                              <Grid.Column>
                                  <Form  widths='equal'onSubmit={this.onDownloadClick}>
                                      <Form.Input
                                          label='NAME'
                                          placeholder='NAME'
                                          required
                                          pattern="([a-zA-Z\s]+)"
                                          id='name'
                                          title='Name should contain Alphabet only'
                                          minLength={5}
                                      />

                                      <Select placeholder='ROLE' options={role} style={{color:'inherit', }} onChange={this.onRoleSelected}   id='role'/>

                                      <Form.Input
                                          label='IMAGE'
                                          placeholder='SELECT YOUR PASSPORT'
                                          type='file'
                                          onChange={this.onImageSelected}
                                          id='image'
                                          required
                                      />
                                      <Button basic color='orange' style={ {marginTop:'10px'} }>
                                      Download
                                  </Button>
                                  </Form>


                              </Grid.Column>
                          </Grid.Row>
                      </Card.Group>
                </Grid.Row>
            </Grid>
        );
    }


}

export default Tradocard;