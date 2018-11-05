

import React, { Component } from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        }
        this.addContact=this.addContact.bind(this);
    }

    addContact(contact){
        console.log('contact:', contact);
        this.setState({
            contacts: [...this.state.contacts, contact]
        
        })
    }
   

    render(){
        return (
            <div className="container">
                <h1 className="text-center my-3">Adress Book</h1>
                <div className="row">
                    <div className="col-4">
                       <ContactForm add={this.addContact}/> 
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}

export default App;