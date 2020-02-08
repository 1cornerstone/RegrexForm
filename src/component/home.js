import React from 'react'
import { Button, Card,List,Icon} from 'semantic-ui-react'


class home extends React.Component{

    onMastercardBtnClicked =()=>{
       this.props.history.push('/mastercard');
    };

    onIDCardBtnClicked =()=>{
    this.props.history.push('/idcard');
    };
    render() {
        return(  <Card.Group>
            <Card centered style={{marginTop:'50px'}}>
                <Card.Content>
                    <Card.Header> Trado </Card.Header>
                    <Card.Meta>@1cornerstone </Card.Meta>
                    <Card.Description>
                        <List>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>React</List.Header>
                                    <List.Description>
                                        Js Frontend Framework to create interactive UIs.
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Trado MasterCard</List.Header>
                                    <List.Description>
                                        Generate Mastercard after User fill details required
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Trado ID-Card</List.Header>
                                    <List.Description>
                                        Generate ID-Card after User fill details required
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <Icon name='right triangle' />
                                <List.Content>
                                    <List.Header>Javascript Regrex</List.Header>
                                    <List.Description>
                                      Use to validate User input to avoid boilerplate code and make validation accurate
                                    </List.Description>
                                </List.Content>
                            </List.Item>

                        </List>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group className='btngroup'>
                        <Button positive onClick={this.onIDCardBtnClicked} className='IDcardbtn'  >Create ID CARD</Button>
                        <Button.Or />
                        <Button onClick={this.onMastercardBtnClicked} className='masterCardbtn'>Mastercard</Button>
                    </Button.Group>
                </Card.Content>
            </Card>

        </Card.Group>)
    }

}

export default home