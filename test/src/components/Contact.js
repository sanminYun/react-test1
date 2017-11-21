import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword:'',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }],


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);



    }

    handleCreate(contact){
        this.setState({
            contactData: update(this.state.contactData,{$push: [contact]})
        });
    }

    handleRemove(){
        if(this.state.selectedKey < 0){
            return;
        }
        this.setState({
            contactData: update(this.state.contactData, {$splice:[[this.state.selectedKey,1]] }),
            selectedKey: -1
        });

    }

    handleEdit(name, phone){
        this.setState({
            contactData:update(this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name:{ $set: name},
                        phone:{$set: phone}
                    }
                }

                )
        });

    }

    componentWillMount(){
        const contactData = localStorage.contactData;

        if(contactData){
            this.setState({
                contactData: JSON.parse(contactData)
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)){
            localStorage.contactData = JSON.stringify(this.state.contactData)
        }

    }



    handleChange(e){
        this.setState({
            keyword: e.target.value,
        });

    }
    handleClick(key){
        this.setState({
            selectedKey: key
        });

    }


    render() {


        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return (contact.name.indexOf(this.state.keyword) > -1) || (contact.name.toLowerCase().indexOf(this.state.keyword) > -1);
                    //indexOf로 필터링 결과 일치하는 문자열이 없는 경우는 -1을 반환하기 때문에, -1보다 큰 경우만 리턴하면 된다.
                }
            );


            return data.map((contact, i) => {


                return (<ContactInfo
                            contact={contact}
                            key={i}
                            onClick={
                                () => this.handleClick(i)
                            }
                />);
            });
        };




        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name = "keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                >
                </input>

                <div>
                    {mapToComponents(this.state.contactData)}

                </div>


                <ContactDetails
                    isSelected={this.state.selectedKey !== -1}
                    contact = {this.state.contactData[this.state.selectedKey]}
                    index = {this.state.selectedKey}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                    onCreate={this.handleCreate}
                />
            </div>
        );


    }



}